import { error } from '@sveltejs/kit';
import type { RequestHandler } from "./$types";
import { json } from '@sveltejs/kit';
import * as fs from 'fs/promises';
import { existsSync, mkdirSync } from "fs";

import prisma from "$lib/server/prismadb";

export const POST: RequestHandler = async ({ request, cookies }) => {
  const data = await request.formData();
  const file = data.get('image') as File
  let type = file.type

  if (type.split('/')[0] !== "image") {
    throw error(400, 'Can\'t upload file');
  }

  let name = crypto.randomUUID() + "." + type.split('/')[1]
  
  if (!existsSync('./storage')){
    mkdirSync('./storage', { recursive: true });
  }

  await fs.writeFile(`./storage/${name}`, file.stream() as any)

  return json({
    a: ''
  })
}