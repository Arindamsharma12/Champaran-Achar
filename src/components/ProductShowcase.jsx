import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ProductCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  
  const products = [
    {
      id: 1,
      name: "RED CHILLI PICKLE",
      price: "₹249",
      weight: "50g",
      image: "/achaarbox.png"
    },
    {
      id: 2,
      name: "AAM PICKLE",
      price: "₹249",
      weight: "50g",
      image: "/achaarbox.png"
    },
    {
      id: 3,
      name: "LEMON PICKLE",
      price: "₹249",
      weight: "50g",
      image: "/achaarbox.png"
    },
    {
      id: 4,
      name: "GREEN CHILLI PICKLE",
      price: "₹249",
      weight: "50g",
      image: "/achaarbox.png"
    },
    {
      id: 5,
      name: "SWEET CHILLI PICKLE",
      price: "₹199",
      weight: "50g",
      image: "/achaarbox.png"
    },
    {
      id: 6,
      name: "RED GARLIC PICKLE",
      price: "₹249",
      weight: "50g",
      image: "/achaarbox.png"
    }
  ];

  // Display 5 products at a time on larger screens
  const visibleProducts = products.slice(startIndex, startIndex + 5);
  
  const goToPrevious = () => {
    setStartIndex(Math.max(0, startIndex - 1));
  };
  
  const goToNext = () => {
    setStartIndex(Math.min(products.length - 5, startIndex + 1));
  };

  return (
    <div className="bg-amber-50 font-montserrat p-8 w-full">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-900">
          EXPLORE THE REAL CHAMPARAN TASTE
        </h1>
        
        <div className="flex justify-center mb-8">
          <a href="#" className="text-gray-700 font-medium">
            SHOP ALL
          </a>
        </div>
        
        <div className="relative">
          {/* Navigation arrows in top right corner */}
          <div className="absolute right-0 -top-12 flex space-x-2">
            <button 
              onClick={goToPrevious}
              disabled={startIndex === 0}
              className="p-1 text-gray-400 hover:text-gray-700"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={goToNext}
              disabled={startIndex >= products.length - 5}
              className="p-1 text-gray-400 hover:text-gray-700"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex space-x-4 overflow-x-hidden w-full">
              {visibleProducts.map(product => (
                <div key={product.id} className="flex-shrink-0 w-1/5 bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col items-center">
                  <div className="mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  
                  <h3 className="font-medium text-center text-sm mb-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-baseline space-x-1 mb-2">
                    <span className="font-bold text-lg">{product.price}</span>
                    <span className="text-sm text-gray-700">{product.weight}</span>
                  </div>
                  
                  <p className="text-xs text-gray-600 text-center mb-4">
                    Lorem ipsum dolor sit amet porro quisquam est
                  </p>
                  
                  <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md w-full mt-auto transition duration-200">
                    Add to cart
                  </button>
                </div>
              ))}
            </div>
            
            {/* Removed the bottom navigation button since we now have it at the top */}
          </div>
        </div>
      </div>
    </div>
  );
}