import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Footer link sections
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Conference', path: '/schedule' },
    { name: 'Committees', path: '/committees' },
    { name: 'Resources', path: '/resources' },
    { name: 'Register', path: '/register' },
  ];
  
  const resourceLinks = [
    { name: 'Delegate Guide', path: '/resources/delegate' },
    { name: 'Faculty Guide', path: '/resources/faculty' },
    { name: 'Rules of Procedure', path: '/resources/rules' },
    { name: 'Position Papers', path: '/resources/position-papers' },
  ];
  
  const aboutLinks = [
    { name: 'About GSUMUN', path: '/about' },
    { name: 'Secretariat', path: '/secretariat' },
    { name: 'Advisory Board', path: '/advisory-board' },
    { name: 'Past Conferences', path: '/past-conferences' },
  ];
  
  // Social links
  const socialLinks = [
    { icon: <Facebook size={20} />, url: 'https://facebook.com/gsumun', label: 'Facebook' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com/gsumun', label: 'Twitter' },
    { icon: <Instagram size={20} />, url: 'https://instagram.com/modelungsu', label: 'Instagram' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com/company/gsumun', label: 'LinkedIn' },
  ];

  return (
    <footer style={{ backgroundColor: '#29487D' }} className="text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        {/* GSUMUN Branding Section */}
        <div className="text-center mb-12 pb-8 flex flex-col items-center justify-center" style={{ borderBottom: '1px solid #3C5898' }}>
          <img 
            src="/images/gsu-mun-logo.png" 
            alt="Georgia State University Model United Nations Logo" 
            className="h-24 w-24 object-contain rounded-full"
          />
          <h2 className="text-3xl font-bold mt-4" style={{ fontFamily: `'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif'`, fontWeight: 700, textAlign: 'center' }}>
            GSUMUN
          </h2>
          <p className="text-lg mt-2" style={{ fontFamily: `'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif'`, color: '#D4D8E8', textAlign: 'center' }}>
            Georgia State University Model United Nations
          </p>
          <p className="max-w-2xl mx-auto text-center mt-4" style={{ color: '#D4D8E8', fontFamily: `'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif'`, textAlign: 'center' }}>
            Empowering students through diplomatic education and international awareness. Join us in building tomorrow's leaders through Model United Nations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: `'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif'`, fontWeight: 700 }}>
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={20} className="mr-3 mt-1 flex-shrink-0" style={{ color: '#D4D8E8' }} />
                <div>
                  <a 
                    href="mailto:sg@gsumun.org" 
                    className="transition duration-300"
                    style={{ 
                      fontFamily: 'SF Pro Display, Myriad Pro, Helvetica Neue, Gill Sans, Arial, sans-serif'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#D4D8E8'}
                    onMouseLeave={(e) => e.target.style.color = 'white'}
                  >
                    sg@gsumun.org
                  </a>
                  <p className="text-sm mt-1" style={{ 
                    color: '#D4D8E8',
                    fontFamily: 'SF Pro Display, Myriad Pro, Helvetica Neue, Gill Sans, Arial, sans-serif'
                  }}>
                    General Inquiries
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" style={{ color: '#D4D8E8' }} />
                <div>
                  <p style={{ fontFamily: 'SF Pro Display, Myriad Pro, Helvetica Neue, Gill Sans, Arial, sans-serif' }}>
                    Georgia State University
                  </p>
                  <p className="text-sm" style={{ 
                    color: '#D4D8E8',
                    fontFamily: 'SF Pro Display, Myriad Pro, Helvetica Neue, Gill Sans, Arial, sans-serif'
                  }}>
                    Political Science Department
                    <br />
                    
                    PO Box 4069
                    <br />
                    Atlanta, GA 30302
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: `'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif'`, fontWeight: 700 }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="transition duration-300"
                    style={{ fontFamily: 'SF Pro Display, Myriad Pro, Helvetica Neue, Gill Sans, Arial, sans-serif' }}
                    onMouseEnter={(e) => e.target.style.color = '#D4D8E8'}
                    onMouseLeave={(e) => e.target.style.color = 'white'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: `'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif'`, fontWeight: 700 }}>
              Resources
            </h3>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="transition duration-300"
                    style={{ fontFamily: 'SF Pro Display, Myriad Pro, Helvetica Neue, Gill Sans, Arial, sans-serif' }}
                    onMouseEnter={(e) => e.target.style.color = '#D4D8E8'}
                    onMouseLeave={(e) => e.target.style.color = 'white'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: `'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif'`, fontWeight: 700 }}>
              About
            </h3>
            <ul className="space-y-2">
              {aboutLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="transition duration-300"
                    style={{ fontFamily: 'SF Pro Display, Myriad Pro, Helvetica Neue, Gill Sans, Arial, sans-serif' }}
                    onMouseEnter={(e) => e.target.style.color = '#D4D8E8'}
                    onMouseLeave={(e) => e.target.style.color = 'white'}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Social Media Links & Newsletter */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center" style={{ borderTop: '1px solid #3C5898' }}>
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4 text-center md:text-left" style={{ fontFamily: `'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif'`, fontWeight: 700 }}>
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition duration-300"
                  style={{ backgroundColor: '#3C5898' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#D4D8E8'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#3C5898'}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="max-w-md w-full">
            <h3 className="text-xl font-bold mb-4 text-center md:text-left" style={{ fontFamily: `'SF Pro Display', 'Myriad Pro', 'Helvetica Neue', 'Gill Sans', Arial, sans-serif'`, fontWeight: 700 }}>
              Subscribe to Updates
            </h3>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 flex-grow text-white placeholder-gray-300"
                style={{ 
                  backgroundColor: '#3C5898',
                  fontFamily: 'SF Pro Display, Myriad Pro, Helvetica Neue, Gill Sans, Arial, sans-serif',
                  borderColor: '#D4D8E8'
                }}
                onFocus={(e) => e.target.style.ringColor = '#D4D8E8'}
                required
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-md transition duration-300"
                style={{ 
                  backgroundColor: '#3C5898',
                  fontFamily: 'SF Pro Display, Myriad Pro, Helvetica Neue, Gill Sans, Arial, sans-serif'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#D4D8E8'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#3C5898'}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div style={{ backgroundColor: '#1a1a2e' }} className="py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm" style={{ color: '#D4D8E8' }}>
          <div className="mb-2 md:mb-0" style={{ fontFamily: 'SF Pro Display, Myriad Pro, Helvetica Neue, Gill Sans, Arial, sans-serif' }}>
            &copy; {currentYear} Georgia State University Model United Nations. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <Link 
              to="/privacy-policy" 
              className="transition duration-300"
              style={{ fontFamily: 'SF Pro Display, Myriad Pro, Helvetica Neue, Gill Sans, Arial, sans-serif' }}
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = '#D4D8E8'}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="transition duration-300"
              style={{ fontFamily: 'SF Pro Display, Myriad Pro, Helvetica Neue, Gill Sans, Arial, sans-serif' }}
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = '#D4D8E8'}
            >
              Terms of Use
            </Link>
            <a 
              href="https://www.gsu.edu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center transition duration-300"
              style={{ fontFamily: 'SF Pro Display, Myriad Pro, Helvetica Neue, Gill Sans, Arial, sans-serif' }}
              onMouseEnter={(e) => e.target.style.color = 'white'}
              onMouseLeave={(e) => e.target.style.color = '#D4D8E8'}
            >
              GSU Website <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;