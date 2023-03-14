import { signToken, verifyToken } from "$lib/utils/jwt";
import type { Handle } from "@sveltejs/kit";

import prisma from "$lib/server/prismadb"
// const guards = [
//   {
//     name : 'user',
//     provider: 'users'
//   },
//   {
//     name : 'admin',
//     provider: 'admins'
//   },
// ]

export const handle: Handle = async ({ event, resolve }) => {
  // client check token
  const tokenClient = event.request.headers.get('authorization')?.split(' ')[1] 
    || event.cookies.get('token')
    // || event.url.searchParams.get('token') // not use in hook
    || "token"

  const decodedClient = await verifyToken(tokenClient)

  if (decodedClient) {
    event.locals.session =  {
      ...event.locals.session,
      client: {
        user: decodedClient,
        expires: new Date(decodedClient.exp * 1000).toISOString()
      }
    }
  }
  else {
    // const body = await event.request.json()
    const refresh_token = event.cookies.get('refresh_token')
      // || event.url.searchParams.get('refresh_token') // not use in hook
      || "refresh_token"

    const data_refresh_token = await refreshToken(refresh_token)

    if (data_refresh_token) {
      event.locals.session = {
        ...event.locals.session,
        client: {
          user: data_refresh_token.user,
          expires: new Date(new Date().getTime() + 3600000).toISOString()
        }
      }

      event.cookies.set('token', data_refresh_token.token, { path: '/', httpOnly: true, maxAge: 3600 })
    }
    else {
      event.locals.session = {
        ...event.locals.session,
        client: null
      }
    }
  }

  // admin check token
  const tokenAdmin = event.cookies.get('token_admin') || "token_admin"

  const decodedAdmin = await verifyToken(tokenAdmin)

  if (decodedAdmin) {
    event.locals.session =  {
      ...event.locals.session,
      admin: {
        user: decodedAdmin,
        expires: new Date(decodedAdmin.exp * 1000).toISOString()
      }
    }
  }
  else {
    // const body = await event.request.json()
    const refresh_token = event.cookies.get('refresh_token_admin')
      // || event.url.searchParams.get('refresh_token') // not use in hook
      || "refresh_token_admin"

    const data_refresh_token = await refreshTokenAdmin(refresh_token)

    if (data_refresh_token) {
      event.locals.session = {
        ...event.locals.session,
        admin: {
          user: data_refresh_token.user,
          expires: new Date(new Date().getTime() + 3600000).toISOString()
        }
      }

      event.cookies.set('token_admin', data_refresh_token.token, { path: '/', httpOnly: true, maxAge: 3600 })
    }
    else {
      event.locals.session = {
        ...event.locals.session,
        admin: null
      }
    }
  }

  // if (event.url.pathname.split('/')[1] == "admin" && event.locals.session == null) {
  //   return new Response('Redirect', {status: 303, headers: { Location: '/admin/login' }});
  // }
  
  const response = await resolve(event)

  return response;
}

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

const refreshTokenAdmin = async (refresh_token) => {
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

  const user = await prisma.admin.findUnique({
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