import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, GitBranch, Box, Cloud, Activity, Terminal, ChevronLeft, ChevronRight, Layers } from 'lucide-react';

const skillCategories = [
  {
    icon: Shield,
    name: 'DevSecOps & Security',
    shortName: 'Security',
    code: 'SEC-01',
    description: 'Shift-left security gates, automated vulnerability scanning, container hardening, and secret detection.',
    mobileDesc: 'Shift-left automated vulnerability scanning and container hardening.',
    skills: ['Trivy', 'Docker Scout', 'Gitleaks', 'SonarQube', 'Semgrep', 'Checkov', 'Actionlint', 'SAST / DAST', 'Secret Scanning', 'Shift-Left Gates']
  },
  {
    icon: GitBranch,
    name: 'CI/CD & Automation',
    shortName: 'CI/CD',
    code: 'CICD-02',
    description: 'Zero-touch deployment pipelines, dynamic SHA tagging, and automated regression testing.',
    mobileDesc: 'Automated CI/CD with dynamic SHA tagging & registry push gates.',
    skills: ['GitHub Actions', 'Jenkins', 'Self-Hosted EC2 Runners', 'Multi-Job Pipelines', 'SHA Dynamic Tagging', 'Docker Hub Registry', 'Argo CD (GitOps)']
  },
  {
    icon: Box,
    name: 'Containers & Orchestration',
    shortName: 'Containers',
    code: 'K8S-03',
    description: 'Multi-stage Docker optimization, minimal Alpine runtimes, and non-root execution policies.',
    mobileDesc: 'Multi-stage Docker builds and least-privilege non-root policies.',
    skills: ['Docker', 'Docker Compose', 'Kubernetes', 'Helm', 'Multi-Stage Builds', 'Image Optimization', 'Non-Root (USER 10001)', 'Alpine Runtimes']
  },
  {
    icon: Cloud,
    name: 'Cloud Infrastructure (AWS)',
    shortName: 'AWS Cloud',
    code: 'AWS-04',
    description: 'Hardened VPC network topology, scalable compute clusters, and granular IAM policies.',
    mobileDesc: 'Hardened VPC network topology, ALB balancing, and IAM policies.',
    skills: ['EC2', 'VPC Architecture', 'S3', 'IAM Roles & Policies', 'ALB Load Balancers', 'Auto Scaling Groups', 'NAT Gateway', 'Security Groups / NACLs']
  },
  {
    icon: Activity,
    name: 'Observability & SRE',
    shortName: 'Observability',
    code: 'SRE-05',
    description: 'Real-time telemetry, automated uptime monitoring, container health probes, and alert escalation.',
    mobileDesc: 'Container health telemetry, metrics tracking, and automated alerting.',
    skills: ['Prometheus', 'Grafana Dashboards', 'Container Health Checks', 'Metrics Telemetry', 'Automated Alerting', 'Incident Root Cause Analysis']
  },
  {
    icon: Terminal,
    name: 'IaC & Linux Systems',
    shortName: 'IaC & Linux',
    code: 'IAC-06',
    description: 'Declarative infrastructure as code, automated configuration management, and server administration.',
    mobileDesc: 'Declarative Terraform IaC, Ansible automation, and Linux admin.',
    skills: ['Terraform (Declarative IaC)', 'Ansible (Config Mgmt)', 'Linux Administration (LVM, SSH)', 'Bash Automation', 'Python Automation', 'Nginx Reverse Proxy']
  }
];

const metrics = [
  { label: 'Critical CVEs Across Builds', value: '0' },
  { label: 'Container Image Size Slashed', value: '75%' },
  { label: 'Automated CI/CD Quality Gates', value: '100%' },
  { label: 'Sub-Second Telemetry SLA', value: '99.9%' }
];

export default function Skills() {
  const [activeDomain, setActiveDomain] = useState(0);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const currentCategory = skillCategories[activeDomain];
  const CurrentIcon = currentCategory.icon;

  return (
    <section 
      id="skills" 
      className="panel relative flex flex-col justify-between w-full md:w-[125vw] lg:w-[110vw] shrink-0 min-h-screen md:h-screen bg-[#262220] text-[#f3eee8] px-5 pt-20 pb-8 md:pl-28 md:pr-16 md:py-12 overflow-y-auto md:overflow-hidden select-none"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#5a524d] pb-3 mb-3 md:mb-6">
        <div className="flex items-center gap-3 md:gap-4">
          <span className="font-serif text-base md:text-xl font-normal uppercase leading-none tracking-tight text-[#f3eee8]">
            Chapter III
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#8a8178] font-mono">
            — Technical Arsenal
          </span>
        </div>
        <span className="text-[10px] md:text-xs uppercase tracking-widest font-mono text-[#8a8178]">
          03. Capabilities
        </span>
      </div>

      {/* Main Content Area */}
      <div className="my-auto">
        <div className="mb-3 md:mb-6">
          {/* Mobile Headline: Low Text */}
          <h3 className="block md:hidden font-serif text-base font-normal leading-snug uppercase text-[#f3eee8]">
            Hardened Containers & Cloud Infrastructure.
          </h3>
          {/* Desktop Headline */}
          <h3 className="hidden md:block font-serif text-xl md:text-4xl font-normal leading-snug uppercase text-[#f3eee8] max-w-4xl">
            Automating Deployment, Hardening Containers & Securing Cloud Topology.
          </h3>
        </div>

        {/* ─── MOBILE VIEW: Interactive Domain Tabs & Low-Density Card ─── */}
        <div className="block md:hidden mb-3">
          {/* Domain Pills Scroll */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-2 mb-2.5">
            {skillCategories.map((cat, idx) => {
              const isActive = activeDomain === idx;
              return (
                <button
                  key={cat.code}
                  onClick={() => {
                    setActiveDomain(idx);
                    setShowAllMobile(false);
                  }}
                  className={`px-2.5 py-1 rounded-sm font-mono text-[10px] uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
                    isActive && !showAllMobile
                      ? 'bg-[#f3eee8] text-[#262220] font-bold shadow-md'
                      : 'bg-[#1e1b19] text-[#a39b92] border border-[#453e3a]'
                  }`}
                >
                  {cat.shortName}
                </button>
              );
            })}
          </div>

          {!showAllMobile ? (
            /* Featured Single Category Card on Mobile: Low Density */
            <div className="border border-[#5a524d] p-3.5 rounded-sm bg-[#1e1b19] shadow-lg flex flex-col gap-2.5">
              <div className="flex items-center justify-between border-b border-[#38332f] pb-2">
                <div className="flex items-center gap-2">
                  <CurrentIcon className="w-3.5 h-3.5 text-[#d4cfc8]" />
                  <h4 className="font-serif text-sm text-[#f3eee8] font-medium">
                    {currentCategory.name}
                  </h4>
                </div>
                <span className="font-mono text-[9px] text-[#8a8178] tracking-widest bg-[#2a2623] px-1.5 py-0.5 rounded border border-[#38332f]">
                  {currentCategory.code}
                </span>
              </div>

              <p className="text-[11px] text-[#a39b92] leading-relaxed font-light">
                {currentCategory.mobileDesc || currentCategory.description}
              </p>

              <div className="pt-1">
                <div className="flex flex-wrap gap-1">
                  {currentCategory.skills.slice(0, 5).map((skill) => (
                    <span 
                      key={skill}
                      className="text-[10px] font-mono text-[#f3eee8] bg-[#2a2623] px-2 py-0.5 rounded-sm border border-[#453e3a]"
                    >
                      {skill}
                    </span>
                  ))}
                  {currentCategory.skills.length > 5 && (
                    <span className="text-[10px] font-mono text-[#8a8178] px-1.5 py-0.5">
                      +{currentCategory.skills.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Navigation Bar between domains */}
              <div className="flex items-center justify-between pt-2 border-t border-[#38332f] text-[11px] font-mono">
                <button
                  onClick={() => setActiveDomain((prev) => (prev > 0 ? prev - 1 : skillCategories.length - 1))}
                  className="flex items-center gap-1 text-[#8a8178] hover:text-[#f3eee8] py-0.5 cursor-pointer"
                >
                  <ChevronLeft size={13} />
                  <span>Prev</span>
                </button>

                <button
                  onClick={() => setShowAllMobile(true)}
                  className="text-[9px] text-[#8a8178] hover:text-[#f3eee8] uppercase tracking-wider underline cursor-pointer"
                >
                  View All (6)
                </button>

                <button
                  onClick={() => setActiveDomain((prev) => (prev < skillCategories.length - 1 ? prev + 1 : 0))}
                  className="flex items-center gap-1 text-[#8a8178] hover:text-[#f3eee8] py-0.5 cursor-pointer"
                >
                  <span>Next</span>
                  <ChevronRight size={13} />
                </button>
              </div>
            </div>
          ) : (
            /* Compact All-Domains View when user clicks "View All" */
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#8a8178] uppercase">Showing All 6 Disciplines</span>
                <button
                  onClick={() => setShowAllMobile(false)}
                  className="text-[11px] font-mono text-[#f3eee8] underline cursor-pointer"
                >
                  Show Tabbed View
                </button>
              </div>
              {skillCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div key={cat.code} className="border border-[#453e3a] p-3 rounded-sm bg-[#1e1b19]">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon className="w-3.5 h-3.5 text-[#8a8178]" />
                        <h4 className="font-serif text-sm text-[#f3eee8]">{cat.name}</h4>
                      </div>
                      <span className="font-mono text-[9px] text-[#8a8178]">{cat.code}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {cat.skills.map((s) => (
                        <span key={s} className="text-[10px] font-mono text-[#d4cfc8] bg-[#2a2623] px-2 py-0.5 rounded border border-[#38332f]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* ─── DESKTOP VIEW: Full 6-Card High-Density Editorial Grid ─── */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.name}
                className="border border-[#453e3a] p-5 rounded-sm bg-[#1e1b19]/60 hover:bg-[#1e1b19] hover:border-[#8a8178] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 border-b border-[#38332f] pb-2">
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-[#8a8178] group-hover:text-[#f3eee8] transition-colors" />
                      <h4 className="font-serif text-base text-[#f3eee8] font-normal">
                        {category.name}
                      </h4>
                    </div>
                    <span className="font-mono text-[10px] text-[#8a8178] tracking-widest">
                      {category.code}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="text-[11px] font-mono text-[#d4cfc8] bg-[#2a2623] px-2 py-1 rounded-sm border border-[#38332f]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 pt-3 md:pt-4 border-t border-[#5a524d] text-center font-mono">
        {metrics.map((m, i) => (
          <div key={i} className="border-r last:border-r-0 border-[#3a3532] px-1 md:px-2">
            <span className="font-serif text-xl md:text-3xl text-[#f3eee8] block">{m.value}</span>
            <span className="text-[9px] md:text-[10px] text-[#8a8178] uppercase tracking-wider block mt-0.5">{m.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
