import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/img/hero.webp';

function Home() {
  return (
    <div className="home">
      <header className="bg-heroBg bg-cover bg-center pt-20">
        <div className="overflow-hidden w-full h-full flex flex-col justify-start items-center bg-gradient-to-b from-transparent to-white backdrop-blur-md">
          <h1 className="text-4xl font-bold text-center p-4 mt-20 leading-10">
            Organize your work and life,
            <br />
            one task at a time.
          </h1>
          <p className="p-2 text-xl text-center">
            Manage your tasks and projects,
            <br />
            and get more done with
            <br />
            ajenda app.
          </p>
          <Link to="/signup" className="text-xl p-3 m-4 lg:my-0 hover:bg-gray-600 text-gray-100 bg-orange-700 rounded-md shadow-md">
            Get Started for Free
          </Link>
          <img className="relative top-10 md:top-20 rounded-xl border border-gray-400 w-4/5 lg:w-3/4" src={heroImg} alt="hero" />
        </div>
      </header>
      <main>
        <div className="md:w-5/6 lg:w-3/5 m-auto flex flex-col justify-center items-center">
          {/* Section one */}
          <section className="flex flex-col lg:flex-row lg:justify-between justify-center items-center m-4 lg:m-10">
            <article className="md:w-1/2 lg:w-1/3 mt-10">
              <h2 className="p-2 text-3xl font-bold text-center lg:text-left">Organize your work</h2>
              <p className="p-2 text-md text-center lg:text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi accusamus in consequatur dolores enim praesentium minus repudiandae exercitationem, magnam ipsum voluptas distinctio iusto doloremque officiis magni voluptate. Eum, et. Porro?</p>
            </article>
            <article className="md:w-1/2 lg:w-1/3 mt-10">
              <img className="rounded-xl border" src={heroImg} alt="home one" />
            </article>
          </section>
          {/* Section two */}
          <section className="flex flex-col lg:flex-row-reverse lg:justify-between justify-center items-center m-4 lg:m-10">
            <article className="md:w-1/2 lg:w-1/3 mt-10">
              <h2 className="p-2 text-3xl font-bold text-center lg:text-left">Organize your work</h2>
              <p className="p-2 text-md text-center lg:text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi accusamus in consequatur dolores enim praesentium minus repudiandae exercitationem, magnam ipsum voluptas distinctio iusto doloremque officiis magni voluptate. Eum, et. Porro?</p>
            </article>
            <article className="md:w-1/2 lg:w-1/3 mt-10">
              <img className="rounded-xl border" src={heroImg} alt="home one" />
            </article>
          </section>
          {/* Section three */}
          <section className="flex flex-col lg:flex-row lg:justify-between justify-center items-center m-4 lg:m-10">
            <article className="md:w-1/2 lg:w-1/3 mt-10">
              <h2 className="p-2 text-3xl font-bold text-center lg:text-left">Organize your work</h2>
              <p className="p-2 text-md text-center lg:text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi accusamus in consequatur dolores enim praesentium minus repudiandae exercitationem, magnam ipsum voluptas distinctio iusto doloremque officiis magni voluptate. Eum, et. Porro?</p>
            </article>
            <article className="md:w-1/2 lg:w-1/3 mt-10">
              <img className="rounded-xl border" src={heroImg} alt="home one" />
            </article>
          </section>
          {/* Section foor */}
          <section className="flex flex-col lg:flex-row-reverse lg:justify-between justify-center items-center m-4 lg:m-10">
            <article className="md:w-1/2 lg:w-1/3 mt-10">
              <h2 className="p-2 text-3xl font-bold text-center lg:text-left">Organize your work</h2>
              <p className="p-2 text-md text-center lg:text-left">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi accusamus in consequatur dolores enim praesentium minus repudiandae exercitationem, magnam ipsum voluptas distinctio iusto doloremque officiis magni voluptate. Eum, et. Porro?</p>
            </article>
            <article className="md:w-1/2 lg:w-1/3 mt-10">
              <img className="rounded-xl border" src={heroImg} alt="home one" />
            </article>
          </section>
        </div>
        <hr className="w-20 mx-auto my-10 text-orange-100 border border-orange-200" />
      </main>
      <footer className="flex flex-col mt-4 bg-gradient-to-b from-white to-gray-400 p-4 w-screen text-sm">
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
    </div>
  );
}

export default Home;
