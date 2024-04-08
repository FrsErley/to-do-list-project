import { TaskProps } from "@/pages/app/home/components/toDoList";
import { api } from "@/lib/axios";

export interface User {
  id: string;
  username: string;
  email: string;
  tasks: TaskProps[];
}

export interface TaskBody {
  id?: string;
  userId: string;
  description: string;
  completed: boolean;
}

export async function getTasks(userId: string) {
  const { data } = await api.get<User>(`/users/${userId}`);

  return data.tasks;
}

export async function createTask(task: TaskBody) {
  const { data } = await api.post<TaskProps>(`/tasks`, {
    userId: task.userId,
    description: task.description,
    completed: task.completed,
  });

  return data;
}

export async function updateTasks(task: TaskProps) {
  const { data } = await api.put<TaskProps>(`/tasks/${task.id}`, {
    id: task.id,
    user_id: task.user_id,
    description: task.description,
    completed: task.completed,
  });

  return data;
}

export async function deleteTask(task: TaskProps) {
  const { data } = await api.delete<TaskProps>(`/tasks/${task.id}`);

  return data;
}
