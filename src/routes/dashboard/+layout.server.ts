import { redirect } from "@sveltejs/kit"
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({ locals, url }) => {
  console.log('hihi')
  if (!locals.session) {
    throw redirect(302, "/auth/login")
  }
  return {}
}