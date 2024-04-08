import { useEffect, useState } from "react";
import { TasksContainer } from "./tasksContainer";
import { TasksHeader } from "./tasksHeader";
import { getTasks, updateTasks } from "@/api/tasks";
import { toast } from "../../../../components/ui/use-toast";
import { InputComponent } from "./inputComponent";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ToDoListProps {
  userId: string;
}

export interface TaskProps {
  id: string;
  user_id: string;
  description: string;
  completed: boolean;
}

export function TodoList({ userId }: ToDoListProps) {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUsertasks() {
      if (userId) {
        const tasks = await getTasks(userId);
        setTasks(tasks);
      }
    }
    getUsertasks();
  }, []);

  function createNewTask(taskToCreate: TaskProps) {
    setTasks([...tasks, taskToCreate]);
  }

  async function completedTask(taskTocompleted: TaskProps) {
    try {
      await updateTasks(taskTocompleted);
      const taskTocompletedIndex = tasks.findIndex(
        (task) => task.id === taskTocompleted.id
      );

      const newTasks = [...tasks];

      newTasks[taskTocompletedIndex].completed = taskTocompleted.completed;
      setTasks(newTasks);
    } catch {
      await toast({
        title: "Erro ao atualizar a atividade",
        description: "Por favor, tente novamente",
      });
    }
  }

  function deleteTask(taskToDelete: TaskProps) {
    const taskWithoutDeletedOne = tasks.filter(
      (task) => task.id !== taskToDelete.id
    );
    setTasks(taskWithoutDeletedOne);
  }

  async function handleSignOut() {
    try {
      localStorage.removeItem("token");
      navigate("/sign-in");
    } catch {
      await toast({
        variant: "destructive",
        title: "Falha ao criar sair",
        description: "Tente novamente!",
      });
    }
  }

  return (
    <div className="bg-[#1A1A1A] min-h-screen flex flex-col">
      <div className="flex-grow">
        <InputComponent createNewTask={createNewTask} userId={userId} />
        <TasksHeader tasks={tasks} />
        <TasksContainer
          tasks={tasks}
          deleteTask={deleteTask}
          completedTask={completedTask}
        />
      </div>
      <div className="mt-auto flex items-center justify-center">
        <Button variant={"destructive"} onClick={handleSignOut}>
          Sair
        </Button>
      </div>
    </div>
  );
}
