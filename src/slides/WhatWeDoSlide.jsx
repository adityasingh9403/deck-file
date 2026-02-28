import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Trophy, Calendar, Building2, CheckCircle2, Zap } from 'lucide-react';

export default function WhatWeDoSlide() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0 }
  };

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const verticals = [
    {
      title: "SK Prime Infotech",
      icon: <Monitor size={20} />,
      desc: "Growing IT startup focused on smart digital solutions and professional training.",
      services: ["Web & App Development", "Social Media Management", "Creative Branding", "Training Programs"],
      img: "/skprimeinfotech.png"
    },
    {
      title: "SK Prime Sports",
      icon: <Trophy size={20} />,
      desc: "Dedicated to promoting physical development through quality sports equipment supply.",
      services: ["Equipment Supply", "Institutional Support", "Club & Academy Support"],
      img: "/skprimesports.png"
    },
    {
      title: "SK Prime Events",
      icon: <Calendar size={20} />,
      desc: "Specializing in professional event planning and impactful management.",
      services: ["Sports Event Management", "Corporate Events", "Community Programs", "Promotional Events"],
      img: "/skprimevent.png"
    },
    {
      title: "Verma Prime Properties and Construction",
      icon: <Building2 size={20} />,
      desc: "Infrastructure division dedicated to quality construction and property solutions.",
      services: ["Building Construction", "Office Complexes", "Property Development", "Real Estate Consultation"],
      img: "/vermaprime.png"
    }
  ];

  return (
    <motion.div
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      /* min-h-screen for mobile scrolling, lg:h-screen for laptop lock */
      className="relative min-h-screen lg:h-screen w-full bg-[#FDFDFD] text-[#0F2F4F] flex flex-col overflow-x-hidden lg:overflow-hidden font-sans"
    >
      {/* --- HEADER SECTION --- */}
      <div className="w-full px-6 md:px-16 lg:px-24 pt-10 md:pt-12 lg:pt-16 pb-6">
        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Zap size={14} className="text-[#9E7C2E]" />
              <h2 className="text-[9px] md:text-xs font-black text-slate-400 tracking-[0.4em] uppercase">
                CORE ECOSYSTEM
              </h2>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#0F2F4F] uppercase leading-none tracking-tighter">
              OUR <span className="text-[#9E7C2E]">DIVISIONS</span>
            </h1>
          </div>
        </motion.div>
      </div>

      {/* --- CARDS GRID --- */}
      <div className="flex-grow px-6 md:px-16 lg:px-24 pb-12 overflow-y-auto lg:overflow-hidden flex items-start lg:items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 w-full py-4 lg:py-0">
          {verticals.map((v, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group bg-white border border-slate-100 flex flex-col rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-full min-h-[420px] lg:min-h-0"
            >
              {/* Image Section */}
              <div className="h-40 md:h-44 shrink-0 overflow-hidden relative">
                <img
                  src={v.img}
                  alt={v.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#0F2F4F]/40 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-2 text-[#9E7C2E] rounded-xl shadow-lg">
                  {v.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 lg:p-5 flex flex-col justify-between flex-grow bg-white">
                <div>
                  <h3 className="text-lg font-black uppercase tracking-tight text-[#0F2F4F] mb-2 group-hover:text-[#9E7C2E] transition-colors leading-tight">
                    {v.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-[11px] leading-relaxed mb-6 lg:mb-4 font-medium line-clamp-3 lg:line-clamp-2">
                    {v.desc}
                  </p>
                </div>

                {/* Services List */}
                <div className="space-y-2 mb-6">
                  {v.services.slice(0, 4).map((s, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-[#9E7C2E] shrink-0" />
                      <span className="text-[9px] md:text-[10px] font-black uppercase tracking-wider text-slate-400">
                        {s}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-50 mt-auto">
                   <div className="flex items-center gap-2 text-[#0F2F4F] group/btn cursor-pointer">
                      <span className="text-[10px] lg:text-[8px] font-black uppercase tracking-widest">Explore Vertical</span>
                      <div className="w-6 lg:w-4 h-[1px] bg-[#9E7C2E] transition-all group-hover/btn:w-8" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- FOOTER DECOR --- */}
      <div className="h-2 bg-[#9E7C2E] w-24 absolute bottom-0 left-24 hidden lg:block" />
    </motion.div>
  );
}