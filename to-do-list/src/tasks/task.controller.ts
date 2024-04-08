import { Request, Response } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "./task.service";

class TaskController {
  async create(req: Request, res: Response) {
    const { body }: any = req;
    const newTask = await createTask(body);
    return res.status(201).json(newTask);
  }

  async getAll(req: Request, res: Response) {
    const tasks = await getTasks();
    return res.status(200).json(tasks);
  }

  async getTask(req: Request, res: Response) {
    const { taskId } = req.params;
    const task = await getTask(taskId);
    return res.status(200).json(task);
  }

  async update(req: Request, res: Response) {
    const { taskId } = req.params;
    const body = req.body;
    const tasks = await updateTask(taskId, body);
    return res.status(200).json(tasks);
  }

  async delete(req: Request, res: Response) {
    const { taskId } = req.params;
    const task = await deleteTask(taskId);
    return res.status(202).json(task);
  }
}

export default new TaskController();
