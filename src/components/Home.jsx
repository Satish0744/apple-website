import React from 'react';
import Navbar from './components/Navbar';
import SubNav from './components/SubNav';
import Hero from './components/Hero';
import Hero1 from './components/Hero1';
import Hero2 from './components/Hero2';
import Hero3 from './components/Hero3';
import Hero4 from './components/Hero4';
import Hero5 from './components/Hero5';
import Hero6 from './components/Hero6';
import Hero7 from './components/Hero7';
import Footer from './components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
     
        <SubNav />
        <Hero></Hero>
        <Hero1></Hero1>
    <Hero2></Hero2>
    <Hero3></Hero3>
    <Hero4></Hero4>
    <Hero5></Hero5>
    <Hero6></Hero6>
    <Hero7></Hero7>
    <Footer></Footer>
    </div>
  );
}

export default Home;