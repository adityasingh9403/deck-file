import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Trophy, Calendar, Building2, ChevronRight, Zap, ArrowRight } from 'lucide-react';

export default function WhatWeDoSlide() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0 }
  };

  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const verticals = [
    {
      title: "SK Prime Infotech",
      icon: <Monitor size={24} />,
      desc: "Delivering high-performance software, AI-integrated POS systems, and cloud-native solutions for global enterprises.",
      color: "#9E7C2E",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "SK Prime Sports",
      icon: <Trophy size={24} />,
      desc: "Revolutionizing grassroots talent scouting and professional league management through the KCPL network.",
      color: "#0F2F4F",
      img: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "SK Prime Events",
      icon: <Calendar size={24} />,
      desc: "Executing grand-scale corporate experiences and sports events with precision and visionary planning.",
      color: "#0F2F4F",
      img: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Verma Construction",
      icon: <Building2 size={24} />,
      desc: "Developing premium infrastructure and modern architectural marvels with a focus on sustainable urban living.",
      color: "#9E7C2E",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <motion.div
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen w-full bg-[#F8FAFC] text-[#0F2F4F] overflow-x-hidden flex flex-col"
    >
      {/* --- HEADER SECTION --- */}
      <div className="w-full px-6 sm:px-12 lg:px-24 pt-20 md:pt-24 pb-12">
        <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
          <Zap size={18} className="text-[#9E7C2E] fill-[#9E7C2E]" />
          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">Our Strategic Domains</span>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-4xl font-light text-slate-400 tracking-tight leading-none">Diverse</h2>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#0F2F4F] uppercase leading-[0.9] tracking-tighter mt-2">
              EXPERT <span className="text-[#9E7C2E]">ISE</span>
            </h1>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm font-bold uppercase tracking-widest max-w-[250px] border-l-2 border-[#9E7C2E] pl-4 mb-2">
            Multi-disciplinary excellence across four core industries.
          </p>
        </motion.div>
      </div>

      {/* --- MASONRY GRID SECTION --- */}
      <div className="flex-grow px-6 sm:px-12 lg:px-24 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-full">
          {verticals.map((v, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="relative group overflow-hidden bg-white shadow-sm border border-slate-100 flex flex-col h-[350px] sm:h-[450px] lg:h-[500px]"
            >
              {/* Top Image Part */}
              <div className="h-1/2 overflow-hidden relative">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-[#0F2F4F]/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-4 left-4 bg-white p-2 text-[#9E7C2E] shadow-lg">
                  {v.icon}
                </div>
              </div>

              {/* Bottom Content Part */}
              <div className="h-1/2 p-6 flex flex-col justify-between bg-white relative">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-[#0F2F4F] mb-3">{v.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed uppercase tracking-tight">
                    {v.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#9E7C2E]">Learn More</span>
                  <div className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[#9E7C2E] group-hover:text-white transition-all">
                    <ArrowRight size={16} />
                  </div>
                </div>

                {/* Vertical Decorative Text */}
                <span className="absolute bottom-6 right-[-20px] text-6xl font-black text-slate-50 opacity-[0.03] rotate-90 pointer-events-none uppercase">
                  {v.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- BOTTOM SYNC BAR --- */}
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        className="w-full bg-[#0F2F4F] grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5"
      >
        {["Infotech", "Sports", "Events", "Construction"].map((item, i) => (
          <div key={i} className="py-4 text-center">
            <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.3em] group-hover:text-[#9E7C2E] transition-colors">{item}</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}