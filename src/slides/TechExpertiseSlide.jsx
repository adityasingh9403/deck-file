import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Smartphone, Server, ArrowUpRight, Cloud } from 'lucide-react';

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
      title: "Frontend",
      icon: <Code2 />,
      tools: [
        { name: "HTML5", slug: "html5" },
        { name: "CSS3", slug: "css3" },
        { name: "JS", slug: "javascript" },
        { name: "React", slug: "react" },
        { name: "Next.js", slug: "nextjs" }
      ],
      desc: "Modern UIs & immersive webs."
    },
    {
      title: "Backend",
      icon: <Server />,
      tools: [
        { name: "Java", slug: "java" },
        { name: "PHP", slug: "php" },
        { name: "Python", slug: "python" },
        { name: "Node.js", slug: "nodejs" }
      ],
      desc: "Scalable server architectures."
    },
    {
      title: "Mobile",
      icon: <Smartphone />,
      tools: [
        { name: "iOS", slug: "apple" },
        { name: "Android", slug: "android" },
        { name: "R-Native", slug: "react" }
      ],
      desc: "Native & Cross-platform apps."
    },
    {
      title: "Database",
      icon: <Database />,
      tools: [
        { name: "MySQL", slug: "mysql" },
        { name: "Postgres", slug: "postgresql" },
        { name: "MongoDB", slug: "mongodb" }
      ],
      desc: "High-performance data storage."
    },
    {
      title: "Cloud & Ops",
      icon: <Cloud />,
      tools: [
        { name: "AWS", slug: "amazonwebservices" },
        { name: "Azure", slug: "azure" },
        { name: "Docker", slug: "docker" }
      ],
      desc: "Cloud-native infrastructure."
    }
  ];

  const getIconUrl = (slug) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`;

  return (
    <motion.div
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      // Desktop: Fixed Height (h-screen) | Mobile: Min Height
      className="relative min-h-screen lg:h-screen w-full bg-white text-[#0F2F4F] flex flex-col font-sans lg:overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row h-full">
        
        {/* --- LEFT SECTION: BRANDING --- */}
        <div className="w-full lg:w-[28%] p-8 lg:p-12 flex flex-col justify-center bg-slate-50 shrink-0 border-b lg:border-b-0 lg:border-r border-slate-200">
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#0F2F4F] rounded-lg">
              <Cpu size={14} className="text-white" />
            </div>
            <span className="text-[9px] font-black tracking-[0.4em] uppercase text-slate-400">Technical Arsenal</span>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h1 className="text-5xl lg:text-[70px] xl:text-[85px] font-black text-[#0F2F4F] uppercase leading-[0.85] tracking-tighter">
              OUR<br /> <span className="text-[#9E7C2E]">TECH</span><br />STACK
            </h1>
          </motion.div>

          <motion.p variants={fadeInUp} className="mt-6 text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed border-l-2 border-[#9E7C2E] pl-4 max-w-[220px]">
            Future-ready digital ecosystems engineered for global scale.
          </motion.p>
        </div>

        {/* --- RIGHT SECTION: TECH GRID --- */}
        {/* lg:grid-rows-2 ensures it stays in a rectangle on Desktop */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 bg-white">
          {techStack.map((stack, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              // p-6 for compact desktop view
              className="group p-6 lg:p-8 border-b border-r border-slate-100 transition-all duration-500 hover:bg-slate-50 flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center text-[#9E7C2E] group-hover:bg-[#0F2F4F] group-hover:text-white transition-all rounded-xl shadow-sm">
                    {React.cloneElement(stack.icon, { size: 20 })}
                  </div>
                  <ArrowUpRight size={16} className="text-slate-200 group-hover:text-[#9E7C2E]" />
                </div>

                <h3 className="text-xl font-black uppercase tracking-tighter text-[#0F2F4F] mb-1">
                  {stack.title}
                </h3>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-6">
                  {stack.desc}
                </p>

                {/* --- COMPACT TECH TOOLS GRID (2 Columns on Desktop) --- */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {stack.tools.map((tool, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 group/tool"
                    >
                      <div className="w-6 h-6 shrink-0 opacity-80 group-hover/tool:opacity-100 transition-opacity">
                        <img 
                          src={getIconUrl(tool.slug)} 
                          alt={tool.name} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 group-hover/tool:text-[#0F2F4F] truncate">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-50 opacity-40 group-hover:opacity-100 transition-opacity">
                 <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">_ System Ready</span>
              </div>
            </motion.div>
          ))}
          
          {/* FILLER CARD: To complete the 3x2 grid on desktop */}
          <div className="hidden lg:flex p-8 items-center justify-center bg-slate-50/20 border-b border-r border-slate-100">
             <div className="flex flex-col items-center gap-2 opacity-20">
                <div className="w-12 h-[1px] bg-[#0F2F4F]" />
                <span className="text-[9px] font-black uppercase tracking-[0.5em]">SK PRIME</span>
                <div className="w-12 h-[1px] bg-[#0F2F4F]" />
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}