"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const user_controller_1 = require("@/controllers/user-controller");
const express_1 = require("express");
const userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
const usersController = new user_controller_1.UsersController();
userRoutes.post("/", usersController.create);
