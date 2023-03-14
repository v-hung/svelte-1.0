import { e as error, j as json } from './index2-e4abb57b.js';
import { c as client } from './prismadb-d61ddf89.js';
import '@prisma/client';

const GET = async ({ locals }) => {
  const session = await locals.session;
  if (!session.user) {
    throw error(401, "Invalid Token");
  }
  const user = await client.user.findUnique({
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
//# sourceMappingURL=_server.ts-d3373cf1.js.map
