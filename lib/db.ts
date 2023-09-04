import { PrismaClient } from "@prisma/client";
import "server-only";

declare global {
  var cachePrisma: PrismaClient;
}

export let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachePrisma) {
    global.cachePrisma = new PrismaClient();
  }
  prisma = global.cachePrisma;
}
