import React from "react";
import Task from '../Task';

interface TaskListProps {
  tasks: {
    id: number;
    title: string;
    completed: boolean;
  }[];
  onEditTask: (taskId: number, newTitle: string) => void;
  onDeleteTask: (taskId: number) => void;
  onToggleCompleted: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onEditTask,
  onDeleteTask,
  onToggleCompleted,
}) => {
  const reversedTasks = tasks.slice().reverse();
  return (
    <ul className=" ">
      {reversedTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
          onToggleCompleted={onToggleCompleted}
        />
      ))}
    </ul>
  );
};

export default TaskList;
