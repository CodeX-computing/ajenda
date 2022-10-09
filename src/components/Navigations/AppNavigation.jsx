import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import logo from '../../logo.png';

function AppNavigation() {
  const [isOpened, setIsOpened] = useState(false);

  const handleMenu = () => {
    if (isOpened) {
      setIsOpened(false);
    } else {
      setIsOpened(true);
    }
  };
  return (
    <>
      <nav className="z-20 fixed top-0 h-10 w-full flex justify-between items-center bg-orange-800 shadow-2xl shadow-gray-100">
        <div className="flex items-center">
          <button type="button" onClick={() => handleMenu()} className="text-2xl text-gray-100 hover:text-gray-200 p-2 mx-2 rounded-2xl pointer">
            <IoMenu className="text-gray-100 font-bold text" />
          </button>
          <Link to="/">
            <img src={logo} alt="logo" className="logo h-10" />
          </Link>
        </div>
      </nav>
      <nav className={`z-10 fixed md:relative py-4 flex flex-col justify-between items-start bg-gray-200 md:bg-gray-200/70 shadow-2xl shadow-gray-100 duration-500 lg:${isOpened ? 'left-0 w-56' : '-left-full w-0'} ${isOpened ? 'left-0 w-56' : '-left-full w-0'} `}>
        <div className="flex flex-col items-start mt-10">
          <Link to="/app/todo" className="text-xl py-1 mx-10 pointer">
            Todo
          </Link>
          <Link to="/app/goals" className="text-xl py-1 mx-10 pointer">
            Goals
          </Link>
          <Link to="/app/planner" className="text-xl py-1 mx-10  pointer">
            Planer
          </Link>
          <Link to="/app/notes" className="text-xl py-1 mx-10  pointer">
            Notes
          </Link>
        </div>
      </nav>
    </>
  );
}

export default AppNavigation;
