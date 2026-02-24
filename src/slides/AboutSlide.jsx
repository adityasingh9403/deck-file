import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Award, Zap, Globe, Rocket, CheckCircle2 } from 'lucide-react';

export default function AboutUsSlide() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0 }
  };

  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const stats = [
    { label: "Business Verticals", value: "04", icon: <Rocket size={16} /> },
    { label: "Market Presence", value: "Global", icon: <Globe size={16} /> },
    { label: "Commitment", value: "100%", icon: <CheckCircle2 size={16} /> }
  ];

  return (
    <motion.div 
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen w-full bg-[#F8FAFC] text-[#0F2F4F] overflow-x-hidden flex flex-col"
    >
      {/* --- TOP STRIP --- */}
      <div className="h-2 bg-[#9E7C2E] w-full" />

      <div className="flex-grow flex flex-col lg:flex-row">
        
        {/* --- LEFT: MISSION & STORY (55%) --- */}
        <div className="w-full lg:w-[55%] p-6 sm:p-12 lg:p-24 flex flex-col justify-center bg-white">
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
            <div className="p-2 bg-[#9E7C2E]/10 rounded-lg">
              <Zap size={18} className="text-[#9E7C2E] fill-[#9E7C2E]" />
            </div>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">About SK Prime Group</span>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl sm:text-5xl font-light text-slate-300 tracking-tight leading-none italic">Defining the</h2>
            <h1 className="text-6xl sm:text-8xl lg:text-[110px] font-black text-[#0F2F4F] uppercase leading-[0.8] tracking-tighter mt-4">
              FUTURE <br /> <span className="text-[#9E7C2E]">LEGACY</span>
            </h1>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 space-y-6 max-w-2xl">
            <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed">
              SK Prime Group is a premier multi-sector conglomerate dedicated to <span className="text-[#0F2F4F] font-bold">Building Excellence</span> across IT, Infrastructure, and Sports Management.
            </p>
            <p className="text-sm text-slate-400 leading-loose uppercase tracking-widest font-bold">
              We specialize in transforming unorganized sectors through disruptive technology and structured corporate governance, ensuring every project leaves a lasting impact on the global stage.
            </p>
          </motion.div>

          {/* Core Values Minimalist Grid */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16 pt-12 border-t border-slate-100">
            <div className="flex gap-4">
              <Target className="text-[#9E7C2E] shrink-0" size={24} />
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest mb-2">Our Vision</h4>
                <p className="text-[11px] font-bold text-slate-400 uppercase leading-snug">Empowering digital landscapes with structured innovation.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="text-[#0F2F4F] shrink-0" size={24} />
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest mb-2">Our Quality</h4>
                <p className="text-[11px] font-bold text-slate-400 uppercase leading-snug">Certified excellence in every business vertical.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- RIGHT: VISUALS & STATS (45%) --- */}
        <div className="w-full lg:w-[45%] relative bg-slate-100 flex flex-col overflow-hidden">
          
          {/* Main Background Image */}
          <div className="h-[400px] lg:h-3/5 w-full relative">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
              alt="Corporate Excellence" 
              className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-transparent to-transparent" />
          </div>

          {/* Stats Cards Section */}
          <div className="flex-grow p-8 lg:p-16 flex flex-col justify-center">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/50 flex flex-col items-center text-center sm:items-start sm:text-left"
                >
                  <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-[#9E7C2E] mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-black text-[#0F2F4F] tracking-tighter">{stat.value}</h3>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Call to Action Bar */}
            <motion.div 
              variants={fadeInUp}
              className="mt-12 p-6 bg-[#0F2F4F] rounded-2xl flex items-center justify-between group cursor-pointer"
            >
              <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">Explore Our History</span>
              <div className="w-10 h-10 bg-[#9E7C2E] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <Award size={18} />
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-32 h-32 border-[20px] border-white/10 rounded-full pointer-events-none" />
        </div>
      </div>

      {/* --- FOOTER STATUS --- */}
      <div className="h-12 bg-white border-t border-slate-100 flex items-center px-8 justify-between">
        <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.5em]">SK Prime Group • Est. 2026</span>
        <div className="flex gap-2">
          <div className="w-1 h-1 bg-[#9E7C2E] rounded-full" />
          <div className="w-1 h-1 bg-slate-200 rounded-full" />
          <div className="w-1 h-1 bg-slate-200 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
}