import React, { useState } from "react";
import { PlusCircle, CheckCircle, Circle, Trash2 } from "lucide-react";
import stats from "./stats.png";

const TodoApp = () => {
  const [toggle, setToggle] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [doneTasks, setDoneTasks] = useState([]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    }
  };

  const completeTask = (taskId) => {
    const task = tasks.find((t) => t.id === taskId);
    setTasks(tasks.filter((t) => t.id !== taskId));
    setDoneTasks([...doneTasks, task]);
  };

  const deleteTask = (taskId, isDone) => {
    if (isDone) {
      setDoneTasks(doneTasks.filter((t) => t.id !== taskId));
    } else {
      setTasks(tasks.filter((t) => t.id !== taskId));
    }
  };

  const changeToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="bg-blue-950 flex flex-col md:flex-row w-screen select-none min-h-screen">
      <div
        className={`${
          toggle ? "text-white absolute right-0 p-5 md:p-10" : "hidden"
        }`}
      >
        empty text and statistics
      </div>
      <div
        className={`${
          toggle
            ? "bg-[#1e1e2e] font-sans p-5 md:p-10 rounded-3xl w-fit h-fit m-5 md:m-10 absolute left-0"
            : "bg-[#1e1e2e] font-sans p-5 md:p-10 rounded-3xl w-full h-fit m-5 md:m-10"
        }`}
      >
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="flex-grow bg-[#2e2e3e] p-2 md:p-3 rounded-l-lg text-white focus:outline-none"
          />
          <button
            onClick={addTask}
            className="bg-[#8839ef] p-2 md:p-3 rounded-r-lg hover:bg-[#9d50ff] transition-colors"
          >
            <PlusCircle size={24} color="white" />
          </button>
          <img
            src={stats}
            alt="statistics-logo"
            className={`${
              toggle ? "hidden" : "h-10 w-10 ml-2 hover:scale-105"
            }`}
            onClick={changeToggle}
          />
        </div>

        <p className="mb-2 md:mb-4 text-xs md:text-sm text-gray-300">
          Tasks to do - {tasks.length}
        </p>
        <div className="max-h-80 overflow-y-auto">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-[#2e2e3e] p-2 md:p-3 rounded-lg mb-2 flex justify-between items-center text-white"
            >
              <span>{task.text}</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => completeTask(task.id)}
                  className="text-[#8839ef] hover:text-[#9d50ff]"
                >
                  <Circle size={20} />
                </button>
                <button
                  onClick={() => deleteTask(task.id, false)}
                  className="text-red-500 hover:text-red-400"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 md:mt-6 mb-2 md:mb-4 text-xs md:text-sm text-gray-300">
          Completed - {doneTasks.length}
        </p>
        <div className="max-h-80 overflow-y-auto">
          {doneTasks.map((task) => (
            <div
              key={task.id}
              className="bg-[#2e2e3e] p-2 md:p-3 rounded-lg mb-2 flex justify-between items-center text-white line-through"
            >
              <span>{task.text}</span>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} className="text-[#8839ef]" />
                <button
                  onClick={() => deleteTask(task.id, true)}
                  className="text-red-500 hover:text-red-400"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
