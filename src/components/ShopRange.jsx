import React from "react";
import { ChevronRight } from "lucide-react";

const products = [
  {
    name: "CHAMPARAN PICKLE",
    image: "/achaarbox.png",
    highlighted: true,
  },
  {
    name: "CHAMPARAN PAPAD",
    image: "/papad.png",
  },
  {
    name: "CHAMPARAN NAMKEEN",
    image: "/namkeen.png",
  },
];

const ShopRange = () => {
  return (
    <>
    <div className="bg-[#FFF7EA] font-montserrat py-10 px-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1E1E1E] mb-10">
        SHOP OUR RANGE
      </h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {products.map((item, idx) => (
            <div
            key={idx}
            className={`bg-white p-6 rounded-xl text-center w-48 md:w-60 flex flex-col items-center gap-4 border ${
                item.highlighted
                ? "border-orange-500 shadow-md"
                : "border-transparent"
            }`}
            >
            <img
              src={item.image}
              alt={item.name}
              className="h-28 w-28 object-contain"
              />
            <h3 className="font-bold text-sm md:text-base">{item.name}</h3>
            <ChevronRight className="w-5 h-5 text-black" />
          </div>
        ))}
      </div>
    </div>
    <div className="bg-[#FFF7EA] font-montserrat min-h-screen p-4">

    <div className="flex flex-col md:flex-row bg-[#EC6C1F] rounded-2xl overflow-hidden max-w-7xl mx-auto mt-10 h-[500px]">
      
      {/* Left image section */}
      <div className="md:w-1/2 h-full">
        <img
          src="/Rectangle1.png" // Replace with your image path
          alt="Red Chilli Pickle"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right text section */}
      <div className="md:w-1/2 h-full p-10 bg-[#F07428] text-white flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-4">
          A LEGACY OF FLAVOR, CRAFTED WITH CARE
        </h2>
        <p className="text-base text-black mb-4">
          For generations, Champaran Achaar has been more than just a pickle, it's a tradition passed down with love.
        </p>
        <p className="text-base text-black mb-4">
          Handcrafted in small batches, sun-dried to perfection, and made without additives, every jar brings the authentic taste of Champaran to your table. Taste the heritage, savor the purity.
        </p>
        <p className="text-base ">
          GUT FRIENDLY | NO PRESERVATIVES | ICONIC FLAVOURS
        </p>
      </div>
    </div>
    </div>
    </>
  );
};

export default ShopRange;
