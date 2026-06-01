import React from 'react';

const OurTeam = () => {
  const teamMembers = [
    {
      role: "Designer",
      name: "Alex Rivera",
      specialty: "UI/UX & Brand Systems",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    },
    {
      role: "Developer",
      name: "Jamshed Khan",
      specialty: "Senior Web & App Architect",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      role: "Marketer",
      name: "Sarah Jenkins",
      specialty: "Digital Growth & Strategy",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
    }
  ];

  // Aapki bheji hui exact sequence ka gradient style
  const customGradientStyle = {
    background: 'linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <section className="py-24 md:py-32 bg-white w-full overflow-hidden">
      {/* Team Header Section */}
      <div className="w-full px-4 sm:px-6 md:px-12 mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8">
        <div>
          <span className="inline-block text-[#ee3444] font-bold tracking-[0.3em] text-[10px] sm:text-[11px] uppercase mb-3 md:mb-4">
            The Minds Behind The Magic
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-950 leading-[1] md:leading-[0.95]">
            Meet our team of<br />
            {/* Gradient applied exactly on experts & creative */}
            <span style={customGradientStyle} className="inline-block">
              experts & creative
            </span><br />
            <span className="text-slate-950">innovators</span>
          </h2>
        </div>
        <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-[#e1b054] to-[#ee3444] md:mb-4 shrink-0" />
      </div>

      {/* Team Cards Grid */}
      <div className="w-full px-4 sm:px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="group flex flex-col w-full">
            
            {/* Image Container */}
            <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-slate-100 relative mb-6">
              <img 
                src={member.img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt={member.name} 
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                <span className="text-[#ee3444] font-bold tracking-wider text-[10px] uppercase">
                  {member.role}
                </span>
              </div>
            </div>

            {/* Member Details */}
            <div className="px-2">
              <h3 className="text-2xl font-black text-slate-950 mb-1 transition-colors duration-300 group-hover:text-[#ee3444]">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-slate-500 mb-4">
                {member.specialty}
              </p>
              
              <div className="w-12 h-[2px] bg-slate-200 transition-all duration-300 group-hover:w-20 group-hover:bg-[#e1b054]" />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;