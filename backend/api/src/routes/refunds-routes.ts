import { RefundsController } from "../controllers/refunds-controller";
import { verifyUserAutor } from "../middlewares/verify-user-autor";
import { Router } from "express";

const refundsRoutes = Router();
const refundsController = new RefundsController();

refundsRoutes.post(
  "/",
  verifyUserAutor(["employee"]),
  refundsController.create
);
refundsRoutes.get("/", verifyUserAutor(["manager"]), refundsController.index);

refundsRoutes.get(
  "/:id",
  verifyUserAutor(["employee", "manager"]),
  refundsController.show
);

export { refundsRoutes };
