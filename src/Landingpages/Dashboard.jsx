import React from "react";
import Sidebar from "../components/Sidebar";
import TodoApp from "../components/todo";

const Dashboard = () => {
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 bg-[#1e1e2e] p-5 overflow-y-auto">
        <TodoApp />
      </div>
    </div>
  );
};

export default Dashboard;
