import { sign } from "jsonwebtoken";
import { AppError } from "../utils/erro";
import { prisma } from "../lib/prisma";
import bcrypt from "bcrypt";
import Cookies from "js-cookie";

export const SECRET = process.env.JWT_SECRET || "default";
const EXPIRESIN = "7d";

export const signIn = async (username: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) throw new AppError("Username or password not match", 404);

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Username or password not match", 404);
  }

  const token = sign({ username, userId: user.id }, SECRET, {
    expiresIn: EXPIRESIN,
  });

  return { user, token };
};
