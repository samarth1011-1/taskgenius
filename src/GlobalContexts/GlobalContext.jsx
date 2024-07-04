import React, { useState, createContext } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [info, setInfo] = useState({
    tasks: [],
    newTask: "",
    doneTasks: [],
    currentpage: "/dashboard",
    startDate: new Date(),
  });

  return (
    <GlobalContext.Provider value={{ info, setInfo }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
