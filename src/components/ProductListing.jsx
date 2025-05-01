import React, { useState } from 'react';

const ProductListing = () => {
  // Filter states
  const [tasteFilter, setTasteFilter] = useState('');
  const [ingredientsFilter, setIngredientsFilter] = useState('');
  const [oilContentFilter, setOilContentFilter] = useState('');
  const [onionGarlicFilter, setOnionGarlicFilter] = useState('');
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  
  // Sample product data
  const products = Array(27).fill().map((_, index) => ({
    id: index + 1,
    name: 'RED CHILLI PICKLE',
    price: '₹249',
    weight: '50g',
    image: '/achaarbox.png',
    description: 'veritatis et quasi architecto beatae lorem ipsum dolor sit amet'
  }));
  
  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);
  
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  return (
    <div className="bg-amber-50 font-montserrat min-h-screen py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">ALL PRODUCTS</h1>
        
        {/* Divider */}
        <div className="border-t border-gray-300 mb-8"></div>
        
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span className="text-xl font-semibold text-gray-800">Filter</span>
          
          <div className="flex flex-wrap gap-4">
            <select 
              className="px-4 py-2 border border-gray-300 rounded-md bg-transparent"
              value={tasteFilter}
              onChange={(e) => setTasteFilter(e.target.value)}
            >
              <option value="" disabled selected>TASTE</option>
              <option value="spicy">Spicy</option>
              <option value="sweet">Sweet</option>
              <option value="tangy">Tangy</option>
            </select>
            
            <select 
              className="px-4 py-2 border border-gray-300 rounded-md bg-transparent"
              value={ingredientsFilter}
              onChange={(e) => setIngredientsFilter(e.target.value)}
            >
              <option value="" disabled selected>INGREDIENTS</option>
              <option value="chilli">Chilli</option>
              <option value="mango">Mango</option>
              <option value="lemon">Lemon</option>
            </select>
            
            <select 
              className="px-4 py-2 border border-gray-300 rounded-md bg-transparent"
              value={oilContentFilter}
              onChange={(e) => setOilContentFilter(e.target.value)}
            >
              <option value="" disabled selected>OIL CONTENT</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            
            <select 
              className="px-4 py-2 border border-gray-300 rounded-md bg-transparent"
              value={onionGarlicFilter}
              onChange={(e) => setOnionGarlicFilter(e.target.value)}
            >
              <option value="" disabled selected>HAS ONION/GARLIC</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-300 mb-8"></div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-3 gap-8">
          {currentProducts.map(product => (
            <div key={product.id} className="bg-white p-6 rounded-md flex flex-col items-center">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-40 h-40 object-contain mb-4"
              />
              <h2 className="text-lg font-medium text-center text-gray-800">{product.name}</h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-bold text-xl">{product.price}</span>
                <span className="text-gray-600">{product.weight}</span>
              </div>
              <p className="text-gray-600 text-center mt-2 text-sm">{product.description}</p>
              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md w-full transition duration-300">
                Add to cart
              </button>
            </div>
          ))}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    currentPage === number 
                      ? 'bg-orange-200 text-orange-800' 
                      : 'bg-white text-gray-600 hover:bg-orange-100'
                  }`}
                >
                  {number}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListing;