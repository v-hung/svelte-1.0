import { e as error, j as json } from './index2-e4abb57b.js';
import { p as prisma } from './prismadb-a6fac679.js';
import '@prisma/client';

const GET = async ({ locals }) => {
  const session = await locals.session;
  if (!session.user) {
    throw error(401, "Invalid Token");
  }
  const user = await prisma.user.findUnique({
    where: {
      id: session?.user?.id || ""
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
  return json(user);
};

export { GET };
//# sourceMappingURL=_server.ts-e5d6b24e.js.map
