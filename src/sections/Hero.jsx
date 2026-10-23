import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  Terminal as TerminalIcon,
  ShieldCheck,
  CheckCircle2,
  X,
  Play,
  Activity,
  Layers,
} from 'lucide-react';
import ScrollBadge from '../components/ScrollBadge';
import CursorImageTrail, { DEVOPS_TOOLS } from '../components/CursorImageTrail';

export default function Hero({ onOpenContact, onOpenMenu }) {
  const heroRef = useRef(null);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [scanStep, setScanStep] = useState(4);
  const [isScanning, setIsScanning] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleScrollToWork = (e) => {
    e.preventDefault();
    const el = document.querySelector('#work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const runSimulation = () => {
    setIsScanning(true);
    setScanStep(1);
    setTimeout(() => setScanStep(2), 600);
    setTimeout(() => setScanStep(3), 1200);
    setTimeout(() => {
      setScanStep(4);
      setIsScanning(false);
    }, 1800);
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden px-3.5 sm:px-10 md:px-16 pt-6 sm:pt-8 pb-8 sm:pb-10 select-none text-[#f4f4f4]"
      style={{
        background: 'radial-gradient(ellipse 90% 70% at 50% -10%, #1e2027 0%, #131418 55%, #0a0a0c 100%)',
      }}
    >
      {/* 5-Column Montreal Hairline Grid Overlay in Dark Theme */}
      <div className="montreal-grid-lines montreal-grid-lines-dark" aria-hidden="true">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Interactive Cursor Image Trail (ONLY Colorful Icons) */}
      <CursorImageTrail containerRef={heroRef} />

      {/* 01. Top Hero Header Wrap: Giant Brand Title & Sub-Info */}
      <div className="relative z-20 w-full flex flex-col pt-2">
        {/* Giant Montreal Brand Title in Zalando Sans Expanded with Electric Yellow */}
        <div className="w-full overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-extrabold text-[#efe41f] uppercase tracking-[-0.04em] leading-[0.88] text-left select-none text-[17vw] sm:text-[14vw] lg:text-[13vw] whitespace-nowrap drop-shadow-[0_4px_30px_rgba(239,228,31,0.2)]"
          >
            AQSA
          </motion.h1>
        </div>

        {/* Sub-Info Row directly below title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs sm:text-sm font-heading font-bold uppercase tracking-wider text-white/90 mt-2 border-t border-white/10 pt-2.5 gap-2"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#efe41f] animate-pulse shrink-0"></span>
            <span className="text-[11px] sm:text-xs md:text-sm">DEVOPS ENGINEER | DEVSECOPS | CLOUD ENGINEER</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-left sm:text-right font-mono text-xs">
            <span className="px-2.5 py-0.5 rounded-full bg-[#efe41f]/15 border border-[#efe41f]/35 text-[#efe41f] font-semibold text-[10px] sm:text-xs">
              CGPA: 3.86 (HIGH HONORS)
            </span>
            <span className="text-[#c7c7c7] text-[10px] sm:text-xs">PESHAWAR, PAKISTAN</span>
          </div>
        </motion.div>
      </div>

      {/* 02. Interactive Live Platform Health & DevSecOps HUD */}
      <div className="relative z-20 w-full max-w-6xl mx-auto my-3 sm:my-4">
        <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#15161c]/90 backdrop-blur-md border border-white/10 shadow-2xl">
          {/* Real-time Status Badges */}
          <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-mono">
            <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>SYSTEMS ONLINE</span>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>0 CRITICAL CVES</span>
            </div>

            <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span>75% IMAGE SIZE SLASHED</span>
            </div>

            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/90">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>AWS 99.99% SLA</span>
            </div>
          </div>

          {/* Interactive Live Pipeline Gate Toggle Button */}
          <button
            type="button"
            onClick={() => {
              setIsTerminalOpen((prev) => !prev);
              if (!isTerminalOpen) runSimulation();
            }}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#efe41f] text-[#0a0a0a] hover:bg-yellow-300 font-mono text-[11px] sm:text-xs font-bold transition-all shadow-md active:scale-95 w-full sm:w-auto justify-center"
          >
            <TerminalIcon className="w-3.5 h-3.5 text-[#0a0a0a] shrink-0" />
            <span>{isTerminalOpen ? 'CLOSE CONSOLE' : 'SIMULATE TRIVY SCAN'}</span>
          </button>
        </div>

        {/* Expandable Live Interactive Terminal Drawer */}
        <AnimatePresence>
          {isTerminalOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="mt-3 overflow-hidden rounded-xl sm:rounded-2xl bg-[#0d0e11] text-[#f4f4f4] border border-[#efe41f]/40 shadow-2xl p-3.5 sm:p-5 font-mono text-[10px] sm:text-xs"
            >
              <div className="flex justify-between items-center pb-2.5 mb-2.5 border-b border-white/10 text-[10px] sm:text-[11px] text-[#c7c7c7] gap-2">
                <div className="flex items-center gap-2 truncate">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block shrink-0"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block shrink-0"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block shrink-0"></span>
                  <span className="ml-1 text-[#efe41f] font-bold truncate">
                    trivy-security-gate.sh (aqsa-pipeline)
                  </span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={runSimulation}
                    disabled={isScanning}
                    className="flex items-center gap-1 text-[#efe41f] hover:underline"
                  >
                    <Play className="w-3 h-3" />
                    <span>{isScanning ? 'SCANNING...' : 'RERUN'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsTerminalOpen(false)}
                    className="text-white/60 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Terminal Logs Output */}
              <div className="space-y-1.5 py-1 leading-relaxed overflow-x-auto">
                <div className="text-white/70">
                  <span className="text-emerald-400">$</span> trivy image --severity HIGH,CRITICAL aqsa-cloud/microservices:latest
                </div>

                {scanStep >= 1 && (
                  <div className="text-sky-300">
                    [1/4] Initializing Trivy DB & Shift-Left vulnerability policy... OK
                  </div>
                )}
                {scanStep >= 2 && (
                  <div className="text-indigo-300">
                    [2/4] Scanning container layers & dependencies (Alpine 3.19 runtime)... OK
                  </div>
                )}
                {scanStep >= 3 && (
                  <div className="text-amber-300">
                    [3/4] Inspecting non-root USER 10001 policies & Gitleaks secret entropy... OK
                  </div>
                )}
                {scanStep >= 4 && (
                  <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-emerald-400 font-bold">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#efe41f] shrink-0" />
                      <span>QUALITY GATE PASSED: 0 Vulnerabilities (CRITICAL: 0, HIGH: 0)</span>
                    </span>
                    <span className="text-[#efe41f] text-[9px] sm:text-[10px] uppercase tracking-wider">
                      Ready for AWS Production Deploy
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 03. Infinite Scrolling Colorful Tools Marquee (Attractive, Colorful Icons Only) */}
      <div className="relative z-20 w-full overflow-hidden my-3 sm:my-4 py-2 border-y border-white/10 bg-[#14151a]/60 backdrop-blur-sm">
        <div className="flex items-center">
          {/* Infinite Marquee Track (Double for seamless loop) */}
          <div className="animate-marquee flex items-center gap-4 sm:gap-8 pr-4 sm:pr-8">
            {[...DEVOPS_TOOLS, ...DEVOPS_TOOLS].map((tool, idx) => (
              <div
                key={`${tool.name}-${idx}`}
                onMouseEnter={() => setActiveTooltip(tool.name)}
                onMouseLeave={() => setActiveTooltip(null)}
                className="relative group shrink-0 flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-125"
              >
                {/* Colorful Glowing Tool Disc on Greyish Black Background */}
                <div
                  className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center p-2 sm:p-2.5 shadow-xl border-2 backdrop-blur-md transition-all duration-300 group-hover:rotate-6"
                  style={{
                    background: `radial-gradient(circle at 35% 35%, ${tool.bg}fa 0%, #0d0d0d 100%)`,
                    borderColor: tool.color,
                    boxShadow: `0 8px 25px rgba(0,0,0,0.5), 0 0 18px ${tool.color}75`,
                    color: tool.color,
                  }}
                >
                  <div className="w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center">
                    {tool.svg}
                  </div>
                </div>

                {/* Floating Tooltip with Name */}
                {activeTooltip === tool.name && (
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#0a0a0a] text-white text-[10px] font-mono whitespace-nowrap shadow-xl border border-white/20 pointer-events-none z-30 animate-in fade-in zoom-in-95">
                    <span style={{ color: tool.color }} className="font-bold mr-1">
                      ●
                    </span>
                    {tool.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 04. Action Buttons Row (Responsive Montreal Layout: 3-spread on desktop, clean stacked/grid on mobile) */}
      <div className="relative z-20 w-full my-auto py-3 sm:py-4">
        {/* Desktop View (Montreal exact 3-point alignment) */}
        <div className="hidden sm:flex relative items-center justify-between w-full">
          {/* Left: Contact Me */}
          <div>
            <button
              type="button"
              onClick={onOpenContact}
              className="btn-pill group bg-[#efe41f] text-[#0a0a0a] border border-[#efe41f] hover:bg-yellow-300 px-5 py-2.5 rounded-full shadow-md transition-all flex items-center gap-3"
            >
              <div className="flex items-center gap-1 font-body text-xs sm:text-sm font-bold uppercase tracking-wide">
                <span className="opacity-60">(</span>
                <div className="text-slide-container">
                  <span>CONTACT ME</span>
                  <span aria-hidden="true">CONTACT ME</span>
                </div>
                <span className="opacity-60">)</span>
              </div>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Center: Absolute Centered Menu Button */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <button
              type="button"
              onClick={onOpenMenu}
              className="btn-pill group bg-[#18191f] text-white border border-white/15 hover:border-[#efe41f]/60 px-6 py-2.5 rounded-full shadow-md transition-all"
            >
              <div className="flex items-center gap-1 font-body text-xs sm:text-sm font-bold uppercase tracking-wide">
                <span className="opacity-60">(</span>
                <div className="text-slide-container">
                  <span>MENU</span>
                  <span aria-hidden="true">MENU</span>
                </div>
                <span className="opacity-60">)</span>
              </div>
            </button>
          </div>

          {/* Right: View Projects */}
          <div>
            <button
              type="button"
              onClick={handleScrollToWork}
              className="btn-pill group bg-[#18191f] text-white border border-white/15 hover:border-[#efe41f]/60 px-5 py-2.5 rounded-full shadow-md transition-all flex items-center gap-3"
            >
              <div className="flex items-center gap-1 font-body text-xs sm:text-sm font-bold uppercase tracking-wide">
                <span className="opacity-60">(</span>
                <div className="text-slide-container">
                  <span>VIEW PROJECTS</span>
                  <span aria-hidden="true">VIEW PROJECTS</span>
                </div>
                <span className="opacity-60">)</span>
              </div>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Mobile View: No overlapping, comfortable touch targets */}
        <div className="flex sm:hidden flex-col items-center gap-2.5 w-full">
          <div className="flex items-center justify-center gap-2.5 w-full">
            <button
              type="button"
              onClick={onOpenContact}
              className="btn-pill flex-1 justify-center bg-[#efe41f] text-[#0a0a0a] border border-[#efe41f] px-3.5 py-2.5 rounded-full shadow-md text-xs font-bold uppercase tracking-wide flex items-center gap-1.5"
            >
              <span>CONTACT ME</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleScrollToWork}
              className="btn-pill flex-1 justify-center bg-[#18191f] text-white border border-white/15 px-3.5 py-2.5 rounded-full shadow-md text-xs font-bold uppercase tracking-wide flex items-center gap-1.5"
            >
              <span>PROJECTS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <button
            type="button"
            onClick={onOpenMenu}
            className="btn-pill bg-[#18191f] text-white border border-white/15 px-8 py-2 rounded-full shadow-md text-xs font-bold uppercase tracking-wide"
          >
            <span>( MENU )</span>
          </button>
        </div>
      </div>

      {/* 05. Bottom Centered Scroll Indicator */}
      <div className="relative z-20 w-full flex justify-center items-center pb-2">
        <ScrollBadge targetId="#about" />
      </div>
    </section>
  );
}
