import React from 'react';

const AgencyVision = () => {
  // Line-height aur clipping ka masla hal karne ke liye vertical padding add ki hai
  const progressGradientStyle = {
    background: 'linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <>
      {/* Purpose Section - Fully Responsive */}
      <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-slate-50 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-5 w-full">
            <h3 className="text-[#ee3444] font-bold tracking-[0.2em] text-xs sm:text-sm uppercase mb-4">
              Our Purpose
            </h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 mb-6 md:mb-8 leading-tight">
              Building Meaningful <br className="hidden sm:block"/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1b054] via-[#ee3444] to-[#7361a7]">
                Digital Experiences.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              We are a team of creators, developers, and marketers dedicated to building a future where every business can thrive online.
            </p>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-7 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              { title: "Innovation", desc: "Pushing boundaries with modern tech." },
              { title: "Transparency", desc: "Honest feedback and timely delivery." },
              { title: "Strategy", desc: "Data-driven decisions for growth." },
              { title: "Quality", desc: "Focusing on premium results." }
            ].map((item, index) => (
              <div key={index} className="p-5 sm:p-6 bg-white rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md">
                <h4 className="text-lg sm:text-xl font-bold mb-2 text-slate-950">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Collective Strength Grid Section - Pro Responsive Layout */}
      <section className="py-20 md:py-32 bg-white w-full overflow-hidden">
        {/* Header Section */}
        <div className="w-full px-4 sm:px-6 md:px-12 mb-12 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8">
          <div>
            <span className="inline-block text-[#ee3444] font-bold tracking-[0.3em] text-[10px] sm:text-[11px] uppercase mb-3 md:mb-4">
              Our Collective Strength
            </span>
            {/* Added leading-normal to give safe space vertically */}
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-950 leading-normal md:leading-[1.1]">
              Achieving sustainable<br />
              {/* pb-3 aur mb-[-12px] se 'g' ko extra saans lene ki jagah mil gayi bina layout kharab kiye */}
              <span style={progressGradientStyle} className="inline-block pb-3 mb-[-12px]">
                progress through
              </span><br />
              <span className="text-slate-950">collaborative</span>
            </h2>
          </div>
          <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-[#e1b054] to-[#ee3444] md:mb-4 shrink-0" />
        </div>
        
        {/* Premium 5-Tile Responsive Grid */}
        <div className="w-full px-4 sm:px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px] sm:auto-rows-[320px] md:auto-rows-[350px]">
          
          {/* Tile 1: Tall */}
          <div className="sm:col-span-2 lg:col-span-1 lg:row-span-2 group rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Team Strategy Meeting" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          {/* Tile 2: Wide */}
          <div className="sm:col-span-2 group rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=1200&q=80" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Creative Agency Workspace" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          {/* Tile 3: Square */}
          <div className="sm:col-span-1 group rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Developers Collaboration" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          {/* Tile 4: Square */}
          <div className="sm:col-span-1 group rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Brainstorming Session" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          {/* Tile 5: Wide */}
          <div className="sm:col-span-2 group rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt="Tech Modern Design" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

        </div>
      </section>
    </>
  );
};

export default AgencyVision;