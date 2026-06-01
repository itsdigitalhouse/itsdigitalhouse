import React from 'react';

const InsightAuthor = () => {
  const authors = [
    {
      name: "Jamshed",
      role: "Founder & Lead Architect",
      bio: "Specializing in premium UI/UX animation, Next.js setups, and scaling full-stack digital systems for modern enterprises.",
      avatar: "J" // Yahan aap apni image asset ka path bhi de sakte hain
    },
    {
      name: "Strategy Team",
      role: "Growth & Core Creators",
      bio: "A cohesive unit of elite designers, marketers, and technical content creators delivering high-converting data loops.",
      avatar: "IDH"
    }
  ];

  return (
    <section className="py-24 bg-white w-full overflow-hidden px-4 sm:px-6 md:px-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Typography Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="inline-block text-[#ee3444] font-bold tracking-[0.3em] text-[10px] sm:text-[11px] uppercase mb-4">
            Behind The Perspectives
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 leading-tight">
            Meet the core minds driving <br />
            our digital execution.
          </h2>
        </div>

        {/* Authors Horizontal/Vertical Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {authors.map((author, index) => (
            <div 
              key={index} 
              className="group p-8 bg-slate-50 rounded-3xl border border-slate-200/60 flex flex-col sm:flex-row items-start gap-6 transition-all duration-500 hover:border-slate-300 hover:bg-white hover:shadow-2xl hover:shadow-slate-100"
            >
              
              {/* Minimalist Corporate Avatar Placeholder */}
              <div className="w-16 h-16 rounded-2xl bg-slate-950 flex items-center justify-center text-white font-black text-xl shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#e1b054] group-hover:to-[#ee3444] transition-all duration-500 shadow-md">
                {author.avatar}
              </div>

              {/* Author Info Canvas */}
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-widest text-[#ee3444] uppercase mb-1">
                  {author.role}
                </span>
                <h3 className="text-xl font-black text-slate-950 mb-3 tracking-tight">
                  {author.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {author.bio}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InsightAuthor;