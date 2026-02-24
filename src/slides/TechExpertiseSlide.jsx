import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Globe, Layers, Smartphone, Zap, ArrowRight } from 'lucide-react';

export default function TechExpertiseSlide() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0 }
  };

  const nodeAnim = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const techStack = [
    {
      name: "Frontend Architecture",
      tools: "React 19, Next.js, Tailwind CSS",
      icon: <Code2 />,
      side: "left"
    },
    {
      name: "Robust Backend",
      tools: "Node.js (NestJS), Go, Python",
      icon: <Database />,
      side: "right"
    },
    {
      name: "Cross-Platform Mobile",
      tools: "React Native, Flutter, Expo",
      icon: <Smartphone />,
      side: "left"
    },
    {
      name: "Cloud & DevOps",
      tools: "AWS (EC2/S3), Docker, Kubernetes",
      icon: <Globe />,
      side: "right"
    },
    {
      name: "IoT & Smart Hardware",
      tools: "POS Integration, RFID, Sensor Tech",
      icon: <Cpu />,
      side: "left"
    },
    {
      name: "Enterprise Systems",
      tools: "Microservices, GraphQL, SAP/ERP",
      icon: <Layers />,
      side: "right"
    },
  ];

  return (
    <motion.div
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen w-full bg-[#0F2F4F] text-white overflow-hidden flex flex-col"
    >
      {/* --- TECH GRID BACKGROUND --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'linear-gradient(#9E7C2E 1px, transparent 1px), linear-gradient(90deg, #9E7C2E 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2F4F] via-transparent to-[#0F2F4F]" />
      </div>

      {/* --- TOP BRANDING --- */}
      <div className="p-8 lg:p-12 z-20 flex items-center gap-4">
        <div className="p-2 bg-[#9E7C2E]/10 rounded-lg border border-[#9E7C2E]/20">
          <Zap size={18} className="text-[#9E7C2E] fill-[#9E7C2E]" />
        </div>
        <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-500">Technological Foundation</span>
      </div>

      <div className="flex-grow flex items-center justify-center px-6">
        <div className="w-full max-w-7xl">

          {/* --- RESPONSIVE GRID LAYOUT --- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 items-center">

            {/* Left Column (Laptop) */}
            <div className="order-2 lg:order-1 space-y-4">
              {techStack.filter(t => t.side === "left").map((tech, i) => (
                <TechNode key={i} tech={tech} anim={nodeAnim} align="right" />
              ))}
            </div>

            {/* Center: Typography */}
            <div className="order-1 lg:order-2 text-center py-12 lg:py-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative inline-block"
              >
                <h2 className="text-2xl md:text-3xl font-light text-slate-500 tracking-tight leading-none italic">Modern</h2>
                <h1 className="text-7xl md:text-[100px] lg:text-[140px] font-black text-white uppercase leading-[0.8] tracking-tighter mt-4">
                  TECH<br /><span className="text-[#9E7C2E]">STACK</span>
                </h1>

                {/* Orbital Rings (Decor) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[#9E7C2E]/5 rounded-full -z-10 animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-[#9E7C2E]/5 rounded-full -z-10" />
              </motion.div>
            </div>

            {/* Right Column (Laptop) */}
            <div className="order-3 space-y-4">
              {techStack.filter(t => t.side === "right").map((tech, i) => (
                <TechNode key={i} tech={tech} anim={nodeAnim} align="left" />
              ))}
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </motion.div>
  );
}

// Sub-component for better organization
function TechNode({ tech, anim, align }) {
  return (
    <motion.div variants={anim} className={`group flex flex-col ${align === 'right' ? 'lg:items-end' : 'lg:items-start'}`}>
      <div className={`
        flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md
        group-hover:bg-[#9E7C2E]/5 group-hover:border-[#9E7C2E]/40 transition-all duration-500 w-full max-w-sm
        ${align === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'}
      `}>
        <div className="flex-grow">
          <h3 className={`text-[11px] font-black uppercase tracking-widest text-white mb-1 ${align === 'right' ? 'lg:text-right' : 'lg:text-left'}`}>
            {tech.name}
          </h3>
          <p className={`text-[10px] text-slate-500 font-bold uppercase tracking-tighter ${align === 'right' ? 'lg:text-right' : 'lg:text-left'}`}>
            {tech.tools}
          </p>
        </div>
        <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl text-[#9E7C2E] group-hover:bg-[#9E7C2E] group-hover:text-white transition-all duration-500 group-hover:rotate-12">
          {React.cloneElement(tech.icon, { size: 22 })}
        </div>
      </div>
    </motion.div>
  );
}