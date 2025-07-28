"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const user_routes_1 = require("./user-routes");
const sessions_routes_1 = require("./sessions-routes");
const refunds_routes_1 = require("./refunds-routes");
const ensure_auth_1 = require("@/middlewares/ensure-auth");
const uploads_routes_1 = require("./uploads-routes");
const routes = (0, express_1.Router)();
exports.routes = routes;
// public routes
routes.use("/users", user_routes_1.userRoutes);
routes.use("/sessions", sessions_routes_1.sessionsRoutes);
// private routes
routes.use(ensure_auth_1.ensureAuth);
routes.use("/refunds", refunds_routes_1.refundsRoutes);
routes.use("/uploads", uploads_routes_1.uploadsRoutes);
