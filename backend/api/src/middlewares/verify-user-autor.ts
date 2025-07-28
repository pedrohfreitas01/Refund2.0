import { AppError } from "../utils/AppErros";
import { Request, Response, NextFunction } from "express";

function verifyUserAutor(role: string[]) {
  return (request: Request, response: Response, next: NextFunction) => {
    if (!request.user || !role.includes(request.user.role)) {
      throw new AppError("Unauthorized", 401);
    }

    next();
  };
}

export { verifyUserAutor };
