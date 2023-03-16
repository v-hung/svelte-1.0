import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from "./$types";
import * as fs from 'fs/promises';
import { existsSync, mkdirSync } from "fs";
import sizeOf from "image-size";

import prisma from "$lib/server/prismadb";

export const POST: RequestHandler = async ({ request, cookies }) => {
  try {
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

      const dimensions = sizeOf(Buffer.from(new Uint8Array(await file.arrayBuffer()) ))
      
      res.push({
        name: file.name,
        type,
        caption: "",
        url: `/storage/${name}`,
        width: dimensions.width,
        height: dimensions.height,
        size: file.size,
      })
    }

    let images = await prisma.images.createMany({
      data: res
    })

    return json(images)
  }
  catch(e) {
    throw error(400, 'Upload error');
  }
}

export const GET: RequestHandler = async ({ request, cookies,url }) => {
  // const files = await fs.readdir('./storage');
  // return json(files)
  try {
    let page = url.searchParams.get('page') as any as number || 1
    let total = url.searchParams.get('total') as any as number || 20

    let images = await prisma.images.findMany({
      skip: (page - 1) * total,
      take: total,
    })

    return json(images)
  } catch (error) {
    throw error(400, 'Upload error');
  }
}