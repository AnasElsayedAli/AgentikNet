import { Code2, Bot, ArrowUpRight } from "lucide-react";

interface CoreOverviewProps {
  lang: "en" | "ar";
  onNavigateTo: (id: string) => void;
}

export function CoreOverview({ lang, onNavigateTo }: CoreOverviewProps) {
  const content = {
    ar: {
      kicker: "فلسفة العمل الهندسي • Core Philosophy",
      title: "برمجيات عملية وذكاء اصطناعي يخدم أعمالك",
      desc: "نبني منصات موثوقة وأتمتة ذكية تقلل العمل اليدوي وتدعم نمو أعمالك.",
      pillar1: {
        title: "هندسة البرمجيات وتطبيقات الويب",
        subtitle: "Full-Stack Software Architecture",
        desc: "متاجر وبوابات أعمال وخدمات خلفية مصممة للأداء والأمان.",
        capabilities: [
          "متاجر ومدفوعات آمنة",
          "بوابات B2B للعملاء والموردين",
          "واجهات API وقواعد بيانات موثوقة",
        ],
        action: "استكشف تطوير البرمجيات",
      },
      pillar2: {
        title: "الأنظمة الذاتية والوكلاء الأذكياء",
        subtitle: "Autonomous Agentic AI Systems",
        desc: "وكلاء يردون على العملاء، ويبحثون في بيانات شركتك، وينفذون المهام تلقائيًا.",
        capabilities: [
          "خدمة عملاء عبر واتساب والويب",
          "أتمتة المهام المتكررة",
          "مساعدون للبحث في بياناتك ومستنداتك",
        ],
        action: "استكشف حلول الذكاء الاصطناعي",
      },
    },
    en: {
      kicker: "Engineering Creed · Dual Capability",
      title: "Practical software and AI for your business",
      desc: "We build reliable platforms and intelligent automation that reduce manual work and support growth.",
      pillar1: {
        title: "Full-Stack Software & Web Systems",
        subtitle: "Production-Grade Engineering",
        desc: "Web platforms, business portals, and secure backends built for performance.",
        capabilities: [
          "Custom stores and secure payments",
          "B2B portals for clients and suppliers",
          "Reliable APIs and databases",
        ],
        action: "Explore Software Services",
      },
      pillar2: {
        title: "Autonomous Agentic AI Architectures",
        subtitle: "Goal-Oriented Intelligent Execution",
        desc: "Agents that answer customers, search your data, and automate routine tasks.",
        capabilities: [
          "Customer support across WhatsApp and web",
          "Automated repetitive workflows",
          "AI assistants grounded in your business data",
        ],
        action: "Explore Agentic AI",
      },
    },
  }[lang];

  return (
    <section id="what-we-do" className="py-14 sm:py-20 border-b border-white/[0.08] text-start bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            {content.title}
          </h2>
          <p className="text-slate-300 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            {content.desc}
          </p>
        </div>

        {/* Dual Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          
          {/* Pillar 1: Web & Software Engineering */}
          <div className="rounded-xl border border-white/[0.08] bg-slate-900/40 p-5 sm:p-6 flex flex-col hover:border-sky-500/30 transition-all duration-300 group">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-sky-400 mb-0.5">{content.pillar1.subtitle}</p>
                  <h3 className="text-lg font-display font-bold text-white leading-snug">{content.pillar1.title}</h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">{content.pillar1.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {content.pillar1.capabilities.map((item) => (
                  <span key={item} className="rounded-full border border-sky-400/15 bg-sky-400/[0.06] px-3 py-1 text-xs text-slate-300">{item}</span>
                ))}
              </div>
            </div>

            <button
              onClick={() => onNavigateTo("software-engineering")}
              className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 group-hover:text-sky-300 transition-colors cursor-pointer py-1"
            >
              <span>{content.pillar1.action}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Pillar 2: Agentic AI Systems */}
          <div className="rounded-xl border border-white/[0.08] bg-slate-900/40 p-5 sm:p-6 flex flex-col hover:border-emerald-500/30 transition-all duration-300 group">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-emerald-400 mb-0.5">{content.pillar2.subtitle}</p>
                  <h3 className="text-lg font-display font-bold text-white leading-snug">{content.pillar2.title}</h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">{content.pillar2.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {content.pillar2.capabilities.map((item) => (
                  <span key={item} className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1 text-xs text-slate-300">{item}</span>
                ))}
              </div>
            </div>

            <button
              onClick={() => onNavigateTo("agentic-ai")}
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors cursor-pointer py-1"
            >
              <span>{content.pillar2.action}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CoreOverview;
