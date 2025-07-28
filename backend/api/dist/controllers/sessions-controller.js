"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionController = void 0;
const auth_1 = require("../config/auth");
const prisma_1 = require("../database/prisma");
const AppErros_1 = require("../utils/AppErros");
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const zod_1 = __importDefault(require("zod"));
class SessionController {
    async create(request, response) {
        const bodySchema = zod_1.default.object({
            email: zod_1.default.string().email({ message: "Email invalido" }),
            password: zod_1.default.string(),
        });
        const { email, password } = bodySchema.parse(request.body);
        const user = await prisma_1.prisma.user.findFirst({ where: { email } });
        if (!user) {
            throw new AppErros_1.AppError("Email ou senha invalido", 401);
        }
        const passwordMatched = await (0, bcrypt_1.compare)(password, user.password);
        if (!passwordMatched) {
            throw new AppErros_1.AppError("Email ou senha invalido", 401);
        }
        // Gera um token JWT com os dados do usuário e retorna junto com as informações (sem a senha)
        const { secret, expiresIn } = auth_1.authConfig.jwt;
        const token = (0, jsonwebtoken_1.sign)({ role: user.role }, secret, {
            subject: user.id,
            expiresIn,
        });
        const { password: _, ...userWithoutPass } = user;
        response.json({ token, user: userWithoutPass });
    }
}
exports.SessionController = SessionController;
