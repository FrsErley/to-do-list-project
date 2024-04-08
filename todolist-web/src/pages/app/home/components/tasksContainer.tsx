import { Clipboard } from "./clipboard";
import { TaskProps } from "./toDoList";
import { Task } from "./Tasks";

interface TasksContainerProps {
  tasks: TaskProps[];
  deleteTask: (taskToDelete: TaskProps) => void;
  completedTask: (taskToCheck: TaskProps) => void;
}

export function TasksContainer({
  tasks,
  deleteTask,
  completedTask,
}: TasksContainerProps) {
  function onCheckTask(taskToCheck: TaskProps) {
    completedTask(taskToCheck);
  }

  function onDeleteTask(taskToDelete: TaskProps) {
    deleteTask(taskToDelete);
  }

  return (
    <div className="flex flex-col gap-3">
      {tasks.length === 0 ? (
        <Clipboard />
      ) : (
        tasks.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              onDeleteTask={onDeleteTask}
              onCheckTask={onCheckTask}
            />
          );
        })
      )}
    </div>
  );
}
