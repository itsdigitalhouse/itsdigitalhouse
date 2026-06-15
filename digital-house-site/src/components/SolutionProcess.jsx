import React from 'react';

const SolutionProcess = () => {
  const steps = [
    { 
      phase: "Phase 01", 
      title: "Discovery & Blueprint", 
      desc: "We deeply analyze your brand architecture and market opportunities to construct a bulletproof, tailored digital strategy." 
    },
    { 
      phase: "Phase 02", 
      title: "Strategic Design", 
      desc: "Our team maps out high-converting user journeys, premium wireframes, and technology frameworks engineered for scalability." 
    },
    { 
      phase: "Phase 03", 
      title: "Premium Execution", 
      desc: "Engineers and creators bring the blueprint to life using elite design systems, clean code infrastructure, and seamless systems." 
    },
    { 
      phase: "Phase 04", 
      title: "Optimize & Accelerate", 
      desc: "Post-launch, we deploy continuous analytical tracking and marketing optimization loops to guarantee long-term market expansion." 
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        <div className="w-full mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="inline-block text-[#ee3444] font-bold tracking-[0.3em] text-[10px] sm:text-[11px] uppercase mb-4">
              Execution Framework
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 leading-tight">
              Our structured approach to <br className="hidden sm:block" />
              unparalleled digital success.
            </h2>
          </div>
          <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-[#e1b054] to-[#ee3444] shrink-0 md:mb-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="group relative flex flex-col w-full">
              <div className="flex items-center mb-6">
                <span className="text-sm font-bold tracking-widest text-[#ee3444] bg-[#ee3444]/5 border border-[#ee3444]/20 px-3 py-1 rounded-full uppercase">
                  {step.phase}
                </span>
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block flex-1 h-[2px] bg-slate-100 ml-4 group-hover:bg-gradient-to-r group-hover:from-[#ee3444] group-hover:to-slate-100 transition-all duration-500" />
                )}
              </div>
              <h3 className="text-xl font-black text-slate-950 mb-3 group-hover:text-[#ee3444] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionProcess;