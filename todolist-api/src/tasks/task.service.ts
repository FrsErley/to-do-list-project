import { AppError } from "../utils/erro";
import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createTask = async (body: Prisma.TaskCreateInput) => {
  try {
    console.log(body);
    const task = await prisma.task.create({
      data: body,
    });
    return task;
  } catch (error) {
    throw new AppError("Não foi possível criar a tarefa", 400);
  }
};

export const getTasks = async () => {
  const tasks = await prisma.task.findMany();
  if (!tasks) {
    throw new AppError("Erro ao buscar tarefas", 500);
  }
  return tasks;
};

export const getTask = async (id: string) => {
  const task = await prisma.task.findUnique({
    where: { id },
  });
  if (!task) {
    throw new AppError("Tarefa não encontrada", 404);
  }
  return task;
};

export const updateTask = async (id: string, body: any) => {
  try {
    const task = await prisma.task.update({
      where: { id },
      data: body,
    });
    return task;
  } catch (error) {
    throw new AppError("Erro ao atualizar a tarefa", 500);
  }
};

export const deleteTask = async (id: string) => {
  try {
    const task = await prisma.task.delete({
      where: { id },
    });
    return task;
  } catch (error) {
    throw new AppError("Erro ao deletar a tarefa", 500);
  }
};
