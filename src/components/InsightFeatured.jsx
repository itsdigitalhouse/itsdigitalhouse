import React from 'react';

const InsightFeatured = () => {
  return (
    <section className="py-20 bg-white w-full overflow-hidden px-4 sm:px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#ee3444] animate-ping" />
          <span className="text-xs font-black tracking-widest text-slate-950 uppercase">
            Featured Analysis
          </span>
        </div>

        {/* Dynamic Scale Card */}
        <div className="group w-full rounded-[2rem] bg-slate-50 border border-slate-200/50 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 transition-all duration-700 hover:bg-white hover:border-slate-300 hover:shadow-2xl hover:shadow-slate-200/50">
          
          <div className="max-w-2xl w-full">
            <div className="flex items-center gap-4 mb-4 text-xs font-medium text-slate-400">
              <span>Case Study</span>
              <span>•</span>
              <span>June 2026</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-950 leading-tight mb-6 transition-colors duration-300 group-hover:text-[#ee3444]">
              Engineering Scalable Systems: How We Transformed Digital Presence for Modern Enterprises.
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              A comprehensive breakdown of how structuring customized UI/UX pipelines, next-generation frameworks, and data-driven marketing loops accelerated client conversion rates by over 120%.
            </p>

            <div className="flex items-center gap-2 text-slate-950 font-black text-sm group-hover:text-[#ee3444] transition-colors duration-300">
              <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#ee3444] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                Read Full Case Study
              </span>
              <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>

          {/* Interactive Numeric Bubble */}
          <div className="shrink-0 bg-white border border-slate-200 rounded-3xl p-8 shadow-xl shadow-slate-100/80 flex flex-col justify-center items-center text-center w-full lg:w-64 transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
            <span className="text-5xl font-black text-slate-950 mb-2 tracking-tight transition-colors duration-500 group-hover:text-[#ee3444]">
              120%
            </span>
            <span className="text-xs font-bold text-[#e1b054] uppercase tracking-wider mb-4">Growth Boost</span>
            <div className="w-full h-[1px] bg-slate-100 mb-4" />
            <p className="text-[11px] text-slate-400 font-medium leading-normal">
              Average performance lift monitored across custom software frameworks.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default InsightFeatured;