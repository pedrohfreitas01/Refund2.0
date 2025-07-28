"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadsRoutes = void 0;
const uploads_controller_1 = require("@/controllers/uploads-controller");
const verify_user_autor_1 = require("@/middlewares/verify-user-autor");
const express_1 = require("express");
const upload_1 = __importDefault(require("@/config/upload"));
const multer_1 = __importDefault(require("multer"));
const uploadsRoutes = (0, express_1.Router)();
exports.uploadsRoutes = uploadsRoutes;
const uploadsController = new uploads_controller_1.UploadsController();
const upload = (0, multer_1.default)(upload_1.default.MULTER);
uploadsRoutes.use((0, verify_user_autor_1.verifyUserAutor)(["employee"]));
uploadsRoutes.post("/", upload.single("file"), uploadsController.create);
