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
      // h-screen ki jagah min-h-screen use kiya hai taaki mobile pe scroll ho sake
      className="relative min-h-screen w-full bg-white text-[#0F2F4F] flex flex-col"
    >
      
      {/* MAIN CONTENT AREA */}
      <div className="flex-grow flex flex-col md:flex-row w-full md:pt-32 lg:pt-4">
        
        {/* --- IMAGE AREA (Mobile Pe Upar, Desktop Pe Right) --- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full md:w-[45%] h-[250px] sm:h-[350px] md:h-auto relative order-1 md:order-2"
        >
          <div className="absolute inset-0 md:rounded-l-[100px] lg:rounded-l-[180px] overflow-hidden shadow-xl md:shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
              alt="Corporate Excellence"
              className="w-full h-full object-cover grayscale contrast-125 brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 bg-[#0F2F4F]/10 mix-blend-multiply" />
          </div>
        </motion.div>

        {/* --- TEXT CONTENT AREA --- */}
        <div className="w-full md:w-[55%] px-6 py-10 md:py-20 md:pl-20 lg:pl-32 flex flex-col justify-center order-2 md:order-1">
          <motion.div variants={fadeRight} className="space-y-1 md:space-y-2">
            <h2 className="text-xs sm:text-base md:text-xl font-medium text-slate-400 tracking-[0.2em] md:tracking-[0.3em] uppercase">
              Welcome to
            </h2>
            <h1 className="text-4xl sm:text-6xl lg:text-[70px] xl:text-[90px] font-black text-[#9E7C2E] uppercase leading-[0.9] tracking-tighter">
              SK Prime <br />
              <span className="text-[#0F2F4F]">Group</span>
            </h1>
            <h2 className="text-[10px] sm:text-xs md:text-lg font-bold text-[#9E7C2E]/60 tracking-[0.2em] uppercase mt-1">
              Private Limited
            </h2>
          </motion.div>

          <motion.div variants={fadeRight} className="mt-6 md:mt-10 pt-6 border-t border-slate-200 max-w-2xl">
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed text-justify md:text-left">
              <span className="text-[#0F2F4F] font-bold">SK Prime Group</span> is a dynamic organization dedicated to 
              <span className="text-[#9E7C2E] font-semibold"> empowering young graduates</span>. 
              Our primary mission is to guide fresh graduates as they transition from academic life to professional careers. 
              We focus strongly on <span className="text-[#0F2F4F] font-semibold">skill development</span>, providing tools, training, and support needed to enhance employability and prepare for real-world challenges. 
              Through mentorship and development programs, we aim to shape future-ready professionals.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- BOTTOM CONTACT BAR --- */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="w-full grid grid-cols-1 sm:grid-cols-3 bg-[#9E7C2E] mt-auto"
      >
        <ContactItem icon={<Phone size={18} />} text="+918878740101" />
        <ContactItem icon={<Mail size={18} />} text="contact@skprimegroup.in" isCenter />
        <ContactItem icon={<Globe size={18} />} text="www.skprimegroup.com" />
      </motion.div>
    </motion.div>
  );
}

function ContactItem({ icon, text, isCenter = false }) {
  return (
    <div className={`py-4 md:h-24 flex items-center justify-center border-b border-white/10 sm:border-b-0 sm:border-r last:border-0 hover:bg-black/10 transition-all cursor-pointer ${isCenter ? 'bg-black/5' : ''}`}>
      <div className="flex items-center gap-3 text-white px-4">
        <span className="shrink-0">{icon}</span>
        <span className="text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase break-all">{text}</span>
      </div>
    </div>
  );
}