import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Zap, ChevronRight, ArrowRight } from 'lucide-react';

export default function GallerySlide() {
  const [selected, setSelected] = useState(null);

  const images = [
    {
      id: 1,
      title: "KCPL Season 1",
      category: "Sports",
      url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 2,
      title: "Hisaab Kitaab App",
      category: "Infotech",
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 3,
      title: "Challengers Trophy",
      category: "Events",
      url: "https://images.unsplash.com/photo-1531415074941-03f6ad8899ac?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 4,
      title: "Shri Gaud Premiere League",
      category: "Events",
      url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: 5,
      title: "Youth Champion Trophy",
      category: "Sports",
      url: "https://images.unsplash.com/photo-1526676023771-7626ff64bbec?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen w-full bg-[#0F172A] text-white overflow-hidden flex flex-col"
    >
      {/* --- TOP HEADER --- */}
      <div className="z-30 px-6 sm:px-12 pt-10 sm:pt-16 pb-6">
        <div className="flex items-center gap-4 mb-4">
          <Zap size={18} className="text-[#FF5722] fill-[#FF5722]" />
          <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-500">Visual Timeline</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-4xl font-light text-slate-500 tracking-tight leading-none">Visual</h2>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white uppercase leading-[0.9] tracking-tighter mt-1">
              OUR <span className="text-[#FF5722]">IMPACT</span>
            </h1>
          </div>
          <p className="max-w-xs text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest leading-relaxed border-l border-[#FF5722] pl-4">
            Capturing the evolution of unorganized sectors into structured excellence.
          </p>
        </div>
      </div>

      {/* --- DYNAMIC GALLERY STRIPS --- */}
      <div className="flex-grow flex flex-col lg:flex-row w-full h-full mt-8 lg:mt-0">
        {images.map((img, i) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ flexGrow: 2 }}
            onClick={() => setSelected(img)}
            className="group relative flex-1 min-h-[150px] lg:min-h-0 overflow-hidden cursor-pointer border-t lg:border-t-0 lg:border-l border-white/5 transition-all duration-700 ease-in-out"
          >
            {/* Image Background */}
            <img
              src={img.url}
              alt={img.title}
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-transparent to-[#0F172A]" />
            <div className="absolute inset-0 bg-[#FF5722]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content Container */}
            <div className="absolute inset-0 p-6 sm:p-10 flex flex-row lg:flex-col justify-between items-end lg:items-start z-10">
              <span className="text-4xl lg:text-6xl font-black text-white/10 group-hover:text-[#FF5722]/40 transition-colors">
                0{i + 1}
              </span>

              <div className="text-right lg:text-left">
                <p className="text-[10px] font-black text-[#FF5722] tracking-[0.3em] uppercase mb-1">
                  {img.category}
                </p>
                <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tighter leading-none group-hover:tracking-normal transition-all">
                  {img.title}
                </h3>

                <div className="hidden lg:flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-[10px] font-black uppercase tracking-widest">View Project</span>
                  <ArrowRight size={14} className="text-[#FF5722]" />
                </div>
              </div>
            </div>

            {/* Expand Icon for Mobile */}
            <div className="absolute top-6 right-6 lg:hidden">
              <Maximize2 size={18} className="text-white/50" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- LIGHTBOX --- */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0F172A]/fb backdrop-blur-xl flex items-center justify-center p-4 sm:p-10"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white hover:rotate-90 transition-transform duration-300">
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
              className="max-w-5xl w-full bg-[#1A2235] p-2 shadow-2xl overflow-hidden border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              <img src={selected.url} className="w-full h-auto max-h-[65vh] object-cover" />
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-[#FF5722] text-[10px] font-black tracking-widest uppercase">{selected.category}</span>
                  <h4 className="text-white font-black uppercase text-2xl sm:text-3xl tracking-tighter">{selected.title}</h4>
                </div>
                <button className="bg-[#FF5722] text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#0F172A] transition-colors">
                  Full Case Study
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}