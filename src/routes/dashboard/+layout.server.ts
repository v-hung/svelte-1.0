import { redirect } from "@sveltejs/kit"
import type { LayoutLoad } from "./$types"

export const load: LayoutLoad = async ({ parent, url }) => {
  const { session } = await parent()
  if (!session?.user && url.pathname != '/dashboard/login') {
    throw redirect(302, "/dashboard/login")
  }
  return {}
}