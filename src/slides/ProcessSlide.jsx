import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket, Zap, ChevronRight } from 'lucide-react';

export default function ProcessSlide() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0 }
  };

  const steps = [
    { no: "01", title: "Discovery", desc: "Analyzing unorganized markets & gaps.", icon: <Search />, color: "bg-slate-50" },
    { no: "02", title: "Strategy", desc: "Designing scalable industrial roadmaps.", icon: <PenTool />, color: "bg-white" },
    { no: "03", title: "Execution", desc: "Agile development & talent scouting.", icon: <Code />, color: "bg-slate-50" },
    { no: "04", title: "Impact", desc: "Delivering lasting digital & physical legacy.", icon: <Rocket />, color: "bg-[#0F172A]" }
  ];

  return (
    <motion.div 
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen w-full bg-white text-[#0F172A] overflow-x-hidden flex flex-col"
    >
      {/* --- SIDE HEADER SECTION --- */}
      <div className="w-full px-6 sm:px-12 lg:px-24 pt-20 md:pt-24 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="z-10">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="flex items-center gap-4 mb-4">
            <Zap size={20} className="text-[#FF5722] fill-[#FF5722]" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">Operational Lifecycle</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-light text-slate-400 tracking-tight leading-none">The Smart</h2>
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black text-[#0F172A] uppercase leading-[0.8] tracking-tighter mt-2">
            WORK <span className="text-[#FF5722]">FLOW</span>
          </h1>
        </div>
        
        <div className="hidden lg:block pb-4">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 vertical-text rotate-180 select-none">
            Efficiency • Scalability • Results
          </p>
        </div>
      </div>

      {/* --- INTERACTIVE VERTICAL PANELS --- */}
      <div className="flex-grow flex flex-col lg:flex-row w-full border-t border-slate-100">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ flexGrow: 1.5 }}
            className={`relative flex-1 group min-h-[250px] lg:min-h-0 p-8 sm:p-12 flex flex-col justify-between transition-all duration-700 ease-in-out border-b lg:border-b-0 lg:border-r border-slate-100 ${step.color}`}
          >
            {/* Step Number Background */}
            <span className={`absolute top-10 right-10 text-7xl lg:text-8xl font-black opacity-[0.03] group-hover:opacity-[0.08] transition-opacity uppercase tracking-tighter ${i === 3 ? 'text-white' : 'text-[#0F172A]'}`}>
              {step.no}
            </span>

            <div className="relative z-10">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-8 transition-all duration-500 shadow-xl 
                ${i === 3 ? 'bg-[#FF5722] text-white' : 'bg-white group-hover:bg-[#FF5722] text-[#FF5722] group-hover:text-white'}`}>
                {React.cloneElement(step.icon, { size: 22 })}
              </div>
              
              <h3 className={`text-2xl lg:text-3xl font-black uppercase tracking-tighter mb-4 transition-colors
                ${i === 3 ? 'text-white' : 'text-[#0F172A]'}`}>
                {step.title}
              </h3>
              
              <p className={`text-xs font-bold uppercase tracking-widest leading-relaxed max-w-[200px] transition-colors
                ${i === 3 ? 'text-slate-400' : 'text-slate-400 group-hover:text-slate-600'}`}>
                {step.desc}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-500">
              <div className={`h-[2px] w-8 transition-all duration-500 ${i === 3 ? 'bg-white/20 group-hover:w-16 group-hover:bg-[#FF5722]' : 'bg-slate-200 group-hover:w-16 group-hover:bg-[#FF5722]'}`} />
              <ChevronRight size={18} className={i === 3 ? 'text-[#FF5722]' : 'text-slate-200 group-hover:text-[#FF5722]'} />
            </div>

            {/* Hover Image Overlay (Desktop Only) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}