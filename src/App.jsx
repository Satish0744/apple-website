import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';

// We create an inner component to use useLocation hook inside Router
const AppContent = () => {
  const location = useLocation();
  
  // Check if the current page is a login or signup page
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className={`min-h-screen bg-white flex flex-col ${!isAuthPage ? 'pt-[44px]' : ''}`}>
      
      {/* Hide Navbar on Login/Signup pages */}
      {!isAuthPage && <Navbar />}

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col">
        <Routes>
          {/* Public Routes (Login/Signup) */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Protected Routes (Main Website & Profile) */}
          {/* If user tries to access / or /profile without login, they get redirected to /login */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </main>

      {/* Hide Footer on Login/Signup pages */}
      {!isAuthPage && <Footer />}
      
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;