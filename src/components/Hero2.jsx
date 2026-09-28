import React from 'react';

const Hero2 = () => {
  return (
    <section className="relative w-full bg-[#fafafa] overflow-hidden flex flex-col md:flex-row items-center justify-between pt-20 md:pt-0 md:min-h-[600px] lg:min-h-[700px]">
      
      {/* Text Content Block */}
      {/* On mobile, this is centered. On desktop, it takes up half the screen and left-aligns */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-6 md:pl-20 lg:pl-32 z-10 mb-12 md:mb-0">
        
        {/* "iPhone SE" Title */}
        <h2 className="text-[19px] font-semibold text-gray-800 mb-2 flex items-center gap-1">
          iPhone <span className="text-[14px] border border-gray-400 rounded-sm px-1 font-bold">SE</span>
        </h2>
        
        {/* Main Headlines */}
        <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-[#1d4ed8] leading-[1.1] tracking-tight mb-4">
          Love the power.<br />
          Love the price.
        </h1>
        
        {/* Subheadline */}
        <p className="text-[14px] md:text-[17px] text-gray-700 font-normal mb-6">
          From $429 or $17.87/mo. for 24 mo. before trade-in2
        </p>
        
        {/* Buttons */}
        <div className="flex items-center justify-center md:justify-start gap-6">
          <button className="bg-[#0071e3] text-white text-[14px] md:text-[17px] rounded-full px-5 py-1.5 md:py-2 hover:bg-[#0077ED] transition-colors duration-300">
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
        NOTE: To get the exact image from your Figma design, 
        export it as a transparent PNG and place it in your 'public' folder.
        Then change the src to '/your-image-name.png'.
      */}
      <div className="w-full md:w-1/2 relative flex justify-center md:justify-end items-end h-[400px] md:h-[600px] lg:h-[700px] mt-8 md:mt-0">
        {/* The image is positioned absolutely to allow it to bleed off the right and bottom edges */}
        <img 
          src="https://i.postimg.cc/mZM0TCCz/34a44a3b32d2a405a75848544694712418b2f6f1.jpg" 
          alt="iPhone SE lineup" 
          className="absolute bottom-0 right-0 md:-right-20 lg:-right-10 w-[120%] max-w-[600px] md:max-w-[800px] lg:max-w-[900px] object-contain object-bottom drop-shadow-2xl"
        />
      </div>

    </section>
  );
};

export default Hero2;