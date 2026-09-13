import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Award, ArrowRight } from 'lucide-react';
import aqsaPhoto from '../assets/aqsa_pfp_bottom_left.jpg';

const About = ({ onNavigateWork }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [isColorActive, setIsColorActive] = useState(false);

  const fadeUp = {
    hidden: { y: 35, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  return (
    <section 
      id="about" 
      ref={ref}
      className="panel relative flex flex-col justify-between w-full md:w-[100vw] shrink-0 min-h-screen md:h-screen bg-[#faf9f6] text-[#262220] px-5 pt-20 pb-8 md:pl-28 md:pr-16 md:py-12 overflow-y-auto md:overflow-hidden select-none"
    >
      {/* Header Row */}
      <div className="flex justify-between items-center border-b border-[#262220]/10 pb-3 mb-4 md:mb-6">
        <div className="flex items-center gap-3 md:gap-4">
          <span className="font-serif text-base md:text-xl font-normal uppercase leading-none tracking-tight text-[#262220]">
            Chapter I
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#8a8178] font-mono">
            — Engineering Philosophy
          </span>
        </div>
        <span className="text-[10px] md:text-xs uppercase tracking-widest font-mono text-[#8a8178]">
          01. Quick Intro
        </span>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center my-auto">
        
        {/* Mobile-Only Portrait (Compact & prominent at top for better mobile visual balance) */}
        <div className="block lg:hidden w-full max-w-[240px] mx-auto">
          <div 
            onClick={() => setIsColorActive(prev => !prev)}
            className="relative aspect-square overflow-hidden rounded-sm border border-[#262220]/20 bg-[#edeae6] shadow-xl cursor-pointer select-none group/img"
            title="Tap to toggle color"
          >
            <img 
              src={aqsaPhoto} 
              alt="Aqsa — DevOps Engineer" 
              className={`w-full h-full object-cover object-top transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isColorActive 
                  ? 'grayscale-0 contrast-100 brightness-100 scale-105 saturate-110' 
                  : 'grayscale contrast-125 brightness-90'
              }`}
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#262220]/50 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-2 border border-white/20 pointer-events-none" />
            
            <div className="absolute top-2 right-2 text-[9px] font-mono uppercase tracking-wider text-white/90 bg-[#262220]/85 backdrop-blur-sm px-2 py-0.5 rounded-sm border border-white/15">
              {isColorActive ? '● Vivid Color' : '○ Tap for Color'}
            </div>

            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[9px] font-mono uppercase tracking-wider text-white/95 bg-[#262220]/85 backdrop-blur-sm px-2.5 py-1 rounded-sm border border-white/15">
              <span className="font-serif">Aqsa</span>
              <span>DevSecOps & Cloud</span>
            </div>
          </div>
        </div>

        {/* Left Text & Bio Column */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h3 
              variants={fadeUp} 
              className="font-serif leading-[1.2] tracking-tight text-[#262220] mb-4 md:mb-6 font-normal"
              style={{ fontSize: 'clamp(1.25rem, 3.2vw, 2.75rem)' }}
            >
              Hi, I’m Aqsa — a DevOps & Cloud Engineer specialized in architecting zero-vulnerability container platforms, automating multi-stage CI/CD pipelines, and securing mission-critical infrastructure.
            </motion.h3>

            <motion.p variants={fadeUp} className="text-xs md:text-base text-[#5a524d] leading-relaxed max-w-2xl mb-6 font-light">
              Holding High Honors in Software Engineering (3.86/4.00 CGPA), I bridge modern software architecture with robust cloud reliability. From eliminating 235+ microservice CVEs to sub-second real-time telemetry streaming, I approach platform engineering as a craft of precision and security.
            </motion.p>
            
            {/* Action link */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 md:gap-6">
              <button 
                onClick={onNavigateWork}
                className="inline-flex items-center gap-2 group text-[11px] md:text-xs font-mono uppercase tracking-widest border-b border-[#262220] pb-1 hover:text-[#8a8178] hover:border-[#8a8178] transition-colors cursor-pointer"
              >
                <span>Explore Selected Works (Chapter II)</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </button>

              <a 
                href="/cv.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] md:text-xs font-mono uppercase tracking-widest text-[#8a8178] hover:text-[#262220] transition-colors"
              >
                Open Full CV ↗
              </a>
            </motion.div>

            {/* Bio Details Grid */}
            <motion.div 
              variants={fadeUp} 
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6 md:mt-8 pt-5 border-t border-[#262220]/10 text-[11px] md:text-xs font-mono"
            >
              <div className="flex flex-col">
                <span className="text-[#8a8178] mb-0.5 uppercase tracking-widest text-[9px] md:text-[10px]">Education</span>
                <span className="font-semibold text-[#262220]">BSSE, CUSIT</span>
                <span className="text-[#5a524d]">2022 – 2026</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#8a8178] mb-0.5 uppercase tracking-widest text-[9px] md:text-[10px]">Academics</span>
                <span className="font-semibold text-[#262220]">CGPA: 3.86 / 4.00</span>
                <span className="text-[#5a524d]">High Honors</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#8a8178] mb-0.5 uppercase tracking-widest text-[9px] md:text-[10px]">Location</span>
                <span className="font-semibold text-[#262220]">Peshawar, PK</span>
                <span className="text-[#5a524d]">GMT+5 Timezone</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#8a8178] mb-0.5 uppercase tracking-widest text-[9px] md:text-[10px]">Primary Focus</span>
                <span className="font-semibold text-[#262220]">DevSecOps & AWS</span>
                <span className="text-[#5a524d]">Docker / K8s / IaC</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Portrait Column (Hidden on Mobile) */}
        <div className="hidden lg:flex lg:col-span-4 justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-xs md:max-w-sm relative group"
          >
            {/* Portrait Frame — B&W by default, colorful on hover or click */}
            <div 
              onClick={() => setIsColorActive(prev => !prev)}
              className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-sm border border-[#262220]/20 bg-[#edeae6] shadow-2xl cursor-pointer select-none group/img"
              title="Click or hover to toggle vivid color"
            >
              <img 
                src={aqsaPhoto} 
                alt="Aqsa — DevOps Engineer & Cloud Architect" 
                className={`w-full h-full object-cover object-top transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isColorActive 
                    ? 'grayscale-0 contrast-100 brightness-100 scale-105 saturate-110' 
                    : 'grayscale contrast-125 brightness-90 group-hover/img:grayscale-0 group-hover/img:contrast-100 group-hover/img:brightness-100 group-hover/img:scale-105 group-hover/img:saturate-110'
                }`}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#262220]/50 via-transparent to-transparent pointer-events-none" />
              
              {/* Corner Frame Lines */}
              <div className="absolute inset-3 border border-white/25 pointer-events-none transition-transform group-hover/img:scale-[0.98]" />
              
              {/* Interactive Color Status Badge */}
              <div className="absolute top-3 right-3 text-[9px] font-mono uppercase tracking-wider text-white/90 bg-[#262220]/85 backdrop-blur-sm px-2 py-1 rounded-sm border border-white/15 transition-all">
                {isColorActive ? '● Vivid Color' : '○ B&W · Tap / Hover for Color'}
              </div>

              {/* Editorial Caption Badge */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-white/95 bg-[#262220]/85 backdrop-blur-sm px-3 py-1.5 rounded-sm border border-white/15">
                <span className="font-serif">Aqsa</span>
                <span>DevOps · DevSecOps</span>
              </div>
            </div>

            {/* Subtle floating citation */}
            <p className="mt-3 text-[11px] font-mono text-[#8a8178] italic text-right">
              "Shift security left; engineer resilience from the ground up."
            </p>
          </motion.div>
        </div>

      </div>

      {/* Stats Row */}
      <div className="border-t border-[#262220]/10 pt-3 md:pt-4 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#262220]/10 text-center">
        <div className="px-2 md:px-3">
          <span className="font-serif text-xl md:text-3xl font-normal text-[#262220] block">04</span>
          <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-[#8a8178]">Production Projects</span>
        </div>
        <div className="px-2 md:px-3">
          <span className="font-serif text-xl md:text-3xl font-normal text-[#262220] block">04</span>
          <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-[#8a8178]">Industry Internships</span>
        </div>
        <div className="px-2 md:px-3">
          <span className="font-serif text-xl md:text-3xl font-normal text-[#262220] block">3.86</span>
          <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-[#8a8178]">BSSE Honors CGPA</span>
        </div>
        <div className="px-2 md:px-3">
          <span className="font-serif text-xl md:text-3xl font-normal text-[#262220] block">0</span>
          <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-widest text-[#8a8178]">Critical Vulnerabilities</span>
        </div>
      </div>
    </section>
  );
};

export default About;
