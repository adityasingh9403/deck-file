import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Star, Users, ArrowRight, Target } from 'lucide-react';

export default function USPSlide() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0 }
  };

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const usps = [
    { 
      title: "Diversified Expertise", 
      desc: "Providing cross-industry solutions in IT, Sports, and Modern Construction.", 
      icon: <Users />, 
      color: "bg-orange-50" 
    },
    { 
      title: "Visionary Leadership", 
      desc: "Driven by veterans committed to disrupting unorganized business sectors.", 
      icon: <Star />, 
      color: "bg-slate-50" 
    },
    { 
      title: "Innovation First", 
      desc: "Modernizing markets through digital excellence and agile technology.", 
      icon: <Zap />, 
      color: "bg-slate-50" 
    },
    { 
      title: "Legacy Excellence", 
      desc: "Every project is a commitment to our core philosophy: Building Excellence.", 
      icon: <ShieldCheck />, 
      color: "bg-orange-50" 
    }
  ];

  return (
    <motion.div 
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen w-full bg-white text-[#0F172A] overflow-hidden flex flex-col"
    >
      {/* --- CONTENT WRAPPER --- */}
      <div className="flex-grow flex flex-col lg:flex-row">
        
        {/* --- LEFT: HEADING SECTION (40%) --- */}
        <div className="w-full lg:w-[40%] p-8 sm:p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-100">
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
            <div className="p-2 bg-[#FF5722] rounded-lg">
              <Target size={18} className="text-white fill-white" />
            </div>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">Competitive Edge</span>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl font-light text-slate-300 tracking-tight leading-none italic">The Strategic</h2>
            <h1 className="text-6xl sm:text-7xl lg:text-[100px] font-black text-[#0F172A] uppercase leading-[0.8] tracking-tighter mt-4">
              CORE <span className="text-[#FF5722]">USP</span>
            </h1>
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-10 text-slate-400 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] leading-relaxed max-w-sm border-l-2 border-[#FF5722] pl-6">
            Four pillars of excellence that define the SK Prime Group's journey towards a modernized future.
          </motion.p>
        </div>

        {/* --- RIGHT: QUADRANT GRID (60%) --- */}
        <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {usps.map((usp, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              whileHover={{ backgroundColor: "#0F172A" }}
              className={`group relative p-10 sm:p-16 flex flex-col justify-between transition-all duration-700 cursor-default overflow-hidden ${usp.color}/30`}
            >
              <div className="relative z-10">
                {/* Icon Box */}
                <div className="w-16 h-16 bg-white flex items-center justify-center text-[#FF5722] group-hover:bg-[#FF5722] group-hover:text-white transition-all duration-500 rounded-2xl shadow-sm mb-12 group-hover:-translate-y-2">
                  {React.cloneElement(usp.icon, { size: 30, strokeWidth: 1.5 })}
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-[#0F172A] group-hover:text-white mb-4 transition-colors">
                  {usp.title}
                </h3>
                <p className="text-[11px] sm:text-[12px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed group-hover:text-slate-300 transition-colors">
                  {usp.desc}
                </p>
              </div>

              {/* Number Overlay */}
              <span className="absolute bottom-8 right-8 text-6xl font-black text-slate-100/50 group-hover:text-white/5 transition-colors pointer-events-none">
                0{i + 1}
              </span>

              {/* Hover Line Animation */}
              <div className="absolute bottom-0 left-0 h-1 bg-[#FF5722] w-0 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </motion.div>
  );
}