import React from 'react';
import { motion } from 'framer-motion';

const TechStackMatrix = () => {
  const neonGradient = "linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)";

  // Complete software house matrix including web, mobile, marketing, branding, and SEO
  const capabilities = [
    { name: "Web & App Architecture", type: "React, Next.js, Flutter, & Cloud Tech", color: "#e1b054" },
    { name: "Social Media & Content", type: "Social Media Management & Content Creation", color: "#d24a8a" },
    { name: "Branding & Creative Design", type: "Brand Identity, Custom Layouts, & UI/UX Strategy", color: "#ee3444" },
    { name: "Advanced SEO Engines", type: "Technical Optimization & Algorithmic Rankings", color: "#75b0d2" },
    { name: "Digital Marketing & Growth", type: "Performance Marketing & Targeted Ad Solutions", color: "#7361a7" },
    { name: "E-Commerce Ecosystems", type: "WooCommerce APIs, Shopify, & Dynamic Checkouts", color: "#f1574d" }
  ];

  return (
    <section className="relative w-full bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-gray-50">
      <div className="container mx-auto max-w-7xl">
        
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm font-black tracking-[0.3em] uppercase mb-4" style={{ backgroundImage: neonGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            ENGINEERING & CREATIVE CORE
          </p>
          <h2 className="text-3xl sm:text-5xl font-[1000] uppercase tracking-tighter text-[#0a0a0a]">
            Our Capabilities Matrix
          </h2>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
          }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
              whileHover={{ scale: 1.03, y: -5, boxShadow: "0px 20px 40px rgba(0,0,0,0.04)" }}
              className="bg-gray-50/50 p-6 sm:p-8 rounded-2xl border border-gray-100 flex flex-col justify-between transition-all duration-300"
              style={{ borderLeft: `4px solid ${item.color}` }}
            >
              <div>
                <h3 className="text-lg sm:text-xl font-black text-[#0a0a0a] uppercase tracking-tight mb-1">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">
                  {item.type}
                </p>
              </div>
              <div className="text-right text-xs font-mono font-bold text-gray-300 mt-6">// 0{idx + 1}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TechStackMatrix;