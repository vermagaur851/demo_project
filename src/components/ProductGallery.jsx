import React, { useState } from 'react';

const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-64 md:h-80 mb-4">
        <img src={selectedImage} alt="Selected" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="flex space-x-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-transform transform hover:scale-105 border-2 ${selectedImage === image ? 'border-gray-800' : 'border-transparent'}`}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
