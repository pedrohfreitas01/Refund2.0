import { PrismaClient } from "@prisma/client";


// always show the query in terminal
export const prisma = new PrismaClient({
    log: ["query"]
})

