import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import GSUMUNLogo from '../shared/GSUMUNLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerFont = {
    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif",
    fontWeight: 500
  };

  const logoFont = {
    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif",
    fontWeight: 700
  };

  return (
    <nav style={{ backgroundColor: '#29487D' }} className="text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-3">
                <GSUMUNLogo className="h-10 w-10" />
                <span className="text-xl font-bold" style={logoFont}>
                  GSUMUN
                </span>
              </Link>
            </div>
            <div className="hidden md:ml-8 md:flex md:items-center md:space-x-1">
              <Link 
                to="/" 
                className="px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:bg-blue-700"
                style={headerFont}
              >
                Home
              </Link>
              <Link 
                to="/conference" 
                className="px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:bg-blue-700"
                style={headerFont}
              >
                Conference
              </Link>
              <Link 
                to="/resources" 
                className="px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:bg-blue-700"
                style={headerFont}
              >
                Resources
              </Link>
              <Link 
                to="/about" 
                className="px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:bg-blue-700"
                style={headerFont}
              >
                About
              </Link>
              <Link 
                to="/rsa" 
                className="px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 hover:bg-blue-700"
                style={headerFont}
              >
                RSA
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              to="/register"
              className="px-6 py-2 rounded-md text-sm font-medium transition-all duration-200"
              style={{ 
                backgroundColor: '#3C5898',
                fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif",
                fontWeight: 600
              }}
            >
              Register
            </Link>
            <div className="md:hidden ml-4">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 rounded-md transition-all duration-200 hover:bg-blue-700"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden" style={{ backgroundColor: '#29487D' }}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-base font-medium rounded-md transition-all duration-200 hover:bg-blue-700"
              style={headerFont}
            >
              Home
            </Link>
            <Link 
              to="/conference" 
              className="block px-3 py-2 text-base font-medium rounded-md transition-all duration-200 hover:bg-blue-700"
              style={headerFont}
            >
              Conference
            </Link>
            <Link 
              to="/resources" 
              className="block px-3 py-2 text-base font-medium rounded-md transition-all duration-200 hover:bg-blue-700"
              style={headerFont}
            >
              Resources
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-base font-medium rounded-md transition-all duration-200 hover:bg-blue-700"
              style={headerFont}
            >
              About
            </Link>
            <Link 
              to="/rsa" 
              className="block px-3 py-2 text-base font-medium rounded-md transition-all duration-200 hover:bg-blue-700"
              style={headerFont}
            >
              RSA
            </Link>
            <Link 
              to="/register"
              className="block mt-4 w-full px-4 py-3 rounded-md text-base font-medium text-center transition-all duration-200 hover:opacity-80"
              style={{ 
                backgroundColor: '#3C5898',
                fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif",
                fontWeight: 600
              }}
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;