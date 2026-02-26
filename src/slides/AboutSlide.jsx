import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Rocket, Globe, CheckCircle2, Lightbulb, Users, Trophy } from 'lucide-react';

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
    { name: "IT Services", icon: <Rocket size={18} /> },
    { name: "Sports Development", icon: <Trophy size={18} /> },
    { name: "Event Management", icon: <Users size={18} /> },
    { name: "Construction", icon: <CheckCircle2 size={18} /> }
  ];

  return (
    <motion.div
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen w-full bg-white text-[#0F2F4F] flex flex-col"
    >
      {/* Gold Accent Top Bar */}
      <div className="h-1.5 bg-[#9E7C2E] w-full shrink-0" />

      <div className="flex-grow flex flex-col lg:flex-row">

        {/* --- LEFT SECTION: CONTENT --- */}
        <div className="w-full lg:w-[60%] p-6 md:p-12 lg:p-16 xl:p-20 flex flex-col justify-center">

          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[70px] font-black text-[#0F2F4F] uppercase leading-[0.9] tracking-tighter">
              ABOUT <span className="text-[#9E7C2E]">US</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-slate-600 font-bold max-w-xl leading-snug">
              SK Prime Group is a visionary and multi-sector organization committed to empowering young graduates while delivering excellence across diverse industries. Our foundation is built on the belief that true success comes from combining education with practical skills, industry exposure, and continuous motivation.
            </p>
          </motion.div>

          {/* Detailed Paragraph */}
          <motion.div variants={fadeInUp} className="mt-6 grid gap-6 pt-6 border-t border-slate-100">
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
              We focus on guiding recently graduated students as they step into the professional world by providing skill development programs, mentorship, and real-world opportunities. Alongside youth empowerment, SK Prime Group operates across IT services, sports development, event management, and real estate & construction.
              Our organization stands on innovation, integrity, quality, and long-term value creation.
            </p>
          </motion.div>
          <br></br>
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-[#9E7C2E]"></span>
            <span className="text-[9px] font-black tracking-[0.4em] uppercase text-[#9E7C2E]">The SK Prime Vision</span>
          </motion.div>
          {/* Mission & Vision Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            <motion.div
              variants={fadeInUp}
              className="p-5 bg-[#9E7C2E] text-[var(--color-white)] rounded-xl relative overflow-hidden group"
            >
              <h4 className="text-[var(--color-white)] font-black text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">
                <Target size={12} /> Our Mission
              </h4>
              <p className="text-[11px] text-[var(--color-white)] leading-normal">
                To build a powerful platform that nurtures talent, delivers excellence across industries,
                and creates real-world opportunities for growth, innovation, and long-term success.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="p-5 bg-[#9E7C2E] border border-slate-200 rounded-xl relative overflow-hidden"
            >
              <h4 className="text-[var(--color-white)] font-black text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">
                <Shield size={12} /> Our Vision
              </h4>
              <p className="text-[11px] text-[var(--color-white)] leading-normal">
                To become a nationally recognized multi-sector organization known for integrity,
                innovation, leadership, and transforming young potential into measurable success.
              </p>
            </motion.div>
          </div>
        </div>

        {/* --- RIGHT SECTION: IMAGE & VERTICALS --- */}
        <div className="w-full lg:w-[40%] bg-[#0F2F4F] flex flex-col">

          {/* Image Overlay Section - Reduced Height for Laptop */}
          <div className="h-[250px] lg:h-[45%] w-full relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
              alt="Team"
              className="w-full h-full object-cover mix-blend-luminosity opacity-40 hover:opacity-60 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2F4F] to-transparent" />
            <div className="absolute bottom-4 left-6">
              <span className="text-white/20 text-4xl font-black uppercase tracking-tighter italic">EST. 2026</span>
            </div>
          </div>

          {/* Multi-Sector Verticals List */}
          <div className="flex-grow p-6 lg:p-10 flex flex-col justify-center">
            <h3 className="text-[#9E7C2E] text-[9px] font-black uppercase tracking-[0.3em] mb-6">Business Verticals</h3>
            <div className="grid grid-cols-2 gap-y-6 gap-x-2">
              {verticals.map((item, i) => (
                <motion.div key={i} whileHover={{ x: 3 }} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#9E7C2E]">
                    {item.icon}
                  </div>
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest leading-none">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Bottom Status */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-white text-xl font-black">100%</p>
                <p className="text-[#9E7C2E] text-[7px] font-black uppercase tracking-widest">Commitment</p>
              </div>
              <div className="h-6 w-[1px] bg-white/10" />
              <div>
                <p className="text-white text-xl font-black">GLOBAL</p>
                <p className="text-[#9E7C2E] text-[7px] font-black uppercase tracking-widest">Presence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Footer */}
      <div className="h-8 bg-white border-t border-slate-100 flex items-center px-6 justify-between shrink-0">
        <p className="text-[7px] font-black text-slate-300 uppercase tracking-[0.4em]">SK Prime Group Corporate Profile</p>
        <div className="flex gap-2 items-center">
          <CheckCircle2 size={10} className="text-[#9E7C2E]" />
        </div>
      </div>
    </motion.div>
  );
}