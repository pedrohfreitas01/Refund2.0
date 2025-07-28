"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefundsController = void 0;
const prisma_1 = require("@/database/prisma");
const AppErros_1 = require("@/utils/AppErros");
const zod_1 = __importDefault(require("zod"));
const CategoriesEnum = zod_1.default.enum([
    "food",
    "other",
    "services",
    "transport",
    "accommodation",
]);
class RefundsController {
    async create(request, response) {
        const bodySchema = zod_1.default.object({
            name: zod_1.default.string().trim().min(1, { message: "invalid name" }),
            category: CategoriesEnum,
            amount: zod_1.default.number().positive({ message: "O valor precisa ser positivo" }),
            filename: zod_1.default.string().min(20),
        });
        const { name, category, amount, filename } = bodySchema.parse(request.body);
        if (!request.user?.id) {
            throw new AppErros_1.AppError("Unauthorized", 401);
        }
        const refund = await prisma_1.prisma.refunds.create({
            data: {
                name,
                category,
                amount,
                filename,
                userId: request.user.id,
            },
        });
        response.status(201).json(refund);
    }
    async index(request, response) {
        const querySchema = zod_1.default.object({
            name: zod_1.default.string().optional().default(""),
            page: zod_1.default.coerce.number().optional().default(1),
            perPage: zod_1.default.coerce.number().optional().default(10),
        });
        const { name, page, perPage } = querySchema.parse(request.params);
        const skip = (page - 1) * perPage;
        const refunds = await prisma_1.prisma.refunds.findMany({
            skip,
            take: perPage,
            where: {
                user: {
                    name: {
                        contains: name.trim(),
                    },
                },
            },
            orderBy: { createdAt: "desc" },
            include: { user: true },
        });
        const totalRecords = await prisma_1.prisma.refunds.count({
            where: {
                user: {
                    name: {
                        contains: name.trim(),
                    },
                },
            },
        });
        const totalPages = Math.ceil(totalRecords / perPage);
        response.json({
            refunds,
            pagination: {
                page,
                perPage,
                totalPages: totalPages > 0 ? totalPages : 1,
                totalRecords,
            }
        });
    }
    async show(request, response) {
        const paramsSchema = zod_1.default.object({
            id: zod_1.default.string().uuid()
        });
        const { id } = paramsSchema.parse(request.params);
        const refund = await prisma_1.prisma.refunds.findFirst({
            where: { id },
            include: { user: true },
        });
        response.json(refund);
    }
}
exports.RefundsController = RefundsController;
