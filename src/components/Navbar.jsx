import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const navLinks = [
  { name: 'Store', path: '/store' },
  { name: 'Mac', path: '/mac' },
  { name: 'iPad', path: '/ipad' },
  { name: 'iPhone', path: '/iphone' },
  { name: 'Watch', path: '/watch' },
  { name: 'AirPods', path: '/airpods' },
  { name: 'TV & Home', path: '/tv-home' },
  { name: 'Entertainment', path: '/entertainment' },
  { name: 'Accessories', path: '/accessories' },
  { name: 'Support', path: '/support' },
];

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 w-full h-[44px] bg-white/80 backdrop-blur-md z-50 flex justify-center border-b border-gray-200/50">
      <div className="w-full max-w-[1024px] h-full flex items-center justify-between px-5 text-[12px] font-normal text-apple-text">
        
        {/* Apple Logo - FIXED */}
        <Link to="/" className="hover:opacity-60 transition-opacity flex items-center h-full">
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.5 1.28 0 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.82M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path} className="hover:text-apple-lightText transition-colors">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Icons */}
        <div className="flex gap-6 items-center">
          <Link to="/search" className="hover:opacity-60 transition-opacity">
            <Search size={15} strokeWidth={2.5} />
          </Link>
          <Link to="/bag" className="hover:opacity-60 transition-opacity">
            <ShoppingBag size={15} strokeWidth={2.5} />
          </Link>
          
          {/* User Profile / Auth Section */}
          {user ? (
            <div className="flex items-center gap-4">
              <Link to="/profile" className="flex items-center gap-1.5 hover:opacity-60 transition-opacity">
                <User size={15} strokeWidth={2.5} />
                <span className="hidden md:inline font-medium">{user.name}</span>
              </Link>
              <button 
                onClick={logout} 
                className="text-apple-link hover:underline transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link to="/login" className="hover:opacity-60 transition-opacity">Login In</Link>
              <Link to="/signup" className="hover:opacity-60 transition-opacity">Sign Up</Link>
            </div>
          )}
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;