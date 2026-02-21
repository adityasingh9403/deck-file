import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Global Layout Components
import SlideIndicators from './components/SlideIndicators';

// All Slides
import HeroSlide from './slides/HeroSlide';
import AboutSlide from './slides/AboutSlide';
import USPSlide from './slides/USPSlide';
import WhatWeDoSlide from './slides/WhatWeDoSlide';
import OurServicesSlide from './slides/OurServicesSlide';
import TechExpertiseSlide from './slides/TechExpertiseSlide';
import HowWeDoItSlide from './slides/HowWeDoItSlide';
import ProcessSlide from './slides/ProcessSlide';
import GallerySlide from './slides/GallerySlide';
import PartnersSlide from './slides/PartnersSlide';
import TestimonialsSlide from './slides/TestimonialsSlide';
import ContactSlide from './slides/ContactSlide';

export default function App() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Sequence of your slides
  const SLIDES_LIST = [
    HeroSlide, AboutSlide, WhatWeDoSlide, OurServicesSlide, 
    TechExpertiseSlide, HowWeDoItSlide, ProcessSlide, GallerySlide, 
    TestimonialsSlide, USPSlide, PartnersSlide, ContactSlide
  ];

  const total = SLIDES_LIST.length;

  // 1080px Width Logic
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1080);
    };
    handleResize(); // Initial Check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Keyboard Navigation (Only for Desktop/Slide Mode)
  useEffect(() => {
    if (isMobile) return;

    const handleKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setIndex((p) => (p + 1) % total);
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setIndex((p) => (p - 1 + total) % total);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, isMobile, total]);

  const CurrentSlide = SLIDES_LIST[index];

  // --- RENDER LOGIC ---

  // 1. MOBILE VIEW (< 1080px): Website Vertical Scroll Mode
  if (isMobile) {
    return (
      <div className="w-full bg-white selection:bg-[#FF5722] selection:text-white overflow-y-auto">
        <div className="flex flex-col">
          {SLIDES_LIST.map((Slide, i) => (
            <section key={i} className="w-full border-b border-slate-50 min-h-screen">
              <Slide />
            </section>
          ))}
        </div>
      </div>
    );
  }

  // 2. DESKTOP VIEW (> 1080px): Presentation Slide Mode
  return (
    <div className="h-screen w-full bg-white overflow-hidden selection:bg-[#FF5722] selection:text-white">
      
      {/* Indicators for Slide Mode */}
      <SlideIndicators 
        total={total} 
        current={index} 
        onChange={setIndex} 
      />

      <main className="h-full w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full w-full"
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Hint */}
      <div className="absolute bottom-6 left-12 z-[100] opacity-30 pointer-events-none">
        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-[#0F172A]">
          Use keyboard arrows to navigate
        </p>
      </div>
    </div>
  );
}