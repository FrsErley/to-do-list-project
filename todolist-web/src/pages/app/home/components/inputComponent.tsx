import { TaskProps } from "./toDoList";
import { PlusCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTask } from "@/api/tasks";
import { toast } from "@/components/ui/use-toast";

interface InputComponentProps {
  createNewTask: (taskToCreate: TaskProps) => void;
  userId: string;
}

const taskSchema = z.object({
  description: z.string().min(1),
  completed: z.boolean(),
  userId: z.string(),
});

type TaskForm = z.infer<typeof taskSchema>;

export function InputComponent({ createNewTask, userId }: InputComponentProps) {
  const { register, handleSubmit } = useForm<TaskForm>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      userId: userId,
      description: "",
      completed: false,
    },
  });

  async function handleCreateNewTask(data: TaskForm) {
    try {
      const response = await createTask({ ...data, userId: userId });
      createNewTask(response);
    } catch {
      await toast({
        variant: "destructive",
        title: "Falha ao criar atividade",
        description: "Por favor, tente novamente",
      });
    }
  }

  return (
    <div className="-mt-[1.85rem] mb-16">
      <form
        className="flex items-center justify-center gap-2"
        onSubmit={handleSubmit(handleCreateNewTask)}>
        <Input
          id="description"
          type="text"
          placeholder="Adicione uma nova tarefa"
          {...register("description")}
          className="bg-[#262626] placeholder:text-gray-500 placeholder:text-base h-[3.100rem] lg:w-[39.875rem]"
        />
        <Button
          className="flex w-[5.625rem] h-[3.100rem] items-center gap-2 text-white relative"
          type="submit">
          Criar
          <PlusCircle size={30} />
        </Button>
      </form>
    </div>
  );
}
