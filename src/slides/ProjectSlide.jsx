import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Globe, Shield } from 'lucide-react';

export default function ProjectSlide({ data }) {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
    exit: { opacity: 0, y: -20 }
  };

  const textVars = {
    initial: { x: -50, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const imageVars = {
    initial: { scale: 1.1, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } }
  };

  return (
    <motion.div 
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative h-screen w-full flex flex-col md:flex-row items-center bg-[#f8fafc] overflow-hidden"
    >
      {/* --- LEFT CONTENT AREA --- */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-24 z-10 bg-white">
        <motion.div variants={textVars} className="mb-6 flex items-center gap-3">
          <span className="text-[10px] font-black tracking-[0.4em] text-slate-300 uppercase">Project 01</span>
          <div className="h-[1px] w-8 bg-[#D4AF37]" />
        </motion.div>

        <motion.h2 
          variants={textVars}
          className="text-5xl md:text-7xl font-black text-[#001233] leading-none mb-6 uppercase tracking-tighter"
        >
          SUPER KING <br />
          <span className="text-[#D4AF37] italic font-light">WEB PORTAL</span>
        </motion.h2>

        <motion.p variants={textVars} className="text-slate-500 text-lg max-w-md mb-10 leading-relaxed font-light">
          Our flagship digital ecosystem designed for global scalability. A single-point solution for the group's digital identity and operational flow.
        </motion.p>

        {/* Feature List from Portfolio */}
        <motion.div variants={textVars} className="grid grid-cols-1 gap-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-slate-50 text-[#D4AF37]"><Globe size={20} /></div>
            <div>
              <h4 className="text-sm font-bold text-[#001233] uppercase tracking-wider">EMS Integration</h4>
              <p className="text-xs text-slate-400">Enterprise Management System for seamless data handling.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-2 bg-slate-50 text-[#D4AF37]"><Shield size={20} /></div>
            <div>
              <h4 className="text-sm font-bold text-[#001233] uppercase tracking-wider">Secure Architecture</h4>
              <p className="text-xs text-slate-400">Built with modern security protocols and talent empowerment in mind.</p>
            </div>
          </div>
        </motion.div>

        <motion.button 
          whileHover={{ x: 10 }}
          className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#001233]"
        >
          View Case Study <div className="w-10 h-[1px] bg-[#001233]" />
        </motion.button>
      </div>

      {/* --- RIGHT IMAGE AREA (Hiteshi Style Overlay) --- */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-[#001233]">
        <motion.div variants={imageVars} className="absolute inset-0 opacity-40">
           {/* Replace with real project screenshot later */}
           <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        </motion.div>
        
        {/* Floating Stats or Tag */}
        <div className="absolute bottom-12 right-12 text-right hidden md:block">
          <h3 className="text-6xl font-black text-white/10 uppercase leading-none">Modern</h3>
          <h3 className="text-6xl font-black text-white/20 uppercase leading-none">Scalable</h3>
          <h3 className="text-6xl font-black text-[#D4AF37] uppercase leading-none">Digital</h3>
        </div>
        
        {/* Decorative mask for Hiteshi feel */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none border-[40px] border-white/5 md:border-[80px]" />
      </div>

      {/* Background Big Letter */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none hidden md:block">
        <h1 className="text-[40vw] font-black text-[#001233]">01</h1>
      </div>
    </motion.div>
  );
}