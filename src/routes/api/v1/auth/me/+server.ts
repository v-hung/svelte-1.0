import { error } from '@sveltejs/kit';
import type { RequestHandler } from "./$types";
import { json } from '@sveltejs/kit';

import prisma from "$lib/server/prismadb";

export const GET:RequestHandler = async ({ locals }) => {
  const session = await locals.session
  if (!session.user) {
    throw error(401, 'Invalid Token');
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
  })

  if (!user) {
    throw error(404, 'User not exists');
  }

  return json(user);
}