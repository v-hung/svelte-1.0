import { j as json } from './index2-e4abb57b.js';
import { p as prisma } from './prismadb-a6fac679.js';
import 'jsonwebtoken';
import '@prisma/client';

const GET = async ({ locals, request, cookies }) => {
  const users = await prisma.user.findMany();
  return json({ users });
};

export { GET };
//# sourceMappingURL=_server.ts-7ed0839d.js.map
