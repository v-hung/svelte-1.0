import { e as error, j as json } from './index2-e4abb57b.js';
import { p as prisma } from './prismadb-a6fac679.js';
import '@prisma/client';

const GET = async ({ locals, request, cookies }) => {
  let user_id = locals.session?.user?.id;
  if (!user_id) {
    throw error(401, "Unauthorized");
  }
  const rooms = await prisma.rooms.findMany({
    where: {
      users: {
        some: {
          id: user_id
        }
      }
    },
    include: {
      users: true
    }
  });
  return json({ rooms });
};
const POST = async ({ locals, request, cookies }) => {
  let user_id = locals.session?.user?.id;
  if (!user_id) {
    throw error(401, "Unauthorized");
  }
  const body = await request.json();
  let contactId = body.contactId;
  let room = null;
  room = await prisma.rooms.findFirst({
    where: {
      users: {
        none: {
          id: {
            notIn: [user_id, contactId]
          }
        }
      }
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
  if (!room)
    room = await prisma.rooms.create({
      data: {
        users: {
          connect: [
            { id: user_id },
            { id: contactId }
          ]
        }
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

export { GET, POST };
//# sourceMappingURL=_server.ts-43c822e6.js.map
