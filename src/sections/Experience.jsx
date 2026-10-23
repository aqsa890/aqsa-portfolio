import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ArrowUpRight } from 'lucide-react';

const EXPERIENCES = [
  {
    num: '01',
    role: 'ORIC Research & Project Intern',
    company: 'Office of Research, Innovation & Commercialization (ORIC) — CUSIT',
    period: 'Nov 2025 – Jan 2026',
    location: 'Peshawar, Pakistan',
    summary: 'Administered university cloud research programs, technical milestone deliverables, and technology transfer governance under faculty supervision.',
    bullets: [
      'Assisted in administering university cloud research and innovation initiatives under faculty supervision, preparing technical documentation and milestone deliverables.',
      'Coordinated university-industry commercialization efforts, technology transfer documentation, and academic event governance.',
    ],
    skills: ['Cloud Research', 'Technical Documentation', 'Project Milestone Delivery', 'Commercialization'],
  },
  {
    num: '02',
    role: 'Mobile Application Developer Intern',
    company: 'Developers Hub Corporation',
    period: 'Jun 2025 – Jul 2025',
    location: 'Peshawar, Pakistan',
    summary: 'Engineered cross-platform mobile interfaces connected to cloud backends, handling real-time data streaming and offline persistence.',
    bullets: [
      'Engineered cross-platform mobile interfaces connected to cloud backends, handling real-time data streaming and offline persistence.',
      'Collaborated in Agile development cycles, debugging runtime client bottlenecks and optimizing UI rendering performance.',
    ],
    skills: ['Cloud API Integration', 'Offline Persistence', 'UI Optimization', 'Agile Sprints'],
  },
  {
    num: '03',
    role: 'Full Stack Developer Intern',
    company: 'Codveda Technologies',
    period: 'May 2025 – Jun 2025',
    location: 'Peshawar, Pakistan',
    summary: 'Constructed dynamic user interfaces and backend REST API microservices with role-based access control (RBAC).',
    bullets: [
      'Constructed dynamic user interfaces and backend REST API microservices with role-based access control (RBAC).',
      'Participated in continuous integration pipelines, database migration scripts, and code review standards.',
    ],
    skills: ['REST Microservices', 'RBAC Security', 'Database Migrations', 'CI Code Reviews'],
  },
  {
    num: '04',
    role: 'Web Developer Intern',
    company: 'DevSpire Solutions',
    period: 'Feb 2025 – May 2025',
    location: 'Peshawar, Pakistan',
    summary: 'Developed server-rendered dynamic web features connected to structured relational databases with automated Git CI workflows.',
    bullets: [
      'Developed server-rendered dynamic web features connected to structured relational databases.',
      'Maintained version control discipline through Git branch protection, pull requests, and automated linting.',
    ],
    skills: ['Git Branch Protection', 'Relational DBs', 'Automated Linting', 'Web Services'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-[#0a0a0a] text-[#f4f4f4] py-16 sm:py-24 px-3.5 sm:px-10 overflow-hidden">
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
              Work History
            </span>
          </div>
          <h2 className="display-m text-[#f4f4f4] font-extrabold tracking-tight">
            EXPERIENCE
          </h2>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.num}
              className="rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 bg-[#141414] border border-white/10 hover:border-[#efe41f]/60 transition-all duration-300 shadow-2xl flex flex-col justify-between group"
            >
              <div>
                {/* Top Meta Bar */}
                <div className="flex justify-between items-center pb-3 mb-4 sm:pb-4 sm:mb-6 border-b border-white/10 text-xs font-mono text-[#c7c7c7]">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#efe41f] shrink-0" />
                    <span>{exp.period}</span>
                  </div>
                  <span className="text-[#efe41f] font-bold text-sm">
                    ({exp.num})
                  </span>
                </div>

                {/* Role & Company */}
                <h3 className="font-heading text-lg sm:text-2xl md:text-3xl font-extrabold uppercase text-white group-hover:text-[#efe41f] transition-colors mb-2 tracking-tight leading-snug">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#c7c7c7] mb-4 sm:mb-6">
                  <span className="font-bold text-white/90">{exp.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-[#c7c7c7]/80">
                    <MapPin className="w-3 h-3 text-[#efe41f] shrink-0" />
                    {exp.location}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="text-xs sm:text-sm font-body text-[#c7c7c7] leading-relaxed flex items-start gap-2">
                      <span className="text-[#efe41f] font-bold font-mono mt-0.5">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Footer */}
              <div className="pt-3.5 border-t border-white/10 flex flex-wrap gap-1.5 sm:gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono bg-white/5 border border-white/10 text-[#c7c7c7] group-hover:border-[#efe41f]/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
