import React from 'react';
import { motion } from 'framer-motion';
import cloudNativeImg from '../assets/CLOUD NATIVE.jpeg';
import storefrontImg from '../assets/STOREFRONT.jpeg';
import vibegramImg from '../assets/vibegram.jpeg';
import maternityHubImg from '../assets/MATERNITY HUB.jpeg';

const SERVICES = [
  {
    num: '01',
    meta: 'AWS VPC, Multi-Region & Cost Optimization',
    title: 'CLOUD ARCHITECTURE & AWS',
    desc: 'Scalable, fault-tolerant cloud environments designed with modular VPCs, automated load balancing, and granular IAM least-privilege access.',
    bgColor: 'bg-[#efe41f]',
    textColor: 'text-[#0a0a0a]',
    borderColor: 'border-black/20',
    metaBorder: 'border-black/20',
    image: cloudNativeImg,
    alt: 'Cloud Architecture & AWS topology preview',
    tags: ['AWS EC2 & VPC', 'Auto-Scaling', 'IAM Roles', 'CloudFront CDN'],
  },
  {
    num: '02',
    meta: 'Zero-Touch GitOps, SAST & Container Security',
    title: 'DEVSECOPS & AUTOMATION',
    desc: 'Automated continuous integration pipelines with integrated vulnerability scanning, secret detection gates, and dynamic SHA-based container publishing.',
    bgColor: 'bg-[#141414]',
    textColor: 'text-[#f4f4f4]',
    borderColor: 'border-white/15',
    metaBorder: 'border-white/10',
    image: storefrontImg,
    alt: 'DevSecOps & CI/CD pipeline automation preview',
    tags: ['GitHub Actions', 'Trivy Scanning', 'Gitleaks', 'Zero Critical CVEs'],
  },
  {
    num: '03',
    meta: 'Multi-Stage Optimization & Helm Deployment',
    title: 'CONTAINERS & KUBERNETES',
    desc: 'Minimal Alpine runtimes slashing image sizes by up to 75%, non-root USER execution policies, and self-healing cluster orchestration.',
    bgColor: 'bg-[#181818]',
    textColor: 'text-[#f4f4f4]',
    borderColor: 'border-white/10',
    metaBorder: 'border-white/10',
    image: vibegramImg,
    alt: 'Containers & Kubernetes orchestration preview',
    tags: ['Docker Multi-Stage', 'Kubernetes K8s', 'Helm Charts', 'Alpine Runtimes'],
  },
  {
    num: '04',
    meta: 'Telemetry, Probing & Incident SRE',
    title: 'OBSERVABILITY & SRE',
    desc: 'End-to-end metrics scraping, visual Grafana dashboards, automated latency alerts, and rapid root-cause incident remediation.',
    bgColor: 'bg-[#f4f4f4]',
    textColor: 'text-[#0a0a0a]',
    borderColor: 'border-black/20',
    metaBorder: 'border-black/20',
    image: maternityHubImg,
    alt: 'Observability & SRE telemetry preview',
    tags: ['Prometheus', 'Grafana Dashboards', 'Health Probes', '99.99% Uptime'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-[#0a0a0a] text-[#f4f4f4] py-16 sm:py-24 px-3.5 sm:px-10 overflow-hidden">
      {/* 5-Column Grid Lines */}
      <div className="montreal-grid-lines montreal-grid-lines-dark" aria-hidden="true">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Giant Section Header */}
        <div className="mb-10 sm:mb-14 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#efe41f]"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#efe41f]">
              Core Capabilities
            </span>
          </div>
          <h2 className="display-m text-[#f4f4f4] font-extrabold tracking-tight">
            CAPABILITIES
          </h2>
        </div>

        {/* Stacking Sticky Cards Container */}
        <div className="relative flex flex-col gap-8 sm:gap-16 pb-12 sm:pb-20">
          {SERVICES.map((service, index) => (
            <div
              key={service.num}
              className={`sticky rounded-2xl p-4 sm:p-8 md:p-12 shadow-2xl border ${service.bgColor} ${service.textColor} ${service.borderColor}`}
              style={{
                top: `${72 + index * 16}px`,
                zIndex: index + 1,
              }}
            >
              {/* Top Meta Bar */}
              <div
                className={`flex justify-between items-center pb-3 mb-4 sm:pb-4 sm:mb-6 border-b text-[11px] sm:text-xs md:text-sm font-mono uppercase tracking-wider ${service.metaBorder}`}
              >
                <span className="truncate pr-2">{service.meta}</span>
                <span className="font-bold text-sm sm:text-lg shrink-0">({service.num})</span>
              </div>

              {/* Card Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-center">
                {/* Left Text Column */}
                <div className="lg:col-span-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-xl sm:text-3xl md:text-5xl font-extrabold uppercase tracking-tight leading-[1.08] mb-2.5 sm:mb-4">
                      {service.title}
                    </h3>
                    <p className="font-body text-xs sm:text-sm md:text-base opacity-80 leading-relaxed mb-4 sm:mb-6">
                      {service.desc}
                    </p>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-mono font-medium border border-current/20 bg-current/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Image Showcase */}
                <div className="lg:col-span-6">
                  <div className="relative aspect-[16/9] max-h-48 sm:max-h-72 lg:max-h-none rounded-xl overflow-hidden shadow-lg border border-current/15 group">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
