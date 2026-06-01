import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactDetailsSection = () => {
  // Main heading ke liye aapka exact custom gradient style
  const customGradientStyle = {
    background: 'linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  return (
    <section className="w-full bg-white text-slate-950 px-4 py-16 sm:py-24 sm:px-6 lg:px-12 xl:px-16 overflow-hidden">
      <div className="mx-auto max-w-[1320px]">
        {/* Responsive Grid Setup */}
        <div className="grid gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
          
          {/* Left Column: Details Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full max-w-xl space-y-8"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-rose-500">Find Us</p>
              <h2 
                style={customGradientStyle}
                className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight inline-block bg-clip-text text-transparent"
              >
                Our Head Office
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg font-light">
                Have any inquiries or want to grab a cup of coffee with us? Feel free to reach out directly through our local channel or visit our creative space.
              </p>
            </div>

            {/* Info Cards Stack */}
            <div className="space-y-4">
              
              {/* Email Info Card - Added directly above Phone Number */}
              <a 
                href="mailto:hello@itsdigitalhouse.com"
                className="group flex items-center gap-5 rounded-[28px] border border-slate-100 bg-slate-50/50 p-6 transition duration-300 hover:border-slate-200 hover:bg-slate-50 hover:shadow-sm"
              >
                {/* Icon box background transitions to pink/red gradient node on hover */}
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white transition duration-300 group-hover:bg-[#d24a8a]">
                  <FaEnvelope className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Email Us Anytime</p>
                  <p 
                    className="mt-1 text-base sm:text-lg font-bold text-slate-950 tracking-tight transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#e1b054] group-hover:via-[#ee3444] group-hover:to-[#f1574d] bg-clip-text"
                  >
                    info@itsdigitalhouse.com
                  </p>
                </div>
              </a>

              {/* Phone Info Card */}
              <a 
                href="tel:+447868194877"
                className="group flex items-center gap-5 rounded-[28px] border border-slate-100 bg-slate-50/50 p-6 transition duration-300 hover:border-slate-200 hover:bg-slate-50 hover:shadow-sm"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white transition duration-300 group-hover:bg-[#e1b054]">
                  <FaPhoneAlt className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Call Us Direct</p>
                  <p 
                    className="mt-1 text-base sm:text-lg font-bold text-slate-950 tracking-tight transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#e1b054] group-hover:via-[#ee3444] group-hover:to-[#f1574d] bg-clip-text"
                  >
                    +44 7868 194877
                  </p>
                </div>
              </a>

              {/* Address Info Card */}
              <div className="group flex items-start gap-5 rounded-[28px] border border-slate-100 bg-slate-50/50 p-6 transition duration-300 hover:border-slate-200 hover:bg-slate-50 hover:shadow-sm">
                <div className="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white transition duration-300 group-hover:bg-[#7361a7]">
                  <FaMapMarkerAlt className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">Main Address</p>
                  <p className="mt-1 text-base sm:text-lg font-bold text-slate-950 leading-snug tracking-tight">
                    Flat 68t 4 Mann Island, Liverpool, Merseyside
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Map Embed Wrapper */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full"
          >
            <div className="relative w-full h-[350px] sm:h-[450px] overflow-hidden rounded-[40px] border border-slate-200 bg-slate-50 shadow-[0_30px_100px_rgba(15,23,42,0.08)]">
              <iframe
                title="Office Location Map"
                src="https://maps.google.com/maps?q=Flat%2068t%204%20Mann%20Island,%20Liverpool,%20Merseyside&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactDetailsSection;