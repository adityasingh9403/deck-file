import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Zap, MessageSquare } from 'lucide-react';

export default function TestimonialsSlide() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.15 } },
    exit: { opacity: 0 }
  };

  const reviews = [
    {
      name: "KCPL Partner",
      role: "Sports Association",
      text: "SK Prime's vision for grassroots sports is unmatched. Their systematic approach is a benchmark.",
      rating: 5,
      offset: "lg:mt-0"
    },
    {
      name: "Infotech Client",
      role: "Operations Head",
      text: "The EMS portal transformed our data handling. Truly a single-point solution for digital needs.",
      rating: 5,
      offset: "lg:mt-12"
    },
    {
      name: "Verma Infra Associate",
      role: "Industrial Developer",
      text: "Professionalism in every brick. Their commitment to building a legacy infrastructure is unique.",
      rating: 5,
      offset: "lg:mt-24"
    }
  ];

  return (
    <motion.div 
      variants={containerVars}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen w-full bg-white text-[#0F172A] overflow-x-hidden flex flex-col"
    >
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-slate-50/50 -skew-x-6 translate-x-20 pointer-events-none" />

      {/* --- HEADER --- */}
      <div className="px-6 sm:px-12 lg:px-24 pt-20 md:pt-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 mb-6"
        >
          <Zap size={20} className="text-[#FF5722] fill-[#FF5722]" />
          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">Success Stories</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-3xl md:text-5xl font-light text-slate-300 tracking-tight leading-none">Voices of</h2>
            <h1 className="text-6xl sm:text-7xl lg:text-[110px] font-black text-[#0F172A] uppercase leading-[0.8] tracking-tighter mt-2">
              TRUST <span className="text-[#FF5722]">& CO.</span>
            </h1>
          </motion.div>
          
          <div className="bg-[#0F172A] p-4 sm:p-6 rounded-2xl hidden md:flex items-center gap-6">
            <div className="text-[#FF5722]">
              <MessageSquare size={32} strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-white text-[10px] font-black tracking-widest uppercase mb-1">Total Satisfaction</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-[#FF5722] text-[#FF5722]" />)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- ASYMMETRIC TESTIMONIAL GRID --- */}
      <div className="flex-grow px-6 sm:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 h-full">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className={`group relative flex flex-col ${rev.offset}`}
            >
              <div className="bg-white p-8 lg:p-10 border border-slate-100 shadow-sm hover:shadow-2xl hover:border-[#FF5722]/20 transition-all duration-500 rounded-[2rem] relative z-10 group-hover:-translate-y-2">
                <Quote className="text-[#FF5722]/10 absolute top-8 right-8 group-hover:text-[#FF5722]/20 transition-colors" size={60} />
                
                <div className="flex gap-1 mb-6">
                  {[...Array(rev.rating)].map((_, idx) => (
                    <Star key={idx} size={12} className="fill-[#FF5722] text-[#FF5722]" />
                  ))}
                </div>

                <p className="text-[#0F172A] font-bold text-lg lg:text-xl leading-snug tracking-tight mb-8">
                  "{rev.text}"
                </p>

                <div className="mt-auto pt-8 border-t border-slate-50">
                  <h4 className="text-[12px] font-black uppercase tracking-widest text-[#0F172A]">{rev.name}</h4>
                  <span className="text-[10px] font-bold text-[#FF5722] uppercase tracking-tighter opacity-70 block mt-1">{rev.role}</span>
                </div>
              </div>

              {/* Decorative Background Card */}
              <div className="absolute inset-0 bg-slate-50 rounded-[2rem] translate-x-3 translate-y-3 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- BOTTOM STRIP --- */}
      <motion.div 
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        className="w-full bg-[#0F172A] py-6 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-white/5"
      >
        <p className="text-[8px] sm:text-[10px] font-black text-white/40 uppercase tracking-[0.5em] text-center px-4">
          Building Relationships • Defining Legacy • Empowering People
        </p>
      </motion.div>
    </motion.div>
  );
}