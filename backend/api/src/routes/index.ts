import { Router } from "express";
import { userRoutes } from "./user-routes";
import { sessionsRoutes } from "./sessions-routes";
import { refundsRoutes } from "./refunds-routes";
import { ensureAuth } from "../middlewares/ensure-auth";
import { uploadsRoutes } from "./uploads-routes";

const routes = Router();

// public routes

routes.use("/users", userRoutes);
routes.use("/sessions", sessionsRoutes);

// private routes
routes.use(ensureAuth);
routes.use("/refunds", refundsRoutes);

routes.use("/uploads", uploadsRoutes);

export { routes };
