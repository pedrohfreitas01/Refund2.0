"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandling = void 0;
const AppErros_1 = require("../utils/AppErros");
const zod_1 = require("zod");
const errorHandling = (error, request, response, next) => {
    if (error instanceof AppErros_1.AppError) {
        response.status(error.statusCode).json({ message: error.message });
        return;
    }
    if (error instanceof zod_1.ZodError) {
        response.status(400).json({
            message: "validation error",
            issues: error.format(),
        });
        return;
    }
    response.status(500).json({ message: error.message });
    return;
};
exports.errorHandling = errorHandling;
