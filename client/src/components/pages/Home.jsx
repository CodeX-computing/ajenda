import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/img/hero.webp';
import picture1 from '../../assets/img/picture1.webp';
import picture2 from '../../assets/img/picture2.webp';
import picture3 from '../../assets/img/picture3.webp';
import picture4 from '../../assets/img/picture4.webp';

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
          <img className="relative top-10 md:top-20 rounded-xl border border-gray-400 w-4/5 lg:w-3/4 hover:-translate-y-10 duration-500" src={heroImg} alt="hero" />
        </div>
      </header>
      <main>
        <div className="md:w-5/6 lg:w-3/5 m-auto flex flex-col justify-center items-center">
          {/* Section one */}
          <section className="flex flex-col lg:flex-row lg:justify-between justify-center items-center m-4 lg:m-10">
            <article className="md:w-1/2 lg:w-1/3 mt-10">
              <h2 className="p-2 text-3xl font-bold text-center lg:text-left">Your All-In-One Todo List and Task Manager</h2>
              <p className="p-2 text-md text-center lg:text-left">In Ajenda, you can easily keep track of all your tasks and to-do items in one place. With our intuitive interface, you can quickly add new tasks, set deadlines, and mark items as complete.</p>
            </article>
            <article className="md:w-1/2 lg:w-1/3 mt-10">
              <img className="-rotate-12 hover:rotate-0 duration-500" src={picture1} alt="home one" />
            </article>
          </section>
          {/* Section two */}
          <section className="flex flex-col lg:flex-row-reverse lg:justify-between justify-center items-center m-4 lg:m-10">
            <article className="md:w-1/2 lg:w-1/3 mt-10">
              <h2 className="p-2 text-3xl font-bold text-center lg:text-left">Stay Organized with Ajenda&apos;s Planner and Agenda</h2>
              <p className="p-2 text-md text-center lg:text-left">Ajenda&apos;s planner and agenda feature helps you stay organized and on top of your schedule. You can create daily, weekly, or monthly calendars, and add events and appointments to keep track of your time.</p>
            </article>
            <article className="md:w-1/2 lg:w-1/3 mt-10">
              <img className=" rotate-12 hover:rotate-0 duration-500" src={picture2} alt="home one" />
            </article>
          </section>
          {/* Section three */}
          <section className="flex flex-col lg:flex-row lg:justify-between justify-center items-center m-4 lg:m-10">
            <article className="md:w-1/2 lg:w-1/3 mt-10">
              <h2 className="p-2 text-3xl font-bold text-center lg:text-left">Collaborate with Your Team in Ajenda</h2>
              <p className="p-2 text-md text-center lg:text-left">Need to work on a project with your team? Ajenda makes it easy to collaborate with your coworkers or classmates. You can assign tasks to team members, leave comments and notes, and track progress all in one place.</p>
            </article>
            <article className="md:w-1/2 lg:w-1/3 mt-10">
              <img className=" -rotate-12 hover:rotate-0 duration-500" src={picture3} alt="home one" />
            </article>
          </section>
          {/* Section foor */}
          <section className="flex flex-col lg:flex-row-reverse lg:justify-between justify-center items-center m-4 lg:m-10">
            <article className="md:w-1/2 lg:w-1/3 mt-10">
              <h2 className="p-2 text-3xl font-bold text-center lg:text-left">Customize Ajenda to Suit Your Needs</h2>
              <p className="p-2 text-md text-center lg:text-left">Ajenda is fully customizable to fit your unique needs. You can create multiple to-do lists for different areas of your life, set up notifications and reminders, and choose from a variety of colorful themes to make Ajenda your own.</p>
            </article>
            <article className="md:w-1/2 lg:w-1/3 mt-10 mb-10">
              <img className=" rotate-12 hover:rotate-0 duration-500" src={picture4} alt="home one" />
            </article>
          </section>
        </div>
        <hr className="w-20 mx-auto my-10 text-orange-100 border border-orange-200" />
      </main>
    </div>
  );
}

export default Home;
