import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ZakyaPOS = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { value: "0.5s", label: "Ultra-Fast Barcode Checkout Speed" },
    { value: "99.99%", label: "Offline Store Billing Continuity" },
    { value: "35%", label: "Increase in Inventory Turnover" },
    { value: "100%", label: "Omnichannel Stock Precision Sync" }
  ];

  const features = [
    { num: "01", title: "Lightning-Fast Point of Sale", desc: "Process thousands of retail transactions daily with zero system lag. Fully optimized for instant barcode scanning, keyboard shortcuts, and immediate digital receipt rendering." },
    { num: "02", title: "Smart Matrix Inventory Control", desc: "Manage stock variants dynamically by size, color, material, and SKU. Establish precise auto-reorder thresholds to completely eliminate manual stockouts." },
    { num: "03", title: "Integrated Customer Loyalty", desc: "Launch custom promotional reward programs, track historical consumer buying behaviors, retain returning shoppers, and issue dynamic point profiles." },
    { num: "04", title: "Centralized Procurement Hub", desc: "Automate purchase orders (POs) across external vendors, map incoming warehouse shipments, and track real-time landed cost valuations." },
    { num: "05", title: "Multi-Store Cloud Synchronization", desc: "Synchronize live stock valuations, universal price matrices, and individual branch cash registers from a single master administrative hub." },
    { num: "06", title: "Tax Compliance & Live Audits", desc: "Generate real-time local tax structures, integrated automated GST reporting modules, digital transaction ledger archiving, and secure fiscal logs." }
  ];

  const useCases = [
    { sector: "Apparel & Fashion Boutiques", application: "Intelligent style/size matrix variants tracking, custom barcode tag generation, seasonal promo scheduling, and unified multi-location store inventory distribution channels." },
    { sector: "Supermarkets & Grocery Chains", application: "High-throughput weighing scale hardware interfaces, batch/expiry data control loops, automated multi-buy bundle logic, and rapid queue-busting terminal modes." },
    { sector: "Electronics & Specialty Retail", application: "Serial number traceability matrices, dynamic warranty logging architectures, complex multi-tier installment plans, and supplier returns optimization pipelines." }
  ];

  const techSpecs = [
    { category: "Hardware Ecosystem Compatibility", details: "Native configurations for USB/Bluetooth thermal bill printers, high-density 2D barcode imagers, customer pole indicators, and secure integrated cash safe drawers." },
    { category: "Sync Architecture Platforms", details: "Robust local client database engines featuring automatic micro-sync background queues to stream offline transaction ledgers directly into cloud systems." },
    { category: "Extensibility Interface", details: "Bi-directional REST API pipelines designed to link storefront operations with external corporate ERPs, logistics networks, and e-commerce carts." }
  ];

  const steps = [
    { num: "I", title: "Scan & Match", desc: "Products are scanned via local high-speed terminals, instantly matching database listings, applying local discounts, and logging tax variables." },
    { num: "II", title: "Secure Settlement", desc: "Accept multiple flexible settlement avenues including card swipes, custom QR wallets, cash notes, or instant loyalty point redemptions." },
    { num: "III", title: "Global Sync", desc: "The checkout loop triggers real-time cloud data push sequences, updating regional warehouse numbers and updating analytics dashboards." }
  ];

  const faqs = [
    { q: "What makes Zakya POS an enterprise-ready retail solution?", a: "Zakya POS provides an ultra-scalable framework tailored for high-volume retail enterprises. It brings desktop terminal velocity combined with micro-second cloud-sync capabilities to manage extensive inventories, multiple retail chains, and detailed tax profiles simultaneously without degrading front-counter checkout speeds." },
    { q: "How does the system handle storefront sales when connectivity drops?", a: "The architecture features an isolated local database core. In the event of a total network blackout, cashiers can continue scanning barcodes, generating print invoices, and closing cash registers normally. Once link status is re-established, all background queues process safely to the cloud cluster." },
    { q: "Can we track stock distribution across multiple storefront locations?", a: "Yes, our stock architecture provides absolute centralized transparency. Branch managers can view stock counts across alternate storefronts or regional fulfillment hubs in real-time, executing localized inter-branch stock transfers and optimizing inventory movement patterns seamlessly." },
    { q: "Does the retail platform generate compliant audit data for accounting setups?", a: "Absolutely. Every closed cart entry maps out complete fiscal meta-data—including itemized sales taxes, payment route codes, cost of goods sold (COGS), and discount parameters. This raw audited data can feed natively into third-party corporate ledgers via unified REST channels." }
  ];

  // Animation Framework Configs
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 selection:bg-[#ee3444]/10 overflow-hidden">
      
      {/* 1. PREMIUM ASYMMETRIC HERO SECTION */}
      <section className="relative py-28 lg:py-40 border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        {/* Animated Ambient Orbs */}
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1], 
              x: [0, 30, 0], 
              y: [0, -20, 0] 
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#ee3444]/5 blur-[160px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1], 
              x: [0, -40, 0], 
              y: [0, 30, 0] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-slate-200/50 blur-[160px]" 
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-[11px] font-black tracking-[0.4em] text-[#ee3444] uppercase bg-white px-5 py-2.5 rounded-full border border-slate-200/80 shadow-sm"
            >
              Retail Velocity Engine
            </motion.span>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mt-8 mb-6 max-w-5xl mx-auto leading-[1.05] text-slate-950">
              High-Velocity Counter Operations with{' '}
              <span 
                className="text-transparent bg-clip-text relative"
                style={{
                  backgroundImage: 'linear-gradient(to right, #e1b054 0%, #d24a8a 20%, #ee3444 40%, #75b0d2 60%, #7361a7 80%, #f1574d 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Zakya POS
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-[4px] bg-[#ee3444]/20 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.6, duration: 1 }}
                />
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
              Eradicate store processing delays. Govern complex matrix variations, execute immediate digital billing pipelines, and anchor raw tax audits seamlessly.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <motion.button 
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto font-black uppercase text-[12px] tracking-wider bg-slate-950 text-white rounded-xl px-9 py-4 hover:bg-slate-900 transition-colors shadow-xl shadow-slate-950/10"
              >
                Initialize Setup Audit
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto font-black uppercase text-[12px] tracking-wider bg-white text-slate-900 rounded-xl px-9 py-4 hover:bg-slate-50 transition-colors border border-slate-200"
              >
                System Architecture Specs
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. HUD-STYLE ANIMATED METRICS LAYER */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-slate-50/50 border border-slate-100 p-8 rounded-3xl"
          >
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,1)', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.04)' }}
                className="flex flex-col items-start p-6 border-l-2 border-[#ee3444]/40 rounded-r-2xl transition-all duration-300"
              >
                <span className="text-3xl sm:text-4xl font-black text-slate-950 mb-1 tracking-tight">{stat.value}</span>
                <span className="text-slate-500 text-xs font-semibold tracking-wide uppercase">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. CORE MATRIX FEATURES GRID */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-2xl mb-24">
            <span className="text-[10px] font-black tracking-[0.3em] text-[#75b0d2] uppercase block mb-3">Modular Matrix Capabilities</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">Core System Infrastructure</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((f, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.01 }}
                className="bg-slate-50 border border-slate-100 p-8 rounded-3xl flex flex-col justify-between hover:border-slate-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
              >
                <div>
                  <div className="text-xs font-black text-slate-400 tracking-widest uppercase mb-6 group-hover:text-[#ee3444] transition-colors duration-300">
                    Core Asset {f.num}
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight text-slate-950">{f.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. PREMIUM SECTOR BLOCKS (SOLID DEEP BLACK TEXT SECTORS) */}
      <section className="py-24 lg:py-36 bg-slate-50 border-y border-slate-100 rounded-[3rem] lg:rounded-[5rem] mx-4 sm:mx-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-[10px] font-black tracking-[0.3em] text-slate-950 uppercase block mb-3">Deployment Targets</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 mb-4">Vertical Scaling Architecture</h2>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Zakya POS framework reconfigures interfaces dynamically across complex inventory sectors to optimize checkout operations.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {useCases.map((uc, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ x: 10, scale: 1.005 }}
                  className="bg-white border border-slate-100 p-8 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h4 className="text-xl font-black text-slate-950 tracking-tight min-w-[240px]">
                    {uc.sector}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xl">{uc.application}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. MINIMAL LINEAR TIMELINE PROCESS */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-24">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 mb-4">The Real-Time Transaction Cycle</h2>
            <p className="text-slate-500 text-xs sm:text-sm">High speed data transformation pipeline running from hardware trigger captures to cloud balance nodes.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative"
          >
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="relative flex flex-col items-start border-l border-slate-100 pl-6 lg:border-l-0 lg:pl-0 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-5xl font-black text-slate-100 group-hover:text-[#ee3444]/20 transition-colors duration-300 mb-4 select-none"
                >
                  {step.num}
                </motion.div>
                <h4 className="text-lg font-bold text-slate-950 tracking-tight mb-2">{step.title}</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. TECHNICAL SYSTEM AUDIT CARD */}
      <section className="py-24 lg:py-36 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-3xl mb-20">
            <span className="text-[10px] font-black tracking-[0.3em] text-[#ee3444] uppercase block mb-3">Enterprise Handshakes</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">Technical System Specifications</h2>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="bg-white border border-slate-100 rounded-3xl overflow-hidden p-6 sm:p-12 shadow-sm relative"
          >
            <div className="space-y-12 relative z-10">
              {techSpecs.map((spec, idx) => (
                <div key={idx} className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 lg:gap-12 pb-12 border-b border-slate-100 last:pb-0 last:border-b-0">
                  <h4 className="text-sm font-black text-slate-950 uppercase tracking-wider">{spec.category}</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{spec.details}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. IMMERSIVE SOLID CTA CONTROL */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            whileHover={{ scale: 0.995 }}
            transition={{ duration: 0.4 }}
            className="w-full bg-slate-950 text-white rounded-3xl p-8 sm:p-16 text-center relative overflow-hidden flex flex-col items-center"
          >
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] rounded-full bg-[#ee3444]/30 blur-[100px]" />
            </div>
            <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase block mb-4">Global Deployment Instantiations</span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight max-w-2xl mb-4 leading-snug">Ready to Eradicate Terminal Friction & Inventory Gaps?</h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed mb-8">Deploy your dedicated POS instances. Accelerate front counter throughput velocities while chaining automated matrix warehouses instantly.</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-black uppercase text-[12px] tracking-wider bg-white text-slate-950 rounded-xl px-10 py-4 hover:bg-slate-100 transition-all shadow-xl"
            >
              Initialize Enterprise Demo Instance
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 8. FAQ INTERACTIVE MODULE */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-24">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#ee3444] uppercase block mb-3">FAQ Database Nodes</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <motion.div 
                  key={idx} 
                  {...fadeInUp}
                  className="border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-sm"
                >
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-50 transition-colors duration-300"
                  >
                    <span className="font-bold text-slate-950 text-sm sm:text-base tracking-tight">{faq.q}</span>
                    <motion.span 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`text-sm font-bold ml-4 ${isOpen ? 'text-[#ee3444]' : 'text-slate-400'}`}
                    >
                      ▼
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="p-6 pt-0 text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-slate-50 bg-slate-50/30">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ZakyaPOS;