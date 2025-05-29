import React from 'react';

const GSUMUNLogo = ({ className, isScrolled, size = 'default' }) => {
  // Define sizes for different contexts
  const sizeClasses = {
    small: 'h-8 w-8',
    default: 'h-10 w-10',
    large: 'h-16 w-16'
  };

  // Get the appropriate size class
  const sizeClass = sizeClasses[size] || sizeClasses.default;

  return (
    <div 
      className={`${sizeClass} ${className} rounded-full flex items-center justify-center overflow-hidden`}
      style={{ 
        backgroundColor: isScrolled ? '#29487D' : 'rgba(255, 255, 255, 0.2)'
      }}
    >
      <img 
        src="/images/gsumun-logo.png" 
        alt="GSUMUN Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default GSUMUNLogo; 