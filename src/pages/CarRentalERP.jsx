import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CarRentalERP = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const challenges = [
    'Manual booking management',
    'Double reservations',
    'Fleet tracking issues',
    'Contract management difficulties',
    'Delayed payments',
    'Vehicle maintenance oversight',
    'Driver assignment problems',
    'Revenue leakage',
    'Poor reporting',
    'Customer management issues',
  ];

  const workflow = [
    'Customer Inquiry',
    'Booking',
    'Vehicle Allocation',
    'Contract',
    'Payment',
    'Vehicle Return',
    'Reporting',
  ];

  const faqItems = [
    { q: 'How much does a Car Rental ERP cost?', a: 'Pricing is tailored to your fleet size, integrations and custom workflows. We provide a detailed proposal after discovery.' },
    { q: 'Can it support multiple branches?', a: 'Yes — our ERP supports multiple locations, pickup/drop-off points, and branch transfers.' },
    { q: 'Does it include mobile apps?', a: 'Yes — driver, manager and customer mobile experiences can be included as part of the solution.' },
    { q: 'Can we integrate GPS?', a: 'Absolutely — live tracking, route history, geofencing and driver behaviour monitoring are supported.' },
    { q: 'Can we integrate QuickBooks?', a: 'Yes — we support QuickBooks, Xero, Sage and Zoho Books connections for financial sync.' },
    { q: 'Is it cloud based?', a: 'Yes — the platform can be deployed securely in the cloud with fast access across teams.' },
    { q: 'Can it support multiple currencies?', a: 'Yes — billing, invoicing and reporting can handle multi-currency operations.' },
    { q: 'Is it GDPR compliant?', a: 'Yes — we build with GDPR, SSL encryption, audit logs and access controls in mind.' },
    { q: 'How long does development take?', a: 'Typical delivery ranges from 8 to 16 weeks depending on complexity and integrations.' },
    { q: 'Do you provide support after launch?', a: 'Yes — we offer ongoing support, maintenance and enhancement services after deployment.' },
  ];

  const statCards = [
    { label: 'Faster Booking Cycle', value: '60%' },
    { label: 'Reduced Double Bookings', value: '82%' },
    { label: 'Maintenance Uptime', value: '95%' },
    { label: 'Finance Accuracy', value: '99.7%' },
  ];

  return (
    <div className="bg-white text-slate-950 font-sans selection:bg-slate-900 selection:text-white">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariant}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden bg-slate-50"
      >
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.12),_transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-6">
              <span className="text-sm font-bold uppercase tracking-[0.35em] text-slate-500">Enterprise Car Rental ERP</span>
              <h1 className="text-5xl font-black tracking-tight leading-tight lg:text-6xl">A smart rental ERP for cleaner operations and faster growth</h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">A modern white-themed platform that unifies fleet, bookings, finance, contracts and customer operations in one responsive solution.</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-slate-200/20">Request Demo</motion.button>
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-sm">Free Consultation</motion.button>
              </div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="grid gap-4 sm:grid-cols-2">
              {['ERP Dashboard', 'Vehicle Management', 'Revenue Analytics', 'Booking Calendar', 'Fleet Monitoring'].map((item, index) => (
                <motion.div key={item} whileHover={{ y: -4, x: index % 2 === 0 ? 0 : 2 }} className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40 ${index === 1 ? 'sm:col-span-2' : ''}`}>
                  <div className="mb-3 text-xs uppercase tracking-[0.32em] text-slate-400">Feature</div>
                  <h3 className="text-xl font-bold text-slate-900">{item}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item === 'Booking Calendar' ? 'Real-time booking visibility for every vehicle.' : item === 'Revenue Analytics' ? 'Live P&L and revenue trends for your fleet.' : item === 'Fleet Monitoring' ? 'Status overview of active, reserved and serviced cars.' : 'Fast access to mission-critical rental controls.'}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} transition={{ duration: 0.7, delay: 0.1 }} className="py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_0.5fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Challenges Car Rental Teams Face</h2>
              <p className="mt-4 max-w-2xl text-slate-600">Running a rental fleet is complex. Manual workflows, split systems and billing gaps hurt revenue and customer loyalty.</p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {challenges.map((challenge) => (
                  <motion.div key={challenge} whileHover={{ y: -4 }} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold text-slate-900">{challenge}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="space-y-4 rounded-[2rem] bg-slate-100 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Business Impact</h3>
              <p className="text-sm text-slate-600">A unified rental ERP reduces errors, accelerates response times, and turns fleet data into measurable growth.</p>
              <div className="grid gap-4">
                {statCards.map((card) => (
                  <div key={card.label} className="rounded-3xl bg-white p-5 shadow-sm">
                    <p className="text-3xl font-black text-slate-900">{card.value}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">{card.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} transition={{ duration: 0.7, delay: 0.15 }} className="py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_0.6fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">One Platform for Fleet, Finance, and Customer Experience</h2>
              <p className="mt-4 max-w-2xl text-slate-600">Bring every rental process into one cleanly designed system so your team can respond faster and scale with confidence.</p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {['Operations', 'Finance', 'Fleet', 'Customer Management', 'Reporting', 'Staff Management'].map((item) => (
                  <motion.div key={item} whileHover={{ y: -4 }} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="font-bold text-slate-900">{item}</h3>
                    <p className="mt-2 text-sm text-slate-500">{item === 'Operations' ? 'Streamline bookings, dispatch and service workflows.' : item === 'Finance' ? 'Automate billing, taxes and accounting sync.' : item === 'Fleet' ? 'Monitor vehicle status and availability in real time.' : item === 'Customer Management' ? 'Maintain customer profiles and communication history.' : item === 'Reporting' ? 'Generate performance reports across the business.' : 'Manage users, roles and driver assignments.'}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <h3 className="text-xl font-black text-slate-900">Rental Workflow</h3>
              <div className="mt-8 space-y-4">
                {workflow.map((step, index) => (
                  <motion.div key={step} whileHover={{ x: 4 }} className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white">{index + 1}</div>
                    <div>
                      <p className="font-semibold text-slate-900">{step}</p>
                      <p className="text-sm text-slate-500">{step === 'Customer Inquiry' ? 'First touchpoint for new rental requests.' : step === 'Booking' ? 'Confirm vehicle reservation immediately.' : step === 'Vehicle Allocation' ? 'Assign the best car for the request.' : step === 'Contract' ? 'Generate digital agreements instantly.' : step === 'Payment' ? 'Collect payment and secure deposit.' : step === 'Vehicle Return' ? 'Track returns, inspections and closing details.' : 'Produce analytics and business reports.'}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} transition={{ duration: 0.7, delay: 0.2 }} className="py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Fleet & Booking Highlights</h2>
          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {[
              { title: 'Vehicle Inventory Management', items: ['Unlimited vehicles', 'Vehicle categories', 'Registration tracking', 'VIN management', 'Insurance & documents'] },
              { title: 'Fleet Monitoring', items: ['Vehicle status', 'Available', 'Reserved', 'Under Maintenance', 'Out of Service'] },
              { title: 'Vehicle History', items: ['Previous rentals', 'Repairs', 'Accidents', 'Maintenance logs'] },
            ].map((block) => (
              <motion.div key={block.title} whileHover={{ y: -4 }} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-black text-slate-900">{block.title}</h3>
                <ul className="mt-6 space-y-3 text-slate-600 text-sm">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900" />{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} transition={{ duration: 0.7, delay: 0.25 }} className="py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Customer & Communication Management</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { title: 'Customer Profiles', items: ['Customer database', 'License records', 'Rental history'] },
              { title: 'Customer Segmentation', items: ['VIP customers', 'Corporate clients', 'Frequent renters'] },
              { title: 'Communication Tools', items: ['SMS notifications', 'Email notifications', 'Booking reminders'] },
            ].map((block) => (
              <motion.div key={block.title} whileHover={{ y: -4 }} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-black text-slate-900">{block.title}</h3>
                <ul className="mt-6 space-y-3 text-slate-600 text-sm">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900" />{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} transition={{ duration: 0.7, delay: 0.3 }} className="border-t border-slate-200 bg-slate-50 py-24 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-4">
            {faqItems.map((item, index) => (
              <motion.div key={item.q} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <button
                  type="button"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left text-slate-900"
                >
                  <span className="font-semibold">{item.q}</span>
                  <span className="text-slate-500">{activeFaq === index ? '-' : '+'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {activeFaq === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="px-6 pb-6 text-slate-600">
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} transition={{ duration: 0.7, delay: 0.35 }} className="py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Ready to transform your car rental business?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">Start with a white-themed ERP experience built for faster bookings, cleaner workflows, and better fleet profitability.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="rounded-full bg-slate-900 px-10 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-slate-200/30">Book Consultation</motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="rounded-full border border-slate-200 bg-white px-10 py-4 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-sm">Request Demo</motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CarRentalERP;
