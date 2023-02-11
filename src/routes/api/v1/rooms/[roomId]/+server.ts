import { error } from '@sveltejs/kit';
import type { RequestHandler } from "./$types";
import { json } from '@sveltejs/kit';

import prisma from "$lib/server/prismadb";

export const GET:RequestHandler = async ({ locals, request, params }) => {
  let user_id = locals.session?.user?.id

  if (!user_id) {
    throw error(401, 'Unauthorized');
  }
  let roomId = params.roomId

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
          image: true,
        }
      }
    }
  })

  return json({room});
}