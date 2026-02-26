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
      // min-h-screen for mobile scrolling, h-screen fixed removed
      className="relative min-h-screen w-full bg-[#F8FAFC] text-[#0F2F4F] flex flex-col overflow-x-hidden"
    >

      {/* --- HEADER SECTION --- */}
      <div className="w-full px-6 md:px-12 lg:px-20 pt-5 md:pt-10 lg:pt-20 pb-10">
        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0F2F4F] uppercase leading-tight tracking-tighter">
              WHO ARE <span className="text-[#9E7C2E]">WE</span>
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xl md:text-2xl lg:text-3xl font-bold tracking-[0.2em] uppercase text-slate-300">
                OUR DIVISIONS
              </span>
            </div>
          </div>

          <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-widest max-w-[300px] border-l-2 border-[#9E7C2E] pl-4">
            Excellence across diverse industries with a unified vision.
          </p>
        </motion.div>
      </div>

      {/* --- CARDS GRID --- */}
      <div className="flex-grow px-6 md:px-12 lg:px-20 pb-20">
        {/* Grid Layout: 
      Mobile: 1 col, 
      Tablet (sm): 2 cols, 
      Desktop/Laptop (lg): 4 cols 
  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {verticals.map((v, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group bg-white shadow-sm border border-slate-100 flex flex-col rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full"
            >
              {/* Image Section: Height fixed for consistency on larger screens */}
              <div className="h-44 sm:h-48 lg:h-44 shrink-0 overflow-hidden relative">
                <img
                  src={v.img}
                  alt={v.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[#0F2F4F]/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute top-4 left-4 bg-white p-2 text-[#9E7C2E] rounded-md shadow-md">
                  {v.icon}
                </div>
              </div>

              {/* Content Section: flex-grow ensures cards stay equal height */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Title: min-height added so multi-line titles don't break alignment */}
                <h3 className="text-lg font-black uppercase tracking-tight text-[#0F2F4F] mb-3 leading-tight group-hover:text-[#9E7C2E] transition-colors min-h-[3rem] flex items-center">
                  {v.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed mb-4 font-medium line-clamp-3">
                  {v.desc}
                </p>

                {/* Services List: Takes up remaining space */}
                <div className="space-y-2 mb-6 flex-grow">
                  {v.services.map((s, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={12} className="text-[#9E7C2E] mt-0.5 shrink-0" />
                      <span className="text-[10px] font-bold uppercase tracking-wide text-slate-500 leading-tight">
                        {s}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Quote: Stays at the bottom because of flex-grow above */}
                <div className="pt-4 border-t border-slate-50 mt-auto">
                  <p className="text-slate-400 text-[10px] leading-relaxed italic line-clamp-3">
                    {v.desc2}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </motion.div>
  );
}