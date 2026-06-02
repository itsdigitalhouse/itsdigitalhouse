import React from 'react';
import { motion } from 'framer-motion';

const OurTeam = () => {
  const neonGradient = "linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)";

  // Ultra-stable global image links with strict cross-origin parameters (No Face Reveal)
  const squad = [
    { 
      name: "Jamshed", 
      role: "Senior Web & App Developer", 
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=600&q=80" // Verified Dev IDE Setup
    },
    { 
      name: "UI/UX Architecture Unit", 
      role: "Lead Product Designers & Brand Strategists", 
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=600&q=80" // Highly stable Interface Sketch & Layout
    },
    { 
      name: "Growth & SEO Squad", 
      role: "Algorithmic Ranking Experts & Data Analysts", 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" // Data & Search Charts Layout
    },
    { 
      name: "Social Media & Content Hub", 
      role: "Campaign Managers & Creative Copywriters", 
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80" // Global Media App Matrices
    },
    { 
      name: "Performance Marketing Lab", 
      role: "Paid Ads Managers & Direct-Response Specialists", 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" // Marketing Campaigns & Funnels
    },
    { 
      name: "Project Management Core", 
      role: "Agile Scrum Masters & Delivery Operations", 
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80" // Agile Dashboard Wireframes
    }
  ];

  return (
    <section className="relative w-full bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-gray-50">
      <div className="container mx-auto max-w-7xl">
        
        <div className="text-center mb-20">
          <p className="text-xs sm:text-sm font-black tracking-[0.3em] uppercase mb-4" style={{ backgroundImage: neonGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            THE ALCHEMISTS
          </p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-3xl sm:text-5xl font-[1000] uppercase tracking-tighter text-[#0a0a0a]"
          >
            Meet Our Elite Departments
          </motion.h2>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
          {squad.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.12 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50/30 rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Cover Asset Frame with CSS Fallback Gradient */}
              <div className="w-full h-[220px] overflow-hidden relative bg-gradient-to-br from-[#111] to-[#222]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-30 hover:opacity-60 transition-opacity duration-300" />
                
                <img 
                  src={member.image} 
                  alt={member.name} 
                  loading="lazy"
                  crossOrigin="anonymous"
                  className="w-full h-full object-cover opacity-85 transform hover:scale-105 transition-transform duration-700 ease-out filter grayscale hover:grayscale-0"
                  onError={(e) => {
                    // Quick fix if Unsplash fails locally: transforms into a premium geometric placeholder background
                    e.target.style.display = 'none';
                  }}
                />
                
                {/* Fallback Core Graphic if Image breaks */}
                <div className="absolute inset-0 flex items-center justify-center p-4 text-center select-none pointer-events-none">
                  <span className="text-white/5 text-4xl font-black uppercase tracking-widest block">
                    {member.name.split(' ')[0]}
                  </span>
                </div>
              </div>
              
              {/* Description Block */}
              <div className="p-6 text-center bg-white border-t border-gray-50 flex-grow flex flex-col justify-center">
                <h3 className="text-base sm:text-lg font-black text-[#0a0a0a] uppercase tracking-tight mb-1">
                  {member.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider" style={{ backgroundImage: neonGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'inline-block' }}>
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurTeam;