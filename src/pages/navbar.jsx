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
        { name: 'Secretariat', path: '/secretariat' },
        { name: 'Advisory Board', path: '/advisory-board' },
        { name: 'Contact', path: '/contact' },
      ]
    },
    { name: 'Register', path: '/register', highlight: true },
  ];

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
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className={`font-bold text-2xl ${scrolled ? 'text-blue-800' : 'text-white'}`}>
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
                      className={`flex items-center space-x-1 font-medium ${
                        scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-gray-200'
                      } ${link.highlight ? 'bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md' : ''}`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={16} />
                    </button>
                    
                    {dropdownOpen[index] && (
                      <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-20">
                        <div className="py-2">
                          {link.dropdown.map((dropdownItem, dropdownIndex) => (
                            <NavLink
                              key={dropdownIndex}
                              to={dropdownItem.path}
                              className={({ isActive }) => 
                                `block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600 ${
                                  isActive ? 'bg-blue-50 text-blue-600' : ''
                                }`
                              }
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
                    className={({ isActive }) => 
                      `font-medium ${
                        link.highlight 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md' 
                          : isActive 
                            ? scrolled 
                              ? 'text-blue-600' 
                              : 'text-blue-300'
                            : scrolled 
                              ? 'text-gray-800 hover:text-blue-600' 
                              : 'text-white hover:text-gray-200'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={24} className={scrolled ? 'text-blue-800' : 'text-white'} />
            ) : (
              <Menu size={24} className={scrolled ? 'text-blue-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={24} className="text-gray-800" />
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
                      className="flex items-center justify-between w-full text-left font-medium text-gray-800 hover:text-blue-600 py-2"
                    >
                      <span>{link.name}</span>
                      {dropdownOpen[index] ? (
                        <ChevronDown size={16} />
                      ) : (
                        <ChevronRight size={16} />
                      )}
                    </button>
                    
                    {dropdownOpen[index] && (
                      <div className="ml-4 mt-2 border-l-2 border-gray-200 pl-4 flex flex-col space-y-2">
                        {link.dropdown.map((dropdownItem, dropdownIndex) => (
                          <NavLink
                            key={dropdownIndex}
                            to={dropdownItem.path}
                            className={({ isActive }) => 
                              `py-2 text-sm ${
                                isActive ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600'
                              }`
                            }
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
                    className={({ isActive }) => 
                      `block py-2 font-medium ${
                        link.highlight 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-center' 
                          : isActive 
                            ? 'text-blue-600' 
                            : 'text-gray-800 hover:text-blue-600'
                      }`
                    }
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