import React, { useState, createContext } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [info, setInfo] = useState({
    toggle: true,
    tasks: [],
    newTask: "",
    doneTasks: [],
    location:""
  });

  return (
    <GlobalContext.Provider value={{ info, setInfo }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
