"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const prisma_1 = require("@/database/prisma");
const AppErros_1 = require("@/utils/AppErros");
const client_1 = require("@prisma/client");
const bcrypt_1 = require("bcrypt");
const zod_1 = __importDefault(require("zod"));
class UsersController {
    async create(request, response) {
        const bodySchema = zod_1.default.object({
            name: zod_1.default.string().trim().min(2, { message: "Nome obrigatório" }),
            email: zod_1.default
                .string()
                .trim()
                .email({ message: "E-mail invalido" })
                .toLowerCase(),
            password: zod_1.default
                .string()
                .min(6, { message: "A senha deve ter no mínimo 6 dígitos" }),
            role: zod_1.default
                .enum([client_1.UserRole.employee, client_1.UserRole.manager])
                .default(client_1.UserRole.employee),
        });
        const { name, email, password, role } = bodySchema.parse(request.body);
        const userWithSameMail = await prisma_1.prisma.user.findFirst({ where: { email } });
        if (userWithSameMail) {
            throw new AppErros_1.AppError("Ja existe um usuário cadastrado com esse email");
        }
        const hashedPassword = await (0, bcrypt_1.hash)(password, 8);
        await prisma_1.prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role,
            },
        });
        response.status(201).json("user criado");
    }
}
exports.UsersController = UsersController;
