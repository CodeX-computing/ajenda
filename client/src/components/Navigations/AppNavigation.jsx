import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import {
  FcTodoList, FcPlanner, FcInspection, FcDocument,
} from 'react-icons/fc';
import { RiMenuUnfoldLine, RiMenuFoldLine } from 'react-icons/ri';
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
      <nav className="z-20 fixed top-0 h-10 w-full flex justify-between items-center bg-orange-800 ">
        <div className="flex items-center">
          <button type="button" onClick={() => handleMenu()} className="text-2xl text-gray-100 hover:text-gray-200 p-2 mx-2 rounded-2xl pointer">
            <RiMenuUnfoldLine className={`${isOpened ? 'hidden' : 'block'} text-gray-100 hover:bg-orange-200/10 rounded`} />
            <RiMenuFoldLine className={`${isOpened ? 'block' : 'hidden'} text-gray-100 hover:bg-orange-200/10 rounded`} />
          </button>
        </div>
        <div className="flex items-center justify-end px-4 w-full">
          <button type="button" className=" rounded-full border-2 border-gray-900 pointer">
            <img src="https://avatars.githubusercontent.com/u/25227022?v=4" alt="avatar" className="h-7 w-7 rounded-full pointer" />
          </button>
        </div>
      </nav>
      <nav className={`md:pb-52 z-10 fixed bottom-0 top-0 h-fil md:relative py-4 flex flex-col justify-between items-start bg-gray-200 md:bg-gray-200/70 shadow-2xl shadow-gray-100 duration-300  ${isOpened ? 'left-0 w-56' : '-left-full w-0'} `}>
        <div className="flex flex-col items-start mt-10">
          <Link to="/">
            <img src={logo} alt="logo" className="logo h-15 mb-4" />
          </Link>
          <Link to="/app/todo" className="text-xl py-1 mx-10 pointer">
            <FcTodoList className="inline mr-1" />
            Todo
          </Link>
          <Link to="/app/goals" className="text-xl py-1 mx-10 pointer">
            <FcInspection className="inline mr-1" />
            Goals
          </Link>
          <Link to="/app/planner" className="text-xl py-1 mx-10  pointer">
            <FcPlanner className="inline mr-1" />
            Planer
          </Link>
          <Link to="/app/notes" className="text-xl py-1 mx-10  pointer">
            <FcDocument className="inline mr-1" />
            Notes
          </Link>
        </div>
        <button type="button" className="text-md text-gray-200 p-2 mx-10 bg-red-600 rounded-xl shadow shadow-md active:shadow-inner shadow-orange-900">
          <FiLogOut className="inline mr-1" />
          Log out
        </button>
      </nav>
    </>
  );
}

export default AppNavigation;
