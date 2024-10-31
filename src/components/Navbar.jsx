import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(1);
  return (
    <nav className="p-4 shadow-md border-b-4 border-gray-800 ">
      <div className="flex justify-between items-center gap-6 px-4">
        <div className="md:hidden cursor-pointer transition duration-200">
          {open ? (
            <div
              className="transition ease-out duration-300 hover:ease-in"
              onClick={() => setOpen(0)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="black"
                height="2em"
                width="2em"
                className="transition transform rotate-180 duration-300 ease-in-out"
              >
                <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
              </svg>
            </div>
          ) : (
            <div
              className="transition ease-out duration-300 hover:ease-in hover:bg-white"
              onClick={() => setOpen(1)}
            >
              <svg
                fill="none"
                viewBox="0 0 15 15"
                height="2em"
                width="2em"
                className="transition transform duration-300 ease-in-out"
              >
                <path
                  fill="black"
                  fillRule="evenodd"
                  d="M12.854 2.854a.5.5 0 00-.708-.708L7.5 6.793 2.854 2.146a.5.5 0 10-.708.708L6.793 7.5l-4.647 4.646a.5.5 0 00.708.708L7.5 8.207l4.646 4.647a.5.5 0 00.708-.708L8.207 7.5l4.647-4.646z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="hidden px-2 md:flex text-black gap-4 font-medium transition-all">
          <Link
            to="/"
            className={"border-b-2 border-transparent hover:border-black transition-all duration-300"}
          >
            Home
          </Link>
          <Link
            to="/collections"
            className={"border-b-2 border-transparent hover:border-black transition-all duration-300"}
          >
            Collections
          </Link>
          <Link
            to="/offers"
            className={"border-b-2 border-transparent hover:border-black transition-all duration-300"}
            >
            Offers
          </Link>
          <Link
            to="/contact"
            className={"border-b-2 border-transparent hover:border-black transition-all duration-300"}>
            Contact Us
          </Link>
        </div>
        <Link
          to="/"
          className="text-2xl border-black md:absolute md:ml-[42%] flex items-center font-serif font-bold text-gray-600"
        >
          <svg viewBox="0 0 24 24" fill="black" height="1em" width="1em">
            <path d="M17.5 5.1C18.5 6.4 19 7.6 19 9c0 1.7-.7 3.3-2.4 5.1-1.9 2-3.6 4.2-3.6 6.4 0 .4.1.8.2 1.3 0 .1 0 .2-.1.3-.1.1-.2 0-.2-.1-1-1.3-1.5-2.5-1.5-3.9 0-1.7.7-3.3 2.4-5.1 1.9-2 3.6-4.2 3.6-6.4 0-.4-.1-.8-.2-1.3 0-.1 0-.2.1-.3.1 0 .1 0 .2.1m-7.8-3c.7.9 1 1.9 1 2.8 0 1.3-.6 2.5-1.8 3.8-1.4 1.5-2.7 3.2-2.7 4.8 0 .3.1.7.2.9 0 .1 0 .1-.1.2s-.2 0-.2 0c-.8-1-1.1-2-1.1-2.9 0-1.3.6-2.5 1.8-3.8 1.4-1.5 2.7-3.2 2.7-4.8 0-.3-.1-.7-.2-.9V2c.2 0 .3 0 .4.1m.4 7.8c1.9-2 3.6-4.2 3.6-6.4 0-.4-.1-.8-.2-1.3 0-.1 0-.2.1-.3.1-.1.2 0 .2.1 1 1.3 1.5 2.5 1.5 3.9 0 1.7-.7 3.3-2.4 5.1-1.9 2-3.6 4.2-3.6 6.4 0 .4.1.8.2 1.3 0 .1 0 .2-.1.3-.1.1-.2 0-.2-.1-1-1.3-1.5-2.5-1.5-3.9 0-1.7.7-3.3 2.4-5.1z" />
          </svg>
          PerfumeStore
        </Link>
        <div className="flex gap-4 justify-center items-center">
          <svg viewBox="0 0 24 24" fill="currentColor" height="1.5em">
            <path d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
          </svg>
          <svg viewBox="0 0 512 512" fill="currentColor" height="1.5em">
            <path
              fill="none"
              fillRule="evenodd"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
            />
          </svg>
          <svg viewBox="0 0 1024 1024" fill="currentColor" height="1.5em">
            <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" />
          </svg>
        </div>
      </div>
      <div
        className={`${
          open ? " w-0 z-0 opacity-0" : " w-80 opacity-100 "
        } absolute -ml-5 bg-white text-xl font-bold font-serif flex flex-col h-3/5 z-10 gap-5 text-center text-black ease-in-out items-center justify-center transition-all duration-500`}
      >
        <Link
          to="/"
          className={`${
            open ? "opacity-0" : "opacity-100"
          } border-b-2 border-transparent hover:border-black transition-all duration-300`}
        >
          Home
        </Link>
        <Link
          to="/collections"
          className={`${
            open ? "opacity-0" : "opacity-100"
          } border-b-2 border-transparent hover:border-black transition-all duration-300`}
        >
          Collections
        </Link>
        <Link
          to="/offers"
          className={`${
            open ? "opacity-0" : "opacity-100"
          } border-b-2 border-transparent hover:border-black transition-all duration-300`}
        >
          Offers
        </Link>
        <Link
          to="/contact"
          className={`${
            open ? "opacity-0" : "opacity-100"
          } border-b-2 border-transparent hover:border-black transition-all duration-300`}
        >
          Contact Us
        </Link>
        <svg
          className=""
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1.5em"
        >
          <path d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
