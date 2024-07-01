import React from 'react';
import Pie from './piechart';
import LineChart from './linechart';

const StatsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-white font-sans">
      <h1 className="text-5xl mb-8">Statistics</h1>
      <div className="flex flex-wrap justify-around gap-5 w-full max-w-7xl">
        <Pie />
        <LineChart />
      </div>
    </div>
  );
};

export default StatsPage;