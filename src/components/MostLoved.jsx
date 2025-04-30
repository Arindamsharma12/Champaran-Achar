import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const products = [
  {
    title: "RED CHILLI PICKLE",
    description: "With the special flavours of specially picked red chillies",
    price: "₹249",
    weight: "50g",
    image: "/achaarbox.png",
  },
  {
    title: "RED CHILLI PICKLE",
    description: "With the special flavours of specially picked red chillies",
    price: "₹249",
    weight: "50g",
    image: "/achaarbox.png",
  },
  {
    title: "RED CHILLI PICKLE",
    description: "With the special flavours of specially picked red chillies",
    price: "₹249",
    weight: "50g",
    image: "/achaarbox.png",
  },
];

const MostLoved = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 2;

  const nextSlide = () => {
    if (currentIndex < products.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
    <div className="w-full bg-[#FFF7EA] font-montserrat py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title Centered */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1E1E1E] mb-2">
          MOST LOVED BY PEOPLE
        </h2>

        {/* Arrows Right-Aligned */}
        <div className="flex justify-end mb-6">
          <div className="flex gap-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white border hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white border hover:bg-gray-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="flex gap-6 overflow-hidden">
          {products.slice(currentIndex, currentIndex + visibleCards).map((product, index) => (
            <div
              key={index}
              className={`flex bg-white px-6 py-10 rounded-xl border w-1/2 items-center gap-6 transition-all duration-300 ${
                index === 0 ? "border-orange-400 shadow-md" : "border-transparent"
              }`}
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-40 object-contain"
              />
              <div className="flex flex-col justify-between h-full">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <hr className="w-2/3 my-2 border-t-2 border-black" />
                <p className="text-sm text-gray-700">{product.description}</p>
                <div className="mt-2 font-bold text-lg">
                  {product.price}{" "}
                  <span className="text-sm font-normal">{product.weight}</span>
                </div>
                <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 w-fit">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
     <div className="relative w-full h-32 bg-gray-800 overflow-hidden">
     {/* Background image with overlay */}
     <div 
       className="absolute inset-0 bg-cover bg-center" 
       style={{ 
         backgroundImage: "url('/Rectangle.png')",
         filter: "brightness(0.9)" 
       }}
     />
     
     {/* Content container */}
     <div className="relative h-full flex items-center justify-center px-4">
       <div className="flex items-center justify-center space-x-4 text-white">
         {/* Left star decoration */}
         <div className="text-white text-2xl">
           <svg 
             xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 0 24 24" 
             fill="currentColor" 
             className="w-6 h-6"
           >
             <path d="M12 2l1.5 4h4.5l-3.5 3 1.5 4-4-2-4 2 1.5-4-3.5-3h4.5z" />
           </svg>
         </div>
         
         {/* Main heading */}
         <h1 className="text-xl md:text-3xl font-bold text-white uppercase tracking-wide text-center">
           Feeding The India Real Taste of Champaran
         </h1>
         
         {/* Right star decoration */}
         <div className="text-white text-2xl">
           <svg 
             xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 0 24 24" 
             fill="currentColor" 
             className="w-6 h-6"
           >
             <path d="M12 2l1.5 4h4.5l-3.5 3 1.5 4-4-2-4 2 1.5-4-3.5-3h4.5z" />
           </svg>
         </div>
       </div>
     </div>
   </div>
   </>
  );
};

export default MostLoved;
