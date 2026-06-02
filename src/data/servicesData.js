// data/servicesData.js
import iosImg from '../assets/ios-development.jpeg'; // Yahan import add karein
import androidImg from '../assets/android-app-development.jpeg';
import crossPlatformImg from '../assets/cross-platform-app-development.jpeg';
import aiImg from '../assets/ai-development.jpeg';
import aiChatbotImg from '../assets/ai-chatbot.jpeg';
import generativeAiImg from '../assets/generative-app-development.jpeg';
import machineLearningImg from '../assets/machine-learning.jpeg';
import computerVisionImg from '../assets/computer-vision.jpeg';
import naturalLanguageProcessorImg from '../assets/natural-language-processor.jpeg';
import webPortalImg from '../assets/web-portal.jpeg';
import ecommerceDevelopmentImg from '../assets/e-commerce-development.jpeg';
import cmsDevelopmentImg from '../assets/cms-development.jpeg';
import integrationServicesImg from '../assets/integrated-services.jpeg';
import cloudMigrationImg from '../assets/cloud-migration.jpeg';
import cloudMaintenanceImg from '../assets/cloud-maintenance.jpeg';
import erpSolutionImg from '../assets/erp-solution.jpeg';
import crmSolutionImg from '../assets/crm-solution.jpeg';
import lmsSolutionImg from '../assets/lms-solutions.jpeg';
import seoImg from '../assets/seo.jpeg';
import smmImg from '../assets/smm.jpeg';
import paidAdsManagementImg from '../assets/paid-ads-management.jpeg';
import contentCreationImg from '../assets/content-creation.jpeg';

export const serviceContent = {
  "ios-app-development": {
    title: "iOS App Development",
    description: "We craft high-performance, intuitive, and secure applications tailored for the Apple ecosystem. From iPhones to Apple Watches, we ensure your app delivers a seamless, native experience that keeps users engaged.",
    image: iosImg, // Yahan variable use karein
    techStack: ["Swift", "SwiftUI", "Combine", "Core Data", "UIKit"],
    features: ["Custom UI/UX", "Native Performance", "Secure API Integration", "App Store Optimization"],
    process: [
      { step: "01", title: "Strategy", desc: "Defining user personas and Apple Human Interface Guidelines." },
      { step: "02", title: "Architecture", desc: "Building scalable codebases using MVVM design pattern." },
      { step: "03", title: "Development", desc: "Implementing clean, modular code with Swift." },
      { step: "04", title: "Deployment", desc: "Strict QA and App Store submission." }
    ],
    faqs: [
      { q: "Which programming language do you use for iOS?", a: "We primarily use Swift, Apple's modern, safe, and fast programming language." },
      { q: "Do you follow Apple's design guidelines?", a: "Yes, we strictly adhere to the Human Interface Guidelines (HIG) to ensure a flawless native feel." },
      { q: "How do you handle local data security on iOS?", a: "We implement Apple's native Keychain services alongside automated encryption to protect user data." },
      { q: "Will the app support the latest iOS versions?", a: "Yes, we optimize the target configurations to support the current active iOS version and previous fallbacks." },
      { q: "Can you implement Apple Pay integrations?", a: "Absolutely. We configure secure PassKit architectures for seamless native Apple Pay workflows." },
      { q: "Do you assist with App Store Connect setups?", a: "We completely manage the submission lifecycle, bundle setups, and distribution certificates." },
      { q: "What architecture is preferred for iOS apps?", a: "We design robust systems using MVVM with clean state management components." },
      { q: "How do you trace real-time execution crashes?", a: "We integrate Crashlytics and XCTest routines to monitor and isolate production edge cases instantly." },
      { q: "Can you build companion apps for Apple Watch?", a: "Yes, our modular coding allows clean extension scaling into watchOS targets seamlessly." },
      { q: "How do you handle concurrent network tasks?", a: "We use modern async/await patterns and Combine frameworks for optimized thread execution." },
      { q: "What is your quality testing procedure?", a: "We perform automated layout tests and extensive manual validation loops on real Apple devices." },
      { q: "Will I retain complete source code ownership?", a: "100%. Upon project milestone completion, the absolute ownership rights are fully transferred to you." }
    ]
  },

  "android-app-development": {
    title: "Android App Development",
    description: "High-performance apps jo har Android device par chalein. Built on robust codebases ensuring maximum engagement and seamless user interaction.",
    image: androidImg,
    techStack: ["Kotlin", "Jetpack Compose", "Coroutines & Flow", "Room", "Retrofit", "Dagger Hilt"],
    features: [
      "Kotlin & Java Development",
      "Material Design implementation",
      "Google Play Store deployment",
      "Device compatibility testing"
    ],
    process: [
      { step: "01", title: "Requirement", desc: "App ke goals define karna." },
      { step: "02", title: "UI/UX", desc: "Android Material Design principles." },
      { step: "03", title: "Coding", desc: "Kotlin aur Java ka best use." },
      { step: "04", title: "Launch", desc: "Play Store approval process." }
    ],
    faqs: [
      { q: "What programming languages do you use for Android?", a: "We primarily use Kotlin, Google's preferred modern language, combined with Jetpack Compose for native UI development." },
      { q: "How do you handle Android device fragmentation?", a: "We test across a strict matrix of physical devices with different screen sizes, aspect ratios, and OS versions to ensure consistent rendering." },
      { q: "Do you support older Android versions?", a: "Yes, we target optimal API levels (usually Android 8.0 and above) to cover over 90%+ of active global devices." },
      { q: "What architectural patterns are followed?", a: "We implement Clean Architecture using modern MVVM or MVI patterns to ensure the codebase remains scalable and decoupled." },
      { q: "How do you optimize Android background tasks?", a: "We utilize WorkManager and Kotlin Coroutines to handle background operations efficiently without draining the device battery." },
      { q: "How do you protect the app from reverse engineering?", a: "We configure ProGuard or R8 rules during the release compilation to obfuscate the code layout and secure business logic." },
      { q: "How do you store sensitive user credentials?", a: "We leverage the Android Keystore system to encrypt tokens, passwords, and biometric data at the hardware level." },
      { q: "Do you handle the Google Play Store deployment?", a: "Yes, we manage the complete lifecycle from setting up the Google Play Console, configuring App Bundles (AAB), to clearing store reviews." },
      { q: "How do you trace real-time crashes in production?", a: "We integrate Firebase Crashlytics to monitor real-time errors, performance drops, and ANR (App Not Responding) rates." },
      { q: "Can the app sync data when the device is offline?", a: "Yes, we build a local data layer using Room database that caches actions and syncs with the server when connectivity returns." },
      { q: "Do your apps support Material Design 3 features?", a: "Absolutely. We implement dynamic color themes and component libraries native to Google's latest Material 3 guidelines." },
      { q: "What is your approach to dependency injection?", a: "We use Dagger Hilt for clean dependency injection, which simplifies architecture scaling and makes automated testing flawless." }
    ]
  },

  "cross-platform-app-development": {
    title: "Cross Platform App Development",
    description: "Build once, deploy everywhere. High-performance, native-like mobile applications for both iOS and Android platforms using a single shared codebase.",
    image: crossPlatformImg,
    techStack: ["React Native", "Flutter", "Dart", "JavaScript", "TypeScript"],
    features: [
      "Single Codebase Deployment",
      "Native-Like Performance",
      "Fast Refresh & Quick Iterations",
      "Reduced Time-to-Market"
    ],
    process: [
      { step: "01", title: "Cross-Platform Strategy", desc: "Analyzing project requirements to choose the optimal framework (React Native or Flutter)." },
      { step: "02", title: "Unified UI/UX Design", desc: "Crafting a responsive layout that conforms to both Apple HIG and Material Design 3." },
      { step: "03", title: "Hybrid Development", desc: "Writing modular, reusable code to power both platforms simultaneously." },
      { step: "04", title: "Universal Launch", desc: "Simultaneous optimization and submission for Google Play Store & App Store." }
    ],
    faqs: [
      { q: "Which framework do you use for Cross-Platform apps?", a: "We specialize in React Native and Flutter, selecting the absolute best fit based on your performance and design criteria." },
      { q: "Is the performance identical to native apps?", a: "Yes, modern frameworks compile down to native components, achieving a smooth 60 FPS performance that feels completely native to the end-user." },
      { q: "Can a single codebase run on both iOS and Android?", a: "Exactly. Over 85% to 90% of the codebase is completely shared, which heavily reduces development time and operational costs." },
      { q: "How do you access native hardware features like GPS or Camera?", a: "We develop custom native bridges or utilize verified modules to access underlying iOS and Android hardware APIs securely." },
      { q: "Do you design separate UIs for iOS and Android?", a: "We build a unified design system that intelligently conforms to both Apple's HIG and Google's Material Design principles automatically." },
      { q: "How do you handle state management across complex apps?", a: "We utilize production-proven libraries like Redux Toolkit, Zustand, or Bloc depending on whether the framework is React Native or Flutter." },
      { q: "Can we push updates without re-submitting to the app stores?", a: "Yes, for React Native projects, we can configure Over-The-Air (OTA) updates to patch JavaScript code bundles instantly." },
      { q: "How do you manage dependencies and third-party plug-ins?", a: "We strictly audit npm or pub.dev packages to prevent security vulnerabilities and maintain lightweight build sizes." },
      { q: "Is cross-platform development suitable for enterprise apps?", a: "Absolutely. Global companies like Airbnb, Uber, and Shopify utilize cross-platform stacks to scale enterprise architectures efficiently." },
      { q: "How do you handle dual app store deployments?", a: "We simultaneously manage submissions for both App Store Connect and Google Play Console, aligning metadata and legal privacy rules." },
      { q: "What is the testing process for hybrid applications?", a: "We execute QA cycles across both iOS simulators/physical devices and Android emulators/hardware to capture platform-specific edge cases." },
      { q: "Can we easily migrate a cross-platform app to pure native later?", a: "Because our architectures are clean and modular, the business logic can be exported or reused with minimal friction if you ever decide to pivot." }
    ]
  },
  "web-portal-development": {
    title: "Web Portal Development",
    description: "Secure, scalable, and high-performance enterprise portals tailored for your business operations. From advanced customer hubs to complex internal management dashboards, we build systems that streamline workflows.",
    image: webPortalImg,
    techStack: ["React", "Next.js", "Node.js", "Tailwind CSS", "REST/GraphQL", "PostgreSQL"],
    features: [
      "Role-Based Access Control (RBAC)",
      "Real-Time Analytics Dashboards",
      "Secure Multi-Tenant Architecture",
      "Seamless Third-Party Integrations"
    ],
    process: [
      { step: "01", title: "Portal Architecture", desc: "Mapping user roles, data flow pipelines, and database schemas." },
      { step: "02", title: "Dashboard UI/UX", desc: "Designing high-density data views, custom charts, and intuitive navigation." },
      { step: "03", title: "Full-Stack Engineering", desc: "Developing optimized frontends with secure backend APIs and state management." },
      { step: "04", title: "Security Optimization", desc: "Rigorous penetration testing, JWT authentication setup, and production deployment." }
    ],
    faqs: [
      { q: "What is the difference between a website and a web portal?", a: "A website is public-facing and informative, whereas a web portal is a secure, authenticated system designed for specific user roles (customers, employees, vendors) to interact with complex data." },
      { q: "How do you handle user authentication and access levels?", a: "We implement Role-Based Access Control (RBAC) using JWT tokens or OAuth 2.0, ensuring users only see the data and features assigned to their specific clearance level." },
      { q: "Can the web portal integrate with our existing CRM/ERP systems?", a: "Absolutely. We build robust API integrations to cleanly sync data between your new portal and legacy systems like Salesforce, SAP, HubSpot, or custom databases." },
      { q: "Is the portal design responsive on mobile devices?", a: "Yes, all our dashboards and management portals are fully optimized using Tailwind CSS to look and perform flawlessly across desktops, tablets, and mobile screens." },
      { q: "How do you ensure data security within the portal?", a: "We enforce strict security protocols, including SSL/TLS encryption for data in transit, AES-256 for data at rest, protection against SQL injection/XSS, and regular dependency audits." },
      { q: "Can we track user activity inside the management dashboard?", a: "Yes, we can build custom audit logs and activity tracking modules so administrators can monitor entries, updates, and actions performed by any user role." },
      { q: "What database solutions do you recommend for high-density data?", a: "Depending on your data structure, we utilize PostgreSQL or MySQL for relational data integrity, and MongoDB or Redis for fast, scalable NoSQL caching." },
      { q: "Do you provide automated data backup options?", a: "Yes, we configure automated database backups (daily or hourly) on cloud infrastructures like AWS or Google Cloud, with seamless recovery protocols." },
      { q: "Can the portal handle real-time data streaming and updates?", a: "Yes, we integrate WebSockets or server-sent events (SSE) to power real-time updates for chat modules, live notifications, and instant data analytics refresh." },
      { q: "How do you optimize large data tables and charts for performance?", a: "We implement server-side pagination, virtualized lists for massive datasets, and leverage high-performance rendering charts like Recharts or Chart.js." },
      { q: "Will the portal structure support multi-tenant configurations?", a: "Yes, we design clean multi-tenant architectures where multiple client organizations can safely operate within the same system, completely isolated from each other's data." },
      { q: "What kind of post-deployment support do you offer for web portals?", a: "We provide comprehensive maintenance packages that cover server monitoring, security patches, API version updates, and scaling optimizations as your user base grows." }
    ]
  },
  "e-commerce-development": {
    title: "E-Commerce Development",
    description: "High-converting, secure, and lightning-fast online stores engineered to maximize your digital sales. From seamless product customizers to optimized single-page checkout flows, we build scalable digital storefronts.",
    image: ecommerceDevelopmentImg,
    techStack: ["Next.js", "WooCommerce", "Shopify Liquid", "Tailwind CSS", "GraphQL", "Stripe API"],
    features: [
      "Custom Product Configurators",
      "High-Performance Cart Engines",
      "Multi-Currency & Gateway Sync",
      "Automated Inventory Management"
    ],
    process: [
      { step: "01", title: "Funnel Optimization", desc: "Mapping customer purchase journeys, product categorization rules, and conversion funnels." },
      { step: "02", title: "Conversion UI/UX", desc: "Designing speed-optimized product grids, detailed filter systems, and frictionless checkouts." },
      { step: "03", title: "Store Engineering", desc: "Developing optimized frontends integrated with scalable e-commerce backends or headless architectures." },
      { step: "04", title: "Launch & Integration", desc: "Setting up real-time payment gateways, dynamic tax calculation scripts, and shipping automation hooks." }
    ],
    faqs: [
      { q: "Which platform is best for my e-commerce store?", a: "It depends on your scale. We build on WooCommerce for high flexibility, Shopify for swift operational scaling, or full custom headless setups (Next.js + Commerce layers) for maximum performance and traffic requirements." },
      { q: "Can a single product appear in multiple categories simultaneously?", a: "Yes, completely. If a product is ticked or mapped into multiple custom taxonomy tags or categories, our data loop dynamically renders it across all relevant product lists automatically." },
      { q: "How do you ensure fast page load speeds for high-volume stores?", a: "We implement rigorous image optimization (Next/Image or WebP compression), server-side caching layout layers, lazy-loaded interactive sheets, and global CDN distribution configurations." },
      { q: "How secure is the checkout process and transaction handling?", a: "We enforce absolute compliance frameworks by utilizing secure tokenized environments via Stripe, PayPal, or local APIs, meaning sensitive credit card logs never touch your database." },
      { q: "Can you build custom product customizers or jewelry layout builders?", a: "Absolutely. We can integrate specialized canvas tools (like Fabric.js interactive layers) directly into your product layout sheets to allow users to build or visualize personalized items in real time." },
      { q: "Will the store automatically sync inventory counts across channels?", a: "Yes, we program automated API webhook pipelines that immediately deduct stock levels from the central database the moment a customer clears a checkout transaction." },
      { q: "Do you build international store setups with multiple currencies?", a: "Yes, we integrate location-aware geo-IP scripts that automatically detect user origins to dynamically swap currency symbols, localized pricing tables, and shipping rules." },
      { q: "How does the backend management interface handle product entries?", a: "We build intuitive admin layouts where you can manage product variants (size, color, material), modify discount coupons, track client balances, and generate invoice reports smoothly." },
      { q: "Is the checkout page optimized for mobile users?", a: "Every store layout incorporates a 'mobile-first' strategy, offering streamlined thumb-friendly interfaces, fast numeric inputs, and single-click checkout routes to reduce cart abandonment rates." },
      { q: "Can we connect our store with external fulfillment or ERP services?", a: "Yes, we write robust integration middleware to sync your tracking statuses, purchase orders, and customer data directly with DHL, FedEx, or enterprise ERP systems." },
      { q: "How do you handle automatic sales tax calculations?", a: "We integrate automated cloud engines like TaxJar or localized country-specific conditional logic parameters that calculate tax valuations instantly based on zip codes during checkout workflows." },
      { q: "What happens if our website encounters a sudden traffic spike during a sale event?", a: "By selecting modern cloud deployments or headless static generations (SSG), your storefront architecture can effortlessly absorb high concurrent visitor volumes without falling offline or dropping active sessions." }
    ]
  },
  "cms-development": {
    title: "CMS Development",
    description: "Empower your team with flexible, secure, and user-friendly Content Management Systems. Whether you need a custom WordPress setup or a modern Headless CMS, we build architectures that make content updates effortless.",
    image: cmsDevelopmentImg,
    techStack: ["WordPress", "Strapi", "Sanity.io", "PHP", "React / Next.js", "GraphQL"],
    features: [
      "Custom Gutenberg & ACF Blocks",
      "Headless CMS Architecture",
      "Intuitive Admin Dashboards",
      "Automated Content Publishing"
    ],
    process: [
      { step: "01", title: "Content Modeling", desc: "Structuring custom post types, taxonomies, and meta fields tailored to your business data." },
      { step: "02", title: "Dashboard UI Customization", desc: "Cleaning up the admin panel and building intuitive input fields so editors don't need code." },
      { step: "03", title: "Theme & API Integration", desc: "Developing pixel-perfect frontends connected to your CMS via traditional themes or decoupled APIs." },
      { step: "04", title: "Migration & Training", desc: "Migrating legacy data securely, setting up user roles/permissions, and handoff." }
    ],
    faqs: [
      { q: "What is the difference between a Traditional CMS and a Headless CMS?", a: "A traditional CMS (like standard WordPress) links the backend database and frontend design together. A Headless CMS separates them entirely, storing content in the backend and delivering it via fast APIs to a modern frontend like Next.js for superior speed and security." },
      { q: "Will I be able to update text and images myself without any coding knowledge?", a: "Yes, completely. We build custom fields (using Advanced Custom Fields) and modular page builders so you can easily swap images, edit text, and add pages through a visual interface." },
      { q: "Can you migrate our existing website content to a new CMS?", a: "Yes, we handle complete data migration, ensuring all your blogs, pages, media assets, and SEO meta tags are transferred over securely without losing search engine rankings." },
      { q: "How do you protect WordPress or custom CMS platforms from hackers?", a: "We enforce strict security protocols, including custom login URLs, multi-factor authentication, enterprise firewalls, secure file permissions, and automated malware scanning loops." },
      { q: "Can we manage multiple sub-sites or localized languages from a single CMS dashboard?", a: "Absolutely. We configure advanced Multisite or Multi-language (WPML/Polylang for WordPress, or native localization features in Headless CMS) so you can control your entire web footprint in one place." },
      { q: "Will a heavy CMS layout slow down our website page speed?", a: "Not the way we build it. We write clean, asset-optimized code, eliminate bloated plugins, implement advanced server-side caching (Redis/Memcached), and use high-performance CDNs." },
      { q: "How do you handle custom product customizers or layouts inside a CMS?", a: "We engineer specialized backend templates that dynamically render interactive frontend systems (like customized image accordions or interactive elements) depending on what modules you activate in the backend dashboard." },
      { q: "Can we assign different access roles to our team members?", a: "Yes, we implement granular User Role Management. You can set up strict permissions for Administrators, Editors, Authors, and SEO managers so they only see the options they need." },
      { q: "Is a CMS solution scalable for high-volume enterprise content?", a: "Yes, by utilizing modular Headless architectures paired with NoSQL databases or optimized relational schemas, your system can easily scale to handle hundreds of thousands of pages and concurrent readers." },
      { q: "How does the CMS handle automated SEO optimization?", a: "We integrate advanced schema generation scripts and premium metadata optimization frameworks that auto-map title tags, XML sitemaps, open-graph rules, and alt texts during drafting stages." },
      { q: "Can the CMS connect with third-party automation tools like Zapier?", a: "Yes, we write robust REST API hooks and configure incoming/outgoing webhooks to sync your form submissions, news blasts, and client updates directly with CRMs or external apps." },
      { q: "What kind of maintenance is required after the CMS goes live?", a: "We provide automated core software update logs, database cleanup scripts, server monitoring protocols, and scheduled backup packages to ensure your platform remains completely operational." }
    ]
  },
  "integration-services": {
    title: "Integration Services",
    description: "Connect your digital ecosystem with secure, real-time API integrations and enterprise middleware. We bridge the gap between your applications, CRMs, ERPs, and third-party platforms to automate workflows seamlessly.",
    image: integrationServicesImg,
    techStack: ["REST APIs", "GraphQL", "Webhooks", "Node.js", "AWS Lambda", "Zapier / Make"],
    features: [
      "Custom API Architecture",
      "Real-Time Data Sync Pipelines",
      "Enterprise CRM & ERP Bridges",
      "Secure Webhook Management"
    ],
    process: [
      { step: "01", title: "API Mapping", desc: "Analyzing data structures, authentication protocols, and endpoint behaviors of both systems." },
      { step: "02", title: "Data Pipeline Design", desc: "Configuring middleware logic, error-handling routines, and data transformation maps." },
      { step: "03", title: "Secure Implementation", desc: "Writing optimized connection scripts, token management systems, and sync triggers." },
      { step: "04", title: "Load & Stress Testing", desc: "Simulating concurrent data requests, checking rate limits, and activating live webhooks." }
    ],
    faqs: [
      { q: "What exactly are Integration Services?", a: "Integration services involve writing specialized backend code or middleware to link separate software applications (like connecting your website to Salesforce, SAP, or a shipping provider) so they share data automatically in real time." },
      { q: "Can you connect legacy desktop software with modern web applications?", a: "Yes, we build custom API wrappers or database connectors that can safely extract, transform, and sync data from older legacy setups into modern cloud frontends." },
      { q: "What is the difference between REST and GraphQL integrations?", a: "REST APIs use standard endpoints for specific data structures, while GraphQL allows your application to request the exact data fields it needs in a single query, heavily reducing network load." },
      { q: "How do you ensure data security during third-party transfers?", a: "We secure all connection pipelines using enterprise-grade protocols, including HTTPS/TLS encryption, OAuth 2.0 authentication tokens, unique API keys, and IP white-listing parameters." },
      { q: "What happens if a third-party service crashes or goes down temporarily?", a: "We engineer robust fault-tolerant mechanisms, including automated retry loops, queue management systems (like RabbitMQ or Redis queues), and instant failure notification alerts." },
      { q: "Can we automate workflows between tools like HubSpot, Stripe, and Slack?", a: "Absolutely. We write native webhook receivers or utilize cloud automation layers (Zapier/Make) to trigger instant cross-platform actions—like notifying your Slack channel the moment a Stripe payment clears." },
      { q: "How do you handle API rate limits imposed by external software?", a: "We build smart caching optimization layers, request throttling scripts, and asynchronous data queuing to ensure your system never exceeds third-party API allowance thresholds." },
      { q: "Will integrating external APIs slow down our main application platform?", a: "Not at all. We handle complex integrations asynchronously or via background worker cron-jobs, meaning your main frontend user interface remains incredibly fast and unaffected." },
      { q: "Can you sync live stock levels between an offline ERP and an online e-commerce store?", a: "Yes, we configure real-time bi-directional sync modules. If inventory scales change in your physical warehouse, webhooks instantly push updates to your digital catalog screens." },
      { q: "Do you provide custom logging for API transactions?", a: "Yes, we integrate comprehensive monitoring dashboards where administrators can check request logs, track data payloads, and isolate connection statuses easily." },
      { q: "What kind of authentication layers do you build for custom APIs?", a: "We implement advanced security patterns including JSON Web Tokens (JWT), encrypted signature headers, or time-restricted session access to prevent unauthorized endpoint execution." },
      { q: "What happens if an external platform updates its API version?", a: "We design modular integration layers where API endpoints are decoupled from core logic. This makes version switching or upgrading schemas completely painless without breaking the main system." }
    ]
  },
  "erp-solution": {
    title: "ERP Solution",
    description: "Streamline your enterprise operations with custom ERP software designed to automate workflows. From real-time inventory tracking and supply chain management to financial ledgers and HR operations, we build centralized systems that scale your business efficiency.",
    image: erpSolutionImg,
    techStack: ["React / Next.js", "Node.js", "Python", "PostgreSQL", "Docker", "AWS / Cloud Infrastructure"],
    features: [
      "Automated Resource Planning",
      "Real-Time Inventory & Stock Hooks",
      "Centralized Financial Ledgers",
      "Dynamic Multi-Tenant Analytics"
    ],
    process: [
      { step: "01", title: "Workflow Audit", desc: "Analyzing current business operations, legacy bottleneck structures, data silos, and user role tracking hierarchies." },
      { step: "02", title: "Database Architecture", desc: "Designing highly normalized, secure relational database schemas to handle massive transaction volumes efficiently." },
      { step: "03", title: "Module Development", desc: "Engineering customized decoupled microservices for stock, finance, HR modules, and real-time computation states." },
      { step: "04", title: "Stress & Security Testing", desc: "Simulating concurrent user data processing, auditing security permission loops, and verifying ledger balancing states." }
    ],
    faqs: [
      { q: "What is a custom ERP Solution?", a: "A custom ERP (Enterprise Resource Planning) solution is a tailor-made software system that unifies all core processes of a company—such as procurement, sales, inventory, finance, and human resources—into a single centralized database wrapper." },
      { q: "Why choose a custom ERP over ready-made platforms like SAP or Odoo?", a: "Ready-made platforms often require massive monthly licensing fees and force you to change your business logic to fit their template. A custom ERP is built strictly around your specific workflows, requires no ongoing per-user licenses, and belongs entirely to you." },
      { q: "Can a custom ERP handle multi-warehouse inventory tracking?", a: "Absolutely. We build real-time bi-directional stock tracking modules that reflect instant inventory movements across multiple physical warehouse sites, updating digital stock sheets sub-second." },
      { q: "How do you ensure financial data remains secure and tamper-proof?", a: "We implement absolute double-entry bookkeeping architecture combined with strict immutable audit logs. Once a transaction is posted to the digital ledger, it cannot be edited or deleted without generating a counter-entry trail." },
      { q: "Can we integrate automated billing and invoice generation?", a: "Yes, our ERP modules automate the complete quote-to-invoice pipeline, tracking payments, auto-generating PDF reports, triggering overdue email updates, and syncing data with bank gateway webhooks." },
      { q: "Is the system responsive enough to manage from mobile devices?", a: "Yes, the frontend layout is completely responsive and optimized for cross-browser viewports, allowing administrators to check live production dashboards, approve orders, and view reports from mobile screens seamlessly." },
      { q: "How do user permissions and role management work in custom ERPs?", a: "We engineer highly precise Role-Based Access Control (RBAC) matrices. Super-admins can grant or restrict granular access down to specific button clicks, data columns, or feature tabs for any employee tier." },
      { q: "Can the ERP system handle high concurrent user traffic during peak operation hours?", a: "We build using robust database caching rules, connection pooling (like PostgreSQL setups), and optimized query index profiles to handle hundreds of concurrent enterprise staff operations without lag metrics." },
      { q: "Do you provide automated data backup routines?", a: "Yes, we structure automated daily or hourly cron-jobs that compile encrypted database dumps and push them into secure, isolated cloud storage buckets (like AWS S3) automatically." },
      { q: "Can the custom ERP communicate with our e-commerce store or external apps?", a: "Completely. We build robust custom internal REST or GraphQL API endpoints inside the ERP, allowing effortless real-time sync with external Shopify stores, custom mobile apps, or shipping channels." },
      { q: "What kind of data visualization tools do you integrate?", a: "We deploy comprehensive analytics suites using high-density charts, data tables, and dynamic filter widgets to display core KPIs, profit margins, and production metrics instantly." },
      { q: "How long does it take to deploy a full-scale custom ERP system?", a: "Depending on the number of active modules needed (Finance, CRM, Inventory, Procurement), a standard custom ERP architecture is built and deployed in modular iterations over 8 to 16 weeks including rigorous QA cycles." }
    ]
  },
  "crm-solution": {
    title: "CRM Solution",
    description: "Empower your sales and support teams with a custom CRM platform designed to optimize customer lifecycles. Track leads, automate follow-ups, monitor pipeline metrics, and manage customer communications from a unified dashboard tailored to your sales strategy.",
    image: crmSolutionImg,
    techStack: ["React / Next.js", "Node.js", "Python", "MongoDB / PostgreSQL", "Redis", "AWS / Firebase"],
    features: [
      "Dynamic Lead Funnel Tracking",
      "Automated Email & WhatsApp Hooks",
      "Comprehensive Team Activity Logs",
      "Advanced Sales Conversion Analytics"
    ],
    process: [
      { step: "01", title: "Pipeline Architecture", desc: "Mapping your unique sales funnel, deal stages, lead scoring matrices, and communication touchpoints." },
      { step: "02", title: "Contact Schema Design", desc: "Creating a flexible relational database layout to store deep customer histories, interaction timelines, and account relations." },
      { step: "03", title: "Automation Engine", desc: "Building core background cron-jobs for instant follow-up triggers, automated reminders, and assignment distribution routines." },
      { step: "04", title: "Security & Role Audit", desc: "Enforcing strict data access boundaries, preventing unauthorized contact exports, and checking pipeline integrity parameters." }
    ],
    faqs: [
      { q: "What is a custom CRM Solution?", a: "A custom CRM (Customer Relationship Management) system is software built specifically to manage your company's interactions with current and potential customers, automating sales tasks and organizing client histories without generic software limitations." },
      { q: "Can we integrate automated WhatsApp or SMS follow-ups?", a: "Yes, we connect the CRM backend with official cloud communication endpoints (like Twilio or WhatsApp Business API) to trigger instant, automated notifications when a lead switches funnel stages." },
      { q: "How secure is client data within a custom CRM setup?", a: "We build highly strict Role-Based Access Control (RBAC). Standard sales executives can only view their assigned leads, while features like 'Bulk Export to Excel' are completely locked down behind super-admin security clearances." },
      { q: "Can the CRM automatically assign incoming leads to sales reps?", a: "Absolutely. We write custom lead distribution algorithms—such as Round-Robin schedules or territory-based filtering loops—to allocate new inquiries to active representatives instantly." },
      { q: "Does this CRM integrate with our active marketing channels?", a: "Yes, we engineer webhook receivers that pull live inquiries from Facebook Lead Ads, Google Forms, your main company website, or external landing pages directly into your sales bucket real-time." },
      { q: "Can we track sales team performance and activity timelines?", a: "Yes, every action—from changing a deal status to adding a client meeting note—generates an immutable audit trail, providing managers with a clear bird's-eye view of team productivity." },
      { q: "What kind of analytical reports can the CRM generate?", a: "We embed high-density dashboard layouts tracking key sales parameters, including monthly conversion percentages, pipeline value distribution, deal win/loss ratios, and individual rep performance charts." },
      { q: "Will the CRM send automated daily reports to managers?", a: "Yes, we schedule custom automated report microservices. Every morning or weekend, the engine aggregates operational metrics and emails a clean PDF summary directly to management inboxes." },
      { q: "Is there a limit on how many contacts or leads we can store?", a: "Since this is your custom database infrastructure, there are no arbitrary tier limits or per-contact pricing models. The system scales comfortably as your data storage demands expand." },
      { q: "Can we migrate data from old systems like Excel sheets or HubSpot?", a: "Completely. We engineer specialized data sanitization scripts to parse, cleanse, format, and map your historical CSV/Excel sheets directly into the new CRM database wrapper cleanly." },
      { q: "Can sales executives access the CRM from field locations?", a: "Yes, the web application layout is fully responsive and speed-optimized for mobile browser viewports, making it fast and easy for on-field reps to update call logs or deal status points on the go." },
      { q: "How long does it take to deploy a production-ready custom CRM?", a: "A standard modular custom CRM framework—complete with lead tracking, communication logs, pipelines, and reporting widgets—is designed, tested, and fully deployed within 6 to 12 weeks." }
    ]
  },
  "lms-solution": {
    title: "LMS Solution",
    description: "Architect a modern, high-performance Learning Management System tailored for corporate training or educational institutions. Deliver seamless video streaming, interactive course modules, automated quiz engines, and comprehensive student progress tracking inside a unified portal.",
    image: lmsSolutionImg,
    techStack: ["React / Next.js", "Node.js", "Python / Django", "PostgreSQL", "Redis", "AWS S3 / CloudFront"],
    features: [
      "Modular Course Builder",
      "Secure Video Streaming Pipelines",
      "Automated Assessment Analytics",
      "Dynamic Certificate Generation"
    ],
    process: [
      { step: "01", title: "Curriculum Mapping", desc: "Analyzing course hierarchy structures, multimedia formats, user types (Students, Instructors, Admins), and certification pathways." },
      { step: "02", title: "Database Schema Design", desc: "Structuring highly flexible tables to track lesson progress, quiz results, watch times, and high-concurrency enrollment matrices." },
      { step: "03", title: "Streaming & Quiz Setup", desc: "Integrating secure video asset cloud storage wrappers, tokenized stream protection, and fully dynamic assessment computation logics." },
      { step: "04", title: "Scale & Load Audits", desc: "Simulating heavy simultaneous traffic spikes during active exam windows and verifying secure database query states." }
    ],
    faqs: [
      { q: "What is a custom LMS Solution?", a: "A custom LMS (Learning Management System) is a digital portal tailored specifically to your institution's educational structure, allowing you to host content, manage user roles, and track learning milestones without subscription boundaries." },
      { q: "How do you secure premium video lectures from being stolen?", a: "We engineering secure video streaming pipelines using signed URLs, expiring asset tokens, and cloud-delivered HLS encryption layers. This blocks standard browser extensions from directly downloading your premium video paths." },
      { q: "Can a custom LMS handle automated quiz checking?", a: "Absolutely. We build powerful assessment engines that process multiple-choice, matching, or structured text responses, instantly computing score analytics and unlocking secondary lessons based on passing grades." },
      { q: "Is there a limit to how many students can watch video content simultaneously?", a: "By leveraging robust global content delivery networks (CDNs like AWS CloudFront) and asset caching layers, your streaming pipeline scales automatically to handle hundreds of concurrent student sessions smoothly." },
      { q: "Can we integrate digital certificate generation?", a: "Yes, once a student completes all required lesson blocks and passes final exams, the system calls an automated script that compiles dynamic user records onto a premium PDF certificate format for instant download." },
      { q: "Can instructors track individual student progress charts?", a: "Yes, we build detailed dashboards showing student metrics down to lesson completion percentages, total hours spent, last active stamps, and historical quiz attempts tracking pipelines." },
      { q: "Can a custom LMS support live online classes?", a: "Completely. We can connect web hooks and embed API interfaces with services like Zoom, Webex, or secure WebRTC pipelines to allow inside-dashboard virtual classroom connections effortlessly." },
      { q: "Can we sell courses through the LMS system?", a: "Yes, we can connect robust payment gateway integrations (like Stripe, PayPal, or local processors) that automatically assign enrollment access permissions to user profiles once a checkout transaction clears." },
      { q: "How are notifications handled for assignments or announcements?", a: "We setup background cron workers that process automated event alerts, sending instantaneous in-app dashboard signals, email circulars, or WhatsApp mobile reminder notifications to student buckets." },
      { q: "Can the system handle multi-tenant corporate portals?", a: "Yes, we can engineer the architecture so corporate managers can monitor exclusive team silos, assign tracks to specific departments, and review centralized company audit logs." },
      { q: "Is the interface friendly for mobile devices?", a: "Definitely. The complete frontend setup is fully responsive, lightweight, and engineered for cross-browser Viewport support, making it simple for students to review content on mobile views." },
      { q: "What is the timeline to launch a production-grade custom LMS?", a: "A fully specialized modular custom LMS setup—including user accounts, course layouts, assessment engines, and analytics—is developed, QA checked, and securely deployed within 8 to 14 weeks." }
    ]
  },
  "ai-development": {
    title: "AI Development",
    description: "Transform your business operations with intelligent, automated AI solutions. From fine-tuning Large Language Models (LLMs) and training predictive Machine Learning models to engineering autonomous agent workflows and Computer Vision pipelines, we build smart software that turns complex data into actionable outcomes.",
    image: aiImg,
    techStack: ["Python", "PyTorch / TensorFlow", "OpenAI API", "LangChain / LlamaIndex", "FastAPI", "Vector DBs (Pinecone/Chroma)"],
    features: [
      "Custom LLM Fine-Tuning & RAG",
      "Predictive Analytics & Forecasting",
      "Autonomous Agent Orchestration",
      "Computer Vision & Pattern Processing"
    ],
    process: [
      { step: "01", title: "Data Audit & Strategy", desc: "Analyzing available data structures, processing pipelines, compute requirements, and mapping optimal AI/ML model architectures." },
      { step: "02", title: "Feature Engineering", desc: "Cleaning datasets, parsing unstructured logs, vectorizing text corpora, and setting up secure data embedding workflows." },
      { step: "03", title: "Model Training & Sync", desc: "Developing optimized algorithm training patterns, configuring weights, tuning hyperparameters, or building multi-agent LangChain wrappers." },
      { step: "04", title: "Pipeline Optimization", desc: "Testing model inference latency, managing rate-limits, securing API data transmission wrappers, and executing cloud-scale scaling deployment." }
    ],
    faqs: [
      { q: "What falls under your AI Development services?", a: "Our services cover the entire AI spectrum: custom Large Language Model (LLM) integrations, Retrieval-Augmented Generation (RAG) for internal company data, automated agent workflows, predictive analytics engines, automated data processing pipelines, and computer vision systems." },
      { q: "How do you handle data privacy when working with OpenAI or third-party LLMs?", a: "Data privacy is our top priority. We use strict enterprise API access contracts where data tokens are never saved for base-model training, or we deploy completely self-hosted, open-source models (like Llama 3 or Mistral) on your isolated private cloud infrastructure." },
      { q: "What is Retrieval-Augmented Generation (RAG) and how does it help?", a: "RAG connects an advanced AI model directly to your internal company documents, PDFs, databases, or ERP logs using a specialized Vector Database. This allows the AI to give highly accurate, real-time context answers about your specific business operations without hallucinating public facts." },
      { q: "Can AI models automate our customer support or internal operations?", a: "Yes, completely. We build autonomous AI agents that don't just answer queries but carry out actions—such as automatically parsing incoming client emails, extracting payload data, updating your CRM pipelines, and drafting accurate human-like responses." },
      { q: "Can you train predictive models to forecast our business sales or stock levels?", a: "Absolutely. We write Machine Learning algorithms (using regression models and neural networks) that analyze your historical transaction sheets, market trends, and seasonal metrics to forecast upcoming sales volumes and calculate stock replenishment triggers." },
      { q: "What databases are required to handle artificial intelligence assets?", a: "For modern generative text assets and AI context storage, we integrate high-performance Vector Databases like Pinecone, Milvus, or pgvector wrappers inside PostgreSQL to perform ultra-fast mathematical similarity searches on millions of data vectors." },
      { q: "Will running an AI model slow down our main application frontend?", a: "Not at all. We decouple the computationally heavy AI layers entirely. All inferences are processed via asynchronous backend worker tasks or optimized microservices using fast FastAPI wrappers, keeping your frontend UI incredibly responsive." },
      { q: "Can your AI solutions extract text or data from physical receipts and invoices?", a: "Yes, we build advanced Computer Vision pipelines utilizing Optical Character Recognition (OCR) combined with layout-aware language understanding to automatically extract line-item totals, dates, and client titles from physical or digital media uploads." },
      { q: "What programming languages and frameworks are preferred for your AI builds?", a: "We build our core machine learning pipelines using Python, leveraging frameworks like PyTorch and TensorFlow for model configurations, alongside production automation orchestrators like LangChain, LlamaIndex, and FastAPI." },
      { q: "Is it expensive to maintain an active AI pipeline in production?", a: "We design with extreme cost-efficiency. By optimizing prompt token consumption, embedding intelligent server-side caching systems, and dynamically switching to smaller local open-source models for basic workflows, we heavily scale down cloud resource consumption bills." },
      { q: "Can we track the choices and outputs generated by the production AI?", a: "Yes, we incorporate comprehensive audit logging and evaluation dashboard metrics. Managers can inspect user prompt states, view raw token costs, check exact context sources retrieved, and rate output accuracy logs." },
      { q: "What is the typical time frame to engineer a custom AI module?", a: "Depending on dataset readiness and model complexity, a specialized AI pipeline—such as an internal corporate knowledge RAG system or automated classification engine—is built, validated, and fully deployed within 8 to 14 weeks." }
    ]
  },
  "ai-chatbot-development": {
    title: "AI Chatbot Development",
    description: "Deploy highly intelligent, multi-channel AI Chatbots capable of conducting complex, human-like conversations. Engineered with context-retention logic, custom knowledge bases, and direct transactional system capabilities, our chatbots automate client engagement and customer support 24/7 without losing brand tone.",
    image: aiChatbotImg,
    techStack: ["Node.js / Python", "OpenAI Assistants API", "LangGraph", "vapi.ai / Bland.ai", "Redis (Session Store)", "Pinecone"],
    features: [
      "Context-Aware Conversational Flows",
      "Omnichannel Pipeline (WhatsApp/Web)",
      "Live Transaction Engine Access",
      "Dynamic Human-in-the-Loop Fallbacks"
    ],
    process: [
      { step: "01", title: "Persona & Logic Mapping", desc: "Defining chatbot behavior protocols, response guidelines, safety guardrails, and analyzing system action trigger points." },
      { step: "02", title: "Knowledge Extraction", desc: "Scraping brand knowledge domains, policy PDFs, and parsing historical customer chat transcripts into structured vectors." },
      { step: "03", title: "State Machine Building", desc: "Developing stateful conversation matrices using LangGraph to handle nested user requests and memory buffers flawlessly." },
      { step: "04", title: "Channel Sync & Validation", desc: "Integrating WhatsApp Cloud API wrappers, standard web widget sockets, and auditing payload latency drops under stress." }
    ],
    faqs: [
      { q: "What makes your AI Chatbots different from traditional rule-based bots?", a: "Traditional bots rely strictly on rigid, pre-configured buttons and keyword rules that break easily when a user types freely. Our AI chatbots leverage advanced Large Language Models (LLMs) and context state graphs to understand natural human language, sentiment, and complex multi-part questions effortlessly." },
      { q: "Can the AI Chatbot perform physical actions like updating orders or booking appointments?", a: "Yes, completely. We build chatbots with functional tool-calling layers. This allows the AI to securely access your backend databases, check product inventories, update CRM logs, or book reservation slots via live REST API pipelines mid-conversation." },
      { q: "How does the bot retain context during a long conversation?", a: "We integrate high-performance session databases using Redis to handle short-term conversational states. The chatbot utilizes an advanced window-token summarizer strategy, remembering previous turns and referencing pichli baatein naturally without slowing down response triggers." },
      { q: "Can we deploy the same AI Chatbot on WhatsApp, Instagram, and our website?", a: "Absolutely. The core conversational intelligence layer is completely abstracted. We create a unified backend pipeline and build dedicated channel wrappers to deploy the identical bot logic seamlessly across WhatsApp Cloud API, Meta Messenger, Instagram, and web components." },
      { q: "What happens if the AI Chatbot gets stuck or doesn't know the answer?", a: "We design a strict 'Human-in-the-Loop' fallback system. When the bot detects an unresolved intent or low confidence metrics, it triggers a live webhook that flags a human agent inside your dashboard, transferring the entire active chat history smoothly without resetting." },
      { q: "How do you protect the chatbot from saying inappropriate things or hallucinating?", a: "We implement multi-layered safety guardrails and strict system prompts. By passing user queries through moderation filters and constraining responses strictly to your vector knowledge base documents (RAG framework), we ensure the bot stays professional and never makes up facts." },
      { q: "Can the chatbot support multilingual conversations, such as Urdu, English, or Roman Urdu?", a: "Yes, our bots possess natural cross-lingual understanding. A user can freely switch languages during the chat—typing in English, Urdu, or mixed Roman Urdu—and the agent adapts instantly, preserving tone and syntax logic." },
      { q: "Can the chatbot process automated document uploads like image receipts?", a: "Yes, by connecting multimodal capabilities, the chatbot can accept media attachments. It parses uploaded invoices or receipts through image recognition models to instantly validate transaction details directly within the chat window." },
      { q: "How long does it take to deploy a custom enterprise AI Chatbot?", a: "A tailored production chatbot solution—including custom knowledge base configuration, database state engines, API system tools, and WhatsApp or web widget setups—is built and deployed within 6 to 10 weeks." }
    ]
  },
  "generative-ai-development": {
    title: "Generative AI Development",
    description: "Build cutting-edge AI ecosystems that go beyond simple chat. We engineer custom LLM applications, proprietary RAG pipelines, and automated agent workflows that leverage your private data to provide intelligent, accurate, and context-aware business insights.",
    image: generativeAiImg,
    techStack: ["OpenAI API / Claude API", "LangChain / LlamaIndex", "Pinecone / Weaviate (Vector DB)", "Python / FastAPI", "PostgreSQL", "Docker / AWS Bedrock"],
    features: [
      "Custom RAG (Retrieval-Augmented Generation) Pipelines",
      "Proprietary Model Fine-Tuning",
      "Automated Agentic Workflows",
      "Data-Privacy Focused Local Inference"
    ],
    process: [
      { step: "01", title: "Data Ingestion & Embedding", desc: "Parsing your enterprise documents, knowledge bases, and structured data into high-dimensional vector embeddings for semantic searchability." },
      { step: "02", title: "Model Architecture Design", desc: "Selecting the optimal LLM (GPT-4o, Claude 3.5, or Llama 3) and designing the prompting logic, chain-of-thought, and system guardrails." },
      { step: "03", title: "RAG Pipeline Implementation", desc: "Building the retrieval layer that pulls relevant context from your vector store before generating responses, ensuring accuracy and reducing hallucinations." },
      { step: "04", title: "Deployment & Scaling", desc: "Setting up serverless inference endpoints, monitoring token usage, and implementing caching mechanisms to optimize speed and cost." }
    ],
    faqs: [
      { q: "How do you prevent the AI from hallucinating?", a: "We utilize RAG (Retrieval-Augmented Generation). The AI is strictly constrained to use only the data we provide in your vector database as the source of truth, effectively grounding its responses in your specific business information." },
      { q: "Is my private company data secure?", a: "Completely. We ensure data privacy through fine-grained access control, anonymization of sensitive PII (Personally Identifiable Information) before embedding, and options to use private cloud instances or even local, on-premise model hosting." },
      { q: "Can we integrate this AI with our existing software?", a: "Yes. Our generative AI solutions are designed with middleware wrappers, allowing them to communicate via API with your CRM, ERP, or internal databases to perform actions based on user intent." },
      { q: "What kind of data formats can the AI process?", a: "Our pipeline supports a massive range of formats including PDF, DOCX, CSV, Excel, JSON, and even raw text logs. We implement OCR (Optical Character Recognition) for scanned physical documents so the AI can read and extract data from images." },
      { q: "How do you handle 'token limits' in long documents?", a: "We utilize advanced 'chunking' strategies and semantic sliding windows. By breaking large datasets into meaningful, overlapping fragments and storing them as vectors, the AI retrieves only the relevant segments, allowing it to process massive manuals without losing coherence." },
      { q: "Can the AI provide citations for its answers?", a: "Yes. For enterprise RAG implementations, we configure the system to output source-attribution. The AI will cite the specific page or document section it pulled the information from, allowing your team to verify the facts instantly." },
      { q: "What happens if our data changes frequently?", a: "We implement 'Dynamic Indexing.' Every time your backend data is updated, a silent background worker re-embeds the new data into the vector store, ensuring the AI always has access to the most recent information without needing a full system rebuild." },
      { q: "Do you offer post-launch optimization and maintenance?", a: "Definitely. We provide a 'Performance Tuning' phase where we monitor actual user queries. We refine the prompts, adjust the retrieval sensitivity, and improve the system logic based on real-world usage patterns to ensure your accuracy score keeps climbing." }
    ]
  },
  "machine-learning": {
    title: "Machine Learning",
    description: "Build robust, data-driven intelligence that predicts trends, identifies anomalies, and automates complex decision-making. We develop custom predictive models and ML pipelines that transform your raw historical data into accurate, actionable business forecasts.",
    image: machineLearningImg,
    techStack: ["Python (Scikit-Learn/XGBoost)", "TensorFlow / PyTorch", "Pandas / NumPy", "MLflow / Kubeflow", "Docker / FastAPI", "SQL / NoSQL"],
    features: [
      "Custom Predictive Analytics Models",
      "Automated Anomaly Detection Systems",
      "End-to-End MLOps Pipelines",
      "Real-time Inference Engines"
    ],
    process: [
      { step: "01", title: "Data Profiling & Cleaning", desc: "Analyzing data quality, handling outliers, performing feature scaling, and resolving missing values to prepare datasets for training." },
      { step: "02", title: "Feature Engineering", desc: "Identifying and creating the most impactful data features that improve model performance and predictive accuracy." },
      { step: "03", title: "Algorithm Selection & Training", desc: "Experimenting with various model architectures, tuning hyperparameters, and training models against test/train splits." },
      { step: "04", title: "Continuous Deployment (MLOps)", desc: "Integrating model versioning, automated re-training triggers, and deploying as high-speed inference microservices." }
    ],
    faqs: [
      { q: "What is the difference between AI and Machine Learning?", a: "AI is the broad concept of building systems that mimic human intelligence. ML is a subset of AI that focuses on training algorithms to learn patterns from historical data to make predictions without being explicitly programmed for every scenario." },
      { q: "How much data do I need to start a machine learning project?", a: "The volume depends on the complexity of the problem. While 'more is better,' we can build effective models with smaller, high-quality datasets using techniques like Transfer Learning, provided the data is clean and representative." },
      { q: "Can ML predict my sales or inventory needs?", a: "Yes. Using Time-Series Analysis and Regression models, we can analyze your historical transaction patterns, seasonality, and market factors to forecast future sales volumes and optimize inventory levels." },
      { q: "How do we ensure the model remains accurate over time?", a: "We implement 'Model Monitoring' and 'Automated Retraining' loops. As new data comes in, the system compares predictions against reality and triggers an update if performance drifts below your required thresholds." },
      { q: "Can you detect fraudulent transactions in real-time?", a: "Absolutely. We build Anomaly Detection systems that establish 'normal' behavioral profiles. Any transaction or event that deviates significantly from these patterns is flagged instantly as a potential risk." },
      { q: "What is MLOps and why do I need it?", a: "MLOps is the standard for managing the machine learning lifecycle. It covers versioning of datasets, tracking model experiments, and ensuring that your model remains reliable in a production environment rather than just working once in a lab." },
      { q: "Can we use ML to classify customer feedback automatically?", a: "Yes, using Natural Language Processing (NLP) models, we can build automated classifiers that scan incoming reviews, support tickets, or emails to categorize them by sentiment or urgency." },
      { q: "Do you use pre-built models or custom ones?", a: "We do both. We start by exploring pre-trained architectures (Transfer Learning) to save time and cost, but we build custom models from scratch when your business problem requires specific algorithmic logic." },
      { q: "What is 'Feature Engineering' and why is it important?", a: "Feature engineering is the process of turning raw data into variables that an algorithm can easily understand. It is often the most critical step—a good feature is often more valuable than a complex algorithm." },
      { q: "How do we measure if a model is 'good'?", a: "We use quantitative metrics like Precision, Recall, F1-Score, and Mean Absolute Error (MAE) depending on the goal. We provide a clear report on model performance before any deployment." },
      { q: "Can you host the ML model on our private server?", a: "Yes. We containerize models using Docker, allowing us to deploy them in any environment—whether it's AWS, GCP, or your own on-premise infrastructure—ensuring security and control." },
      { q: "What is the typical lifecycle of an ML project?", a: "A standard engagement includes 2-3 weeks for data audit, 4-6 weeks for model training and validation, and 2-4 weeks for production integration and MLOps pipeline setup." }
    ]
  },
  "computer-vision": {
    title: "Computer Vision",
    description: "Empower your systems to 'see' and interpret the world. We build advanced Computer Vision solutions that automate visual inspection, object recognition, motion analysis, and OCR pipelines to increase operational efficiency and accuracy.",
    image: computerVisionImg,
    techStack: ["OpenCV", "YOLO (You Only Look Once)", "PyTorch / TensorFlow", "MediaPipe", "CUDA (GPU Acceleration)", "FastAPI / gRPC"],
    features: [
      "Real-time Object Detection & Tracking",
      "Automated Quality Inspection (OCR/Defect)",
      "Facial Recognition & Biometric Analysis",
      "Video Analytics & Motion Heatmaps"
    ],
    process: [
      { step: "01", title: "Visual Data Acquisition", desc: "Setting up camera/sensor infrastructure, gathering high-resolution image datasets, and defining lighting/environment variables." },
      { step: "02", title: "Annotation & Preprocessing", desc: "Bounding box labeling, image normalization, noise reduction, and perspective correction to ensure the model sees clean, accurate inputs." },
      { step: "03", title: "Model Architecture & Training", desc: "Selecting advanced architectures like YOLOv10 or ResNet, performing transfer learning, and training against complex visual datasets." },
      { step: "04", title: "Deployment on Edge/Cloud", desc: "Optimizing models for edge-device (Raspberry Pi/NVIDIA Jetson) deployment or cloud-based server inference with GPU acceleration." }
    ],
    faqs: [
      { q: "What kind of hardware is required for Computer Vision?", a: "It depends on the scale. For real-time processing, we recommend NVIDIA Jetson or dedicated GPU-enabled edge devices. For batch processing, cloud-based GPU instances handle the heavy lifting." },
      { q: "Can you detect defects in manufacturing lines?", a: "Yes. By training models on images of 'perfect' vs 'defective' products, our systems can trigger instant alerts if a product deviates from the set tolerance levels." },
      { q: "Is it possible to count people or objects in a video feed?", a: "Absolutely. Using sophisticated 'Object Counting' and tracking algorithms, we can provide live analytics on traffic, store footfalls, or queue lengths." },
      { q: "How do you handle variable lighting conditions?", a: "We use preprocessing pipelines that dynamically adjust image contrast, brightness, and color balance before feeding the frame to the model, ensuring stability in varied environments." },
      { q: "Can Computer Vision recognize text from physical documents?", a: "Yes, we integrate high-precision OCR engines that scan physical receipts, IDs, or forms, extracting clean JSON data directly into your database." },
      { q: "How long does model training take?", a: "Depends on dataset size and accuracy goals. Typically, a baseline model is ready in 3-4 weeks, with iterative improvements over the following weeks to reach 99%+ accuracy." },
      { q: "Can your vision models run offline?", a: "Yes. We specialize in 'Edge AI'—optimizing models to run locally on hardware without needing constant internet, perfect for remote surveillance or isolated industrial sites." },
      { q: "How secure is the visual data?", a: "We implement local processing to ensure raw video frames are not uploaded to servers unnecessarily. Sensitive data is discarded immediately after analysis, keeping your privacy intact." },
      { q: "What accuracy levels can be expected?", a: "We target industry-standard precision metrics. For industrial inspection, we often exceed 99% accuracy; for human detection in crowds, we maintain high performance even under occlusion." },
      { q: "Can you track objects across multiple cameras?", a: "Yes, we implement 'Multi-Camera Re-Identification' (Re-ID), allowing a system to track an object or person as they move between different camera fields of view." },
      { q: "Is the system scalable?", a: "Our architecture is microservice-based. You can start with one camera or processing unit and scale to hundreds by adding more edge-compute modules to your cluster." },
      { q: "Do I need a huge dataset to start?", a: "Not necessarily. We use 'Data Augmentation' to multiply your existing images and 'Transfer Learning' to leverage pre-trained weights, so you can start with a smaller, focused dataset." }
    ]
  },
  "natural-language-processing": {
    title: "Natural Language Processing",
    description: "Unlock the hidden intelligence within your text data. We engineer advanced NLP pipelines to parse, understand, and extract actionable insights from unstructured language, enabling your business to automate document processing, sentiment tracking, and cross-lingual communication.",
    image: naturalLanguageProcessorImg,
    techStack: ["Hugging Face Transformers", "spaCy / NLTK", "BERT / RoBERTa", "LangChain", "Python", "Elasticsearch / OpenSearch"],
    features: [
      "Automated Sentiment & Emotion Analysis",
      "Entity Recognition (NER) & Extraction",
      "Automated Document Summarization",
      "Text Classification & Routing"
    ],
    process: [
      { step: "01", title: "Text Preprocessing", desc: "Tokenization, stop-word removal, lemmatization, and noise filtering to turn raw text into machine-readable structures." },
      { step: "02", title: "Semantic Analysis", desc: "Applying advanced Transformer models to understand context, intent, and relationships between phrases and entities." },
      { step: "03", title: "Custom Pipeline Development", desc: "Building modular processing flows to categorize, extract, or translate text based on your specific business requirements." },
      { step: "04", title: "Insights Integration", desc: "Pushing processed data into dashboards, CRMs, or automated trigger systems to turn analysis into real-time business action." }
    ],
    faqs: [
      { q: "What is the primary use case for NLP in business?", a: "NLP is used to automate customer service (sentiment analysis of tickets), parse legal/financial documents, summarize internal reports, and categorize incoming emails automatically." },
      { q: "Can NLP handle languages other than English?", a: "Yes. We specialize in multi-lingual NLP models that handle global languages, including support for Urdu and Roman Urdu, allowing you to process localized market feedback." },
      { q: "What is 'Named Entity Recognition' (NER)?", a: "NER is a technique where the model identifies specific 'entities' like names, dates, currency, locations, or product IDs from a wall of text, making data extraction automatic." },
      { q: "How does NLP differ from standard keyword search?", a: "Standard search finds exact matches. NLP understands 'intent' and 'context.' It knows that 'the bank is closed' refers to a financial institution, not a river bank." },
      { q: "Can you analyze the sentiment of social media comments?", a: "Yes. We build pipelines that scrape social mentions and perform real-time sentiment analysis, helping you track brand health and identify PR issues before they escalate." },
      { q: "How do you ensure data accuracy in NLP?", a: "We use 'Fine-Tuning.' We train the models on your industry-specific jargon or documents, ensuring the system understands your company's unique terminology." },
      { q: "Can NLP help with legal document review?", a: "Absolutely. We build 'Contract Intelligence' systems that scan hundreds of pages to find clauses, dates, and liabilities, drastically reducing human review time." },
      { q: "How do you handle slang or informal language?", a: "We incorporate custom dictionaries and train our models on informal datasets, which is especially important for processing Roman Urdu and social media trends." },
      { q: "Can NLP summarize long reports?", a: "Yes, using 'Abstractive Summarization' models, the AI reads long PDFs and writes a concise, human-readable summary of the key findings." },
      { q: "Is the NLP pipeline scalable?", a: "Our pipelines are containerized. Whether you are processing 10 emails a day or 1 million tweets an hour, the system scales automatically using cloud clusters." },
      { q: "Do you offer text-to-speech or speech-to-text integration?", a: "Yes. We can link our NLP pipelines with ASR (Automatic Speech Recognition) models to transcribe and analyze voice calls, meetings, or customer support recordings." },
      { q: "How do you measure NLP success?", a: "We measure success through precision, recall, and F1-scores. We provide you with a dashboard showing exactly how accurate the model is at classifying or extracting data." }
    ]
  },
  "cloud-migration": {
    title: "Cloud Migration",
    description: "Seamlessly transition your legacy infrastructure to a high-performance cloud ecosystem. We engineer zero-downtime migration strategies, ensuring your data, applications, and services scale effortlessly while reducing operational costs and enhancing system security.",
    image: cloudMigrationImg,
    techStack: ["AWS (EC2/S3/RDS)", "Azure", "Google Cloud Platform", "Kubernetes / Docker", "Terraform / Ansible", "Jenkins / GitHub Actions"],
    features: [
      "Zero-Downtime Application Migration",
      "Cloud-Native Architectural Refactoring",
      "Automated Infrastructure-as-Code (IaC)",
      "Continuous Security & Compliance Audits"
    ],
    process: [
      { step: "01", title: "Infrastructure Audit", desc: "Mapping your current server landscape, dependencies, and identifying bottlenecks to design the optimal target cloud architecture." },
      { step: "02", title: "Migration Strategy Design", desc: "Choosing between Rehosting (Lift & Shift), Replatforming, or Refactoring based on your business continuity requirements." },
      { step: "03", title: "Data & App Migration", desc: "Executing secure, incremental data transfers and application deployments with strict validation to ensure data integrity." },
      { step: "04", title: "Post-Migration Optimization", desc: "Right-sizing cloud resources, configuring auto-scaling, and setting up monitoring dashboards for peak performance." }
    ],
    faqs: [
      { q: "Will our application face downtime during migration?", a: "Our goal is zero-downtime. We use blue-green deployment strategies and incremental data synchronization to ensure your users never experience an outage during the move." },
      { q: "How do you ensure data security during the transfer?", a: "We use end-to-end encryption (TLS 1.3) during transit and ensure all cloud storage buckets or databases are compliant with industry-grade encryption-at-rest standards." },
      { q: "What is the difference between Rehosting and Refactoring?", a: "Rehosting ('Lift & Shift') moves your app as-is to the cloud. Refactoring modifies the code to make it cloud-native, allowing you to take full advantage of microservices and serverless auto-scaling." },
      { q: "Can we migrate to a multi-cloud environment?", a: "Yes. We design vendor-neutral infrastructure using Terraform, allowing your application to be deployed across AWS, Azure, or GCP interchangeably, avoiding vendor lock-in." },
      { q: "How do you handle legacy database migrations?", a: "We use specialized database migration services that perform schema conversion and continuous data replication, keeping the source and target databases in sync until the final cutover." },
      { q: "Will our cloud costs go up?", a: "Initially, cloud costs can seem high if not managed. We implement 'Right-Sizing' and auto-scaling rules so you only pay for the compute power you actually use, often lowering total TCO." },
      { q: "Do you handle compliance and certifications?", a: "Absolutely. We ensure your cloud environment is configured to meet ISO, GDPR, or HIPAA requirements through automated security compliance scanning." },
      { q: "What is 'Infrastructure as Code' (IaC)?", a: "IaC allows us to provision your entire server network using code (Terraform). This makes your infrastructure reproducible, error-free, and easy to version control." },
      { q: "Can you migrate a monolithic application?", a: "Yes. We often perform a phased migration where we first lift the monolith and then gradually break it down into microservices to improve modularity and speed." },
      { q: "How do you monitor the health of the migrated system?", a: "We set up comprehensive observability stacks (Prometheus, Grafana, CloudWatch) to track latency, error rates, and resource utilization in real-time." },
      { q: "What if the migration fails?", a: "We design a comprehensive rollback plan. Before the final cutover, we conduct extensive dry runs to ensure that if anything deviates from expectations, we can revert to the on-premise environment instantly." },
      { q: "Is the system ready for global scaling?", a: "Yes. Once in the cloud, we leverage Global CDNs and multi-region deployments to ensure your application remains fast and responsive for users anywhere in the world." }
    ]
  },
  "cloud-support-&-maintenance": {
    title: "Cloud Support & Maintenance",
    description: "Ensure your digital infrastructure remains robust, secure, and cost-efficient. We provide 24/7 proactive monitoring, automated patch management, and resource optimization to keep your cloud environment performing at peak potential.",
    image: cloudMaintenanceImg,
    techStack: ["AWS CloudWatch / Azure Monitor", "Prometheus / Grafana", "PagerDuty", "Ansible / Terraform", "Docker / Kubernetes", "CloudHealth"],
    features: [
      "24/7 Proactive System Monitoring",
      "Automated Cost & Resource Optimization",
      "Security Patching & Compliance Updates",
      "Incident Response & Recovery"
    ],
    process: [
      { step: "01", title: "Monitoring Setup", desc: "Configuring observability stacks to track CPU, memory, network, and application logs in real-time." },
      { step: "02", title: "Proactive Maintenance", desc: "Scheduling automated backups, routine security updates, and performance health checks to prevent issues before they occur." },
      { step: "03", title: "Incident Management", desc: "Setting up automated alerts and standby protocols for immediate incident response, ensuring minimal downtime." },
      { step: "04", title: "Continuous Optimization", desc: "Regularly auditing cloud costs and resource utilization to downsize idle assets and maximize ROI." }
    ],
    faqs: [
      { q: "What does 'Proactive Monitoring' mean?", a: "We don't wait for your site to go down. Our automated tools alert us to anomalies—like an unexpected spike in latency or a memory leak—allowing us to fix the issue before users ever notice." },
      { q: "How do you handle security updates?", a: "We use automated patch management. Critical security patches are tested in a sandbox environment and deployed to your live infrastructure without manual intervention, keeping your system safe 24/7." },
      { q: "Can you help lower our monthly cloud bill?", a: "Yes. We perform 'Right-Sizing' audits where we identify over-provisioned servers or idle storage and move them to cheaper or more efficient tiers, significantly reducing your monthly spend." },
      { q: "What is your typical response time for critical issues?", a: "We offer tiered support with defined Service Level Agreements (SLAs). For critical 'System-Down' events, our response time is typically within 15-30 minutes." },
      { q: "Do you offer database backups and recovery?", a: "Yes. We configure automated snapshot schedules for your databases, with multi-region redundancy to ensure that data can be restored instantly if a disaster occurs." },
      { q: "How do you handle compliance monitoring?", a: "We run continuous automated compliance scans that check your infrastructure against industry benchmarks (like CIS or SOC2) to ensure you stay compliant." },
      { q: "What happens if our traffic spikes unexpectedly?", a: "We configure 'Auto-Scaling Groups.' When traffic exceeds a certain threshold, the system automatically spins up new server instances and shuts them down when demand subsides, keeping you online without overspending." },
      { q: "Is your maintenance service white-labeled?", a: "Yes. We act as your behind-the-scenes engineering team, providing support under your brand so you can focus on your business while we handle the backend." },
      { q: "Do we get regular performance reports?", a: "Absolutely. We provide monthly 'Infrastructure Health' reports detailing uptime statistics, cost savings, security status, and recommendations for future performance improvements." },
      { q: "Can you support hybrid cloud environments?", a: "Yes, we monitor and manage infrastructure spread across on-premise data centers and multiple cloud providers, providing a single pane of glass for your entire environment." },
      { q: "How do you handle log management?", a: "We aggregate logs from all sources into a centralized, searchable stack, allowing us to perform rapid root-cause analysis during any troubleshooting process." },
      { q: "What if we need to scale up our support?", a: "Our support plans are flexible. As your infrastructure grows, we adjust our monitoring scope and support tiers to match your increased complexity." }
    ]
  },
  "seo": {
    title: "SEO Optimization",
    description: "Dominate search rankings and drive sustainable organic growth. We engineer data-backed SEO strategies covering technical infrastructure, semantic content optimization, and high-authority link acquisition to ensure your brand stands out in competitive digital landscapes.",
    image: seoImg,
    techStack: ["Google Search Console", "Ahrefs / SEMrush", "Screaming Frog", "Google Analytics 4", "Schema Markup (JSON-LD)", "PageSpeed Insights"],
    features: [
      "Technical SEO Audit & Architecture",
      "Semantic Content Strategy & On-Page",
      "High-Authority Backlink Acquisition",
      "Local SEO & Google Maps Mastery"
    ],
    process: [
      { step: "01", title: "Technical SEO Audit", desc: "Analyzing crawlability, indexation issues, site speed metrics, and core web vitals to ensure search engines can read your site perfectly." },
      { step: "02", title: "Competitor & Keyword Intelligence", desc: "Identifying high-intent search terms and analyzing the content gaps of your top competitors to claim market share." },
      { step: "03", title: "Content & On-Page Optimization", desc: "Implementing structured data (Schema), optimizing meta-tags, internal linking, and refining content relevance to match user intent." },
      { step: "04", title: "Authority Building", desc: "Executing ethical, high-quality backlink campaigns and PR outreach to establish your domain as a trusted industry authority." }
    ],
    faqs: [
      { q: "How long does it take to see SEO results?", a: "SEO is a marathon, not a sprint. Typically, you start seeing positive movement in 3-4 months, with significant traffic growth becoming visible within 6-9 months depending on your industry competition." },
      { q: "Do you guarantee #1 rankings?", a: "Ethical SEO agencies never guarantee #1 positions because Google's algorithm is dynamic and owned by them. However, we guarantee strict adherence to industry-standard best practices that maximize your visibility and organic traffic." },
      { q: "What is Technical SEO?", a: "It focuses on the 'backend'—how search engines crawl and index your site. This includes site speed, mobile responsiveness, XML sitemaps, SSL, and preventing duplicate content issues." },
      { q: "Is content still king?", a: "Yes, but it must be 'Helpful Content.' Google favors content that answers user intent thoroughly. We focus on depth, accuracy, and providing real value rather than just 'keyword stuffing'." },
      { q: "Can you fix a 'Google Penalty'?", a: "Yes. We conduct a 'Penalty Recovery' audit, identify the toxic links or violations, remove/disavow them, and file a reconsideration request to get your site back in good standing." },
      { q: "What is Schema Markup?", a: "It is code (JSON-LD) added to your site that helps search engines understand your business—like reviews, pricing, and FAQs—often resulting in 'Rich Snippets' that increase your click-through rate." },
      { q: "How do you build backlinks?", a: "We focus on 'White Hat' link building: creating high-quality content that other sites want to link to, guest blogging on industry-relevant sites, and professional PR outreach." },
      { q: "Does SEO affect my speed?", a: "Actually, it improves it. One of the core pillars of modern SEO is 'Core Web Vitals,' so we optimize your images, scripts, and server response times to ensure your site is blazing fast." },
      { q: "Do you offer Local SEO?", a: "Yes. For location-based businesses, we optimize your 'Google Business Profile,' manage local citations, and focus on location-specific keywords to dominate local search results." },
      { q: "How do you track performance?", a: "We use a combination of Search Console for crawl data and Google Analytics 4 for user behavior. You receive a monthly dashboard showing traffic, rankings, and conversions." },
      { q: "Is keyword stuffing effective?", a: "No. It is an outdated, spammy practice that can actually get your site penalized. We use semantic keyword placement that feels natural to the reader while remaining optimized for search engines." },
      { q: "Do we get reports?", a: "Yes. You get detailed, transparent reports that show real results: increase in organic traffic, keyword movement, and—most importantly—growth in leads and sales." }
    ]
  },
  "smm": {
    title: "Social Media Management",
    description: "Transform your social channels into powerful growth engines. We craft compelling content, manage community engagement, and execute data-driven campaigns that amplify your brand identity and connect you directly with your target audience.",
    image: smmImg,
    techStack: ["Meta Business Suite", "Hootsuite / Buffer", "Canva / Adobe Creative Cloud", "Google Analytics", "CapCut / Premiere Pro", "Social Listening Tools"],
    features: [
      "Strategic Content Calendar & Planning",
      "Multi-Platform Engagement & Growth",
      "Data-Driven Performance Reporting",
      "Brand Voice & Identity Consistency"
    ],
    process: [
      { step: "01", title: "Brand Audit & Strategy", desc: "Analyzing current social footprint, identifying target demographics, and defining the brand's unique voice and content pillars." },
      { step: "02", title: "Content Creation", desc: "Producing high-quality visuals, short-form videos (Reels/TikToks), and engaging copy that resonates with your audience." },
      { step: "03", title: "Community Management", desc: "Actively engaging with followers, responding to queries, and fostering a loyal community around your brand." },
      { step: "04", title: "Optimization & Insights", desc: "Monitoring key metrics, A/B testing post timings, and refining strategies based on real-time engagement data." }
    ],
    faqs: [
      { q: "Which platforms should my brand be on?", a: "It depends on where your audience hangs out. We analyze your industry to focus on the platforms—be it LinkedIn, Instagram, TikTok, or Facebook—that yield the highest ROI." },
      { q: "Can you create content for us?", a: "Yes. Our team handles everything from creative design and copywriting to video editing, ensuring your feed is professional, consistent, and visually appealing." },
      { q: "How do you measure success?", a: "We look beyond vanity metrics like likes. We track Engagement Rate, Click-Through Rate (CTR), Conversion Rate, and overall Lead Growth to ensure social media is actually driving business results." },
      { q: "Do you handle negative comments or PR crises?", a: "Yes. We have a crisis management protocol. We monitor mentions and respond to negative feedback professionally, protecting your brand reputation at all times." },
      { q: "How often should we post?", a: "Quality is better than quantity. We create a 'Smart Calendar' that balances frequency with value, ensuring you stay top-of-mind without fatiguing your audience." },
      { q: "Can you run paid ad campaigns too?", a: "Absolutely. We manage both organic growth and paid social advertising, optimizing budget spend to target your specific buyer personas." }
    ]
  },
  "paid-ads-management": {
    title: "Paid Ads Management",
    description: "Scale your revenue with high-precision paid advertising campaigns. We design data-backed ad funnels, perform rigorous A/B testing, and optimize bidding strategies to ensure every dollar spent maximizes your ROI and conversion goals.",
    image: paidAdsManagementImg,
    techStack: ["Google Ads Manager", "Meta Ads Manager", "LinkedIn Campaign Manager", "Google Analytics 4", "Hotjar / Clarity", "Looker Studio"],
    features: [
      "Precision Audience Targeting",
      "Conversion Rate Optimization (CRO)",
      "Multi-Channel Funnel Management",
      "Real-time ROI Tracking & Reporting"
    ],
    process: [
      { step: "01", title: "Targeting & Funnel Strategy", desc: "Analyzing buyer personas and mapping out the customer journey to capture high-intent users at every stage of the funnel." },
      { step: "02", title: "Creative & Copy Optimization", desc: "Developing high-converting ad visuals and persuasive ad copy tailored to specific audience segments." },
      { step: "03", title: "Bid Management & Scaling", desc: "Continuous monitoring of CPC/CPA, adjusting budget distribution across winning ads, and scaling campaigns that deliver the best ROI." },
      { step: "04", title: "Performance Audit", desc: "Deep-dive analysis of campaign health, landing page conversion rates, and monthly ROI reporting." }
    ],
    faqs: [
      { q: "How quickly can I see results?", a: "Paid ads are the fastest way to drive traffic. You can start seeing clicks and conversions within 24-48 hours after campaign launch." },
      { q: "What is your typical ROAS (Return on Ad Spend)?", a: "It varies by industry, but our goal is to consistently optimize your campaigns to achieve a ROAS that makes every ad dollar profitable." },
      { q: "Do I need a separate budget for ad spend?", a: "Yes. Our management fee is separate from the actual budget you pay to the platforms (Google/Meta/LinkedIn) to display your ads." },
      { q: "How do you manage the budget?", a: "We monitor performance daily. We shift budget away from underperforming ads and double down on the ones driving the most leads and sales." },
      { q: "Can you target my competitors' audience?", a: "Yes. On platforms like Google and Meta, we can use specific interest, intent, and keyword targeting to reach users searching for or interacting with your competitors." },
      { q: "What happens if my ads aren't converting?", a: "We pivot fast. We analyze the landing page experience, re-test the audience targeting, and iterate on the ad creative until we find the winning combination." }
    ]
  },
  "content-creation": {
    title: "Content Creation",
    description: "Build a brand that speaks, resonates, and converts. We craft high-impact content strategies, from technical blog posts and case studies to high-converting ad copy and storytelling scripts, all tailored to elevate your brand identity and authority.",
    image: contentCreationImg,
    techStack: ["Notion / Trello", "Grammarly / Hemingway", "Adobe Creative Suite", "Figma", "ChatGPT (Custom Prompts)", "WordPress / Webflow"],
    features: [
      "Technical Content & Thought Leadership",
      "Persuasive Sales & Ad Copywriting",
      "Video Storyboarding & Scripting",
      "Brand Voice & Editorial Strategy"
    ],
    process: [
      { step: "01", title: "Content Strategy & Persona Mapping", desc: "Defining your brand's voice and mapping the content journey to match your target audience's pain points and desires." },
      { step: "02", title: "Creative Ideation & Research", desc: "Conducting in-depth research to ensure content is accurate, insightful, and unique in a crowded market." },
      { step: "03", title: "Production & Refinement", desc: "Writing, designing, or scripting the content while maintaining strict quality control and editorial standards." },
      { step: "04", title: "Distribution Optimization", desc: "Tailoring the content for different channels—ensuring a blog post works for LinkedIn, a video for Reels, and an email for newsletters." }
    ],
    faqs: [
      { q: "What kind of content can you handle?", a: "We cover everything: website copy, technical blog posts, email newsletters, case studies, ad copy, video scripts, and social media captions." },
      { q: "Do you maintain our brand voice?", a: "Yes. We create a 'Brand Bible' during the onboarding phase, ensuring every piece of content—from a quick tweet to a long-form article—sounds exactly like you." },
      { q: "How do you handle technical or industry-specific content?", a: "We partner with your team to gather technical insights, then our experts translate that into clear, authoritative, and engaging content that your audience will value." },
      { q: "Can you help with repurposing old content?", a: "Absolutely. We love content recycling—turning a long blog post into an infographic, a series of LinkedIn posts, and a short video script to maximize your reach." },
      { q: "How do we get started with a content calendar?", a: "We begin with a strategic audit, identifying the core themes that drive your business, and then build a monthly calendar that ensures consistency and strategic alignment." },
      { q: "Do you offer SEO-optimized content?", a: "Yes. Every piece of copy is optimized for search engines while keeping human readability and conversion as the top priority." }
    ]
  }
};