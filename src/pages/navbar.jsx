import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({});

  // Navigation links with dropdowns
  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      path: '#',
      dropdown: [
        { name: 'GSUMUN', path: '/about' },
        { name: 'Advisory Board', path: '/advisory-board' },
        { name: 'Secretariat', path: '/secretariat' },
        { name: 'Team', path: '/team' },
        { name: 'Contact', path: '/contact' },
      ]
    },
    { 
      name: 'Conference', 
      path: '#',
      dropdown: [
        { name: 'Schedule', path: '/schedule' },
        { name: 'Committees', path: '/committees' },
        { name: 'Venue', path: '/venue' },
        { name: 'FAQs', path: '/faqs' },
      ]
    },
    {
      name: 'Resources',
      path: '#',
      dropdown: [
        { name: 'Delegate Guide', path: '/resources/delegate' },
        { name: 'Faculty Guide', path: '/resources/faculty' },
        { name: 'Rules of Procedure', path: '/resources/rules' },
        { name: 'Position Papers', path: '/resources/position-papers' },
      ]
    },
    { name: 'RSA', path: '/rsa' },
    { name: 'Register', path: '/register', highlight: true },
  ];

  const navFont = {
    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif",
    fontWeight: 400
  };

  // Handle scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle dropdown for desktop
  const toggleDropdown = (index, e) => {
    e.stopPropagation();
    setDropdownOpen((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Toggle dropdown for mobile
  const toggleMobileDropdown = (index) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Close desktop dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Only close if not clicking on dropdown elements
      if (!e.target.closest('.dropdown-container')) {
        setDropdownOpen({});
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileDropdownOpen({});
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav 
      className="fixed w-full z-50 shadow-md py-2"
      style={{ 
        backgroundColor: 'white',
        fontFamily: 'SF Pro Display, Myriad Pro, Helvetica Neue, Gill Sans, Arial, sans-serif'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMobileMenu}>
            <img 
              src="/images/gsumun-logo.png" 
              alt="GSUMUN Logo" 
              className="h-12 w-12 object-contain rounded-full bg-white bg-opacity-20"
            />
            <div 
              className="font-bold text-2xl"
              style={{ 
                color: '#29487D',
                fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif",
                fontWeight: 700
              }}
            >
              GSUMUN
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <div 
                key={index} 
                className="relative dropdown-container"
              >
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={(e) => toggleDropdown(index, e)}
                      className="flex items-center space-x-1 text-xl px-4 py-2 rounded-md hover:bg-gray-100"
                      style={{
                        color:'#29487D',
                        ...navFont,
                        fontSize: '18px'
                      }}
                    >
                      <span>{link.name}</span>
                      <ChevronDown 
                        size={18} 
                        className={`${
                          dropdownOpen[index] ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    {dropdownOpen[index] && (
                      <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 border border-gray-200">
                        <div className="py-2">
                          {link.dropdown.map((dropdownItem, dropdownIndex) => (
                            <NavLink
                              key={dropdownIndex}
                              to={dropdownItem.path}
                              className="block px-4 py-2 text-base hover:bg-gray-100"
                              style={{ 
                                color: '#29487D',
                                fontFamily: 'SF Pro Display, Myriad Pro, Helvetica Neue, Gill Sans, Arial, sans-serif',
                                fontSize: '16px'
                              }}
                              onClick={() => setDropdownOpen({})}
                            >
                              {dropdownItem.name}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={link.path}
                    className="text-xl px-4 py-2 rounded-md"
                    style={{
                      color: link.highlight ? 'white' : '#29487D',
                      backgroundColor: link.highlight ? '#3C5898' : 'transparent',
                      ...navFont,
                      fontSize: '18px'
                    }}
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={26} style={{ color: scrolled ? '#29487D' : 'white' }} />
            ) : (
              <Menu size={26} style={{ color: scrolled ? '#29487D' : 'white' }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-white overflow-y-auto"
          style={{ 
            fontFamily: 'SF Pro Display, Myriad Pro, Helvetica Neue, Gill Sans, Arial, sans-serif',
            paddingTop: '80px' // Account for fixed header
          }}
        >
          <div className="px-4 pb-6">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <div key={index} className="border-b border-gray-100 last:border-b-0">
                  {link.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileDropdown(index)}
                        className="flex items-center justify-between w-full text-left py-4 px-2 rounded-md hover:bg-gray-50"
                        style={{ 
                          color: '#29487D',
                          ...navFont,
                          fontSize: '18px'
                        }}
                      >
                        <span>{link.name}</span>
                        <ChevronRight 
                          size={18} 
                          className={`${
                            mobileDropdownOpen[index] ? 'rotate-90' : ''
                          }`}
                        />
                      </button>
                      
                      {mobileDropdownOpen[index] && (
                        <div className="ml-4 pb-2 space-y-1">
                          {link.dropdown.map((dropdownItem, dropdownIndex) => (
                            <NavLink
                              key={dropdownIndex}
                              to={dropdownItem.path}
                              className="block py-3 px-4 rounded-md hover:bg-gray-50"
                              style={{ 
                                color: '#29487D',
                                fontFamily: 'SF Pro Display, Myriad Pro, Helvetica Neue, Gill Sans, Arial, sans-serif',
                                fontSize: '16px'
                              }}
                              onClick={closeMobileMenu}
                            >
                              {dropdownItem.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={`block py-4 px-2 rounded-md ${
                        link.highlight ? 'mx-2 my-2' : ''
                      }`}
                      style={{
                        color: link.highlight ? 'white' : '#29487D',
                        backgroundColor: link.highlight ? '#3C5898' : 'transparent',
                        ...navFont,
                        fontSize: '18px',
                        textAlign: link.highlight ? 'center' : 'left'
                      }}
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;