import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

// Prisma 7 has no bundled query engine — it talks to Postgres through a
// driver adapter. PrismaPg opens the connection from DATABASE_URL.
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

// Reuse a single PrismaClient across hot-reloads in development.
// Next.js clears the module cache on every change, which would otherwise
// spawn a new client (and a new DB connection) on each reload.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
