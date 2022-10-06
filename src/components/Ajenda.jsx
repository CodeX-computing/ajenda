import React from 'react';
import { Link } from 'react-router-dom';

function ajenda() {
  return (
    <div className="flex m-4">
      <Link to="/todo" className="text-xl bg-gray-900/30 hover:shadow-gray-500 shadow-md border border-gray-500 hover:shadow-inner p-2 mx-1 rounded-2xl pointer">
        Todo
      </Link>
      <Link to="/goals" className="text-xl bg-gray-900/30 hover:shadow-gray-500 shadow-md border border-gray-500 hover:shadow-inner p-2 mx-1 rounded-2xl pointer">
        Goals
      </Link>
      <Link to="/goals" className="text-xl bg-gray-900/30 hover:shadow-gray-500 shadow-md border border-gray-500 hover:shadow-inner p-2 mx-1 rounded-2xl pointer">
        Planer
      </Link>
      <Link to="/goals" className="text-xl bg-gray-900/30 hover:shadow-gray-500 shadow-md border border-gray-500 hover:shadow-inner p-2 mx-1 rounded-2xl pointer">
        Notes
      </Link>
    </div>
  );
}

export default ajenda;
