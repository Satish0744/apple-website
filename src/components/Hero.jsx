import React from 'react';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-4 pb-0 bg-white overflow-hidden">
      
      {/* Text Content Block */}
      <div className="text-center z-10 px-4 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* "New" Tag */}
        <p className="text-[14px] text-gray-500 mb-1 font-normal tracking-wide">
          New
        </p>
        
        {/* "iPhone 14" Title */}
        <h2 className="text-[21px] md:text-[24px] font-semibold text-apple-text mb-3">
          iPhone 14
        </h2>
        
        {/* Main Headline */}
        <h1 className="text-[40px] md:text-[56px] leading-[1.05] font-semibold tracking-tight text-apple-text mb-4">
          Two great sizes.<br />
          Now with a splash of yellow.
        </h1>
        
        {/* Subheadline */}
        <p className="text-[14px] md:text-[17px] text-apple-text mb-5">
          From $799 or $33.29/mo. for 24 mo. before trade-in2
        </p>
        
        {/* Buttons */}
        <div className="flex items-center justify-center gap-6">
          <button className="bg-[#0071e3] text-white text-[14px] md:text-[17px] rounded-full px-5 py-2 hover:bg-[#0077ED] transition-colors duration-300">
            Buy
          </button>
          <a 
            href="#" 
            className="text-[#0066cc] text-[14px] md:text-[17px] hover:underline transition-all duration-300"
          >
            Learn more
          </a>
        </div>
      </div>

      {/* Hero Image Block */}
      {/* 
        NOTE: To get the exact image, save the image from your Figma/design 
        as 'hero-iphones.png' and place it in your project's 'public' folder.
        Then update the src below to '/hero-iphones.png'.
      */}
      <div className="mt-12 w-full max-w-[1200px] flex justify-center items-end">
        <img 
          src="https://acko-cms.ackoassets.com/i_Phone_colours_db2516dd66.jpg" 
          alt="iPhone 14 color lineup" 
          className="w-full max-w-[900px] object-contain drop-shadow-2xl translate-y-4"
        />
      </div>

    </section>
  );
};

export default Hero;