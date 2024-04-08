import { SECRET } from "../sessions/auth.service";
import { AppError } from "../utils/erro";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token is missing", 401);
  }

  const [, token] = authHeader.split(" ");

  verify(token, SECRET, (err, decoded) => {
    if (err) throw new AppError("Invalid Token", 401);

    next();
  });
};
