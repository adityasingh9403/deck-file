import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe } from 'lucide-react';

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
      className="relative min-h-screen w-full bg-white text-[#0F2F4F] overflow-x-hidden flex flex-col"
    >
      {/* --- TOP NAV / LOGO AREA --- */}
      <div className="absolute top-6 left-6 md:top-8 md:left-12 z-20">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-[#9E7C2E] rounded-sm rotate-12 flex items-center justify-center">
            <span className="text-white font-black text-[10px] md:text-xs italic">SK</span>
          </div>
          <h1 className="text-lg md:text-2xl font-black tracking-tighter text-[#0F2F4F]">SK PRIME</h1>
        </div>
      </div>

      <div className="flex-grow flex flex-col md:flex-row items-center relative pt-20 md:pt-0">

        {/* --- IMAGE AREA (Mobile: Top / Desktop: Right) --- */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "circOut" }}
          className="relative w-full h-[35vh] md:h-[90%] md:absolute md:right-0 md:top-0 md:w-[55%] pointer-events-none"
        >
          <div className="h-full w-full bg-slate-200 overflow-hidden relative rounded-bl-[80px] md:rounded-bl-[200px]">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
              alt="Corporate Building"
              className="w-full h-full object-cover grayscale opacity-60 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#0F2F4F]/20" />
          </div>
        </motion.div>

        {/* --- LEFT CONTENT AREA --- */}
        <div className="w-full md:w-1/2 px-6 sm:px-12 md:pl-24 z-10 py-10 md:py-0">

          <motion.div variants={fadeRight} className="space-y-0">
            <h2 className="text-xl sm:text-3xl md:text-5xl font-light text-slate-500 tracking-tight leading-none">We are</h2>
            <h1 className="text-4xl sm:text-6xl lg:text-[90px] font-black text-[#9E7C2E] uppercase leading-[0.9] tracking-tighter my-2">
              SK Prime <span className="text-[#0F2F4F]">Group</span>
            </h1>
            <h2 className="text-xl sm:text-3xl md:text-5xl font-light text-slate-500 tracking-tight leading-none">Private Limited</h2>
          </motion.div>

          <motion.div variants={fadeRight} className="mt-4 md:mt-8 pt-6 md:pt-8 border-t border-slate-100 max-w-md">
            <p className="text-slate-500 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
              <span className="text-[#001233] font-bold">Building Excellence</span> by transforming
              unorganized sectors through tech, and <span className="text-[#D4AF37] font-bold">Defining Legacy</span> as
              your trusted global IT Solutions partner.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- BOTTOM CONTACT BAR (Responsive Stack to Grid) --- */}
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="w-full grid grid-cols-1 sm:grid-cols-3 bg-[#9E7C2E]"
      >
        <div className="h-14 md:h-20 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-white/10 hover:bg-black/5 transition-colors cursor-pointer p-4">
          <div className="flex items-center gap-2 md:gap-3 text-white">
            <Phone size={16} className="md:w-[18px]" fill="white" />
            <span className="text-[10px] md:text-sm font-bold tracking-wider">+91 91745 050XX</span>
          </div>
        </div>

        <div className="h-14 md:h-20 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-white/10 bg-black/5 hover:bg-black/10 transition-colors cursor-pointer p-4">
          <div className="flex items-center gap-2 md:gap-3 text-white">
            <Mail size={16} className="md:w-[18px]" fill="white" />
            <span className="text-[10px] md:text-sm font-bold tracking-wider truncate px-2">contact@skprimegroup.in</span>
          </div>
        </div>

        <div className="h-14 md:h-20 flex items-center justify-center hover:bg-black/5 transition-colors cursor-pointer p-4">
          <div className="flex items-center gap-2 md:gap-3 text-white">
            <Globe size={16} className="md:w-[18px]" />
            <span className="text-[10px] md:text-sm font-bold tracking-wider">www.skprimegroup.com</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}