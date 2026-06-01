import React from 'react';

const CompanyCore = () => {
  const coreData = [
    {
      id: 1,
      title: "Who We Are",
      tagline: "Visionaries & Digital Architects",
      desc: "We are a team of visionary designers, developers, and digital strategists dedicated to transforming online identities. We combine high-end technology with creative precision to help businesses build, grow, and scale their global footprint seamlessly.",
      accentColor: "#e1b054",
    },
    {
      id: 2,
      title: "Our Mission",
      tagline: "Engineering Future Scale",
      desc: "To empower modern enterprises through tailored digital solutions that accelerate visibility, optimize operational efficiency, and drive impactful, long-term market growth in an ever-evolving tech landscape.",
      accentColor: "#d24a8a",
    },
    {
      id: 3,
      title: "Our Vision",
      tagline: "Setting Global Benchmarks",
      desc: "To become a benchmark digital agency recognized worldwide for pioneering innovation, absolute engineering excellence, and crafting meaningful experiences that robustly connect brands with their audiences.",
      accentColor: "#ee3444",
    }
  ];

  return (
    // Section dynamically scales height based on device breakpoint
    <section className="w-full min-h-screen lg:h-screen bg-white text-slate-950 relative border-b border-slate-100 overflow-hidden flex items-center">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-0">
        
        {/* Main Flexible Stack */}
        <div className="flex flex-col h-full justify-center">

          {/* BOTTOM SECTION: Adaptive Grid Engine for All Canvases */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6 xl:gap-8 items-stretch">
            {coreData.map((item) => (
              <div 
                key={item.id} 
                className="group relative w-full p-6 sm:p-8 xl:p-10 bg-slate-50/60 backdrop-blur-md rounded-[24px] sm:rounded-[32px] border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden transform-gpuSubtle will-change-transform min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:h-full lg:py-10 xl:py-12"
              >
                
                {/* Responsive Laser Line Edge-Tracer */}
                <span 
                  className="absolute bottom-0 left-0 w-full h-[4px] md:h-[5px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out pointer-events-none z-20"
                  style={{ backgroundColor: item.accentColor }}
                ></span>

                {/* Content Box with dynamic text spacing */}
                <div className="space-y-3 sm:space-y-4 relative z-10">
                  <div className="space-y-1.5">
                    <span className="font-redhat-display text-[9px] sm:text-[10px] font-bold tracking-widest text-slate-400 uppercase block">
                      {item.tagline}
                    </span>
                    <div 
                      className="w-6 h-[1px] opacity-40 group-hover:w-16 transition-all duration-500"
                      style={{ backgroundColor: item.accentColor }}
                    ></div>
                  </div>

                  <h3 className="font-redhat-display text-xl sm:text-2xl font-black text-slate-950 uppercase tracking-tight">
                    {item.title}
                  </h3>

                  <p className="font-redhat-text text-xs sm:text-sm xl:text-base text-slate-600 leading-relaxed font-medium pt-0.5">
                    {item.desc}
                  </p>
                </div>

                {/* Card Canvas Footer Metadata */}
                <div className="relative z-10 font-redhat-display text-2xl sm:text-3xl xl:text-4xl font-black text-slate-200 tracking-tighter transition-colors duration-300 pt-6 sm:pt-8 flex justify-between items-end">
                  <span 
                    className="text-[10px] sm:text-xs font-bold font-redhat-display tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ color: item.accentColor }}
                  >
                    Explore Core &rarr;
                  </span>
                  <span style={{ '--hover-idx': item.accentColor }}>
                    <span className="group-hover:text-[var(--hover-idx)]">0{item.id}.</span>
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyCore;