import React from 'react';

interface FeedraLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'monochrome';
  className?: string;
}

const FeedraLogo: React.FC<FeedraLogoProps> = ({ 
  size = 'md', 
  variant = 'default',
  className = '' 
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const logoSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className={`${logoSize} relative`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* RGB Rainbow gradient for the F */}
            <linearGradient id="rgbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff0000" />
              <stop offset="16.66%" stopColor="#ff8800" />
              <stop offset="33.33%" stopColor="#ffff00" />
              <stop offset="50%" stopColor="#00ff00" />
              <stop offset="66.66%" stopColor="#0088ff" />
              <stop offset="83.33%" stopColor="#4400ff" />
              <stop offset="100%" stopColor="#ff00ff" />
            </linearGradient>
            
            {/* Star gradient */}
            <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffd700" />
              <stop offset="100%" stopColor="#ffaa00" />
            </linearGradient>

            {/* Monochrome versions */}
            <linearGradient id="monoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          
          {/* Black circle background - macOS style */}
          <circle 
            cx="50" 
            cy="50" 
            r="48" 
            fill="#000000"
            stroke="#333333"
            strokeWidth="1"
          />
          
          {/* Letter F - Fat and Rounded */}
          <path 
            d="M18 12 L18 88 M18 12 L72 12 M18 42 L62 42" 
            stroke={variant === 'monochrome' ? 'url(#monoGradient)' : 'url(#rgbGradient)'} 
            strokeWidth="16" 
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* AI Star in upper right corner */}
          <g transform="translate(68, 18)">
            <path 
              d="M8 0 L9.5 6 L16 6 L11 10 L13 16 L8 12 L3 16 L5 10 L0 6 L6.5 6 Z" 
              fill={variant === 'monochrome' ? 'url(#monoGradient)' : 'url(#starGradient)'}
              stroke="none"
            />
            {/* Small sparkle effect */}
            <circle cx="4" cy="4" r="1" fill="white" fillOpacity="0.8" />
            <circle cx="12" cy="12" r="0.5" fill="white" fillOpacity="0.6" />
          </g>
        </svg>
      </div>
      
      {size !== 'sm' && (
        <div className="flex flex-col">
          <span className={`font-bold tracking-tight ${
            size === 'xl' ? 'text-4xl' : size === 'lg' ? 'text-2xl' : 'text-xl'
          } ${variant === 'monochrome' ? 'text-gray-800' : 'text-gray-900'}`}>
            Feedra
          </span>
          {size === 'xl' && (
            <span className={`text-sm font-medium tracking-wide ${
              variant === 'monochrome' ? 'text-gray-600' : 'text-blue-600'
            }`}>
              AI-Powered Browser
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default FeedraLogo;