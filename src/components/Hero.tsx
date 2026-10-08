import { useState } from "react";
import { ArrowUpRight, ArrowDown, Bot, Code2, ShieldCheck, Zap, MessageCircle, ExternalLink, Sparkles } from "lucide-react";
import { translations } from "../translations";

interface HeroProps {
  lang: "en" | "ar";
  onOpenConsultation: () => void;
  onExploreSolutions: () => void;
}

export function Hero({ lang, onOpenConsultation, onExploreSolutions }: HeroProps) {
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState<"software" | "agentic">("software");

  const ARCHITECTURE_PANELS = {
    software: {
      title: lang === "ar" ? "معمارية برمجيات الويب المتكاملة" : "Full-Stack Web & Software Engine",
      subtitle: lang === "ar" ? "تطبيقات سريعة الاستجابة مبنية على أحدث تقنيات React وTypeScript" : "Sub-50ms latency, reactive frontend & robust backend",
      status: lang === "ar" ? "جاهزية تشغيل 99.99%" : "99.99% Edge Availability",
      stack: ["React", "TypeScript", "Tailwind CSS", "Vercel Edge", "REST / GraphQL"],
      workflow: [
        {
          label: lang === "ar" ? "01. واجهات مستخدم فائقة الاستجابة" : "01. High-Performance Frontends",
          detail: lang === "ar" ? "تصميم متجاوب بالكامل وتدفقات تسوق وتصفح تفاعلية وفورية" : "100% responsive fluid mobile layouts & instant transitions",
        },
        {
          label: lang === "ar" ? "02. بوابات دفع وأنظمة مخصصة" : "02. Secure Commerce & Portals",
          detail: lang === "ar" ? "ربط بوابات الدفع الإلكتروني، إدارة الجلسات وسلال الشراء" : "End-to-end payment integrations, cart states & session safety",
        },
        {
          label: lang === "ar" ? "03. سرعة تحميل وتحسين محركات البحث" : "03. Edge Caching & Technical SEO",
          detail: lang === "ar" ? "تحميل فوري عبر حوافي الشبكة وسرعة استجابة استثنائية" : "Sub-50ms TTFB across regional edge points",
        },
      ],
    },
    agentic: {
      title: lang === "ar" ? "النواة الذاتية للذكاء الاصطناعي (Agentic Core)" : "Autonomous Agentic AI Engine",
      subtitle: lang === "ar" ? "وكلاء أذكياء يتخذون القرارات ويتفاعلون مع قواعد البيانات" : "Goal-oriented agents executing database transactions & messaging",
      status: lang === "ar" ? "تأريض دقيق 100% دون هلوسة" : "100% Grounded RAG & Tool Use",
      stack: ["Autonomous Agents", "WhatsApp API", "Vector Embeddings", "RAG Pipeline", "FastAPI / Node"],
      workflow: [
        {
          label: lang === "ar" ? "01. استيعاب السياق والنية دلالياً" : "01. Semantic Intent Perception",
          detail: lang === "ar" ? "تحليل استفسار العميل عبر واتساب وتحديد الهدف بدقة" : "Classifying inbound customer intent with zero latency",
        },
        {
          label: lang === "ar" ? "02. استعلام قواعد البيانات وتأريض المعرفة" : "02. Knowledge & Inventory Grounding",
          detail: lang === "ar" ? "البحث في كتالوج المنتجات ومستندات الشركة لضمان الإجابة" : "Deterministic database checks before generating proposals",
        },
        {
          label: lang === "ar" ? "03. تنفيذ الإجراء التلقائي الفوري" : "03. Autonomous Tool Execution",
          detail: lang === "ar" ? "إرسال العرض المالي، تسجيل الطلب، وإشعار فريق المبيعات" : "Dispatching quotes, updating records & routing qualified leads",
        },
      ],
    },
  };

  const currentPanel = ARCHITECTURE_PANELS[activeTab];
  const officialWhatsApp = "https://wa.me/201028801508";

  return (
    <section id="hero" className="relative pt-24 pb-14 md:pt-28 md:pb-16 border-b border-white/[0.08] text-start overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Clear Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            
            {/* Confident Headline */}
            <h1
              id="hero-title"
              className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-extrabold text-white tracking-tight leading-[1.2] mb-5 sm:mb-6"
            >
              {t.hero.titleFirst}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400">
                {t.hero.titleGradient}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              id="hero-subtitle"
              className="text-sm sm:text-base md:text-lg text-slate-300 font-sans leading-relaxed font-normal mb-7 sm:mb-8 max-w-2xl"
            >
              {t.hero.subtitle}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10 sm:mb-12">
              <a
                id="hero-cta-whatsapp"
                href={officialWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 active:bg-sky-500 rounded-lg transition-all cursor-pointer shadow-lg shadow-sky-400/20 whitespace-nowrap min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 text-slate-950" />
                <span>{t.hero.ctaBtn}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-950" />
              </a>

              <button
                id="hero-cta-explore"
                onClick={onExploreSolutions}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 rounded-lg transition-all cursor-pointer whitespace-nowrap min-h-[48px]"
              >
                <span>{t.hero.exploreBtn}</span>
                <ArrowDown className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Quantitative Proof Metrics Strip (Clean, unboxed) */}
            <div className="w-full pt-6 sm:pt-8 border-t border-white/[0.08] grid grid-cols-3 gap-2 sm:gap-4 md:gap-6">
              <div>
                <div className="text-lg sm:text-2xl md:text-3xl font-display font-bold text-white tabular-nums tracking-tight">
                  {t.hero.stat1Number}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-1 leading-snug">
                  {t.hero.stat1Label}
                </div>
              </div>

              <div>
                <div className="text-lg sm:text-2xl md:text-3xl font-display font-bold text-white tabular-nums tracking-tight">
                  {t.hero.stat2Number}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-1 leading-snug">
                  {t.hero.stat2Label}
                </div>
              </div>

              <div>
                <div className="text-lg sm:text-2xl md:text-3xl font-display font-bold text-white tabular-nums tracking-tight">
                  {t.hero.stat3Number || "5+"}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-400 mt-1 leading-snug">
                  {t.hero.stat3Label || (lang === "ar" ? "منصات مكتملة" : "Delivered Platforms")}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Dual-Core Architecture Preview */}
          <div className="lg:col-span-5 w-full max-w-xl mx-auto lg:max-w-none">
            <div className="rounded-xl border border-white/[0.1] bg-slate-950/80 backdrop-blur-md shadow-2xl p-4 sm:p-6 md:p-7 relative overflow-hidden">
              
              {/* Top Bar with Interactive Tab Switchers */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] mb-5">
                <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-lg border border-white/[0.06]">
                  <button
                    onClick={() => setActiveTab("software")}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeTab === "software"
                        ? "bg-sky-500 text-slate-950 font-semibold shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{lang === "ar" ? "البرمجيات" : "Web & Apps"}</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("agentic")}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeTab === "agentic"
                        ? "bg-sky-500 text-slate-950 font-semibold shadow-sm"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Bot className="w-3.5 h-3.5" />
                    <span>{lang === "ar" ? "الوكلاء الذاتيون" : "Agentic AI"}</span>
                  </button>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Panel Header */}
              <div className="mb-5">
                <h3 className="text-base sm:text-lg font-display font-bold text-white tracking-tight">
                  {currentPanel.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {currentPanel.subtitle}
                </p>
              </div>

              {/* Step-by-Step Architecture Pipeline */}
              <div className="space-y-3">
                {currentPanel.workflow.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-slate-900/60 border border-white/[0.05] hover:border-sky-500/30 transition-colors"
                  >
                    <div className="text-xs font-semibold text-slate-200 mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-xs text-slate-400 font-normal leading-relaxed">
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
