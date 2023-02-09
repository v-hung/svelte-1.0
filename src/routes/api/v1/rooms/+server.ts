import { error } from '@sveltejs/kit';
import type { RequestHandler } from "./$types";
import { json } from '@sveltejs/kit';

import prisma from "$lib/server/prismadb";

export const GET:RequestHandler = async ({ locals, request, cookies }) => {
  let user_id = locals.session?.user?.id

  if (!user_id) {
    throw error(401, 'Unauthorized');
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
  })

  return json({rooms});
}

export const POST:RequestHandler = async ({ locals, request, cookies }) => {
  let user_id = locals.session?.user?.id

  if (!user_id) {
    throw error(401, 'Unauthorized');
  }

  const body = await request.json()
  let contactId: string = body.contactId

  const room = await prisma.rooms.create({
    data: {
      users: {
        connect: [
          { id: user_id },
          { id: contactId }
        ]
      }
    },
    select: {
      users: {
        select: {
          id: true,
          email: true,
          name: true,
          image: true
        }
      }
    }
  })

  return json({room});
}