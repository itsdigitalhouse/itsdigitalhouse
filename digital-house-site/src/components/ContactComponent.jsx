import React, { useState } from 'react';
import { FaEnvelope, FaLinkedinIn, FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import creativeAgency from '../assets/creative-agency.jpeg';

const fadeInContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

const fadeInUpItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.55, ease: [0.215, 0.61, 0.355, 1] } 
  }
};

const contactItems = [
  { id: 1, label: 'Email Us',   value: 'hello@itsdigitalhouse.com',          href: 'mailto:hello@itsdigitalhouse.com',                        accent: 'bg-[#3b82f6]',                                                          icon: FaEnvelope   },
  { id: 2, label: 'LinkedIn',   value: 'linkedin.com/its-digital-house',     href: 'https://www.linkedin.com/company/its-digital-house/',     accent: 'bg-[#0ea5e9]',                                                          icon: FaLinkedinIn },
  { id: 3, label: 'Instagram',  value: 'instagram.com/itsdigitalhouse',      href: 'https://www.instagram.com/itsdigitalhouse/',              accent: 'bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400',          icon: FaInstagram  },
  { id: 4, label: 'Facebook',   value: 'facebook.com/Itsdigitalhousee',      href: 'https://www.facebook.com/Itsdigitalhousee/',              accent: 'bg-[#1877f2]',                                                          icon: FaFacebookF  },
  { id: 5, label: 'Pinterest',  value: 'pinterest.com/itsdigitalhouse',      href: 'https://www.pinterest.com/itsdigitalhouse/',             accent: 'bg-[#e60023]',                                                          icon: FaPinterestP },
  { id: 6, label: 'X',          value: 'x.com/Itsdigitalhouse',             href: 'https://x.com/Itsdigitalhouse',                          accent: 'bg-[#000000]',                                                          icon: FaXTwitter   },
];

const ContactItemCard = ({ label, value, href, accent, icon: Icon }) => {
  return (
    <motion.a
      variants={fadeInUpItem}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="group block overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-[0_20px_60px_rgba(15,23,42,0.1)]"
    >
      <div className="flex items-start gap-4">
        <div className={`mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-3xl ${accent} text-lg font-semibold text-white shadow-lg shadow-black/10 transition-transform duration-300 group-hover:scale-105`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-grow">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500 font-medium">{label}</p>
          <p className="mt-3 break-all text-sm font-semibold text-slate-950 sm:text-base">{value}</p>
        </div>
      </div>
    </motion.a>
  );
};

const ContactHero = () => {
  const [formData, setFormData] = useState({ from_name: '', from_email: '', from_phone: '', message: '' });
  const [status, setStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
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
      setFormData({ from_name: '', from_email: '', from_phone: '', message: '' });
    })
    .catch(() => {
      setStatus('error');
    });
  };

  return (
    <section className="relative overflow-hidden bg-white text-slate-950">
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(${creativeAgency})` }} />
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-slate-50/95 to-white/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),transparent_24%)]" />

      <div className="relative mx-auto max-w-[1440px] px-4 py-16 sm:py-20 sm:px-6 lg:px-12 xl:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeInContainer}
          className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start"
        >
          {/* Left */}
          <motion.div variants={fadeInUpItem} className="max-w-2xl lg:pt-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-[-0.04em] text-slate-950 leading-[1.1] sm:leading-tight">
              Talk to the team building iconic digital experiences.
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              From branded campaigns to performance-led digital launches, our creative studio crafts stories that convert, inspire, and grow your brand presence.
            </p>
            <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-[0_20px_80px_rgba(15,23,42,0.04)]">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500 font-medium">Trusted by</p>
                <p className="mt-3 text-3xl font-black text-slate-950">150+</p>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-[0_20px_80px_rgba(15,23,42,0.04)]">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500 font-medium">Fast response</p>
                <p className="mt-3 text-3xl font-black text-slate-950">Within 24 hours</p>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div variants={fadeInUpItem} className="relative w-full">
            <div className="rounded-[40px] border border-slate-200 bg-white p-5 shadow-[0_40px_120px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="space-y-6">
                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-slate-950">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500 font-medium">Project briefing</p>
                  <h2 className="mt-3 text-2xl font-black tracking-[-0.03em]">Drop the key details. We'll bring the strategy.</h2>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    Share your ambitions, timeline, and budget. We'll reply with the right plan, team, and launch direction.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div>
                    <label className="text-xs uppercase tracking-[0.24em] text-slate-500 font-medium pl-2">Name</label>
                    <input type="text" name="from_name" value={formData.from_name} onChange={handleInputChange} required placeholder="Your name"
                      className="mt-3 w-full rounded-[28px] border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-950 outline-none transition-all focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-400/10" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.24em] text-slate-500 font-medium pl-2">Email</label>
                    <input type="email" name="from_email" value={formData.from_email} onChange={handleInputChange} required placeholder="you@example.com"
                      className="mt-3 w-full rounded-[28px] border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-950 outline-none transition-all focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-400/10" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.24em] text-slate-500 font-medium pl-2">Phone Number</label>
                    <input type="tel" name="from_phone" value={formData.from_phone} onChange={handleInputChange} placeholder="Enter your phone number"
                      className="mt-3 w-full rounded-[28px] border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-950 outline-none transition-all focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-400/10" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.24em] text-slate-500 font-medium pl-2">Message</label>
                    <textarea rows="4" name="message" value={formData.message} onChange={handleInputChange} required placeholder="Tell us what you want to build"
                      className="mt-3 w-full rounded-[28px] border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-950 outline-none transition-all focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-400/10 resize-none" />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-950 transition-all duration-300 hover:brightness-110 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed">
                    {status === 'sending' ? 'Sending...' : 'Send project brief'}
                  </button>

                  {status === 'success' && (
                    <div className="rounded-[20px] bg-green-50 border border-green-200 px-5 py-4 text-sm text-green-700 font-medium text-center">
                      ✅ Message sent! We'll get back to you within 24 hours.
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="rounded-[20px] bg-red-50 border border-red-200 px-5 py-4 text-sm text-red-600 font-medium text-center">
                      ❌ Something went wrong. Please try again or email us directly.
                    </div>
                  )}
                </form>

                <div className="rounded-[28px] border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-600 text-center font-medium">
                  Prefer a direct call? We'll schedule a fast 15-minute creative discovery session.
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactItemsSection = () => {
  return (
    <section className="w-full bg-white px-4 py-16 sm:py-20 sm:px-6 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeInContainer}
          className="w-full"
        >
          <motion.div variants={fadeInUpItem} className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-500 font-bold">Contact channels</p>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 leading-tight">
              CONNECT WHERE IT FITS YOUR WORKFLOW.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm leading-7 text-slate-600 sm:text-base">
              Choose your channel, share your brief, or follow the feed. We make it simple to start a conversation with our creative team.
            </p>
          </motion.div>

          <motion.div variants={fadeInContainer} className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {contactItems.map((item) => (
              <ContactItemCard key={item.id} {...item} />
            ))}
          </motion.div>

          <motion.div variants={fadeInUpItem} className="mt-12 rounded-[32px] border border-amber-400/10 bg-amber-50/60 p-6 sm:p-8 text-center shadow-[0_35px_120px_rgba(15,23,42,0.06)]">
            <h3 className="text-lg font-black text-slate-950 sm:text-2xl">Need a bespoke pitch or campaign proposal?</h3>
            <p className="mt-3 max-w-2xl mx-auto text-sm leading-7 text-slate-600 sm:text-base">
              Send us a quick note about your challenge and we'll respond with the right creative direction, timeline, and investment estimate.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactComponent = () => {
  return (
    <div className="w-full bg-white text-slate-950">
      <ContactHero />
      <ContactItemsSection />
    </div>
  );
};

export default ContactComponent;
