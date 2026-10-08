export interface Translation {
  nav: {
    about: string;
    services: string;
    partners: string;
    contact: string;
    cta: string;
    webDev?: string;
    aiAgents?: string;
  };
  hero: {
    badge: string;
    titleFirst: string;
    titleGradient: string;
    subtitle: string;
    ctaBtn: string;
    exploreBtn: string;
    stat1Number: string;
    stat1Label: string;
    stat2Number: string;
    stat2Label: string;
    stat3Number?: string;
    stat3Label?: string;
  };
  about: {
    badge: string;
    title: string;
    desc: string;
    founderLabel: string;
    eduLabel: string;
    specLabel: string;
    bioTitle: string;
    bioText: string;
  };
  partners: {
    badge: string;
    title: string;
    desc: string;
    activeProject: string;
    statusLabel: string;
    statusValue: string;
  };
  services: {
    badge: string;
    title: string;
    desc: string;
    rapidTitle: string;
    rapidDesc: string;
    fullstackTitle: string;
    fullstackDesc: string;
    consultingTitle: string;
    consultingDesc: string;
  };
  webDevSection: {
    badge: string;
    title: string;
    desc: string;
    cards: Array<{
      title: string;
      desc: string;
      tags: string[];
    }>;
  };
  aiSection: {
    badge: string;
    title: string;
    desc: string;
    capabilities: Array<{
      title: string;
      desc: string;
      deliverables: string[];
    }>;
  };
  stats: {
    badge: string;
    title: string;
    desc: string;
    merchantsCount: string;
    merchantsLabel: string;
    merchantsSub: string;
    deliveryCount: string;
    deliveryLabel: string;
    deliverySub: string;
    uptimeCount: string;
    uptimeLabel: string;
    uptimeSub: string;
  };
  cta: {
    badge: string;
    title: string;
    subtitle: string;
    formTitle: string;
    formSubtitle: string;
    name: string;
    phone: string;
    email: string;
    message: string;
    service: string;
    servicePlaceholder: string;
    serviceOption1: string;
    serviceOption2: string;
    serviceOption3: string;
    submit: string;
    cancel: string;
    success: string;
    close: string;
    officeHoursLabel: string;
    officeHoursValue: string;
    whatsappCta: string;
  };
  footer: {
    desc: string;
    links: string;
    contact: string;
    allRightsReserved: string;
    phoneLabel: string;
  };
}

export const translations: Record<"en" | "ar", Translation> = {
  ar: {
    nav: {
      about: "فريق العمل والمؤسسون",
      services: "مجالات العمل",
      partners: "أعمالنا المنجزة",
      contact: "تواصل معنا",
      cta: "ابدأ مشروعك",
      webDev: "تطوير البرمجيات والويب",
      aiAgents: "الأنظمة والوكلاء الأذكياء",
    },
    hero: {
      badge: "استوديو هندسة برمجيات وذكاء اصطناعي",
      titleFirst: "نبني برمجيات فائقة الأداء وأنظمة",
      titleGradient: "ذكاء اصطناعي ذاتية للشركات",
      subtitle: "نطور مواقع وتطبيقات ويب متكاملة مصممة خصيصاً لأعمالك، وندمج وكلاء ذكاء اصطناعي (Agentic AI) لأتمتة المهام المعقدة، ورفع الكفاءة التشغيلية، ومضاعفة نمو أعمالك.",
      ctaBtn: "ابدأ مشروعك عبر واتساب",
      exploreBtn: "استكشف خدماتنا الهندسية",
      stat1Number: "100%",
      stat1Label: "كود برمجي مخصص وخالٍ من القوالب",
      stat2Number: "24/7",
      stat2Label: "جاهزية تشغيل الأنظمة والأتمتة",
      stat3Number: "5+",
      stat3Label: "منصات ومشاريع رقمية مكتملة",
    },
    webDevSection: {
      badge: "تطوير الويب والبرمجيات المتكاملة",
      title: "برمجيات إنتاجية متماسكة، وليست مجرد صفحات هبوط",
      desc: "نمتلك القدرة الهندسية لبناء أنظمة تقنية متكاملة ومستقرة، من واجهات المستخدم فائقة السرعة وحتى الخوادم وقواعد البيانات المحمية.",
      cards: [
        {
          title: "منصات التجارة الإلكترونية المخصصة",
          desc: "متاجر رقمية سريعة للغاية مع سلال تسوق تفاعلية، وتكامل بوابات دفع إلكترونية مؤمنة، وإدارة دقيقة للمخزون والطلبات.",
          tags: ["Dynamic Cart", "Payment Gateways", "Edge Caching", "Responsive Flows"],
        },
        {
          title: "تطبيقات الويب وبوابات الأعمال (B2B / SaaS)",
          desc: "منظومات أعمال رقمية متقدمة لإدارة العمليات التشغيلية، بوابات الموردين، وإدارة علاقات العملاء مع تحكم كامل بالصلاحيات.",
          tags: ["Enterprise Portals", "Role-Based Access", "TypeScript", "Real-Time State"],
        },
        {
          title: "الأنظمة الخلفية وقواعد البيانات (Back-End)",
          desc: "بناء خوادم مستقرة وواجهات برمجة تطبيقات (REST APIs) سريعة، وهندسة قواعد بيانات علائقية متطورة (PostgreSQL) مصممة للتوسع.",
          tags: ["PostgreSQL", "Scalable APIs", "Data Integrity", "End-to-End Encryption"],
        },
        {
          title: "لوحات التحكم والربط مع الخدمات الخارجية",
          desc: "لوحات إدارة شاملة للبيانات والتحليلات الحية، وربط سلس مع مختلف خدمات الطرف الثالث، أنظمة الشحن، والإشعارات التلقائية.",
          tags: ["Admin Dashboards", "Webhooks", "ERP Integrations", "Analytics"],
        },
      ],
    },
    aiSection: {
      badge: "هندسة الأنظمة الوكيلة • Agentic AI",
      title: "وكلاء ذكاء اصطناعي يعملون ذاتياً وينجزون المهام الفعلية",
      desc: "نتجاوز مجرد نماذج المحادثة السطحية؛ نبني وكلاء أذكياء يتخذون القرارات، ويتفاعلون مع قواعد بياناتك وأنظمتك التشغيلية لتنفيذ مهام حقيقية بكفاءة متناهية.",
      capabilities: [
        {
          title: "وكلاء ذكاء اصطناعي ذاتيون (AI Agents)",
          desc: "أنظمة برمجية تفهم السياق، وتتخذ القرارات الذاتية، وتنفذ إجراءات حقيقية مثل الرد على العملاء وتوجيه الطلبات عبر واتساب والويب.",
          deliverables: ["اتخاذ قرارات ذاتي", "تكامل واتساب المباشر", "معالجة الطلبات والاستفسارات"],
        },
        {
          title: "أتمتة الأعمال وسلاسل الإجراءات (Agentic Workflows)",
          desc: "ربط سير العمليات المتعددة تلقائياً؛ عند وقوع حدث ما، يقوم الوكيل بالتحقق من البيانات، وتحديث النظام، وإرسال التقارير دون تدخل بشري.",
          deliverables: ["أتمتة العمليات المتكررة", "تقليل الأخطاء البشرية", "مزامنة لحظية بين الأنظمة"],
        },
        {
          title: "أنظمة استرجاع المعرفة وتأريض البيانات (RAG)",
          desc: "ربط نماذج الذكاء الاصطناعي بكتالوجاتك، ومستنداتك الداخلية، وسياسات شركتك لتقديم إجابات دقيقة وموثوقة خالية من الهلوسة.",
          deliverables: ["فهارس متجهات دقيقة", "تأريض ببيانات الشركة", "إجابات دقيقة 100%"],
        },
        {
          title: "أدوات داخلية ومساعدون تشغيليون مخصصون",
          desc: "تطوير أدوات ذكاء اصطناعي مخصصة لفريق عملك لاستخراج البيانات من المستندات والفواتير، وتحليل التقارير وصياغة المراسلات فورياً.",
          deliverables: ["استخراج بيانات الفواتير", "تلخيص العقود والتقارير", "توفير ساعات العمل اليومية"],
        },
      ],
    },
    about: {
      badge: "المؤسسون • فريق العمل",
      title: "العقول البرمجية خلف Agentic Net",
      desc: "نحن مهندسو برمجيات خريجو كلية الحاسبات والمعلومات، متخصصون في هندسة الأنظمة الخلفية وبناء وتدريب الأنظمة الوكيلة للذكاء الاصطناعي.",
      founderLabel: "مؤسس شريك",
      eduLabel: "التعليم الأكاديمي",
      specLabel: "التخصص التقني الدقيق",
      bioTitle: "فلسفتنا في العمل الهندسي",
      bioText: "نؤمن بأن البرمجيات الممتازة تجمع بين جمال الواجهات وسرعتها الفائقة من جهة، والعمق البرمجي الموثوق من جهة أخرى. من خلال دمج وكلاء الذكاء الاصطناعي في صميم الأنظمة، نمنح الشركات ميزة تنافسية استثنائية ونحرر فرق العمل من أعباء المهام اليدوية المتكررة.",
    },
    partners: {
      badge: "أعمالنا المنجزة • Portfolio",
      title: "مشاريع تم الانتهاء منها وتدشينها",
      desc: "نماذج حقيقية لمواقع ومنصات رقمية متكاملة تم تطويرها وإطلاقها بنجاح بأعلى معايير التصميم والأداء البرمجي.",
      activeProject: "مشروع مكتمل ومنشور",
      statusLabel: "حالة المشروع",
      statusValue: "تم الإطلاق والتسليم بنجاح",
    },
    services: {
      badge: "خدماتنا وخبراتنا • Our Services",
      title: "نبني حلولاً برمجية متطورة تلبي طموحاتك",
      desc: "نعتمد على أفضل الممارسات الهندسية لنضمن لك جودة كود استثنائية وأداءً فائق السرعة ينافس الأنظمة العالمية.",
      rapidTitle: "دورات تطوير برمجية فائقة السرعة",
      rapidDesc: "نعتمد على منهجيات العمل الرشيقة (Agile) ودورات التطوير المتسارعة لنقوم بتسليم الميزات البرمجية الجديدة بانتظام وسرعة متناهية.",
      fullstackTitle: "فريق تطوير متكامل (Full-Stack)",
      fullstackDesc: "نتولى كافة تفاصيل تطوير واجهات المستخدم الأنيقة (Front-End) وبناء الخوادم وقواعد البيانات المؤمنة فائقة الاستجابة (Back-End).",
      consultingTitle: "استشارات تقنية ومعلوماتية",
      consultingDesc: "نساعدك في تخطيط بنية مشروعك التقنية واختيار الأدوات وتصميم قواعد البيانات لضمان كفاءة تشغيلية مستدامة.",
    },
    stats: {
      badge: "الأثر والانتشار • Our Impact",
      title: "نتائج ملموسة وجودة برمجية موثوقة",
      desc: "نلتزم بتقديم برمجيات عالية الاعتمادية تمنح عملاءنا راحة البال وميزة تنافسية حقيقية.",
      merchantsCount: "5+",
      merchantsLabel: "مشاريع ومتاجر تم إطلاقها بنجاح",
      merchantsSub: "منصات ومواقع مخصصة تم بناؤها من الصفر وتسليمها بالكامل للعملاء",
      deliveryCount: "100%",
      deliveryLabel: "تسليم مباشر وجودة هندسية دقيقة",
      deliverySub: "كود برمجي نظيف ومدروس بالكامل دون استخدام قوالب عشوائية جاهزة",
      uptimeCount: "24/7",
      uptimeLabel: "أنظمة مستمرة وقابلة للتوسع",
      uptimeSub: "نهيئ السيرفرات السحابية ومواقع الويب لتعمل دون انقطاع وتتحمل تزايد الزيارات",
    },
    cta: {
      badge: "تواصل مباشر مع المؤسسين",
      title: "جاهزون لبناء مشروعك البرمجي القادم",
      subtitle: "تحدث مباشرة مع المهندسين المؤسسين لمناقشة أبعاد مشروعك الفنية والتشغيلية، أو اطلب استشارة برمجية مجانية.",
      formTitle: "طلب استشارة ومناقشة مشروع",
      formSubtitle: "املأ النموذج وسنتواصل معك خلال ساعات عبر الهاتف أو واتساب.",
      name: "الاسم الكريم",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني",
      message: "تفاصيل مشروعك أو فكرتك",
      service: "نوع الخدمة المطلوبة",
      servicePlaceholder: "اختر نوع النظام البرمجي...",
      serviceOption1: "تطوير موقع ويب أو منصة إلكترونية",
      serviceOption2: "دمج أنظمة ذكاء اصطناعي وأتمتة (Agentic AI)",
      serviceOption3: "تطوير أنظمة خلفية وقواعد بيانات مخصصة",
      submit: "إرسال طلب الاستشارة",
      cancel: "إلغاء",
      success: "تم استلام طلبك بنجاح! سيتواصل معك المهندسون المؤسسون لمناقشة التفاصيل خلال ساعات.",
      close: "إغلاق",
      officeHoursLabel: "أوقات العمل واستقبال الاستشارات",
      officeHoursValue: "يومياً من 9:00 صباحاً وحتى 11:00 مساءً",
      whatsappCta: "تواصل معنا مباشرة عبر واتساب: 01028801508",
    },
    footer: {
      desc: "استوديو هندسي متخصص في بناء برمجيات الويب المتطورة وتكاملات الذكاء الاصطناعي الذاتي للشركات الطموحة.",
      links: "أقسام الموقع",
      contact: "التواصل الرسمي",
      allRightsReserved: "جميع الحقوق محفوظة. تم التطوير والهندسة بواسطة Agentik Net.",
      phoneLabel: "الرقم الرسمي وواتساب",
    },
  },
  en: {
    nav: {
      about: "Leadership & Team",
      services: "Capabilities",
      partners: "Selected Work",
      contact: "Contact",
      cta: "Start a Project",
      webDev: "Software & Web Engineering",
      aiAgents: "Agentic AI Systems",
    },
    hero: {
      badge: "Software Engineering & AI Studio",
      titleFirst: "We Build High-Performance Software &",
      titleGradient: "Autonomous AI Systems for Enterprises",
      subtitle: "We engineer bespoke, production-grade web applications and deploy autonomous AI agents that streamline operations, eliminate repetitive overhead, and scale business growth.",
      ctaBtn: "Start a Project on WhatsApp",
      exploreBtn: "Explore Capabilities",
      stat1Number: "100%",
      stat1Label: "Custom Engineering, Zero Bloat",
      stat2Number: "24/7",
      stat2Label: "Autonomous Execution & Uptime",
      stat3Number: "5+",
      stat3Label: "Production Platforms Delivered",
    },
    webDevSection: {
      badge: "Full-Stack Software & Web Engineering",
      title: "Resilient production systems, not just landing pages",
      desc: "From sub-50ms user interfaces to hardened relational databases and secure cloud infrastructure, we build complete software systems designed to scale.",
      cards: [
        {
          title: "Bespoke E-Commerce Platforms",
          desc: "High-performance digital commerce engines with dynamic carts, secure payment gateways, inventory synchronization, and fluid mobile checkouts.",
          tags: ["Dynamic Cart", "Payment Gateways", "Edge Caching", "Responsive Flows"],
        },
        {
          title: "Custom Web Applications & B2B Portals",
          desc: "Enterprise client portals, supplier coordination systems, and internal SaaS tools built with strict type safety and role-based permissions.",
          tags: ["Enterprise Portals", "Role-Based Access", "TypeScript", "Real-Time State"],
        },
        {
          title: "Backend Systems & Database Architecture",
          desc: "Robust REST APIs, microservices, and normalized PostgreSQL database models engineered for high concurrency and zero data loss.",
          tags: ["PostgreSQL", "Scalable APIs", "Data Integrity", "End-to-End Encryption"],
        },
        {
          title: "Admin Dashboards & 3rd-Party Integrations",
          desc: "Unified operational control rooms, live telemetry, automated invoice processing, and webhooks connecting your core software to external services.",
          tags: ["Admin Dashboards", "Webhooks", "ERP Integrations", "Analytics"],
        },
      ],
    },
    aiSection: {
      badge: "Agentic Systems & AI Architecture",
      title: "Autonomous AI agents that execute real business operations",
      desc: "We move beyond superficial chatbots. We engineer autonomous agents that perceive context, query databases, make decisions, and execute multi-step workflows.",
      capabilities: [
        {
          title: "Autonomous AI Agents",
          desc: "Goal-oriented software agents that understand nuance, autonomously qualify leads, and handle customer conversations over WhatsApp and web.",
          deliverables: ["Autonomous Decision-Making", "Direct WhatsApp Integration", "Inbound Request Qualification"],
        },
        {
          title: "Agentic Workflows & Business Automation",
          desc: "Multi-step automated pipelines. When a trigger event occurs, agents validate data, query inventories, and dispatch actions with zero human delay.",
          deliverables: ["Zero-Latency Process Chains", "Error-Free Reconciliations", "Cross-Platform Syncing"],
        },
        {
          title: "Retrieval-Augmented Generation (RAG)",
          desc: "Grounding large language models directly into your company catalogs, internal manuals, and private databases for hallucination-free answers.",
          deliverables: ["Deterministic Vector Indexes", "Proprietary Data Grounding", "100% Verifiable Citations"],
        },
        {
          title: "Custom AI Internal Copilots & Extraction Tools",
          desc: "Intelligent internal tools for your operations team: automated data extraction from unstructured invoices, contract summaries, and smart drafting.",
          deliverables: ["Automated Document Parsing", "Data Reconciliations", "Hours Saved Weekly"],
        },
      ],
    },
    about: {
      badge: "Founders • The Team",
      title: "The Engineering Minds Behind Agentic Net",
      desc: "Professional software engineers, graduates of Computer Science, specialized in resilient backend architecture and autonomous agentic AI systems.",
      founderLabel: "Co-Founder",
      eduLabel: "Academic Background",
      specLabel: "Core Engineering Specialization",
      bioTitle: "Our Engineering Creed",
      bioText: "We believe exceptional software balances visual precision with backend resilience. By embedding autonomous AI agents directly into production architectures, we grant ambitious businesses an unfair operational advantage while removing mundane human busywork.",
    },
    partners: {
      badge: "Selected Work • Portfolio",
      title: "Completed Projects & Production Platforms",
      desc: "Real production applications and bespoke digital platforms engineered with high standards of performance, responsive design, and security.",
      activeProject: "Completed & Live Project",
      statusLabel: "Project Status",
      statusValue: "Delivered & Live in Production",
    },
    services: {
      badge: "Core Expertise • Services",
      title: "We Engineer Custom High-Performance Solutions",
      desc: "Following strict architectural standards to deliver robust backend capabilities, sleek interfaces, and highly performant codebases.",
      rapidTitle: "Rapid Development Cycles",
      rapidDesc: "We implement modern Agile engineering flows with fast deployment pipelines to launch and iterate on software continuously.",
      fullstackTitle: "Full-Stack Development Team",
      fullstackDesc: "We handle the complete development cycle from breathtaking, highly responsive user interfaces to secure backend databases.",
      consultingTitle: "IT & Technical Consulting",
      consultingDesc: "Providing architectural design, database design patterns, and scaling strategies to help businesses navigate modern tech landscapes.",
    },
    stats: {
      badge: "Proven Reliability • Metrics",
      title: "Measurable Impact & Production Engineering",
      desc: "We take immense pride in crafting resilient, scalable software systems that empower local and regional enterprises.",
      merchantsCount: "5+",
      merchantsLabel: "Production Platforms Delivered",
      merchantsSub: "Custom bespoke platforms engineered from scratch and deployed to production",
      deliveryCount: "100%",
      deliveryLabel: "Direct Production Delivery",
      deliverySub: "Hand-crafted, highly secure codebase strictly tailored to business needs with zero boilerplate bloat.",
      uptimeCount: "24/7",
      uptimeLabel: "Continuous System Reliability",
      uptimeSub: "Engineered with modern cloud setups to handle traffic growth and maintain high responsiveness around the clock.",
    },
    cta: {
      badge: "Direct Founders Hotline",
      title: "Let's Engineer Your Next Digital Platform",
      subtitle: "Speak directly with our founding engineers to map out technical architecture, or request an initial consultation on WhatsApp.",
      formTitle: "Request Technical Consultation",
      formSubtitle: "Fill out the project details and our lead architects will contact you within hours.",
      name: "Your Name or Organization",
      phone: "Phone Number",
      email: "Email Address",
      message: "Project Requirements or Architecture Goals",
      service: "Primary System Needed",
      servicePlaceholder: "Select primary architecture...",
      serviceOption1: "Bespoke Web Platform or E-Commerce",
      serviceOption2: "Autonomous AI Agents & Agentic Workflows",
      serviceOption3: "Backend Infrastructure & Database Design",
      submit: "Submit Consultation Request",
      cancel: "Cancel",
      success: "Your request has been received! Our founding engineers will follow up with you within hours.",
      close: "Close",
      officeHoursLabel: "Engineering Operations & Inquiry Hours",
      officeHoursValue: "Daily from 9:00 AM to 11:00 PM (UTC+2)",
      whatsappCta: "Contact Us Directly on WhatsApp: 01028801508",
    },
    footer: {
      desc: "Engineering studio specializing in modern software platforms, bespoke web applications, and autonomous AI systems for forward-thinking enterprises.",
      links: "Site Navigation",
      contact: "Official Contact",
      allRightsReserved: "All rights reserved. Engineered and innovated by Agentic Net.",
      phoneLabel: "Official Hotline & WhatsApp",
    },
  },
};

