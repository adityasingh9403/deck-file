import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

export default function LeadershipSlide() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVars = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const leaders = [
    { name: "Sarika Rakesh Verma", role: "Chairman", desc: "The visionary force behind SK Prime Group's ethics and growth." },
    { name: "Harsh Verma", role: "Founder & CEO", desc: "Driving innovation and modernizing unorganized markets." },
    { name: "Swapnil Porwal", role: "COO", desc: "Streamlining operations and strategic business consulting." },
    { name: "Aditya Singh", role: "CTO", desc: "Leading the digital transformation and tech infrastructure." }
  ];

  return (
    <motion.div 
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative h-screen w-full flex flex-col justify-center px-6 md:px-24 bg-white overflow-hidden"
    >
      {/* --- BACKGROUND LARGE TEXT --- */}
      <h1 className="absolute top-0 right-0 text-[20vw] font-black text-slate-50 uppercase select-none leading-none -translate-y-10">
        LEADERS
      </h1>

      <div className="relative z-10">
        {/* Header */}
        <div className="mb-16">
          <motion.div variants={cardVars} className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-[#D4AF37]" />
            <span className="text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase">The Minds Behind</span>
          </motion.div>
          <motion.h2 variants={cardVars} className="text-5xl md:text-8xl font-black text-[#001233] uppercase tracking-tighter leading-none">
            THE <span className="text-slate-300 italic font-light">LEADERSHIP</span>
          </motion.h2>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((person, i) => (
            <motion.div 
              key={i}
              variants={cardVars}
              className="group relative"
            >
              {/* Photo Placeholder */}
              <div className="aspect-[3/4] bg-slate-100 overflow-hidden relative mb-6">
                <div className="absolute inset-0 bg-[#001233]/0 group-hover:bg-[#001233]/40 transition-all duration-500 z-10" />
                <div className="w-full h-full flex items-center justify-center text-slate-300 font-bold uppercase tracking-widest text-xs italic">
                  Image Placeholder
                </div>
                
                {/* Social Links on Hover */}
                <div className="absolute bottom-4 left-4 z-20 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex gap-2">
                  <div className="p-2 bg-[#D4AF37] text-white cursor-pointer"><Linkedin size={16} /></div>
                  <div className="p-2 bg-white text-[#001233] cursor-pointer"><Mail size={16} /></div>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-lg font-black text-[#001233] uppercase leading-tight">{person.name}</h3>
              <p className="text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">{person.role}</p>
              <p className="text-slate-400 text-xs font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {person.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quote from CEO */}
      <motion.div 
        variants={cardVars}
        className="absolute bottom-10 left-6 md:left-24 italic text-slate-300 text-sm hidden md:block"
      >
        "Building Excellence. Defining Legacy."
      </motion.div>
    </motion.div>
  );
}