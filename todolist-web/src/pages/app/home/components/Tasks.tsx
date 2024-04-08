import { Trash } from "lucide-react";
import { TaskProps } from "./toDoList";
import { Checkbox } from "../../../../components/ui/checkbox";
import { deleteTask } from "@/api/tasks";
import { toast } from "@/components/ui/use-toast";

interface ITaskProps {
  task: TaskProps;
  onDeleteTask: (taskToDelete: TaskProps) => void;
  onCheckTask: (taskToCheck: TaskProps) => void;
}

export function Task({ task, onDeleteTask, onCheckTask }: ITaskProps) {
  function handleCheckBoxChange(status: boolean) {
    const updatedTask = { ...task, completed: status };
    onCheckTask(updatedTask);
  }

  async function handleDeleteClick() {
    try {
      await deleteTask(task);
      onDeleteTask(task);
    } catch {
      await toast({
        variant: "destructive",
        title: "Falha ao excluir atividade",
        description: "Por favor, tente novamente",
      });
    }
  }

  return (
    <div className="flex">
      <div className="flex-1 ">
        <div className="flex justify-between text-gray-100 rounded-[8px] shadow-md bg-[#262626] shadow-black/5 p-4">
          <div className="flex justify-start items-center gap-3">
            <Checkbox
              checked={task.completed}
              onCheckedChange={handleCheckBoxChange}
            />
            {task.completed === false ? (
              <p>{task.description}</p>
            ) : (
              <p className="line-through">{task.description}</p>
            )}
          </div>
          <button
            className="bg-transparent border-0 text-gray-300 cursor-pointer line-through rounded-md transition-colors hover:text-destructive"
            onClick={handleDeleteClick}>
            <Trash size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
