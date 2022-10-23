import React from 'react';
import { AiOutlineEnter } from 'react-icons/ai';

function Planner() {
  return (
    <div className="w-screen md:mb-32">
      <div className="bg-gradient-to-b from-transparent to-gray-200 backdrop-blur-xl w-full h-full flex flex-col justify-start items-center py-32 lg:py-60 lg:pb-96">
        <div className="w-5/6 bg-gray-500/50 p-4 rounded-xl shadow-xl shadow-gray-500/70 border border-gray-500">
          <h1 className="text-4xl font-bold m-4 hidden">Todo</h1>
          <div className="flex justify-between items-center">
            <input className="w-full p-3 shadow-xl shadow-gray-700 outline-0 shadow-inner rounded-tl-xl rounded-bl-xl text-gray-900 hover:bg-gray-300 focus:bg-gray-300 bg-gray-600/50" placeholder="Create a new Goal!" />
            <button type="button" className="p-3 rounded-tr-xl rounded-br-xl bg-gray-600/50 outline-0 shadow-inner text-gray-900">
              <AiOutlineEnter className="text-2xl text-" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planner;
