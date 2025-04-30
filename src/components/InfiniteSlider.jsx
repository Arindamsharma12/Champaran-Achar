import React from 'react';
import { IoStarOutline } from "react-icons/io5";
export default function InfiniteSlider() {
  // The content items for the slide bar
  const items = [
    "Handcrafted with Love",
    "Sun-Dried Perfection", 
    "Pure & Preservative-Free",
    "Supporting Local Farmers",
    "Taste of Champaran",
    "Arindam's creativity"
  ];
  
  return (
    <div className="w-full flex flex-col items-center">
     
      {/* The marquee container */}
      <div className="relative w-full bg-orange-500 overflow-hidden flex">
        {/* First copy of the content */}
        <div className="animate-marquee whitespace-nowrap flex">
          {items.map((item, index) => (
            <div key={`item-${index}`} className="flex items-center text-white px-4 py-2">
              <span>{item}</span>
              <span className="mx-4"><IoStarOutline/></span>
            </div>
          ))}
        </div>
        
        {/* Second copy for seamless looping */}
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex">
          {items.map((item, index) => (
            <div key={`item-copy-${index}`} className="flex items-center text-white px-4 py-2">
              <span>{item}</span>
              <span className="mx-4"><IoStarOutline/></span>
            </div>
          ))}
        </div>
      </div>
      
      {/* CSS for the animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 15s linear infinite;
        }
      `}</style>
      
      {/* Implementation Instructions */}
    </div>
  );
}