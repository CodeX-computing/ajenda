import React from 'react';
import { Link } from 'react-router-dom';
import notFound1 from '../assets/img/404.png';
import notFound2 from '../assets/img/offline.png';

function NotFound404() {
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative z-10">
          <h1 className="my-2 text-gray-800 font-bold text-2xl">Looks like you&apos;ve found the doorway to the great nothing</h1>
          <p className="my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
          <Link to="/" className="sm:w-full lg:w-auto my-2 rounded-xl md py-4 px-8 text-center bg-orange-700/90 text-white hover:bg-orange-700 outline-none" type="button">
            Take me there!
          </Link>
        </div>
        <div className="z-0 absolute top-20">
          <img src={notFound1} alt="404" />
        </div>
      </div>
      <div>
        <img src={notFound2} alt="404" />
      </div>
    </div>
  );
}

export default NotFound404;
