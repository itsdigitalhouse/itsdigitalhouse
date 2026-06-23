import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const AboutContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    from_email: '',
    from_phone: '',
    message: '',
    newsletter: false
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_59ib6j9',
      'template_kqw1xln',
      e.target,
      'u3sSM2q8rI8TI3eSs'
    )
    .then(() => {
      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        from_email: '',
        from_phone: '',
        message: '',
        newsletter: false
      });
    })
    .catch(() => {
      setStatus('error');
    });
  };

  return (
    <div className="w-full relative bg-[#f4f6f8] py-16 md:py-28 overflow-hidden font-sans">

      {/* BACKGROUND FLOATING SHAPES */}
      <motion.div
        className="absolute left-[-50px] md:left-[-30px] top-[40%] w-[160px] h-[180px] md:w-[240px] md:h-[260px] bg-[#FFD100] rounded-[40%_60%_70%_30%_/_40%_50%_50%_60%] z-10 select-none pointer-events-none"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
          borderRadius: [
            "40% 60% 70% 30% / 40% 50% 50% 60%",
            "50% 50% 60% 40% / 45% 55% 45% 55%",
            "40% 60% 70% 30% / 40% 50% 50% 60%"
          ]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute right-[-50px] md:right-[-20px] bottom-[20%] w-[140px] h-[160px] md:w-[200px] md:h-[220px] bg-[#00B4A4] rounded-[50%_50%_40%_60%_/_50%_50%_50%_50%] z-10 select-none pointer-events-none"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -6, 4, 0],
          borderRadius: [
            "50% 50% 40% 60% / 50% 50% 50% 50%",
            "45% 55% 50% 50% / 55% 45% 55% 45%",
            "50% 50% 40% 60% / 50% 50% 50% 50%"
          ]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-6xl mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT COLUMN */}
          <div className="text-left pt-2">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.05] uppercase mb-8">
              House Open the <br /> Conversation!
            </h2>
            <div className="space-y-6 text-slate-500 font-medium text-base sm:text-lg leading-relaxed max-w-lg">
              <p>
                Ready to take the plunge and create a digital splash?
                Whether you're looking for a complete marketing overhaul,
                a fresh new look, or a website that stands the test of time,
                we're here for you. Its Digital House is a full-service creative
                digital agency dedicated to helping businesses build, grow, and
                transform their online identity.
              </p>
              <p className="font-bold text-slate-950">
                Book a call with our experts and take the first step toward
                reaching your digital and business goals.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Form */}
          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full bg-gradient-to-b from-[#f34c68] via-[#e5195e] to-[#c70961] text-white p-6 md:p-9 rounded-[32px] shadow-[0_30px_60px_-15px_rgba(229,25,94,0.3)]"
            >
              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Hidden full name for EmailJS */}
                <input type="hidden" name="from_name" value={`${formData.firstName} ${formData.lastName}`} />

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

                <input
                  type="email"
                  name="from_email"
                  placeholder="Email*"
                  required
                  value={formData.from_email}
                  onChange={handleChange}
                  className="w-full bg-[#f4f4f4]/95 text-slate-900 placeholder-slate-500 rounded-xl px-4 py-3.5 text-xs font-bold border-none outline-none focus:bg-white transition-all duration-200"
                />

                <input
                  type="tel"
                  name="from_phone"
                  placeholder="Phone*"
                  required
                  value={formData.from_phone}
                  onChange={handleChange}
                  className="w-full bg-[#f4f4f4]/95 text-slate-900 placeholder-slate-500 rounded-xl px-4 py-3.5 text-xs font-bold border-none outline-none focus:bg-white transition-all duration-200"
                />

                <textarea
                  name="message"
                  rows="3"
                  placeholder="Tell us more about your project or campaign*"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#f4f4f4]/95 text-slate-900 placeholder-slate-500 rounded-xl px-4 py-3.5 text-xs font-bold border-none outline-none focus:bg-white resize-none transition-all duration-200"
                />

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

                <div className="bg-white rounded-xl p-3 flex items-center justify-between border border-white/10 shadow-inner mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-[#00B4A4] rounded-full flex items-center justify-center text-white text-xs">✓</div>
                    <span className="text-[11px] font-black text-slate-800 uppercase tracking-wider">Success!</span>
                  </div>
                  <div className="flex flex-col items-end opacity-90">
                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Secured by</span>
                    <span className="text-[11px] font-black text-[#F48120] italic tracking-tight leading-none">CLOUDFLARE</span>
                  </div>
                </div>

                {status === 'success' && (
                  <div className="rounded-xl bg-green-500/20 border border-green-300/30 px-4 py-3 text-sm text-white font-bold text-center">
                    ✅ Message sent! We'll get back to you within 24 hours.
                  </div>
                )}
                {status === 'error' && (
                  <div className="rounded-xl bg-white/20 border border-white/30 px-4 py-3 text-sm text-white font-bold text-center">
                    ❌ Something went wrong. Please try again.
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.985 }}
                  className="w-full border-2 border-white bg-transparent hover:bg-white hover:text-[#e5195e] text-white py-3.5 rounded-xl font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-2 transition-all duration-200 mt-4 cursor-pointer outline-none disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{status === 'sending' ? 'Sending...' : 'Schedule A Call'}</span>
                  {status !== 'sending' && <span className="text-sm font-bold">→</span>}
                </motion.button>

              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContactForm;
