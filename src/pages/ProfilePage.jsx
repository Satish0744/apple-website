import React from 'react';
import { useAuth } from '../context/AuthContext';

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#f5f5f7] py-12 px-4">
      <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm max-w-md w-full text-center">
        <div className="w-20 h-20 bg-[#0071e3] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-semibold">
          {user?.name?.charAt(0).toUpperCase()}
        </div>
        <h2 className="text-[28px] font-semibold text-[#1d1d1f] mb-2">Welcome, {user?.name}!</h2>
        <p className="text-[14px] text-gray-500 mb-8">
          This is your protected profile page. Only logged-in users can see this.
        </p>
        <div className="bg-[#f5f5f7] p-4 rounded-xl text-left text-[12px] text-gray-600">
          <p><strong>Account Status:</strong> Active</p>
          <p className="mt-1"><strong>Membership:</strong> Apple Explorer</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;