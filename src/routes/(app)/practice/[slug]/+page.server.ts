import type { PageServerLoad } from "./$types"
import { fail, redirect, error } from '@sveltejs/kit';
import prisma from "$lib/server/prismadb";

export const load: PageServerLoad = async (event) => {
  const quiz = await prisma.quizzes.findFirst({
    include: {
      passages: {
        include: {
          group_questions: {
            include: {
              questions: true
            }
          }
        }
      }
    }
  })

  if (!quiz) {
    throw redirect(302, "/")
  }

  return {
    quiz
  }
}