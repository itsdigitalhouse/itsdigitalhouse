import React from 'react';

const SolutionCTA = () => {
  const gradientBg = {
    background: 'linear-gradient(135deg, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)',
  };

  return (
    <section className="py-20 md:py-28 bg-white w-full overflow-hidden px-4 sm:px-6 md:px-12">
      <div style={gradientBg} className="max-w-7xl mx-auto rounded-[2.5rem] p-8 sm:p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-[#ee3444]/20 text-center flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block text-white font-bold tracking-[0.3em] text-[10px] sm:text-[11px] uppercase mb-6 bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            Let's Build Something Great
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
            Ready to completely scale your online presence?
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
            Take the leap today. Our team is fully equipped to deploy the custom architectures, elite designs, and growth engines your brand needs to dominate.
          </p>
          <div className="w-full flex justify-center">
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-slate-950 font-black text-base rounded-2xl shadow-xl hover:bg-slate-50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300">
              Get Started Now
            </button>
          </div>
        </div>

        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5 blur-xl pointer-events-none" />
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-black/5 blur-xl pointer-events-none" />
      </div>
    </section>
  );
};

export default SolutionCTA;