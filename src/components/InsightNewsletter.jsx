import React from 'react';

const InsightNewsletter = () => {
  return (
    <section className="w-full bg-slate-950 py-24 md:py-32 relative overflow-hidden text-center flex flex-col items-center justify-center border-t border-slate-900 z-20">
      
      {/* Abstract Ambient Mesh Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="absolute -top-40 left-10 w-[500px] h-[500px] rounded-full bg-[#ee3444] blur-[150px]" />
        <div className="absolute -bottom-40 right-10 w-[500px] h-[500px] rounded-full bg-[#e1b054] blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center">
        
        <span className="inline-block text-[#ee3444] font-bold tracking-[0.3em] text-[10px] sm:text-[11px] uppercase mb-4">
          Stay Updated
        </span>
        
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tight mb-6 max-w-3xl leading-tight">
          Subscribe to our digital <br className="hidden sm:block" /> growth letters.
        </h2>
        
        <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed mb-12">
          Get elite tech frameworks, scaling blueprints, and modern design trends delivered straight to your inbox. No spam. Only pure engineering data.
        </p>

        {/* Input Form with Focus Glow Transitions */}
        <form onSubmit={(e) => e.preventDefault()} className="w-full max-w-md mx-auto flex flex-col sm:flex-row items-center gap-3 bg-slate-900 p-2 rounded-2xl border border-slate-800 focus-within:border-[#ee3444]/50 focus-within:shadow-xl focus-within:shadow-[#ee3444]/5 transition-all duration-500">
          <input 
            type="email" 
            placeholder="Enter your corporate email" 
            className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none font-medium"
            required
          />
          <button 
            type="submit"
            className="w-full sm:w-auto shrink-0 px-8 py-3.5 bg-gradient-to-r from-[#ee3444] to-[#d24a8a] text-white font-bold text-sm rounded-xl hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-lg shadow-[#ee3444]/10"
          >
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
};

export default InsightNewsletter;