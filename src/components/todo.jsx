import React, { useContext } from "react";
import { PlusCircle, CheckCircle, Circle, Trash2 } from "lucide-react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { GlobalContext } from "../GlobalContexts/GobalContext";
ChartJS.register(ArcElement, Tooltip, Legend);

const TodoApp = () => {
  const { info, setInfo } = useContext(GlobalContext);

  const addTask = () => {
    if (info.newTask.trim() !== "") {
      setInfo((prevInfo) => ({
        ...prevInfo,
        tasks: [...prevInfo.tasks, { id: Date.now(), text: prevInfo.newTask }],
        newTask: ""
      }));
    }
  };

  const completeTask = (taskId) => {
    const task = info.tasks.find((t) => t.id === taskId);
    setInfo((prevInfo) => ({
      ...prevInfo,
      tasks: prevInfo.tasks.filter((t) => t.id !== taskId),
      doneTasks: [...prevInfo.doneTasks, task],
    }));
  };

  const deleteTask = (taskId, isDone) => {
    if (isDone) {
      setInfo((prevInfo) => ({
        ...prevInfo,
        doneTasks: prevInfo.doneTasks.filter((t) => t.id !== taskId),
      }));
    } else {
      setInfo((prevInfo) => ({
        ...prevInfo,
        tasks: prevInfo.tasks.filter((t) => t.id !== taskId),
      }));
    }
  };

  return (
    <div className="bg-[#1e1e2e] flex flex-col w-full min-h-full p-5 rounded-lg shadow-lg">
      {/* TASK MANIPULATION */}
      <div className="bg-[#27293D] p-5 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            value={info.newTask}
            onChange={(e) =>
              setInfo((prevInfo) => ({
                ...prevInfo,
                newTask: e.target.value
              }))
            }
            placeholder="Add a new task"
            className="flex-grow bg-[#2B2C3B] p-3 rounded-l-lg text-white focus:outline-none"
          />
          <button
            onClick={addTask}
            className="bg-[#5961F9] p-3 rounded-r-lg hover:bg-[#7D83F9] transition-colors"
          >
            <PlusCircle size={24} color="white" />
          </button>
        </div>

        <p className="mb-4 text-sm text-gray-400">
          Tasks to do - {info.tasks.length}
        </p>
        <div className="max-h-80 overflow-y-auto">
          {info.tasks.map((task) => (
            <div
              key={task.id}
              className="bg-[#2B2C3B] p-3 rounded-lg mb-2 flex justify-between items-center text-white"
            >
              <span>{task.text}</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => completeTask(task.id)}
                  className="text-[#5961F9] hover:text-[#7D83F9]"
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

        <p className="mt-4 mb-4 text-sm text-gray-400">
          Completed - {info.doneTasks.length}
        </p>
        <div className="max-h-80 overflow-y-auto">
          {info.doneTasks.map((task) => (
            <div
              key={task.id}
              className="bg-[#2B2C3B] p-3 rounded-lg mb-2 flex justify-between items-center text-white line-through"
            >
              <span>{task.text}</span>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} className="text-[#5961F9]" />
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
