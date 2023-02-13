import { e as error, j as json } from './index2-e4abb57b.js';
import { p as prisma } from './prismadb-a6fac679.js';
import 'jsonwebtoken';
import '@prisma/client';

const GET = async ({ locals, request, cookies }) => {
  let user_id = locals.session?.user?.id;
  if (!user_id) {
    throw error(401, "Unauthorized");
  }
  const user = await prisma.user.findUnique({
    where: {
      id: user_id || ""
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
  return json({ user });
};

export { GET };
//# sourceMappingURL=_server.ts-51c9d0f0.js.map
