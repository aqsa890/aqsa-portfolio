import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Phone, Mail, Download, ExternalLink } from 'lucide-react';

const navLinks = [
  { number: '01', title: 'Home', id: 'home', subtitle: 'Introduction & Mission' },
  { number: '02', title: 'About', id: 'about', subtitle: 'Profile & Philosophy' },
  { number: '03', title: 'Work', id: 'work', subtitle: 'Selected DevOps & Cloud Projects' },
  { number: '04', title: 'Skills', id: 'skills', subtitle: 'Technical Arsenal & Tooling' },
  { number: '05', title: 'Experience', id: 'experience', subtitle: 'Journey & Honors' },
  { number: '06', title: 'Contact', id: 'contact', subtitle: 'Collaboration & Inquiries' },
];

export default function Header({ onNavigate, activeSection = 'home' }) {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Left Sidebar Rail (64px fixed) */}
      <header 
        className="hidden md:flex fixed left-0 top-0 bottom-0 w-16 border-r border-[#5a524d]/30 bg-[#262220] text-[#f3eee8] z-50 flex-col items-center justify-between py-6 select-none"
        aria-label="Global Site Navigation Rail"
      >
        {/* Top Hamburger Menu Toggle Button */}
        <button 
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 flex items-center justify-center text-[#f3eee8] hover:text-white transition-colors focus:outline-none cursor-pointer rounded-sm hover:bg-[#38332f] group"
          aria-label="Open Navigation Menu"
          title="Open Menu"
        >
          <div className="flex flex-col gap-1.5 w-6 items-center">
            <span className="w-6 h-[1.5px] bg-[#f3eee8] group-hover:bg-white transition-colors"></span>
            <span className="w-4 h-[1.5px] bg-[#8a8178] group-hover:w-6 group-hover:bg-white transition-all"></span>
            <span className="w-5 h-[1.5px] bg-[#f3eee8] group-hover:bg-white transition-colors"></span>
          </div>
        </button>

        {/* Center Vertical Text */}
        <div className="writing-vertical-lr rotate-180 font-mono text-[10px] uppercase tracking-[0.25em] text-[#8a8178] flex items-center gap-3">
          <span>Folio — 2026</span>
          <span className="w-1 h-1 rounded-full bg-[#8a8178]"></span>
          <span className="text-[#f3eee8] font-bold">Aqsa</span>
        </div>

        {/* Bottom Monogram Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="font-serif text-lg font-bold tracking-tight text-[#f3eee8] hover:text-white transition-colors cursor-pointer"
          aria-label="Back to home"
          title="Home"
        >
          A.
        </button>
      </header>

      {/* Mobile Top Navigation Bar */}
      <header 
        className="md:hidden fixed top-0 left-0 right-0 h-16 border-b border-[#5a524d]/30 bg-[#262220]/95 backdrop-blur-md text-[#f3eee8] z-50 flex items-center justify-between px-6 select-none"
        aria-label="Mobile Navigation Bar"
      >
        <button
          onClick={() => handleNavClick('home')}
          className="font-serif text-xl font-bold tracking-tight text-[#f3eee8] flex items-center gap-2"
        >
          <span>Aqsa</span>
          <span className="text-[10px] font-mono text-[#8a8178] uppercase border border-[#5a524d] px-1.5 py-0.5 rounded">
            DevOps
          </span>
        </button>

        <button 
          onClick={() => setIsOpen(true)}
          className="w-10 h-10 flex items-center justify-center text-[#f3eee8] hover:text-white transition-colors focus:outline-none cursor-pointer"
          aria-label="Open Menu"
        >
          <div className="flex flex-col gap-1.5 w-6 items-end">
            <span className="w-6 h-[2px] bg-[#f3eee8]"></span>
            <span className="w-4 h-[2px] bg-[#8a8178]"></span>
            <span className="w-5 h-[2px] bg-[#f3eee8]"></span>
          </div>
        </button>
      </header>

      {/* Fullscreen Editorial Menu Overlay (Bulletproof CSS transition — no DOM unmount crashes) */}
      <div
        className={`fixed inset-0 z-[999] bg-[#1a1715]/98 text-[#f3eee8] flex flex-col justify-between overflow-y-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen 
            ? 'opacity-100 pointer-events-auto translate-y-0 backdrop-blur-xl' 
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Site Navigation Overlay"
      >
        {/* Menu Header Bar */}
        <div className="flex items-center justify-between px-6 py-6 md:px-16 md:py-8 border-b border-[#38332f] shrink-0">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#f3eee8]">Aqsa</span>
            <span className="hidden sm:inline font-mono text-xs text-[#8a8178] uppercase">
              · DevOps & Cloud Architect
            </span>
          </div>

          <button 
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-2 px-4 py-2 border border-[#5a524d] hover:border-[#f3eee8] rounded-sm text-xs font-mono uppercase tracking-widest text-[#f3eee8] hover:bg-[#262220] transition-all cursor-pointer"
            aria-label="Close Navigation Menu"
          >
            <span>Close</span>
            <X size={16} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Menu Navigation Links List */}
        <nav className="flex-1 flex flex-col justify-center px-6 md:px-16 py-8">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#8a8178] mb-6">
            Table of Contents — Chapters
          </p>

          <ul className="space-y-3 md:space-y-4 max-w-4xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <button 
                    onClick={() => handleNavClick(link.id)}
                    className={`group flex items-baseline gap-4 md:gap-8 text-left w-full focus:outline-none transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'text-white' 
                        : 'text-[#a39a92] hover:text-[#f3eee8]'
                    }`}
                  >
                    <span className={`font-mono text-xs md:text-sm tracking-widest w-6 md:w-8 shrink-0 transition-colors ${
                      isActive ? 'text-white font-bold' : 'text-[#8a8178] group-hover:text-[#f3eee8]'
                    }`}>
                      {link.number}.
                    </span>

                    <div className="flex items-baseline gap-4 flex-wrap">
                      <span className="font-serif text-3xl md:text-5xl lg:text-6xl uppercase tracking-[-0.03em] leading-none group-hover:translate-x-3 transition-transform duration-300">
                        {link.title}
                      </span>
                      <span className="hidden md:inline font-mono text-xs text-[#8a8178] tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                        — {link.subtitle}
                      </span>
                      {isActive && (
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-[#38332f] text-[#d4cfc8] rounded">
                          Current
                        </span>
                      )}
                    </div>
                  </button>
                </li>
              );
            })}

            {/* Extra CV Row */}
            <li className="pt-4 border-t border-[#38332f]">
              <a
                href="/cv.html"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline gap-4 md:gap-8 text-left w-full text-[#8a8178] hover:text-[#f3eee8] transition-colors cursor-pointer"
              >
                <span className="font-mono text-xs md:text-sm tracking-widest text-[#8a8178] w-6 md:w-8 shrink-0">
                  07.
                </span>
                <div className="flex items-baseline gap-4">
                  <span className="font-serif text-2xl md:text-4xl uppercase tracking-[-0.03em] leading-none group-hover:translate-x-3 transition-transform duration-300 flex items-center gap-2 text-[#d4cfc8] group-hover:text-white">
                    Curriculum Vitae (Interactive)
                    <ArrowUpRight className="w-4 h-4 text-[#8a8178] group-hover:text-white transition-colors" />
                  </span>
                  <span className="hidden md:inline font-mono text-xs text-[#8a8178] tracking-widest uppercase">
                    — Dedicated Web Document
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </nav>

        {/* Menu Footer Contact Coordinates */}
        <div className="px-6 py-6 md:px-16 md:py-8 border-t border-[#38332f] bg-[#151312] shrink-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs font-mono text-[#8a8178]">
            
            {/* Direct Phone & Email */}
            <div className="flex flex-wrap gap-6 items-center">
              <div>
                <span className="text-[10px] uppercase tracking-widest block text-[#8a8178]/60 mb-0.5">
                  Direct Phone / WhatsApp
                </span>
                <a href="tel:+923334408591" className="text-[#f3eee8] hover:underline font-bold font-mono">
                  +92 333 4408591
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest block text-[#8a8178]/60 mb-0.5">
                  Primary Email
                </span>
                <a href="mailto:aksawadood@gmail.com" className="text-[#f3eee8] hover:underline">
                  aksawadood@gmail.com
                </a>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest block text-[#8a8178]/60 mb-0.5">
                  Location & Time
                </span>
                <span className="text-[#d4cfc8]">Peshawar, Pakistan · GMT+5</span>
              </div>
            </div>

            {/* Social and CV actions */}
            <div className="flex flex-wrap items-center gap-5">
              <a 
                href="https://www.linkedin.com/in/aqsa-~-3149782a2" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="uppercase tracking-widest text-[#f3eee8] hover:text-white transition-colors flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#8a8178]" />
              </a>

              <a 
                href="https://github.com/aqsa890" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="uppercase tracking-widest text-[#f3eee8] hover:text-white transition-colors flex items-center gap-1"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-[#8a8178]" />
              </a>

              <a 
                href="/aqsa-resume.pdf" 
                download="Aqsa_Resume.pdf" 
                className="uppercase tracking-widest bg-[#262220] border border-[#5a524d] px-3 py-1.5 rounded-sm text-[#f3eee8] hover:border-[#f3eee8] hover:text-white transition-all flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-[#8a8178]" />
                <span>Download PDF CV</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
