"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const error_handling_1 = require("./middlewares/error-handling");
const routes_1 = require("./routes");
const upload_1 = __importDefault(require("./config/upload"));
const app = (0, express_1.default)();
exports.app = app;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/uploads", express_1.default.static(upload_1.default.UPLOADS_FOLDER));
app.use(routes_1.routes);
app.use(error_handling_1.errorHandling);
