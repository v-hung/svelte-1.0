import { error } from '@sveltejs/kit';
import type { RequestHandler } from "./$types";
import { json } from '@sveltejs/kit';

import prisma from "$lib/server/prismadb";

import bcrypt from 'bcrypt'
import { removeSpace } from '$lib/utils/validator'
import { signToken } from '$lib/utils/jwt'

export const POST: RequestHandler = async ({ request, cookies }) => {
  const body = await request.json()
  let email: string = removeSpace(body.email || ''),
      password: string = body.password || '',
      remember: boolean = body.remember || false

  const user_data = await prisma.user.findUnique({
    where: {
      email: email
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      password: true
    }
  })

  if (!user_data) {
    throw error(404, 'Email not exists');
  }

  if (!await bcrypt.compare(password, user_data.password || '')) {
    throw error(401, 'Password incorrect');
  }
  
  const user = {
    id: user_data.id,
    name: user_data.name,
    email: user_data.email,
    image: user_data.image,
  }

  const token = await signToken(user)
  const refresh_token = await signToken(user, remember ? '60d' : '1d')

  // console.log(refresh_token)
  var expires_refresh_token = new Date();
  expires_refresh_token.setDate(expires_refresh_token.getDate() + (remember ? 60 : 1));

  await prisma.verificationToken.create({
    data: {
      identifier: user.id,
      token: refresh_token,
      expires: expires_refresh_token
    },
  })

  // return {
  //   status: 200,
  //   body: {
  //     user,
  //     expiresIn: '1h',
  //     token,
  //     refresh_token
  //   },
  //   headers: {
  //     'set-cookie': [
  //       cookie.serialize('token', token, { maxAge: 3600, path: '/' }),
  //       cookie.serialize('refresh_token', refresh_token, { maxAge: remember ? 86400 * 60 : 86400, path: '/', httpOnly: true })
  //     ]
  //   }
  // }

  return json({
    user,
      expiresIn: '1h',
      token,
      refresh_token
  })
}