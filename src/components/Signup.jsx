import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo1.png';

function Signup() {
  const handlSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-start items-center bg-loginBg bg-cover bg-center backdrop-opacity-10">
      <div className="backdrop-blur-md w-full h-full absolute" />
      <img className="w-40 m-4 mt-40 backdrop-opacity-0" src={logo} alt="logo" />
      <section className="flex flex-col bg-gray-200/60 rounded-xl p-5 shadow-2xl backdrop-opacity-40">
        <h1 className="font-bold text-2xl">Create new account</h1>
        <form className="flex flex-col mt-4" onSubmit={(e) => handlSubmit(e)}>
          <input className="border-2 outline-none border-gray-300 rounded-full py-2 px-4 mt-2 bg-gray-100 invalid:border-b-red-300 valid:border-b-green-300" type="text" name="name" id="name" placeholder="Username" minLength="5" maxLength="10" required />
          <input className="border-2 outline-none border-gray-300 rounded-full py-2 px-4 mt-2 bg-gray-100 invalid:border-b-red-300 valid:border-b-green-300" type="email" name="email" id="email" placeholder="Email: user@email.com" required />
          <input className="border-2 outline-none border-gray-300 rounded-full py-2 px-4 mt-2 bg-gray-100 invalid:border-b-red-300 valid:border-b-green-300" type="password" name="password" id="password" placeholder="Password" minLength="6" maxLength="24" required />
          <input className="border-2 outline-none border-gray-300 rounded-full py-2 px-4 mt-2 bg-gray-100 invalid:border-b-red-300 valid:border-b-green-300" type="password" name="password2" id="password2" placeholder="Confirm Password" minLength="6" maxLength="24" required />
          <button className="bg-gray-900 hover:bg-gray-800 active:bg-gray-700 text-white rounded-full p-2 mt-4" type="submit">
            Create my account
          </button>
        </form>
        <p className="m-4">
          Already have an account?
          {' '}
          <Link to="/signin" className="underline text-orange-900">
            Sign-in
          </Link>
        </p>
      </section>
    </div>
  );
}

export default Signup;
