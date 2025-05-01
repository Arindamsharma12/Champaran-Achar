import React from 'react';
import { Instagram } from 'lucide-react';

export default function SocialMedia() {
  return (
    <div className="w-full mx-auto px-4 py-12 bg-amber-50">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">CONNECT WITH US ON SOCIAL MEDIA</h1>
      
      {/* Instagram Handle with Icon */}
      <div className="flex justify-center items-center mb-8 border-l-4 border-orange-500 pl-3">
        <Instagram className="text-pink-600 mr-2" size={24} />
        <span className="text-2xl font-medium">@champaranachaar</span>
      </div>
      
      {/* Row of Images */}
      <div className="flex flex-nowrap justify-center overflow-x-auto gap-4 pb-4 scrollbar-hide" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
      <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        {/* Image 1 */}
        <div className="flex-none w-64 h-64 rounded-lg overflow-hidden shadow-md">
          <img 
            src="/Rectangle19.png" 
            alt="Social media post 1" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Image 2 */}
        <div className="flex-none w-64 h-64 rounded-lg overflow-hidden shadow-md">
          <img 
            src="/Rectangle20.png" 
            alt="Social media post 2" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Image 3 */}
        <div className="flex-none w-64 h-64 rounded-lg overflow-hidden shadow-md">
          <img 
            src="/Rectangle21.png" 
            alt="Social media post 3" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Image 4 */}
        <div className="flex-none w-64 h-64 rounded-lg overflow-hidden shadow-md">
          <img 
            src="/Rectangle22.png" 
            alt="Social media post 4" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-none w-64 h-64 rounded-lg overflow-hidden shadow-md">
          <img 
            src="/Rectangle19.png" 
            alt="Social media post 4" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-none w-64 h-64 rounded-lg overflow-hidden shadow-md">
          <img 
            src="/Rectangle20.png" 
            alt="Social media post 4" 
            className="w-full h-full object-cover"
          />
        </div>

        
      </div>
    </div>
  );
}