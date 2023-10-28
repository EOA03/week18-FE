import React, { useState, FormEvent } from "react";
import { CiCirclePlus } from "react-icons/ci";

interface AddTaskFormProps {
  onAddTask: (title: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title.trim());
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <CiCirclePlus size={28} className="px-0" />
        <input
          className="w-full h-fit p-1 py-4"
          type="text"
          placeholder="Add a new task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="px-4 uppercase" type="submit">
          Add
        </button>
    </form>
  );
};

export default AddTaskForm;