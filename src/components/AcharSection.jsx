import React from "react";

const AcharSection = () => {
  return (
    <div className="bg-[#fef7ec] text-black px-4 py-12">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          WHAT MAKES CHAMPARAN ACHAAR DIFFERENT
        </h2>
        <p className="text-center text-base md:text-lg text-gray-700 mb-12 px-4 md:px-20">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos 
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>

        <div className="bg-orange-500 rounded-lg grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          {/* Left: Full Image Section */}
          <div className="w-full h-full">
            <img
              src="/Rectangle1.png" // Replace with actual path
              alt="Red Chilli Pickle"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Text Content */}
          <div className="text-white p-8 lg:p-16 flex flex-col justify-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              A LEGACY OF FLAVOR, CRAFTED WITH CARE
            </h3>
            <p className="mb-4 text-black">
              For generations, Champaran Achaar has been more than just a pickle,
              it's a tradition passed down with love.
            </p>
            <p className="mb-4 text-black">
              Handcrafted in small batches, sun-dried to perfection, and made without additives. <br />
              Every jar brings the authentic taste of Champaran to your table. <br />
              Taste the heritage, savor the purity.
            </p>
            <p className="mt-6 text-sm tracking-wide">
              GUT FRIENDLY | NO PRESERVATIVES | ICONIC FLAVOURS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcharSection;
