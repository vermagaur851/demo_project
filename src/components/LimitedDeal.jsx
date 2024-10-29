import React from 'react';

const LimitedDeal = () => {
  const deal = {
    title: 'Exclusive Limited Edition Perfume',
    description: 'Experience the essence of luxury with our limited edition perfume. Only 100 bottles available.',
    price: '$150',
    image: '/images/banner.webp', // Replace with the actual image path
    buttonText: 'Shop Now',
  };

  return (
    <section className="bg-gray-100 py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img src={deal.image} alt="Limited Deal" className="rounded-lg shadow-lg" />
        </div>

        <div className="w-full md:w-1/2 md:pl-10 flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">{deal.title}</h2>
          <p className="text-lg text-gray-600 mb-6">{deal.description}</p>
          <p className="text-2xl font-bold text-gray-800 mb-4">{deal.price}</p>
          <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition duration-150">
            {deal.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LimitedDeal;
