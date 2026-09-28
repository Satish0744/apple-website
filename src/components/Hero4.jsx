import React from 'react';

// --- INLINE SVG ICONS FOR FEATURES ---
const IconDynamicIsland = () => (
  <svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="10" y="5" width="20" height="30" rx="6" />
    <rect x="15" y="8" width="10" height="4" rx="2" fill="currentColor" />
  </svg>
);

const IconSOS = () => (
  <svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="20" cy="20" r="15" />
    <text x="20" y="25" textAnchor="middle" fontSize="12" fontWeight="bold" fill="currentColor" stroke="none">SOS</text>
  </svg>
);

const IconCameraPro = () => (
  <svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="12" width="24" height="20" rx="6" />
    <circle cx="15" cy="22" r="4" />
    <circle cx="25" cy="22" r="4" />
    <circle cx="20" cy="15" r="2" />
  </svg>
);

const IconActionMode = () => (
  <svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="20" cy="20" r="15" />
    <path d="M15 25l5-10 5 10" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="20" cy="20" r="3" fill="currentColor" />
  </svg>
);

const IconBattery = () => (
  <svg viewBox="0 0 60 30" width="60" height="30" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="5" y="5" width="45" height="20" rx="5" />
    <rect x="52" y="10" width="4" height="10" rx="2" fill="currentColor" />
    <rect x="8" y="8" width="30" height="14" rx="2" fill="currentColor" />
  </svg>
);

const IconChip = () => (
  <svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="10" y="10" width="20" height="20" rx="4" />
    <path d="M15 10V5 M25 10V5 M15 35v-5 M25 35v-5 M10 15H5 M10 25H5 M35 15h-5 M35 25h-5" strokeLinecap="round" />
    <text x="20" y="24" textAnchor="middle" fontSize="8" fontWeight="bold" fill="currentColor" stroke="none">A16</text>
  </svg>
);

const IconFaceID = () => (
  <svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M10 15V10H15 M25 10H30V15 M30 25V30H25 M15 30H10V25" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="15" cy="18" r="1.5" fill="currentColor" />
    <circle cx="25" cy="18" r="1.5" fill="currentColor" />
    <path d="M15 25c2 2 8 2 10 0" strokeLinecap="round" />
  </svg>
);

const IconTouchID = () => (
  <svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="20" cy="20" r="12" />
    <path d="M20 8v24 M12 14c4-4 12-4 16 0 M12 26c4 4 12 4 16 0" strokeLinecap="round" />
  </svg>
);

// Custom SVG for the 5G icon as shown in your screenshot
const Icon5G = () => (
  <svg viewBox="0 0 60 40" width="60" height="40" fill="none" stroke="currentColor" strokeWidth="2">
    <text x="30" y="25" textAnchor="middle" fontSize="14" fontWeight="bold" fill="currentColor" stroke="none">5G</text>
    <path d="M12 12a18 18 0 0 1 0 16" strokeLinecap="round" />
    <path d="M7 7a26 26 0 0 1 0 26" strokeLinecap="round" />
    <path d="M48 12a18 18 0 0 0 0 16" strokeLinecap="round" />
    <path d="M53 7a26 26 0 0 0 0 26" strokeLinecap="round" />
  </svg>
);

// --- DATA ARRAYS ---
const products = [
  {
    name: 'iPhone 14 Pro',
    subtitle: 'The ultimate iPhone.',
    price: 'From $999',
    isNew: true,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703840214',
    colors: ['#5c5366', '#f4e8ce', '#f0f2f2', '#1d1d1f'],
  },
  {
    name: 'iPhone 14',
    subtitle: 'A total powerhouse.',
    price: 'From $799*',
    isNew: true,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703840214',
    colors: ['#a7c1d9', '#e6c7e5', '#fae181', '#1d1d1f', '#bf0013'],
  },
  {
    name: 'iPhone 13',
    subtitle: 'As amazing as ever.',
    price: 'From $599*',
    isNew: false,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-finish-select-202207-6-1inch-green?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1657641866889',
    colors: ['#354c3e', '#f6c8c8', '#a7c1d9', '#1d1d1f', '#bf0013'],
  },
  {
    name: 'iPhone SE',
    subtitle: 'Serious power. Serious value.',
    price: 'From $429',
    isNew: false,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-finish-select-202203-4-7inch-midnight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1645743081686',
    colors: ['#1d1d1f', '#f0f2f2', '#bf0013'],
  },
];

const features = [
  {
    id: 'display',
    values: [
      { text: '6.7” or 6.1”', sub: 'Super Retina XDR display3' },
      { text: '6.7” or 6.1”', sub: 'Super Retina XDR display3' },
      { text: '6.1” or 5.4”', sub: 'Super Retina XDR display3' },
      { text: '4.7”', sub: 'Retina HD display' },
    ],
  },
  {
    id: 'dynamic-island',
    values: [
      { icon: <IconDynamicIsland />, text: 'Dynamic Island', sub: 'A new way to interact with iPhone' },
      { text: '-' },
      { text: '-' },
      { text: '-' },
    ],
  },
  {
    id: 'sos',
    values: [
      { icon: <IconSOS />, text: 'Emergency SOS via satellite4', sub: 'Emergency SOS' },
      { icon: <IconSOS />, text: 'Emergency SOS via satellite4', sub: 'Emergency SOS' },
      { icon: <IconSOS />, text: 'Emergency SOS' },
      { icon: <IconSOS />, text: 'Emergency SOS' },
    ],
  },
  {
    id: 'camera',
    values: [
      { icon: <IconCameraPro />, text: 'Pro camera system', sub: '48MP Main | Ultra Wide | Telephoto' },
      { icon: <IconCameraPro />, text: 'Advanced dual-camera system', sub: '12MP Main | Ultra Wide' },
      { icon: <IconCameraPro />, text: 'Dual-camera system', sub: '12MP Main | Ultra Wide' },
      { icon: <IconCameraPro />, text: 'Advanced camera system', sub: '12MP Main' },
    ],
  },
  {
    id: 'action-mode',
    values: [
      { icon: <IconActionMode />, text: 'Action mode smooths out shaky handheld videos' },
      { icon: <IconActionMode />, text: 'Action mode smooths out shaky handheld videos' },
      { text: '-' },
      { text: '-' },
    ],
  },
  {
    id: 'battery',
    values: [
      { icon: <IconBattery />, text: 'Up to 29 hours', sub: 'video playback6' },
      { icon: <IconBattery />, text: 'Up to 26 hours', sub: 'video playback6' },
      { icon: <IconBattery />, text: 'Up to 19 hours', sub: 'video playback6' },
      { icon: <IconBattery />, text: 'Up to 15 hours', sub: 'video playback6' },
    ],
  },
  {
    id: 'chip',
    values: [
      { icon: <IconChip />, text: 'A16 Bionic chip' },
      { icon: <IconChip />, text: 'A15 Bionic chip', sub: 'with 5-core GPU' },
      { icon: <IconChip />, text: 'A15 Bionic chip', sub: 'with 4-core GPU' },
      { icon: <IconChip />, text: 'A15 Bionic chip', sub: 'with 4-core GPU' },
    ],
  },
  {
    id: 'auth',
    values: [
      { icon: <IconFaceID />, text: 'Face ID' },
      { icon: <IconFaceID />, text: 'Face ID' },
      { icon: <IconFaceID />, text: 'Face ID' },
      { icon: <IconTouchID />, text: 'Touch ID' },
    ],
  },
  // NEW 5G ROW ADDED HERE
  {
    id: '5g',
    values: [
      { icon: <Icon5G />, text: 'Superfast 5G cellular7' },
      { icon: <Icon5G />, text: 'Superfast 5G cellular7' },
      { icon: <Icon5G />, text: 'Superfast 5G cellular7' },
      { icon: <Icon5G />, text: '5G cellular7' },
    ],
  },
];

const Hero4 = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1024px] mx-auto px-4 md:px-6">
        
        {/* Main Title */}
        <h2 className="text-[32px] md:text-[48px] font-semibold text-center text-apple-text mb-12 md:mb-16 tracking-tight">
          Which iPhone is right for you?
        </h2>

        {/* Horizontal Scroll Container for Mobile / Tablet */}
        <div className="w-full overflow-x-auto no-scrollbar pb-8">
          <div className="min-w-[800px] lg:min-w-full">
            
            {/* TOP ROW: Product Images & Basics */}
            <div className="grid grid-cols-4 gap-4 md:gap-8 text-center border-b border-gray-200 pb-8">
              {products.map((product, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Image Container - No background, just the image */}
                  <div className="h-[200px] md:h-[250px] flex items-end justify-center mb-6 bg-transparent">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="max-h-full max-w-full object-contain bg-transparent"
                    />
                  </div>
                  
                  {/* Color Dots */}
                  <div className="flex gap-2 mb-4 h-3">
                    {product.colors.map((color, i) => (
                      <span 
                        key={i} 
                        className="w-3 h-3 rounded-full border border-gray-300"
                        style={{ backgroundColor: color }}
                      ></span>
                    ))}
                  </div>

                  {/* New Tag */}
                  {product.isNew && (
                    <span className="text-[12px] text-apple-orange mb-1">New</span>
                  )}

                  {/* Product Info */}
                  <h3 className="text-[21px] md:text-[24px] font-semibold text-apple-text mb-1">
                    {product.name}
                  </h3>
                  <p className="text-[14px] md:text-[17px] text-apple-text mb-6 h-12 md:h-14">
                    {product.subtitle}
                  </p>
                  
                  {/* Price & Buttons */}
                  <p className="text-[12px] md:text-[14px] text-apple-text mb-4">
                    {product.price}
                  </p>
                  
                  <div className="flex flex-col items-center gap-3">
                    <button className="bg-[#0071e3] text-white text-[12px] md:text-[14px] rounded-full px-4 py-1.5 hover:bg-[#0077ED] transition-colors">
                      Buy
                    </button>
                    <a href="#" className="text-[#0066cc] text-[12px] md:text-[14px] hover:underline">
                      Learn more
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTTOM SECTION: Feature Comparison Rows */}
            <div className="flex flex-col">
              {features.map((feature, featureIndex) => (
                <div 
                  key={feature.id} 
                  // The last item (featureIndex === features.length - 1) will NOT have a bottom border
                  className={`grid grid-cols-4 gap-4 md:gap-8 text-center py-10 md:py-14 ${
                    featureIndex !== features.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  {feature.values.map((value, valueIndex) => (
                    <div key={valueIndex} className="flex flex-col items-center justify-start px-2">
                      {/* Icon */}
                      {value.icon && (
                        <div className="text-apple-text mb-4 flex items-center justify-center h-12">
                          {value.icon}
                        </div>
                      )}
                      
                      {/* Text */}
                      {value.text && value.text !== '-' ? (
                        <div className="flex flex-col items-center gap-1.5">
                          <span className="text-[12px] md:text-[14px] font-semibold text-apple-text leading-tight">
                            {value.text}
                          </span>
                          {value.sub && (
                            <span className="text-[12px] md:text-[14px] text-apple-text leading-tight">
                              {value.sub}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="text-[14px] text-apple-text mt-2">-</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            
          </div>
        </div>

        {/* BOTTOM LINKS */}
        <div className="flex justify-center items-center gap-8 md:gap-16 mt-4 md:mt-8 pb-12">
          <a 
            href="#" 
            className="text-[#0066cc] text-[14px] md:text-[17px] hover:underline transition-all"
          >
            Compare all iPhone models
          </a>
          <a 
            href="#" 
            className="text-[#0066cc] text-[14px] md:text-[17px] hover:underline transition-all"
          >
            Shop iPhone
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero4;