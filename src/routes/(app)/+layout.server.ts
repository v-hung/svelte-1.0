import { redirect } from "@sveltejs/kit"
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({ locals, url }) => {
  if (!locals.session.client) {
    return null
  }

  const user = await prisma.user.findUnique({
    where: {
      id: locals.session.client?.user?.id || ""
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true
    }
  })

  return { user };
}