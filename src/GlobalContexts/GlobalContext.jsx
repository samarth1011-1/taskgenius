import React, { useState, createContext } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [info, setInfo] = useState({
    tasks: [],
    newTask: "",
    doneTasks: [],
    currentpage: "/",
    startDate: new Date(),
  });

  const changePage = (page) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      currentpage: page,
    }));
  };

  return (
    <GlobalContext.Provider value={{ info, setInfo, changePage }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
