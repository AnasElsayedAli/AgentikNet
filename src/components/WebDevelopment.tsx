import { Globe, ShoppingCart, Server, LayoutDashboard, ArrowUpRight, MessageCircle } from "lucide-react";
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
        ? "متاجر إلكترونية سهلة الاستخدام مع دفع آمن وإدارة للمخزون."
        : "Online stores with smooth checkout, secure payments, and inventory management.",
      features: lang === "ar"
        ? ["سلة وطلب مبسطان", "دفع آمن", "مخزون محدث"]
        : ["Simple cart and checkout", "Secure payments", "Live inventory"],
    },
    {
      id: "portals",
      icon: <Globe className="w-5 h-5 text-sky-400" />,
      title: lang === "ar" ? "تطبيقات الويب وبوابات الأعمال (B2B / SaaS)" : "Custom Web Applications & B2B Portals",
      desc: lang === "ar"
        ? "بوابات رقمية للعملاء والموردين والفرق الداخلية بصلاحيات واضحة."
        : "Digital portals for clients, suppliers, and internal teams with role-based access.",
      features: lang === "ar"
        ? ["بوابات عملاء وموردين", "صلاحيات حسب الدور", "تحديثات لحظية"]
        : ["Client and supplier portals", "Role-based access", "Real-time updates"],
    },
    {
      id: "backend",
      icon: <Server className="w-5 h-5 text-sky-400" />,
      title: lang === "ar" ? "الأنظمة الخلفية وقواعد البيانات (PostgreSQL)" : "Backend Infrastructure & Database Architecture",
      desc: lang === "ar"
        ? "واجهات API وقواعد بيانات آمنة مصممة لمعاملات موثوقة."
        : "Secure APIs and databases built for reliable, scalable transactions.",
      features: lang === "ar"
        ? ["قواعد بيانات PostgreSQL", "واجهات REST API", "حماية واستمرارية"]
        : ["PostgreSQL databases", "REST APIs", "Security and reliability"],
    },
    {
      id: "dashboards",
      icon: <LayoutDashboard className="w-5 h-5 text-sky-400" />,
      title: lang === "ar" ? "لوحات التحكم والربط مع الخدمات الخارجية" : "Admin Dashboards & 3rd-Party Integrations",
      desc: lang === "ar"
        ? "لوحات وتقارير تربط أنظمتك بخدمات الشحن والدفع وغيرها."
        : "Dashboards and integrations connecting your tools, services, and operations.",
      features: lang === "ar"
        ? ["لوحات متابعة مباشرة", "تكاملات Webhooks وERP", "تقارير وإشعارات آلية"]
        : ["Live dashboards", "Webhook and ERP integrations", "Automated reports and alerts"],
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
              className="rounded-xl border border-white/[0.08] bg-slate-900/40 p-5 sm:p-6 flex flex-col hover:border-sky-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-white leading-snug">{item.title}</h3>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-2">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.features.map((feat, fIdx) => (
                    <span key={fIdx} className="rounded-full border border-sky-400/15 bg-sky-400/[0.06] px-3 py-1 text-xs text-slate-300">{feat}</span>
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
