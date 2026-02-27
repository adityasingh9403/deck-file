import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Smartphone, Server, ArrowUpRight, Zap } from 'lucide-react';

export default function TechExpertiseSlide() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0 }
  };

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const techStack = [
    {
      title: "Frontend Dev",
      icon: <Code2 />,
      tools: ["html5", "css3", "javascript", "react", "nextjs"],
      desc: "Modern UIs & immersive web experiences."
    },
    {
      title: "Backend Systems",
      icon: <Server />,
      tools: ["java", "php", "python", "nodejs"],
      desc: "Robust & scalable server-side architecture."
    },
    {
      title: "Mobile Solutions",
      icon: <Smartphone />,
      tools: ["apple", "android", "react"],
      desc: "Native & cross-platform mobile apps."
    },
    {
      title: "Infrastructure",
      icon: <Database />,
      tools: ["mysql", "postgresql", "amazonwebservices", "azure"],
      desc: "Cloud-native data management."
    }
  ];

  const getIconUrl = (tool) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tool}/${tool}-original.svg`;

  return (
    <motion.div
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen lg:h-screen w-full bg-white text-[#0F2F4F] flex flex-col overflow-x-hidden lg:overflow-hidden font-sans"
    >
      {/* Brand Sidebar (Desktop Only) */}
      <div className="absolute left-0 top-0 w-1.5 h-full bg-[#9E7C2E] z-30 hidden lg:block" />

      <div className="flex-grow flex flex-col lg:flex-row h-full">
        
        {/* --- LEFT SECTION: BRANDING (Responsive Padding) --- */}
        <div className="w-full lg:w-[38%] p-8 md:p-12 lg:p-20 flex flex-col justify-center bg-slate-50/50 shrink-0 border-b lg:border-b-0 lg:border-r border-slate-100 relative">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#0F2F4F] rounded-lg shadow-xl shrink-0">
              <Cpu size={14} className="text-white" />
            </div>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">Technical Arsenal</span>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl md:text-3xl font-light text-slate-300 tracking-tight leading-none italic uppercase">Powering</h2>
            <h1 className="text-5xl md:text-7xl xl:text-[90px] font-black text-[#0F2F4F] uppercase leading-[0.85] tracking-tighter mt-2">
              OUR<br /> <span className="text-[#9E7C2E]">EXPERTISE</span>
            </h1>
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-8 text-slate-500 text-[11px] md:text-xs font-bold uppercase tracking-widest leading-relaxed max-w-xs border-l-2 border-[#9E7C2E] pl-4">
            SK Prime Infotech leverages cutting-edge tech to build future-ready digital ecosystems.
          </motion.p>
        </div>

        {/* --- RIGHT SECTION: TECH GRID --- */}
        <div className="w-full lg:w-[62%] grid grid-cols-1 sm:grid-cols-2 h-full bg-white">
          {techStack.map((stack, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group relative p-8 lg:p-10 flex flex-col justify-between border-b border-r border-slate-100 transition-all duration-500 hover:bg-slate-50/50 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-[#9E7C2E] group-hover:bg-[#0F2F4F] group-hover:text-white transition-all duration-500 rounded-2xl shadow-sm shrink-0">
                    {React.cloneElement(stack.icon, { size: 24 })}
                  </div>
                  <ArrowUpRight size={18} className="text-slate-200 group-hover:text-[#9E7C2E] transition-colors" />
                </div>

                <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-[#0F2F4F] mb-1">
                  {stack.title}
                </h3>
                <p className="text-[10px] md:text-[11px] text-slate-400 font-bold uppercase tracking-widest leading-tight mb-8">
                  {stack.desc}
                </p>

                {/* --- TECH ICONS --- */}
                <div className="flex flex-wrap gap-3 relative z-20">
                  {stack.tools.map((tool, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center p-2 hover:shadow-md transition-all duration-300"
                    >
                      <img 
                        src={getIconUrl(tool)} 
                        alt={tool} 
                        className="w-full h-full object-contain"
                        loading="lazy"
                        onError={(e) => { e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative Background Label (Desktop Only) */}
              <span className="absolute -bottom-4 -right-2 text-7xl xl:text-8xl font-black text-slate-50 group-hover:text-slate-100/30 transition-colors pointer-events-none uppercase italic select-none hidden md:block">
                {stack.title.split(' ')[0]}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}