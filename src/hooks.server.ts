// import SvelteKitAuth from "@auth/sveltekit"
// import GitHub from '@auth/core/providers/github';
// import Google from '@auth/core/providers/google';
// import CredentialsProvider from "@auth/core/providers/credentials";
// import { GITHUB_ID, GITHUB_SECRET, GOOGLE_ID, GOOGLE_SECRET } from "$env/static/private"

// import { PrismaAdapter } from "@next-auth/prisma-adapter"
// import type { Adapter } from '@auth/core/adapters';
import { signToken, verifyToken } from "$lib/utils/jwt";
import type { Handle } from "@sveltejs/kit";

import prisma from "$lib/server/prismadb"

const refreshToken = async (refresh_token) => {
  const refresh_token_db = await prisma.verificationToken.findFirst({
    where: {
      token: refresh_token,
      expires: {
        gte: new Date()
      }
    }
  })

  if (!refresh_token_db) {
    return null
  }

  const decoded = await verifyToken(refresh_token)

  const user = await prisma.user.findUnique({
    where: {
      id: decoded?.id || "0"
    },
    select: {
      id: true
    }
  })

  if (!user) {
    return null
  }

  const token = await signToken(user)

  return {
    user,
    token
  }
}

export const handle: Handle = async ({ event, resolve }) => {
  const token = event.request.headers.get('authorization')?.split(' ')[1] 
    || event.cookies.get('token')
    || event.url.searchParams.get('token')
    || "token"

  const decoded = await verifyToken(token)

  if (decoded) {
    event.locals.session =  {
      user: decoded,
      expires: new Date(decoded.exp * 1000).toISOString()
    }
  }
  else {
    // const body = await event.request.json()
    const refresh_token = event.cookies.get('refresh_token')
      || event.url.searchParams.get('refresh_token')
      || "refresh_token"

    const data_refresh_token = await refreshToken(refresh_token)

    if (data_refresh_token) {
      console.log('refresh_token')
      event.locals.session = {
        user: data_refresh_token.user,
        expires: new Date(new Date().getTime() + 3600000).toISOString()
      }

      event.cookies.set('token', data_refresh_token.token, { path: '/', httpOnly: true, maxAge: 3600 })
    }
    else {
      event.locals.session = null
    }
  }
  
  const response = await resolve(event)

  return response;
}