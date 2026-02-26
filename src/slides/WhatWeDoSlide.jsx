import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Trophy, Calendar, Building2, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WhatWeDoSlide() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0 }
  };

  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const verticals = [

    {
      title: "SK Prime Infotech",
      icon: <Monitor size={20} />,

      desc: "SK Prime Infotech is a growing IT startup company focused on delivering smart digital solutions and professional training.",

      services: ["Website Development (Static & Dynamic)", "Web & Mobile Application Development", "Social Media Management", "Banner Designing & Creative Branding", "Training & Development Programs"],

      desc2: "We not only provide IT services but also train and mentor young professionals to develop technical and digital skills that meet modern industry standards.",

      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000"
    },



    {



      title: "SK Prime Sports",



      icon: <Trophy size={20} />,



      desc: "SK Prime Sports is dedicated to promoting sports and physical development through the supply of quality sports equipment.",



      services: ["Supply of Sports Equipment", "Equipment for Schools, Colleges & Institutions", "Support for Sports Clubs & Academies"],



      desc2: "We aim to encourage a healthy and active lifestyle by ensuring access to reliable and professional-grade sports materials.",



      img: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1000"



    },



    {



      title: "SK Prime Events",



      icon: <Calendar size={20} />,



      desc: "SK Prime Events specializes in professional event planning and management.",



      services: ["Sports Event Management", "Corporate Events", "Institutional & Community Programs", "Promotional & Special Events"],



      desc2: "We focus on delivering well-organized, impactful, and memorable events with attention to every detail.",



      img: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=1000"



    },



    {



      title: "Verma Construction",



      icon: <Building2 size={20} />,



      desc: "Verma Properties & Construction is the real estate and infrastructure division of SK Prime Group, dedicated to quality construction and property solutions.",



      services: ["Residential & Commercial Building Construction", "Construction of Offices & Apartment Complexes", "Property Development & Ownership Projects", "Brokering & Selling of Flats and Land", "Real Estate Consultation"],



      desc2: "We assist clients in buying, selling, and developing properties with transparency and professionalism. From constructing buildings to facilitating property transactions, we ensure reliable service and long-term value for our clients.",



      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000"



    }
  ];

  return (
    <motion.div
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative h-screen w-full bg-[#F8FAFC] text-[#0F2F4F] flex flex-col overflow-hidden"
    >
      {/* --- HEADER ---
          pt-32 (Mobile) / pt-40 (Desktop): Taaki fixed logo se niche rahe.
      */}
      <div className="w-full px-6 md:px-12 lg:px-20 pt-32 md:pt-40 pb-6 shrink-0">

        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between gap-2">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#0F2F4F] uppercase leading-none tracking-tighter">
            WHO ARE <span className="text-[#9E7C2E]">WE</span>
          </h1>
          <p className="text-slate-500 text-[9px] md:text-xs font-bold uppercase tracking-widest max-w-[280px] border-l-2 border-[#9E7C2E] pl-3 mb-1">
            Excellence across diverse industries with a unified vision.
          </p>
        </motion.div>
        <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-2">
          <span className="text-[30px] font-black tracking-[0.4em] uppercase text-slate-400">OUR DIVISIONS</span>
        </motion.div>
      </div>

      {/* --- SCROLLABLE CONTENT AREA --- 
          overflow-y-auto ensures cards are visible even if they overflow vertically.
      */}
      <div className="flex-grow px-6 md:px-12 lg:px-20 pb-10 overflow-y-auto custom-scrollbar">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {verticals.map((v, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group bg-white shadow-sm border border-slate-100 flex flex-col rounded-sm overflow-hidden transition-all hover:shadow-md"
            >
              {/* Image Section */}
              <div className="h-32 md:h-36 shrink-0 overflow-hidden relative">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-[#0F2F4F]/10" />
                <div className="absolute top-2 left-2 bg-white p-1.5 text-[#9E7C2E] shadow-sm">
                  {v.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base font-black uppercase tracking-tighter text-[#0F2F4F] mb-2 leading-tight">{v.title}</h3>

                <p className="text-slate-600 text-[9px] leading-snug mb-3 font-medium">
                  {v.desc}
                </p>

                <div className="space-y-1 mb-3">
                  {v.services.map((s, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={10} className="text-[#9E7C2E] mt-0.5 shrink-0" />
                      <span className="text-[8px] font-bold uppercase tracking-tight text-slate-400 leading-tight">{s}</span>
                    </div>
                  ))}
                </div>

                <p className="text-slate-400 text-[8px] leading-relaxed italic border-t border-slate-50 pt-2 mt-auto">
                  {v.desc2}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}