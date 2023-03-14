import { e as error, j as json } from './index2-e4abb57b.js';
import * as fs from 'fs/promises';
import { existsSync, mkdirSync } from 'fs';
import './prismadb-d61ddf89.js';
import '@prisma/client';

const POST = async ({ request, cookies }) => {
  const data = await request.formData();
  const file = data.get("image");
  let type = file.type;
  if (type.split("/")[0] !== "image") {
    throw error(400, "Can't upload file");
  }
  let name = crypto.randomUUID() + "." + type.split("/")[1];
  if (!existsSync("./storage")) {
    mkdirSync("./storage", { recursive: true });
  }
  await fs.writeFile(`./storage/${name}`, file.stream());
  return json({
    a: ""
  });
};

export { POST };
//# sourceMappingURL=_server.ts-17f64f76.js.map
