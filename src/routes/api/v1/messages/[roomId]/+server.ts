import { error } from '@sveltejs/kit';
import type { RequestHandler } from "./$types";
import { json } from '@sveltejs/kit';

import prisma from "$lib/server/prismadb";

const perPage = 15

export const GET:RequestHandler = async ({ locals, request, cookies, params, url }) => {
  let user_id = locals.session?.user?.id

  if (!user_id) {
    throw error(401, 'Unauthorized');
  }

  let roomId = params.roomId
  let page: number = +url.searchParams.get('page')|| 1

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
      },
    }
  })

  return json({messages, page, perPage});
}