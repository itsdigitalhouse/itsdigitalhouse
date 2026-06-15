import React from 'react';

const SolutionGrid = () => {
  const solutions = [
    { number: "01", title: "Website Development & Design", desc: "Engineering premium, high-performance web experiences using cutting-edge frameworks to give your business a bulletproof online identity.", tags: ["React / Next.js", "UI/UX Architecture", "E-Commerce"] },
    { number: "02", title: "Social Media & Content Creation", desc: "Building, growing, and transformation of your online visibility through structured storytelling, creative assets, and cohesive community building.", tags: ["Content Strategy", "Creative Direction", "Growth"] },
    { number: "03", title: "Branding & Creative Design", desc: "Designing modern visual identity frameworks that make your brand stand out from the noise and instantly connect with your ideal audience.", tags: ["Brand Identity", "Logo Design", "Guidelines"] },
    { number: "04", title: "Digital Marketing & Growth", desc: "Deploying data-driven growth tactics and optimization loops designed specifically to generate leads, enhance visibility, and accelerate revenue.", tags: ["Growth Marketing", "Lead Gen", "SEO"] }
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-50 w-full overflow-hidden relative border-t border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="inline-block text-[#ee3444] font-bold tracking-[0.3em] text-[10px] sm:text-[11px] uppercase mb-4">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 leading-tight">
            Comprehensive digital systems <br className="hidden sm:block" />
            built for long-term scale.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {solutions.map((item, index) => (
            <div key={index} className="group p-8 sm:p-10 bg-white rounded-3xl border border-slate-200/50 flex flex-col justify-between transition-all duration-500 hover:border-slate-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-200/50">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-black text-slate-100 group-hover:text-[#e1b054]/30 transition-colors duration-500">
                    {item.number}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#ee3444]/40 group-hover:bg-[#ee3444]/5 transition-all duration-500">
                    <svg className="w-3 h-3 text-slate-400 group-hover:text-[#ee3444] transition-colors duration-500 transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-950 mb-4 transition-colors duration-300 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-[#e1b054] to-[#ee3444]">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                  {item.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                {item.tags.map((tag, tIndex) => (
                  <span key={tIndex} className="text-[11px] font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-md border border-slate-200/60 group-hover:text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionGrid;