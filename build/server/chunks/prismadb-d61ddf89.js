import { PrismaClient } from '@prisma/client';

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production")
  globalThis.prisma = client;

export { client as c };
//# sourceMappingURL=prismadb-d61ddf89.js.map
