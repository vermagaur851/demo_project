import React from 'react';

const Banner = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center flex justify-center items-center font-serif" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Discover Our Exclusive Perfume Collection
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6 font-sans font">
          Unique fragrances for every occasion.
        </p>
        <button className="bg-gray-100 font-sans text-gray-800 font-semibold px-6 py-2 rounded-md hover:bg-white transition duration-200">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
