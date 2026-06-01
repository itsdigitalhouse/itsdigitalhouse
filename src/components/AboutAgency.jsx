import React from 'react';
import { motion } from 'framer-motion';

const AboutAgency = () => {
  const sections = [
    {
      id: "01",
      title: "VISIONARY",
      subtitle: "STRATEGY",
      desc: "WE DO NOT JUST PLAN FOR THE PRESENT; WE ARCHITECT THE FUTURE. OUR STRATEGIC FRAMEWORK IS BUILT ON DEEP ANALYTICAL INSIGHTS AND UNWAVERING CLARITY. WE DISSECT COMPLEX MARKET CHALLENGES TO ENGINEER DIGITAL FOUNDATIONS.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "CREATIVE",
      subtitle: "ENGINEERING",
      desc: "THIS IS WHERE THE INTERSECTION OF RAW CHAOS AND PERFECT ORDER COMES TO LIFE. WE BRIDGE THE GAP BETWEEN ABSTRACT CREATIVE CONCEPTS AND FUNCTIONAL TECHNICAL EXECUTION. BY INTEGRATING CUTTING-EDGE DEVELOPMENT PRACTICES.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "GROWTH",
      subtitle: "TRANSFORMATION",
      desc: "THE END OF THE ROAD IS WHERE OUR TRUE JOURNEY BEGINS. GROWTH IS NOT A DESTINATION; IT IS A CONTINUOUS DIALOGUE BETWEEN YOUR BRAND AND THE MARKET. WE PARTNER WITH FORWARD-THINKING BRANDS TO NAVIGATE THE EVER-CHANGING ECOSYSTEM.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  const gradientStyle = "linear-gradient(90deg, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)";

  return (
    <div className="bg-white text-black min-h-screen py-16 md:py-24 overflow-x-hidden">
      {sections.map((section, index) => {
        const isEven = index % 2 === 0;
        
        return (
          <section key={section.id} className="container mx-auto px-4 md:px-6 mb-24 md:mb-40 relative">
            <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-20`}>
              
              {/* Image Container */}
              <motion.div 
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                className="w-full lg:w-5/12 z-10"
              >
                {/* overflow-hidden container ke andar image ko fit rakhega */}
                <div className={`h-[300px] md:h-[400px] lg:h-[500px] w-full overflow-hidden transition-transform duration-500 ${isEven ? '-rotate-2' : 'rotate-2'} hover:rotate-0`}>
                  <img src={section.img} className="w-full h-full object-cover" alt="feature" />
                </div>
              </motion.div>

              <div className="w-full lg:w-6/12 z-20 px-2">
                <span className="text-4xl md:text-6xl font-black opacity-10 block mb-2">{section.id}</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1] mb-6">
                  {section.title} <br/>
                  <span 
                    className="gradient-heading"
                    style={{ backgroundImage: gradientStyle }}
                  >
                    {section.subtitle}
                  </span>
                </h2>
                <p className="text-base md:text-lg font-medium max-w-2xl border-l-4 border-black pl-4 md:pl-6 py-2 leading-relaxed tracking-tight">
                  {section.desc}
                </p>
              </div>

            </div>
          </section>
        );
      })}
      <style jsx>{`
        .gradient-heading {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default AboutAgency;