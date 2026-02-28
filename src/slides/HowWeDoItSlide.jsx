import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Settings, ShieldCheck, Zap, ArrowRight, Code2, Search, Rocket } from 'lucide-react';

export default function HowWeDoItSlide() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0 }
  };

  const methods = [
    { title: "Planning", icon: <Search />, desc: "Requirement Analysis", sub: ["Scope", "Risk"] },
    { title: "Design", icon: <Lightbulb />, desc: "Architecture", sub: ["Schema", "UX"] },
    { title: "Coding", icon: <Code2 />, desc: "Agile Dev", sub: ["Sprints", "Code"] },
    { title: "Testing", icon: <ShieldCheck />, desc: "QA & Testing", sub: ["UAT", "Bugs"] },
    { title: "Launch", icon: <Rocket />, desc: "Deployment", sub: ["Cloud", "CI/CD"] },
    { title: "Support", icon: <Settings />, desc: "Evolution", sub: ["Fixes", "Updates"] }
  ];

  return (
    <motion.div 
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      // Desktop: Fixed h-screen & overflow-hidden | Mobile: min-h-screen
      className="relative min-h-screen lg:h-screen w-full bg-[#FBFBFB] text-[#0F2F4F] flex flex-col px-4 sm:px-10 lg:px-16 py-6 lg:py-6 lg:overflow-hidden"
    >
      {/* --- BACKGROUND ACCENT --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9E7C2E]/[0.03] via-transparent to-transparent pointer-events-none" />

      {/* --- HEADER (Compact for Desktop) --- */}
      <div className="text-center mb-6 lg:mb-4 relative z-10 shrink-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9E7C2E]/10 rounded-full mb-2">
          <Zap size={10} className="text-[#9E7C2E] fill-[#9E7C2E]" />
          <span className="text-[9px] font-black tracking-widest uppercase text-[#9E7C2E]">The Lifecycle Loop</span>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#0F2F4F] uppercase tracking-tighter leading-none">
          SDLC <span className="text-[#9E7C2E]">PROCESS</span>
        </h1>
      </div>

      {/* --- GRID FLOW --- */}
      <div className="flex-grow flex items-center justify-center relative w-full h-full overflow-hidden">
        
        {/* SVG Path (Optimized) */}
        <svg className="absolute w-full h-full top-0 left-0 hidden lg:block pointer-events-none opacity-10" viewBox="0 0 1000 400">
          <path 
            d="M 100 150 H 900 V 300 H 100" 
            fill="none" 
            stroke="#9E7C2E" 
            strokeWidth="2" 
            strokeDasharray="10,10"
          />
        </svg>

        {/* Locked Grid: 3 Cols x 2 Rows on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:gap-x-10 lg:gap-y-6 w-full max-w-6xl h-full lg:max-h-[75%] relative z-10">
          {methods.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02, y: -3 }}
              className="relative group h-full"
            >
              {/* Compact Card Design */}
              <div className="bg-white p-5 lg:p-6 border border-slate-100 shadow-sm rounded-[2rem] flex flex-col items-center text-center transition-all duration-500 border-b-4 border-b-[#9E7C2E]/20 hover:border-b-[#9E7C2E] h-full justify-center">
                
                {/* Index Circle */}
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#0F2F4F] group-hover:bg-[#9E7C2E] text-white text-[10px] font-black rounded-full flex items-center justify-center transition-colors shadow-md border-2 border-white">
                  0{i + 1}
                </div>

                {/* Icon (Scaled down for Laptop) */}
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-slate-50 text-[#0F2F4F] flex items-center justify-center rounded-2xl mb-3 group-hover:bg-[#0F2F4F] group-hover:text-white transition-all duration-500">
                  {React.cloneElement(step.icon, { size: 22 })}
                </div>

                {/* Content */}
                <h3 className="text-base lg:text-lg font-black uppercase text-[#0F2F4F] mb-1 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter mb-3">
                  {step.desc}
                </p>

                {/* Compact Tags */}
                <div className="flex flex-wrap justify-center gap-1.5 mt-1">
                  {step.sub.map((s, idx) => (
                    <span key={idx} className="text-[7px] lg:text-[8px] font-black text-slate-500 border border-slate-100 px-2.5 py-0.5 rounded-full uppercase bg-slate-50/50">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow Connector (Desktop) */}
              {i < 5 && i !== 2 && (
                <div className="absolute top-1/2 -right-6 lg:-right-8 -translate-y-1/2 text-[#9E7C2E]/20 hidden lg:block">
                  <ArrowRight size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- FOOTER (Compact) --- */}
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 shrink-0">
        <span className="text-[8px] font-black text-slate-300 tracking-[0.3em] uppercase italic">
          Standardized SDLC v2.0 Execution Framework
        </span>
        <div className="flex gap-1 items-center">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[8px] font-black text-emerald-600 uppercase">System Active</span>
        </div>
      </div>
    </motion.div>
  );
}