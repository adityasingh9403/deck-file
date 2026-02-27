import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Trophy, Megaphone, HardHat, Zap, ArrowUpRight } from 'lucide-react';

export default function OurServicesSlide() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.12 } },
    exit: { opacity: 0 }
  };

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
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
      /* min-h-screen allows scrolling on mobile, lg:h-screen locks it on laptop */
      className="relative min-h-screen lg:h-screen w-full bg-white text-[#0F2F4F] flex flex-col overflow-x-hidden"
    >
      {/* --- TOP ACCENT BAR (Mobile only) --- */}
      <div className="h-1.5 bg-[#9E7C2E] w-full shrink-0 lg:hidden" />

      <div className="flex-grow flex flex-col lg:flex-row h-full overflow-y-auto lg:overflow-hidden">

        {/* --- LEFT: BRANDING SECTION (Adjusted Padding) --- */}
        <div className="w-full lg:w-[40%] p-8 sm:p-12 lg:p-20 flex flex-col justify-center bg-slate-50/50 relative border-b lg:border-b-0 lg:border-r border-slate-100">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
            <div className="p-1.5 bg-[#9E7C2E] rounded-md shrink-0">
              <Zap size={14} className="text-white fill-white" />
            </div>
            <span className="text-[9px] font-black tracking-[0.4em] uppercase text-slate-400">Our Expertise</span>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-300 tracking-tight leading-none italic uppercase">Industrial</h2>
            <h1 className="text-5xl sm:text-7xl lg:text-[85px] font-black text-[#0F2F4F] uppercase leading-[0.85] tracking-tighter mt-2">
              SOLU<span className="text-[#9E7C2E]">TION</span>
            </h1>
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-6 text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] leading-relaxed max-w-xs border-l-2 border-[#9E7C2E] pl-6">
            We bridge the gap between technology and physical infrastructure with structured excellence.
          </motion.p>
        </div>

        {/* --- RIGHT: SERVICE GRID (Stack on mobile, Grid on laptop) --- */}
        <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 h-full">
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ backgroundColor: '#F8FAFC' }}
              className="group relative p-8 lg:p-12 flex flex-col justify-between bg-white border-b border-r border-slate-100 transition-all duration-500 cursor-pointer overflow-hidden min-h-[300px] lg:min-h-0"
            >
              {/* Hover Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative z-10 flex justify-between items-start">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-slate-50 flex items-center justify-center text-[#9E7C2E] group-hover:bg-[#9E7C2E] group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700 rounded-2xl shadow-sm shrink-0">
                  {React.cloneElement(s.icon, { size: 24, strokeWidth: 1.5 })}
                </div>
                <span className="text-4xl lg:text-5xl font-black text-slate-100 group-hover:text-[#0F2F4F]/5 transition-colors">0{i + 1}</span>
              </div>

              <div className="relative z-10 mt-6 lg:mt-0">
                <h3 className="text-xl lg:text-2xl font-black uppercase tracking-tighter text-[#0F2F4F] mb-2 group-hover:text-[#9E7C2E] transition-colors">
                  {s.title}
                </h3>
                <p className="text-[10px] lg:text-[11px] text-slate-500 font-bold uppercase tracking-widest leading-relaxed max-w-[240px]">
                  {s.desc}
                </p>
              </div>

              {/* Action Button - Always visible on mobile for UX */}
              <div className="relative z-10 mt-8 flex items-center gap-2 lg:opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2">
                <div className="h-[2px] w-6 bg-[#9E7C2E]" />
                <span className="text-[9px] font-black text-[#9E7C2E] uppercase tracking-widest">Explore More</span>
                <ArrowUpRight size={12} className="text-[#9E7C2E]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}