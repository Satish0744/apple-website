import React from 'react';

const Hero3 = () => {
  return (
    <section className="w-full bg-white py-6 px-4 md:px-8">
      {/* Rounded Container */}
      <div className="relative w-full rounded-[2rem] overflow-hidden shadow-sm h-[500px] md:h-[600px] lg:h-[700px]">
        
        {/* Background Image using your provided link */}
        <img
          src="https://i.postimg.cc/T1GQdLvW/Screenshot-2026-09-28-171236.png"
          alt="A Guided Tour of iPhone 14 & iPhone 14 Pro"
          className="absolute inset-0 w-full h-full object-cover"
        />

    
        
      </div>
    </section>
  );
};

export default Hero3;