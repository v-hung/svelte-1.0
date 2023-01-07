import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from "./$types";
import * as fs from 'fs/promises';
import { existsSync, mkdirSync } from "fs";

import prisma from "$lib/server/prismadb";

export const POST: RequestHandler = async ({ request, cookies }) => {
  const data = await request.formData();
  const files = data.getAll('images[]') as File[]

  let res = []
  for (let file of files) {
    let type = file.type
  
    if (type.split('/')[0] !== "image") {
      throw error(400, 'Can\'t upload file');
    }
  
    let name = crypto.randomUUID() + "." + file.name.split('.')[1]
    
    if (!existsSync('./storage')){
      mkdirSync('./storage', { recursive: true });
    }
  
    await fs.writeFile(`./storage/${name}`, file.stream() as any)

    res.push(name)
  }

  return json("Mission Completed")
}

export const GET: RequestHandler = async ({ request, cookies }) => {
  const files = await fs.readdir('./storage');

  return json(files)
}