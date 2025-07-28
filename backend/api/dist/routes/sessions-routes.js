"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionsRoutes = void 0;
const sessions_controller_1 = require("../controllers/sessions-controller");
const express_1 = require("express");
const sessionsRoutes = (0, express_1.Router)();
exports.sessionsRoutes = sessionsRoutes;
const sessionController = new sessions_controller_1.SessionController();
sessionsRoutes.post("/", sessionController.create);
