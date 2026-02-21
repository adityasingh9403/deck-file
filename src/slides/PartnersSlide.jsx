import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Award, ShieldCheck, Zap, ChevronRight, Globe } from 'lucide-react';

export default function PartnersSlide() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0 }
  };

  const partners = [
    { name: "KCPL India", type: "Sports Partner", icon: <Globe size={20} /> },
    { name: "SGPL 2026", type: "Event Partner", icon: <Zap size={20} /> },
    { name: "Verma Infra", type: "Construction", icon: <Award size={20} /> },
    { name: "SmartAgri", type: "Tech Alliance", icon: <ShieldCheck size={20} /> },
    { name: "SR Empire", type: "Venue Partner", icon: <Handshake size={20} /> },
    { name: "Youth Trophy", type: "Sports Partner", icon: <Globe size={20} /> }
  ];

  return (
    <motion.div 
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen w-full bg-white text-[#0F172A] overflow-hidden flex flex-col"
    >
      {/* --- BACKGROUND ACCENT --- */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-slate-50 rounded-full blur-3xl opacity-50" />

      {/* --- HEADER SECTION --- */}
      <div className="px-6 sm:px-12 lg:px-24 pt-20 md:pt-24 z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-6">
          <Zap size={20} className="text-[#FF5722] fill-[#FF5722]" />
          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">Our Strategic Network</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-light text-slate-300 tracking-tight leading-none">Trusted</h2>
            <h1 className="text-6xl sm:text-7xl lg:text-[100px] font-black text-[#0F172A] uppercase leading-[0.8] tracking-tighter mt-2">
              ALLI <span className="text-[#FF5722]">ANCE</span>
            </h1>
          </div>

          <div className="flex gap-12 border-l border-slate-100 pl-8 mb-4">
             <div className="flex flex-col">
                <span className="text-4xl lg:text-5xl font-black text-[#0F172A]">15<span className="text-[#FF5722]">+</span></span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Global Partners</span>
             </div>
             <div className="flex flex-col">
                <span className="text-4xl lg:text-5xl font-black text-[#0F172A]">06</span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Industries</span>
             </div>
          </div>
        </div>
      </div>

      {/* --- PARTNERS CLUSTER GRID --- */}
      <div className="flex-grow flex items-center px-6 sm:px-12 lg:px-24 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-full max-h-[500px]">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: "#F8FAFC" }}
              className="flex items-center gap-6 p-6 border border-slate-100 rounded-2xl group transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl hover:border-[#FF5722]/20"
            >
              <div className="w-14 h-14 bg-white border border-slate-50 flex items-center justify-center rounded-xl text-slate-300 group-hover:text-[#FF5722] group-hover:bg-orange-50 transition-all duration-500 shadow-inner">
                {partner.icon}
              </div>
              
              <div className="flex-grow">
                <h3 className="text-sm font-black uppercase tracking-widest text-[#0F172A] mb-1 group-hover:translate-x-1 transition-transform">
                  {partner.name}
                </h3>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                  {partner.type}
                </span>
              </div>

              <ChevronRight size={16} className="text-slate-200 group-hover:text-[#FF5722] opacity-0 group-hover:opacity-100 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}