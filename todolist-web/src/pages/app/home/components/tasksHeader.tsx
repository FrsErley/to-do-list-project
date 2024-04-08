import { TaskProps } from "./toDoList";

interface TasksHeaderProps {
  tasks: TaskProps[];
}

export function TasksHeader({ tasks }: TasksHeaderProps) {
  function checkCompletedTasks() {
    const completedTasks = tasks.filter(
      (tasks) => tasks.completed === true
    ).length;
    return completedTasks;
  }

  return (
    <div className="flex items-center justify-between mb-2">
      {tasks.length > 0 && (
        <div className="flex gap-2 items-center text-md font-bold text-sky-300">
          <h3 className="block text-lg font-bold my-4">Tarefas criadas</h3>
          <span className="text-gray-200 text-xs px-2 py-1 rounded-full bg-[#2f2e2e]">
            {tasks.length}
          </span>
        </div>
      )}
      {tasks.length > 0 && (
        <div className="flex gap-2 items-center text-md font-bold text-emerald-300">
          <h3 className="block text-lg font-bold my-4">Concluídas</h3>
          <span className="text-gray-200 text-xs px-2 py-1 rounded-full bg-[#2f2e2e]">{`${checkCompletedTasks()} de ${
            tasks.length
          }`}</span>
        </div>
      )}
    </div>
  );
}
