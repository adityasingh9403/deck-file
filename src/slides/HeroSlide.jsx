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
      className="relative h-screen w-full bg-white text-[#0F2F4F] flex flex-col overflow-hidden"
    >
      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-grow flex flex-col md:flex-row w-full h-full overflow-hidden">
        
        {/* --- TEXT CONTENT AREA (Left) --- */}
        <div className="w-full md:w-[55%] px-6 py-8 md:py-0 md:pl-16 lg:pl-24 flex flex-col justify-center order-2 md:order-1 z-10">
          <motion.div variants={fadeRight} className="space-y-1">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles size={14} className="text-[#9E7C2E]" />
              <h2 className="text-[9px] md:text-xs font-black text-slate-400 tracking-[0.4em] uppercase">
                ESTABLISHED 2026
              </h2>
            </div>
            
            <h1 className="text-[12vw] md:text-[80px] lg:text-[100px] font-black text-[#0F2F4F] uppercase leading-[0.82] tracking-tighter">
              SK PRIME <br />
              <span className="text-[#9E7C2E]">GROUP</span>
            </h1>
            
            <div className="inline-block py-1 px-3 bg-[#0F2F4F] rounded mt-2">
              <h2 className="text-[8px] md:text-[10px] font-black text-white tracking-[0.3em] uppercase">
                PRIVATE LIMITED
              </h2>
            </div>
          </motion.div>

          {/* Description Block */}
          <motion.div
            variants={fadeRight}
            className="mt-8 md:mt-10 pt-6 border-t border-slate-100 max-w-xl"
          >
            <div className="flex flex-col gap-4">
              <p className="text-[#0F2F4F] text-lg md:text-2xl font-black leading-tight tracking-tight uppercase italic">
                Empowering <span className="text-[#9E7C2E] not-italic">Talent.</span> <br />
                Engineering Excellence.
              </p>

              <p className="text-slate-500 text-xs md:text-base leading-relaxed font-medium max-w-md">
                We bridge the gap between academic potential and professional mastery. 
                Through <span className="text-[#0F2F4F] font-bold underline decoration-[#9E7C2E] decoration-2 underline-offset-4">strategic mentorship</span> and 
                real-world skill development, we empower fresh graduates to lead as 
                future-ready professionals.
              </p>

              <div className="flex items-center gap-3 text-[#0F2F4F] group cursor-pointer mt-2">
                <span className="text-[10px] font-black uppercase tracking-widest border-b-2 border-[#9E7C2E] pb-0.5">
                  DISCOVER OUR VISION
                </span>
                <ArrowRight size={16} className="text-[#9E7C2E] group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- IMAGE SECTION (Right) --- */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full md:w-[45%] h-[30vh] md:h-full relative order-1 md:order-2"
        >
          <div className="relative h-full w-full overflow-hidden lg:rounded-l-[80px] md:rounded-l-[40px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
              alt="SK Prime Corporate"
              className="w-full h-full object-cover grayscale brightness-105"
            />
            {/* Soft Gradient Overlay for Readability on Mobile */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white via-transparent to-transparent opacity-100 md:opacity-40" />
            
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}