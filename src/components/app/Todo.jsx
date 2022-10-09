import React from 'react';
import { AiOutlineEnter } from 'react-icons/ai';

function Todo() {
  return (
    <div className="w-screen h-screen">
      <div className="bg-gradient-to-b from-transparent to-gray-200 backdrop-blur-xl w-full h-full flex flex-col justify-start items-center pt-32">
        <div className="w-5/6 bg-gray-500/50 p-4 rounded-xl shadow-xl shadow-gray-500/70 border border-gray-500">
          <h1 className="text-4xl font-bold m-4 hidden">Todo</h1>
          <div className="flex justify-between items-center">
            <input className="w-full p-3 shadow-xl shadow-gray-700 outline-0 shadow-inner rounded-tl-xl rounded-bl-xl text-gray-900 hover:bg-gray-300 focus:bg-gray-300 bg-gray-600/50" placeholder="Create your todo task!" />
            <button type="button" className="p-3 rounded-tr-xl rounded-br-xl bg-gray-600/50 outline-0 shadow-inner text-gray-900">
              <AiOutlineEnter className="text-2xl text-" />
            </button>
          </div>
          <div className="flex w-full px-2 py-4 border-b">
            <input type="checkbox" className="p-4 bg-gary-300" />
            <p className="ml-2">Build my app!</p>
          </div>
          <div className="flex w-full px-2 py-4 border-b">
            <input type="checkbox" />
            <p className="ml-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempore nesciunt nam alias repellendus numquam dolore doloribus esse delectus quos, ipsa eos odio. Sequi nam iusto, quam cum ipsa sunt.</p>
            <div className="ml-2 text-xl font-bold text-red-800 bg-gray-400 self-center px-2 rounded-full pointer">X</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
