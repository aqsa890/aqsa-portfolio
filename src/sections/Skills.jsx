import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldAlert,
  GitBranch,
  Box,
  Cloud,
  Activity,
  Terminal,
  GitPullRequest,
  CheckCircle2,
} from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    num: '01',
    id: 'devsecops',
    name: 'DevSecOps & Security',
    icon: ShieldAlert,
    tagline: 'Shift-Left Vulnerability Remediation & Container Hardening',
    color: '#efe41f',
    skills: [
      'SAST & DAST Gates',
      'SCA Scanning',
      'Secret Scanning',
      'Container Security',
      'Linting & Actionlint',
      'IaC Security (Checkov)',
      'Trivy Scanner',
      'Gitleaks',
      'Docker Scout',
      'SonarQube Quality Gates',
      'Semgrep SAST',
      'Shift-Left Pipeline Gates',
    ],
  },
  {
    num: '02',
    id: 'cicd',
    name: 'CI/CD & Automation',
    icon: GitBranch,
    tagline: 'Zero-Touch Multi-Job Pipelines & Dynamic Tagging',
    color: '#f4f4f4',
    skills: [
      'GitHub Actions',
      'Jenkins Automation',
      'Self-Hosted EC2 Runners',
      'Multi-Job Pipelines',
      'Dynamic SHA-Based Tagging',
      'Docker Hub Registry',
      'Argo CD (GitOps)',
      'Automated Testing Workflows',
      'Automated Linting',
    ],
  },
  {
    num: '03',
    id: 'containers',
    name: 'Containers & Orchestration',
    icon: Box,
    tagline: 'Multi-Stage Optimization & Self-Healing Clusters',
    color: '#efe41f',
    skills: [
      'Docker',
      'Docker Compose',
      'Kubernetes (K8s)',
      'Helm Charts',
      'Multi-Stage Builds',
      'Image Optimization',
      'Container Hardening',
      'Non-Root Workloads (USER 10001)',
      'Alpine & Distroless Runtimes',
    ],
  },
  {
    num: '04',
    id: 'aws',
    name: 'Cloud & Infrastructure (AWS)',
    icon: Cloud,
    tagline: 'High-Availability Multi-Tier VPCs & Resilient Architectures',
    color: '#00e5ff',
    skills: [
      'AWS EC2 Compute',
      'VPC Architecture & Subnets',
      'S3 Object Storage',
      'IAM Least-Privilege Roles',
      'Application Load Balancer (ALB)',
      'Auto Scaling Groups (ASG)',
      'NAT Gateway & Route Tables',
      'Security Groups & NACLs',
      'AWS Systems Manager (SSM)',
      'Launch Templates & User Data',
      'AWS CLI Automation',
    ],
  },
  {
    num: '05',
    id: 'sre',
    name: 'Observability & SRE',
    icon: Activity,
    tagline: 'Real-Time Telemetry, Incident Remediation & SLA Probing',
    color: '#efe41f',
    skills: [
      'Prometheus Telemetry',
      'Grafana Visual Dashboards',
      'Container Health Checks',
      'Metrics Collection',
      'Uptime & System Monitoring',
      'Automated Alerting',
      'Service Reliability (SRE)',
      'Incident Root-Cause Troubleshooting',
    ],
  },
  {
    num: '06',
    id: 'iac',
    name: 'IaC & Systems Automation',
    icon: Terminal,
    tagline: 'Declarative Infrastructure, Server Hardening & Shell Scripting',
    color: '#f4f4f4',
    skills: [
      'Terraform (Declarative IaC)',
      'Ansible (Config Management)',
      'Linux Administration',
      'LVM Partitioning & SSH',
      'Process & Storage Mgmt',
      'Bash / Shell Scripting',
      'Python Automation Scripts',
      'Nginx Reverse Proxy',
      'Automated Cron Jobs',
    ],
  },
  {
    num: '07',
    id: 'workflow',
    name: 'Version Control & Workflow',
    icon: GitPullRequest,
    tagline: 'Branch Protection, Rigorous Reviews & Agile Delivery',
    color: '#efe41f',
    skills: [
      'Git Version Control',
      'GitHub Branch Protection',
      'Pull Request Code Reviews',
      'Pre-Commit Security Hooks',
      'Jira Task Tracking',
      'Agile / Scrum Delivery',
      'Enterprise SDLC',
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(SKILL_CATEGORIES[0]);

  return (
    <section id="skills" className="relative w-full bg-[#0a0a0a] text-[#f4f4f4] py-16 sm:py-24 px-3.5 sm:px-10 overflow-hidden select-none">
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
              Technical Arsenal
            </span>
          </div>
          <h2 className="display-m text-[#f4f4f4] font-extrabold tracking-tight">
            TECHNICAL SKILLS
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#c7c7c7] max-w-2xl mt-2">
            Comprehensive production capabilities across DevSecOps, multi-cloud infrastructure, container orchestration, and continuous automation.
          </p>
        </div>

        {/* 7-Category Tab Selector Bar (Horizontal Touch Scroll on Mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 sm:mb-8 -mx-3.5 px-3.5 sm:mx-0 sm:px-0">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeCategory.id === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-1.5 sm:gap-2 shrink-0 ${
                  isActive
                    ? 'bg-[#efe41f] text-[#0a0a0a] font-bold shadow-md'
                    : 'bg-[#141414] text-[#c7c7c7] border border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                <span>({cat.num})</span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Domain Detailed Spotlight Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 bg-gradient-to-br from-[#161616] via-[#121212] to-[#1a1924] border border-[#efe41f]/40 shadow-2xl mb-8 sm:mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 sm:pb-6 mb-5 sm:mb-8 border-b border-white/10 gap-3 sm:gap-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#efe41f] text-[#0a0a0a] flex items-center justify-center shrink-0 shadow-lg">
                  <activeCategory.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] sm:text-xs text-[#efe41f]">
                      CATEGORY ({activeCategory.num})
                    </span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-3xl md:text-4xl font-extrabold uppercase text-white tracking-tight leading-tight">
                    {activeCategory.name}
                  </h3>
                </div>
              </div>

              <div className="font-mono text-xs text-[#c7c7c7] md:text-right max-w-sm">
                {activeCategory.tagline}
              </div>
            </div>

            {/* Skill Pills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
              {activeCategory.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2.5 sm:gap-3 px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#efe41f]/50 hover:bg-white/[0.06] transition-all group"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#efe41f] shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-xs sm:text-sm text-white/90 group-hover:text-white truncate">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All 7 Categories Editorial Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 cursor-pointer border flex flex-col justify-between ${
                activeCategory.id === cat.id
                  ? 'bg-[#181818] border-[#efe41f]/70 shadow-lg'
                  : 'bg-[#141414] border-white/10 hover:border-white/25 hover:bg-[#161616]'
              }`}
            >
              <div>
                <div className="flex justify-between items-center pb-2.5 mb-3 border-b border-white/10 text-xs font-mono">
                  <span className="text-[#efe41f] font-bold">({cat.num})</span>
                  <cat.icon className="w-4 h-4 text-[#c7c7c7]" />
                </div>
                <h4 className="font-heading text-base sm:text-lg font-bold uppercase text-white mb-1.5 leading-snug">
                  {cat.name}
                </h4>
                <p className="font-body text-xs text-[#c7c7c7] leading-relaxed mb-3.5">
                  {cat.tagline}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {cat.skills.slice(0, 4).map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono bg-white/5 border border-white/10 text-white/70"
                  >
                    {s}
                  </span>
                ))}
                {cat.skills.length > 4 && (
                  <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono bg-[#efe41f]/10 text-[#efe41f] border border-[#efe41f]/20">
                    +{cat.skills.length - 4} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
