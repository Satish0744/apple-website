import React from 'react';

const Hero5 = () => {
  return (
    <section className="w-full bg-[#f5f5f7] pt-16 md:pt-24 flex flex-col items-center overflow-hidden">
      
      {/* Top Heading */}
      <h2 className="text-[28px] md:text-[32px] font-semibold text-[#1d1d1f] mb-8 md:mb-12 text-center px-4">
        Ways to save on iPhone
      </h2>

      {/* Main White Container */}
      <div className="w-full max-w-[1024px] bg-white rounded-t-[2rem] overflow-hidden flex flex-col items-center pt-16 relative">
        
        {/* Text Content Block */}
        <div className="text-center max-w-2xl px-6 z-10 mb-8 md:mb-12">
          <h1 className="text-[28px] md:text-[40px] lg:text-[48px] font-semibold text-[#1d1d1f] leading-[1.1] tracking-tight mb-4">
            Trade in your current phone<br className="hidden md:block" />
            for credit toward a new one.
          </h1>
          
          <p className="text-[14px] md:text-[17px] text-[#1d1d1f] mb-4 leading-relaxed">
            Get $200-$600 in credit when you trade<br className="hidden md:block" />
            in iPhone 11 or higher and upgrade to<br className="hidden md:block" />
            iPhone 14 or iPhone 14 Pro. 1
          </p>
          
          <a 
            href="#" 
            className="text-[#0066cc] text-[14px] md:text-[17px] hover:underline transition-all"
          >
            Learn more
          </a>
        </div>

        {/* Images Container */}
        {/* 
          NOTE: To get the exact images from your Figma design, 
          export them as transparent PNGs and place them in your 'public' folder.
          Then change the src attributes below to '/your-left-image.png' and '/your-right-image.png'.
        */}
        <div className="w-full relative h-[250px] md:h-[400px] lg:h-[500px] mt-auto flex justify-between items-end px-4 md:px-12">
          
          {/* Left Image: Hand holding phone */}
          <img 
            src="https://www.designinfo.in/wp-content/uploads/2023/12/Apple-iPhone-15-Pro-Max-256GB-Blue-Titanium-1.webp" 
            alt="Trade in your current phone" 
            className="w-[45%] md:w-[40%] object-contain object-bottom drop-shadow-xl"
          />
          
          {/* Right Image: Hand opening box */}
          <img 
            src="https://5.imimg.com/data5/SELLER/Default/2022/7/OE/PC/XS/9138920/apple-iphone-x-a1901-256gb-silver-250x250.jpeg" 
            alt="Upgrade to a new iPhone" 
            className="w-[45%] md:w-[40%] object-contain object-bottom drop-shadow-xl"
          />
          
        </div>

      </div>
    </section>
  );
};

export default Hero5;