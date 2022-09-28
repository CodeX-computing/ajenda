import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo1.png';

function Signin() {
  const handlSubmit = (e) => {
    e.preventDefault();
    alert('The form was submitted with the following data:');
  };
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-start items-center bg-[url('https://media.istockphoto.com/photos/to-do-list-on-notebook-over-pastel-blue-background-picture-id1145063957?k=6&m=1145063957&s=170667a&w=0&h=lmt1DfMLf3SNwvBP9sC7DQTsb527-_xldf7IqtdoPM0=')] bg-cover bg-center backdrop-opacity-10">
      <div className="backdrop-blur-md w-full h-full absolute" />
      <img className="w-40 m-4 mt-20 backdrop-opacity-0" src={logo} alt="logo" />
      <section className="flex flex-col bg-gray-200/60 rounded-xl p-10 shadow-2xl backdrop-opacity-40">
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
