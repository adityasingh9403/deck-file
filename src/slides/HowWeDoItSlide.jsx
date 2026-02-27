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
    { title: "Planning", tag: "P1", icon: <Search />, desc: "Requirement Analysis", sub: ["Scope", "Risk"] },
    { title: "Design", tag: "P2", icon: <Lightbulb />, desc: "UI/UX & Architecture", sub: ["Schema", "UX"] },
    { title: "Coding", tag: "P3", icon: <Code2 />, desc: "Agile Development", sub: ["Sprints", "Code"] },
    { title: "Testing", tag: "P4", icon: <ShieldCheck />, desc: "Quality Assurance", sub: ["UAT", "Bugs"] },
    { title: "Launch", tag: "P5", icon: <Rocket />, desc: "Live Deployment", sub: ["Cloud", "CI/CD"] },
    { title: "Support", tag: "P6", icon: <Settings />, desc: "Continuous Evolution", sub: ["Fixes", "Updates"] }
  ];

  return (
    <motion.div 
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen lg:h-screen w-full bg-[#FBFBFB] text-[#0F2F4F] flex flex-col overflow-x-hidden lg:overflow-hidden px-4 sm:px-10 lg:px-20 py-8 lg:py-10"
    >
      {/* --- BACKGROUND ACCENT --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9E7C2E]/[0.03] via-transparent to-transparent pointer-events-none" />

      {/* --- HEADER --- */}
      <div className="text-center mb-10 lg:mb-12 relative z-10 shrink-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9E7C2E]/10 rounded-full mb-3">
          <Zap size={12} className="text-[#9E7C2E] fill-[#9E7C2E]" />
          <span className="text-[10px] font-black tracking-widest uppercase text-[#9E7C2E]">The Lifecycle Loop</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#0F2F4F] uppercase tracking-tighter leading-none">
          SDLC <span className="text-[#9E7C2E]">PROCESS</span>
        </h1>
      </div>

      {/* --- RESPONSIVE GRID / FLOW --- */}
      <div className="flex-grow flex items-center justify-center relative w-full h-full">
        
        {/* SVG Path Connector (Desktop Only) */}
        <svg className="absolute w-full h-full top-0 left-0 hidden lg:block pointer-events-none opacity-20" viewBox="0 0 1000 400">
          <path 
            d="M 150 120 Q 500 120 850 120 Q 950 120 950 200 T 850 280 Q 500 280 150 280" 
            fill="none" 
            stroke="#9E7C2E" 
            strokeWidth="2" 
            strokeDasharray="10,10"
          />
        </svg>

        {/* Grid: 1 col (Mobile), 2 col (Tablet), 3 col (Desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl relative z-10">
          {methods.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-2xl rounded-[2.5rem] flex flex-col items-center text-center transition-all duration-500 border-b-8 border-b-[#9E7C2E]/20 hover:border-b-[#9E7C2E] h-full">
                
                {/* Index Circle */}
                <div className="absolute -top-3 -left-2 w-10 h-10 bg-[#9E7C2E] text-white text-xs font-black rounded-full flex items-center justify-center shadow-lg border-4 border-white z-20">
                  0{i + 1}
                </div>

                {/* Icon Circle */}
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#0F2F4F] text-white flex items-center justify-center rounded-full mb-5 group-hover:bg-[#9E7C2E] transition-all duration-700 transform group-hover:rotate-[360deg] shadow-inner shrink-0">
                  {React.cloneElement(step.icon, { size: 28 })}
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-black uppercase text-[#0F2F4F] mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-tight leading-tight mb-4 px-2">
                  {step.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-2 mt-auto">
                  {step.sub.map((s, idx) => (
                    <span key={idx} className="text-[8px] md:text-[9px] font-black text-slate-400 border border-slate-100 px-3 py-1 rounded-full uppercase bg-slate-50">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow Connector (Desktop Only) */}
              {i < 5 && (
                <div className="absolute top-1/2 -right-4 lg:-right-8 -translate-y-1/2 text-[#9E7C2E]/40 hidden lg:block group-hover:text-[#9E7C2E] transition-colors">
                  <ArrowRight size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- FOOTER --- */}
      <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6 shrink-0">
        <span className="text-[9px] font-black text-slate-300 tracking-[0.3em] uppercase italic">
          Standardized SDLC v2.0 Execution Framework
        </span>
        <div className="flex gap-1.5 items-center">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[9px] font-black text-emerald-600 uppercase">System Active</span>
        </div>
      </div>
    </motion.div>
  );
}