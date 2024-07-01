import React, { useContext } from "react";
import { GlobalContext } from "../GlobalContexts/GobalContext";
import { Pie } from "react-chartjs-2";
const piechart = () => {
    const {info} = useContext(GlobalContext)
  const pie = {
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
    <div
      className="text-white p-5 md:p-10 h-fit w-fit"
    >
      <div className="min-h-60 min-w-60 p-5 rounded-2xl bg-white">
        <Pie data={pie} className="font-sans" />
      </div>
    </div>
  );
};

export default piechart;
