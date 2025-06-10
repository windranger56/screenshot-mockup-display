
import React from 'react';

const SubmarineIcon = ({ className = "", isMoving = false }) => {
  return (
    <div className={`relative ${isMoving ? 'animate-submarine-move' : ''} ${className}`}>
      {/* Submarine body */}
      <div className="relative">
        {/* Main hull */}
        <div className="w-16 h-8 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full relative">
          {/* Conning tower */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-6 h-3 bg-gray-600 rounded-t-lg"></div>
          
          {/* Propeller */}
          <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2">
            <div className="w-4 h-4 border-2 border-aqua-glow rounded-full opacity-60"></div>
            <div className="absolute inset-0 w-4 h-4 border-2 border-aqua-glow rounded-full opacity-30 rotate-45"></div>
          </div>
          
          {/* Windows */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-aqua-glow rounded-full opacity-80"></div>
          <div className="absolute left-6 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-aqua-glow rounded-full opacity-60"></div>
        </div>
        
        {/* Sonar waves */}
        <div className="absolute left-0 top-1/2 transform -translate-x-4 -translate-y-1/2">
          <div className="w-6 h-6 border-2 border-aqua-glow rounded-full opacity-40 animate-ping"></div>
          <div className="absolute inset-0 w-4 h-4 border border-aqua-glow rounded-full opacity-60 animate-ping" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>
      
      {/* Trail effect */}
      <div className="absolute right-16 top-1/2 transform -translate-y-1/2 w-20 h-1 submarine-trail opacity-60"></div>
    </div>
  );
};

export default SubmarineIcon;
