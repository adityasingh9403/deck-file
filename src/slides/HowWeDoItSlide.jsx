import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Settings, ShieldCheck, Zap, ArrowRight, Code2, Search, Rocket } from 'lucide-react';

export default function HowWeDoItSlide() {
  const methods = [
    { title: "Planning", tag: "P1", icon: <Search />, desc: "Scope & Feasibility", sub: ["Requirement", "Risk"] },
    { title: "Design", tag: "P2", icon: <Lightbulb />, desc: "UI/UX & Architecture", sub: ["Schema", "Design"] },
    { title: "Coding", tag: "P3", icon: <Code2 />, desc: "Modular Development", sub: ["Agile", "Sprints"] },
    { title: "Testing", tag: "P4", icon: <ShieldCheck />, desc: "Quality Assurance", sub: ["UAT", "Bugs"] },
    { title: "Launch", tag: "P5", icon: <Rocket />, desc: "Live Deployment", sub: ["Server", "Live"] },
    { title: "Support", tag: "P6", icon: <Settings />, desc: "Maintenance", sub: ["Updates", "Fixes"] }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative h-screen w-full bg-[#FBFBFB] text-[#0F2F4F] flex flex-col overflow-hidden px-6 lg:px-20 py-8"
    >
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9E7C2E]/[0.02] via-transparent to-transparent pointer-events-none" />

      {/* --- HEADER (More Compact) --- */}
      <div className="text-center mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#9E7C2E]/10 rounded-full mb-3">
          <Zap size={12} className="text-[#9E7C2E] fill-[#9E7C2E]" />
          <span className="text-[10px] font-black tracking-widest uppercase text-[#9E7C2E]">The Lifecycle Loop</span>
        </div>
        <h1 className="text-4xl lg:text-6xl font-black text-[#0F2F4F] uppercase tracking-tighter">
          SDLC <span className="text-[#9E7C2E]">ENGINEERING</span>
        </h1>
      </div>

      {/* --- CIRCULAR/S-CURVE GRID --- */}
      <div className="flex-grow flex items-center justify-center relative">
        
        {/* SVG Path Connector - Desktop Only */}
        <svg className="absolute w-full h-full top-0 left-0 hidden lg:block pointer-events-none opacity-20" viewBox="0 0 1000 400">
          <path 
            d="M 150 120 Q 500 120 850 120 Q 950 120 950 200 T 850 280 Q 500 280 150 280" 
            fill="none" 
            stroke="#9E7C2E" 
            strokeWidth="2" 
            strokeDasharray="10,10"
          />
        </svg>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 w-full max-w-6xl relative z-10">
          {methods.map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              <div className="bg-white p-4 lg:p-6 border border-slate-100 shadow-sm hover:shadow-xl rounded-[2rem] flex flex-col items-center text-center transition-all duration-500 border-b-4 border-b-[#9E7C2E]/20 hover:border-b-[#9E7C2E]">
                
                {/* Index Circle */}
                <div className="absolute -top-3 -left-1 w-8 h-8 bg-[#9E7C2E] text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  0{i + 1}
                </div>

                {/* Icon (Circular) */}
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[#0F2F4F] text-white flex items-center justify-center rounded-full mb-4 group-hover:bg-[#9E7C2E] transition-all duration-500 transform group-hover:rotate-[360deg]">
                  {React.cloneElement(step.icon, { size: window.innerWidth > 1024 ? 28 : 22 })}
                </div>

                {/* Content */}
                <h3 className="text-sm lg:text-base font-black uppercase text-[#0F2F4F] mb-1">
                  {step.title}
                </h3>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight leading-tight mb-3 px-2">
                  {step.desc}
                </p>

                {/* Tags */}
                <div className="flex gap-1">
                  {step.sub.map((s, idx) => (
                    <span key={idx} className="text-[7px] font-black text-slate-300 border border-slate-100 px-2 py-0.5 rounded-full uppercase">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow Connection (Desktop) */}
              {i < 5 && (
                <div className="absolute top-1/2 -right-4 lg:-right-6 -translate-y-1/2 text-[#9E7C2E]/30 hidden lg:block">
                  <ArrowRight size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- COMPACT FOOTER --- */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-[8px] font-black text-slate-400 tracking-widest uppercase italic">
          Standardized SDLC v2.0 Execution
        </span>
        <div className="flex gap-1">
          {[1,2,3,4,5,6].map(dot => (
            <div key={dot} className="w-1.5 h-1.5 rounded-full bg-[#9E7C2E]" />
          ))}
        </div>
      </div>
    </motion.div>
  );
}