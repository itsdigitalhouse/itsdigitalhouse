import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const servicesData = [
  {
    id: 1,
    title: "Website Development",
    desc: "Building high-performance, fast-loading digital architectures tailored for your specific business requirements.",
    bullets: [
      "Custom, responsive website builds",
      "Fast loading & SEO-ready structures",
      "Scalable front-end & back-end development",
      "CMS & custom development solutions",
      "Performance and security optimization"
    ]
  },
  {
    id: 2,
    title: "Content & Strategy",
    desc: "Crafting modern brand messaging and data-driven marketing frameworks to accelerate online visibility.",
    bullets: [
      "Brand messaging & positioning",
      "Website & marketing copywriting",
      "Content strategy & planning",
      "Campaign & launch support",
      "Data-driven digital strategies"
    ]
  },
  {
    id: 3,
    title: "E-Commerce Solutions",
    desc: "Developing robust e-commerce architectures optimized for secure transformations and international sales.",
    bullets: [
      "Shopify & custom e-commerce builds",
      "Product & checkout optimization",
      "Payment & shipping integrations",
      "Store performance & scalability",
      "Conversion focused store design"
    ]
  },
  {
    id: 4,
    title: "UI / UX Experience",
    desc: "Designing clean, modern, and intuitive user experiences focused entirely on layout conversion.",
    bullets: [
      "User focused interface design",
      "Clean, modern & intuitive layouts",
      "Wireframing & interactive prototypes",
      "Conversion-driven user journeys",
      "Mobile-first experience design"
    ]
  },
  {
    id: 5,
    title: "Digital Marketing",
    desc: "Driving high-performance ad campaigns and audience growth setups to keep your brand ahead.",
    bullets: [
      "Social media strategy & management",
      "Performance-focused ad campaigns",
      "Content planning & scheduling",
      "Audience growth & engagement",
      "Analytics, insights & optimization"
    ]
  },
  {
    id: 6,
    title: "Branding & Design",
    desc: "Structuring complete visual identity systems and solid design guidelines across all digital frontlines.",
    bullets: [
      "Visual identity & brand systems",
      "Logo, color & typography direction",
      "Consistent design across platforms",
      "Creative assets for digital use",
      "Brand guidelines & creative direction"
    ]
  }
];

const ServicesGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="bg-white text-black py-16 md:py-24 px-4 sm:px-6 lg:px-12 relative overflow-visible">
      <div className="container mx-auto max-w-7xl relative overflow-visible">
        
        {/* CUSTOM 6-COLOR GRADIENT HEADING */}
        <div className="text-center mb-16 px-4 overflow-visible">
          <motion.h2 
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-[1000] uppercase italic tracking-tighter inline-block text-transparent bg-clip-text pb-2 select-none overflow-visible pr-4 md:pr-6"
            style={{ 
              fontFamily: "'Unbounded', sans-serif",
              backgroundImage: 'linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)',
            }}
          >
            OUR DIGITAL STACK
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            className="h-1 mx-auto mt-2 rounded-full"
            style={{ backgroundColor: '#d24a8a' }}
          />
        </div>

        {/* RESPONSIVE SERVICES GRID (FIXED FOR ALL RESOLUTIONS) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative overflow-visible">
          {servicesData.map((service, index) => (
            <div 
              key={service.id} 
              className="relative overflow-visible group"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.1, ease: "easeOut" }}
                animate={{
                  scale: hoveredCard === service.id ? 1.02 : 1,
                  zIndex: hoveredCard === service.id ? 40 : 10,
                  boxShadow: hoveredCard === service.id 
                    ? "0px 25px 60px rgba(0, 0, 0, 0.06)" 
                    : "0px 0px 0px rgba(0, 0, 0, 0)"
                }}
                // `absolute` removed completely, layout now flows dynamically using regular blocks
                className="w-full bg-white border border-gray-100 p-6 sm:p-8 lg:p-12 rounded-2xl flex flex-col justify-between overflow-visible transition-colors duration-300 hover:border-gray-200 cursor-pointer min-h-[320px] md:min-h-[350px]"
              >
                
                <div className="w-full">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-gray-400">
                      0{index + 1} // SERVICE
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4 text-black uppercase">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-gray-500 font-normal leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  <div className="overflow-hidden">
                    <AnimatePresence mode="wait">
                      {hoveredCard === service.id && (
                        <motion.ul
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="space-y-2.5 pt-4 border-t border-gray-100 mb-6"
                        >
                          {service.bullets.map((bullet, bIndex) => (
                            <motion.li 
                              key={bIndex}
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: bIndex * 0.03 }}
                              className="flex items-center gap-2.5 text-xs md:text-sm text-gray-700 font-normal"
                            >
                              <span className="w-1 h-1 rounded-full bg-[#d24a8a] block shrink-0" />
                              <span>{bullet}</span>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* LEARN MORE SECTION ALWAYS PUSHED TO THE BOTTOM AT ALL TIMES */}
                <div className="mt-auto pt-4 flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-gray-400 group-hover:text-[#d24a8a] transition-colors duration-300">
                  <span>Learn More</span>
                  <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;