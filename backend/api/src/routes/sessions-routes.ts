import { SessionController } from "@/controllers/sessions-controller";
import { Router } from "express";

const sessionsRoutes = Router()
const sessionController = new SessionController()

sessionsRoutes.post("/", sessionController.create)


export { sessionsRoutes };