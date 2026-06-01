import React, { useState } from 'react';

const ManufacturingERP = () => {
  const [activeTab, setActiveTab] = useState("line_1");
  const [openIndex, setOpenIndex] = useState(0);

  const productionLines = {
    line_1: {
      title: "Production Line Alpha // Automated Assembly",
      efficiency: "94.8% OEE",
      load: "High Density Run",
      color: "bg-emerald-500",
      textColor: "text-emerald-600",
      borderColor: "border-emerald-200",
      bgColor: "bg-emerald-50/30",
      description: "Direct IoT integration logging dynamic telemetry loops. Automated robotics executing real-time multi-tier nesting sequences flawlessly without cycle delay.",
      metrics: { throughput: "1,420 units/hr", runtime: "18h 42m", errorRate: "0.02%" },
      subNodes: ["NODE_A1_ARM", "NODE_A2_FEEDER", "NODE_A3_OPTICS"]
    },
    line_2: {
      title: "Production Line Beta // Precision Metallurgy",
      efficiency: "81.2% OEE",
      load: "Staged Reset Mode",
      color: "bg-amber-500",
      textColor: "text-amber-600",
      borderColor: "border-amber-200",
      bgColor: "bg-amber-50/30",
      description: "Thermal sensors recording minor delta movements. Automated preventative maintenance schedules systematically triggered for the next shift cycle.",
      metrics: { throughput: "680 units/hr", runtime: "04h 12m", errorRate: "0.14%" },
      subNodes: ["NODE_B1_THERMAL", "NODE_B2_PRESS", "NODE_B3_COOLER"]
    },
    line_3: {
      title: "Production Line Gamma // Heavy Logistics & Packing",
      efficiency: "97.6% OEE",
      load: "Active Wave Running",
      color: "bg-[#ee3444]",
      textColor: "text-[#ee3444]",
      borderColor: "border-red-200",
      bgColor: "bg-red-50/30",
      description: "MRP II material supply waves synchronizing cleanly with real-time dispatch manifests. Complete lot block serialization active across all units.",
      metrics: { throughput: "2,850 units/hr", runtime: "22h 05m", errorRate: "0.00%" },
      subNodes: ["NODE_G1_SORTER", "NODE_G2_SCALE", "NODE_G3_LABEL"]
    }
  };

  const capabilities = [
    {
      num: "01",
      tag: "CORE INVENTORY",
      title: "Multi-Level Bill of Materials (BOM) Costing",
      desc: "Stop relying on fragile manual updates. The advanced ledger tracks infinite nested tiers of materials, automatically executing FIFO margin valuations the second a vendor changes raw baseline matrix metrics.",
      subItems: ["Infinite Nested Tiers", "Auto FIFO Valuations", "Vendor Matrix Sync"]
    },
    {
      num: "02",
      tag: "DEVICE MANAGEMENT",
      title: "Finite Shop Floor Capacity & Machine Scheduling",
      desc: "Replace chaotic whiteboard routines. Route digital travelers directly to work blocks, tracking active cycle counts, device uptimes, and live asset configurations continuously through localized hubs.",
      subItems: ["Digital Route Travelers", "Cycle Count Audits", "Localized Hub Telemetry"]
    },
    {
      num: "03",
      tag: "SUPPLY CHAIN",
      title: "Predictive MRP II Material Replenishment Waves",
      desc: "Align operations directly with actual sales demands. Run background predictive sweeps that capture component lead times and safety stock levels to generate purchase requisitions before deficits occur.",
      subItems: ["Lead Time Sweeps", "Auto Purchase Orders", "Safety Stock Triggers"]
    },
    {
      num: "04",
      tag: "ASSURANCE",
      title: "SOP Quality Gate Isolation Blocks",
      desc: "Maintain absolute delivery uniformity across complex manufacturing loops. Enforce automated parameter checks at staging blocks that freeze item movements instantly if an inspection failure arises.",
      subItems: ["Parameter Lockdowns", "Staging Isolation", "Instant Loop Freeze"]
    },
    {
      num: "05",
      tag: "REGULATORY",
      title: "UK Legislative Carbon Footprint Auditing",
      desc: "Fulfill strict regional sustainability and chemical origin guidelines effortlessly. Log scope-specific carbon parameters and batch origin data straight into centralized corporate reports.",
      subItems: ["Scope-Specific Logging", "Batch Origin Trace", "Compliance Export"]
    },
    {
      num: "06",
      tag: "PREVENTATIVE",
      title: "Predictive Tooling Cycles & Asset Diagnostics",
      desc: "Eliminate expensive unexpected shutdowns. Capture machine runtime variations and heat index profiles, allowing the system to automatically flag service tickets and book internal replacement components.",
      subItems: ["Heat Index Mapping", "Auto Service Tickets", "Component Allocation"]
    }
  ];

  const comparisons = [
    { area: "BOM Structures", legacy: "Disconnected flat sheets, unlogged scrap adjustments, and high margin leakage risks.", modern: "Infinite nested parent-child trees syncing instantly with variable vendor material price shifts." },
    { area: "Floor Controlling", legacy: "Manual traveler notes, estimated station capacities, and unrecorded machinery idle frames.", modern: "Direct digital terminal routing with live OEE tracking indexes and automatic asset schedules." },
    { area: "Batch Compliance", legacy: "Paper-based tracking files making historical product recalls a multi-day data challenge.", modern: "Hardlocked cryptographic batch codes providing complete lineage lookups within minutes." }
  ];

  const specs = [
    { label: "Data-Bus Speed", value: "< 14ms Latency" },
    { label: "IoT Architecture", value: "MQTT / OPC-UA Native" },
    { label: "Database Scaling", value: "Time-Series Optimized" },
    { label: "Security Encryption", value: "TLS 1.3 / AES-256" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 font-sans selection:bg-[#ee3444]/10">
      
      {/* 1. CLEAN WHITE INDUSTRIAL HERO */}
      <section className="relative py-24 lg:py-36 border-b border-slate-100 overflow-hidden bg-slate-50/50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-40" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-[10px] font-mono tracking-[0.2em] text-slate-500 uppercase rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ee3444] animate-pulse" />
                System Instance Node 06 // Heavy Industrial Core
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-950 leading-none">
                Precision Floor <br />
                {/* 
                  DYNAMIC SIX-COLOR SPECTRUM GRADIENT 
                  Colors integrated sequentially via inline style background-image for seamless cross-browser rendering
                */}
                <span 
                  className="text-transparent bg-clip-text font-black pb-2 block"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #e1b054 0%, #d24a8a 20%, #ee3444 40%, #75b0d2 60%, #7361a7 80%, #f1574d 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Automation Matrix.
                </span>
              </h1>
              <p className="text-slate-600 text-xs sm:text-sm max-w-xl leading-relaxed">
                Engineered exclusively for large-scale manufacturing facilities and precision engineering sectors. Command multi-layered BOM structures, capture raw IoT telemetry data, and eliminate supply chain blindspots within an isolated, high-performance ecosystem.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 font-mono text-[10px] font-bold tracking-wider uppercase">
                <button className="bg-slate-950 text-white px-8 py-4 hover:bg-slate-800 transition-all rounded shadow-sm">
                  Launch Factory Environment
                </button>
                <button className="border border-slate-200 text-slate-700 bg-white px-8 py-4 hover:bg-slate-50 transition-all rounded">
                  Analyze Schema Specs
                </button>
              </div>
            </div>

            {/* Industrial Metrics Sidebar Box */}
            <div className="lg:col-span-5 bg-white border border-slate-200 p-6 rounded-2xl font-mono text-[11px] space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-slate-500">
                <span className="text-slate-900 font-bold">// CLUSTER_OPERATIONS_REPORTS</span>
                <span className="text-emerald-600 font-bold">SECURE</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 border border-slate-100 rounded-lg">
                  <span className="text-slate-400 text-[9px] uppercase block">Plant Target OEE</span>
                  <span className="text-slate-900 text-base font-bold mt-1 block">91.75%</span>
                </div>
                <div className="bg-slate-50 p-4 border border-slate-100 rounded-lg">
                  <span className="text-slate-400 text-[9px] uppercase block">Active Trace Logic</span>
                  <span className="text-amber-600 text-base font-bold mt-1 block">ISO_BATCH_LOCK</span>
                </div>
              </div>
              
              {/* Detailed Specifications Grid */}
              <div className="border-t border-slate-100 pt-3 grid grid-cols-2 gap-y-2 text-[10px] text-slate-500">
                {specs.map((spec, i) => (
                  <div key={i} className="flex justify-between pr-2 border-r last:border-0 border-slate-100">
                    <span>{spec.label}:</span>
                    <span className="text-slate-900 font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 p-3 border border-slate-100 rounded-lg text-[10px] text-slate-500 space-y-1">
                <span className="text-slate-600 font-bold block">Active Scheduler Hash:</span>
                <span className="text-emerald-600 block truncate">mrp_wave_generator_active_14ms_loop</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE TELEMETRY WHITE TERMINAL */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 space-y-2">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#ee3444] uppercase block">Control Deck Dashboard</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">Active Plant Route Telemetry</h2>
            <p className="text-slate-500 text-xs sm:text-sm">Click through localized production tracks to simulate continuous tracking variables, error logging, and asset efficiencies.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Horizontal Track Options */}
            <div className="lg:col-span-4 space-y-3">
              {Object.keys(productionLines).map((key) => (
                <div
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${activeTab === key ? 'border-slate-900 bg-slate-50 shadow-sm' : 'border-slate-200 bg-white hover:bg-slate-50'}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-900">{key.toUpperCase().replace("_", " ")}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 border rounded ${activeTab === key ? `${productionLines[key].textColor} ${productionLines[key].borderColor} ${productionLines[key].bgColor}` : 'text-slate-600 bg-white border-slate-200'}`}>{productionLines[key].efficiency}</span>
                  </div>
                  <p className="text-slate-500 text-[11px] font-mono mt-2 truncate">{productionLines[key].title.split(" // ")[1]}</p>
                </div>
              ))}
            </div>

            {/* Right Terminal Data Panel */}
            <div className="lg:col-span-8 bg-slate-50 border border-slate-200 p-6 sm:p-8 relative rounded-xl shadow-inner">
              <div className="absolute top-4 right-6 flex items-center gap-2 font-mono text-[9px] text-slate-400">
                <span className={`w-2 h-2 rounded-full ${productionLines[activeTab].color} animate-ping`} />
                <span>DATA INTEGRATION TRACKER</span>
              </div>

              <div className="space-y-6 font-mono">
                <h3 className="text-xs font-bold text-slate-900 uppercase border-b border-slate-200 pb-3">
                  {productionLines[activeTab].title}
                </h3>

                {/* Sub-component node micro-chips */}
                <div className="flex flex-wrap gap-2">
                  {productionLines[activeTab].subNodes.map((node, i) => (
                    <span key={i} className="text-[9px] font-mono bg-white border border-slate-200 text-slate-600 px-2 py-0.5 rounded">
                      ⚡ {node}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                  <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
                    <span className="text-slate-400 text-[9px] block">OEE SCORE</span>
                    <span className="text-sm font-black text-slate-900 mt-1 block">{productionLines[activeTab].efficiency}</span>
                  </div>
                  <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm">
                    <span className="text-slate-400 text-[9px] block">THROUGHPUT</span>
                    <span className={`text-sm font-black ${productionLines[activeTab].textColor} mt-1 block`}>{productionLines[activeTab].metrics.throughput}</span>
                  </div>
                  <div className="bg-white p-4 border border-slate-200 rounded-lg shadow-sm col-span-2 sm:col-span-1">
                    <span className="text-slate-400 text-[9px] block">ACTIVE RUNTIME</span>
                    <span className="text-sm font-black text-slate-700 mt-1 block">{productionLines[activeTab].metrics.runtime}</span>
                  </div>
                </div>

                <div className="bg-white p-4 border border-slate-200 rounded-lg text-xs text-slate-600 leading-relaxed font-sans shadow-sm">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-1.5 mb-2 font-mono text-[9px] text-slate-400">
                    <span>// REALTIME FIELD LOG DETAILS</span>
                    <span className="text-red-500 font-bold">ERROR_RATE: {productionLines[activeTab].metrics.errorRate}</span>
                  </div>
                  {productionLines[activeTab].description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 6 GRANULAR ARCHITECTURAL CAPABILITIES */}
      <section className="py-24 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 space-y-2">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#ee3444] uppercase block">System Framework Matrix</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">Granular Architectural Capabilities</h2>
            <p className="text-slate-600 text-xs sm:text-sm">An itemized six-tier functional layout showcasing deep engineering mechanics built natively into our software layers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-400 hover:shadow-md transition-all rounded-xl group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-[10px] font-mono text-[#ee3444] font-bold tracking-widest">// NODE A-{item.num}</span>
                    <span className="text-[9px] font-mono text-slate-500 px-2 py-0.5 bg-slate-50 border border-slate-100 rounded">{item.tag}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-950 tracking-tight group-hover:text-[#ee3444] transition-colors">{item.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-normal">{item.desc}</p>
                  
                  {/* Detailed sub-item tracking list */}
                  <div className="pt-2 space-y-1">
                    {item.subItems.map((sub, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                        <span className="w-1 h-1 bg-[#ee3444] rounded-full" />
                        {sub}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-400 flex justify-between items-center">
                  <span>System Guard State:</span>
                  <span className="text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded text-[9px]">ACTIVE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LINEAR DATA COMPARISON TABLE BLOCK */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 space-y-2">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#ee3444] uppercase block">Operational Realignment</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Infrastructure Core Valuation Matrix</h2>
            <p className="text-slate-500 text-xs sm:text-sm">Contrasting unstable traditional inventory structures with unified system environments.</p>
          </div>

          <div className="border border-slate-200 divide-y divide-slate-200 font-mono text-xs sm:text-sm rounded-xl overflow-hidden shadow-sm">
            {comparisons.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-6 hover:bg-slate-50 transition-colors items-center bg-white">
                <div className="lg:col-span-3 text-slate-950 font-bold uppercase text-xs tracking-wider flex items-center gap-2">
                  <span className="w-1 h-3 bg-slate-950 inline-block" />
                  {row.area}
                </div>
                <div className="lg:col-span-4 text-slate-500 leading-relaxed"><span className="text-[#ee3444] block text-[9px] font-bold mb-1">LEGACY LIMITATIONS</span>{row.legacy}</div>
                <div className="lg:col-span-5 text-slate-700 leading-relaxed bg-slate-50 p-4 border-l-2 border-emerald-500 rounded-r-lg"><span className="text-emerald-600 block text-[9px] font-bold mb-1">AUTOMATED STATE ENGINE</span>{row.modern}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CINEMATIC WIDESCREEN IMAGE VIEWPORT */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 group shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1565891741441-64926e441838?auto=format&fit=crop&w=2000&q=80" 
              alt="Advanced Automated Manufacturing Facility and Assembly Line" 
              className="w-full h-full object-cover brightness-[0.85] contrast-105 group-hover:scale-[1.01] transition-all duration-700 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 max-w-xl space-y-2 font-mono">
              <span className="text-[10px] text-white bg-slate-950 px-2 py-1 rounded font-bold tracking-widest uppercase block w-max">// ARCHITECTURE_VIEWPORT_06</span>
              <h4 className="text-white font-black text-base sm:text-2xl tracking-tight drop-shadow-md">Unified IoT Floor Mesh Networks</h4>
              <p className="text-slate-200 text-xs leading-relaxed hidden sm:block drop-shadow-sm">Every machinery stroke and material withdrawal execution feeds the primary asset ledger system instantly, removing financial fragmentation points.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECHNICAL IMPLEMENTATION STACK ARCHIVE (Accordion Look) */}
      <section className="py-24 bg-slate-50/60">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 space-y-2 text-left">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#ee3444] uppercase block">Implementation Log</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">Technical Implementation Queries</h2>
            <p className="text-slate-600 text-xs sm:text-sm">Deep engineering answers regarding data-bus speeds, machinery tracking rules, and parameter thresholds.</p>
          </div>

          <div className="border-y border-slate-200 divide-y divide-slate-200 bg-white rounded-2xl border px-6 shadow-sm">
            {[
              { q: "How does the system calculate dynamic batch waste variables?", a: "The architecture features integrated scrap-factor logs and weight metrics profiles. Active runs are audited live against baseline blueprints, automatically capturing deviations and updating material ledgers to preserve absolute net financial margins." },
              { q: "Can the database logic connect natively with existing field PLCs?", a: "Yes. The platform relies on generalized data adapters and secure IoT gateway frameworks to extract continuous machinery statuses, fault thresholds, and speed profiles, routing raw field metrics straight into analytical dashboards." },
              { q: "How are regional safety certificates managed inside active tracks?", a: "The framework secures batch traceability records cryptographically. Material batch codes, chemical sheets, and quality validation records are bound natively to physical stock lots, allowing immediate end-to-end trace lookups during audit sweeps." }
            ].map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5 font-mono first:border-t-0 last:border-b-0">
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center text-left py-2 group text-xs sm:text-sm"
                  >
                    <span className="font-bold text-slate-900 group-hover:text-[#ee3444] transition-colors">
                      {faq.q}
                    </span>
                    <span className="text-xs text-slate-400 ml-4 font-bold">
                      {isOpen ? '[ CLOSE ]' : '[ OPEN ]'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pt-4 pb-2 text-slate-600 text-xs leading-relaxed font-sans max-w-3xl">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ManufacturingERP;