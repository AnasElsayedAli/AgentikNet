export interface Translation {
  nav: {
    about: string;
    partners: string;
    contact: string;
    cta: string;
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
  };
  footer: {
    desc: string;
    links: string;
    contact: string;
    allRightsReserved: string;
  };
}

export const translations: Record<"en" | "ar", Translation> = {
  ar: {
    nav: {
      about: "من نحن",
      partners: "شركاؤنا ومشاريعنا",
      contact: "اتصل بنا",
      cta: "ابدأ مشروعك",
    },
    hero: {
      badge: "عصر التطبيقات الوكيلة • Agentic Systems",
      titleFirst: "نصمم ونطور تطبيقات المستقبل المدعومة",
      titleGradient: "بالذكاء الاصطناعي الذاتي",
      subtitle: "نحن هنا لمساعدتك على أتمتة عملياتك وبناء برمجيات ومواقع ويب ذكية، رشيقة ومخصصة بالكامل تزيد من كفاءة أعمالك وتوفر وقتك.",
      ctaBtn: "استشارة مجانية",
      exploreBtn: "تعرف علينا",
      stat1Number: "100%",
      stat1Label: "تكامل مخصص للذكاء الاصطناعي",
      stat2Number: "24/7",
      stat2Label: "أنظمة أتمتة تعمل ذاتياً",
    },
    about: {
      badge: "المؤسسون • فريق العمل",
      title: "العقول البرمجية خلف Agentic Net",
      desc: "نحن مهندسو برمجيات خريجو كلية الحاسبات والمعلومات، متخصصون في هندسة الأنظمة الخلفية وبناء وتدريب الأنظمة الوكيلة للذكاء الاصطناعي.",
      founderLabel: "مؤسس شريك",
      eduLabel: "التعليم",
      specLabel: "التخصص الدقيق",
      bioTitle: "رؤيتنا وهدفنا",
      bioText: "نؤمن بأن البرمجة التقليدية لم تعد كافية بمفردها؛ لذلك نقوم بدمج عملاء الذكاء الاصطناعي (AI Agents) لتتخذ القرارات الذاتية وتنجز المهام المعقدة نيابة عنك. نهدف لتقديم واجهات فائقة السرعة وبنية برمجية معقدة يتم تبسيطها لتمنحك أفضل تجربة مستخدم.",
    },
    partners: {
      badge: "المشاريع القائمة • شركاء النجاح",
      title: "مشاريع نطورها الآن بكل فخر",
      desc: "نعمل حالياً على تطوير البنية البرمجية والأنظمة الذكية لمؤسسات رائدة في قطاعات الصيانة والتجارة الدولية.",
      activeProject: "مشروع قيد التطوير النشط",
      statusLabel: "حالة النظام",
      statusValue: "بناء البنية الأساسية V1",
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
      title: "ثقة متنامية من أصحاب الأعمال والمتاجر المحلية",
      desc: "بعيداً عن شراكتنا مع الشركات الكبرى، قمنا بتمكين أصحاب الأعمال الصغيرة والتجار من إطلاق هوياتهم الرقمية وحلولهم المخصصة.",
      merchantsCount: "+5",
      merchantsLabel: "متاجر وأصحاب أعمال محلية",
      merchantsSub: "تجار ومشاريع عادية صممنا وطورنا لها مواقع متميزة وبوابات متكاملة",
      deliveryCount: "100%",
      deliveryLabel: "تسليم مباشر وجودة هندسية دقيقة",
      deliverySub: "كود برمجي نظيف ومدروس بالكامل دون استخدام قوالب عشوائية جاهزة",
      uptimeCount: "24/7",
      uptimeLabel: "أنظمة مستمرة وقابلة للتوسع",
      uptimeSub: "نهيئ السيرفرات السحابية ومواقع الويب لتعمل دون انقطاع وتتحمل تزايد الزيارات",
    },
    cta: {
      badge: "تواصل معنا اليوم",
      title: "دعنا نحول فكرتك إلى واقع ذكي",
      subtitle: "سواء كنت ترغب في تصميم موقع ويب مبتكر أو دمج نظام ذكاء اصطناعي يقوم بأتمتة مهامك التشغيلية، نحن جاهزون لمساعدتك.",
      formTitle: "طلب استشارة برمجية",
      formSubtitle: "تواصل مباشرة مع المهندسين المؤسسين لمناقشة أبعاد مشروعك الفنية والتشغيلية.",
      name: "الاسم الكريم",
      phone: "رقم الهاتف",
      email: "البريد الإلكتروني",
      message: "تفاصيل مشروعك أو فكرتك",
      service: "نوع الخدمة المطلوبة",
      servicePlaceholder: "اختر ما يناسبك...",
      serviceOption1: "تصميم موقع ويب متميز ومتجاوب",
      serviceOption2: "دمج أنظمة ذكاء اصطناعي وأتمتة (Agentic systems)",
      serviceOption3: "تطوير أنظمة خلفية وقواعد بيانات مخصصة",
      submit: "إرسال الطلب",
      cancel: "إلغاء",
      success: "تم استلام طلبك بنجاح! سيتواصل معك م. أنس أو م. مدثر خلال أقل من 12 ساعة لمناقشة التفاصيل.",
      close: "إغلاق",
      officeHoursLabel: "أوقات العمل واستقبال الاستشارات",
      officeHoursValue: "يومياً من 9:00 صباحاً وحتى 11:00 مساءً",
    },
    footer: {
      desc: "نصمم ونطور مواقع وتطبيقات المستقبل فائقة الأداء المدعومة بأنظمة الذكاء الاصطناعي والعملاء الذاتيين.",
      links: "روابط سريعة",
      contact: "تواصل مباشر مع المؤسسين",
      allRightsReserved: "جميع الحقوق محفوظة. تم التطوير والابتكار بواسطة Agentic Net.",
    },
  },
  en: {
    nav: {
      about: "About Us",
      partners: "Partners & Projects",
      contact: "Contact",
      cta: "Get Started",
    },
    hero: {
      badge: "The Era of Agentic Systems",
      titleFirst: "We Design and Build High-Performance",
      titleGradient: "AI-Powered Web Apps",
      subtitle: "We create pristine responsive web experiences and custom, goal-oriented AI agent integrations that automate workflows and elevate business performance.",
      ctaBtn: "Free Consultation",
      exploreBtn: "Who We Are",
      stat1Number: "100%",
      stat1Label: "Custom AI Architectures",
      stat2Number: "24/7",
      stat2Label: "Autonomous Processes Run",
    },
    about: {
      badge: "Founders • The Team",
      title: "The Minds Behind Agentic Net",
      desc: "We are professional software engineers, graduates of Computer Science, specialized in robust Backend Engineering and training autonomous AI Agentic systems.",
      founderLabel: "Co-Founder",
      eduLabel: "Education",
      specLabel: "Core Focus",
      bioTitle: "Our Shared Vision",
      bioText: "We believe code should be both beautiful and intelligent. By blending modern web experiences with server-side LLMs, we free businesses from repetitive overhead, building architectures that scale elegantly.",
    },
    partners: {
      badge: "Active Projects • Co-creations",
      title: "Solutions We Are Actively Building",
      desc: "We are currently designing and developing secure architectures for leading companies across industrial maintenance and trading sectors.",
      activeProject: "Project Under Active Development",
      statusLabel: "System Status",
      statusValue: "Building Core Infrastructure V1",
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
      badge: "Client Growth • Metrics",
      title: "Trusted by Local Merchants & Small Businesses",
      desc: "In addition to our large corporate partnerships, we pride ourselves on building premium websites and tools for independent local merchants.",
      merchantsCount: "5+",
      merchantsLabel: "Merchants & Local Businesses",
      merchantsSub: "Independent store owners and merchants who launched their custom, tailored digital web presence with us.",
      deliveryCount: "100%",
      deliveryLabel: "Direct Production Delivery",
      deliverySub: "Hand-crafted, highly secure codebase strictly tailored to business needs with zero boilerplate bloat.",
      uptimeCount: "24/7",
      uptimeLabel: "Continuous Server Reliability",
      uptimeSub: "Engineered with modern cloud setups to handle traffic growth and maintain high responsiveness around the clock.",
    },
    cta: {
      badge: "Connect with us today",
      title: "Let's translate your idea into intelligent systems",
      subtitle: "Whether you need a sleek high-contrast web app, database orchestration, or custom AI pipeline integrations, we are ready to build it.",
      formTitle: "Request Engineering Consultation",
      formSubtitle: "Discuss technical constraints directly with the founding engineers to map out your implementation.",
      name: "Your Name",
      phone: "Phone Number",
      email: "Email Address",
      message: "Describe your project or vision",
      service: "Primary System Needed",
      servicePlaceholder: "Select primary system...",
      serviceOption1: "Sleek, Responsive Web Application",
      serviceOption2: "Custom AI Agents & Workflow Automation",
      serviceOption3: "Backend Systems & Database Integration",
      submit: "Submit Request",
      cancel: "Cancel",
      success: "Your request has been successfully submitted! Eng. Anas or Eng. Modather will reach out to you within 12 hours.",
      close: "Close",
      officeHoursLabel: "Engineering Operations & Inquiry Hours",
      officeHoursValue: "Daily from 9:00 AM to 11:00 PM (UTC+2)",
    },
    footer: {
      desc: "We design and engineer bespoke web architectures and secure, goal-driven AI integrations for ambitious enterprises.",
      links: "Navigation",
      contact: "Direct Founders Hotline",
      allRightsReserved: "All rights reserved. Engineered and innovated by Agentic Net.",
    },
  },
};
