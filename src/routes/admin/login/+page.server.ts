import { fail, redirect } from '@sveltejs/kit';
import prisma from "$lib/server/prismadb";
import bcrypt from 'bcrypt'
import { removeSpace } from '$lib/utils/validator'
import { signToken } from '$lib/utils/jwt'

export const load = async ({ locals }) => {
  if (locals.session.admin) {
    throw redirect(302, "/admin")
  }

  return {};
}

export const actions = {
  login: async ({ cookies, request, url }) => {
    const data = await request.formData()

    let email: string = removeSpace(data.get('email') as unknown as string || ''),
      password: string = data.get('password') as string || '',
      remember: boolean = data.get('remember') as unknown as boolean || false

    const user_data = await prisma.admin.findUnique({
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
      return fail(400, { email, remember, error: 'Email not found' });
    }

    if (!await bcrypt.compare(password, user_data.password || '')) {
      return fail(400, { email, remember, error: 'Password is corrected' });
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

    cookies.set('token_admin', token, { path: '/', httpOnly: true, maxAge: 3600 })
    cookies.set('refresh_token_admin', refresh_token, { path: '/', httpOnly: true, maxAge: remember ? 2592000 : 86400 })

    throw redirect(302, url.searchParams.get('redirect_url') || "/admin")

    return { success: true }
  },
  register: async (event) => {
    // TODO register the user
  },
  logout: async (event) => {
    const refresh_token = event.cookies.get('refresh_token_admin')

    const deleteUser = await prisma.verificationToken.deleteMany({
      where: {
        token: refresh_token
      },
    })

    event.cookies.delete('token_admin', { path: '/' })
    event.cookies.delete('refresh_token_admin', { path: '/' })
    event.locals.session = null

    // return { success: true }
  }
};