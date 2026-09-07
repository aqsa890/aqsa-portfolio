import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    }, 1200);
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
        const getScrollDistance = () => track.scrollWidth - window.innerWidth;

        const tween = gsap.to(track, {
          x: () => -getScrollDistance(),
          ease: 'none'
        });

        const st = ScrollTrigger.create({
          trigger: container,
          start: 'top top',
          end: () => `+=${getScrollDistance()}`,
          pin: true,
          animation: tween,
          scrub: 0.8,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setScrollProgress(self.progress);

            // Determine active panel based on progress
            const panels = ['home', 'about', 'work', 'skills', 'experience', 'contact'];
            const index = Math.min(
              panels.length - 1,
              Math.floor(self.progress * panels.length + 0.15)
            );
            setActiveSection(panels[index] || 'home');
          }
        });

        scrollTriggerRef.current = st;
      } else {
        // Mobile listener for touch scroll progress
        const handleMobileScroll = () => {
          if (!track) return;
          const maxScroll = track.scrollWidth - track.clientWidth;
          if (maxScroll > 0) {
            const progress = track.scrollLeft / maxScroll;
            setScrollProgress(progress);

            const panels = ['home', 'about', 'work', 'skills', 'experience', 'contact'];
            const panelWidth = track.clientWidth;
            const index = Math.min(
              panels.length - 1,
              Math.round(track.scrollLeft / panelWidth)
            );
            setActiveSection(panels[index] || 'home');
          }
        };

        track.addEventListener('scroll', handleMobileScroll, { passive: true });
        return () => track.removeEventListener('scroll', handleMobileScroll);
      }
    }, containerRef);

    // Trackpad horizontal wheel support on desktop
    const handleWheel = (e) => {
      if (window.innerWidth >= 768) {
        if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 4) {
          window.scrollBy({ top: e.deltaX * 0.8, behavior: 'auto' });
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
        inline: 'start',
        block: 'nearest'
      });
    }
  };

  const navigateToNextSection = (direction = 1) => {
    const panels = ['home', 'about', 'work', 'skills', 'experience', 'contact'];
    const currentIndex = panels.indexOf(activeSection);
    const nextIndex = Math.min(panels.length - 1, Math.max(0, currentIndex + direction));
    navigateToSection(panels[nextIndex]);
  };

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

        {/* Horizontal Pin Wrapper */}
        <div 
          ref={containerRef}
          className="relative w-full md:h-screen overflow-hidden"
          id="site-horizontal-story"
        >
          {/* Horizontal Track (translates along X on desktop, snap scroll on mobile) */}
          <div 
            ref={trackRef}
            className="flex flex-col md:flex-row md:flex-nowrap md:h-screen w-full md:w-max overflow-x-auto md:overflow-hidden snap-x snap-mandatory scroll-smooth no-scrollbar"
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
