import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';

import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import ContactModal from './components/ContactModal';

import Hero from './sections/Hero';
import About from './sections/About';
import YearBanner from './sections/YearBanner';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import FeaturedWork from './sections/FeaturedWork';
import Education from './sections/Education';
import Methodology from './sections/Methodology';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Initialize Lenis smooth scroll for Montreal-quality fluid scroll mechanics
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-[#f4f4f4] overflow-x-hidden">
      {/* Montreal Authentic Preloader */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Floating Navigation Header & Fullscreen Drawer */}
      <Navigation
        onOpenContact={() => setIsContactOpen(true)}
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
      />

      {/* Master Page Sections Flow */}
      <main>
        {/* 01. Hero Section */}
        <Hero
          onOpenContact={() => setIsContactOpen(true)}
          onOpenMenu={() => setIsMenuOpen(true)}
        />

        {/* Transition Grid Overlay */}
        <div className="transition-grid-wrap" aria-hidden="true">
          <div className="grid-cell"></div>
          <div className="grid-cell"></div>
          <div className="grid-cell"></div>
          <div className="grid-cell"></div>
          <div className="grid-cell"></div>
        </div>

        {/* 02. About Section */}
        <About />

        {/* 03. Year Banner & Portrait */}
        <YearBanner />

        {/* 04. Capabilities (Sticky Stacking Cards - Core Domains) */}
        <Services />

        {/* 05. Technical Skills Arsenal (7-Category Matrix) */}
        <Skills />

        {/* 06. Experience (Professional Journey & Internships) */}
        <Experience />

        {/* 07. Featured Work ("Our Result and curiosity.") */}
        <FeaturedWork />

        {/* 08. Education & Honors (BSSE, CGPA: 3.86 / 4.00 High Honors) */}
        <Education />

        {/* 09. Methodology ("Behind Every Successful Project") */}
        <Methodology />

        {/* 10. FAQ */}
        <FAQ />

        {/* 11. CTA ("Let’s Work Together") */}
        <CTA onOpenContact={() => setIsContactOpen(true)} />

        {/* 12. Footer with Giant Watermark Typography */}
        <Footer onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Interactive Project Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
