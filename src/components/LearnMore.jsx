import React from "react";

const LearnMore = () => {
  return (
    <div className="bg-[#fef7ec] px-4 py-16">
      <div className="flex justify-center ">
      <h2 className="text-2xl md:text-4xl font-bold text-center lg:text-left mb-8 ">
        LEARN MORE ABOUT CHAMPARAN ACHAAR
      </h2>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Centered Q&A Text Section */}
        <div className="flex flex-col justify-center h-full">
          <div className="space-y-8 text-gray-900">
            <div>
              <h3 className="font-semibold mb-1">
                What makes Champaran Achaar special?
              </h3>
              <p>
                Champaran Achaar is handcrafted using traditional recipes passed
                down for generations. We use sun-dried, high-quality ingredients
                without any additives or preservatives, ensuring an authentic
                and rich flavor in every bite.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">
                Are there any preservatives or artificial flavors in your
                pickles?
              </h3>
              <p>
                No, our pickles are made with 100% natural ingredients. We rely
                on time-tested preservation methods like sun-drying and mustard
                oil to keep them fresh and flavorful.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">
                How should I store my Champaran Achaar?
              </h3>
              <p>
                To maintain freshness and taste, store your pickle in a cool,
                dry place and always use a dry spoon. Avoid exposure to
                moisture, as it can affect the quality of the pickle.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Is Champaran Achaar spicy?</h3>
              <p>
                Our pickles come in a variety of flavors, some mild and others
                spicier. Our signature Red Chilli Pickle has a bold, tangy kick,
                while other varieties balance spice with rich flavors.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Centered Image */}
        <div className="flex justify-center">
          <img
            src="/Rectangle36.png" // Replace with actual path
            alt="Champaran Achaar Jar"
            className="rounded-xl shadow-md w-full max-w-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
