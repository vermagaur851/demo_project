import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductGallery from '../components/ProductGallery';
import axios from 'axios';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch product data from server
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const productResponse = await axios.get(`/api/products/${productId}`);
        setProduct(productResponse.data);

        const reviewsResponse = await axios.get(`/api/products/${productId}/reviews`);
        setReviews(reviewsResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId]);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  if (!product) return <div className="text-center py-10">Product not found.</div>;

  return (
    <div className="container mx-auto py-10 px-4 md:px-8">
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Product Gallery */}
        <div className="w-full md:w-1/2">
          <ProductGallery images={product?.images} />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">{product?.name}</h1>
          <p className="text-xl text-gray-600 font-bold mb-4">{product?.price}</p>
          <p className="text-gray-700 mb-6">{product?.description}</p>

          <div className="flex items-center space-x-4 mb-6">
            <span className="text-gray-700 font-semibold">Available Sizes:</span>
            {product?.sizes.map((size, index) => (
              <span key={index} className="px-2 py-1 bg-gray-200 rounded text-gray-800">
                {size}
              </span>
            ))}
          </div>

          {/* Share Button */}
          <button className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition duration-150">
            Share on Social Media
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reviews</h2>
        {reviews.length > 0 ? (
          <ul className="space-y-4">
            {reviews.map((review, index) => (
              <li key={index} className="border-b pb-4">
                <p className="text-gray-800 font-semibold">{review.user}</p>
                <p className="text-gray-600">{review.comment}</p>
                <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
        )}
      </section>
    </div>
  );
};

export default ProductPage;
