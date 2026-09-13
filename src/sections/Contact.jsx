import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Download, ExternalLink, FileText } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="panel relative flex flex-col justify-between w-full md:w-[100vw] shrink-0 min-h-screen md:h-screen bg-[#1f1d1b] text-[#f3eee8] px-5 pt-20 pb-28 md:px-20 md:py-14 overflow-y-auto md:overflow-hidden select-none"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#5a524d] pb-3 mb-6 md:mb-8 shrink-0 w-full">
        <div className="flex items-baseline gap-2 sm:gap-4">
          <span className="font-serif text-base sm:text-lg md:text-xl font-normal uppercase leading-none tracking-tight text-[#f3eee8] whitespace-nowrap">
            Final Chapter
          </span>
          <span className="hidden sm:inline text-xs uppercase tracking-[0.2em] text-[#8a8178] font-mono whitespace-nowrap">
            — 05. Collaboration
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase text-[#8a8178] whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="hidden sm:inline">Open for Global Roles & Infrastructure Projects</span>
          <span className="sm:hidden">Available</span>
        </div>
      </div>

      {/* Main Contact Stage */}
      <div className="max-w-6xl mx-auto w-full my-auto flex flex-col justify-center py-4">
        
        {/* Massive Editorial Headline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-6 md:mb-12"
        >
          <motion.div variants={itemVariants} className="text-[10px] md:text-xs uppercase tracking-[0.25em] font-mono text-[#8a8178] mb-2.5">
            Available For High-Impact DevOps & DevSecOps Engineering
          </motion.div>
          <motion.h2 
            variants={itemVariants} 
            className="font-serif text-[#f3eee8] leading-[1.0] uppercase tracking-[-0.03em] font-normal"
            style={{ fontSize: 'clamp(2rem, 6.5vw, 6rem)' }}
          >
            Let’s Build <br className="hidden sm:block"/> Resilient Systems.
          </motion.h2>
        </motion.div>

        {/* Contact Coordinates & Action Buttons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pt-6 border-t border-[#3a3532]">
          
          {/* Direct Communication Channels */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Email Box */}
            <div>
              <span className="block text-[10px] font-mono uppercase tracking-widest text-[#8a8178] mb-1">
                Primary Direct Inquiries
              </span>
              <a 
                href="mailto:aksawadood@gmail.com"
                className="group inline-flex items-center gap-2.5 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#f3eee8] hover:text-white transition-colors break-all sm:break-normal"
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#8a8178] group-hover:text-[#f3eee8] transition-colors shrink-0" />
                <span className="relative">
                  aksawadood@gmail.com
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#f3eee8] transition-all duration-400 group-hover:w-full"></span>
                </span>
              </a>
            </div>

            {/* Phone & Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="border border-[#38332f] p-3 rounded-sm bg-[#1e1b19]/70">
                <span className="block text-[9px] font-mono uppercase tracking-widest text-[#8a8178] mb-1">
                  Direct Phone / WhatsApp
                </span>
                <a 
                  href="tel:+923334408591" 
                  className="font-mono text-sm text-[#f3eee8] hover:text-white transition-colors inline-flex items-center gap-2 font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8a8178]" />
                  <span>+92 333 4408591</span>
                </a>
              </div>

              <div className="border border-[#38332f] p-3 rounded-sm bg-[#1e1b19]/70">
                <span className="block text-[9px] font-mono uppercase tracking-widest text-[#8a8178] mb-1">
                  Timezone & Location
                </span>
                <span className="text-[#d4cfc8] inline-flex items-center gap-2 text-sm font-sans">
                  <MapPin className="w-3.5 h-3.5 text-[#8a8178]" />
                  <span>Peshawar, PK · GMT+5</span>
                </span>
              </div>
            </div>

            {/* CV Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a 
                href="/cv.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#f3eee8] text-[#1f1d1b] rounded-sm font-sans text-xs font-semibold uppercase tracking-wider hover:bg-white transition-all shadow-md active:scale-[0.98]"
              >
                <FileText className="w-4 h-4" />
                <span>View Interactive CV</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a 
                href="/aqsa-resume.pdf" 
                download="Aqsa_DevOps_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-[#5a524d] text-[#f3eee8] hover:border-[#f3eee8] rounded-sm font-sans text-xs font-medium uppercase tracking-wider hover:bg-[#262220] transition-all active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-[#8a8178]" />
                <span>Download Official PDF</span>
              </a>
            </div>
          </div>

          {/* Social Profiles & Verification */}
          <div className="lg:col-span-5 flex flex-col lg:items-end space-y-3 pt-2 lg:pt-0">
            <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-widest text-[#8a8178]">
              Connect & Verify Repositories
            </span>
            
            <div className="flex flex-col gap-2.5 w-full">
              <a 
                href="https://www.linkedin.com/in/aqsa-~-3149782a2"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 text-xs sm:text-sm text-[#f3eee8]/90 hover:text-white p-3 rounded-sm border border-[#38332f] bg-[#1e1b19]/70 hover:border-[#8a8178] transition-all"
              >
                <span className="font-mono uppercase tracking-wider text-[#8a8178] text-[11px]">LinkedIn</span>
                <span className="font-mono text-xs text-[#f3eee8] truncate">aqsa-~-3149782a2</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8a8178] group-hover:text-white transition-colors shrink-0" />
              </a>

              <a 
                href="https://github.com/aqsa890"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 text-xs sm:text-sm text-[#f3eee8]/90 hover:text-white p-3 rounded-sm border border-[#38332f] bg-[#1e1b19]/70 hover:border-[#8a8178] transition-all"
              >
                <span className="font-mono uppercase tracking-wider text-[#8a8178] text-[11px]">GitHub</span>
                <span className="font-mono text-xs text-[#f3eee8]">github.com/aqsa890</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8a8178] group-hover:text-white transition-colors shrink-0" />
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Section Bottom Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-[#3a3532] text-[10px] md:text-xs font-mono text-[#8a8178] gap-2 text-center sm:text-left">
        <p>© 2026 Aqsa — Engineered with Precision & Integrity</p>
        <p className="uppercase tracking-widest">Folio Edition · DevOps / DevSecOps</p>
      </div>
    </section>
  );
}
