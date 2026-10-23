import React from 'react';
import { ChevronRight } from 'lucide-react';
import storefrontImg from '../assets/STOREFRONT.jpeg';
import cloudNativeImg from '../assets/CLOUD NATIVE.jpeg';
import vibegramImg from '../assets/vibegram.jpeg';
import maternityHubImg from '../assets/MATERNITY HUB.jpeg';

const STEPS = [
  {
    num: '01',
    phase: 'Discovery',
    badge1: 'Audit',
    badge2: 'Architecture',
    title: 'Discovery & Threat Modeling',
    desc: 'Every successful infrastructure migration starts with understanding the workload. We evaluate security postures, bottleneck profiles, and resource utilization before writing a single line of Terraform or Docker code.',
    image: cloudNativeImg,
  },
  {
    num: '02',
    phase: 'Strategy',
    badge1: 'IaC Blueprint',
    badge2: 'Shift-Left',
    title: 'Strategy & Cloud Roadmap',
    desc: 'Insights become an automated blueprint. We define VPC topologies, choose minimal container runtimes, configure least-privilege RBAC, and map automated CI/CD pipeline triggers.',
    image: storefrontImg,
  },
  {
    num: '03',
    phase: 'Engineering',
    badge1: 'Automation',
    badge2: 'Pipelines',
    title: 'Automated CI/CD & Orchestration',
    desc: 'Deployments are transformed into zero-touch, self-healing systems. Multi-stage Docker optimization, SAST security gates, and Kubernetes deployments guarantee consistent builds across all environments.',
    image: vibegramImg,
  },
  {
    num: '04',
    phase: 'Results',
    badge1: 'Observability',
    badge2: 'Zero Drift',
    title: 'Observability & SLA Resilience',
    desc: 'Success goes far beyond pushing code to production. We configure real-time telemetry with Prometheus, Grafana alerting, and automated health checks to ensure 99.99% availability and zero transactional drift.',
    image: maternityHubImg,
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="relative w-full bg-[#0a0a0a] text-[#f4f4f4] py-16 sm:py-24 px-3.5 sm:px-10 overflow-hidden">
      {/* 5-Column Grid Lines */}
      <div className="montreal-grid-lines montreal-grid-lines-dark" aria-hidden="true">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-14 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#efe41f]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#efe41f]">
              Engineering Methodology
            </span>
          </div>
          <h2 className="display-s text-[#f4f4f4] font-extrabold uppercase tracking-tight">
            Behind Every Successful Project
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 lg:gap-10">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="group relative rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 bg-[#141414] border border-white/10 hover:border-[#efe41f]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Meta Breadcrumb Tags */}
                <div className="flex items-center gap-3 sm:gap-4 text-xs font-mono text-[#c7c7c7] mb-4 sm:mb-6 border-b border-white/10 pb-3 sm:pb-4">
                  <div className="flex items-center gap-1 text-[#efe41f]">
                    <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                    <span>{step.badge1}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#efe41f]">
                    <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                    <span>{step.badge2}</span>
                  </div>
                  <span className="ml-auto font-bold text-[#f4f4f4]">
                    ({step.num})
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="font-heading text-lg sm:text-2xl md:text-3xl font-extrabold text-[#f4f4f4] group-hover:text-[#efe41f] transition-colors mb-2.5 sm:mb-4 uppercase leading-snug">
                  {step.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#c7c7c7] leading-relaxed mb-4 sm:mb-6">
                  {step.desc}
                </p>
              </div>

              {/* Media Thumbnail */}
              <div className="relative aspect-[16/9] w-full rounded-lg sm:rounded-xl overflow-hidden border border-white/10 mt-2">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
