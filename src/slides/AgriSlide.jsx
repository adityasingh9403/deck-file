import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Database, Zap, Sprout } from 'lucide-react';

export default function AgriSlide() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.15 } },
    exit: { opacity: 0, scale: 0.95 }
  };

  const fadeUp = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.div 
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative h-screen w-full flex flex-col justify-center px-6 md:px-24 bg-[#0a0f1a] overflow-hidden text-white"
    >
      {/* --- BACKGROUND ACCENT --- */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-900/20 to-transparent pointer-events-none" />
      
      {/* Background Large Outlined Text */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-white/[0.02] uppercase select-none tracking-tighter italic">
        AGRI-TECH
      </h1>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div>
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[1px] bg-emerald-500" />
            <span className="text-[10px] font-black tracking-[0.4em] text-emerald-500 uppercase">Innovation 03</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-5xl md:text-8xl font-black leading-[0.9] mb-8 uppercase italic">
            SMART <br />
            <span className="text-emerald-500 not-italic">AGRICULTURE</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-slate-400 text-lg max-w-md mb-10 font-light">
            Modernizing unorganized farming markets through IoT-driven solutions and real-time data analytics.
          </motion.p>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-8">
            <motion.div variants={fadeUp} className="space-y-2">
              <Zap className="text-emerald-500" size={24} />
              <h4 className="text-xs font-bold uppercase tracking-widest">IoT Enabled</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed">Smart sensors for real-time soil and crop monitoring.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="space-y-2">
              <Database className="text-emerald-500" size={24} />
              <h4 className="text-xs font-bold uppercase tracking-widest">Supply Chain</h4>
              <p className="text-[10px] text-slate-500 leading-relaxed">Systematic execution from farm to digital marketplace.</p>
            </motion.div>
          </div>
        </div>

        {/* Visual Element - Card Style */}
        <motion.div 
          variants={fadeUp}
          className="relative group hidden md:block"
        >
          <div className="absolute -inset-4 bg-emerald-500/20 blur-3xl rounded-full group-hover:bg-emerald-500/30 transition-all duration-700" />
          <div className="relative aspect-[4/5] bg-slate-900 border border-white/10 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8">
              <Sprout className="text-emerald-500 mb-2" size={32} />
              <p className="text-[10px] font-black tracking-[0.5em] uppercase text-white/50">Next-Gen Farming</p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Floating Section Index (Mobile/Desktop) */}
      <div className="absolute bottom-12 left-6 md:left-24 flex items-center gap-6">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest leading-none">Powered by</span>
          <span className="text-sm font-black text-white uppercase tracking-tighter">SK Prime Infotech</span>
        </div>
      </div>
    </motion.div>
  );
}