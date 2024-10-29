import React from "react";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import NewArrival from "../components/LimitedDeal";

const products = [
  {
    id: 1,
    name: "Perfume A",
    description: "Fresh and elegant scent.",
    price: "$50",
    image: "/images/perfume-a.webp",
  },
  {
    id: 2,
    name: "Perfume B",
    description: "Woody and warm aroma.",
    price: "$65",
    image: "/images/perfume-b.webp",
  },
  {
    id: 3,
    name: "Perfume C",
    description: "Citrusy and vibrant.",
    price: "$55",
    image: "/images/perfume-c.webp",
  },
  {
    id: 4,
    name: "Perfume D",
    description: "Sweet and floral notes.",
    price: "$70",
    image: "/images/perfume-d.webp",
  },
];

const newlyArrived = [
  {
    id: 5,
    name: "Perfume E",
    description: "Elegant and refined scent.",
    price: "$75",
    image: "/images/perfume-e.webp",
  },
  {
    id: 6,
    name: "Perfume F",
    description: "Sophisticated and bold aroma.",
    price: "$85",
    image: "/images/perfume-f.webp",
  },
  {
    id: 7,
    name: "Perfume G",
    description: "Luxurious and exotic.",
    price: "$90",
    image: "/images/perfume-g.webp",
  },
  {
    id: 8,
    name: "Perfume H",
    description: "Timeless and classic.",
    price: "$70",
    image: "/images/perfume-h.webp",
  },
];

const HomePage = () => {
  return (
    <div className="bg-gray-50 ">
      <Banner />
      <div className="min-h-screen">
        <section className=" py-10 px-4 md:px-8 ">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            New Arrivals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newlyArrived.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        <section className=" py-10 px-4 md:px-8 ">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Traditonal
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
