import { redirect } from "@sveltejs/kit"
import type { LayoutLoad } from "./$types"

export const load: LayoutLoad = async ({ parent, url }) => {
  const { user } = await parent()
  if (!user && url.pathname != '/dashboard/login') {
    throw redirect(302, "/auth/login")
  }
  return {}
}