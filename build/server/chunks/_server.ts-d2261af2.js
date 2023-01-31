import { e as error } from './index2-e4abb57b.js';
import * as fs from 'fs/promises';
import { existsSync } from 'fs';
import './prismadb-a6fac679.js';
import '@prisma/client';

const GET = async ({ params, request, cookies }) => {
  const filepath = "./storage/" + params.filename;
  if (!existsSync(filepath)) {
    throw error(404, "Not found");
  }
  const file_stream = await fs.readFile(filepath);
  return new Response(file_stream);
};

export { GET };
//# sourceMappingURL=_server.ts-d2261af2.js.map
