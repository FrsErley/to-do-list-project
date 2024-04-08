import { Request, Response } from "express";
import { z } from "zod";
import { signIn } from "./auth.service";

class AuthController {
  async signIn(req: Request, res: Response) {
    const bodySchema = z.object({
      username: z.string(),
      password: z.string().min(4).max(10),
    });

    const { username, password } = bodySchema.parse(req.body);

    const user = await signIn(username, password);
    return res.status(201).json(user);
  }
}

export default new AuthController();
