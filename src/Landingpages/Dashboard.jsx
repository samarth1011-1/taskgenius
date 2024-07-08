import React, { useContext, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import TodoApp from "../components/todo";
import { GlobalContext } from "../GlobalContexts/GlobalContext";
import Statspage from "../statistics/statspage";
import AI from "../AI/AI";
const Dashboard = () => {
  const { info } = useContext(GlobalContext);

  const componentMapping = {
    "/todo": <TodoApp />,
    "/stats": <Statspage />,
    "/AI": <AI />,
    default: <TodoApp />,
  };

  const renderComponent =
    componentMapping[info.currentpage] || componentMapping["default"];

  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 bg-[#1e1e2e] p-5 overflow-y-auto">
        {renderComponent}
      </div>
    </div>
  );
};

export default Dashboard;
