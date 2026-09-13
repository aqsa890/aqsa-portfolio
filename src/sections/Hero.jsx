import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = ({ onScrollNext }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'Asia/Karachi',
  });

  const name = "AQSA";
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const charVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 14,
        stiffness: 90,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section 
      id="home" 
      className="panel relative flex flex-col justify-between w-full md:w-[100vw] shrink-0 min-h-screen md:h-screen pt-20 pb-8 px-6 md:pl-28 md:pr-16 md:py-12 bg-[#262220] text-[#f3eee8] overflow-hidden select-none"
    >
      {/* Top Meta Line (Always fully visible below fixed navbar on mobile) */}
      <div className="flex items-center justify-between border-b border-[#5a524d] pb-3 mb-2 md:mb-0">
        <div className="flex items-center gap-2.5">
          <span className="font-serif text-xs md:text-sm uppercase tracking-widest text-[#f3eee8]">
            Folio — 2026 Edition
          </span>
          <span className="text-[#8a8178]">·</span>
          <span className="font-mono text-[10px] md:text-xs text-[#8a8178] uppercase">
            DevSecOps & Cloud
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono text-[#8a8178]">
          <span className="hidden sm:inline">PK (GMT+5)</span>
          <span className="text-[#f3eee8] font-bold">{formattedTime}</span>
        </div>
      </div>

      {/* Main Center Area: Massive Name + Narrative */}
      <div className="flex flex-col w-full my-auto py-4 md:py-8">
        
        {/* ─── MOBILE CENTER CONTENT (Minimal, High-Impact Editorial) ─── */}
        <div className="block md:hidden">
          <div className="flex overflow-hidden mb-3">
            {name.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={charVariants}
                className="font-serif leading-none uppercase tracking-[-0.04em] text-[#f3eee8]"
                style={{ fontSize: 'clamp(3.75rem, 20vw, 6rem)' }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          <h2 className="font-serif text-lg tracking-wide text-[#edeae6] font-normal mb-2.5">
            DevOps Engineer & Cloud Architect
          </h2>

          <p className="font-sans text-xs leading-relaxed text-[#edeae6]/80 font-light max-w-sm mb-4">
            Architecting zero-vulnerability container platforms, automated CI/CD pipelines, and resilient cloud systems.
          </p>

          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm border border-[#5a524d] bg-[#1e1b19]/80 text-[10px] font-mono text-[#d4cfc8]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Peshawar, PK · High Honors BSSE '26</span>
          </div>
        </div>

        {/* ─── DESKTOP CENTER CONTENT (Unchanged Full Magazine Spread) ─── */}
        <div className="hidden md:block">
          <motion.div 
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Oversized Monogram / Name */}
            <div className="flex overflow-hidden">
              {name.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={charVariants}
                  className="font-serif leading-none uppercase tracking-[-0.04em] text-[#f3eee8] hover:text-[#edeae6] transition-colors"
                  style={{ fontSize: 'clamp(4rem, 16vw, 13rem)' }}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Right Tagline Paragraph */}
            <motion.div 
              variants={fadeUpVariants}
              className="lg:max-w-md lg:text-right"
            >
              <p className="font-sans text-sm md:text-base leading-relaxed text-[#edeae6]/85 font-light">
                Results-driven engineer specializing in automated CI/CD pipelines, hardened Kubernetes/Docker platforms, zero-vulnerability cloud environments, and resilient distributed architectures.
              </p>
            </motion.div>
          </motion.div>

          {/* Subtitle & Focus */}
          <motion.div 
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="mt-6 pt-4 border-t border-[#3a3632] flex flex-col md:flex-row md:items-center justify-between gap-3"
          >
            <h2 className="font-serif text-lg md:text-2xl tracking-wide text-[#edeae6]">
              DevOps Engineer — DevSecOps — Cloud Architect
            </h2>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8a8178]">
              CUSIT BSSE '26 · 3.86 CGPA (High Honors)
            </span>
          </motion.div>
        </div>

      </div>

      {/* Footer Meta Row */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex items-center justify-between w-full text-[10px] md:text-xs uppercase tracking-widest font-mono text-[#8a8178] pt-3 md:pt-4 border-t border-[#5a524d]"
      >
        {/* Desktop Left */}
        <div className="hidden md:flex items-center gap-3">
          <span>Peshawar, Pakistan</span>
          <span>·</span>
          <span>Open to Global Remote</span>
        </div>

        {/* Desktop Center */}
        <div className="hidden md:flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[#f3eee8]">Ready for Collaborations & Opportunities</span>
        </div>

        {/* Mobile Left Status */}
        <div className="flex md:hidden items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[#f3eee8] text-[10px]">Open to Roles</span>
        </div>

        {/* Scroll Hint */}
        <button
          onClick={onScrollNext}
          className="flex items-center gap-2 md:gap-3 group cursor-pointer text-[#f3eee8] hover:text-white transition-colors focus:outline-none"
        >
          <span className="font-serif tracking-widest text-[10px] md:text-xs">SCROLL TO EXPLORE</span>
          <div className="w-6 md:w-8 h-px bg-[#8a8178] relative overflow-hidden group-hover:w-12 transition-all">
            <motion.div 
              animate={{ x: [-20, 40] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 w-3 md:w-4 h-full bg-[#f3eee8]"
            />
          </div>
          <span className="font-mono text-xs">→</span>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
