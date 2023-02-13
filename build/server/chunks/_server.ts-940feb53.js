import { e as error, j as json } from './index2-e4abb57b.js';
import { p as prisma } from './prismadb-a6fac679.js';
import '@prisma/client';

const GET = async ({ locals, request, params }) => {
  let user_id = locals.session?.user?.id;
  if (!user_id) {
    throw error(401, "Unauthorized");
  }
  let roomId = params.roomId;
  const room = await prisma.rooms.findUnique({
    where: {
      id: roomId
    },
    select: {
      id: true,
      users: {
        select: {
          id: true,
          email: true,
          name: true,
          image: true
        }
      }
    }
  });
  return json({ room });
};

export { GET };
//# sourceMappingURL=_server.ts-940feb53.js.map
