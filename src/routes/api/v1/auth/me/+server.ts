import { error } from '@sveltejs/kit';
import type { RequestHandler } from "./$types";
import { json } from '@sveltejs/kit';

import prisma from "$lib/server/prismadb";
import { verifyToken } from '$lib/utils/jwt';

export const GET:RequestHandler = async ({ locals, request, cookies }) => {
  // const token = request.headers.get('authorization')?.split(' ')[1]  || cookies.get('token') || null

  // const decoded = await verifyToken(token)

  let user_id = locals.session?.user?.id

  if (!user_id) {
    throw error(401, 'Unauthorized');
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
  })

  if (!user) {
    throw error(404, 'User not exists');
  }

  return json({user});
}