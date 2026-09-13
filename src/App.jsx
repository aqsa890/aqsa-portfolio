import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Header from './components/Header';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero';
import About from './sections/About';
import Work from './sections/Work';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PANELS = ['home', 'about', 'work', 'skills', 'experience', 'contact'];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  // Initial loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Horizontal Scroll Orchestration via GSAP ScrollTrigger
  useEffect(() => {
    if (isLoading) return;

    let ctx = gsap.context(() => {
      const track = trackRef.current;
      const container = containerRef.current;
      if (!track || !container) return;

      const isDesktop = window.innerWidth >= 768;

      if (isDesktop) {
        // Calibrate horizontal scroll distance so desktop/laptop scrolling is fast, fluid, and natural
        // Eliminates the "turtle-slow" issue on laptops and standard mice
        const getScrollDistance = () => {
          const vw = window.innerWidth;
          return Math.max(1500, Math.min(2400, Math.round(vw * 1.35)));
        };

        const tween = gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth),
          ease: 'none'
        });

        const st = ScrollTrigger.create({
          trigger: container,
          start: 'top top',
          end: () => `+=${getScrollDistance()}`,
          pin: true,
          animation: tween,
          scrub: 0.15, // Immediate, responsive, zero-lag scrub
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setScrollProgress(self.progress);

            // Determine active panel based on progress
            const index = Math.min(
              PANELS.length - 1,
              Math.floor(self.progress * PANELS.length + 0.15)
            );
            setActiveSection(PANELS[index] || 'home');
          }
        });

        scrollTriggerRef.current = st;
      } else {
        // Mobile listener for touch scroll progress
        const handleMobileScroll = () => {
          if (!track) return;
          const maxScroll = track.scrollHeight - track.clientHeight;
          if (maxScroll > 0) {
            const progress = track.scrollTop / maxScroll;
            setScrollProgress(progress);

            const scrollPos = track.scrollTop + 100;
            for (let i = PANELS.length - 1; i >= 0; i--) {
              const el = document.getElementById(PANELS[i]);
              if (el && el.offsetTop <= scrollPos) {
                setActiveSection(PANELS[i]);
                break;
              }
            }
          }
        };

        track.addEventListener('scroll', handleMobileScroll, { passive: true });
        return () => track.removeEventListener('scroll', handleMobileScroll);
      }
    }, containerRef);

    // Trackpad horizontal wheel support & mouse-wheel normalization for Windows laptops
    const handleWheel = (e) => {
      if (window.innerWidth >= 768) {
        // Two-finger horizontal trackpad swipe
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 2) {
          e.preventDefault();
          window.scrollBy({ top: e.deltaX * 1.8, behavior: 'auto' });
        } else if (e.deltaMode === 1) {
          // Windows / external mouse wheel with line ticks — boost scroll travel
          window.scrollBy({ top: e.deltaY * 20, behavior: 'auto' });
        }
      }
    };

    // Keyboard Arrow navigation
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        navigateToNextSection(1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        navigateToNextSection(-1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      ctx.revert();
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLoading]);

  // Navigate directly to a specific chapter/section
  const navigateToSection = (id) => {
    const isDesktop = window.innerWidth >= 768;
    const targetEl = document.getElementById(id);

    if (!targetEl) return;

    if (isDesktop && scrollTriggerRef.current && trackRef.current) {
      const st = scrollTriggerRef.current;
      const track = trackRef.current;
      const maxScrollX = track.scrollWidth - window.innerWidth;
      const panelLeft = targetEl.offsetLeft;
      
      const scrollRatio = Math.min(1, Math.max(0, panelLeft / maxScrollX));
      const targetScrollY = st.start + scrollRatio * (st.end - st.start);

      window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth'
      });
    } else {
      targetEl.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navigateToNextSection = (direction = 1) => {
    const currentIndex = PANELS.indexOf(activeSection);
    const nextIndex = Math.min(PANELS.length - 1, Math.max(0, currentIndex + direction));
    navigateToSection(PANELS[nextIndex]);
  };

  const currentIdx = PANELS.indexOf(activeSection);

  return (
    <>
      {/* Editorial Opening Loading Transition */}
      <div
        className={`fixed inset-0 z-[200] flex items-center justify-center bg-[#262220] text-[#f3eee8] select-none transition-all duration-700 ${
          isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-normal uppercase tracking-[-0.04em]">
            Aqsa
          </h1>
          <div className="mx-auto mt-4 h-px w-20 bg-[#8a8178]" />
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#8a8178]">
            DevOps Portfolio — 2026
          </p>
        </div>
      </div>

      {/* Main Website Frame */}
      <div className="relative w-full min-h-screen bg-[#262220] overflow-x-hidden">
        
        {/* Real-time Progress Bar */}
        <ScrollProgress progress={scrollProgress} />

        {/* Global Navigation Header & Rail */}
        <Header 
          onNavigate={navigateToSection} 
          activeSection={activeSection} 
        />

        {/* Desktop Quick Chapter Navigation Arrows */}
        <div 
          className="hidden md:flex fixed bottom-6 right-8 z-40 items-center gap-2 bg-[#1e1b19]/85 backdrop-blur-md border border-[#5a524d]/40 rounded-full px-3 py-1.5 text-xs font-mono text-[#f3eee8] shadow-lg select-none"
          aria-label="Desktop Chapter Navigation"
        >
          <button
            onClick={() => navigateToNextSection(-1)}
            disabled={currentIdx === 0}
            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#38332f] disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
            title="Previous Chapter (←)"
          >
            <ChevronLeft size={16} />
          </button>

          <span className="text-[11px] tracking-widest text-[#8a8178] px-1 font-mono uppercase">
            {currentIdx + 1} / {PANELS.length}
          </span>

          <button
            onClick={() => navigateToNextSection(1)}
            disabled={currentIdx === PANELS.length - 1}
            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#38332f] disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
            title="Next Chapter (→)"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Horizontal Pin Wrapper */}
        <div 
          ref={containerRef}
          className="relative w-full md:h-screen overflow-hidden"
          id="site-horizontal-story"
        >
          {/* Track: horizontal scroll on desktop, vertical flow on mobile */}
          <div 
            ref={trackRef}
            className="flex flex-col md:flex-row md:flex-nowrap md:h-screen w-full md:w-max overflow-y-auto md:overflow-hidden no-scrollbar"
            style={{ willChange: 'transform' }}
          >
            <Hero onScrollNext={() => navigateToSection('about')} />
            <About onNavigateWork={() => navigateToSection('work')} />
            <Work />
            <Skills />
            <Experience />
            <Contact />
          </div>
        </div>

      </div>
    </>
  );
}
