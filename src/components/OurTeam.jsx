import React from 'react';
import { motion } from 'framer-motion';

const OurTeam = () => {
  const neonGradient = "linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)";

  // Complete department dataset with organic SVG avatars & unique matching backgrounds
  const squad = [
    { 
      name: "Jamshed", 
      role: "Senior Web & App Developer", 
      bgColor: "bg-[#e0f2fe]", // Soft Sky Blue
      avatarColor: "#0284c7",
      // Tech Geek / Developer Avatar (Laptop + Glasses element style)
      svg: (color) => (
        <svg viewBox="0 0 100 100" className="w-full h-full transform scale-90">
          <circle cx="50" cy="40" r="18" fill={color} opacity="0.9"/>
          <path d="M50 28 L46 34 L54 34 Z" fill="#ffffff" opacity="0.4"/>
          <rect x="42" y="38" width="6" height="3" rx="1" fill="#ffffff"/>
          <rect x="52" y="38" width="6" height="3" rx="1" fill="#ffffff"/>
          <line x1="48" y1="39.5" x2="52" y2="39.5" stroke="#ffffff" strokeWidth="0.5"/>
          <path d="M26 82 C26 62 34 58 50 58 C66 58 74 62 74 82 Z" fill={color}/>
          <rect x="36" y="70" width="28" height="16" rx="2" fill="#1e293b"/>
          <rect x="42" y="73" width="16" height="10" rx="1" fill="#38bdf8"/>
        </svg>
      )
    },
    { 
      name: "UI/UX Architecture Unit", 
      role: "Lead Product Designers & Brand Strategists", 
      bgColor: "bg-[#fef3c7]", // Premium Amber / Gold Tone
      avatarColor: "#d97706",
      // Designer Avatar with Creative Geometry
      svg: (color) => (
        <svg viewBox="0 0 100 100" className="w-full h-full transform scale-90">
          <circle cx="50" cy="38" r="18" fill={color}/>
          <path d="M42 34 Q50 24 58 34" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <circle cx="43" cy="38" r="2" fill="#ffffff"/>
          <circle cx="57" cy="38" r="2" fill="#ffffff"/>
          <path d="M28 80 C28 62 36 56 50 56 C64 56 72 62 72 80 Z" fill={color}/>
          <path d="M62 48 L74 60 L70 64 L58 52 Z" fill="#fbbf24"/>
          <circle cx="74" cy="60" r="2" fill="#ef4444"/>
        </svg>
      )
    },
    { 
      name: "Growth & SEO Squad", 
      role: "Algorithmic Ranking Experts & Data Analysts", 
      bgColor: "bg-[#dcfce7]", // Mint Green
      avatarColor: "#16a34a",
      // Analytical Analyst with Stats mind
      svg: (color) => (
        <svg viewBox="0 0 100 100" className="w-full h-full transform scale-90">
          <circle cx="50" cy="40" r="18" fill={color}/>
          <path d="M44 46 Q50 50 56 46" stroke="#ffffff" strokeWidth="2" fill="none"/>
          <path d="M26 82 C26 64 34 58 50 58 C66 58 74 64 74 82 Z" fill={color}/>
          <rect x="62" y="24" width="16" height="16" rx="3" fill="#22c55e" opacity="0.8"/>
          <path d="M66 34 L70 30 L74 33" stroke="#ffffff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      )
    },
    { 
      name: "Social Media & Content Hub", 
      role: "Campaign Managers & Creative Copywriters", 
      bgColor: "bg-[#fce7f3]", // Soft Pink / Rose
      avatarColor: "#db2777",
      // Social Dynamic Profile
      svg: (color) => (
        <svg viewBox="0 0 100 100" className="w-full h-full transform scale-90">
          <path d="M50 15 C38 15 32 24 32 38 C32 44 36 46 36 46 C36 46 34 40 50 40 C66 40 64 46 64 46 C64 46 68 44 68 38 C68 24 62 15 50 15 Z" fill="#4a044e" opacity="0.2"/>
          <circle cx="50" cy="40" r="17" fill={color}/>
          <path d="M42 42 Q50 36 58 42" stroke="#ffffff" strokeWidth="2" fill="none"/>
          <path d="M26 82 C26 64 34 58 50 58 C66 58 74 64 74 82 Z" fill={color}/>
          <circle cx="74" cy="30" r="7" fill="#f43f5e"/>
          <path d="M72 30 L76 30 M74 28 L74 32" stroke="#ffffff" strokeWidth="1.5"/>
        </svg>
      )
    },
    { 
      name: "Performance Marketing Lab", 
      role: "Paid Ads Managers & Direct-Response Specialists", 
      bgColor: "bg-[#ffedd5]", // Warm Orange
      avatarColor: "#ea580c",
      // Super Sharp Performance Avatar
      svg: (color) => (
        <svg viewBox="0 0 100 100" className="w-full h-full transform scale-90">
          <circle cx="50" cy="38" r="18" fill={color}/>
          <line x1="36" y1="32" x2="44" y2="36" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
          <line x1="64" y1="32" x2="56" y2="36" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M26 80 C26 62 34 56 50 56 C66 56 74 62 74 80 Z" fill={color}/>
          <path d="M24 30 L14 36 L24 42 Z" fill="#f97316"/>
        </svg>
      )
    },
    { 
      name: "Project Management Core", 
      role: "Agile Scrum Masters & Delivery Operations", 
      bgColor: "bg-[#ede9fe]", // Smooth Purple
      avatarColor: "#7c3aed",
      // Smart Professional Hat/Cap Look
      svg: (color) => (
        <svg viewBox="0 0 100 100" className="w-full h-full transform scale-90">
          <path d="M30 30 L70 30 L50 16 Z" fill="#4c1d95"/>
          <circle cx="50" cy="42" r="17" fill={color}/>
          <circle cx="44" cy="40" r="2" fill="#ffffff"/>
          <circle cx="56" cy="40" r="2" fill="#ffffff"/>
          <path d="M45 48 Q50 52 55 48" stroke="#ffffff" strokeWidth="1.5" fill="none"/>
          <path d="M26 82 C26 64 34 58 50 58 C66 58 74 64 74 82 Z" fill={color}/>
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header Block */}
        <div className="text-center mb-24">
          <p className="text-xs sm:text-sm font-black tracking-[0.3em] uppercase mb-4" style={{ backgroundImage: neonGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            THE ALCHEMISTS
          </p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl sm:text-5xl font-[1000] uppercase tracking-tighter text-[#0a0a0a]"
          >
            Meet Our Elite Departments
          </motion.h2>
        </div>

        {/* Avatars Grid Component */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {squad.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              
              {/* Organic Shape Custom Avatar Container (SoapMedia Inspired) */}
              <div className={`w-48 h-48 rounded-[38%_62%_63%_37%_/_41%_44%_56%_59%] ${member.bgColor} flex items-center justify-center p-2 mb-6 transition-all duration-500 ease-in-out group-hover:rounded-[50%] group-hover:scale-105 group-hover:rotate-2 shadow-sm group-hover:shadow-xl`}>
                <div className="w-full h-full relative flex items-center justify-center">
                  {member.svg(member.avatarColor)}
                </div>
              </div>
              
              {/* Text Meta Data */}
              <div className="text-center max-w-xs">
                <h3 className="text-lg font-black text-[#0a0a0a] uppercase tracking-tight mb-1 group-hover:text-[#ee3444] transition-colors duration-200">
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