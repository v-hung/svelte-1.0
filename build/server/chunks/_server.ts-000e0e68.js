import { e as error, j as json } from './index2-e4abb57b.js';
import { PrismaClient } from '@prisma/client';
import 'bcrypt';
import { v as verifyToken, s as signToken } from './jwt-ee429d29.js';
import 'jsonwebtoken';
import './private-a9b5a848.js';

const prisma = new PrismaClient();
const POST = async ({ cookies, request }) => {
  const body = await request.json();
  const refresh_token = body.refresh_token || cookies.get("refresh_token");
  if (!refresh_token) {
    throw error(404, "Refresh token not found");
  }
  const refresh_token_db = await prisma.verificationToken.findFirst({
    where: {
      token: refresh_token,
      expires: {
        gte: new Date()
      }
    }
  });
  if (!refresh_token_db) {
    throw error(403, "A token is required for authentication");
  }
  const decoded = await verifyToken(refresh_token);
  const user = await prisma.user.findUnique({
    where: {
      id: decoded?.id || "0"
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true
    }
  });
  if (!user) {
    throw error(404, "User not exists");
  }
  const token = await signToken(user);
  return json({
    user,
    token,
    expiresIn: "1h"
  });
};

export { POST };
//# sourceMappingURL=_server.ts-000e0e68.js.map
