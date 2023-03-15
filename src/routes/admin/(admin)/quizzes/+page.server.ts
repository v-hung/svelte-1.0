import { fail, redirect, error } from '@sveltejs/kit';
import prisma from "$lib/server/prismadb";

export const load = async ({url}) => {
  let page = url.searchParams.get('page') as any as number || 1
  let total = url.searchParams.get('total') as any as number || 10
  // await new Promise(res => setTimeout(() => res(1), 500))
  const quizzes = await prisma.quizzes.findMany({
    skip: (page - 1) * total,
    take: total,
  })

  return {
    entries: quizzes,
    page: page,
    total: total
  }
}
