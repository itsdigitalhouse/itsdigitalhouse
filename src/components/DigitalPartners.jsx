import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Logo Imports
import maahir from '../assets/maahir-contractor.png';
import zakabu from '../assets/zakabu.png';
import madagascar from '../assets/best-medagascar.png';
import sagar from '../assets/sagar.png';
import gne from '../assets/gne.png';
import ocean from '../assets/ocean-crest.png';
import kinshuk from '../assets/kinshuk.png';
import printpro from '../assets/print-pro.png';
import khaki from '../assets/khaki.png';
import bog from '../assets/bog.png';
import portcity from '../assets/portcity-traders.png';
import hippo from '../assets/hippo-cement.png';
import aldo from '../assets/aldo-partners.png';

const testimonials = [
  { id: 1, text: "Its Digital House transformed our online presence. Their strategic approach to branding helped us stand out in a crowded market.", author: "Maxwell Ogwang" },
  { id: 2, text: "The material calculator and showcase built for our brand were game-changers for our digital reach.", author: "Client Representative" },
  { id: 3, text: "Professional and creative! They delivered a modern digital solution that exceeded our expectations.", author: "Business Partner" }
];

const DigitalPartners = () => {
  const [index, setIndex] = useState(0);
  const neonGradient = "linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)";

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const partners = [
    { name: 'Maahir', img: maahir }, { name: 'Zakabu', img: zakabu },
    { name: 'Madagascar', img: madagascar }, { name: 'Sagar', img: sagar },
    { name: 'GNE', img: gne }, { name: 'Ocean Crest', img: ocean },
    { name: 'Kinshuk', img: kinshuk }, { name: 'Print Pro', img: printpro },
    { name: 'Khaki', img: khaki }, { name: 'BOG', img: bog },
    { name: 'PortCity', img: portcity }, { name: 'Hippo Cement', img: hippo },
    { name: 'Aldo Partners', img: aldo }
  ];

  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col justify-center items-center py-20">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* HEADING */}
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-[1000] uppercase tracking-tighter italic text-center leading-[1.4] mb-16"
          style={{ 
            backgroundImage: neonGradient, 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          OUR PARTNERS IN DIGITAL JOURNEY
        </motion.h2>

        {/* TESTIMONIAL SLIDER - Perfectly Centered */}
        <div className="w-full flex flex-col items-center justify-center mb-24">
          <span className="text-[#D24A8A] text-5xl md:text-8xl font-serif text-center w-full">"</span>
          <div className="max-w-4xl w-full px-4 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <p className="text-gray-700 text-lg md:text-3xl italic font-medium mb-8 leading-relaxed">
                  {testimonials[index].text}
                </p>
                <h4 className="text-black font-black uppercase tracking-widest border-t-4 border-[#D24A8A] pt-4">
                  {testimonials[index].author}
                </h4>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* LOGO GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 border-t border-l border-gray-100">
          {partners.map((partner, i) => (
            <div key={i} className="h-32 md:h-40 flex items-center justify-center p-6 border-r border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <img src={partner.img} alt={partner.name} className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DigitalPartners;