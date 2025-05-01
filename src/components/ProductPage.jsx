import React, { useState } from 'react';

const ProductPage = () => {
  const thumbnails = [
    '/achaarbox.png',
    '/Rectangle1.png',
    '/mask.png',
    '/achaarbox.png',
  ];

  const [mainImage, setMainImage] = useState('/achaarbox.png');
  const [quantity, setQuantity] = useState(1);

  const handleImageClick = (src) => setMainImage(src);
  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center space-x-8">
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-orange-600">Shop</a>
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-orange-600">About Us</a>
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-orange-600">Contact Us</a>
        </div>
        <div className="flex-1 flex justify-center">
          <img src="/logo2.png" alt="Waah Logo" className="h-10" />
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-orange-600">Search</a>
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-orange-600">My Cart</a>
          <a href="#" className="text-sm text-gray-700 hover:text-orange-600">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0v.75H4.5v-.75z" />
            </svg>
          </a>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 px-8 py-4 space-x-1">
        <span>Home</span> <span>&gt;</span>
        <span>All Products</span> <span>&gt;</span>
        <span className="font-semibold">Red Chilli Pickle</span>
      </div>

      {/* Main content */}
      <main className="px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image gallery */}
        <div className="flex gap-4">
          <div className="flex flex-col space-y-4">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Thumb ${index + 1}`}
                onClick={() => handleImageClick(thumb)}
                className="w-20 h-20 object-cover border hover:border-orange-500 cursor-pointer"
              />
            ))}
          </div>
          <img src={mainImage} alt="Main product" className="w-full h-auto max-w-md object-contain" />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Red Chilli Pickle</h1>
          <div className="flex items-center mb-4">
            <div className="text-yellow-500 mr-2">★★★★☆</div>
            <span className="text-sm text-gray-600">4.5 (252)</span>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-4">₹249/-</p>

          {/* Size Options */}
          <div className="flex space-x-2 mb-4">
            {['250g', '500g', '750g', '1kg'].map(size => (
              <button key={size} className="px-4 py-2 border rounded hover:bg-orange-100 focus:outline-none">{size}</button>
            ))}
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm mb-6">
            Enjoy the authentic taste of Champaran with our Red Chilli Pickle — a fiery blend of flavor and tradition!
          </p>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded px-2">
              <button className="text-xl px-2" onClick={decrement}>-</button>
              <span className="px-2">{quantity}</span>
              <button className="text-xl px-2" onClick={increment}>+</button>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded">
              Add to cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
