import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

import storefrontImg from '../assets/STOREFRONT.jpeg';
import cloudNativeImg from '../assets/CLOUD NATIVE.jpeg';
import vibegramImg from '../assets/vibegram.jpeg';
import maternityHubImg from '../assets/MATERNITY HUB.jpeg';

const projects = [
  {
    num: '01',
    shortName: 'Atelier',
    name: 'Atelier Storefront',
    subtitle: 'Containerized E-Commerce & Automated CI/CD Platform',
    category: 'Full-Stack DevOps & Cloud Architecture',
    image: storefrontImg,
    link: 'https://github.com/aqsa890/atelier-storefront',
    linkType: 'GitHub Repository',
    summary: 'Architected multi-stage Docker builds reducing image sizes by 75% and automated multi-job GitHub Actions CI/CD pipelines with sub-millisecond query optimization.',
    devopsFocus: [
      'Multi-stage Docker containerization with Alpine minimal runtimes, reducing frontend image size by 75% and backend microservice to ~60MB.',
      'Automated multi-job GitHub Actions CI/CD pipelines with linting, test gates (Pytest + Vitest), and dynamic SHA-based Docker Hub image publishing.',
      'Native MongoDB schema validation ($jsonSchema) and compound indexing guaranteeing sub-millisecond query execution and zero transactional inventory drift.',
      'Production Nginx reverse proxy gateway with SSL termination, gzip compression, security headers, and upstream health probes.'
    ],
    tech: ['Docker Multi-Stage', 'GitHub Actions CI/CD', 'FastAPI', 'MongoDB Motor Async', 'Nginx Gateway', 'Pytest', 'Vitest'],
    metrics: { 'Image Reduction': '75%', 'Build Time': '< 2.5 min', 'Test Coverage': '92%' }
  },
  {
    num: '02',
    shortName: 'Cloud-Native',
    name: 'Cloud-Native MicroDevSecOps',
    subtitle: 'Microservices Hardening, Shift-Left Security & Vulnerability Remediation',
    category: 'DevSecOps & Platform Security',
    image: cloudNativeImg,
    link: 'https://github.com/aqsa890/SecretVault-devsecops',
    linkType: 'GitHub Repository',
    summary: 'Hardened a 5-tier microservices platform, eliminating 235+ vulnerabilities to achieve 0 Critical, 0 High, and 0 OS CVEs using Trivy & Docker Scout.',
    devopsFocus: [
      'Hardened distributed 5-tier microservices platform, eliminating 235+ vulnerabilities to achieve 0 Critical, 0 High, and 0 OS CVEs using Trivy and Docker Scout.',
      'Enforced least-privilege non-root execution (USER 10001) across all workloads with read-only root filesystems and capability drops to mitigate container escapes.',
      'Engineered automated shift-left security quality gates in CI/CD: automated SAST scanning (Semgrep), secret detection (Gitleaks), and software composition analysis.',
      'Configured Nginx API Gateway with strict HTTP security headers (HSTS, CSP, X-Frame-Options), CORS enforcement, and automated endpoint health checking.'
    ],
    tech: ['Trivy Scanner', 'Docker Scout', 'Gitleaks', 'PostgreSQL 16 Alpine', 'Least Privilege (USER 10001)', 'Nginx Security Gateway'],
    metrics: { 'Critical CVEs': '0', 'High CVEs': '0', 'Remediated': '235+' }
  },
  {
    num: '03',
    shortName: 'VibeGram',
    name: 'VibeGram Platform',
    subtitle: 'Scalable Media Streaming & Containerized Infrastructure',
    category: 'Distributed Systems & Cloud Infrastructure',
    image: vibegramImg,
    link: 'https://github.com/aqsa890',
    linkType: 'GitHub Repository',
    summary: 'Engineered high-throughput containerized media streaming infrastructure with Docker Compose bridge networks, Redis caching, and automated PR security gates.',
    devopsFocus: [
      'Containerized high-throughput media streaming infrastructure with asynchronous queueing and background image processing workers.',
      'Docker Compose orchestration with isolated internal bridge networks, persistent named volumes for media assets, and automated restart policies.',
      'Integrated static code analysis (SAST) and dependency vulnerability scanning directly into GitHub pull-request merge gates to prevent supply-chain drift.',
      'Configured Redis caching layer and automated container health probes for fault-tolerant media delivery and minimal latency.'
    ],
    tech: ['Docker Compose', 'Redis Caching Layer', 'Bridge Networks', 'Persistent Volumes', 'Health Probes', 'SAST/SCA Pipelines'],
    metrics: { 'Uptime': '99.9%', 'Isolation': 'Bridge Networks', 'Cache Hit': '88%' }
  },
  {
    num: '04',
    shortName: 'Maternity',
    name: 'Maternity Hub',
    subtitle: 'Emergency Healthcare Telemetry & Resilient Cloud Backend',
    category: 'Cloud Reliability & Real-Time Telemetry',
    image: maternityHubImg,
    link: 'https://devpost.com/software/maternity-hub',
    linkType: 'Devpost Showcase',
    summary: 'Built resilient real-time cloud telemetry backend streaming with Firebase Firestore for instant emergency triage and automated alert dispatching (<500ms latency).',
    devopsFocus: [
      'Resilient real-time cloud telemetry backend with Firebase Firestore streaming for instant emergency triage and automated alert dispatching.',
      'Automated health-check escalation policies and high-availability messaging queues for zero message loss during critical healthcare alerts.',
      'Secure cloud profile management with granular IAM permissions, cloud function triggers, and zero-downtime release cycles.',
      'Finalist showcase at international hackathon (Devpost) for societal impact and cloud platform architecture.'
    ],
    tech: ['Firebase Firestore', 'Real-Time Telemetry', 'Cloud Microservices', 'IAM Hardening', 'Event-Driven Architecture'],
    metrics: { 'Triage Latency': '< 500ms', 'Availability': 'High Resilience', 'Status': 'Finalist' }
  }
];

export default function Work() {
  const [activeProject, setActiveProject] = useState(0);
  const [showMobileDetails, setShowMobileDetails] = useState(false);

  const current = projects[activeProject];

  return (
    <section 
      id="work" 
      className="panel relative flex flex-col justify-between w-full md:w-[130vw] lg:w-[115vw] shrink-0 min-h-screen md:h-screen bg-[#edeae6] text-[#2e2b28] px-5 py-10 md:px-16 md:py-12 overflow-y-auto md:overflow-hidden select-none"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#b8b3ac] pb-3 mb-6 shrink-0">
        <div className="flex items-center gap-3">
          <span className="font-serif text-lg md:text-xl font-normal uppercase leading-none tracking-tight">
            Chapter II
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#8a8178] font-mono">
            — Selected DevOps & Cloud Works
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs font-mono uppercase text-[#8a8178]">
          <span>04 Featured Projects</span>
          <span>·</span>
          <span>Shift-Left & Cloud Native</span>
        </div>
      </div>

      {/* ─── MOBILE VIEW (Clean, Visual, Uncluttered Editorial Presentation) ─── */}
      <div className="flex lg:hidden flex-col flex-1 justify-between gap-5 my-auto">
        
        {/* Project Pill Selector */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          {projects.map((proj, idx) => {
            const isActive = activeProject === idx;
            return (
              <button
                key={proj.num}
                onClick={() => {
                  setActiveProject(idx);
                  setShowMobileDetails(false);
                }}
                className={`px-3.5 py-2 rounded-sm font-mono text-xs uppercase tracking-wider shrink-0 transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#262220] text-[#f3eee8] font-bold shadow-md'
                    : 'bg-[#faf9f6] text-[#5a524d] border border-[#d4cfc8] hover:bg-white'
                }`}
              >
                <span>{proj.num}.</span>
                <span>{proj.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Active Project Card on Mobile */}
        <div className="bg-[#faf9f6] border border-[#b8b3ac] rounded-sm p-4 shadow-sm flex flex-col gap-4">
          
          {/* Project Image Frame */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-[#5a524d]/20 bg-[#262220] group">
            <img 
              src={current.image} 
              alt={current.name} 
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#262220]/60 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute top-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono text-[#f3eee8]">
              <span className="bg-[#262220]/85 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
                FIG. {current.num}
              </span>
              <span className="bg-[#262220]/85 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
                {current.category.split('&')[0]}
              </span>
            </div>
          </div>

          {/* Project Name & Subtitle */}
          <div>
            <h3 className="font-serif text-xl font-medium text-[#262220] leading-tight">
              {current.name}
            </h3>
            <p className="text-xs text-[#5a524d] font-sans mt-1 leading-relaxed">
              {current.summary}
            </p>
          </div>

          {/* Key Metrics Pill Row */}
          <div className="grid grid-cols-3 gap-2 py-2 border-y border-[#d4cfc8] text-center font-mono">
            {Object.entries(current.metrics).map(([k, v]) => (
              <div key={k} className="px-1">
                <span className="block text-xs font-bold text-[#262220]">{v}</span>
                <span className="block text-[9px] uppercase tracking-wider text-[#8a8178] truncate">{k}</span>
              </div>
            ))}
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {current.tech.slice(0, 4).map((tag) => (
              <span 
                key={tag} 
                className="text-[10px] font-mono uppercase bg-[#edeae6] text-[#3a3532] px-2 py-0.5 rounded border border-[#d4cfc8]"
              >
                {tag}
              </span>
            ))}
            {current.tech.length > 4 && (
              <span className="text-[10px] font-mono text-[#8a8178] px-1 py-0.5">
                +{current.tech.length - 4} more
              </span>
            )}
          </div>

          {/* Expandable Technical Bullets Toggle */}
          {showMobileDetails && (
            <div className="pt-2 border-t border-[#d4cfc8] text-xs text-[#3a3532] space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8a8178] block mb-1">
                Full Architecture & Pipeline Details:
              </span>
              <ul className="list-disc pl-4 space-y-1">
                {current.devopsFocus.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Card Actions */}
          <div className="flex items-center justify-between pt-1 gap-2">
            <button
              onClick={() => setShowMobileDetails(!showMobileDetails)}
              className="text-[11px] font-mono uppercase tracking-wider text-[#5a524d] hover:text-[#262220] flex items-center gap-1 cursor-pointer py-1"
            >
              <span>{showMobileDetails ? 'Less Specs' : 'Detailed Specs'}</span>
              {showMobileDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            <a 
              href={current.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#262220] text-[#f3eee8] rounded-sm text-xs font-mono uppercase tracking-wider font-semibold shadow hover:bg-black transition-colors"
            >
              <span>Explore Repo</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

        </div>

      </div>

      {/* ─── DESKTOP VIEW (Classic 12-Column Editorial Magazine Spread) ─── */}
      <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch flex-1 min-h-0">
        
        {/* Left Column: Interactive Project Selector & DevOps Specs */}
        <div className="col-span-5 flex flex-col justify-between overflow-y-auto pr-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#8a8178] mb-4 font-mono">
              02. Project Index (Hover / Click to View)
            </p>

            {/* Project List */}
            <div className="space-y-3 mb-6">
              {projects.map((proj, idx) => {
                const isActive = activeProject === idx;
                return (
                  <button
                    key={proj.num}
                    onClick={() => setActiveProject(idx)}
                    onMouseEnter={() => setActiveProject(idx)}
                    className={`w-full text-left p-3.5 border transition-all duration-300 rounded-sm group relative flex items-center justify-between ${
                      isActive 
                        ? 'bg-[#262220] text-[#f3eee8] border-[#262220] shadow-md pl-5' 
                        : 'bg-[#faf9f6]/80 text-[#2e2b28] border-[#d4cfc8] hover:border-[#8a8178] hover:bg-white'
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className={`font-mono text-xs font-semibold ${isActive ? 'text-[#8a8178]' : 'text-[#8a8178]'}`}>
                        {proj.num}.
                      </span>
                      <div>
                        <h4 className="font-serif text-lg md:text-xl font-normal leading-tight">
                          {proj.name}
                        </h4>
                        <p className={`text-xs mt-0.5 ${isActive ? 'text-[#d4cfc8]' : 'text-[#8a8178]'}`}>
                          {proj.category}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1 group-hover:opacity-60'
                    }`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Project DevOps Specs Box */}
          <motion.div
            key={`specs-${activeProject}`}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="border border-[#b8b3ac] bg-[#faf9f6]/90 p-5 rounded-sm shadow-sm"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#8a8178]">
                DevOps Infrastructure & Security Focus
              </span>
              <a 
                href={current.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono uppercase font-semibold text-[#262220] hover:underline"
              >
                {current.linkType} ↗
              </a>
            </div>

            <ul className="space-y-1.5 text-xs text-[#3a3532] leading-relaxed mb-4 list-disc pl-4">
              {current.devopsFocus.slice(0, 3).map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>

            {/* Metrics Badge Row */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#d4cfc8]">
              {Object.entries(current.metrics).map(([key, val]) => (
                <div key={key} className="text-center">
                  <span className="block font-mono text-xs font-bold text-[#262220]">{val}</span>
                  <span className="block text-[9px] uppercase tracking-wider text-[#8a8178] font-mono">{key}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Stage with High-Res Image, Details & Tech Badges */}
        <div className="col-span-7 flex flex-col justify-between">
          <motion.div
            key={`visual-${activeProject}`}
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col h-full justify-between"
          >
            {/* Image Frame with Editorial Details */}
            <div className="relative group overflow-hidden border border-[#5a524d] bg-[#262220] rounded-sm shadow-xl aspect-video max-h-[50vh] flex items-center justify-center">
              <img 
                src={current.image} 
                alt={current.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#262220]/70 via-transparent to-transparent pointer-events-none" />
              
              {/* Image Overlay Header */}
              <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[#f3eee8] text-xs font-mono drop-shadow">
                <span className="bg-[#262220]/80 px-2 py-1 rounded backdrop-blur-sm border border-[#5a524d]">
                  FIG. {current.num}
                </span>
                <span className="bg-[#262220]/80 px-2 py-1 rounded backdrop-blur-sm border border-[#5a524d]">
                  {current.category}
                </span>
              </div>

              {/* Direct Link Hover Button */}
              <a
                href={current.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-[#f3eee8] text-[#262220] px-4 py-2 rounded font-sans text-xs font-medium uppercase tracking-wider flex items-center gap-2 shadow-lg hover:bg-white transition-all transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
              >
                <span>Explore Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Bottom Tags & Context */}
            <div className="mt-4 pt-3 border-t border-[#b8b3ac] flex items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {current.tech.map((tag) => (
                  <span 
                    key={tag}
                    className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 bg-[#faf9f6] text-[#3a3532] border border-[#b8b3ac] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="text-right shrink-0">
                <span className="text-xs font-mono text-[#8a8178]">
                  {activeProject + 1} of {projects.length}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Section Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-[#b8b3ac] text-[11px] font-mono text-[#8a8178] mt-3 shrink-0">
        <span>CI/CD Automation · Microservices Hardening</span>
        <span className="hidden md:inline">Scroll to Proceed →</span>
      </div>
    </section>
  );
}
