import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';

const SignupPage = () => {
  const [name, setName] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (name.trim()) {
      login(name); // Automatically log them in after signup
      navigate('/');
    }
  };

  return (
   <div><Navbar></Navbar>
    <div className="min-h-[80vh] flex items-center justify-center bg-[#f5f5f7] py-12 px-4">
      <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm max-w-md w-full text-center">
        <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-2">Create Account</h2>
        <p className="text-[14px] text-gray-500 mb-8">Join us to explore the Apple ecosystem.</p>
        
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] text-[14px]"
            required
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3] text-[14px]"
            required
          />
          <button 
            type="submit" 
            className="w-full bg-[#0071e3] text-white py-3 rounded-xl text-[14px] font-medium hover:bg-[#0077ED] transition-colors"
          >
            Sign Up
          </button>
        </form>
        
        <p className="text-[12px] text-gray-500 mt-6">
          Already have an account? <span className="text-[#0066cc] cursor-pointer hover:underline" onClick={() => navigate('/login')}>Sign in</span>
        </p>
      </div>
    </div>
    </div> 
  );
};

export default SignupPage;