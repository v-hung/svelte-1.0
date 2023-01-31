import { PrismaClient } from '@prisma/client';

const prisma = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production")
  globalThis.prisma = prisma;

export { prisma as p };
//# sourceMappingURL=prismadb-a6fac679.js.map
