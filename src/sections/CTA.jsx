import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import PillButton from '../components/PillButton';
import aqsaPhoto from '../assets/aqsa_pfp_portfolio.jpg';

export default function CTA({ onOpenContact }) {
  return (
    <section className="relative w-full bg-[#0a0a0a] text-[#f4f4f4] py-16 sm:py-28 px-3.5 sm:px-10 overflow-hidden">
      {/* 5-Column Grid Lines */}
      <div className="montreal-grid-lines montreal-grid-lines-dark" aria-hidden="true">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
        {/* Giant Section Title */}
        <div className="w-full text-center sm:text-left mb-8 sm:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="display-m text-[#f4f4f4] font-extrabold uppercase tracking-tight"
          >
            LET’S WORK TOGETHER
          </motion.h2>
        </div>

        {/* Arch / Oval Banner Container with Greyish Black Tech Gradient */}
        <div
          className="relative w-full rounded-[24px] sm:rounded-[40px] md:rounded-[60px] p-4 sm:p-10 md:p-16 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 shadow-2xl border border-[#efe41f]/30"
          style={{
            background: 'linear-gradient(135deg, #1a1b22 0%, #121317 60%, #0a0a0c 100%)',
          }}
        >
          {/* Hairline Grid Lines in Dark Theme */}
          <div className="montreal-grid-lines montreal-grid-lines-dark" aria-hidden="true">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* Left Large Oval/Arched Editorial Photo */}
          <div className="relative z-10 w-full md:w-1/2 flex justify-center">
            <div className="relative w-48 h-64 sm:w-80 sm:h-96 md:w-96 md:h-[420px] rounded-full overflow-hidden border-2 sm:border-4 border-[#efe41f]/40 shadow-2xl group">
              <img
                src={aqsaPhoto}
                alt="Aqsa Portrait"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Floating Slanted "THANK YOU" Card (Montreal signature element) */}
          <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-end">
            <div className="w-full max-w-md bg-[#16171d] text-[#f4f4f4] rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 shadow-2xl border border-white/10 rotate-0 sm:rotate-1 md:rotate-2 hover:rotate-0 transition-transform duration-500">
              <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white mb-2 sm:mb-3">
                THANK YOU
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#c7c7c7] leading-relaxed mb-5 sm:mb-6">
                Thank you for visiting my portfolio. I am always excited to discuss infrastructure challenges, CI/CD pipeline automation, and cloud security architecture. Let’s build something resilient together.
              </p>

              {/* Handwritten Signature SVG */}
              <div className="mb-5 sm:mb-6 border-b border-white/10 pb-3 sm:pb-4">
                <svg
                  className="w-28 h-9 sm:w-36 sm:h-12 text-[#efe41f]"
                  viewBox="0 0 150 50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10,35 Q30,10 50,30 T90,20 Q110,40 140,25" />
                  <path d="M40,20 Q50,45 65,30" />
                  <path d="M75,25 Q85,15 95,35" />
                </svg>
                <div className="text-[10px] font-mono uppercase text-[#efe41f]/80 mt-1">
                  AQSA — DevOps | DevSecOps | Cloud Engineer
                </div>
              </div>

              {/* Action Button */}
              <PillButton
                onClick={onOpenContact}
                variant="yellow"
                icon={<ArrowUpRight className="w-4 h-4" />}
                className="w-full justify-center py-2.5 sm:py-3 shadow-md"
              >
                GET IN TOUCH
              </PillButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
