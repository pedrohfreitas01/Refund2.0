"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
// always show the query in terminal
exports.prisma = new client_1.PrismaClient({
    log: ["query"]
});
