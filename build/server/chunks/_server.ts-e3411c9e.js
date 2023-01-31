import { e as error, j as json } from './index2-e4abb57b.js';
import * as fs from 'fs/promises';
import { existsSync, mkdirSync } from 'fs';
import './prismadb-a6fac679.js';
import '@prisma/client';

const POST = async ({ request, cookies }) => {
  const data = await request.formData();
  const files = data.getAll("images[]");
  for (let file of files) {
    let type = file.type;
    if (type.split("/")[0] !== "image") {
      throw error(400, "Can't upload file");
    }
    let name = crypto.randomUUID() + "." + file.name.split(".")[1];
    if (!existsSync("./storage")) {
      mkdirSync("./storage", { recursive: true });
    }
    await fs.writeFile(`./storage/${name}`, file.stream());
  }
  return json("Mission Completed");
};
const GET = async ({ request, cookies }) => {
  const files = await fs.readdir("./storage");
  return json(files);
};

export { GET, POST };
//# sourceMappingURL=_server.ts-e3411c9e.js.map
