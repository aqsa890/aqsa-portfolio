import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import storefrontImg from '../assets/STOREFRONT.jpeg';
import cloudNativeImg from '../assets/CLOUD NATIVE.jpeg';
import vibegramImg from '../assets/vibegram.jpeg';
import maternityHubImg from '../assets/MATERNITY HUB.jpeg';

const projects = [
  {
    num: '01',
    name: 'Atelier Storefront',
    subtitle: 'Containerized E-Commerce & Automated CI/CD Platform',
    category: 'Full-Stack DevOps & Cloud Architecture',
    image: storefrontImg,
    link: 'https://github.com/aqsa890/atelier-storefront',
    linkType: 'GitHub Repository',
    devopsFocus: [
      'Architected multi-stage Docker containerization with Alpine minimal runtimes, reducing frontend image size by 75% and backend microservice to ~60MB.',
      'Constructed automated multi-job GitHub Actions CI/CD pipelines with automated linting, test gates (Pytest + Vitest), and dynamic SHA-based Docker Hub image publishing.',
      'Implemented native MongoDB schema validation ($jsonSchema) and compound indexing to guarantee sub-millisecond query execution and zero transactional inventory drift.',
      'Configured production Nginx reverse proxy gateway with SSL termination, gzip compression, security headers, and automated upstream health probes.'
    ],
    tech: ['Docker Multi-Stage', 'GitHub Actions CI/CD', 'FastAPI', 'MongoDB Motor Async', 'Nginx Gateway', 'Pytest', 'Vitest'],
    metrics: { 'Image Reduction': '75%', 'Build Time': '< 2.5 min', 'Test Coverage': '92%' }
  },
  {
    num: '02',
    name: 'Cloud-Native MicroDevSecOps',
    subtitle: 'Microservices Hardening, Shift-Left Security & Vulnerability Remediation',
    category: 'DevSecOps & Platform Security',
    image: cloudNativeImg,
    link: 'https://github.com/aqsa890/SecretVault-devsecops',
    linkType: 'GitHub Repository',
    devopsFocus: [
      'Systematically hardened a distributed 5-tier microservices platform (Frontend, Auth, Notes, Tasks, Database), eliminating 235+ OS & package vulnerabilities to achieve 0 Critical, 0 High, and 0 OS CVEs using Trivy and Docker Scout.',
      'Enforced least-privilege non-root execution (USER 10001) across all workloads with read-only root filesystems and capability drops to mitigate container escape vectors.',
      'Engineered automated shift-left security quality gates in CI/CD: automated SAST scanning (Semgrep), secret detection (Gitleaks), and software composition analysis (SCA).',
      'Configured Nginx API Gateway with strict HTTP security headers (HSTS, CSP, X-Frame-Options), CORS enforcement, and automated endpoint health checking.'
    ],
    tech: ['Trivy Scanner', 'Docker Scout', 'Gitleaks', 'PostgreSQL 16 Alpine', 'Least Privilege (USER 10001)', 'Nginx Security Gateway'],
    metrics: { 'Critical CVEs': '0', 'High CVEs': '0', 'Vulnerabilities Remediated': '235+' }
  },
  {
    num: '03',
    name: 'VibeGram Platform',
    subtitle: 'Scalable Media Streaming & Containerized Infrastructure',
    category: 'Distributed Systems & Cloud Infrastructure',
    image: vibegramImg,
    link: 'https://github.com/aqsa890',
    linkType: 'GitHub Repository',
    devopsFocus: [
      'Engineered containerized high-throughput media streaming infrastructure with asynchronous queueing and background image processing workers.',
      'Configured Docker Compose orchestration with isolated internal bridge networks, persistent named volumes for media assets, and automated restart policies.',
      'Integrated static code analysis (SAST) and dependency vulnerability scanning directly into GitHub pull-request merge gates to prevent supply-chain drift.',
      'Configured Redis caching layer and automated container health probes for fault-tolerant media delivery and minimal latency.'
    ],
    tech: ['Docker Compose', 'Redis Caching Layer', 'Bridge Networks', 'Persistent Volumes', 'Health Probes', 'SAST/SCA Pipelines'],
    metrics: { 'Uptime': '99.9%', 'Isolation': 'Bridge Networks', 'Cache Hit Ratio': '88%' }
  },
  {
    num: '04',
    name: 'Maternity Hub',
    subtitle: 'Emergency Healthcare Telemetry & Resilient Cloud Backend',
    category: 'Cloud Reliability & Real-Time Telemetry',
    image: maternityHubImg,
    link: 'https://devpost.com/software/maternity-hub',
    linkType: 'Devpost Showcase',
    devopsFocus: [
      'Engineered resilient real-time cloud telemetry backend with Firebase Firestore streaming for instant emergency triage and automated alert dispatching.',
      'Configured automated health-check escalation policies and high-availability messaging queues for zero message loss during critical healthcare alerts.',
      'Implemented secure cloud profile management with granular IAM permissions, cloud function triggers, and zero-downtime release cycles.',
      'Finalist showcase at international hackathon (Devpost) for societal impact and cloud platform architecture.'
    ],
    tech: ['Firebase Firestore', 'Real-Time Telemetry', 'Cloud Microservices', 'IAM Hardening', 'Event-Driven Architecture'],
    metrics: { 'Triage Latency': '< 500ms', 'Availability': 'High Resilience', 'Status': 'Devpost Finalist' }
  }
];

export default function Work() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section 
      id="work" 
      className="panel relative flex flex-col justify-between w-full md:w-[130vw] lg:w-[115vw] shrink-0 min-h-screen md:h-screen bg-[#edeae6] text-[#2e2b28] px-6 py-12 md:px-16 md:py-12 overflow-y-auto md:overflow-hidden select-none"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#b8b3ac] pb-4 mb-6">
        <div className="flex items-center gap-4">
          <span className="font-serif text-lg md:text-xl font-normal uppercase leading-none tracking-tight">
            Chapter II
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#8a8178] font-mono">
            — Selected DevOps & Cloud Works
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs font-mono uppercase text-[#8a8178]">
          <span>Projects: 04</span>
          <span>·</span>
          <span>Shift-Left & Cloud Native</span>
        </div>
      </div>

      {/* Main Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch flex-1 min-h-0">
        
        {/* Left Column: Interactive Project Selector & DevOps Specs */}
        <div className="lg:col-span-5 flex flex-col justify-between overflow-y-auto pr-2">
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
                href={projects[activeProject].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono uppercase font-semibold text-[#262220] hover:underline"
              >
                {projects[activeProject].linkType} ↗
              </a>
            </div>

            <ul className="space-y-1.5 text-xs text-[#3a3532] leading-relaxed mb-4 list-disc pl-4">
              {projects[activeProject].devopsFocus.slice(0, 3).map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>

            {/* Metrics Badge Row */}
            <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#d4cfc8]">
              {Object.entries(projects[activeProject].metrics).map(([key, val]) => (
                <div key={key} className="text-center">
                  <span className="block font-mono text-xs font-bold text-[#262220]">{val}</span>
                  <span className="block text-[9px] uppercase tracking-wider text-[#8a8178] font-mono">{key}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual Stage with High-Res Image, Details & Tech Badges */}
        <div className="lg:col-span-7 flex flex-col justify-between">
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
                  src={projects[activeProject].image} 
                  alt={projects[activeProject].name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#262220]/70 via-transparent to-transparent pointer-events-none" />
                
                {/* Image Overlay Header */}
                <div className="absolute top-3 left-4 right-4 flex items-center justify-between text-[#f3eee8] text-xs font-mono drop-shadow">
                  <span className="bg-[#262220]/80 px-2 py-1 rounded backdrop-blur-sm border border-[#5a524d]">
                    FIG. {projects[activeProject].num}
                  </span>
                  <span className="bg-[#262220]/80 px-2 py-1 rounded backdrop-blur-sm border border-[#5a524d]">
                    {projects[activeProject].category}
                  </span>
                </div>

                {/* Direct Link Hover Button */}
                <a
                  href={projects[activeProject].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-[#f3eee8] text-[#262220] px-4 py-2 rounded font-sans text-xs font-medium uppercase tracking-wider flex items-center gap-2 shadow-lg hover:bg-white transition-all transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <span>Explore Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Bottom Tags & Context */}
              <div className="mt-4 pt-3 border-t border-[#b8b3ac] flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {projects[activeProject].tech.map((tag) => (
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
      <div className="flex items-center justify-between pt-4 border-t border-[#b8b3ac] text-xs font-mono text-[#8a8178] mt-4">
        <span>Continuous Integration · Container Hardening · Cloud Automation</span>
        <span>Scroll / Drag to Proceed →</span>
      </div>
    </section>
  );
}
