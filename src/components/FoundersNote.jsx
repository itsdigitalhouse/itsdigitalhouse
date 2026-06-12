import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

const services = [
  {
    id: 1,
    title: "WEB DESIGN",
    tag: "01",
    description: "Crafting visually stunning and highly functional websites to elevate your online presence and engage your audience.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800",
    accent: "#e1b054",
    keywords: ["Figma", "Motion", "Typography", "Responsive"]
  },
  {
    id: 2,
    title: "WEB DEVELOPMENT",
    tag: "02",
    description: "Building robust, scalable backends and high-performance frontends that turn complex visions into reality.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    accent: "#ee3444",
    keywords: ["React", "Next.js", "Node", "APIs"]
  },
  {
    id: 3,
    title: "UX / UI DESIGN",
    tag: "03",
    description: "Designing intuitive user experiences that bridge the gap between human needs and technical innovation.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    accent: "#75b0d2",
    keywords: ["Research", "Wireframes", "Prototypes", "Testing"]
  },
  {
    id: 4,
    title: "APP DEVELOPMENT",
    tag: "04",
    description: "Developing high-performance, cross-platform mobile apps with fluid animations and seamless user interfaces.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    accent: "#7361a7",
    keywords: ["Flutter", "React Native", "iOS", "Android"]
  },
  {
    id: 5,
    title: "SOCIAL MEDIA",
    tag: "05",
    description: "Managing and scaling your brand footprint across social structures with premium aesthetic content creation.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    accent: "#d24a8a",
    keywords: ["Content", "SMM", "Branding", "Graphics"]
  },
  {
    id: 6,
    title: "DIGITAL MARKETING",
    tag: "06",
    description: "Driving hyper-targeted growth campaigns and analytical structures to accelerate ROI and visibility.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    accent: "#f1574d",
    keywords: ["SEO", "Growth", "PPC Campaigns", "Strategy"]
  },
  {
    id: 7,
    title: "ARTIFICIAL INTELLIGENCE",
    tag: "07",
    description: "Integrating modern AI workflows, intelligent automation, and custom algorithms into your workflow architecture.",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800",
    accent: "#34d399",
    keywords: ["LLMs", "Automation", "SaaS", "Integrations"]
  },
];

const neonGradient = "linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)";

/* ── Cursor-following card (desktop only) ── */
const HoverCard = ({ service, mouseX, mouseY }) => {
  const sx = useSpring(mouseX, { stiffness: 220, damping: 26, mass: 0.4 });
  const sy = useSpring(mouseY, { stiffness: 220, damping: 26, mass: 0.4 });

  return (
    <motion.div
      style={{ x: sx, y: sy, pointerEvents: 'none' }}
      className="fixed top-0 left-0 z-[200] hidden lg:block select-none"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.88, rotate: 2 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="w-[320px] bg-white rounded-2xl overflow-hidden pointer-events-none"
        style={{ boxShadow: `0 32px 80px rgba(0,0,0,0.18), 0 0 0 1px ${service.accent}33` }}
      >
        {/* Image with gradient overlay */}
        <div className="relative h-[200px] overflow-hidden">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to top, ${service.accent}cc 0%, transparent 55%)` }}
          />
          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
            <span className="text-white text-xs font-black tracking-[0.2em] uppercase">{service.title}</span>
            <span className="text-white/70 text-xs font-mono">{service.tag}</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {service.keywords.map((kw) => (
              <span
                key={kw}
                className="text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full border"
                style={{ borderColor: service.accent, color: service.accent }}
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Accent bar */}
        <div className="h-[3px] w-full" style={{ background: service.accent }} />
      </motion.div>
    </motion.div>
  );
};

/* ── Main Component ── */
const ServicesSection = () => {
  const [hovered, setHovered] = useState(null);
  const [openMobile, setOpenMobile] = useState(null);
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;
    mouseX.set(e.clientX - 160);
    mouseY.set(e.clientY - 220);
  };

  return (
    <section
      className="relative w-full bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-16 xl:px-24 overflow-hidden select-none"
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.022]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* ── HEADER ── */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24 relative z-10"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          whileInView={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-[10px] sm:text-xs font-black uppercase mb-4 sm:mb-5"
          style={{
            backgroundImage: neonGradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          ITS DIGITAL HOUSE • SERVICES
        </motion.p>

        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[90px] font-[1000] uppercase tracking-tighter mb-6 sm:mb-8 py-2 overflow-visible lg:overflow-hidden">
          {["What", "We", "Do"].map((word, i) => (
            <motion.span
              key={word}
              className="inline-block mr-[0.15em] text-[#0a0a0a] current-color"
              initial={{ opacity: 0, y: window.innerWidth < 1024 ? 20 : 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <motion.p
          className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto px-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          We are a full-service creative digital agency dedicated to helping businesses build, 
          grow, and transform their online identity through modern design, robust technology, 
          and strategic digital solutions.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 h-[2px] rounded-full"
          style={{ background: neonGradient, transformOrigin: 'left' }}
        />
      </motion.div>

      {/* ── DESKTOP LIST ── */}
      <motion.div
        className="hidden lg:block max-w-6xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } }
        }}
      >
        {services.map((service) => {
          const isHovered = hovered?.id === service.id;
          return (
            <motion.div
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="relative group cursor-none border-b overflow-hidden"
              style={{ borderColor: isHovered ? `${service.accent}40` : '#e5e7eb' }}
              onMouseEnter={() => setHovered(service)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="py-8 xl:py-10 flex items-center justify-between px-2 xl:px-4">
                <div className="flex items-center gap-6 xl:gap-10">
                  <motion.span
                    animate={{ color: isHovered ? service.accent : '#d1d5db' }}
                    transition={{ duration: 0.25 }}
                    className="text-xs font-black tracking-[0.25em] font-mono w-5"
                  >
                    {service.tag}
                  </motion.span>
                  <motion.h3
                    animate={{ x: isHovered ? 12 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                    className="text-3xl xl:text-5xl font-[1000] uppercase tracking-tighter leading-none"
                    style={{
                      backgroundImage: isHovered ? neonGradient : 'none',
                      WebkitBackgroundClip: isHovered ? 'text' : 'unset',
                      WebkitTextFillColor: isHovered ? 'transparent' : '#0a0a0a',
                      backgroundClip: isHovered ? 'text' : 'unset',
                      color: isHovered ? 'transparent' : '#0a0a0a'
                    }}
                  >
                    {service.title}
                  </motion.h3>
                </div>
                <div className="flex items-center gap-4 xl:gap-6">
                  <motion.div
                    animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
                    transition={{ duration: 0.25 }}
                    className="hidden xl:flex gap-2"
                  >
                    {service.keywords.slice(0, 2).map((kw) => (
                      <span
                        key={kw}
                        className="text-[10px] font-black tracking-wider uppercase px-3 py-1.5 rounded-full border"
                        style={{ borderColor: service.accent, color: service.accent }}
                      >
                        {kw}
                      </span>
                    ))}
                  </motion.div>
                  <motion.div
                    animate={{
                      scale: isHovered ? 1 : 0.8,
                      backgroundColor: isHovered ? service.accent : 'rgba(0,0,0,0.03)'
                    }}
                    transition={{ duration: 0.25 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                  >
                    <span 
                      className="font-bold text-lg leading-none transition-colors duration-200"
                      style={{ color: isHovered ? '#fff' : '#0a0a0a' }}
                    >
                      ↗
                    </span>
                  </motion.div>
                </div>
              </div>
              <motion.div
                className="absolute inset-0 -z-10 pointer-events-none"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                style={{ background: `linear-gradient(to right, ${service.accent}06, transparent 60%)` }}
              />
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] rounded-full"
                animate={{ width: isHovered ? '100%' : '0%' }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{ background: service.accent }}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* ── MOBILE ACCORDION ── */}
      <div className="lg:hidden flex flex-col gap-4 max-w-2xl mx-auto relative z-10">
        {services.map((service) => {
          const isOpen = openMobile === service.id;
          return (
            <div
              key={service.id}
              className="rounded-2xl overflow-hidden border transition-all duration-300 bg-white"
              style={{ borderColor: isOpen ? `${service.accent}60` : '#e5e7eb' }}
            >
              <button
                onClick={() => setOpenMobile(isOpen ? null : service.id)}
                className="w-full flex items-center justify-between px-5 sm:px-6 py-5 sm:py-6 text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-black tracking-widest font-mono" style={{ color: service.accent }}>
                    {service.tag}
                  </span>
                  <span className="text-base sm:text-xl font-[1000] uppercase tracking-tight text-[#0a0a0a]">
                    {service.title}
                  </span>
                </div>
                <motion.div
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    backgroundColor: isOpen ? service.accent : '#f3f4f6'
                  }}
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                >
                  <span className="text-lg font-light leading-none" style={{ color: isOpen ? 'white' : '#6b7280' }}>+</span>
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-gray-50/40 border-t border-gray-100">
                      <div className="w-full h-48 overflow-hidden">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-5">
                        <p className="text-gray-600 text-sm mb-5">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.keywords.map((kw) => (
                            <span key={kw} className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full border bg-white" style={{ borderColor: service.accent, color: service.accent }}>{kw}</span>
                          ))}
                        </div>
                      </div>
                      <div className="h-[3px] mx-5 mb-5 rounded-full" style={{ background: service.accent }} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      <AnimatePresence>
        {hovered && <HoverCard service={hovered} mouseX={mouseX} mouseY={mouseY} />}
      </AnimatePresence>
    </section>
  );
};

export default ServicesSection;