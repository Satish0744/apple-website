import React from 'react';

const Hero6 = () => {
  return (
    <section className="w-full bg-[#f5f5f7] py-6 px-4 md:px-8 flex flex-col items-center">
      
      {/* --- TOP GRID SECTION --- */}
      <div className="w-full max-w-[1024px] grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        
        {/* Left Card: Carrier Deals */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 flex flex-col items-center text-center shadow-sm">
          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1d1d1f] leading-tight mb-4">
            Save up to $800 with select carrier deals at Apple.8
          </h2>
          <p className="text-[14px] text-gray-600 mb-4 max-w-[300px]">
            Get the carrier deals you love and save on a new iPhone when you trade in and purchase right here at Apple.
          </p>
          <a href="#" className="text-[#0066cc] text-[14px] hover:underline mb-12">
            Find your deal
          </a>

          {/* Carrier Logos & Offers */}
          <div className="flex flex-col items-center gap-8 mt-auto w-full">
            {/* AT&T */}
            <div className="flex flex-col items-center">
              <span className="text-[#009fdb] font-bold text-[24px] tracking-tight leading-none mb-1">AT&T</span>
              <span className="text-[12px] text-gray-600">Get up to $800<br/>credit after trade-in</span>
            </div>
            {/* T-Mobile */}
            <div className="flex flex-col items-center">
              <span className="text-[#e20074] font-bold text-[24px] tracking-tight leading-none mb-1">T-Mobile</span>
              <span className="text-[12px] text-gray-600">Get up to $400<br/>credit after trade-in</span>
            </div>
            {/* Verizon */}
            <div className="flex flex-col items-center">
              <span className="text-black font-bold text-[24px] tracking-tight leading-none mb-1">verizon<span className="text-[#cd040b]">✓</span></span>
              <span className="text-[12px] text-gray-600">Get up to $800<br/>credit after trade-in</span>
            </div>
          </div>
        </div>

        {/* Right Card: Apple Card */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 flex flex-col items-center text-center shadow-sm">
          <h2 className="text-[24px] md:text-[28px] font-semibold text-[#1d1d1f] leading-tight mb-4">
            Get 3% Daily Cash back with Apple Card.
          </h2>
          <p className="text-[14px] text-gray-600 mb-4 max-w-[300px]">
            And pay for your new iPhone over 24 months, interest-free when you choose to check out with Apple Card Monthly Installments.**
          </p>
          <a href="#" className="text-[#0066cc] text-[14px] hover:underline mb-8">
            Learn more
          </a>

          {/* Apple Card Image */}
          <div className="w-full flex justify-center mt-auto">
            <img 
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-card-monthly-installments-hero-202203?wid=800&hei=600&fmt=png-alpha" 
              alt="Apple Card and iPhone" 
              className="w-full max-w-[320px] object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* --- BOTTOM IMAGE SECTION --- */}
      {/* This container ensures the image fits perfectly with rounded corners and responsive scaling */}
      <div className="w-full max-w-[1024px] rounded-[2rem] overflow-hidden flex justify-center items-center shadow-sm bg-[#1d1d1f]">
        <img 
          src="https://i.postimg.cc/QBWz2Vwg/Screenshot-2026-09-28-173343.png" 
          alt="Why Apple is the best place to buy iPhone" 
          className="w-full h-auto object-cover block"
        />
      </div>

    </section>
  );
};

export default Hero6;