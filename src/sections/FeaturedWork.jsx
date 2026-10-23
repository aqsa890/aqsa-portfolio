import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

import storefrontImg from '../assets/STOREFRONT.jpeg';
import cloudNativeImg from '../assets/CLOUD NATIVE.jpeg';
import vibegramImg from '../assets/vibegram.jpeg';
import maternityHubImg from '../assets/MATERNITY HUB.jpeg';

const PROJECTS = [
  {
    id: '01',
    name: 'Atelier Storefront',
    category: 'Full-Stack DevOps & Cloud Architecture',
    desc: 'Multi-stage Docker builds reducing image sizes by 75%, zero transactional drift with MongoDB async, and automated GitHub Actions CI/CD.',
    image: storefrontImg,
    link: 'https://github.com/aqsa890/atelier-storefront',
    metric: '75% Image Reduction',
    tech: ['Docker Multi-Stage', 'GitHub Actions', 'FastAPI', 'Nginx', 'MongoDB Motor'],
  },
  {
    id: '02',
    name: 'Cloud-Native MicroDevSecOps',
    category: 'DevSecOps & Platform Security Hardening',
    desc: 'Remediated 235+ CVEs to achieve 0 Critical and 0 High vulnerabilities across a 5-tier microservices platform using Trivy and Docker Scout.',
    image: cloudNativeImg,
    link: 'https://github.com/aqsa890/SecretVault-devsecops',
    metric: '0 Critical & High CVEs',
    tech: ['Trivy Scanner', 'Docker Scout', 'Gitleaks', 'Non-Root USER 10001', 'Nginx Gateway'],
  },
  {
    id: '03',
    name: 'VibeGram Platform',
    category: 'Distributed Systems & Media Infrastructure',
    desc: 'High-throughput containerized media streaming infrastructure with Docker Compose bridge networks, Redis caching, and automated PR security gates.',
    image: vibegramImg,
    link: 'https://github.com/aqsa890',
    metric: '< 45ms Latency Cache',
    tech: ['Docker Compose', 'Redis Cache', 'Microservices', 'Pytest Gates'],
  },
  {
    id: '04',
    name: 'Maternity Hub Cloud',
    category: 'Full-Stack Healthcare Cloud Platform',
    desc: 'Robust maternal health tele-consultation platform with end-to-end encryption, automated PostgreSQL backups, and isolated Docker network isolation.',
    image: maternityHubImg,
    link: 'https://github.com/aqsa890',
    metric: 'HIPAA-Ready Security',
    tech: ['PostgreSQL', 'Docker Isolation', 'Health Telemetry', 'SSL Termination'],
  },
];

export default function FeaturedWork() {
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="work" className="relative w-full bg-[#0a0a0a] text-[#f4f4f4] py-16 sm:py-24 px-3.5 sm:px-10 overflow-hidden">
      {/* 5-Column Grid Lines */}
      <div className="montreal-grid-lines montreal-grid-lines-dark" aria-hidden="true">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#efe41f]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#efe41f]">
              Portfolio Projects
            </span>
          </div>
          <h2 className="display-m text-[#f4f4f4] font-extrabold tracking-tight">
            Our Result and curiosity.
          </h2>
        </div>

        {/* Column Headers */}
        <div className="grid grid-cols-12 pb-3.5 border-b border-white/20 text-xs font-mono uppercase tracking-widest text-[#c7c7c7]">
          <div className="col-span-12 sm:col-span-6 md:col-span-7">Project Title & Repository</div>
          <div className="hidden sm:block sm:col-span-6 md:col-span-5 text-right">Engineering Domain</div>
        </div>

        {/* Project Rows */}
        <div className="divide-y divide-white/10">
          {PROJECTS.map((project) => {
            return (
              <div
                key={project.id}
                onMouseEnter={() => {
                  setHoveredProject(project);
                  setActiveProject(project);
                }}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative py-5 sm:py-8 transition-colors duration-300 hover:bg-white/[0.02]"
              >
                <div className="grid grid-cols-12 items-center gap-3 sm:gap-4">
                  {/* Left Column: Number and Project Name */}
                  <div className="col-span-12 sm:col-span-6 md:col-span-7 flex items-center gap-3 sm:gap-5">
                    <span className="font-mono text-xs sm:text-sm text-[#efe41f] font-semibold shrink-0">
                      ({project.id})
                    </span>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="font-heading text-lg sm:text-2xl md:text-3xl font-extrabold text-[#f4f4f4] group-hover:text-[#efe41f] transition-colors duration-300 flex items-center gap-1.5 sm:gap-2"
                    >
                      <span>{project.name}</span>
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-70 sm:opacity-0 -translate-y-0.5 sm:-translate-y-1 sm:translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-[#efe41f] shrink-0" />
                    </a>
                  </div>

                  {/* Right Column: Category & Preview */}
                  <div className="col-span-12 sm:col-span-6 md:col-span-5 flex items-center justify-between sm:justify-end gap-3 sm:gap-4 mt-1 sm:mt-0">
                    <span className="font-body text-xs sm:text-sm text-[#c7c7c7] group-hover:text-white transition-colors truncate">
                      {project.category}
                    </span>

                    {/* Preview Thumbnail on Row (Montreal featured image preview) */}
                    <div className="relative w-14 h-10 sm:w-20 sm:h-14 rounded-md overflow-hidden border border-white/20 shadow-md shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:border-[#efe41f]">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Expanded Details on Mobile and Desktop */}
                <div className="mt-2.5 sm:mt-3 pl-0 sm:pl-8 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-[#c7c7c7]/80">
                  <span className="px-2 py-0.5 rounded bg-[#efe41f]/10 text-[#efe41f] border border-[#efe41f]/20 font-semibold text-[10px] sm:text-xs">
                    {project.metric}
                  </span>
                  {project.tech.map((t) => (
                    <span key={t} className="opacity-60 text-[10px] sm:text-xs">
                      • {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Vector Line Decoration */}
        <div className="mt-16 overflow-hidden">
          <svg
            className="w-full h-8 text-[#efe41f]/40"
            viewBox="0 0 1200 40"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0,25 Q300,5 600,25 T1200,15"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
