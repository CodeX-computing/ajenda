import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo1.png';
import { login } from '../../firebase';

function Signin() {
  const handlSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    login(email, password);
  };
  return (
    <div className="absolute h-full max-h-full top-0 bottom-0 left-0 right-0 flex flex-col justify-start items-center bg-loginBg bg-cover bg-repeat bg-center backdrop-opacity-10">
      <div className="backdrop-blur-md w-full h-full absolute" />
      <img className="w-40 m-4 mt-40 backdrop-opacity-0" src={logo} alt="logo" />
      <section className="flex flex-col bg-gray-200/60 rounded-xl p-5 shadow-2xl backdrop-opacity-40">
        <h1 className="font-bold text-2xl">Login to your account</h1>
        <form className="flex flex-col mt-4" onSubmit={(e) => handlSubmit(e)}>
          <input className="border-2 outline-none border-gray-300 rounded-full py-2 px-4 mt-2 bg-gray-100 invalid:border-b-red-300 valid:border-b-green-300" type="email" name="email" id="email" placeholder="user@email.com" required />

          <input className="border-2 outline-none border-gray-300 rounded-full py-2 px-4 mt-2 bg-gray-100 invalid:border-b-red-300 valid:border-b-green-300" type="password" name="password" id="password" placeholder="Password" minLength="6" maxLength="24" required />

          <button className="bg-gray-900 hover:bg-gray-800 active:bg-gray-700 text-white rounded-full p-2 mt-4" type="submit">
            Login
          </button>
        </form>
        <p className="m-4">
          Don&apos;t have account?
          {' '}
          <Link to="/signup" className="underline text-orange-900">
            Sign up
          </Link>
        </p>
      </section>
    </div>
  );
}

export default Signin;
