import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Globe } from 'lucide-react';

export default function HeroSlide() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
    exit: { opacity: 0 }
  };

  const fadeRight = {
    initial: { x: -30, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.div
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative h-screen w-full bg-white text-[#0F2F4F] overflow-hidden flex flex-col justify-between"
    >
      {/* MAIN CONTENT AREA
          - md:pt-44: Yeh padding fixed logo ke niche safe gap banati hai.
          - items-stretch: Dono sides (text aur image) ko barabar height deta hai.
      */}
      <div className="flex-grow flex flex-col md:flex-row w-full pt-44 md:pt-48 items-stretch overflow-hidden">

        {/* --- LEFT CONTENT AREA (Safe from Fixed Logo) --- */}
        <div className="w-full md:w-[55%] px-8 md:pl-24 lg:pl-32 flex flex-col justify-center order-2 md:order-1 pb-10 md:pb-20">
          <motion.div variants={fadeRight} className="space-y-1 md:space-y-2">
            <h2 className="text-sm sm:text-lg md:text-xl font-medium text-slate-400 tracking-[0.3em] uppercase">
              Welcome to
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-[65px] xl:text-[85px] font-black text-[#9E7C2E] uppercase leading-[0.85] tracking-tighter">
              SK Prime <br />
              <span className="text-[#0F2F4F]">Group</span>
            </h1>
            <h2 className="text-xs sm:text-sm md:text-lg font-bold text-[#9E7C2E]/60 tracking-[0.2em] uppercase mt-2">
              Private Limited
            </h2>
          </motion.div>

          {/* Full Paragraph with dynamic highlights */}
          <motion.div variants={fadeRight} className="mt-6 md:mt-10 pt-6 border-t border-slate-200 max-w-2xl">
            <p className="text-slate-500 text-sm md:text-base lg:text-lg leading-relaxed text-justify md:text-left">
              <span className="text-[#0F2F4F] font-bold">SK Prime Group</span> is a dynamic organization dedicated to 
              <span className="text-[#9E7C2E] font-semibold"> empowering young graduates</span> who have recently completed their studies. 
              Our primary mission is to motivate and guide fresh graduates as they transition from academic life to professional careers. 
              We focus strongly on <span className="text-[#0F2F4F] font-semibold">skill development</span>, providing the tools, training, and support needed to enhance employability, build confidence, and prepare individuals for real-world challenges. 
              Through mentorship, workshops, and development programs, <span className="text-[#0F2F4F] font-bold">SK Prime Group</span> aims to shape capable, skilled, and future-ready professionals.
            </p>
          </motion.div>
        </div>

        {/* --- RIGHT IMAGE AREA --- */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full md:w-[45%] h-[20vh] md:h-full relative order-1 md:order-2"
        >
          {/* Decorative Background Shape for Premium Look */}
          <div className="absolute inset-0 bg-slate-50 md:rounded-l-[100px] lg:rounded-l-[180px] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
              alt="Corporate Excellence"
              className="w-full h-full object-cover grayscale contrast-125 brightness-110"
            />
            {/* Color Overlay to match brand */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 bg-[#0F2F4F]/10 mix-blend-multiply" />
          </div>
        </motion.div>
      </div>

      {/* --- BOTTOM CONTACT BAR (Always at bottom) --- */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="w-full grid grid-cols-1 sm:grid-cols-3 bg-[#9E7C2E] relative z-20"
      >
        <ContactItem icon={<Phone size={20} />} text="+91 91745 050XX" />
        <ContactItem icon={<Mail size={20} />} text="contact@skprimegroup.in" isCenter />
        <ContactItem icon={<Globe size={20} />} text="www.skprimegroup.com" />
      </motion.div>
    </motion.div>
  );
}

function ContactItem({ icon, text, isCenter = false }) {
  return (
    <div className={`h-14 md:h-24 flex items-center justify-center border-b sm:border-b-0 sm:border-r border-white/10 hover:bg-black/20 transition-all cursor-pointer group ${isCenter ? 'bg-black/5' : ''}`}>
      <div className="flex items-center gap-3 text-white">
        <span className="group-hover:scale-110 transition-transform">{icon}</span>
        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">{text}</span>
      </div>
    </div>
  );
}