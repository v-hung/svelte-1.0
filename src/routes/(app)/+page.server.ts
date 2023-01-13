import type { PageServerLoad } from "./$types"
import { fail, redirect, error } from '@sveltejs/kit';
import prisma from "$lib/server/prismadb";

export const load: PageServerLoad = async (event) => {
  const quizzes = await prisma.quizzes.findMany()

  return {
    quizzes: quizzes
  }
}
