"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuth = ensureAuth;
const auth_1 = require("@/config/auth");
const AppErros_1 = require("@/utils/AppErros");
const jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuth(request, response, next) {
    try {
        const authHeader = request.headers.authorization;
        if (!authHeader) {
            throw new AppErros_1.AppError("JWT token not found", 401);
        }
        // Bearer 123123123
        const [, token] = authHeader.split(" ");
        const { role, sub: user_id } = (0, jsonwebtoken_1.verify)(token, auth_1.authConfig.jwt.secret);
        request.user = {
            id: user_id,
            role,
        };
        return next();
    }
    catch (error) {
        throw new AppErros_1.AppError("Invalid jwt TOKEN ", 401);
    }
}
