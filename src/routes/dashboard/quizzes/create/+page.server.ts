// export const prerender = true;
export const ssr = false;

import prisma from '$lib/server/prismadb';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import slugify from "slugify";

export const actions: Actions = {
	create: async ({ request }) => {
		const data = await request.formData()
    let title = data.get('title') as string
    let slug = data.get('slug') as string
    let passages = JSON.parse(data.get('passages') as string || '[]')

    if (!title) {
      fail(400, {title, slug, passages, error: 'Title is required'})
    }

    if (!slug) {
      slug = slugify(title, '_')
    }

    console.log(passages, data.get('passages'))
    // const quiz = await prisma.quizzes.create({
    //   data: {
    //     title,
    //     slug,

    //   }
    // })

    return {}
	}
};