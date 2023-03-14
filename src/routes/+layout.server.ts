import type { LayoutServerLoad } from "./$types"
import { fail, redirect, error } from '@sveltejs/kit';
import prisma from "$lib/server/prismadb";

export const load = async ({locals}) => {
  return {}
}
