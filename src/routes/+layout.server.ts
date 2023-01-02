import type { LayoutServerLoad } from "./$types"
import { fail, redirect, error } from '@sveltejs/kit';
import prisma from "$lib/server/prismadb";

export const load: LayoutServerLoad = async (event) => {
  // if (!event.locals.session) {
  //   throw redirect(300, '/')
  // }

  const user = await prisma.user.findUnique({
    where: {
      id: event.locals.session?.user?.id || ""
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true
    }
  })

  return {
    user: user
  }
}
