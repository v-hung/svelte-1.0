import { error } from '@sveltejs/kit';
import type { RequestHandler } from "./$types";
import { json } from '@sveltejs/kit';

import prisma from "$lib/server/prismadb";
import { verifyToken } from '$lib/utils/jwt';

export const GET:RequestHandler = async ({ locals, request, cookies }) => {

  const users = await prisma.user.findMany()

  return json({users});
}