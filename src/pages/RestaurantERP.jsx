import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RestaurantERP = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { value: "25%", label: "Reduction in Food Wastage" },
    { value: "3x", label: "Faster Table Turnaround Rate" },
    { value: "100%", label: "Real-time Multi-Franchise Sync" },
    { value: "0%", label: "End-of-Day Billing Discrepancies" }
  ];

  const features = [
    { title: "Live Floor & Table Management", desc: "Visualize your dining layout in real-time. Track reservation statuses, seat occupancies, and pending KOTs (Kitchen Order Tickets) dynamically." },
    { title: "Smart Inventory & Recipe Costing", desc: "Monitor raw material stock levels with precision auto-deduction based on recipe consumption. Receive instant low-stock threshold alerts." },
    { title: "Omnichannel Order Aggregator", desc: "Consolidate all orders from dine-in, takeaway, and third-party delivery apps (like Foodpanda) into a single unified POS dashboard." },
    { title: "Automated Vendor Management", desc: "Streamline supply chain workflows, manage raw ingredient purchase orders (POs), track supplier balance payouts, and audit ingredient costs." },
    { title: "Centralized Multi-Outlet Control", desc: "Manage menus, pricing tiers, and promotional campaigns across multiple geographical branches or cloud kitchen networks from one hub." },
    { title: "Advanced Analytics & Daily Reports", desc: "Generate depth-filled financial audits, sales charts, staff performance logs, and peak-hour predictive footfall tracking." }
  ];

  const useCases = [
    { sector: "Fine Dining & Casual Restaurants", application: "Complete guest relationship management, reservation pipelines, waiter mobile-POS integration, and premium tableside billing systems." },
    { sector: "Quick Service Restaurants (QSR)", application: "Ultra-fast kitchen display system (KDS) coordination, self-ordering kiosk sync, and instant barcode generation for high-speed cashout lines." },
    { sector: "Cloud & Ghost Kitchen Networks", application: "Centralized stock dispatching hubs, heavy multi-brand menu routing, integrated logistics tracking, and cross-channel margin optimization analytics." }
  ];

  const techSpecs = [
    { category: "Hardware & Offline Capability", details: "Native support for legacy thermal printers, barcode scanners, cash drawers, and dual-screen customer displays with robust offline-mode sync capability." },
    { category: "Integration Protocols", details: "REST API engine compatible with leading payment gateways, digital wallets, biometric attendance hardware, and standard accounting software." },
    { category: "Cloud & Reliability", details: "Hosted on secure high-speed servers with automated backup loops, granular role-based user access controls, and active end-to-end data encryption." }
  ];

  const steps = [
    { num: "01", title: "Order Placement", desc: "Orders logged via waiter apps or online channels seamlessly stream directly onto the centralized kitchen monitor system." },
    { num: "02", title: "Kitchen Processing", desc: "Kitchen display systems (KDS) sort tickets by preparation times, minimizing customer delays and streamlining chef operations." },
    { num: "03", title: "Billing & Audit", desc: "Instant checkout via multiple payment modes triggers automated inventory deductions and syncs daily financial ledgers." }
  ];

  const faqs = [
    { q: "What is an enterprise Restaurant ERP system?", a: "An enterprise Restaurant ERP is a comprehensive, centralized software framework designed to manage every facet of a food business—ranging from front-of-house point-of-sale (POS) systems and live table tracking to back-of-house inventory tracking, automated recipe costing, and vendor management." },
    { q: "Can the system handle operations if the internet goes down?", a: "Yes, our Restaurant ERP features a highly robust offline core mode. All sales, KOT creation, and bill printing will continue to function normally at the local outlet. Once the internet connection is restored, the data automatically syncs with the cloud master server." },
    { q: "How does the recipe management system control ingredient wastage?", a: "When you upload a recipe blueprint, the ERP auto-deducts the precise ingredient portions from your warehouse stock every time a dish is ordered. Discrepancies between actual stock and ideal software stock point out exactly where wastage or leakage is happening." },
    { q: "Does it support deep data synchronization for multi-outlet franchises?", a: "Absolutely. The software is engineered for multi-tenant scales. Franchise owners can monitor sales performance, dispatch bulk central kitchen inventory, and alter universal menu pricing across hundreds of branches simultaneously from a single master admin screen." }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 selection:bg-[#ee3444]/10">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-slate-50">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#ee3444]/5 blur-[120px]" />
          <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] rounded-full bg-[#e1b054]/5 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#ee3444]" />
                <span className="text-[11px] font-black tracking-[0.3em] text-slate-400 uppercase">Automation Framework</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-950 leading-[1.1] mb-6">
                Next-Gen <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1b054] via-[#ee3444] to-[#75b0d2]">
                  Restaurant ERP
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                Streamline hospitality workflows. Scale your food enterprise with real-time automated recipe cost tracking, integrated omnichannel point-of-sale, optimized multi-location stock routing, and deep financial auditing.
              </p>
              <button className="font-black uppercase text-[12px] bg-slate-950 text-white rounded-full px-8 py-4 hover:bg-slate-900 transition-all shadow-xl shadow-slate-950/10 hover:scale-[1.02]">
                Request Enterprise Demo
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-[350px] sm:h-[450px] rounded-[3rem] overflow-hidden shadow-2xl relative border border-slate-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80" 
                alt="High Performance Enterprise Restaurant ERP Management System Display" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. STATS / METRICS SECTION */}
      <section className="py-12 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center lg:text-left flex flex-col items-center lg:items-start"
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ee3444] to-[#e1b054]">
                    {stat.value}
                  </span>
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-medium leading-short max-w-[220px]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE MODULES SECTION */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mb-4">Architectural Blueprint & Modules</h2>
            <p className="text-slate-600 text-sm sm:text-base">Engineered specifically for high-volume modern franchises, gourmet kitchens, and growing multi-outlet chains.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {features.map((f, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-slate-100 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 flex flex-col items-start group"
              >
                <div className="text-xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#e1b054] via-[#ee3444] to-[#75b0d2] group-hover:scale-110 transition-transform duration-300">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-black text-slate-950 tracking-tight mb-3">{f.title}</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. INDUSTRY USE-CASES SECTION */}
      <section className="py-20 lg:py-32 bg-slate-950 text-white rounded-[3rem] sm:rounded-[4rem] mx-4 sm:mx-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-black tracking-[0.3em] text-[#e1b054] uppercase block mb-3">Operational Scales</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">Optimized Food Verticals</h2>
            <p className="text-slate-400 text-sm sm:text-base">Discover how our high-precision logic scales effortlessly across your unique hospitality structure.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {useCases.map((uc, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-black text-[#75b0d2] mb-4 tracking-tight">{uc.sector}</h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{uc.application}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WORKFLOW PROCESS PIPELINE */}
      <section className="py-20 lg:py-32 bg-slate-50/70 mt-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#75b0d2]" />
                <span className="text-[11px] font-black tracking-[0.3em] text-slate-400 uppercase">Operational Flow</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mb-4">Frictionless Lifecycle</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                See how orders convert smoothly from digital ticket creation into live material updates and audited financial statements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-start bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                  <span className="text-4xl font-black text-slate-100 absolute top-6 right-6 select-none">{step.num}</span>
                  <h4 className="text-base font-black text-slate-950 uppercase tracking-wide mb-3 mt-4">{step.title}</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. TECHNICAL SPECIFICATIONS MODULE */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mb-4">Technical System Specifications</h2>
            <p className="text-slate-600 text-sm sm:text-base">Architectural protocols built to handle heavy data throughput without experiencing system latency.</p>
          </div>

          <div className="border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
              {techSpecs.map((spec, idx) => (
                <div key={idx} className="p-8 sm:p-12 bg-white flex flex-col items-start">
                  <span className="w-8 h-1 bg-[#ee3444] rounded-full mb-6" />
                  <h4 className="text-base font-black text-slate-950 uppercase tracking-wide mb-3">{spec.category}</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{spec.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. ENTERPRISE GRADE CTA BANNER */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="w-full bg-slate-950 text-white rounded-[3rem] p-8 sm:p-16 relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] rounded-full bg-[#ee3444]/30 blur-[100px]" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase block mb-3">Hospitality Scaling</span>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-[1.15] mb-4">Ready to Automate and Scale Your Food Network?</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Deploy a robust system capable of accelerating your checkout speeds, eliminating revenue leaks, and controlling bulk inventory logistics perfectly.</p>
            </div>
            <div className="relative z-10 whitespace-nowrap">
              <button className="font-black uppercase text-[12px] tracking-wider bg-white text-slate-950 rounded-full px-8 py-4 hover:bg-slate-100 transition-all shadow-xl hover:scale-[1.02]">Schedule Custom Demo</button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION SECTION */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#ee3444] uppercase block mb-3">FAQ Knowledge Base</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-sm sm:text-base">Instant clear insight regarding performance capacities, live inventory tracking, and multi-tenant setup.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden bg-white transition-colors duration-300">
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-slate-950 text-sm sm:text-base tracking-tight">{faq.q}</span>
                    <span className={`text-xl font-bold ml-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#ee3444]' : 'text-slate-400'}`}>
                      ▼
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 pt-0 border-t border-slate-50 text-slate-500 text-xs sm:text-sm leading-relaxed bg-white">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default RestaurantERP;