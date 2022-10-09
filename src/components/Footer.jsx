import React from 'react';

function Footer() {
  return (
    <footer className="z-20 relative flex flex-col mt-4 bg-gradient-to-b from-white to-gray-400 p-4 w-screen text-sm">
      <div className="pt-20" />
      <div className="flex justify-between mr-2">
        <div>
          <a className="ml-2 pr-2 text-md border-r border-gray-700 hover:text-orange-800 hover:underline" href="#privacy" target="_blank" rel="noreferrer">
            Privacy
          </a>
          <a className="ml-2 pr-2 text-md border-r border-gray-700 hover:text-orange-800 hover:underline" href="#Privacy" target="_blank" rel="noreferrer">
            Terms
          </a>
          <a className="ml-2 pr-2 text-md hover:text-orange-800 hover:underline" href="#API.com" target="_blank" rel="noreferrer">
            API
          </a>
        </div>
        <div>
          <select className="bg-gray-100 border border-gray-700 rounded-md p-2 outline-0" name="language" id="language" defaultValue="en">
            <option value="English">English</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between mx-2 mt-4">
        <p>
          This app was created by
          <a href="https://ismailcourr.ml" target="_blank" rel="noreferrer">
            <span className="hover:text-orange-800 hover:underline font-bold"> Ismail Courr</span>
          </a>
        </p>
        <p>
          All rights reserved &copy;
          <span>{` ${new Date().getFullYear()}`}</span>
          <a href="https://codexcomputing.tk" target="_blank" rel="noreferrer">
            <span className="hover:text-orange-800 hover:underline font-bold"> Codex Computing</span>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
