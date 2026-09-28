import React from 'react';

const Hero7 = () => {
  return (
    <section className="w-full bg-[#f5f5f7] py-16 md:py-24 px-4 md:px-8 flex flex-col items-center">
      
      {/* Main Section Title */}
      <h2 className="text-[28px] md:text-[48px] font-semibold text-[#1d1d1f] mb-8 md:mb-12 text-center tracking-tight">
        Featured accessories
      </h2>

      {/* This container handles the width for ALL cards inside it */}
      <div className="w-full max-w-[1024px] flex flex-col gap-6">
        
        {/* --- CARD 1: MagSafe --- */}
        <div className="bg-white rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between overflow-hidden shadow-sm">
          
          {/* Text Content (Left) */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-[24px] md:text-[32px] font-semibold text-[#1d1d1f] mb-3">
              MagSafe
            </h3>
            <p className="text-[14px] md:text-[17px] text-[#1d1d1f] mb-4 max-w-[300px] md:max-w-[350px] leading-relaxed">
              Snap on a magnetic case, wallet, or both. And get faster wireless charging.
            </p>
            <a href="#" className="text-[#0066cc] text-[14px] md:text-[17px] hover:underline transition-all">
              Shop MagSafe accessories
            </a>
          </div>

          {/* Image Content (Right) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="https://i.postimg.cc/tYvpyZSk/Screenshot-2026-09-28-174226.png" 
              alt="MagSafe accessories" 
              className="w-full max-w-[300px] md:max-w-[400px] object-contain"
            />
          </div>
        </div>

        {/* --- CARD 2: AirTag --- */}
        <div className="bg-white rounded-[2rem] p-8 md:p-16 flex flex-col-reverse md:flex-row items-center justify-between overflow-hidden shadow-sm">
          
          {/* Image Content (Left on Desktop, Bottom on Mobile) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0">
            <img 
              src="https://i.postimg.cc/4KTMTXgH/Screenshot-2026-09-28-174326.png" 
              alt="AirTag accessories" 
              className="w-full max-w-[300px] md:max-w-[400px] object-contain"
            />
          </div>

          {/* Text Content (Right on Desktop, Top on Mobile) */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-[24px] md:text-[32px] font-semibold text-[#1d1d1f] mb-3">
              AirTag
            </h3>
            <p className="text-[14px] md:text-[17px] text-[#1d1d1f] mb-4 max-w-[300px] md:max-w-[350px] leading-relaxed">
              Attach one to your keys. Put another in your backpack. If they're misplaced, just use the Find My app.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[#0066cc] text-[14px] md:text-[17px] hover:underline transition-all">
                Buy
              </a>
              <a href="#" className="text-[#0066cc] text-[14px] md:text-[17px] hover:underline transition-all">
                Learn more
              </a>
            </div>
          </div>
        </div>

        {/* --- CARD 3: Bottom Image Section (Fixed) --- */}
        {/* Removed redundant max-width, added w-full h-auto to image for proper scaling */}
        <div className="w-full rounded-[2rem] overflow-hidden shadow-sm bg-[#1d1d1f] mt-2">
          <img
            src="https://i.postimg.cc/LYJjCZbL/Screenshot-2026-09-28-174458.png"
            alt="AirTag and MagSafe accessories collage"
            className="w-full h-auto object-cover block"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero7;