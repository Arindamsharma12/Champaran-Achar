import React from 'react';

const recommendedProducts = [
  {
    name: 'RED CHILLI PICKLE',
    price: '₹249',
    weight: '50g',
    image: '/achaarbox.png',
  },
  {
    name: 'AAM PICKLE',
    price: '₹249',
    weight: '50g',
    image: '/achaarbox.png',
  },
  {
    name: 'LEMON PICKLE',
    price: '₹249',
    weight: '50g',
    image: '/achaarbox.png',
  },
  {
    name: 'GREEN CHILLI PICKLE',
    price: '₹249',
    weight: '50g',
    image: '/achaarbox.png',
  },
  {
    name: 'SWEET CHILLI PICKLE',
    price: '₹199',
    weight: '50g',
    image: '/achaarbox.png',
  },
  {
    name: 'SWEET CHILLI PICKLE',
    price: '₹199',
    weight: '50g',
    image: '/achaarbox.png',
  },
  {
    name: 'SWEET CHILLI PICKLE',
    price: '₹199',
    weight: '50g',
    image: '/achaarbox.png',
  },
];

const YouShouldTry = () => {
  return (
    <section className="bg-orange-50 px-8 py-12">
      <h2 className="text-2xl font-bold text-center mb-8">YOU SHOULD TRY THESE TOO</h2>
      <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
        {recommendedProducts.map((product, idx) => (
          <div
            key={idx}
            className="min-w-[220px] max-w-[220px] bg-white border border-gray-200 rounded-2xl p-4 flex flex-col items-center flex-shrink-0 shadow-sm hover:shadow-md transition-shadow"
          >
            <img src={product.image} alt={product.name} className="h-40 object-contain mb-4" />
            <h3 className="text-sm font-semibold text-center">{product.name}</h3>
            <p className="text-lg font-bold mt-2">{product.price} <span className="text-sm font-medium text-gray-600">{product.weight}</span></p>
            <p className="text-xs text-gray-500 mt-1 text-center">Lorem ipsum dolor sit amet porro quisquam est</p>
            <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition-colors">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YouShouldTry;
