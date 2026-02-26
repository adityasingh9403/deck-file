import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Smartphone, Server, ArrowUpRight } from 'lucide-react';

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
      title: "Frontend Development",
      icon: <Code2 />,
      tools: ["html5", "css3", "javascript", "react", "nextjs"],
      desc: "Crafting immersive user interfaces with modern frameworks."
    },
    {
      title: "Backend Systems",
      icon: <Server />,
      tools: ["cplusplus", "dotnetcore", "java", "php", "python", "nodejs"],
      desc: "Robust server-side architecture for scalable applications."
    },
    {
      title: "Mobile Solutions",
      icon: <Smartphone />,
      tools: ["apple", "android", "react"],
      desc: "Native and cross-platform mobile experiences."
    },
    {
      title: "Data & Infrastructure",
      icon: <Database />,
      tools: ["mysql", "mongodb", "postgresql", "amazonwebservices", "azure"],
      desc: "Secure cloud hosting and intelligent database management."
    }
  ];

  // Fixed Devicon URL Helper
  const getIconUrl = (tool) => {
    // Special case for .NET
    const toolName = tool === "dot-net" ? "dotnetcore" : tool;
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${toolName}/${toolName}-original.svg`;
  };

  return (
    <motion.div
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen w-full bg-white text-[#0F2F4F] flex flex-col overflow-x-hidden"
    >
      {/* Brand Sidebar Line (Desktop only) */}
      <div className="absolute left-0 top-0 w-1.5 h-full bg-[#9E7C2E] z-30 hidden lg:block" />

      <div className="flex-grow flex flex-col lg:flex-row">
        
        {/* --- LEFT: BRANDING --- */}
        <div className="w-full lg:w-[38%] p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center bg-slate-50/50 shrink-0 border-b lg:border-b-0 lg:border-r border-slate-100">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#0F2F4F] rounded-lg shadow-lg shrink-0">
              <Cpu size={16} className="text-white fill-white" />
            </div>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">Technical Arsenal</span>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl sm:text-3xl font-light text-slate-300 tracking-tight leading-none italic uppercase">Powering</h2>
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black text-[#0F2F4F] uppercase leading-[0.85] tracking-tighter mt-2">
              OUR<br></br><span className="text-[#9E7C2E]">EXPERTISE</span>
            </h1>
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-8 text-slate-500 text-[10px] sm:text-xs font-bold uppercase tracking-widest leading-relaxed max-w-xs border-l-2 border-[#9E7C2E] pl-4">
            Leveraging cutting-edge technologies to build future-ready digital ecosystems.
          </motion.p>
        </div>

        {/* --- RIGHT: TECH GRID --- */}
        <div className="w-full lg:w-[62%] grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 bg-white">
          {techStack.map((stack, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group relative p-8 sm:p-10 lg:p-12 flex flex-col justify-between transition-all duration-500 hover:bg-slate-50/50 overflow-hidden min-h-[320px] sm:min-h-0"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-[#9E7C2E] group-hover:bg-[#0F2F4F] group-hover:text-white transition-all duration-500 rounded-xl shadow-sm shrink-0">
                    {React.cloneElement(stack.icon, { size: 24 })}
                  </div>
                  <ArrowUpRight size={18} className="text-slate-200 group-hover:text-[#9E7C2E] transition-colors" />
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-[#0F2F4F] mb-2">
                  {stack.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-slate-400 font-bold uppercase tracking-widest leading-snug mb-8 max-w-[240px]">
                  {stack.desc}
                </p>

                {/* --- TECH LOGO DISPLAY --- */}
                <div className="flex flex-wrap gap-3 sm:gap-4 relative z-20">
                  {stack.tools.map((tool, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ y: -5 }}
                      className="w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center p-2 sm:p-3 hover:shadow-md transition-all duration-300"
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

              {/* Decorative Background Text (Responsive positioning) */}
              <span className="absolute -bottom-2 -right-2 text-6xl sm:text-7xl lg:text-8xl font-black text-slate-50 group-hover:text-slate-100/50 transition-colors pointer-events-none uppercase italic select-none">
                {stack.title.split(' ')[0]}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}