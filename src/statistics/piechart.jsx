import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContexts/GlobalContext";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  const { info } = useContext(GlobalContext);
  const pieData = {
    labels: ["Pending", "Completed"],
    datasets: [
      {
        label: "Tasks",
        data: [info.tasks.length, info.doneTasks.length],
        backgroundColor: ["#f87171", "#4ade80"],
        borderColor: ["#e11d48", "#16a34a"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="bg-white p-5 md:p-10 rounded-2xl shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Task Distribution</h2>
      <Pie data={pieData} />
    </div>
  );
};

export default PieChart;
