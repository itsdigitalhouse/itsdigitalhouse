import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AboutContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '',
    message: '',
    newsletter: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Lead Captured:', formData);
  };

  return (
    <div className="w-full relative bg-white py-16 md:py-28 overflow-hidden font-sans">
      
      {/* ==================== BACKGROUND FLOATING SHAPES (image_38223a.png Elements) ==================== */}
      {/* Left Yellow Blob */}
      <motion.div 
        className="absolute left-[-50px] md:left-[-30px] top-[40%] w-[160px] h-[180px] md:w-[240px] md:h-[260px] bg-[#FFD100] rounded-[40%_60%_70%_30%_/_40%_50%_50%_60%] z-10 select-none pointer-events-none"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
          borderRadius: ["40% 60% 70% 30% / 40% 50% 50% 60%", "50% 50% 60% 40% / 45% 55% 45% 55%", "40% 60% 70% 30% / 40% 50% 50% 60%"]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Right Teal Blob */}
      <motion.div 
        className="absolute right-[-50px] md:right-[-20px] bottom-[20%] w-[140px] h-[160px] md:w-[200px] md:h-[220px] bg-[#00B4A4] rounded-[50%_50%_40%_60%_/_50%_50%_50%_50%] z-10 select-none pointer-events-none"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -6, 4, 0],
          borderRadius: ["50% 50% 40% 60% / 50% 50% 50% 50%", "45% 55% 50% 50% / 55% 45% 55% 45%", "50% 50% 40% 60% / 50% 50% 50% 50%"]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />

      {/* ==================== MAIN CONTENT CONTAINER ==================== */}
      <div className="max-w-6xl mx-auto px-6 relative z-20">
        
        {/* ==================== UPPER LEFT SECTION (Standalone Heading Box) ==================== */}
        <div className="w-full text-left max-w-xl mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-[54px] font-black tracking-tight text-slate-900 leading-[1.05] uppercase">
            House Open the <br /> Conversation!
          </h2>
          
          {/* Custom Teal Wave SVG Line directly beneath the heading */}
          {/* <div className="w-16 h-2 mt-4 mb-8">
            <svg viewBox="0 0 60 10" fill="none" className="w-full stroke-[#00B4A4] stroke-[4] stroke-linecap-round">
              <path d="M2,5 Q8,1 14,5 T26,5 T38,5 T50,5 T58,5" />
            </svg>
          </div> */}
        </div>

        {/* ==================== LOWER CONTENT SPLIT GRID ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: DESCRIPTIVE TEXT */}
          <div className="lg:col-span-5 text-left space-y-5 text-slate-600 font-medium text-sm md:text-base leading-relaxed max-w-md pt-2">
            <p>
              Ready to take the plunge and create a digital splash? 
              Whether you’re looking for a complete marketing overhaul, 
              a fresh new look, or a website that stands the test of time, 
              we’re here for you. [cite: Its Digital House is a full-service creative digital agency dedicated to helping businesses build, grow, and transform their online identity. They combine design, technology, and digital strategy to create seamless experiences. Their mission is to empower businesses through modern digital solutions that enhance visibility, strengthen branding, and accelerate growth.]
            </p>
            <p className="font-bold text-slate-900 pt-2">
              Book a call with our experts and take the first step toward 
              reaching your digital and business goals.
            </p>
          </div>

          {/* RIGHT COLUMN: GRADIENT LEAD CAPTURE FORM */}
          <div className="lg:col-span-7 w-full max-w-xl mx-auto lg:mx-0 lg:mt-[-60px]">
            {/* Note: lg:mt-[-60px] pulls the form up slightly on desktop to balance out the top left text space */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full bg-gradient-to-b from-[#f34c68] via-[#e5195e] to-[#c70961] text-white p-6 md:p-9 rounded-[32px] shadow-[0_30px_60px_-15px_rgba(229,25,94,0.3)]"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* First Name & Last Name Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    name="firstName"
                    placeholder="First Name*" 
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-[#f4f4f4]/95 text-slate-900 placeholder-slate-500 rounded-xl px-4 py-3.5 text-xs font-bold border-none outline-none focus:bg-white transition-all duration-200"
                  />
                  <input 
                    type="text" 
                    name="lastName"
                    placeholder="Last Name*" 
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-[#f4f4f4]/95 text-slate-900 placeholder-slate-500 rounded-xl px-4 py-3.5 text-xs font-bold border-none outline-none focus:bg-white transition-all duration-200"
                  />
                </div>

                {/* Email Input */}
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email*" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#f4f4f4]/95 text-slate-900 placeholder-slate-500 rounded-xl px-4 py-3.5 text-xs font-bold border-none outline-none focus:bg-white transition-all duration-200"
                />

                {/* Phone Input */}
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Phone*" 
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#f4f4f4]/95 text-slate-900 placeholder-slate-500 rounded-xl px-4 py-3.5 text-xs font-bold border-none outline-none focus:bg-white transition-all duration-200"
                />

                {/* Website Input */}
                <input 
                  type="text" 
                  name="website"
                  placeholder="Website" 
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full bg-[#f4f4f4]/95 text-slate-900 placeholder-slate-500 rounded-xl px-4 py-3.5 text-xs font-bold border-none outline-none focus:bg-white transition-all duration-200"
                />

                {/* Message Textarea */}
                <textarea 
                  name="message"
                  rows="3" 
                  placeholder="Tell us more about your project or campaign*" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#f4f4f4]/95 text-slate-900 placeholder-slate-500 rounded-xl px-4 py-3.5 text-xs font-bold border-none outline-none focus:bg-white resize-none transition-all duration-200"
                />

                {/* Newsletter Box */}
                <div className="flex items-center gap-2.5 pt-1 select-none">
                  <input 
                    type="checkbox" 
                    id="newsletter" 
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="w-3.5 h-3.5 accent-[#e5195e] cursor-pointer rounded"
                  />
                  <label htmlFor="newsletter" className="text-[10px] md:text-[11px] font-bold text-white/90 cursor-pointer">
                    Join our quarterly newsletter
                  </label>
                </div>

                {/* Cloudflare Mock Security Badge */}
                <div className="bg-white rounded-xl p-3 flex items-center justify-between border border-white/10 shadow-inner mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#00B4A4] rounded-full flex items-center justify-center text-white text-xs">
                      ✓
                    </div>
                    <span className="text-[11px] font-black text-slate-800 uppercase tracking-wider">Success!</span>
                  </div>
                  <div className="flex flex-col items-end opacity-90">
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Secured by</span>
                    <span className="text-[11px] font-black text-[#F48120] italic tracking-tight leading-none">CLOUDFLARE</span>
                  </div>
                </div>

                {/* Submit Action Button */}
                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  className="w-full border-2 border-white bg-transparent hover:bg-white hover:text-[#e5195e] text-white py-3.5 rounded-xl font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-2 transition-all duration-200 mt-4 cursor-pointer outline-none"
                >
                  <span>Schedule A Call</span>
                  <span className="text-sm font-bold">→</span>
                </motion.button>

                {/* Privacy Text */}
                <div className="text-center pt-2 select-none">
                  <p className="text-[9px] font-bold text-white/60 tracking-wide">
                    🔒 By submitting this form you agree to our{' '}
                    <a href="#privacy" className="underline text-white hover:text-white/80 transition-colors">
                      privacy policy
                    </a>.
                  </p>
                </div>

              </form>
            </motion.div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default AboutContactForm;