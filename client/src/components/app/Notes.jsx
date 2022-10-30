import React from 'react';

function Notes() {
  return (
    <div className="w-screen md:mb-16">
      <div className="bg-gradient-to-b from-transparent to-gray-200 backdrop-blur-xl w-full h-full flex justify-center items-center py-32 lg:py-60 lg:pb-96">
        <div className="w-5/6 h-40 bg-gray-500/50 p-4 rounded-xl shadow-xl shadow-gray-500/70 border border-gray-500">
          <h1 className="text-4xl font-bold m-4 hidden">Todo</h1>
          <div className="flex justify-center items-center h-full w-full">
            <p className="font-bold text-2xl">Coming soon!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
