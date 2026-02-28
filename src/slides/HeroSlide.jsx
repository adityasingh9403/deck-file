import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function HeroSlide() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
    exit: { opacity: 0 }
  };

  const fadeRight = {
    initial: { x: -30, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.div
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen w-full bg-white text-[#0F2F4F] flex flex-col overflow-x-hidden"
    >
      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-grow flex flex-col md:grid md:grid-cols-12 w-full">

        {/* --- TEXT CONTENT AREA (Left) --- */}
        {/* Mobile: Order 2 | Tablet/Desktop: Order 1 & Span 7 columns */}
        <div className="col-span-12 md:col-span-7 px-6 py-12 md:py-0 md:pl-16 lg:pl-28 flex flex-col justify-center order-2 md:order-1 z-10 bg-white">
          <motion.div variants={fadeRight} className="space-y-2">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={14} className="text-[#9E7C2E]" />
              <h2 className="text-[10px] md:text-xs font-black text-slate-400 tracking-[0.4em] uppercase">
                ESTABLISHED 2026
              </h2>
            </div>

            {/* Responsive Text: Mobile 12vw | Tablet 8vw | Desktop 100px */}
            <h1 className="text-[14vw] md:text-[9vw] lg:text-[110px] font-black text-[#0F2F4F] uppercase leading-[0.85] tracking-tighter">
              SK PRIME <br />
              <span className="text-[#9E7C2E]">GROUP</span>
            </h1>

            <div className="inline-block py-1.5 px-4 bg-[#0F2F4F] rounded-sm mt-4">
              <h2 className="text-[9px] md:text-[11px] font-black text-white tracking-[0.3em] uppercase">
                PRIVATE LIMITED
              </h2>
            </div>
          </motion.div>

          {/* Description Block */}
          <motion.div
            variants={fadeRight}
            className="mt-10 md:mt-14 pt-8 border-t border-slate-100 max-w-2xl"
          >
            <div className="flex flex-col gap-5">
              <p className="text-[#0F2F4F] text-xl md:text-3xl lg:text-4xl font-black leading-tight tracking-tight uppercase italic">
                Building <span className="text-[#9E7C2E] not-italic">Excellence</span> <br />
                Defining Legacy.
              </p>

              <p className="text-slate-500 text-sm md:text-base lg:text-lg leading-relaxed font-medium max-w-lg">
                SK Prime Group is a dynamic organization dedicated to empowering young graduates. We focus strongly on skill development, providing tools and training to enhance employability and prepare individuals for real-world challenges.
              </p>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 text-[#0F2F4F] group cursor-pointer mt-4"
              >
                <span className="text-[11px] md:text-xs font-black uppercase tracking-widest border-b-2 border-[#9E7C2E] pb-1">
                  DISCOVER OUR VISION
                </span>
                <ArrowRight size={18} className="text-[#9E7C2E]" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* --- IMAGE SECTION (Right) --- */}
        {/* Mobile: 40vh height | Tablet/Desktop: Full height & Span 5 columns */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="col-span-12 md:col-span-5 h-[40vh] md:h-full relative order-1 md:order-2"
        >
          <div className="relative h-full w-full overflow-hidden md:rounded-l-[60px] lg:rounded-l-[100px] shadow-[-20px_0_50px_rgba(0,0,0,0.1)]">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
              alt="SK Prime Corporate"
              className="w-full h-full object-cover grayscale brightness-105 contrast-110"
            />
            {/* Desktop Gradient: Left to Right | Mobile Gradient: Bottom to Top */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white/90 via-white/20 to-transparent md:from-white md:via-transparent" />
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}