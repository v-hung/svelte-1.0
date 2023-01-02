import { error, redirect, json } from '@sveltejs/kit';
import type { RequestHandler } from "./$types"

import { GITHUB_ID, GITHUB_SECRET, GOOGLE_ID, GOOGLE_SECRET } from "$env/static/private"

export const POST: RequestHandler = async ({ request, url }) => {
  const body = await request.json()
  let provider: string = body.provider || ''

  let redirect_uri = ""

  if (provider == "github") {
    redirect_uri = `https://github.com/login/oauth/authorize?client_id=${GITHUB_ID}`
  }

  if (redirect_uri) {
    return json({
      redirect_uri
    })
  }
  else {
    throw error(400, 'Can not find provider');
  }
}