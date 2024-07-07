import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../GlobalContexts/GlobalContext";

const AI = () => {
  const [predictedTasks, setPredictedTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { info } = useContext(GlobalContext);
  const taskList = info.tasks;
  useEffect(() => {
    const fetchPredictedTasks = async () => {
      setLoading(true);
      try {
        const response = await axios.post("http://localhost:3001/ai", {
          tasks: taskList,
        });
        setPredictedTasks(response.data.predictedTasks.split(", "));
      } catch (err) {
        setError("Failed to fetch predicted tasks");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPredictedTasks();
  }, [info.tasks]);

  if (loading) return <div className="text-white text-4xl">Loading...</div>;
  if (error) return <div className="text-red-500 text-4xl">{error}</div>;

  return (
    <div className='bg-gray-800 p-8 rounded-lg shadow-lg'>
      <h1 className='text-4xl mb-4 text-white'>Based on your recent tasks,</h1>
      <h2 className='text-2xl mb-4 text-green-400 font-bold'>the predicted tasks are:</h2>
      <ul className='list-none space-y-2'>
        {predictedTasks.map((task, index) => (
          <li key={index} className='text-xl text-gray-300 bg-gray-900 p-4 rounded-md'>
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AI;
