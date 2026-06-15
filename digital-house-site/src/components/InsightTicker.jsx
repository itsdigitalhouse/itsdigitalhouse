import React from 'react';

const InsightTicker = () => {
  const keywords = [
    "NEXT.JS ARCHITECTURE", "UI/UX CORE DESIGN", "B2B LEAD AUTOMATION", 
    "BRAND IDENTITY SYSTEMS", "GROWTH OPTIMIZATION", "STRATEGIC EXECUTION LOOPS"
  ];

  return (
    <section className="w-full bg-white py-6 overflow-hidden border-t border-b border-slate-100 flex items-center relative select-none z-20">
      <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-16 pr-16 text-slate-950 font-black tracking-[0.2em] text-xs sm:text-sm">
          {keywords.map((word, idx) => (
            <div key={`track1-${idx}`} className="flex items-center gap-16">
              <span>{word}</span>
              <span className="w-2 h-2 rounded-full bg-[#ee3444]" />
            </div>
          ))}
        </div>

        <div className="flex items-center gap-16 pr-16 text-slate-950 font-black tracking-[0.2em] text-xs sm:text-sm" aria-hidden="true">
          {keywords.map((word, idx) => (
            <div key={`track2-${idx}`} className="flex items-center gap-16">
              <span>{word}</span>
              <span className="w-2 h-2 rounded-full bg-[#ee3444]" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default InsightTicker;