import React from 'react'

const Hero = () => {
  return (
    <div
      className="relative w-full font-cooper h-164 bg-cover bg-center"
      style={{ backgroundImage: "url('/herobanner1.png')" }} // <-- Make sure to place the image in /public folder
      >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-start min-h-screen px-8 md:px-24">
        <div className="text-white w-full">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            The Iconic Champaran <br /> flavours are back!
          </h1>
          <p className="text-lg font-montserrat mb-6">
            GUT FRIENDLY | NO PRESERVATIVES | ICONIC FLAVOURS
          </p>
          <button className="bg-orange-500 font-montserrat hover:bg-orange-600 text-white px-6 py-3 rounded-md transition duration-300">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero