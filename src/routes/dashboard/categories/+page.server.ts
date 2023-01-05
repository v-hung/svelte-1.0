import type { PageServerLoad } from "./$types"
import { fail, redirect, error } from '@sveltejs/kit';
import prisma from "$lib/server/prismadb";

export const load: PageServerLoad = async (event) => {
  // await new Promise(res => setTimeout(() => res(1), 500))

  return {
    products: new Array(10).fill(0)
  }
}
