import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Workflow, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

export default function HowWeDoItSlide() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
    exit: { opacity: 0 }
  };

  const methods = [
    { title: "Analyze & Identify", tag: "PHASE 01", icon: <Target />, desc: "Market research & gap analysis." },
    { title: "Strategic Design", tag: "PHASE 02", icon: <Lightbulb />, desc: "Architecting scalable solutions." },
    { title: "Agile Execution", tag: "PHASE 03", icon: <Workflow />, desc: "Rapid development & iterations." },
    { title: "Legacy Delivery", tag: "PHASE 04", icon: <ShieldCheck />, desc: "Quality assurance & deployment." }
  ];

  return (
    <motion.div 
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen w-full bg-[#FBFBFB] text-[#0F2F4F] overflow-x-hidden flex flex-col"
    >
      {/* --- BACKGROUND ACCENT (Laptop only) --- */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#9E7C2E]/[0.02] -skew-x-12 hidden lg:block" />

      {/* --- HEADER --- */}
      <div className="pt-20 md:pt-24 px-6 sm:px-12 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 mb-6"
        >
          <Zap size={20} className="text-[#9E7C2E] fill-[#9E7C2E]" />
          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">Operational Excellence</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl md:text-5xl font-light text-slate-400 tracking-tight leading-none">Execution</h2>
          <h1 className="text-5xl sm:text-7xl lg:text-[100px] font-black text-[#0F2F4F] uppercase leading-[0.85] tracking-tighter mt-2">
            METHO <span className="text-[#9E7C2E]">DOLOGY</span>
          </h1>
        </motion.div>
      </div>

      {/* --- TIMELINE / PROCESS GRID --- */}
      <div className="flex-grow flex items-center px-6 sm:px-12 lg:px-24 py-12 lg:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full relative">
          
          {/* Connecting Line (Laptop Only) */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 hidden lg:block z-0" />

          {methods.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 group"
            >
              <div className="bg-white p-8 lg:p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#9E7C2E]/20 transition-all duration-500 rounded-2xl group-hover:-translate-y-4">
                
                {/* Phase Badge */}
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[10px] font-black text-[#9E7C2E] bg-orange-50 px-3 py-1 rounded-full tracking-widest">
                    {step.tag}
                  </span>
                  <div className="text-slate-100 font-black text-4xl group-hover:text-orange-50 transition-colors">
                    0{i + 1}
                  </div>
                </div>

                {/* Icon Container */}
                <div className="w-14 h-14 bg-[#0F2F4F] text-white flex items-center justify-center rounded-xl mb-6 shadow-lg group-hover:bg-[#9E7C2E] transition-colors duration-500">
                  {React.cloneElement(step.icon, { size: 28 })}
                </div>

                {/* Content */}
                <h3 className="text-xl font-black uppercase tracking-tighter text-[#0F2F4F] mb-3 group-hover:text-[#9E7C2E] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                  {step.desc}
                </p>

                {/* Arrow Decor */}
                <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={20} className="text-[#9E7C2E]" />
                </div>
              </div>

              {/* Step Connection Arrow (Laptop Only) */}
              {i < 3 && (
                <div className="absolute top-1/2 -right-4 translate-y-[-50%] text-slate-200 hidden lg:block group-hover:text-[#9E7C2E] transition-colors">
                   <ArrowRight size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}