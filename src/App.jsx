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

  const SLIDES_LIST = [
    HeroSlide, AboutSlide, WhatWeDoSlide, OurServicesSlide,
    TechExpertiseSlide, HowWeDoItSlide, USPSlide, PartnersSlide,
    ContactSlide, ProcessSlide, GallerySlide, TestimonialsSlide
  ];

  const total = SLIDES_LIST.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1080);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleKey = (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") setIndex((p) => (p + 1) % total);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") setIndex((p) => (p - 1 + total) % total);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, isMobile, total]);

  // --- UNIVERSAL LOGO COMPONENT ---
  const BrandLogo = () => (
    <div className="fixed top-4 left-4 md:top-10 md:left-12 z-[999] pointer-events-none select-none">
      <div className="flex items-center gap-2 md:gap-3">
        <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shrink-0">
          <img
            src="/skprimegrouplogo.png"
            alt="SK Prime Group Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-base md:text-2xl font-black tracking-tighter text-[#0F2F4F] leading-none">
            SK PRIME GROUP
          </h1>
          <span className="text-[6px] md:text-[8px] font-extrabold tracking-[0.2em] text-[#9E7C2E] uppercase opacity-90">
            PRIVATE LIMITED
          </span>
        </div>
      </div>
    </div>
  );

  const CurrentSlide = SLIDES_LIST[index];

  // 1. MOBILE VIEW (Vertical Scroll)
  if (isMobile) {
    return (
      <div className="relative w-full bg-white selection:bg-[#9E7C2E] selection:text-white">
        {/* Logo yahan bhi add kar diya */}
        <BrandLogo />
        
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

  // 2. DESKTOP VIEW (Slide Mode)
  return (
    <div className="h-screen w-full bg-white overflow-hidden selection:bg-[#9E7C2E] selection:text-white">
      {/* Logo yahan bhi rahega */}
      <BrandLogo />

      <SlideIndicators total={total} current={index} onChange={setIndex} />

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

      <div className="absolute bottom-6 left-12 z-[100] opacity-30 pointer-events-none">
        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-[#0F2F4F]">
          Use keyboard arrows to navigate
        </p>
      </div>
    </div>
  );
}