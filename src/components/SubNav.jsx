import React from 'react';

// Placeholder SVG icons for the sub-nav items
const PhoneIcon = () => (
  <svg viewBox="0 0 24 44" width="24" height="44" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="40" rx="4" />
    <line x1="9" y1="36" x2="15" y2="36" strokeLinecap="round" />
  </svg>
);

const WatchIcon = () => (
  <svg viewBox="0 0 24 44" width="24" height="44" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="5" y="10" width="14" height="24" rx="4" />
    <path d="M8 10V4h8v6" />
    <path d="M8 34v6h8v-6" />
  </svg>
);

const AirPodsIcon = () => (
  <svg viewBox="0 0 24 44" width="24" height="44" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="8" cy="12" r="4" />
    <circle cx="16" cy="12" r="4" />
    <path d="M8 16v10" />
    <path d="M16 16v10" />
  </svg>
);

const products = [
  { name: 'iPhone 14 Pro', icon: <PhoneIcon />, isNew: false },
  { name: 'iPhone 14', icon: <PhoneIcon />, isNew: false },
  { name: 'iPhone 13', icon: <PhoneIcon />, isNew: false },
  { name: 'iPhone SE', icon: <PhoneIcon />, isNew: false },
  { name: 'iPhone 12', icon: <PhoneIcon />, isNew: false },
  { name: 'Compare', icon: <PhoneIcon />, isNew: false },
  { name: 'AirPods', icon: <AirPodsIcon />, isNew: false },
  { name: 'AirTag', icon: <PhoneIcon />, isNew: false }, // Using phone icon as placeholder
  { name: 'Accessories', icon: <PhoneIcon />, isNew: false },
  { name: 'Apple Card', icon: <PhoneIcon />, isNew: false },
  { name: 'iOS 16', icon: <PhoneIcon />, isNew: false },
  { name: 'Shop iPhone', icon: <PhoneIcon />, isNew: false },
];

const SubNav = () => {
  return (
    <div className="w-full bg-white flex flex-col pt-[20px]"> {/* pt-[44px] accounts for the fixed global navbar */}
      
      {/* Scrollable Product Row */}
      <div className="flex justify-start md:justify-center items-center gap-8 px-5 py-6 overflow-x-auto no-scrollbar border-b border-gray-200">
        {products.map((product, index) => (
          <a 
            href="#" 
            key={index} 
            className="flex flex-col items-center gap-3 min-w-fit hover:opacity-70 transition-opacity"
          >
            <div className="text-apple-text flex items-center justify-center h-12">
              {product.icon}
            </div>
            <div className="flex flex-col items-center text-[12px] text-apple-text">
              <span>{product.name}</span>
              {product.isNew && (
                <span className="text-[10px] text-apple-orange mt-0.5">New</span>
              )}
            </div>
          </a>
        ))}
      </div>

      {/* Trade-in Banner */}
      <div className="bg-apple-bgLight py-4 px-5 text-center text-[14px] text-apple-text">
        <p>
          Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher. 
          <a href="#" className="text-apple-link ml-1 hover:underline">
            Shop iPhone
          </a>
        </p>
      </div>

    </div>
  );
};

export default SubNav;