import { Code2, Bot, Layers, ArrowUpRight, Cpu, CheckCircle2 } from "lucide-react";

interface CoreOverviewProps {
  lang: "en" | "ar";
  onNavigateTo: (id: string) => void;
}

export function CoreOverview({ lang, onNavigateTo }: CoreOverviewProps) {
  const content = {
    ar: {
      kicker: "فلسفة العمل الهندسي • Core Philosophy",
      title: "الجمع بين دقة هندسة البرمجيات وذكاء الأنظمة الوكيلة",
      desc: "ندرك أن الشركات المعاصرة لا تبحث عن قوالب مكررة أو أدوات ذكاء اصطناعي استعراضية، بل تحتاج إلى حلول برمجية حقيقية تزيد الإيرادات وتختصر ساعات العمل التشغيلي.",
      pillar1: {
        title: "هندسة البرمجيات وتطبيقات الويب",
        subtitle: "Full-Stack Software Architecture",
        desc: "نبني منصات ويب وتطبيقات سريعة الاستجابة، ونربط قواعد البيانات الموزعة وبوابات الدفع الإلكترونية لتوفير تجربة مستخدم سلسة وموثوقة بنسبة 100%.",
        capabilities: [
          "متاجر إلكترونية متطورة بسلال تسوق تفاعلية وفورية",
          "بوابات مؤسسية (B2B) لإدارة الموردين والعمليات الداخلية",
          "أنظمة خلفية وقواعد بيانات علائقية مشفرة ومؤمنة",
          "واجهات برمجية (REST APIs) سريعة الاستجابة ومحمية",
        ],
        action: "استكشف خدمات تطوير الويب",
      },
      pillar2: {
        title: "الأنظمة الذاتية والوكلاء الأذكياء",
        subtitle: "Autonomous Agentic AI Systems",
        desc: "نطور وكلاء ذكاء اصطناعي يتجاوزون مجرد المحادثات العامة؛ حيث يقومون باستيعاب سياق شركتك، والرد على العملاء عبر واتساب، وأتمتة سلاسل الإجراءات.",
        capabilities: [
          "وكلاء خدمة عملاء ومبيعات يعملون على مدار الساعة عبر واتساب",
          "أتمتة سلاسل المهام المعقدة (Multi-Step Workflows) دون خطأ بشري",
          "تأريض نماذج اللغة (RAG) على كتالوجاتك وبياناتك الخاصة",
          "أدوات استخراج البيانات وتلخيص المستندات والفواتير آلياً",
        ],
        action: "استكشف حلول الذكاء الاصطناعي",
      },
    },
    en: {
      kicker: "Engineering Creed · Dual Capability",
      title: "Software Craftsmanship Meets Autonomous Intelligence",
      desc: "We understand that ambitious companies do not need cosmetic templates or superficial AI hype. They need battle-tested production systems that directly reduce operational costs and accelerate revenue.",
      pillar1: {
        title: "Full-Stack Software & Web Systems",
        subtitle: "Production-Grade Engineering",
        desc: "We engineer bespoke, low-latency web platforms, transactional e-commerce engines, secure payment gateways, and normalized database schemas.",
        capabilities: [
          "High-performance bespoke e-commerce platforms with dynamic checkout",
          "Enterprise B2B portals with role-based access & supplier workflows",
          "Hardened PostgreSQL databases with ACID transaction guarantees",
          "Type-safe RESTful APIs engineered for zero-latency execution",
        ],
        action: "Explore Web Engineering",
      },
      pillar2: {
        title: "Autonomous Agentic AI Architectures",
        subtitle: "Goal-Oriented Intelligent Execution",
        desc: "We build autonomous software agents that don't just chat; they perceive intent, query databases, make operational decisions, and take actions on your behalf.",
        capabilities: [
          "24/7 autonomous sales & support agents over WhatsApp and web",
          "Multi-step automated workflows with zero human operational lag",
          "Retrieval-Augmented Generation (RAG) grounded in your catalogs",
          "Automated invoice data extraction & operational document copilots",
        ],
        action: "Explore Agentic AI",
      },
    },
  }[lang];

  return (
    <section id="what-we-do" className="py-14 sm:py-20 border-b border-white/[0.08] text-start bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            {content.title}
          </h2>
          <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed font-normal">
            {content.desc}
          </p>
        </div>

        {/* Dual Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          
          {/* Pillar 1: Web & Software Engineering */}
          <div className="rounded-xl border border-white/[0.08] bg-slate-900/40 p-5 sm:p-6 lg:p-7 flex flex-col justify-between hover:border-sky-500/30 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
              </div>

              <div className="text-xs font-mono text-sky-400 mb-1">
                {content.pillar1.subtitle}
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-tight mb-2.5">
                {content.pillar1.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-normal">
                {content.pillar1.desc}
              </p>

              <div className="space-y-2 pt-3 border-t border-white/[0.06] mb-5">
                {content.pillar1.capabilities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
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
          <div className="rounded-xl border border-white/[0.08] bg-slate-900/40 p-5 sm:p-6 lg:p-7 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
              </div>

              <div className="text-xs font-mono text-emerald-400 mb-1">
                {content.pillar2.subtitle}
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-tight mb-2.5">
                {content.pillar2.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-normal">
                {content.pillar2.desc}
              </p>

              <div className="space-y-2 pt-3 border-t border-white/[0.06] mb-5">
                {content.pillar2.capabilities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
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
