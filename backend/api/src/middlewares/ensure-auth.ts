import { authConfig } from "../config/auth";
import { AppError } from "../utils/AppErros";
import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface TokenPayload {
  role: string;
  sub: string;
}

function ensureAuth(request: Request, response: Response, next: NextFunction) {
  try {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new AppError("JWT token not found", 401);
    }
    // Bearer 123123123
    const [, token] = authHeader.split(" ");
    const { role, sub: user_id } = verify(
      token,
      authConfig.jwt.secret
    ) as TokenPayload;

    request.user = {
      id: user_id,
      role,
    };

    return next();
  } catch (error) {
    throw new AppError("Invalid jwt TOKEN ", 401);
  }
}

export { ensureAuth };
