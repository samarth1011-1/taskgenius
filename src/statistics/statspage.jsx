import React from 'react';
import Pie from './piechart';
import Barchart from './Barchart';

const StatsPage = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-5 text-white font-sans bg-[#1e1e2e]">
      <h1 className="text-5xl mb-10">Statistics</h1>
      <div className="flex flex-wrap justify-around gap-5 w-full max-w-7xl">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Pie />
        </div>
        {/* <div className="w-full lg:w-1/2 flex justify-center">
          <Barchart />
        </div> */}
      </div>
    </div>
  );
};

export default StatsPage;
