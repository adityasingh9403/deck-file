import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Trophy, Megaphone, HardHat, Zap, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function OurServicesSlide() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.12 } },
    exit: { opacity: 0 }
  };

  const fadeInUp = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const services = [
    {
      title: "IT & Infotech",
      icon: <Code2 />,
      desc: "Bespoke ERP Solutions, AI-Driven POS Systems & Scalable Cloud Architecture.",
      accent: "from-[#9E7C2E]/10"
    },
    {
      title: "Sports & Leagues",
      icon: <Trophy />,
      desc: "Franchise Management, KCPL Strategic Planning & Athlete Talent Development.",
      accent: "from-[#0F2F4F]/10"
    },
    {
      title: "Event Management",
      icon: <Megaphone />,
      desc: "End-to-End Corporate Summits, Luxury Weddings & Professional Sports Execution.",
      accent: "from-[#0F2F4F]/10"
    },
    {
      title: "Verma Construction",
      icon: <HardHat />,
      desc: "Sustainable Industrial Infrastructure, Modern Urban Planning & Smart Architecture.",
      accent: "from-[#9E7C2E]/10"
    }
  ];

  return (
    <motion.div
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen w-full bg-white text-[#0F2F4F] overflow-x-hidden flex flex-col"
    >
      {/* --- SIDEBAR ACCENT --- */}
      <div className="absolute left-0 top-0 w-1.5 h-full bg-[#9E7C2E] z-30 hidden lg:block" />

      <div className="flex-grow flex flex-col lg:flex-row">

        {/* --- LEFT: BRANDING SECTION --- */}
        <div className="w-full lg:w-[40%] p-8 sm:p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-100 bg-slate-50/30">
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
            <div className="p-2 bg-[#9E7C2E] rounded-lg">
              <Zap size={18} className="text-white fill-white" />
            </div>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">Our Expertise</span>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl sm:text-5xl font-light text-slate-300 tracking-tight leading-none italic">Industrial</h2>
            <h1 className="text-6xl sm:text-8xl lg:text-[110px] font-black text-[#0F2F4F] uppercase leading-[0.8] tracking-tighter mt-4">
              SOLU<span className="text-[#9E7C2E]">TION</span>
            </h1>
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-10 text-slate-400 text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] leading-relaxed max-w-sm border-l-2 border-[#9E7C2E] pl-6">
            We bridge the gap between technology and physical infrastructure with structured excellence.
          </motion.p>
        </div>

        {/* --- RIGHT: INTERACTIVE SERVICE GRID --- */}
        <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              className="group relative p-10 sm:p-14 flex flex-col justify-between bg-white transition-all duration-700 cursor-pointer overflow-hidden"
            >
              {/* Hover Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative z-10 flex justify-between items-start">
                <div className="w-16 h-16 bg-slate-50 flex items-center justify-center text-[#9E7C2E] group-hover:bg-[#9E7C2E] group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700 rounded-2xl shadow-sm">
                  {React.cloneElement(s.icon, { size: 30, strokeWidth: 1.5 })}
                </div>
                <span className="text-5xl font-black text-slate-50 group-hover:text-[#0F2F4F]/5 transition-colors">0{i + 1}</span>
              </div>

              <div className="relative z-10 mt-12 sm:mt-0">
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-[#0F2F4F] mb-3 group-hover:translate-x-2 transition-transform duration-500">
                  {s.title}
                </h3>
                <p className="text-[10px] sm:text-[12px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed max-w-[200px]">
                  {s.desc}
                </p>
              </div>

              {/* Dynamic Bottom Action */}
              <div className="relative z-10 mt-10 flex items-center gap-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="h-[2px] w-8 bg-[#9E7C2E]" />
                <span className="text-[10px] font-black text-[#9E7C2E] uppercase tracking-[0.2em]">Launch Case Study</span>
                <ArrowUpRight size={14} className="text-[#9E7C2E]" />
              </div>

              {/* Interactive Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50/50 -translate-y-12 translate-x-12 rotate-45 group-hover:bg-[#9E7C2E]/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}