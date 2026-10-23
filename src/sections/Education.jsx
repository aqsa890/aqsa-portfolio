import React from 'react';
import { GraduationCap, Award, ShieldCheck } from 'lucide-react';

const HONORS = [
  {
    title: 'Pakistan Youth Leadership Initiative (PYLI 2025)',
    issuer: 'British Council, WaterAid & IDEA Pakistan',
    type: 'National Leadership Award',
    date: '2025',
    detail: 'Selected for intensive national leadership and social governance summit, developing sustainable youth innovation models and cross-functional team leadership.',
  },
  {
    title: 'AWS Cloud Architecture & DevSecOps Track',
    issuer: 'Cloud & Infrastructure Certification Practice',
    type: 'Technical Credential',
    date: '2025',
    detail: 'In-depth mastery in AWS VPC architecture, multi-tier security group segregation, least-privilege IAM policies, and automated infrastructure deployments.',
  },
  {
    title: 'Linux Systems Administration & Shell Automation',
    issuer: 'Linux Foundation & Open Source Engineering',
    type: 'Core Competency',
    date: '2024 – 2025',
    detail: 'Comprehensive expertise in systemd service management, LVM partitioning, SSH hardening, iptables/firewalld security, and POSIX Bash orchestration.',
  },
];

export default function Education() {
  return (
    <section id="education" className="relative w-full bg-[#0a0a0a] text-[#f4f4f4] py-16 sm:py-24 px-3.5 sm:px-10 overflow-hidden">
      {/* 5-Column Grid Lines */}
      <div className="montreal-grid-lines montreal-grid-lines-dark" aria-hidden="true">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#efe41f]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#efe41f]">
              Academic & Leadership
            </span>
          </div>
          <h2 className="display-m text-[#f4f4f4] font-extrabold tracking-tight">
            EDUCATION & HONORS
          </h2>
        </div>

        {/* Featured Degree Card */}
        <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 bg-gradient-to-br from-[#181818] via-[#121212] to-[#1a1924] border border-[#efe41f]/40 shadow-2xl mb-8 sm:mb-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#efe41f]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-white/10">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#efe41f] text-[#0a0a0a] flex items-center justify-center shrink-0 shadow-lg">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#efe41f]">
                  Degree Program (2022 – 2026)
                </span>
                <h3 className="font-heading text-lg sm:text-2xl md:text-3xl font-extrabold uppercase text-white mt-1 tracking-tight leading-tight">
                  Bachelor of Science in Software Engineering (BSSE)
                </h3>
                <p className="font-body text-xs sm:text-sm md:text-base text-[#c7c7c7] mt-1">
                  City University of Science and Information Technology (CUSIT), Peshawar, Pakistan
                </p>
              </div>
            </div>

            <div className="text-left md:text-right shrink-0 mt-2 sm:mt-0">
              <div className="inline-block px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl bg-white/5 border border-[#efe41f]/30">
                <div className="text-[9px] sm:text-[10px] font-mono text-[#c7c7c7] uppercase">Cumulative GPA</div>
                <div className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-[#efe41f]">
                  3.86 / 4.00
                </div>
                <div className="text-[9px] sm:text-[10px] font-mono text-[#efe41f] font-semibold uppercase tracking-wider">
                  (High Honors)
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 sm:pt-6">
            <div className="text-[11px] sm:text-xs font-mono uppercase text-[#c7c7c7] mb-2.5 sm:mb-3">
              Core Technical Focus & Academic Coursework
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {[
                'Software Architecture',
                'Database Design',
                'Operating Systems',
                'Computer Networks',
                'Cloud Computing',
              ].map((c) => (
                <span
                  key={c}
                  className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-mono bg-white/5 border border-white/10 text-white/90"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Honors & Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {HONORS.map((item) => (
            <div
              key={item.title}
              className="rounded-xl sm:rounded-2xl p-5 sm:p-7 bg-[#141414] border border-white/10 hover:border-[#efe41f]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center text-xs font-mono text-[#efe41f] mb-3 sm:mb-4">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 shrink-0" />
                    <span className="truncate">{item.type}</span>
                  </div>
                  <span className="text-white/60 shrink-0">({item.date})</span>
                </div>

                <h4 className="font-heading text-base sm:text-lg font-bold uppercase text-white group-hover:text-[#efe41f] transition-colors mb-2 leading-snug">
                  {item.title}
                </h4>

                <p className="font-mono text-[11px] sm:text-xs text-[#c7c7c7]/80 mb-3 sm:mb-4">
                  {item.issuer}
                </p>

                <p className="font-body text-xs text-[#c7c7c7] leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="pt-3.5 border-t border-white/5 mt-5 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-[#efe41f]">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>Verified Achievement</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
