import { Globe, ShoppingCart, Server, LayoutDashboard, Shield, Zap, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { translations } from "../translations";

interface WebDevelopmentProps {
  lang: "en" | "ar";
  onOpenConsultation?: () => void;
}

export function WebDevelopment({ lang }: WebDevelopmentProps) {
  const t = translations[lang];

  const CAPABILITY_AREAS = [
    {
      id: "ecommerce",
      icon: <ShoppingCart className="w-5 h-5 text-sky-400" />,
      title: lang === "ar" ? "منصات التجارة الإلكترونية المخصصة" : "Bespoke E-Commerce Platforms",
      desc: lang === "ar"
        ? "نبني متاجر إلكترونية رقمية سريعة الاستجابة، تتضمن سلال تسوق ديناميكية، تجربة تصفح فورية، وتكامل بوابات دفع إلكترونية مؤمنة مع إدارة دقيقة للمخزون والطلبات."
        : "Engineered for high conversion: custom shopping carts, seamless checkout flows, secure payment gateway integrations, and real-time inventory management.",
      features: lang === "ar"
        ? ["سلال تسوق ديناميكية وتجربة فورية", "بوابات دفع إلكترونية مؤمنة ومعتمدة", "إدارة متطورة للمخزون والكتالوجات", "تصميم متجاوب 100% مع الجوال"]
        : ["Dynamic client-side cart states", "PCI-compliant payment gateways", "Real-time stock & catalog sync", "Fluid mobile-first checkout flows"],
      tags: ["E-Commerce", "Payments", "Dynamic Cart", "Mobile-First"],
    },
    {
      id: "portals",
      icon: <Globe className="w-5 h-5 text-sky-400" />,
      title: lang === "ar" ? "تطبيقات الويب وبوابات الأعمال (B2B / SaaS)" : "Custom Web Applications & B2B Portals",
      desc: lang === "ar"
        ? "بناء بوابات أعمال مؤسسية متقدمة لرقمنة العمليات التشغيلية، بوابات الموردين، وإدارة العملاء مع أنظمة صلاحيات دقيقة ومستويات أمان مشددة."
        : "Enterprise-grade digital portals digitizing supplier logistics, B2B procurement pipelines, and customer management with granular access control.",
      features: lang === "ar"
        ? ["بوابات عملاء وموردين مخصصة", "صلاحيات مستخدمين متعددة المستويات (RBAC)", "تحديث فوري لحالة المعاملات", "واجهات فائقة السرعة بـ TypeScript"]
        : ["Bespoke client & partner portals", "Role-based access matrix (RBAC)", "Real-time state synchronization", "Type-safe robust frontends"],
      tags: ["Enterprise Portals", "RBAC", "TypeScript", "Real-Time"],
    },
    {
      id: "backend",
      icon: <Server className="w-5 h-5 text-sky-400" />,
      title: lang === "ar" ? "الأنظمة الخلفية وقواعد البيانات (PostgreSQL)" : "Backend Infrastructure & Database Architecture",
      desc: lang === "ar"
        ? "خوادم مستقرة وواجهات برمجة تطبيقات (REST APIs) سريعة، وهندسة قواعد بيانات علائقية متطورة (PostgreSQL) مصممة لتحمل ضغط آلاف المعاملات المتزامنة."
        : "High-throughput APIs, normalized relational databases, and microservices engineered to handle concurrent transactions without latency or data loss.",
      features: lang === "ar"
        ? ["قواعد بيانات علائقية موثوقة (PostgreSQL)", "واجهات برمجة سريعة الاستجابة (REST APIs)", "تشفير شامل للبيانات الحساسة", "معمارية سحابية تضمن استمرارية العمل"]
        : ["ACID-compliant PostgreSQL schemas", "Low-latency RESTful endpoints", "End-to-end data encryption", "Resilient cloud failover pipelines"],
      tags: ["PostgreSQL", "Scalable APIs", "Data Integrity", "Security"],
    },
    {
      id: "dashboards",
      icon: <LayoutDashboard className="w-5 h-5 text-sky-400" />,
      title: lang === "ar" ? "لوحات التحكم والربط مع الخدمات الخارجية" : "Admin Dashboards & 3rd-Party Integrations",
      desc: lang === "ar"
        ? "لوحات إدارة شاملة للبيانات والتحليلات الحية، وربط سلس عبر Webhooks وAPIs مع مختلف خدمات الطرف الثالث، أنظمة الشحن، والإشعارات التلقائية."
        : "Comprehensive mission-control dashboards, real-time business telemetry, automated invoice processing, and webhooks connecting directly to ERP systems.",
      features: lang === "ar"
        ? ["لوحات تحكم تفاعلية متكاملة", "ربط بوابات الشحن والرسائل القصيرة", "تصدير ومعالجة التقارير الحية", "أتمتة الفواتير والإشعارات"]
        : ["Live operational analytics", "Shipping & SMS webhook integration", "Automated invoice parsing", "Multi-platform data syncing"],
      tags: ["Dashboards", "Webhooks", "ERP Integrations", "Analytics"],
    },
  ];

  const whatsappUrl = "https://wa.me/201028801508";

  return (
    <section id="software-engineering" className="py-14 sm:py-20 border-b border-white/[0.08] text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-8 mb-8 sm:mb-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              {t.webDevSection.title}
            </h2>
            <p className="text-slate-300 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
              {t.webDevSection.desc}
            </p>
          </div>

          <div className="w-full sm:w-auto shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold text-xs transition-colors shadow-sm shadow-sky-400/20 whitespace-nowrap w-full sm:w-auto min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 text-slate-950" />
              <span>{lang === "ar" ? "ناقش مشروعك البرمجي" : "Discuss a Software Project"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
            </a>
          </div>
        </div>

        {/* 4-Card Production Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
          {CAPABILITY_AREAS.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-white/[0.08] bg-slate-900/40 p-5 sm:p-6 lg:p-7 flex flex-col justify-between hover:border-sky-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 flex items-center gap-1.5">
                    {item.tags.slice(0, 2).map((tg, i) => (
                      <span key={i}>
                        {tg} {i === 0 && <span className="text-slate-700">·</span>}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-white tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {item.desc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WebDevelopment;
