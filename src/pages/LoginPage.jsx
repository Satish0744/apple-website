import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';

const LoginPage = () => {
  const [name, setName] = useState('Demo User'); // Pre-filled demo name
  const [password, setPassword] = useState('password123'); // Pre-filled demo password
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (name.trim() && password.trim()) {
      login(name); 
      navigate('/'); 
    }
  };

  const handleQuickSignup = () => {
    login('New User'); 
    navigate('/'); 
  };

  return (
   <div> <Navbar></Navbar>
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      
      {/* --- LEFT SIDE: BRANDING & IMAGE --- */}
      <div className="hidden md:flex md:w-1/2 bg-[#1d1d1f] text-white flex-col justify-between p-12 relative overflow-hidden">
        
        {/* Background Image with Overlay */}
        <img 
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1663703840214" 
          alt="Apple iPhone" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1f] via-transparent to-transparent"></div>

        {/* Top Logo */}
        <div className="relative z-10 flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.5 1.28 0 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.82M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <span className="text-[17px] font-semibold tracking-tight">Store</span>
        </div>

        {/* Bottom Text */}
        <div className="relative z-10 max-w-md">
          <h1 className="text-[40px] font-semibold leading-tight tracking-tight mb-4">
            The best way to buy the products you love.
          </h1>
          <p className="text-[17px] text-gray-400 leading-relaxed">
            Sign in to access your account, check your order status, and get personalized recommendations.
          </p>
        </div>
      </div>

      {/* --- RIGHT SIDE: LOGIN FORM --- */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#f5f5f7] p-6 md:p-12">
        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm max-w-md w-full">
          
          {/* Mobile Logo (Shows only on small screens) */}
          <div className="flex justify-center mb-6 md:hidden text-[#1d1d1f]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.5 1.28 0 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.82M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </div>

          <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-2 text-center md:text-left tracking-tight">
            Sign In
          </h2>
          <p className="text-[14px] text-gray-500 mb-8 text-center md:text-left">
            Welcome back. Please enter your details.
          </p>
          
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
            
            {/* Name Field */}
            <div>
              <label className="block text-[14px] font-medium text-gray-700 mb-1.5 ml-1">
                Apple ID
              </label>
              <input 
                type="text" 
                placeholder="Enter your Apple ID" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] text-[14px] transition-all bg-gray-50 focus:bg-white"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-1.5 ml-1">
                <label className="block text-[14px] font-medium text-gray-700">
                  Password
                </label>
                <a href="#" className="text-[12px] text-[#0066cc] hover:underline font-medium">
                  Forgot Password?
                </a>
              </div>
              <input 
                type="password" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] text-[14px] transition-all bg-gray-50 focus:bg-white"
                required
              />
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-[#0071e3] text-white py-3.5 rounded-xl text-[15px] font-medium hover:bg-[#0077ED] transition-colors mt-2 shadow-sm"
            >
              Sign In
            </button>
          </form>
          
          {/* Signup Link */}
          <p className="text-[13px] text-gray-500 mt-8 text-center">
            Don't have an Apple ID?{' '}
            <button 
              type="button"
              onClick={handleQuickSignup} 
              className="text-[#0066cc] hover:underline font-medium"
            >
              Create one now
            </button>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;