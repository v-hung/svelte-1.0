import { error } from '@sveltejs/kit';
import type { RequestHandler } from "./$types";
import { json } from '@sveltejs/kit';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import bcrypt from 'bcrypt'
import { removeSpace } from '$lib/utils/validator'
import { signToken, verifyToken } from '$lib/utils/jwt'
import * as cookie from 'cookie';

export const POST:RequestHandler = async ({  cookies, request  }) => {
  const body = await request.json()
  const refresh_token = body.refresh_token || cookies.get('refresh_token')

  if (!refresh_token) {
    throw error(404, 'Refresh token not found')
  }

  const refresh_token_db = await prisma.verificationToken.findFirst({
    where: {
      token: refresh_token,
      expires: {
        gte: new Date()
      }
    }
  })

  if (!refresh_token_db) {
    throw error(403, 'A token is required for authentication')
  }

  const decoded = await verifyToken(refresh_token);

  // console.log(decoded)

  const user = await prisma.user.findUnique({
    where: {
      id: decoded?.id || "0"
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true
    }
  })

  // console.log(user)

  if (!user) {
    throw error(404, 'User not exists')
  }

  const token = await signToken(user)

  return json({
    user,
    token,
    expiresIn: '1h',
  })
}