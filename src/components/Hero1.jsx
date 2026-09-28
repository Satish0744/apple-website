import React from 'react';

const Hero1 = () => {
  return (
    <section className="relative w-full bg-black text-[#f5f5f7] overflow-hidden pt-20 md:pt-28 pb-0 flex flex-col items-center">
      
      {/* Text Content Block */}
      <div className="text-center z-10 px-4 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* "iPhone 14 Pro" Title */}
        <h2 className="text-[16px] md:text-[19px] lg:text-[21px] font-semibold mb-2 md:mb-3">
          iPhone 14 Pro
        </h2>
        
        {/* Main Headline */}
        <h1 className="text-[36px] md:text-[56px] lg:text-[64px] leading-[1.05] font-semibold tracking-tight mb-4 md:mb-5">
          Pro. Beyond.
        </h1>
        
        {/* Subheadline */}
        <p className="text-[14px] md:text-[17px] lg:text-[19px] font-normal mb-5 md:mb-6">
          From $999 or $41.62/mo. for 24 mo. before trade-in2
        </p>
        
        {/* Buttons */}
        <div className="flex items-center justify-center gap-6">
          <button className="bg-[#0071e3] text-white text-[14px] md:text-[17px] rounded-full px-4 py-1.5 md:px-5 md:py-2 hover:bg-[#0077ED] transition-colors duration-300">
            Buy
          </button>
          <a 
            href="#" 
            className="text-[#2997ff] text-[14px] md:text-[17px] hover:underline transition-all duration-300"
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
        The image used below is a high-quality placeholder that matches the layout.
      */}
      <div className="mt-12 md:mt-16 w-full flex justify-center items-end">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTElZxhasa41ajE3wZadtp5U6jCmeFvYqcEpi5Oc06a42q_7y9GYuZzAtHm&s=10" 
          alt="iPhone 14 Pro lineup" 
          className="w-full max-w-[1000px] md:max-w-[1200px] object-contain translate-y-4 md:translate-y-8"
        />
      </div>

    </section>
  );
};

export default Hero1;