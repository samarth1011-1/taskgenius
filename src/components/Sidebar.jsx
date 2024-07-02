import React, { useContext, useEffect } from "react";
import { Sidebardata } from "./Sidebardata";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../GlobalContexts/GobalContext";
const Sidebar = () => {
  const { info, setInfo } = useContext(GlobalContext);
  const navigate = useNavigate();

  function goto(link) {
    setInfo((prevInfo) => ({
      ...prevInfo,
      location: link,
    }));
  }

  return (
    <div className="h-full w-64 lg:w-52 md:w-44 sm:w-36 bg-[#1F2029] text-white flex flex-col overflow-hidden">
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        <p
          onClick={() => goto("/dashboard")}
          className=" hover:cursor-pointer select-none"
        >
          Dashboard
        </p>
      </div>
      <ul className="flex-1 overflow-y-auto">
        {Sidebardata.map((val, key) => (
          <li
            key={key}
            onClick={() => goto(val.link)}
            className={`p-4 flex items-center space-x-4 hover:bg-[#27293D] cursor-pointer transition-colors ${
              !val.link ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            <div>{val.icon}</div>
            <div>{val.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
