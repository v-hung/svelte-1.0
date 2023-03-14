import { redirect } from "@sveltejs/kit"
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({ locals, url }) => {
  if (!locals.session.admin) {
    throw redirect(302, "/admin/login")
  }

  const user = await prisma.admin.findUnique({
    where: {
      id: locals.session.admin?.user?.id || ""
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      password: true
    }
  })

  if (!user) {
    throw redirect(302, "/admin/login")
  }

  return { user };
}