import React from 'react';
import { motion } from 'framer-motion';

const TechStackMatrix = () => {
  const neonGradient = "linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)";

  const capabilities = [
    { name: "Web & App Architecture",      type: "React, Next.js, Flutter, & Cloud Tech",                    color: "#e1b054", icon: "⬡" },
    { name: "Social Media & Content",       type: "Social Media Management & Content Creation",               color: "#d24a8a", icon: "◈" },
    { name: "Branding & Creative Design",   type: "Brand Identity, Custom Layouts, & UI/UX Strategy",        color: "#ee3444", icon: "◎" },
    { name: "Advanced SEO Engines",         type: "Technical Optimization & Algorithmic Rankings",            color: "#75b0d2", icon: "⬢" },
    { name: "Digital Marketing & Growth",   type: "Performance Marketing & Targeted Ad Solutions",            color: "#7361a7", icon: "◉" },
    { name: "E-Commerce Ecosystems",        type: "WooCommerce APIs, Shopify, & Dynamic Checkouts",           color: "#f1574d", icon: "⬟" },
  ];

  /* ── animation variants ── */
  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const labelVariants = {
    hidden: { opacity: 0, letterSpacing: "0.1em" },
    visible: { opacity: 1, letterSpacing: "0.3em", transition: { duration: 0.8, ease: "easeOut" } }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.94 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-gray-100">

      {/* Subtle background grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* ── HEADER ── */}
        <motion.div
          className="text-center mb-10 sm:mb-14 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          <motion.p
            variants={labelVariants}
            className="text-[10px] sm:text-xs font-black uppercase mb-3 sm:mb-4 inline-block"
            style={{
              backgroundImage: neonGradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            ENGINEERING & CREATIVE CORE
          </motion.p>

          <motion.h2
            variants={headingVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[1000] uppercase tracking-tighter text-[#0a0a0a] leading-[1.05]"
          >
            Our Capabilities{' '}
            <span
              className="inline-block"
              style={{
                backgroundImage: neonGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Matrix
            </span>
          </motion.h2>

          {/* Animated underline */}
          <motion.div
            className="mx-auto mt-4 sm:mt-5 rounded-full"
            style={{ background: neonGradient, height: '3px' }}
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: '80px', opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
          />
        </motion.div>

        {/* ── GRID ── */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-7"
        >
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                y: -6,
                boxShadow: `0px 24px 48px rgba(0,0,0,0.07), 0 0 0 1px ${item.color}33`
              }}
              className="group relative bg-white p-5 sm:p-6 lg:p-8 rounded-2xl border border-gray-100 flex flex-col justify-between overflow-hidden cursor-default transition-all duration-300"
              style={{ borderLeft: `4px solid ${item.color}` }}
            >
              {/* Hover color wash */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `linear-gradient(135deg, ${item.color}08 0%, transparent 60%)` }}
              />

              {/* Top row: icon + index */}
              <div className="flex items-start justify-between mb-4 sm:mb-5">
                <motion.span
                  className="text-2xl sm:text-3xl leading-none select-none"
                  style={{ color: item.color }}
                  initial={{ rotate: -10, opacity: 0.6 }}
                  whileHover={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.span>

                <span className="text-[10px] sm:text-xs font-mono font-bold text-gray-200 group-hover:text-gray-400 transition-colors duration-300">
                  // 0{idx + 1}
                </span>
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h3 className="text-sm sm:text-base lg:text-lg font-black text-[#0a0a0a] uppercase tracking-tight mb-1.5 leading-tight">
                  {item.name}
                </h3>
                <p className="text-[11px] sm:text-xs lg:text-sm text-gray-500 font-medium leading-relaxed">
                  {item.type}
                </p>
              </div>

              {/* Bottom animated bar */}
              <motion.div
                className="absolute bottom-0 left-0 h-[3px] rounded-br-2xl"
                style={{ background: item.color }}
                initial={{ width: '0%' }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TechStackMatrix;
