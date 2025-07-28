import { UploadsController } from "../controllers/uploads-controller";
import { verifyUserAutor } from "../middlewares/verify-user-autor";
import { Router } from "express";
import uploadConfig from "../config/upload";
import multer from "multer";

const uploadsRoutes = Router();
const uploadsController = new UploadsController();

const upload = multer(uploadConfig.MULTER);

uploadsRoutes.use(verifyUserAutor(["employee"]));

uploadsRoutes.post("/", upload.single("file"), uploadsController.create);

export { uploadsRoutes };
