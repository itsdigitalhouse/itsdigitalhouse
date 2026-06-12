import { Megaphone, Globe, Smartphone, Code, Cpu } from 'lucide-react';

export const nestedServices = {
  seo: {
    title: "SEO", icon: Megaphone,
    pages: [
      { label: "Keyword Research & Strategy", slug: "keyword-research", desc: "Find high-impact keywords.", longDesc: "We uncover search intent...", features: [{ title: "Analysis", detail: "Detail here" }] },
      { label: "On-Page SEO Optimization", slug: "on-page-seo", desc: "Optimize content.", longDesc: "On-page excellence...", features: [{ title: "Meta", detail: "Detail here" }] },
      { label: "Technical Audit & Fixes", slug: "technical-audit", desc: "Fix crawl errors.", longDesc: "Technical health...", features: [{ title: "Core Vitals", detail: "Detail here" }] },
      { label: "Link Building Services", slug: "link-building", desc: "Build backlinks.", longDesc: "Authority building...", features: [{ title: "Outreach", detail: "Detail here" }] },
      { label: "Local SEO Optimization", slug: "local-seo", desc: "Dominate local.", longDesc: "Local presence...", features: [{ title: "GMB", detail: "Detail here" }] },
      { label: "SEO Reporting & Analytics", slug: "seo-reporting", desc: "Track ROI.", longDesc: "Data-driven insights...", features: [{ title: "Reporting", detail: "Detail here" }] },
    ]
  },
  "paid-media": {
    title: "Paid Media", icon: Megaphone,
    pages: [
      { label: "Google PPC Campaigns", slug: "google-ppc", desc: "Maximize clicks.", longDesc: "High-intent PPC...", features: [{ title: "Bidding", detail: "Detail here" }] },
      { label: "Meta Advertising", slug: "meta-advertising", desc: "Targeted ads.", longDesc: "Social conversion...", features: [{ title: "Targeting", detail: "Detail here" }] },
      { label: "LinkedIn B2B Ads", slug: "linkedin-b2b-ads", desc: "B2B growth.", longDesc: "Professional reach...", features: [{ title: "C-Suite", detail: "Detail here" }] },
      { label: "Retargeting Frameworks", slug: "retargeting-frameworks", desc: "Recover leads.", longDesc: "Funnel recovery...", features: [{ title: "Remarketing", detail: "Detail here" }] },
    ]
  },
  web: {
    title: "Web Development", icon: Globe,
    pages: [
      { label: "Web Portal Development", slug: "web-portal-development", desc: "Enterprise portals.", longDesc: "Secure portals...", features: [{ title: "Access", detail: "Detail here" }] },
      { label: "E-Commerce Development", slug: "e-commerce-development", desc: "Online stores.", longDesc: "Seamless checkout...", features: [{ title: "Payments", detail: "Detail here" }] },
      { label: "CMS Development", slug: "cms-development", desc: "Flexible systems.", longDesc: "Manage content...", features: [{ title: "Dashboard", detail: "Detail here" }] },
      { label: "Integration Services", slug: "integration-services", desc: "Connect APIs.", longDesc: "ERP/CRM sync...", features: [{ title: "API", detail: "Detail here" }] },
    ]
  },
  mobile: {
    title: "Mobile Development", icon: Smartphone,
    pages: [
      { label: "iOS App Development", slug: "ios-app-development", desc: "Native iOS apps.", longDesc: "App Store success...", features: [{ title: "Swift", detail: "Native performance" }] },
      { label: "Android App Development", slug: "android-app-development", desc: "Android apps.", longDesc: "Robust Android...", features: [{ title: "Kotlin", detail: "Device optimization" }] },
      { label: "Cross Platform Apps", slug: "cross-platform-apps", desc: "Fast delivery.", longDesc: "One codebase...", features: [{ title: "Flutter", detail: "Multi-platform" }] },
      { label: "App UI/UX Design", slug: "app-ui-ux-design", desc: "User-centric.", longDesc: "Intuitive flow...", features: [{ title: "Prototyping", detail: "User behavior" }] },
    ]
  },
  custom: {
    title: "Custom Software", icon: Code,
    pages: [
      { label: "ERP Solution", slug: "erp-solution", desc: "Streamline ops.", longDesc: "Unified systems...", features: [{ title: "ERP", detail: "Operations" }] },
      { label: "CRM Solution", slug: "crm-solution", desc: "Sales tools.", longDesc: "Unique workflow...", features: [{ title: "CRM", detail: "Sales" }] },
      { label: "LMS Solution", slug: "lms-solution", desc: "Learning platforms.", longDesc: "Training teams...", features: [{ title: "LMS", detail: "Courses" }] },
      { label: "Process Automation", slug: "process-automation", desc: "Smart workflows.", longDesc: "Automation logic...", features: [{ title: "Workflow", detail: "No repetitive tasks" }] },
    ]
  },
  ai: {
    title: "Artificial Intelligence", icon: Cpu,
    pages: [
      { label: "AI Development", slug: "ai-development", desc: "Custom AI.", longDesc: "Solving challenges...", features: [{ title: "AI", detail: "Custom systems" }] },
      { label: "AI Chatbot Development", slug: "ai-chatbot-development", desc: "24/7 support.", longDesc: "Conversational agents...", features: [{ title: "NLP", detail: "Sales capture" }] },
      { label: "Generative AI Solutions", slug: "generative-ai-solutions", desc: "Automate creative.", longDesc: "Using LLMs...", features: [{ title: "LLMs", detail: "Automation" }] },
      { label: "Machine Learning", slug: "machine-learning", desc: "Predictive models.", longDesc: "Actionable insights...", features: [{ title: "ML", detail: "Predictions" }] },
      { label: "Computer Vision", slug: "computer-vision", desc: "Visual AI.", longDesc: "Detection systems...", features: [{ title: "CV", detail: "Inspection" }] },
      { label: "AI Integration", slug: "ai-integration", desc: "Embed AI.", longDesc: "Platform growth...", features: [{ title: "Integration", detail: "Platform embedding" }] },
    ]
  }
};