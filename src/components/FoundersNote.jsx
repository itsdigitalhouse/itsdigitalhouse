import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  { 
    title: "WEB DESIGN", 
    description: "Crafting visually stunning and highly functional websites to elevate your online presence and engage your audience.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "WEB DEVELOPMENT", 
    description: "Building robust, scalable backends and high-performance frontends that turn complex visions into reality.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" 
  },
  { 
    title: "UX / UI DESIGN", 
    description: "Designing intuitive user experiences that bridge the gap between human needs and technical innovation.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" 
  }
];

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);
  
  // Aapka specific gradient
  const customGradient = "linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)";

  return (
    <section className="relative w-full bg-white py-24 px-4 sm:px-8 lg:px-24">
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-7xl font-[1000] uppercase tracking-tighter mb-6">What We Do</h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Our studio excels in creating custom digital solutions, blending innovative web design with user experience optimization. We focus on transforming visions into functional, aesthetically striking digital realities.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-2">
        {services.map((service, index) => (
          <div 
            key={index}
            className="relative group cursor-pointer border-b border-gray-200"
            onMouseEnter={() => setHoveredService(service)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <div className="py-10 flex justify-between items-center px-4">
              <motion.h3 
                className="text-5xl font-black uppercase transition-all duration-300"
                whileHover={{ 
                  backgroundImage: customGradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {service.title}
              </motion.h3>
              <span className="text-3xl opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
            </div>

            {/* Hover Card */}
            <AnimatePresence>
              {hoveredService === service && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute z-50 left-[55%] top-0 w-[420px] bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 p-4"
                >
                  <img src={service.image} alt={service.title} className="w-full h-56 object-cover rounded-xl mb-4" />
                  <p className="text-gray-700 font-medium px-2 pb-2">{service.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;