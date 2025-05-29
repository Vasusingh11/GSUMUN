import React from 'react';

// TabsList - Container for the tab triggers
const TabsList = ({ children, className = "", ...props }) => {
  return (
    <div 
      className={`flex ${className}`}
      role="tablist"
      style={{ 
        borderBottom: '2px solid #D4D8E8',
        fontFamily: 'SF Pro Display, system-ui, sans-serif'
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// TabsTrigger - The clickable tab buttons
const TabsTrigger = ({ 
  children, 
  value, 
  active, 
  onClick, 
  className = "", 
  icon,
  ...props 
}) => {
  return (
    <button
      role="tab"
      aria-selected={active}
      tabIndex={active ? 0 : -1}
      onClick={onClick}
      className={`py-4 px-6 text-center font-medium relative flex items-center gap-2 transition-colors duration-200 ${className}`}
      style={{
        color: active ? '#29487D' : '#6B7280',
        borderBottom: active ? '2px solid #29487D' : '2px solid transparent',
        marginBottom: '-2px',
        fontFamily: 'SF Pro Display, system-ui, sans-serif',
        fontWeight: active ? '600' : '500'
      }}
      onMouseEnter={(e) => {
        if (!active) {
          e.target.style.color = '#3C5898';
          e.target.style.backgroundColor = '#D4D8E8';
        }
      }}
      onMouseLeave={(e) => {
        if (!active) {
          e.target.style.color = '#6B7280';
          e.target.style.backgroundColor = 'transparent';
        }
      }}
      {...props}
    >
      {icon && (
        <span style={{ color: active ? '#29487D' : '#6B7280' }}>
          {icon}
        </span>
      )}
      <span>{children}</span>
    </button>
  );
};

// TabsContent - The content panel for each tab
const TabsContent = ({ 
  children, 
  value, 
  active, 
  className = "", 
  ...props 
}) => {
  if (!active) return null;
  
  return (
    <div
      role="tabpanel"
      tabIndex={0}
      className={`pt-6 ${className}`}
      style={{
        fontFamily: 'SF Pro Display, system-ui, sans-serif',
        color: '#29487D'
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// Tabs - The main container component
const Tabs = ({ 
  children, 
  value, 
  onValueChange, 
  defaultValue, 
  className = "", 
  ...props 
}) => {
  return (
    <div 
      className={className} 
      style={{ fontFamily: 'SF Pro Display, system-ui, sans-serif' }}
      {...props}
    >
      {children}
    </div>
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };