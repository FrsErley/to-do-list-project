import { Prisma, PrismaClient } from "@prisma/client";
import { AppError } from "../utils/erro";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";

export const createUser = async (body: Prisma.UserCreateInput) => {
  const userNameAlreadyExist = await prisma.user.findUnique({
    where: {
      username: body.username,
    },
  });

  if (userNameAlreadyExist) {
    throw new AppError("Username Already Exist");
  }
  const emailAlreadyExist = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (emailAlreadyExist) {
    throw new AppError("Email Already Exist");
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  const { id, username, email } = await prisma.user.create({
    data: {
      ...body,
      password: hashedPassword,
    },
  });

  return { id, username, email };
};

export const getUsers = async () => {
  const user = await prisma.user.findMany();
  return user;
};

export const getUser = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      tasks: true,
    },
  });

  return {
    id: user?.id,
    username: user?.username,
    email: user?.email,
    tasks: user?.tasks,
  };
};

export const updateUser = async (id: string, body: Prisma.UserUpdateInput) => {
  const user = prisma.user.update({
    where: {
      id: id,
    },
    data: body,
  });

  return user;
};

export const deleteUser = async (id: string) => {
  const user = await prisma.user.delete({
    where: { id },
  });

  return user;
};
