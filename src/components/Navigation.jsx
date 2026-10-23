import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import PillButton from './PillButton';

const MENU_LINKS = [
  { label: 'HOME', href: '#home', num: '01' },
  { label: 'ABOUT', href: '#about', num: '02' },
  { label: 'CAPABILITIES', href: '#services', num: '03' },
  { label: 'SKILLS', href: '#skills', num: '04' },
  { label: 'EXPERIENCE', href: '#experience', num: '05' },
  { label: 'PROJECTS', href: '#work', num: '06' },
  { label: 'EDUCATION', href: '#education', num: '07' },
  { label: 'METHODOLOGY', href: '#methodology', num: '08' },
  { label: 'FAQ', href: '#faq', num: '09' },
  { label: 'CONTACT', href: '#contact', num: '10' },
];

export default function Navigation({ onOpenContact, isOpen, setIsOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 280);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Header Bar — Only visible after scrolling past hero */}
      <AnimatePresence>
        {scrolled && (
          <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-40 py-2.5 sm:py-3 px-3.5 sm:px-12 flex justify-between items-center backdrop-blur-lg bg-black/75 border-b border-white/10"
          >
            <div>
              <PillButton
                onClick={onOpenContact}
                variant="light"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                CONTACT ME
              </PillButton>
            </div>

            <div>
              <PillButton
                onClick={() => setIsOpen(true)}
                variant="yellow"
              >
                MENU
              </PillButton>
            </div>

            <div className="hidden sm:block">
              <PillButton
                onClick={() => handleNavClick('#work')}
                variant="light"
                icon={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                VIEW PROJECTS
              </PillButton>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Fullscreen Overlay Drawer (Montreal exact styling, scroll-safe for mobile) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            animate={{ opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            exit={{ opacity: 0, clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#0a0a0a] text-[#f4f4f4] flex flex-col justify-between p-4 sm:p-12 overflow-y-auto min-h-screen"
          >
            {/* Top Bar with Brand & Close Button */}
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto pb-3 sm:pb-0">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#efe41f] animate-pulse"></span>
                <span className="font-heading text-sm font-bold tracking-widest text-[#efe41f] uppercase">
                  AQSA
                </span>
              </div>

              <PillButton
                onClick={() => setIsOpen(false)}
                variant="dark"
                icon={<X className="w-3.5 h-3.5" />}
              >
                CLOSE
              </PillButton>
            </div>

            {/* Main Menu Links with Scaled Typography for Mobile */}
            <nav className="my-3 sm:my-auto py-3 sm:py-8 w-full max-w-7xl mx-auto flex flex-col gap-1 sm:gap-2">
              {MENU_LINKS.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.03 * idx, duration: 0.35 }}
                  className="group flex items-baseline gap-2.5 sm:gap-4 cursor-pointer"
                  onClick={() => handleNavClick(item.href)}
                >
                  <span className="font-mono text-[11px] sm:text-sm text-[#efe41f]/70 font-semibold group-hover:text-[#efe41f] transition-colors shrink-0">
                    ({item.num})
                  </span>
                  <span className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#f4f4f4] group-hover:text-[#efe41f] group-hover:translate-x-2 sm:group-hover:translate-x-3 transition-all duration-300 leading-tight">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </nav>

            {/* Menu Footer */}
            <div className="pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 text-[11px] sm:text-xs font-mono text-[#c7c7c7] w-full max-w-7xl mx-auto pb-4 sm:pb-0">
              <div className="truncate max-w-full">
                <span>DIRECT INQUIRY: </span>
                <a
                  href="mailto:aksawadood@gmail.com"
                  className="text-[#efe41f] hover:underline ml-1 uppercase"
                >
                  AKSAWADOOD@GMAIL.COM
                </a>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <a
                  href="https://github.com/aqsa890"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GITHUB
                </a>
                <span>•</span>
                <a
                  href="https://www.linkedin.com/in/aqsa-~-3149782a2"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LINKEDIN
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
