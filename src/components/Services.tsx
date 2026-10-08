import { Globe, Bot, Server, ArrowUpRight, Check } from "lucide-react";
import { translations } from "../translations";

interface ServicesProps {
  lang: "en" | "ar";
  onSelectService?: (serviceType: string) => void;
}

export function Services({ lang, onSelectService }: ServicesProps) {
  const t = translations[lang];

  const services = [
    {
      id: "web",
      icon: <Globe className="w-6 h-6 text-sky-400" />,
      title: lang === "ar" ? "تطبيقات ومواقع الويب المتطورة" : "High-Performance Web Applications",
      desc:
        lang === "ar"
          ? "نصمم ونبني واجهات مستخدم مخصصة بالكامل باستخدام أحدث تقنيات React وTypeScript، فائقة السرعة، متجاوبة ومصممة لتحويل الزوار إلى عملاء."
          : "We engineer bespoke, lightning-fast web applications and customer portals built on React and modern frameworks, crafted to convert visitors into loyal clients.",
      points:
        lang === "ar"
          ? [
              "واجهات مستخدم سريعة الاستجابة وأنيقة تماماً",
              "توافق شامل مع جميع أحجام الشاشات والجوال",
              "تحسين سرعة التحميل ومحركات البحث (SEO)",
              "ربط بوابات الدفع الإلكتروني والخدمات الخارجية",
            ]
          : [
              "Bespoke, brand-aligned responsive interfaces",
              "Seamless mobile and multi-device compatibility",
              "Optimized for high-speed performance and SEO",
              "Secure payment gateways and 3rd-party API integrations",
            ],
      serviceKey: "web",
    },
    {
      id: "ai",
      icon: <Bot className="w-6 h-6 text-emerald-400" />,
      title: lang === "ar" ? "عملاء الذكاء الاصطناعي وأتمتة العمليات" : "Autonomous AI Agents & Workflows",
      desc:
        lang === "ar"
          ? "ندمج وكلاء ذكاء اصطناعي ذاتيي اتخاذ القرارات لأتمتة مهام خدمة العملاء عبر واتساب والويب، واستخراج البيانات، وإنجاز المهام التشغيلية المتكررة."
          : "We build goal-oriented AI agent systems that automate customer communication, document parsing, and daily workflows, freeing your team from manual overhead.",
      points:
        lang === "ar"
          ? [
              "وكلاء محادثة ذكيون مخصصون لبيانات شركتك",
              "أتمتة خدمة العملاء والرد الفوري على مدار الساعة",
              "معالجة البيانات واستخراجها من الفواتير والمستندات",
              "تقليل الأخطاء البشرية والتكاليف التشغيلية",
            ]
          : [
              "Custom conversational agents grounded in your business data",
              "24/7 automated lead capture and instant response",
              "Automated document processing and data extraction",
              "Substantial reduction in repetitive operational overhead",
            ],
      serviceKey: "ai",
    },
    {
      id: "backend",
      icon: <Server className="w-6 h-6 text-blue-400" />,
      title: lang === "ar" ? "الأنظمة الخلفية وقواعد البيانات الموثوقة" : "Backend Systems & Database Architecture",
      desc:
        lang === "ar"
          ? "نبني خوادم قوية وقواعد بيانات مشفرة مصممة لتحمل ضغط آلاف المعاملات المتزامنة مع ضمان أعلى معايير الأمان والتوافر على مدار الساعة."
          : "We architect scalable backend APIs, normalized databases, and cloud infrastructures designed to handle high transaction volumes with enterprise-grade security.",
      points:
        lang === "ar"
          ? [
              "واجهات برمجة تطبيقات (APIs) سريعة ومحمية",
              "قواعد بيانات علائقية متطورة (PostgreSQL)",
              "صلاحيات مستخدمين دقيقة وتشفير شامل للبيانات",
              "جاهزية سحابية تضمن استمرارية العمل دون انقطاع",
            ]
          : [
              "High-throughput, type-safe RESTful backend APIs",
              "Optimized, reliable PostgreSQL database models",
              "Role-based access control and end-to-end encryption",
              "Cloud-native deployment ensuring continuous 99.9% uptime",
            ],
      serviceKey: "backend",
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 border-b border-white/[0.08] text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-medium text-sky-400 mb-4">
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            {t.services.title}
          </h2>
          <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed">
            {t.services.desc}
          </p>
        </div>

        {/* 3-Column Corporate Service Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="pro-card p-8 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center mb-6">
                  {service.icon}
                </div>

                <h3 className="text-xl font-display font-bold text-white tracking-tight mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {service.desc}
                </p>

                {/* Bullet Points */}
                <div className="space-y-3 pt-6 border-t border-slate-800/80 mb-8">
                  {service.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Button */}
              {onSelectService && (
                <div>
                  <button
                    onClick={() => onSelectService(service.serviceKey)}
                    className="w-full py-2.5 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all cursor-pointer border border-slate-700/60"
                  >
                    <span>{lang === "ar" ? "طلب استشارة لهذه الخدمة" : "Inquire About This Service"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
