import React from 'react';

const MissionSection = ({ title, description }) => (
  <div className="mb-8">
    <h2 className="text-xl font-bold mb-3 text-gray-900">{title}</h2>
    <p className="text-base leading-relaxed text-gray-800">{description}</p>
  </div>
);

export default function OurMission() {
  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold text-center mb-12 text-gray-900">OUR MISSION</h1>
        
        <div className="flex flex-row items-start gap-10">
          <div className="w-1/2 flex justify-center">
            <img 
              src="/Rectangle45.png" 
              alt="Wah Red Chili Pickle" 
              className="w-full h-auto max-w-md"
            />
          </div>
          
          <div className="w-1/2 space-y-8">
            <MissionSection 
              title="PRESERVING TRADITION WITH EVERY JAR"
              description="At Champaran Achaar, we are dedicated to keeping the essence of traditional Indian pickling alive. Our recipes have been passed down for generations, using time-honored techniques to ensure that every jar carries the authentic, bold flavors of Champaran, just as it was meant to be."
            />
            
            <MissionSection 
              title="PURE, NATURAL, AND UNCOMPROMISED QUALITY" 
              description="We believe in making pickles the way they were originally crafted—free from artificial preservatives, colors, or chemicals. Our ingredients are locally sourced from trusted farmers, sun-dried for enhanced flavor, and preserved in pure mustard oil to bring you a product that is not only delicious but also wholesome."
            />
            
            <MissionSection 
              title="EMPOWERING FARMERS AND LOCAL COMMUNITIES"
              description="Champaran Achaar is more than just a brand; it is a movement to support local farmers and artisans. By sourcing our ingredients responsibly and working closely with small-scale producers, we contribute to sustainable agriculture and fair trade, ensuring that every purchase directly benefits the people behind the flavors you love."
            />
          </div>
        </div>
      </div>
    </div>
  );
}