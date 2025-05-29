import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  // Navigation links with dropdowns
  const navLinks = [
    { name: 'Home', path: '/' },
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
    { name: 'RSA', path: '/rsa' },
    { name: 'Register', path: '/register', highlight: true },
  ];

  const navFont = {
    fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif",
    fontWeight: 600
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

  // Toggle dropdown for specific menu item
  const toggleDropdown = (index) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setDropdownOpen({});
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Prevent event propagation to allow clicking inside dropdown
  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md py-2' : 'py-4'
      }`}
      style={{ 
        backgroundColor: scrolled ? 'white' : '#29487D',
        fontFamily: 'SF Pro Display, Myriad Pro, Helvetica Neue, Gill Sans, Arial, sans-serif'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/images/gsumun-logo.png" 
              alt="GSUMUN Logo" 
              className="h-12 w-12 object-contain rounded-full bg-white bg-opacity-20"
            />
            <div 
              className="font-bold text-2xl"
              style={{ 
                color: scrolled ? '#29487D' : 'white',
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
                className="relative"
                onClick={handleDropdownClick}
              >
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center space-x-1 text-xl font-semibold transition-all duration-200 px-4 py-2 rounded-md hover:bg-opacity-20"
                      style={{
                        color: scrolled ? '#29487D' : 'white',
                        ...navFont,
                        fontSize: '18px'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = scrolled ? '#D4D8E8' : 'rgba(60, 88, 152, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                      }}
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={18} />
                    </button>
                    
                    {dropdownOpen[index] && (
                      <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20 border border-gray-200">
                        <div className="py-2">
                          {link.dropdown.map((dropdownItem, dropdownIndex) => (
                            <NavLink
                              key={dropdownIndex}
                              to={dropdownItem.path}
                              className="block px-4 py-2 text-base transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
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
                    className="text-xl font-semibold transition-all duration-200 px-4 py-2 rounded-md"
                    style={{
                      color: link.highlight ? 'white' : (scrolled ? '#29487D' : 'white'),
                      backgroundColor: link.highlight ? '#3C5898' : 'transparent',
                      ...navFont,
                      fontSize: '18px'
                    }}
                    onMouseEnter={(e) => {
                      if (link.highlight) {
                        e.target.style.backgroundColor = '#29487D';
                      } else {
                        e.target.style.backgroundColor = scrolled ? '#D4D8E8' : 'rgba(60, 88, 152, 0.3)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (link.highlight) {
                        e.target.style.backgroundColor = '#3C5898';
                      } else {
                        e.target.style.backgroundColor = 'transparent';
                      }
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
            className="lg:hidden transition-all duration-200 p-2 rounded-md hover:bg-opacity-20"
            onClick={() => setIsOpen(!isOpen)}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = scrolled ? '#D4D8E8' : 'rgba(60, 88, 152, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
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
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ fontFamily: 'SF Pro Display, Myriad Pro, Helvetica Neue, Gill Sans, Arial, sans-serif' }}
      >
        <div className="flex justify-between items-center p-4" style={{ backgroundColor: '#29487D' }}>
          <div className="flex items-center space-x-3">
            <img 
              src="/images/gsumun-logo.png" 
              alt="GSUMUN Logo" 
              className="h-12 w-12 object-contain rounded-full bg-white bg-opacity-20"
            />
            <div 
              className="font-bold text-2xl text-white" 
              style={{ 
                fontFamily: "'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif", 
                fontWeight: 700 
              }}
            >
              GSUMUN
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md transition-all duration-200 hover:bg-blue-700"
          >
            <X size={26} className="text-white" />
          </button>
        </div>
        <div className="p-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link, index) => (
              <div key={index} className="py-2">
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center justify-between w-full text-left text-xl font-semibold py-3 px-4 rounded-md transition-all duration-200 hover:bg-gray-100"
                      style={{ 
                        color: '#29487D',
                        ...navFont,
                        fontSize: '20px'
                      }}
                    >
                      <span>{link.name}</span>
                      {dropdownOpen[index] ? (
                        <ChevronDown size={18} />
                      ) : (
                        <ChevronRight size={18} />
                      )}
                    </button>
                    
                    {dropdownOpen[index] && (
                      <div className="ml-4 mt-2 pl-4 flex flex-col space-y-2" style={{ borderLeft: '2px solid #D4D8E8' }}>
                        {link.dropdown.map((dropdownItem, dropdownIndex) => (
                          <NavLink
                            key={dropdownIndex}
                            to={dropdownItem.path}
                            className="py-2 px-3 text-lg rounded-md transition-all duration-200 hover:bg-gray-100"
                            style={{ 
                              color: '#29487D',
                              fontFamily: 'SF Pro Display, Myriad Pro, Helvetica Neue, Gill Sans, Arial, sans-serif',
                              fontSize: '18px'
                            }}
                            onClick={() => setIsOpen(false)}
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
                    className="block py-3 px-4 text-xl font-semibold rounded-md transition-all duration-200"
                    style={{
                      color: link.highlight ? 'white' : '#29487D',
                      backgroundColor: link.highlight ? '#3C5898' : 'transparent',
                      ...navFont,
                      fontSize: '20px',
                      textAlign: link.highlight ? 'center' : 'left'
                    }}
                    onMouseEnter={(e) => {
                      if (link.highlight) {
                        e.target.style.backgroundColor = '#29487D';
                      } else {
                        e.target.style.backgroundColor = '#D4D8E8';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (link.highlight) {
                        e.target.style.backgroundColor = '#3C5898';
                      } else {
                        e.target.style.backgroundColor = 'transparent';
                      }
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;