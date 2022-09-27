import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [isOpened, setIsOpened] = React.useState(false);

  const toggleMenu = () => {
    if (isOpened) {
      setIsOpened(false);
    } else {
      setIsOpened(true);
    }
  };
  return (
    <nav className="">
      <ul className={`${isOpened ? '-translate-x-0' : '-translate-y-full translate-x-full'} duration-500 flex flex-col absolute bg-gray-800 text-white p-32 top-0 bottom-10 right-0 rounded-bl-full justify-start items-start`}>
        <li className="font-bold text-2xl p-2 hover:underline hover:text-orange-300">
          <Link to="/features">Features</Link>
        </li>
        <li className="font-bold text-2xl p-2 hover:underline hover:text-orange-300">
          <Link to="/tutorial">How it works</Link>
        </li>
        <li className="font-bold text-2xl p-2 hover:underline hover:text-orange-300">
          <Link to="/about">About us</Link>
        </li>
        <li className="font-bold text-2xl p-2 hover:underline hover:text-orange-300">
          <Link to="/signin">Sign in</Link>
        </li>
        <li className="font-bold text-2xl p-2 hover:underline hover:text-orange-300">
          <Link to="/signup">Start for free</Link>
        </li>
      </ul>
      <button onClick={() => toggleMenu(!isOpened)} className="absolute m-4 right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-200" type="button">
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
