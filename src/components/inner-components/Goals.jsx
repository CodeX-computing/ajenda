import React from 'react';
import Ajenda from '../Ajenda';

function Goals() {
  return (
    <div className="w-screen h-screen bg-heroBg bg-cover">
      <div className="bg-gradient-to-b from-transparent to-white backdrop-blur-xl w-full h-full flex flex-col justify-start items-center pt-32">
        <Ajenda />
        <div className="w-5/6 bg-gray-500/50 p-4 rounded-xl shadow-md border border-gray-500">
          <h1 className="text-4xl font-bold m-4">Todo</h1>
          <input className="w-full p-2 border-b rounded-xl bg-gray-100/50" placeholder="Buy coffee" />
          <p className="w-full p-2 border-b">Build my app!</p>
        </div>
      </div>
    </div>
  );
}

export default Goals;
