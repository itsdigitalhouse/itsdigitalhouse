import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PRAgencyERP = () => {
  const [activeSegment, setActiveSegment] = useState("media_crm");
  const [activeFaq, setActiveFaq] = useState(null);

  // High-density enterprise schemas mapped to UK standard agency parameters
  const manifestData = {
    media_crm: {
      title: "1. Advanced Media Relations & Journalist CRM Core",
      sub: "Atomic Relationship Routing & Double-Pitch Prevention Controls",
      json: `{
  "core_module": "Media_Relations_CRM_V5",
  "isolation_mode": "Row_Level_Tenant_Locking",
  "sync_velocity": "< 120ms Realtime Sync",
  "data_structures": {
    "journalist_profiles": "Dynamic_Active_State",
    "beat_segmentation": ["Corporate_Finance", "Tech_SaaS", "UK_National_Press", "Consumer_Lifestyle"],
    "historical_pitch_velocity": "Calculated_Per_Editor_Node",
    "shift_alerts": "Automated_Editorial_Movements_Sweep"
  },
  "operational_guards": {
    "cross_team_collision_block": true,
    "max_concurrent_pitches_per_editor": 1,
    "duplicate_outreach_suppression": "Active_Queue_Lock"
  }
}`
    },
    clipping_engine: {
      title: "2. Real-Time Coverage Extraction & Clipping Intelligence",
      sub: "Automated Micro-Scrapers & Share of Voice Sentiment Matrix",
      json: `{
  "core_module": "Coverage_Extraction_Engine_PRO",
  "indexing_nodes": "Global_Digital_Feeds_&_UK_Print_OCR",
  "scan_latency": "15_Minute_Interval_Sweep",
  "extraction_parameters": {
    "keyword_string_matching": "Exact_&_Fuzzy_Logic_Arrays",
    "backlink_verification": "Automated_Target_Checking",
    "domain_authority_logging": "Integrated_API_Lookup"
  },
  "analytics_computed": {
    "share_of_voice_score": "Sentiment_Analysis_Engine",
    "potential_impressions": "Algorithmic_Traffic_Estimation",
    "client_dashboard_routing": "Instant_Live_Board_Push"
  }
}`
    },
    finance_matrix: {
      title: "3. Retainer Auditing & Granular Timesheet Ledger",
      sub: "Margin Protection Layer & Multi-Tier Billing Governance",
      json: `{
  "core_module": "Financial_Operations_Ledger_Core",
  "billing_structures": {
    "fixed_base_retainers": "Automated_Monthly_Recurrence",
    "variable_billable_hours": "Realtime_Consultant_Timesheets",
    "milestone_success_bonuses": "KPI_Trigger_Verification",
    "third_party_wire_disbursements": "Pass_Through_Invoicing"
  },
  "margin_protection": {
    "staff_utilization_indexes": "Live_Efficiency_Tracking",
    "contract_cap_enforcement": "Hard_Lock_On_Overages",
    "leakage_prevention_alerts": "Triggered_At_80_Percent_Cap"
  }
}`
    }
  };

  // Expanded to 6 comprehensive structural modules for deep corporate verification
  const detailedFeatures = [
    {
      section: "Media Asset Governance",
      title: "Centralized Journalist & Influencer Relationship Management",
      details: "Eliminate static, fragmented spreadsheets that lead to embarrassing cross-pitching errors. The CRM engine stores secure, multi-layered profiles of editors, reporters, and content creators. It actively logs their core beats, current publication shifts, historical response velocities, and explicit pitch preferences. Team members see exactly who is communicating with which desk in real time, preserving agency reputation and maximizing placement probability."
    },
    {
      section: "Coverage Intelligence",
      title: "Automated Digital Clipping Dossiers & Sentiment Indexing",
      details: "Stop wasting hours manually screenshotting, cropping, and pasting coverage links into monthly PDF reports. Our automated monitoring core queries digital publication feeds and loops search scripts every 15 minutes. It isolates brand mentions, verifies target backlinks, extracts domain authority scores, and computes precise Share of Voice (SoV) sentiment analytics, instantly deploying them to professional client-facing review boards."
    },
    {
      section: "Fiscal Infrastructure",
      title: "Retainer Auditing, Timesheet Security & Expense Recoveries",
      details: "Bridge the gap between strategic PR execution and strict agency financial margins. Account directors can track exact consultant billable hours directly against client contract caps in real time. The ledger automatically flags potential scope creeps, manages complex multi-tier retainer rules, handles out-of-pocket distribution vendor expenses cleanly, and generates comprehensive, itemized invoices ready for corporate approval."
    },
    {
      section: "Crisis Infrastructure",
      title: "High-Velocity Incident SLA Routing & Comm Triggers",
      details: "Equip your response unit with atomic containment logic. When a brand-critical incident triggers, the platform instantly isolates strategic comm matrix flows, spins up private, encrypted war-room segments, routes statements to verified legal structures, and pushes targeted crisis statements to specific desks inside minutes, maintaining absolute operational control."
    },
    {
      section: "Data Compliance Vault",
      title: "Rigid GDPR Data Governance & Security Auditing Protocols",
      details: "Operate under total legislative protection within the UK and European data ecosystems. The platform features native encryption parameters for personal media contacts, automates right-to-be-forgotten media cleanups, locks historical communication data loops behind role-based access tokens, and provides comprehensive downloadable security trails for enterprise-level audits."
    },
    {
      section: "Syndication Hub",
      title: "Omni-Channel Distribution & Embargo Synchronization Layers",
      details: "Synchronize high-tier press releases and exclusive materials across diversified publication clusters without leakage. The scheduling matrix handles layered embargo protocols across global time zones, maps customized media kit micro-links to specific outlets, and aggregates multi-channel performance metrics to determine exact placement velocity scores."
    }
  ];

  const capabilityMatrix = [
    { system: "Communications Infrastructure", oldWay: "Scattered legacy spreadsheets, unmapped editorial shifts, and double-pitching communication risks.", newWay: "Dynamic row-isolated relationship routing, response velocity tracking, and centralized team sync locks." },
    { system: "Dossier Compilations & Analytics", oldWay: "Manual monitoring routines, tedious clipping compilation cycles, and estimated reach guesswork.", newWay: "Immediate cross-platform coverage synchronization, automated background data scraping, and live sentiment scoring dashboards." },
    { system: "Resource Auditing & Billing", oldWay: "Unlogged consultant activity, untracked out-of-pocket expenses, and systemic retainer margin leakage.", newWay: "Granular live timesheet tracking tied directly to absolute contract caps with automated threshold warning triggers." }
  ];

  const structuralFaqs = [
    { q: "How is client data separation managed across competitive industry portfolios?", a: "The entire application architecture is engineered on rigid multi-tenant isolation protocols. Cryptographic database row barriers ensure that sensitive campaign strategies, exclusive distribution press lists, draft press packages, and communication histories remain completely invisible to unassigned agency units, fulfilling strict corporate NDA compliance frameworks." },
    { q: "Can the extraction core parse traditional print media or broadcast mentions?", a: "Yes. While digital web structures are scanned continuously via real-time text scraping arrays every 15 minutes, print publications and broadcast media structures are integrated smoothly via specialized OCR data-feed partnerships, allowing the platform to synthesize a unified multi-channel coverage report." },
    { q: "Does the financial ledger support tiered retainers and variable resource pricing?", a: "Absolutely. The robust billing engine handles complex financial setups natively. It maps fixed-rate monthly retainer baselines, automatically logs variable senior-to-junior consultant hourly timesheet grids, manages conditional performance bonuses tied to explicit placement milestones, and processes third-party wire disbursement pass-through costs without any accounting overlap." }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 selection:bg-[#ee3444]/10">
      
      {/* 1. HIGH-END EDITORIAL TECH HERO */}
      <section className="py-20 lg:py-32 border-b border-slate-100 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <span className="text-[10px] font-black tracking-[0.3em] text-[#ee3444] uppercase block">
            System Node 05 // Enterprise Communications ERP
          </span>
          <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-slate-950 leading-[1.02]">
            Public Relations Management,{' '}
            <span 
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: 'linear-gradient(to right, #e1b054 0%, #d24a8a 35%, #ee3444 70%, #7361a7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Architected.
            </span>
          </h1>
          <p className="text-slate-500 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            A high-fidelity operational blueprint engineered specifically for premium communications agencies and corporate PR teams. Streamline critical media assets, track digital coverage parameters automatically, audit consultant timesheets, and maximize campaign delivery margins inside a single, securely isolated tenant environment.
          </p>
          <div className="pt-4">
            <button className="bg-slate-950 text-white font-black text-[11px] tracking-wider uppercase px-10 py-4 rounded-none hover:bg-slate-900 transition-all">
              Initialize System Deployment
            </button>
          </div>
        </div>
      </section>

      {/* PREMIUM SYSTEM INTERFACE IMAGE PLATFORM */}
      <section className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full bg-slate-900 p-3 sm:p-4 rounded-3xl border border-slate-200/80 shadow-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-3 px-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ee3444]" />
                <span className="w-3 h-3 rounded-full bg-[#e1b054]" />
                <span className="w-3 h-3 rounded-full bg-slate-700" />
              </div>
              <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">uk_node_dashboard_v5.png</span>
            </div>
            
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80" 
                alt="PR ERP Analytical Node Dashboard Look" 
                className="w-full h-full object-cover object-center brightness-90 contrast-105 group-hover:scale-[1.01] transition-transform duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIVE STATE MANIFEST & TECHNICAL SPLIT WINDOW */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-2">
                <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">System Logic Configurations</span>
                <h2 className="text-3xl font-black tracking-tight text-slate-950">Deep Functional Infrastructure Nodes</h2>
                <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed">
                  Select an operational system module to view its technical schema architecture, data routing rules, and real-time backend state variables.
                </p>
              </div>

              <div className="space-y-4">
                {Object.keys(manifestData).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveSegment(key)}
                    className="w-full text-left block group border-b border-slate-200/60 pb-5 pt-2"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className={`text-base font-black transition-colors ${activeSegment === key ? 'text-slate-950' : 'text-slate-400 group-hover:text-slate-600'}`}>
                        {manifestData[key].title}
                      </h4>
                      <span className={`text-xs font-mono transition-transform ${activeSegment === key ? 'translate-x-1 text-[#ee3444]' : 'text-slate-300'}`}>
                        →
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs mt-1 font-medium pl-4">{manifestData[key].sub}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-slate-950 text-slate-200 p-6 sm:p-8 rounded-2xl shadow-xl font-mono text-[11px] sm:text-xs relative overflow-hidden border border-slate-800">
                <div className="flex items-center gap-2 absolute top-4 left-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-800" />
                  <span className="text-[10px] text-slate-500 font-bold ml-2 tracking-wider uppercase">Live_State_Engine_Manifest</span>
                </div>

                <div className="pt-8 min-h-[300px]">
                  <AnimatePresence mode="wait">
                    <motion.pre
                      key={activeSegment}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="text-emerald-400 leading-relaxed whitespace-pre-wrap overflow-x-auto"
                    >
                      {manifestData[activeSegment].json}
                    </motion.pre>
                  </AnimatePresence>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. EXHAUSTIVE DEEP-DIVE TEXTUAL MODULE BREAKDOWNS (Expanded to 6 columns) */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16 space-y-2">
            <span className="text-[10px] font-black tracking-[0.3em] text-[#7361a7] uppercase block">Operational Specifications</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950">Granular Architectural Capabilities</h2>
            <p className="text-slate-500 text-xs sm:text-sm font-medium">An exhaustive six-tier breakdown detailing how our platform mitigates standard operational bottlenecks inside enterprise communications workflows.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Detailed Text Stream (6 detailed blocks) */}
            <div className="lg:col-span-7 space-y-12">
              {detailedFeatures.map((feat, idx) => (
                <div key={idx} className="border-l-2 border-slate-950 pl-6 sm:pl-10 space-y-2 group">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block transition-colors group-hover:text-[#ee3444]">// 0{idx + 1} . {feat.section}</span>
                  <h3 className="text-xl font-black tracking-tight text-slate-950">{feat.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                    {feat.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Side Vertical Concept Image Frame */}
            <div className="lg:col-span-5 sticky top-28 bg-slate-50 p-4 border border-slate-200/60 rounded-3xl shadow-sm">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80" 
                  alt="UK Communication Strategy Core Operational Concept Map" 
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[9px] font-mono text-[#ee3444] uppercase tracking-widest block font-black">Fig. 04 // Workflow Allocation Mapping</span>
                  <p className="text-white text-xs mt-1 font-medium opacity-80">Realtime consultant activity charts integrated with active retainer caps.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. HIGH-DENSITY AUDIT MATRIX TABLE */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16 space-y-2">
            <span className="text-[10px] font-black tracking-[0.3em] text-[#ee3444] uppercase block">Strategic Comparisons</span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">Operational Infrastructure Matrix</h2>
            <p className="text-slate-500 text-xs sm:text-sm font-medium">Evaluating the absolute difference between traditional legacy approaches and modern automated nodes.</p>
          </div>

          <div className="w-full text-left border-t border-slate-950">
            {capabilityMatrix.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-b border-slate-200/80 items-start text-xs sm:text-sm">
                <div className="md:col-span-3 font-black text-slate-950 uppercase tracking-tight text-xs pt-1">{row.system}</div>
                <div className="md:col-span-4 text-slate-400 leading-relaxed font-medium">{row.oldWay}</div>
                <div className="md:col-span-5 font-bold text-slate-900 leading-relaxed bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm md:bg-transparent md:p-0 md:rounded-none md:border-none md:shadow-none">{row.newWay}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HIGH-CONTRAST BORDERLESS CALL TO ACTION */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row md:items-center justify-between gap-10 relative z-10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[9px] font-black tracking-[0.3em] text-[#ee3444] uppercase block">Infrastructure Level Deployments</span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">Eradicate Communication Gaps & Revenue Leaks Natively.</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">Deploy secure dedicated agency clusters. Command high-velocity media distribution engines while monitoring consultant utilization and contract caps cleanly.</p>
          </div>
          <button className="bg-white text-slate-950 font-black text-[11px] tracking-wider uppercase px-8 py-5 rounded-none hover:bg-slate-100 transition-all whitespace-nowrap align-middle self-start md:self-center shadow-xl">
            Request Architecture Demo
          </button>
        </div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#ee3444]/10 blur-[120px] rounded-full pointer-events-none" />
      </section>

      {/* 6. TECHNICAL KNOWLEDGE ARCHIVE & FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16 text-left space-y-2">
            <span className="text-[10px] font-black tracking-[0.3em] text-[#7361a7] uppercase block">Compliance & Support Archive</span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950">Frequently Asked Operational Queries</h2>
            <p className="text-slate-500 text-xs sm:text-sm font-medium">Exhaustive operational answers regarding security parameters, multi-tenant structures, and third-party ledgers.</p>
          </div>

          <div className="divide-y divide-slate-100 border-t border-slate-100">
            {structuralFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="py-6">
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex justify-between items-center text-left py-2 group"
                  >
                    <span className="font-bold text-slate-950 text-sm sm:text-base tracking-tight group-hover:text-[#ee3444] transition-colors">
                      {faq.q}
                    </span>
                    <span className={`text-xs ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#ee3444]' : 'text-slate-300'}`}>
                      ▼
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 pb-2 text-slate-500 text-xs sm:text-sm leading-relaxed font-medium max-w-3xl">
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

export default PRAgencyERP;