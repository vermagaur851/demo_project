import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const adsCollection = [
    "/video/ads.mp4",
    "/video/ads1.mp4",
    "/video/ads3.mp4",
    "/video/ads4.mp4",
    "/video/ads5.mp4",
  ];
  const weblink = [
    "/coco",'/dior','/gucci','/versac','/burberry'
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % adsCollection.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? adsCollection.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-[32rem] overflow-hidden flex justify-center items-center font-serif">
      <video
        className="w-full h-full object-cover absolute transition-all duration-500"
        key={currentIndex}
        src={adsCollection[currentIndex]}
        autoPlay
        muted
        onEnded={handleNext}
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Discover Our Exclusive Perfume Collection
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6 font-sans">
          Unique fragrances for every occasion.
        </p>
        <Link to={weblink[currentIndex]} className="bg-gray-100 text-gray-800 font-semibold px-6 py-2 rounded-md hover:bg-white transition duration-200">
          Shop Now
        </Link>
      </div>

      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition duration-200"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition duration-200"
      >
        &#10095;
      </button>

      <div className="absolute bottom-4 flex space-x-2">
        {adsCollection.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? "bg-white w-5" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
