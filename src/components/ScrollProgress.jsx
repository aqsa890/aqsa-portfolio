import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollProgress({ progress = 0 }) {
  const percentage = Math.min(100, Math.max(0, progress * 100));

  return (
    <>
      {/* Desktop Vertical Progress Bar (Fixed on left rail at 64px border) */}
      <div 
        className="hidden md:block fixed left-16 top-0 bottom-0 w-[2px] bg-[#3a3532]/20 z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div 
          className="w-full bg-[#8a8178] origin-top transition-all duration-150 ease-out"
          style={{ height: `${percentage}%` }}
        />
      </div>

      {/* Mobile Horizontal Progress Bar (Fixed at bottom of mobile top-bar) */}
      <div 
        className="md:hidden fixed top-16 left-0 right-0 h-[2px] bg-[#3a3532]/20 z-50 pointer-events-none"
        aria-hidden="true"
      >
        <div 
          className="h-full bg-[#8a8178] origin-left transition-all duration-150 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </>
  );
}
