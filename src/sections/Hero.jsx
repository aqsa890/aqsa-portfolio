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
      className="panel relative flex flex-col justify-between w-full md:w-[100vw] shrink-0 min-h-screen md:h-screen px-6 py-12 md:pl-28 md:pr-16 md:py-12 bg-[#262220] text-[#f3eee8] overflow-hidden select-none"
    >
      {/* Top Meta Line */}
      <div className="flex items-center justify-between border-b border-[#5a524d] pb-4">
        <div className="flex items-center gap-3">
          <span className="font-serif text-sm uppercase tracking-widest text-[#f3eee8]">
            Folio — 2026 Edition
          </span>
          <span className="text-[#8a8178]">·</span>
          <span className="font-mono text-xs text-[#8a8178] uppercase">
            DevSecOps & Cloud Engineering
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-[#8a8178]">
          <span>PK — (GMT+5)</span>
          <span className="text-[#f3eee8] font-bold">{formattedTime}</span>
        </div>
      </div>

      {/* Main Center Area: Massive Name + Narrative */}
      <div className="flex flex-col w-full my-auto py-8">
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

      {/* Footer Meta Row */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center w-full text-xs uppercase tracking-widest font-mono text-[#8a8178] pt-4 border-t border-[#5a524d] gap-4"
      >
        {/* Left: Location and Time */}
        <div className="flex items-center gap-3">
          <span>Peshawar, Pakistan</span>
          <span>·</span>
          <span>Open to Global Remote</span>
        </div>

        {/* Center: Collaboration Badge */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[#f3eee8]">Ready for Collaborations & Opportunities</span>
        </div>

        {/* Right: Scroll Hint */}
        <button
          onClick={onScrollNext}
          className="flex items-center gap-3 group cursor-pointer text-[#f3eee8] hover:text-white transition-colors focus:outline-none"
        >
          <span className="font-serif tracking-widest">SCROLL TO EXPLORE</span>
          <div className="w-8 h-px bg-[#8a8178] relative overflow-hidden group-hover:w-12 transition-all">
            <motion.div 
              animate={{ x: [-20, 40] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 w-4 h-full bg-[#f3eee8]"
            />
          </div>
          <span className="font-mono text-xs">→</span>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
