import { e as error, j as json } from './index2-e4abb57b.js';
import { p as prisma } from './prismadb-a6fac679.js';
import '@prisma/client';

const perPage = 15;
const GET = async ({ locals, request, cookies, params, url }) => {
  let user_id = locals.session?.user?.id;
  if (!user_id) {
    throw error(401, "Unauthorized");
  }
  let roomId = params.roomId;
  let page = +url.searchParams.get("page") || 1;
  const messages = await prisma.messages.findMany({
    take: perPage,
    skip: (page - 1) * perPage,
    where: {
      room: {
        users: {
          some: {
            id: user_id
          }
        },
        id: roomId
      }
    },
    orderBy: { createdAt: "desc" }
  });
  return json({ messages, page, perPage });
};

export { GET };
//# sourceMappingURL=_server.ts-4a42dd91.js.map
