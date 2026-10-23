import React from 'react';
import { motion } from 'framer-motion';
import aqsaPhoto from '../assets/aqsa_pfp_portfolio.jpg';

export default function YearBanner() {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-[#f4f4f4] py-8 sm:py-12 px-3.5 sm:px-10 md:px-20 overflow-hidden">
      {/* 5-Column Grid Lines */}
      <div className="montreal-grid-lines montreal-grid-lines-dark" aria-hidden="true">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-4 sm:gap-6">
        {/* Editorial Section Top Header */}
        <div className="flex justify-between items-center pb-2.5 sm:pb-3 border-b border-white/10 text-xs font-mono uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#efe41f]"></span>
            <span className="text-[#efe41f]">ENGINEERING IDENTITY</span>
          </div>
          <div className="text-right text-[#c7c7c7] hidden sm:block">
            <span>PLATFORM ENGINEERING • GLOBAL DEVOPS</span>
          </div>
        </div>

        {/* Large Editorial Portrait Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full h-[320px] sm:h-[480px] md:h-[650px] rounded-xl sm:rounded-2xl overflow-hidden border border-[#efe41f]/20 group shadow-2xl"
        >
          <img
            src={aqsaPhoto}
            alt="Aqsa — DevOps Engineer & Cloud Infrastructure"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out"
          />

          {/* Gradient Overlay for Editorial Depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

          {/* Banner Tag / Caption */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-10 sm:left-10 sm:right-10 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-4">
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#efe41f] text-[#0a0a0a] font-mono text-[10px] sm:text-xs font-bold uppercase mb-1.5 sm:mb-2">
                DevOps & Cloud Engineer
              </div>
              <h3 className="font-heading text-xl sm:text-3xl md:text-4xl font-extrabold uppercase text-white leading-tight">
                AQSA
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#c7c7c7] max-w-md mt-1">
                Specialized in zero-trust DevSecOps, multi-stage container pipelines, and high-availability cloud architecture.
              </p>
            </div>

            <div className="font-mono text-[11px] sm:text-xs text-[#efe41f] shrink-0">
              [ PESHAWAR, PAKISTAN ]
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
