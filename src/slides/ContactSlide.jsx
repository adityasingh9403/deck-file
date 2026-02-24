import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Zap, Instagram, Linkedin, Twitter, Globe } from 'lucide-react';

export default function ContactSlide() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0 }
  };

  const contactItems = [
    { icon: <MapPin size={24} />, title: "Headquarters", text: "Silver Star City, Indore, MP", sub: "Operational Hub" },
    { icon: <Mail size={24} />, title: "Support", text: "contact@skprimegroup.in", sub: "24/7 Digital Desk" },
    { icon: <Phone size={24} />, title: "Direct", text: "+91 91745 050XX", sub: "Strategic Inquiry" }
  ];

  return (
    <motion.div 
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen w-full bg-[#0F2F4F] text-white overflow-hidden flex flex-col"
    >
      {/* --- AMBIENT BACKGROUND GLOW --- */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#9E7C2E]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* --- MAIN CONTENT GRID --- */}
      <div className="flex-grow flex flex-col lg:flex-row">
        
        {/* --- LEFT: BRANDING & CTA --- */}
        <div className="w-full lg:w-1/2 p-6 sm:p-12 lg:p-24 flex flex-col justify-center z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <Zap size={20} className="text-[#9E7C2E] fill-[#9E7C2E]" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-500">Global Presence</span>
          </motion.div>

          <h2 className="text-3xl sm:text-5xl font-light text-slate-500 tracking-tight leading-none">Let's Build</h2>
          <h1 className="text-6xl sm:text-8xl lg:text-[110px] font-black text-white uppercase leading-[0.8] tracking-tighter mt-2">
            YOUR <span className="text-[#9E7C2E]">LEGACY</span>
          </h1>

          <p className="mt-8 text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest leading-relaxed max-w-md">
            Ready to modernize your business vertical? Connect with our strategic team for excellence in execution.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#0F2F4F' }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#9E7C2E] text-white px-8 py-5 font-black uppercase text-[11px] tracking-[0.3em] flex items-center justify-center gap-4 shadow-2xl shadow-orange-500/20 transition-colors"
            >
              Start a Project <ArrowRight size={18} />
            </motion.button>
            
            <div className="flex items-center gap-6 px-4">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <Icon key={i} size={20} className="text-slate-500 hover:text-[#9E7C2E] cursor-pointer transition-colors" />
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT: INTERACTIVE INFO CARDS --- */}
        <div className="w-full lg:w-1/2 bg-white/5 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-0 p-6 sm:p-12 lg:p-24 flex flex-col justify-center gap-4">
          {contactItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ x: 10, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              className="group p-6 sm:p-8 border border-white/5 rounded-3xl flex items-center gap-6 cursor-pointer transition-all duration-500"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/5 rounded-2xl flex items-center justify-center text-[#9E7C2E] group-hover:bg-[#9E7C2E] group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{item.title}</h4>
                  <div className="h-[1px] w-4 bg-white/10" />
                  <span className="text-[9px] font-bold text-[#9E7C2E] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.sub}
                  </span>
                </div>
                <p className="text-lg sm:text-2xl font-black text-white uppercase tracking-tighter group-hover:text-[#9E7C2E] transition-colors">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Website Link Card */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="mt-4 p-8 bg-[#9E7C2E] rounded-3xl flex items-center justify-between group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <Globe className="text-white" size={24} />
              <span className="font-black uppercase tracking-widest text-sm">skprimegroup.in</span>
            </div>
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.div>
        </div>
      </div>

      {/* --- MINIMAL FOOTER --- */}
      <div className="h-20 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 lg:px-24 py-4 gap-4">
        <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em]">
          © 2026 SK Prime Group <span className="text-[#9E7C2E] mx-2">•</span> Building Excellence
        </p>
        <div className="flex gap-8">
          <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
          <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest cursor-pointer hover:text-white transition-colors">Terms of Service</span>
        </div>
      </div>
    </motion.div>
  );
}