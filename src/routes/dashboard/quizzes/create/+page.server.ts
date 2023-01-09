// export const prerender = true;
export const ssr = false;

import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	create: async ({ request }) => {
		const data = await request.formData()
    let title = data.get('title')
    let slug = data.get('slug')
    let passages = JSON.parse(data.get('passages') as string || '')

    console.log(passages)

    return {}
	}
};