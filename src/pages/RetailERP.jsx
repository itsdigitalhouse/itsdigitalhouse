import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RetailERP = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredPhase, setHoveredPhase] = useState(null);

  const stats = [
    { value: "99.97%", title: "Ledger Sync Precision", desc: "Continuous atomic database state sync preventing concurrent inventory oversells." },
    { value: "42.3%", title: "Overhead Reduction", desc: "Automated replenishment workflows lowering safety-stock holding capital constraints." },
    { value: "< 1.8s", title: "Global Price Push", desc: "Real-time edge cache broadcast of markdown matrices to multi-region point of sale terminals." },
    { value: "Omni-Node", title: "Real-Time Visibility", desc: "Unified allocation pipelines covering warehouses, physical shelves, and e-commerce carts." }
  ];

  const structuralFlow = [
    {
      meta: "Distributed Allocation",
      title: "Omni-Channel Matrix Control Architecture",
      desc: "Govern all inventory allocations without channel fragmentation. The system processes direct consumer transactions from web stores, standard retail point-of-sale systems, and wholesale marketplaces through a single row-level locking queuing core. It isolates global inventory configurations into specific safety buffers to eliminate duplicate sales spikes.",
      accent: "#e1b054",
      highlights: ["Atomic Transaction Safety Locks", "Cross-Channel Buffer Management", "Automated Inventory Deductions"]
    },
    {
      meta: "Automated Supply Chain",
      title: "Predictive Replenishment & Vendor Automation",
      desc: "Maintain optimized stock levels without constant manual audits. The system maps baseline stock limits per regional location, analyzes local delivery timelines, reads active vendor matrices, and builds exact purchase order drafts automatically. It shortens procurement turnarounds while lowering capital locked up in slow-moving stock lines.",
      accent: "#d24a8a",
      highlights: ["Dynamic Safety-Stock Calculations", "Automated Draft Purchase Orders", "Supplier Performance Scorecards"]
    },
    {
      meta: "Enterprise Operations",
      title: "Centralized Multi-Store Control Hub",
      desc: "Manage an entire network of physical storefronts, pop-ups, and warehouses from an administrative master command. Push mass pricing updates, setup location-based tax rules, execute specialized digital promo filters, and review live cash ledger activity from any terminal instantly without database desynchronization risks.",
      accent: "#ee3444",
      highlights: ["Multi-Tier Pricing Engines", "Localized Tax Matrix Adjustments", "Live Cash Drawer Audits"]
    }
  ];

  const matrixComparison = [
    { feature: "Real-Time Inventory Processing", standard: "Delayed Batch Processing (15-30m)", enterprise: "Atomic Real-Time Sync (<1.5s)" },
    { feature: "Omni-Channel Allocation Buffers", standard: "Manual Stock Splitting Management", enterprise: "Automated Live Channel Load Shifting" },
    { feature: "Offline Storefront Operations", standard: "Data Freezes During Outages", enterprise: "Local Database Cache Sync Recovery" },
    { feature: "Supplier Order Workflows", standard: "Manual Tracking & Manual Form Creation", enterprise: "Predictive AI Automated Reordering" }
  ];

  const lifecyclePhases = [
    { title: "Inbound Sorting", desc: "Pristine logging via barcodes or automated RFID matrices, saving batch details directly to core databases." },
    { title: "Dynamic Routing", desc: "Algorithmic validation rules determine stock priority allocations across active channels and hubs." },
    { title: "Point-of-Sale Execution", desc: "Ultra-fast transactional registers process invoices and sync ledger sheets instantly." },
    { title: "Auto-Reorder Triggers", desc: "Automated procurement loops activate the moment individual item tiers hit preset limits." }
  ];

  const technicalNodes = [
    {
      tabTitle: "Data Synchronization Layer",
      heading: "Low-Latency Distributed State Processing",
      details: "Built over highly scalable enterprise database structures, our replication layer handles heavy continuous validation queries. This layout isolates concurrent transactions completely, meaning a checkout spike during a major holiday sale won't cause system degradation or double-allocation errors across storefronts."
    },
    {
      tabTitle: "Hardware Integration Bridges",
      heading: "Native Universal Device Management",
      details: "Native system integration layers supporting enterprise hand-held RF scanners, automated industrial weigh-sensor plates, high-speed thermal label printers, and standardized customer-facing displays. It removes dependencies on custom third-party driver stacks, maximizing checkout speed."
    },
    {
      tabTitle: "Enterprise API Connectivity",
      heading: "Highly Secure Multi-Channel Webhook Matrix",
      details: "Extremely robust Webhook architecture providing clean data loops with enterprise platforms like Shopify Plus, WooCommerce, custom external portals, and major international 3PL logistics networks. Includes automated retry mechanisms to handle intermittent network dropouts."
    }
  ];

  const faqs = [
    { q: "How does the platform manage data conflicts during simultaneous multi-channel checkouts?", a: "The architecture processes every ledger change through an isolated row-level queue. If an online shopper and a physical checkout counter process the exact same SKU simultaneously, the core engine locks that item cell instantly, handles the primary transaction, and updates all peripheral nodes within <500ms to maintain strict system integrity." },
    { q: "Can we set independent baseline pricing strategies for different storefronts?", a: "Absolutely. The centralized pricing core lets you map precise pricing models, localized regional taxes, and customized seasonal discounts to specific outlets or digital storefronts from one administrative dashboard." },
    { q: "What happens to the physical point-of-sale setups if our retail store loses internet access?", a: "The local storefront switch drops into an offline data cache mode instantly. Point-of-sale registers keep running, logging invoice tables, processing barcode scans, and tracking transactions locally. The moment the connection is stable again, background sync loops safely merge the data." }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 selection:bg-[#ee3444]/10 overflow-hidden">
      
      {/* 1. ASYMMETRIC SPLIT HERO SECTION */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <span className="inline-block text-[10px] font-black tracking-[0.3em] text-[#ee3444] uppercase bg-white px-4 py-2 rounded-md border border-slate-200/80 shadow-sm">
              Industrial Retail Operations Core
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-950 leading-[1.05]">
              Synchronize Multi-Store Commerce via{' '}
              <span 
                className="text-transparent bg-clip-text relative"
                style={{
                  backgroundImage: 'linear-gradient(to right, #e1b054 0%, #d24a8a 25%, #ee3444 50%, #75b0d2 75%, #7361a7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Retail ERP
              </span>
            </h1>
            <p className="text-slate-600 text-sm sm:text-lg max-w-xl leading-relaxed">
              Unify global inventory channels, automate complex supply chains, eliminate double-selling buffers, and monitor all retail outposts from a single high-performance administration matrix.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <button className="bg-slate-950 text-white font-black text-[11px] tracking-wider uppercase px-8 py-4 rounded-xl hover:bg-slate-900 transition-all shadow-xl shadow-slate-950/10">
                Deploy Core Engine
              </button>
              <button className="bg-white text-slate-950 border border-slate-200 font-black text-[11px] tracking-wider uppercase px-8 py-4 rounded-xl hover:bg-slate-50 transition-all shadow-sm">
                System Blueprint
              </button>
            </div>
          </motion.div>

          {/* Right Side Info-Graphic Metric Blocks */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <div key={i} className="bg-white border border-slate-200/60 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">{s.value}</div>
                <div className="text-xs font-black text-slate-800 mt-1 tracking-tight">{s.title}</div>
                <div className="text-[11px] text-slate-400 mt-2 leading-relaxed font-medium">{s.desc}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 2. LIVE INVENTORY LIFECYCLE TRACKER (Brand New Detailed Visual Element) */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <span className="text-[10px] font-black tracking-[0.3em] text-[#75b0d2] uppercase block mb-2">Automated Control Flow</span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950">The Synchronized Product Lifecycle Pipeline</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {lifecyclePhases.map((phase, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setHoveredPhase(idx)}
                onMouseLeave={() => setHoveredPhase(null)}
                className="bg-white border border-slate-200/80 p-8 rounded-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-100 group-hover:bg-[#ee3444] transition-colors" />
                <div className="text-xs font-black text-slate-300 tracking-widest uppercase mb-4">Phase 0{idx + 1}</div>
                <h4 className="text-base font-bold text-slate-950 tracking-tight mb-2">{phase.title}</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DETAILED ALTERNATING LAYOUT BLOCK */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-32">
          
          <div className="max-w-2xl">
            <span className="text-[10px] font-black tracking-[0.3em] text-[#7361a7} uppercase block mb-2">System Layer Details</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950">Resolving Retail Scaling Bottlenecks</h2>
          </div>

          {structuralFlow.map((flow, idx) => (
            <motion.div 
              {...fadeInUp}
              key={idx}
              className={`flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Visual Frame Block */}
              <div className="w-full lg:w-2/5 flex flex-col justify-between p-10 bg-slate-50 border border-slate-100 rounded-3xl relative overflow-hidden h-[300px] group">
                <div className="absolute top-0 left-0 w-2 h-full transition-all duration-300" style={{ backgroundColor: flow.accent }} />
                <span className="text-7xl font-black text-slate-200/60 tracking-tighter select-none group-hover:scale-105 transition-transform duration-300">0{idx + 1}</span>
                
                {/* Embedded Bullet Features Inside the Visual Frame */}
                <div className="space-y-2 mt-auto">
                  {flow.highlights.map((h, hi) => (
                    <div key={hi} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: flow.accent }} />
                      {h}
                    </div>
                  ))}
                </div>
              </div>

              {/* Text Information Frame */}
              <div className="w-full lg:w-3/5 space-y-4">
                <span className="text-[10px] font-black tracking-widest uppercase" style={{ color: flow.accent }}>
                  {flow.meta}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">{flow.title}</h3>
                <p className="text-slate-500 text-xs sm:text-sm sm:text-base leading-relaxed">{flow.desc}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* 4. INDUSTRIAL MATRIX TABLE COMPARISON (High Value Detailing) */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <span className="text-[10px] font-black tracking-[0.3em] text-[#ee3444] uppercase block mb-2">Performance Metrics</span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950">Architectural Framework Capabilities</h2>
          </div>

          <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950 text-white text-[11px] font-black uppercase tracking-wider border-b border-slate-800">
                    <th className="p-5 sm:p-6">Operational Capability</th>
                    <th className="p-5 sm:p-6">Legacy System Bottlenecks</th>
                    <th className="p-5 sm:p-6 text-[#ee3444]">Our Enterprise Retail Node</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium text-slate-600">
                  {matrixComparison.map((row, index) => (
                    <tr key={index} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-5 sm:p-6 font-bold text-slate-950">{row.feature}</td>
                      <td className="p-5 sm:p-6 text-slate-400">{row.standard}</td>
                      <td className="p-5 sm:p-6 font-bold text-slate-900 bg-[#ee3444]/5">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE TABBED SYSTEM SPECIFICATIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">Deep Technical Specifications</h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-2">Review granular structural engine mechanisms managing low-latency data loops across global nodes.</p>
          </div>

          {/* Navigation Control Array */}
          <div className="flex flex-wrap justify-center border-b border-slate-200 mb-8 sm:mb-12">
            {technicalNodes.map((node, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-4 sm:px-6 py-3 sm:py-4 text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all relative ${activeTab === i ? 'text-slate-950 font-black' : 'text-slate-400 hover:text-slate-600 font-bold'}`}
              >
                {node.tabTitle}
                {activeTab === i && (
                  <motion.div layoutId="activeTabIndicator" className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ee3444]" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Panel Content Box */}
          <div className="bg-slate-50 border border-slate-100 p-6 sm:p-12 rounded-2xl min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <h4 className="text-base sm:text-lg font-black text-slate-950 tracking-tight">
                  {technicalNodes[activeTab].heading}
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  {technicalNodes[activeTab].details}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* 6. COMPACT HIGH-CONTRAST CALL TO ACTION */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-950 rounded-3xl p-8 sm:p-16 text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-3 max-w-2xl z-10">
              <span className="text-[10px] font-black tracking-[0.3em] text-[#ee3444] uppercase block">Infrastructure Scale</span>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-snug">Eliminate Data Fragmentation Loops Today</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Deploy secure localized enterprise instances. Achieve true analytical control across all distributed product pipelines seamlessly.</p>
            </div>
            <button className="whitespace-nowrap bg-white text-slate-950 font-black text-[11px] tracking-wider uppercase px-8 py-4 rounded-xl hover:bg-slate-50 transition-all z-10 shadow-lg">
              Initialize Instance Setup
            </button>
            <div className="absolute right-0 top-0 w-80 h-80 bg-[#ee3444]/10 blur-[100px] rounded-full pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 7. CLEAN FAQ EXPANSION TILES */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-16 text-center max-w-xl mx-auto">
            <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase block mb-2">Knowledge Base</span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">Frequently Asked Queries</h2>
          </div>

          <div className="divide-y divide-slate-100">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="py-5">
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center text-left py-2 group"
                  >
                    <span className="font-bold text-slate-950 text-xs sm:text-base tracking-tight group-hover:text-[#ee3444] transition-colors">
                      {faq.q}
                    </span>
                    <span className={`text-xs ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#ee3444]' : 'text-slate-400'}`}>
                      ▼
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 pb-2 text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                          {faq.a}
                        </p>
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

export default RetailERP;