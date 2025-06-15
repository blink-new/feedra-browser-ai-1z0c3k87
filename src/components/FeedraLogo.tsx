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
          {/* Background circle with gradient */}
          <defs>
            <linearGradient id="feedraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={variant === 'monochrome' ? '#1f2937' : '#3b82f6'} />
              <stop offset="50%" stopColor={variant === 'monochrome' ? '#374151' : '#6366f1'} />
              <stop offset="100%" stopColor={variant === 'monochrome' ? '#4b5563' : '#8b5cf6'} />
            </linearGradient>
            <linearGradient id="aiGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={variant === 'monochrome' ? '#9ca3af' : '#60a5fa'} />
              <stop offset="100%" stopColor={variant === 'monochrome' ? '#d1d5db' : '#a78bfa'} />
            </linearGradient>
          </defs>
          
          {/* Main circle */}
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            fill="url(#feedraGradient)" 
            className="drop-shadow-lg"
          />
          
          {/* Browser window frame */}
          <rect 
            x="20" 
            y="30" 
            width="60" 
            height="40" 
            rx="4" 
            fill="white" 
            fillOpacity="0.95"
          />
          
          {/* Browser top bar */}
          <rect 
            x="20" 
            y="30" 
            width="60" 
            height="8" 
            rx="4" 
            fill="url(#aiGlow)" 
            fillOpacity="0.3"
          />
          
          {/* Browser dots */}
          <circle cx="25" cy="34" r="1.5" fill="url(#feedraGradient)" fillOpacity="0.7" />
          <circle cx="30" cy="34" r="1.5" fill="url(#feedraGradient)" fillOpacity="0.7" />
          <circle cx="35" cy="34" r="1.5" fill="url(#feedraGradient)" fillOpacity="0.7" />
          
          {/* Content lines representing feeds */}
          <rect x="25" y="42" width="35" height="2" rx="1" fill="url(#feedraGradient)" fillOpacity="0.6" />
          <rect x="25" y="47" width="25" height="2" rx="1" fill="url(#feedraGradient)" fillOpacity="0.4" />
          <rect x="25" y="52" width="30" height="2" rx="1" fill="url(#feedraGradient)" fillOpacity="0.5" />
          
          {/* AI spark/neural network elements */}
          <circle cx="65" cy="45" r="3" fill="url(#aiGlow)" fillOpacity="0.8" />
          <circle cx="72" cy="52" r="2" fill="url(#aiGlow)" fillOpacity="0.6" />
          <circle cx="68" cy="58" r="2.5" fill="url(#aiGlow)" fillOpacity="0.7" />
          
          {/* Connecting lines for AI network */}
          <line x1="65" y1="45" x2="72" y2="52" stroke="url(#aiGlow)" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="72" y1="52" x2="68" y2="58" stroke="url(#aiGlow)" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="65" y1="45" x2="68" y2="58" stroke="url(#aiGlow)" strokeWidth="0.8" strokeOpacity="0.3" />
          
          {/* Letter F integrated into design */}
          <path 
            d="M12 25 L12 75 M12 25 L25 25 M12 45 L22 45" 
            stroke="white" 
            strokeWidth="3" 
            strokeLinecap="round"
            fillOpacity="0.9"
          />
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