import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function ScrollBadge({ targetId = '#about', className = '' }) {
  const handleClick = () => {
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Scroll down"
      className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 group ${className}`}
    >
      {/* Yellow Circle Background */}
      <div className="absolute inset-0 rounded-full bg-[#efe41f] shadow-lg border border-black/10 group-hover:bg-[#f7ee38] transition-colors" />

      {/* Rotating Circular Text SVG */}
      <svg
        className="absolute inset-0 w-full h-full spin-slow"
        viewBox="0 0 100 100"
      >
        <path
          id="circlePath"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="none"
        />
        <text className="text-[10px] uppercase font-mono font-bold tracking-[0.22em] fill-[#0a0a0a]">
          <textPath href="#circlePath" startOffset="0%">
            scroll down • scroll down •
          </textPath>
        </text>
      </svg>

      {/* Center Arrow */}
      <div className="relative z-10 text-[#0a0a0a] group-hover:translate-y-1 transition-transform duration-300">
        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
      </div>
    </button>
  );
}
