import React from 'react';

const CompanyCore = () => {
  const coreData = [
    {
      id: 1,
      title: "Who We Are",
      tagline: "Visionaries & Digital Architects",
      desc: "We are a team of visionary designers, developers, and digital strategists dedicated to transforming online identities. We combine high end technology with creative precision to help businesses build, grow, and scale their global footprint seamlessly.",
      accentColor: "#e1b054",
    },
    {
      id: 2,
      title: "Our Mission",
      tagline: "Engineering Future Scale",
      desc: "To empower modern enterprises through tailored digital solutions that accelerate visibility, optimize operational efficiency, and drive impactful, long term market growth in an ever-evolving tech landscape.",
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
    <section id="next-section" className="w-full min-h-screen bg-white text-slate-950 relative border-b border-slate-100 flex items-center py-20">
      <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
        
        {/* Adjusted Font Sizes */}
        <div className="mb-20 max-w-5xl w-full">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 uppercase tracking-tighter leading-[0.9] mb-8">
            A HOUSE OF ENDLESS <br />
            <span 
              className="text-transparent bg-clip-text inline-block"
              style={{
                backgroundImage: `linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)`
              }}
            >
              DIGITAL POSSIBILITIES
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
            We are a full-service creative agency combining strategy, design, and technology to scale your online presence and deliver results that matter. Our team of visionary designers, developers, and digital strategists is dedicated to transforming online identities. We combine high-end technology with creative precision to help businesses build, grow, and scale their global footprint seamlessly.
          </p>
        </div>

        {/* Adaptive Grid Engine */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {coreData.map((item) => (
            <div 
              key={item.id} 
              className="group relative w-full p-8 bg-slate-50/60 backdrop-blur-md rounded-[32px] border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden min-h-[340px]"
            >
              <span 
                className="absolute bottom-0 left-0 w-full h-[5px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-20"
                style={{ backgroundColor: item.accentColor }}
              ></span>

              <div className="space-y-3 relative z-10">
                <div className="space-y-1.5 flex flex-col items-center">
                  <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase block">{item.tagline}</span>
                  <div className="w-6 h-[1px] opacity-40 group-hover:w-16 transition-all duration-500" style={{ backgroundColor: item.accentColor }}></div>
                </div>
                <h3 className="text-xl font-black text-slate-950 uppercase tracking-tight">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </div>

              <div className="relative z-10 text-3xl font-black text-slate-200 tracking-tighter pt-6 flex justify-between items-end">
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ color: item.accentColor }}>
                  Explore Core &rarr;
                </span>
                <span style={{ '--hover-idx': item.accentColor }}>
                  <span className="group-hover:text-[var(--hover-idx)]">0{item.id}.</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== CENTERED ACTION BUTTON WITH VERTICAL FILL ANIMATION ==================== */}
        <div className="mt-16 flex justify-center w-full relative z-30">
          <button 
            onClick={() => console.log('Action Triggered')}
            className="group relative px-8 py-4 bg-slate-950 text-white rounded-full font-black uppercase text-xs tracking-[0.2em] overflow-hidden shadow-lg hover:shadow-xl active:scale-95 transition-transform duration-200 cursor-pointer outline-none"
          >
            {/* Bottom-to-Top Slide Fill Layer */}
            <span 
              className="absolute bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0"
              style={{
                backgroundImage: `linear-gradient(to right, #e1b054, #d24a8a, #ee3444)`
              }}
            ></span>
            
            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-2">
              <span>Let's Build Together</span>
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default CompanyCore;