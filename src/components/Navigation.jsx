import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

function Navigation() {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    if (isOpened) {
      setIsOpened(false);
    } else {
      setIsOpened(true);
    }
  };
  return (
    <nav className="z-10 absolute top-0 h-20 w-full flex justify-between items-center bg-white/50 shadow-2xl shadow-gray-100">
      <Link to="/">
        <img src={logo} alt="logo" className="logo h-16" />
      </Link>
      <ul className={`${isOpened ? 'translate-x-0' : 'translate-x-full'} duration-300 flex flex-col absolute h-screen bg-gray-800 lg:bg-gray-700/0 backdrop-blur-50 text-white lg:text-gray-900 lg:p-4 p-20 pt-20 lg:pt-4 top-0 bottom-10 right-0 rounded-bl-full lg:rounded-none justify-start lg:justify-end items-start lg:flex-row lg:translate-x-0 z-10`}>
        <li className="text-xl p-2 mx-1 my-1 lg:my-0 hover:bg-gray-600 lg:hover:bg-gray-200 rounded-md">
          <Link to="/features" onClick={() => toggleMenu(!isOpened)}>
            Features
          </Link>
        </li>
        <li className="text-xl p-2 mx-1 my-1 lg:my-0  hover:bg-gray-600 lg:hover:bg-gray-200 rounded-md">
          <Link to="/how" onClick={() => toggleMenu(!isOpened)}>
            How it works
          </Link>
        </li>
        <li className="text-xl p-2 mx-1 my-1 lg:my-0  hover:bg-gray-600 lg:hover:bg-gray-200 rounded-md">
          <Link to="/about" onClick={() => toggleMenu(!isOpened)}>
            About us
          </Link>
        </li>
        <li className="text-xl p-2 mx-1 my-1 lg:my-0  hover:bg-gray-600 lg:hover:bg-gray-200 rounded-md">
          <Link to="/signin" onClick={() => toggleMenu(!isOpened)}>
            Sign in
          </Link>
        </li>
        <li className="text-xl p-2 mx-1 my-1 lg:my-0 hover:bg-gray-600 lg:hover:bg-gray-200text-gray-100 bg-orange-700 rounded-md shadow-md">
          <Link to="/signup" onClick={() => toggleMenu(!isOpened)}>
            Start for free
          </Link>
        </li>
      </ul>
      <button onClick={() => toggleMenu(!isOpened)} className="absolute m-4 right-5 flex flex-col items-center items-end justify-center w-10 h-10 bg-white/90 shadow shadow-xl shadow-gray-200 hover:shadow-inner rounded-full cursor-pointer lg:hidden hover:bg-gray-200 z-10" type="button">
        <svg className={`${isOpened ? 'hidden' : ''} w-6 h-6 text-gray-700`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4 6h16M4 12h16M4 18h16" className="" />
        </svg>
        <svg className={`${!isOpened ? 'hidden' : ''} w-6 h-6 text-gray-700`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" className="" />
        </svg>
      </button>
    </nav>
  );
}

export default Navigation;
