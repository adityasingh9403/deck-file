import React from 'react';

export default function SlideIndicators({ total, current, onChange }) {
  return (
    <div className="fixed right-6 md:right-12 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 z-[100]">
      {[...Array(total)].map((_, idx) => (
        <button
          key={idx}
          onClick={() => onChange(idx)}
          className="relative group flex items-center justify-end"
        >
          <span className={`absolute right-8 text-[10px] font-black tracking-widest transition-all duration-500 ${current === idx ? 'opacity-100 translate-x-0 text-[#001233]' : 'opacity-0 translate-x-4 text-slate-300'}`}>
            0{idx + 1}
          </span>
          <div className={`w-[2px] transition-all duration-700 ${current === idx ? 'h-10 bg-[#D4AF37]' : 'h-4 bg-slate-200 group-hover:bg-slate-400'}`} />
        </button>
      ))}
    </div>
  );
}