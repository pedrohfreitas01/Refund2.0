import { UsersController } from "@/controllers/user-controller";
import { Router } from "express";



const userRoutes = Router()
const usersController = new UsersController()

userRoutes.post("/", usersController.create)

export { userRoutes};