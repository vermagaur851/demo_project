import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg"
    >
      <img
        src={product.image}
        alt={product.name}
        className=" w-full h-48 object-contain"
      />
      <div className="p-4 flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500">{product.description}</p>
        </div>
        <p className="text-xl font-bold text-gray-800 mt-2">{product.price}</p>
      </div>
      <div className="absolute inset-0 bg-gray-900 bg-opacity-0 group-hover:bg-opacity-10 transition duration-300"></div>
    </Link>
  );
};

export default ProductCard;
