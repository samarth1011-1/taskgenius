import React, { useState } from "react";
import { Trash2 } from "lucide-react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: userInput, completed: false }]);
      setUserInput("");
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
      <form onSubmit={handleSubmit} className="mb-4 flex">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Add your task"
          className="flex-grow p-2 border-2 border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300"
        >
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm"
          >
            <span
              onClick={() => toggleTask(task.id)}
              className={`flex-grow cursor-pointer ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700 transition duration-300"
            >
              <Trash2 size={18} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;