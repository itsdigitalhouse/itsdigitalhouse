import React from 'react';

const InsightHero = () => {
  const strongGradient = {
    background: 'linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <section className="relative w-full bg-white pt-24 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 md:px-12 overflow-hidden flex flex-col items-center justify-center text-center">
      
      {/* Decorative Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-[0.05]">
        <div className="absolute -top-40 right-1/4 w-[400px] h-[400px] rounded-full bg-[#75b0d2] blur-[130px]" />
        <div className="absolute -top-20 left-1/3 w-[300px] h-[300px] rounded-full bg-[#ee3444] blur-[110px]" />
      </div>

      {/* Main Content with Entry Animation */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center animate-fade-up">
        
        <span className="inline-block text-[#ee3444] font-bold tracking-[0.3em] text-[10px] sm:text-[11px] uppercase mb-6 border border-[#ee3444]/20 px-4 py-1.5 rounded-full">
          Knowledge & Perspectives
        </span>

        <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-slate-950 leading-[1.1] tracking-tight mb-6">
          Thoughts, trends, and <br />
          <span style={strongGradient} className="inline-block pb-2">
            digital industry
          </span> insights.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-md mx-auto leading-relaxed">
          Stay ahead of the curve. Explore our latest articles, system updates, strategy breakdowns, and architectural guides engineered to accelerate modern businesses.
        </p>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-100 to-transparent" />

      {/* Custom Global Animation Injector */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default InsightHero;