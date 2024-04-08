import { Request, Response } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "./user.service";

class UserController {
  async create(req: Request, res: Response) {
    const { body }: any = req;
    const newUser = await createUser(body);
    return res.status(201).json(newUser);
  }

  async getAll(req: Request, res: Response) {
    const users = await getUsers();
    return res.status(200).json(users);
  }

  async getUser(req: Request, res: Response) {
    const { userId } = req.params;
    const users = await getUser(userId);
    return res.json(users);
  }

  async update(req: Request, res: Response) {
    const { userId } = req.params;
    const body = req.body;
    const users = await updateUser(userId, body);
    return res.status(200).json(users);
  }

  async delete(req: Request, res: Response) {
    const { userId } = req.params;
    const users = await deleteUser(userId);
    return res.status(202).json(users);
  }
}

export default new UserController();
