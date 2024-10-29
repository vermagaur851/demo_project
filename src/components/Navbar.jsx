import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 md:flex md:justify-between">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold text-gray-800">
          PerfumeStore
        </Link>
      </div>
      <div
        className="hidden md:flex space-x-6 items-center mt-4 md:mt-0"
      >
        <Link to="/" className="text-gray-700 hover:text-gray-900 transition duration-150">
          Home
        </Link>
        <Link to="/collections" className="text-gray-700 hover:text-gray-900 transition duration-150">
          Collections
        </Link>
        <Link to="/offers" className="text-gray-700 hover:text-gray-900 transition duration-150">
          Offers
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition duration-150">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
