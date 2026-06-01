import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CountUp = ({ to, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 }); 

  useEffect(() => {
    if (!isInView) {
      setCount(0); 
      return;
    }

    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOutQuad = progress * (2 - progress);
      setCount(Math.floor(easeOutQuad * (to - 0) + 0));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, to, duration]);

  return <span ref={ref}>{count}</span>;
};

const StatsCounter = () => {
  const statsData = [
    { id: 1, value: 7, suffix: "+", title: "YEARS OF EXCELLENCE", color: "#e1b054" },
    { id: 2, value: 150, suffix: "+", title: "GLOBAL PROJECTS", color: "#d24a8a" },
    { id: 3, value: 16, suffix: "+", title: "COUNTRIES SERVED", color: "#ee3444" },
    { id: 4, value: 98, suffix: "%", title: "RETENTION RATE", color: "#75b0d2" }
  ];

  return (
    <section className="w-full bg-white py-12 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Responsive Layout */}
        <div className="mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[clamp(2rem,6vw,5rem)] font-black uppercase tracking-tighter leading-[0.9] text-slate-950"
          >
            Impact through <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e1b054] via-[#ee3444] to-[#7361a7]">Intelligence.</span>
          </motion.h2>
          <div className="w-16 md:w-20 h-1 md:h-1.5 bg-slate-900 mt-6 md:mt-8 rounded-full" />
        </div>

        {/* Grid Responsive Layout: 2x2 for mobile, 4x1 for desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {statsData.map((stat, i) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -5 }}
              className="relative aspect-square flex flex-col items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-full"
                style={{ backgroundColor: stat.color }}
              />
              
              <div className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight" style={{ color: stat.color }}>
                <CountUp to={stat.value} />{stat.suffix}
              </div>
              
              <div className="mt-2 text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.1em] sm:tracking-[0.2em] text-slate-400 group-hover:text-slate-900 transition-colors uppercase px-2 text-center">
                {stat.title}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsCounter;