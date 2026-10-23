import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import PillButton from '../components/PillButton';

const NAV_ITEMS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CAPABILITIES', href: '#services' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'PROJECTS', href: '#work' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'METHODOLOGY', href: '#methodology' },
  { label: 'FAQ', href: '#faq' },
];

const SOCIAL_ITEMS = [
  { label: 'GITHUB', href: 'https://github.com/aqsa890' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/aqsa-~-3149782a2' },
  { label: 'EMAIL', href: 'mailto:aksawadood@gmail.com' },
];

export default function Footer({ onOpenContact }) {
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative w-full text-[#f4f4f4] pt-16 sm:pt-24 pb-8 sm:pb-12 px-3.5 sm:px-10 overflow-hidden select-none"
      style={{
        background: 'linear-gradient(180deg, #181920 0%, #0e0f13 50%, #08080a 100%)',
      }}
    >
      {/* 5-Column Montreal Grid Lines in Dark Theme */}
      <div className="montreal-grid-lines montreal-grid-lines-dark" aria-hidden="true">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col justify-between min-h-[500px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 sm:pb-16 border-b border-white/10">
          {/* Left Column: Mission & Direct Email */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-5 sm:gap-6">
            <p className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold uppercase leading-snug tracking-tight text-white max-w-md">
              Engineering automated CI/CD pipelines, containerized architectures, and zero-vulnerability cloud systems.
            </p>

            <div className="max-w-full overflow-hidden">
              <PillButton
                href="mailto:aksawadood@gmail.com"
                variant="yellow"
                icon={<ArrowUpRight className="w-4 h-4 shrink-0" />}
                className="shadow-md text-xs sm:text-sm py-2.5 sm:py-3 px-4 sm:px-6 max-w-full"
              >
                <span className="truncate">AKSAWADOOD@GMAIL.COM</span>
              </PillButton>
            </div>
          </div>

          {/* Right Columns: Navigation & Social */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6 sm:gap-8">
            {/* Navigation Column */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#efe41f] mb-3 sm:mb-4">
                Navigation
              </h4>
              <div className="flex flex-col gap-1.5 sm:gap-2 items-start">
                {NAV_ITEMS.map((item) => (
                  <PillButton
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    variant="dark"
                    className="text-xs"
                  >
                    {item.label}
                  </PillButton>
                ))}
              </div>
            </div>

            {/* Social Column */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#efe41f] mb-3 sm:mb-4">
                Connect
              </h4>
              <div className="flex flex-col gap-1.5 sm:gap-2 items-start">
                {SOCIAL_ITEMS.map((item) => (
                  <PillButton
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    variant="dark"
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                    className="text-xs"
                  >
                    {item.label}
                  </PillButton>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Middle Bar: Copyright & CTA Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-5 sm:py-6 gap-3 sm:gap-4 text-[11px] sm:text-xs font-mono text-white/60 text-center sm:text-left">
          <div>
            © 2026 AQSA. DevOps Engineer • DevSecOps • Cloud Infrastructure.
          </div>

          <PillButton
            onClick={onOpenContact}
            variant="yellow"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            GET IN TOUCH
          </PillButton>
        </div>

        {/* Inspiring Engineering Quote */}
        <div className="w-full pt-8 sm:pt-14 pb-4 sm:pb-8 border-t border-white/10 text-center">
          <p className="font-heading text-lg sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white max-w-4xl mx-auto leading-snug">
            “Simplicity is prerequisite for reliability. Automate everything, harden every perimeter, and build systems that fail gracefully.”
          </p>
          <div className="mt-3 sm:mt-4 font-mono text-[11px] sm:text-xs text-[#efe41f] uppercase tracking-widest font-semibold">
            — AQSA • Cloud & DevOps Philosophy
          </div>
        </div>
      </div>
    </footer>
  );
}
