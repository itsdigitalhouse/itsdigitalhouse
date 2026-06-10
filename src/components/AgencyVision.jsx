import React from 'react';
import { motion } from 'framer-motion';

const AgencyVision = () => {
  const neonGradient = "linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)";

  const pillars = [
    {
      num: "01",
      title: "OUR MISSION",
      desc: "To build meaningful digital experiences that elevate businesses and connect brands with their audience through modern digital solutions that enhance visibility, strengthen branding, and accelerate growth in international markets.",
      accent: "#e1b054",
      icon: (
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" />
          <line x1="12" y1="3" x2="12" y2="1" /><line x1="12" y1="23" x2="12" y2="21" />
          <line x1="3" y1="12" x2="1" y2="12" /><line x1="23" y1="12" x2="21" y2="12" />
        </svg>
      ),
      dark: false,
    },
    {
      num: "02",
      title: "OUR VISION",
      desc: "To become a leading digital agency recognized for creativity, innovation, and impactful solutions that help businesses thrive online and dominate their digital spaces globally.",
      accent: "#d24a8a",
      icon: (
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
        </svg>
      ),
      dark: true,
    },
    {
      num: "03",
      title: "OUR APPROACH",
      desc: "We understand the brand, strategize & plan, create & execute, and constantly optimize & improve. A strict focus on high-fidelity quality, absolute creativity, and long-term success is in our DNA.",
      accent: "#ee3444",
      icon: (
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      dark: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative w-full bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Subtle bg texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 15% 50%, rgba(225,176,84,0.05) 0%, transparent 60%), radial-gradient(circle at 85% 30%, rgba(238,52,68,0.05) 0%, transparent 60%)" }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="text-[11px] font-black tracking-[0.35em] text-slate-400 uppercase mb-4">
            // Who We Are
          </p>
          <h2
            className="text-4xl sm:text-6xl font-[1000] uppercase tracking-tighter inline-block"
            style={{ backgroundImage: neonGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
          >
            Foundational Pillars
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
              className={`relative rounded-3xl p-8 lg:p-10 flex flex-col justify-between overflow-hidden group cursor-default ${
                pillar.dark
                  ? 'bg-[#0a0a0a] text-white'
                  : 'bg-[#f8f8f6] text-[#0a0a0a]'
              }`}
              style={{ minHeight: '360px' }}
            >
              {/* Giant ghost number */}
              <span
                className="absolute -right-4 -bottom-6 text-[160px] font-[1000] leading-none select-none pointer-events-none transition-all duration-500 group-hover:scale-105 group-hover:-bottom-2"
                style={{
                  color: pillar.dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {pillar.num}
              </span>

              {/* Top row: icon + small number badge */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                {/* Icon circle */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${pillar.accent}18`, color: pillar.accent }}
                >
                  {pillar.icon}
                </div>

                {/* Number badge */}
                <span
                  className="text-[11px] font-black tracking-[0.3em] px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: `${pillar.accent}15`,
                    color: pillar.accent,
                  }}
                >
                  {pillar.num}
                </span>
              </div>

              {/* Text */}
              <div className="relative z-10 flex-1">
                <h3
                  className={`text-xl lg:text-2xl font-black uppercase tracking-tight mb-4 ${
                    pillar.dark ? 'text-white' : 'text-[#0a0a0a]'
                  }`}
                >
                  {pillar.title}
                </h3>
                <p
                  className={`font-medium leading-relaxed text-sm lg:text-[15px] ${
                    pillar.dark ? 'text-white/60' : 'text-slate-500'
                  }`}
                >
                  {pillar.desc}
                </p>
              </div>

              {/* Bottom accent line */}
              <div
                className="mt-8 h-[3px] rounded-full w-10 transition-all duration-500 group-hover:w-20 relative z-10"
                style={{ backgroundColor: pillar.accent }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AgencyVision;
