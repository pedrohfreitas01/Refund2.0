"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUserAutor = verifyUserAutor;
const AppErros_1 = require("../utils/AppErros");
function verifyUserAutor(role) {
    return (request, response, next) => {
        if (!request.user || !role.includes(request.user.role)) {
            throw new AppErros_1.AppError("Unauthorized", 401);
        }
        next();
    };
}
