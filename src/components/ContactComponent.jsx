import React from 'react';
import { FaEnvelope, FaLinkedinIn, FaInstagram, FaFacebookF, FaPinterestP, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import creativeAgency from '../assets/creative-agency.jpeg';

// Animation Config (Smooth entrance built without breaking layouts)
const fadeInContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const fadeInUpItem = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } }
};

const contactItems = [
  { id: 1, label: 'Email Us', value: 'hello@itsdigitalhouse.com', href: 'mailto:hello@itsdigitalhouse.com', accent: 'bg-[#3b82f6]', icon: FaEnvelope },
  { id: 2, label: 'LinkedIn', value: 'linkedin.com/itsdigitalhouse', href: 'https://linkedin.com/in/itsdigitalhouse', accent: 'bg-[#0ea5e9]', icon: FaLinkedinIn },
  { id: 3, label: 'Instagram', value: 'instagram.com/itsdigitalhouse', href: 'https://instagram.com/itsdigitalhouse', accent: 'bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400', icon: FaInstagram },
  { id: 4, label: 'Facebook', value: 'facebook.com/itsdigitalhouse', href: 'https://facebook.com/itsdigitalhouse', accent: 'bg-[#1877f2]', icon: FaFacebookF },
  { id: 5, label: 'Pinterest', value: 'pinterest.com/itsdigitalhouse', href: 'https://pinterest.com/itsdigitalhouse', accent: 'bg-[#e60023]', icon: FaPinterestP },
  { id: 6, label: 'Twitter', value: 'twitter.com/itsdigitalhouse', href: 'https://twitter.com/itsdigitalhouse', accent: 'bg-[#1d9bf0]', icon: FaTwitter },
];

const ContactItemCard = ({ label, value, href, accent, icon: Icon }) => {
  return (
    <motion.a
      variants={fadeInUpItem}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="group block overflow-hidden rounded-[28px] border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
    >
      <div className="flex items-start gap-4">
        <div className={`mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-3xl ${accent} text-lg font-semibold text-white shadow-lg shadow-black/10`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-grow">
          <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{label}</p>
          <p className="mt-3 break-all text-sm font-semibold text-slate-950 sm:text-base">{value}</p>
        </div>
      </div>
    </motion.a>
  );
};

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-white text-slate-950">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${creativeAgency})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-slate-50/95 to-white/95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),transparent_24%)]" />

      <div className="relative mx-auto max-w-[1440px] px-4 py-16 sm:py-20 sm:px-6 lg:px-12 xl:px-16">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInContainer}
          className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start"
        >
          <motion.div variants={fadeInUpItem} className="max-w-2xl">
            <span className="inline-flex rounded-full border border-amber-300/30 bg-amber-200/10 px-4 py-2 text-xs uppercase tracking-[0.36em] text-amber-700">
              Creative contact
            </span>
            <h1 className="mt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-[-0.04em] text-slate-950 leading-[1.1] sm:leading-tight">
              Talk to the team building iconic digital experiences.
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              From branded campaigns to performance-led digital launches, our creative studio crafts stories that convert, inspire, and grow your brand presence.
            </p>

            <div className="mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Trusted by</p>
                <p className="mt-3 text-3xl font-black text-slate-950">150+</p>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Fast response</p>
                <p className="mt-3 text-3xl font-black text-slate-950">Within 24 hours</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUpItem} className="relative w-full">
            <div className="rounded-[40px] border border-slate-200 bg-white p-5 shadow-[0_40px_120px_rgba(15,23,42,0.12)] sm:p-8">
              <div className="space-y-6">
                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 text-slate-950">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Project briefing</p>
                  <h2 className="mt-3 text-2xl font-black tracking-[-0.03em]">Drop the key details. We’ll bring the strategy.</h2>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    Share your ambitions, timeline, and budget. We’ll reply with the right plan, team, and launch direction.
                  </p>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                  <div>
                    <label className="text-xs uppercase tracking-[0.24em] text-slate-500">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="mt-3 w-full rounded-[28px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-950 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-[0.24em] text-slate-500">Email</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="mt-3 w-full rounded-[28px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-950 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-[0.24em] text-slate-500">Project</label>
                    <input
                      type="text"
                      placeholder="Brief description"
                      className="mt-3 w-full rounded-[28px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-950 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-[0.24em] text-slate-500">Message</label>
                    <textarea
                      rows="5"
                      placeholder="Tell us what you want to build"
                      className="mt-3 w-full rounded-[28px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-950 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-950 transition hover:brightness-110"
                  >
                    Send project brief
                  </button>
                </form>

                <div className="rounded-[28px] border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-600">
                  Prefer a direct call? We’ll schedule a fast 15-minute creative discovery session.
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
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInContainer}
          className="w-full"
        >
          <motion.div variants={fadeInUpItem} className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-500/90">Contact channels</p>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-950 leading-tight">
              Connect where it fits your workflow.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm leading-7 text-slate-600 sm:text-base">
              Choose your channel, share your brief, or follow the feed. We make it simple to start a conversation with our creative team.
            </p>
          </motion.div>

          {/* Social Grid Container Mapping Cards */}
          <motion.div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {contactItems.map((item) => (
              <ContactItemCard key={item.id} {...item} />
            ))}
          </motion.div>

          <motion.div variants={fadeInUpItem} className="mt-12 rounded-[32px] border border-amber-400/10 bg-amber-50/60 p-6 sm:p-8 text-center shadow-[0_35px_120px_rgba(15,23,42,0.12)]">
            <h3 className="text-lg font-black text-slate-950 sm:text-2xl">Need a bespoke pitch or campaign proposal?</h3>
            <p className="mt-3 max-w-2xl mx-auto text-sm leading-7 text-slate-600 sm:text-base">
              Send us a quick note about your challenge and we’ll respond with the right creative direction, timeline, and investment estimate.
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