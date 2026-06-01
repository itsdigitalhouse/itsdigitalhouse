import React from 'react';

const SolutionHero = () => {
  const strongGradient = {
    background: 'linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <section className="relative w-full bg-white pt-24 pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 md:px-12 overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-[0.06]">
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-[#ee3444] blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        <span className="inline-block text-[#ee3444] font-bold tracking-[0.3em] text-[10px] sm:text-[11px] uppercase mb-6 border border-[#ee3444]/20 px-4 py-1.5 rounded-full bg-[#ee3444]/5">
          Tailored Digital Systems
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-950 leading-[1.05] md:leading-[1] tracking-tight mb-8">
          Transforming ideas into <br className="hidden sm:block" />
          <span style={strongGradient} className="inline-block pb-3 mb-[-12px] md:pb-4">
            scalable growth
          </span> <br />
          solutions.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
          We engineer custom digital blueprints combining elite design, cutting-edge code, and aggressive marketing architectures to skyrocket your brand identity.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#ee3444] to-[#d24a8a] text-white font-bold rounded-2xl shadow-lg shadow-[#ee3444]/20 hover:scale-[1.02] transition-all duration-300">
            Explore Offerings
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-slate-50 text-slate-800 font-bold rounded-2xl border border-slate-200 hover:bg-slate-100 transition-all duration-300">
            Book Architecture Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionHero;