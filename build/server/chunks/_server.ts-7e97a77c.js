import { e as error, j as json } from './index2-e4abb57b.js';
import { p as prisma } from './prismadb-a6fac679.js';
import bcrypt from 'bcrypt';
import { r as removeSpace } from './validator-edcfa16f.js';
import { s as signToken } from './jwt-de383078.js';
import '@prisma/client';
import 'jsonwebtoken';
import './private-ddb7fb3a.js';

const POST = async ({ request, cookies }) => {
  const body = await request.json();
  let email = removeSpace(body.email || ""), password = body.password || "", remember = body.remember || false;
  const user_data = await prisma.user.findUnique({
    where: {
      email
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      password: true
    }
  });
  if (!user_data) {
    throw error(404, "Email not exists");
  }
  if (!await bcrypt.compare(password, user_data.password || "")) {
    throw error(401, "Password incorrect");
  }
  const user = {
    id: user_data.id,
    name: user_data.name,
    email: user_data.email,
    image: user_data.image
  };
  const token = await signToken(user);
  const refresh_token = await signToken(user, remember ? "60d" : "1d");
  var expires_refresh_token = new Date();
  expires_refresh_token.setDate(expires_refresh_token.getDate() + (remember ? 60 : 1));
  await prisma.verificationToken.create({
    data: {
      identifier: user.id,
      token: refresh_token,
      expires: expires_refresh_token
    }
  });
  return json({
    user,
    expiresIn: "1h",
    token,
    refresh_token
  });
};

export { POST };
//# sourceMappingURL=_server.ts-7e97a77c.js.map
