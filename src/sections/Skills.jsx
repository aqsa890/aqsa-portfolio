import React from 'react';
import { motion } from 'framer-motion';
import { Shield, GitBranch, Box, Cloud, Activity, Terminal, Code, Cpu } from 'lucide-react';

const skillCategories = [
  {
    icon: Shield,
    name: 'DevSecOps & Security',
    code: 'SEC-01',
    skills: ['Trivy', 'Docker Scout', 'Gitleaks', 'SonarQube', 'Semgrep', 'Checkov', 'Actionlint', 'SAST / DAST', 'Secret Scanning', 'Shift-Left Gates']
  },
  {
    icon: GitBranch,
    name: 'CI/CD & Automation',
    code: 'CICD-02',
    skills: ['GitHub Actions', 'Jenkins', 'Self-Hosted EC2 Runners', 'Multi-Job Pipelines', 'SHA Dynamic Tagging', 'Docker Hub Registry', 'Argo CD (GitOps)']
  },
  {
    icon: Box,
    name: 'Containers & Orchestration',
    code: 'K8S-03',
    skills: ['Docker', 'Docker Compose', 'Kubernetes', 'Helm', 'Multi-Stage Builds', 'Image Optimization', 'Non-Root (USER 10001)', 'Alpine Runtimes']
  },
  {
    icon: Cloud,
    name: 'Cloud Infrastructure (AWS)',
    code: 'AWS-04',
    skills: ['EC2', 'VPC Architecture', 'S3', 'IAM Roles & Policies', 'ALB Load Balancers', 'Auto Scaling Groups', 'NAT Gateway', 'Security Groups / NACLs']
  },
  {
    icon: Activity,
    name: 'Observability & SRE',
    code: 'SRE-05',
    skills: ['Prometheus', 'Grafana Dashboards', 'Container Health Checks', 'Metrics Telemetry', 'Automated Alerting', 'Incident Root Cause Analysis']
  },
  {
    icon: Terminal,
    name: 'IaC & Linux Systems',
    code: 'IAC-06',
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
  return (
    <section 
      id="skills" 
      className="panel relative flex flex-col justify-between w-full md:w-[125vw] lg:w-[110vw] shrink-0 min-h-screen md:h-screen bg-[#262220] text-[#f3eee8] px-6 py-12 md:pl-28 md:pr-16 md:py-12 overflow-y-auto md:overflow-hidden select-none"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#5a524d] pb-4 mb-6">
        <div className="flex items-center gap-4">
          <span className="font-serif text-lg md:text-xl font-normal uppercase leading-none tracking-tight text-[#f3eee8]">
            Chapter III
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#8a8178] font-mono">
            — Technical Arsenal & Platform Tooling
          </span>
        </div>
        <span className="text-xs uppercase tracking-widest font-mono text-[#8a8178]">
          03. Capabilities
        </span>
      </div>

      {/* Main Grid */}
      <div className="my-auto">
        <div className="mb-6">
          <h3 className="font-serif text-2xl md:text-4xl font-normal leading-tight uppercase text-[#f3eee8]">
            Automating Deployment, Hardening Containers & Securing Cloud Topology.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
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
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-[#5a524d] text-center font-mono">
        {metrics.map((m, i) => (
          <div key={i} className="border-r last:border-r-0 border-[#3a3532] px-2">
            <span className="font-serif text-2xl md:text-3xl text-[#f3eee8] block">{m.value}</span>
            <span className="text-[10px] text-[#8a8178] uppercase tracking-wider block mt-0.5">{m.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
