import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import TodoApp from "../components/todo";
import { GlobalContext } from "../GlobalContexts/GobalContext";
import Statspage from "../statistics/statspage";
import AI from "../AI/AI";
import Home from "../Landingpages/Home";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const { info } = useContext(GlobalContext);
  const location = info.location;

  const navigate = useNavigate();
  function goto(g) {
    navigate(g);
  }

  const renderComponent = () => {
    switch (location) {
      case "/":
        goto("/");
      case "/todo":
        return <TodoApp />;
      case "/stats":
        return <Statspage />;
      case "/AI":
        return <AI />;
      default:
        return <TodoApp />;
    }
  };

  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <Sidebar />
      <div className="flex-1 bg-[#1e1e2e] p-5 overflow-y-auto">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Dashboard;
