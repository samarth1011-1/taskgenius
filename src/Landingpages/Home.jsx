import React from "react";
import { useNavigate } from "react-router-dom";
import { PlusCircle } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const shiftPage = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div className="bg-customBg min-h-screen flex flex-col md:flex-row relative overflow-hidden">
        <div className="flex-1">
          <div className="font-sans text-4xl md:text-6xl font-bold ml-5 md:ml-10 mt-10 md:mt-20">
            Task Genius
            <p className="text-sm md:text-[1rem] mt-3 md:mt-5 ml-1 md:ml-2">
              Track your day.
            </p>
          </div>
        </div>

        <div
          className="absolute bottom-0 right-0 bg-sideComp text-white p-5 md:p-10 rounded-tl-3xl w-full md:w-[68%] h-[50%] md:h-[68%] flex items-center justify-center transition-transform duration-200 transform hover:scale-105 hover:shadow-glow hover:cursor-pointer"
          onClick={shiftPage}
        >
          <div className="bg-[#1e1e2e] p-5 md:p-8 rounded-3xl w-full max-w-xs md:max-w-md mx-auto my-5 md:my-10 shadow-lg font-sans shadow-gray-900 transform duration-100 hover:scale-105">
            <div className="flex mb-4 md:mb-6">
              <input
                type="text"
                className="flex-grow bg-[#2e2e3e] p-2 md:p-3 rounded-l-lg text-white focus:outline-none"
                placeholder="Enter your task.."
              />
              <button className="bg-[#8839ef] p-2 md:p-3 rounded-r-lg hover:bg-[#9d50ff] transition-colors">
                <PlusCircle size={24} color="white" />
              </button>
            </div>

            <p className="mb-2 md:mb-4 text-xs md:text-sm text-gray-300 pl-3">
              Tasks to do - 0
            </p>
            <p className="mt-4 md:mt-6 mb-2 md:mb-4 text-xs md:text-sm text-gray-300 pl-3">
              Done - 0
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-[#2e6c7d] p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-lg font-bold">Task Genius</p>
          <ul className="flex space-x-10">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">Contact</li>
            <li className="hover:underline cursor-pointer">Blah blah</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Home;
