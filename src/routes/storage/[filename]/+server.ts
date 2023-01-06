import { error } from '@sveltejs/kit';
import type { RequestHandler } from "./$types";
import { json } from '@sveltejs/kit';
import * as fs from 'fs/promises';
import { existsSync, mkdirSync, createReadStream } from "fs";

import prisma from "$lib/server/prismadb";

export const GET: RequestHandler = async ({ params, request, cookies }) => {
  const filepath = './storage/' + params.filename

  if (!existsSync(filepath)){
    throw error(404, 'Not found');
  }

  const file_stream = await fs.readFile(filepath)

  return new Response(file_stream)
}