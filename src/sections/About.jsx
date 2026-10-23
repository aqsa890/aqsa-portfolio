import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0a0a0a] text-[#f4f4f4] pt-14 sm:pt-20 pb-16 sm:pb-28 px-4 sm:px-10 md:px-20 overflow-hidden">
      {/* 5-Column Grid Lines in Dark Theme */}
      <div className="montreal-grid-lines montreal-grid-lines-dark" aria-hidden="true">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Animated Accent Line SVG */}
        <div className="mb-8 sm:mb-12 overflow-hidden">
          <svg
            className="w-full h-6 sm:h-8 text-[#efe41f]"
            viewBox="0 0 1200 40"
            fill="none"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0,20 Q300,35 600,10 T1200,25"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.8 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </svg>
        </div>

        {/* Engineer Tag */}
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-[#efe41f]"></span>
          <span className="text-[11px] sm:text-sm font-mono tracking-widest text-[#efe41f] uppercase">
            DevOps Engineer • DevSecOps • Cloud Infrastructure
          </span>
        </div>

        {/* Giant Manifesto Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="display-s text-[#f4f4f4] font-extrabold max-w-6xl mb-8 sm:mb-16 leading-[1.08] tracking-tight uppercase"
        >
          Architecting automated CI/CD pipelines, containerized microservices, and zero-vulnerability cloud platforms.
        </motion.h2>

        {/* Two Column Narrative / Professional Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 lg:gap-20 text-[#c7c7c7] font-body text-sm sm:text-base md:text-lg leading-relaxed border-t border-white/10 pt-8 sm:pt-12">
          <div>
            <p>
              Results-driven Engineer specialized in DevOps, DevSecOps, and Cloud Infrastructure. Hands-on expertise architecting automated CI/CD pipelines with GitHub Actions, containerizing microservices with Docker, and hardening multi-tier platforms to achieve 0 Critical/High vulnerabilities using Trivy and Docker Scout.
            </p>
          </div>
          <div>
            <p>
              Proficient in AWS cloud infrastructure, automating deployments via Bash and Python scripts, integrating shift-left security gates (SAST, DAST, SCA, Secret Scanning, Linting), and proactively monitoring system health with real-time observability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
