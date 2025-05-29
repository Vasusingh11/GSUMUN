import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const Layout = () => {
  return (
    <div 
      className="flex flex-col min-h-screen"
      style={{ 
        fontFamily: 'SF Pro Display, system-ui, sans-serif',
        backgroundColor: '#FFFFFF'
      }}
    >
      <Navbar />
      <main 
        className="flex-grow"
        style={{
          // Ensure consistent spacing and brand colors for the main content area
          backgroundColor: '#FFFFFF',
          color: '#29487D'
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;