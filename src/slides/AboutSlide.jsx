import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Rocket, Globe, CheckCircle2, Users, Trophy } from 'lucide-react';

export default function AboutUsSlide() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0 }
  };

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const verticals = [
    { name: "IT Services", icon: <Rocket size={16} /> },
    { name: "Sports Development", icon: <Trophy size={16} /> },
    { name: "Event Management", icon: <Users size={16} /> },
    { name: "Construction", icon: <CheckCircle2 size={16} /> }
  ];

  return (
    <motion.div
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      // h-screen hata kar min-h-screen kiya hai taaki mobile pe content na kate
      className="relative min-h-screen w-full bg-white text-[#0F2F4F] flex flex-col overflow-x-hidden"
    >
      {/* Gold Accent Top Bar */}
      <div className="h-1.5 bg-[#9E7C2E] w-full shrink-0" />

      <div className="flex-grow flex flex-col lg:flex-row">

        {/* --- LEFT SECTION: CONTENT --- */}
        <div className="w-full lg:w-[60%] p-6 sm:p-10 md:p-16 lg:p-20 flex flex-col justify-center">

          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[70px] font-black text-[#0F2F4F] uppercase leading-[0.9] tracking-tighter">
              ABOUT <span className="text-[#9E7C2E]">US</span>
            </h1>
            <p className="mt-6 text-sm sm:text-lg text-slate-600 font-bold max-w-xl leading-snug">
              SK Prime Group is a visionary and multi-sector organization committed to empowering young graduates while delivering excellence across diverse industries. Our foundation is built on the belief that true success comes from combining education with practical skills, industry exposure, and continuous motivation.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-6 pt-6 border-t border-slate-100">
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl">
              We focus on guiding recently graduated students as they step into the professional world by providing skill development programs, mentorship, and real-world opportunities. Alongside youth empowerment, SK Prime Group operates across IT services, sports development, event management, and real estate & construction.
              Our organization stands on innovation, integrity, quality, and long-term value creation.
            </p>
          </motion.div>

          {/* Vision Heading */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3 my-6">
            <span className="h-[1px] w-8 bg-[#9E7C2E]"></span>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-[#9E7C2E]">The SK Prime Mission & Vision</span>
          </motion.div>

          {/* Mission & Vision Cards - Mobile Pe Stack (1 col), Tablet+ Pe 2 col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              variants={fadeInUp}
              className="p-5 bg-[#9E7C2E] text-white rounded-xl shadow-lg"
            >
              <h4 className="font-black text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">
                <Target size={14} /> Our Mission
              </h4>
              <p className="text-[11px] leading-normal opacity-90">
                To build a powerful platform that nurtures talent, delivers excellence, and creates real-world opportunities for growth and innovation.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-5 bg-[#9E7C2E] text-white rounded-xl shadow-lg"
            >
              <h4 className="font-black text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">
                <Shield size={14} /> Our Vision
              </h4>
              <p className="text-[11px] leading-normal opacity-90">
                To become a nationally recognized organization known for leadership and transforming young potential into measurable success.
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- RIGHT SECTION: IMAGE & VERTICALS --- */}
        <div className="w-full lg:w-[40%] bg-[#0F2F4F] flex flex-col">

          {/* Image Overlay Section - Responsive Height */}
          <div className="h-[200px] sm:h-[300px] lg:h-[40%] w-full relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
              alt="Team"
              className="w-full h-full object-cover mix-blend-luminosity opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2F4F] to-transparent" />
            <div className="absolute bottom-4 left-6">
              <span className="text-white/20 text-3xl sm:text-4xl font-black uppercase tracking-tighter italic">EST. 2026</span>
            </div>
          </div>

          {/* Multi-Sector Verticals List */}
          <div className="p-6 sm:p-10 flex flex-col justify-center flex-grow">
            <h3 className="text-[#9E7C2E] text-[10px] font-black uppercase tracking-[0.3em] mb-6">Business Verticals</h3>

            {/* Grid 1 Column on very small, 2 Columns on others */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-y-4 gap-x-4">
              {verticals.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <div className="w-8 h-8 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#9E7C2E] group-hover:bg-[#9E7C2E] group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <span className="text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-widest">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}