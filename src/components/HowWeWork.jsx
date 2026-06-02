import React from 'react';

const HowWeWork = () => {
  const steps = [
    {
      title: "Discovery & Strategy",
      desc: "We dive deep into your brand, goals, and target audience to craft a bespoke digital strategy aligned with real business outcomes."
    },
    {
      title: "Design & Prototype",
      desc: "From wireframes to high fidelity designs, we create visual systems and interactive prototypes before a single line of code is written."
    },
    {
      title: "Build & Develop",
      desc: "Our engineers bring designs to life with clean, scalable, and performant code tested across all devices and browsers."
    },
    {
      title: "Launch & Grow",
      desc: "Post-launch, we optimize, monitor, and scale ensuring your digital presence keeps performing and growing over time."
    }
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Headline Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-8">
          <div>
            <h2 className="text-[#f1574d] font-unbounded font-bold text-xs uppercase tracking-[0.3em] mb-4">
              How We Work
            </h2>
            <p className="text-slate-950 font-unbounded font-black text-3xl lg:text-6xl leading-[1.1]">
              Simple, transparent, <br />
              built around your goals.
            </p>
          </div>
          <div className="lg:w-1/3">
             <p className="text-slate-500 font-league-spartan text-lg">
               A streamlined, results-driven process designed to transform your ideas into powerful digital experiences.
             </p>
          </div>
        </div>

        {/* Steps Grid - Minimalist Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="text-slate-100 font-unbounded font-black text-6xl mb-8 group-hover:text-[#f1574d]/10 transition-all duration-500">
                0{index + 1}
              </div>
              <div className="h-[2px] w-12 bg-slate-200 mb-8 group-hover:bg-[#f1574d] transition-colors duration-500" />
              <h3 className="text-slate-950 font-unbounded font-bold text-xl mb-4">
                {step.title}
              </h3>
              <p className="text-slate-600 font-league-spartan text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;