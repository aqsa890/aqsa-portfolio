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
      className="panel relative flex flex-col justify-between w-full md:w-[100vw] shrink-0 min-h-screen md:h-screen bg-[#1f1d1b] text-[#f3eee8] px-6 py-12 md:px-20 md:py-14 overflow-y-auto md:overflow-hidden select-none"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#5a524d] pb-4 mb-6">
        <div className="flex items-center gap-4">
          <span className="font-serif text-lg md:text-xl font-normal uppercase leading-none tracking-tight text-[#f3eee8]">
            Next Chapter
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#8a8178] font-mono">
            — 05. Collaboration & Contact
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs font-mono uppercase text-[#8a8178]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Open for Global Roles & Infrastructure Projects</span>
        </div>
      </div>

      {/* Main Contact Stage */}
      <div className="max-w-6xl mx-auto w-full my-auto flex flex-col justify-center">
        
        {/* Massive Editorial Headline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-10 md:mb-14"
        >
          <motion.div variants={itemVariants} className="text-xs uppercase tracking-[0.25em] font-mono text-[#8a8178] mb-3">
            Available For High-Impact DevOps & DevSecOps Engineering
          </motion.div>
          <motion.h2 
            variants={itemVariants} 
            className="font-serif text-[#f3eee8] leading-[0.95] uppercase tracking-[-0.03em] font-normal"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6.5rem)' }}
          >
            Let’s Build <br className="hidden md:block"/> Resilient Systems.
          </motion.h2>
        </motion.div>

        {/* Contact Coordinates & Action Buttons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end pt-8 border-t border-[#3a3532]">
          
          {/* Direct Communication Channels */}
          <div className="lg:col-span-7 space-y-5">
            {/* Email */}
            <div>
              <span className="block text-[11px] font-mono uppercase tracking-widest text-[#8a8178] mb-1">
                Primary Direct Inquiries
              </span>
              <a 
                href="mailto:aksawadood@gmail.com"
                className="group inline-flex items-center gap-3 text-2xl md:text-3xl lg:text-4xl font-serif text-[#f3eee8] hover:text-white transition-colors"
              >
                <Mail className="w-6 h-6 text-[#8a8178] group-hover:text-[#f3eee8] transition-colors" />
                <span className="relative">
                  aksawadood@gmail.com
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#f3eee8] transition-all duration-400 group-hover:w-full"></span>
                </span>
              </a>
            </div>

            {/* Phone & Location */}
            <div className="flex flex-wrap gap-8 items-center pt-2 text-sm md:text-base font-sans">
              <div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-[#8a8178] mb-0.5">
                  Direct Phone / WhatsApp
                </span>
                <a 
                  href="tel:+923334408591" 
                  className="font-mono text-[#f3eee8] hover:text-white transition-colors inline-flex items-center gap-2 font-medium"
                >
                  <Phone className="w-4 h-4 text-[#8a8178]" />
                  <span>+92 333 4408591</span>
                </a>
              </div>

              <div>
                <span className="block text-[10px] font-mono uppercase tracking-widest text-[#8a8178] mb-0.5">
                  Timezone & Location
                </span>
                <span className="text-[#d4cfc8] inline-flex items-center gap-2 text-sm font-sans">
                  <MapPin className="w-4 h-4 text-[#8a8178]" />
                  <span>Peshawar, Pakistan · GMT+5</span>
                </span>
              </div>
            </div>

            {/* CV Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="/cv.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#f3eee8] text-[#1f1d1b] rounded-sm font-sans text-xs font-semibold uppercase tracking-wider hover:bg-white transition-all shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>View Interactive CV</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a 
                href="/aqsa-resume.pdf" 
                download="Aqsa_DevOps_Resume.pdf"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-[#5a524d] text-[#f3eee8] hover:border-[#f3eee8] rounded-sm font-sans text-xs font-medium uppercase tracking-wider hover:bg-[#262220] transition-all"
              >
                <Download className="w-4 h-4 text-[#8a8178]" />
                <span>Download Official PDF</span>
              </a>
            </div>
          </div>

          {/* Social Profiles & Verification */}
          <div className="lg:col-span-5 flex flex-col lg:items-end space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#8a8178]">
              Connect & Verify Repositories
            </span>
            
            <div className="flex flex-col lg:items-end gap-3 w-full">
              <a 
                href="https://www.linkedin.com/in/aqsa-~-3149782a2"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between lg:justify-end gap-3 text-sm md:text-base text-[#f3eee8]/85 hover:text-white p-2.5 border-b border-[#3a3532] hover:border-[#8a8178] transition-all w-full lg:w-auto"
              >
                <span className="font-mono text-xs uppercase tracking-wider">LinkedIn Profile</span>
                <span className="font-sans font-medium">aqsa-~-3149782a2</span>
                <ArrowUpRight className="w-4 h-4 text-[#8a8178] group-hover:text-white transition-colors" />
              </a>

              <a 
                href="https://github.com/aqsa890"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between lg:justify-end gap-3 text-sm md:text-base text-[#f3eee8]/85 hover:text-white p-2.5 border-b border-[#3a3532] hover:border-[#8a8178] transition-all w-full lg:w-auto"
              >
                <span className="font-mono text-xs uppercase tracking-wider">GitHub Repositories</span>
                <span className="font-sans font-medium">github.com/aqsa890</span>
                <ArrowUpRight className="w-4 h-4 text-[#8a8178] group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Section Bottom Footer */}
      <div className="flex flex-col md:flex-row items-center justify-between pt-4 border-t border-[#3a3532] text-xs font-mono text-[#8a8178] gap-2">
        <p>© 2026 Aqsa — Engineered with Precision & Integrity</p>
        <p className="uppercase tracking-widest">Folio Edition · DevOps / DevSecOps</p>
      </div>
    </section>
  );
}
