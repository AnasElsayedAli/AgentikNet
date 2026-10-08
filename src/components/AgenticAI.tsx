import { useState } from "react";
import { Bot, Cpu, Zap, Database, ArrowUpRight, CheckCircle2, MessageSquare, Terminal, FileText, Sparkles, MessageCircle } from "lucide-react";
import { translations } from "../translations";

interface AgenticAIProps {
  lang: "en" | "ar";
  onOpenConsultation?: () => void;
}

export function AgenticAI({ lang }: AgenticAIProps) {
  const t = translations[lang];

  const [activeWorkflow, setActiveWorkflow] = useState<number>(0);

  const AGENT_CAPABILITIES = [
    {
      icon: <Bot className="w-5 h-5 text-emerald-400" />,
      title: lang === "ar" ? "وكلاء ذكاء اصطناعي ذاتيون (AI Agents)" : "Autonomous AI Agents",
      desc: lang === "ar"
        ? "أنظمة برمجية تفهم السياق، وتتخذ القرارات الذاتية، وتنفذ إجراءات حقيقية مثل الرد على العملاء وتوجيه الطلبات عبر واتساب والويب على مدار الساعة."
        : "Goal-oriented software agents that understand nuance, autonomously qualify leads, and handle multi-turn customer conversations over WhatsApp and web 24/7.",
      deliverables: lang === "ar"
        ? ["اتخاذ قرارات ذاتي ومبرر", "تكامل واتساب المباشر (24/7)", "توجيه العملاء المحتملين وتأهيلهم"]
        : ["Autonomous decision-making logic", "Direct WhatsApp API integration", "Inbound lead qualification pipelines"],
    },
    {
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
      title: lang === "ar" ? "أتمتة الأعمال وسلاسل الإجراءات (Agentic Workflows)" : "Agentic Workflows & Automation",
      desc: lang === "ar"
        ? "ربط سير العمليات المتعددة تلقائياً؛ عند وقوع حدث ما، يقوم الوكيل بالتحقق من البيانات، وتحديث النظام، وإرسال التقارير دون انتظار أي تدخل بشري."
        : "Event-driven operational pipelines: when an event occurs, agents validate schemas, query inventories, and dispatch updates with zero manual lag.",
      deliverables: lang === "ar"
        ? ["أتمتة العمليات الإدارية المتكررة", "تقليل الأخطاء البشرية بنسبة 99%", "مزامنة لحظية بين الأنظمة المختلفة"]
        : ["End-to-end repetitive task elimination", "Zero human transcription errors", "Real-time cross-system synchronization"],
    },
    {
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      title: lang === "ar" ? "تأريض البيانات واسترجاع المعرفة (RAG)" : "Retrieval-Augmented Generation (RAG)",
      desc: lang === "ar"
        ? "ربط نماذج الذكاء الاصطناعي بكتالوجاتك، ومستنداتك الداخلية، وسياسات شركتك لتقديم إجابات دقيقة وموثوقة خالية تماماً من الهلوسة."
        : "Grounding large language models directly into your company catalogs, internal manuals, and databases for 100% hallucination-free, verifiable output.",
      deliverables: lang === "ar"
        ? ["فهارس متجهات (Vector Indexes) مخصصة", "تأريض كامل ببيانات شركتك", "إجابات موثوقة ومحددة المصادر"]
        : ["Deterministic vector search index", "Proprietary catalog & data grounding", "100% verifiable source citations"],
    },
    {
      icon: <FileText className="w-5 h-5 text-emerald-400" />,
      title: lang === "ar" ? "مساعدون داخليون وأدوات استخراج البيانات" : "Internal Copilots & Extraction Tools",
      desc: lang === "ar"
        ? "أدوات ذكاء اصطناعي مخصصة لفريق عملك لاستخراج البيانات من المستندات والفواتير غير المنظمة، وتحليل التقارير وصياغة المراسلات فورياً."
        : "Custom internal tools for your team: automated data extraction from unstructured invoices, contract summarization, and intelligent operational copilots.",
      deliverables: lang === "ar"
        ? ["استخراج بيانات الفواتير والمستندات", "تلخيص العقود والتقارير الفنية", "توفير ساعات عمل أسبوعية للفريق"]
        : ["Automated invoice entity extraction", "Contract & report summarization", "Dozens of administrative hours saved weekly"],
    },
  ];

  const SIMULATION_FLOWS = [
    {
      title: lang === "ar" ? "وكيل خدمة العملاء الذاتي عبر واتساب" : "Autonomous WhatsApp Lead Agent",
      subtitle: lang === "ar" ? "استفسار توريدات صناعية وارد" : "Inbound Industrial Supply Inquiry",
      inputPrompt: lang === "ar"
        ? "العميل: 'السلام عليكم، أحتاج معرفة أسعار صمامات الضغط وموعد التسليم المتاح لـ 50 وحدة.'"
        : "Client: 'Hello, need quotation for 50 high-pressure valves and available dispatch timeframe.'",
      reasoning: [
        lang === "ar" ? "1. استخراج الكيان: 50 وحدة صمامات ضغط عالي" : "1. Entity Extracted: 50 High-Pressure Valves",
        lang === "ar" ? "2. استعلام المخزون: 120 وحدة متاحة بالمستودع المركزي" : "2. Inventory DB Query: 120 units in central stock",
        lang === "ar" ? "3. حساب السعر وتوليد عرض السعر الرسمي تلقائياً" : "3. Pricing Matrix Evaluated -> Quote ID: #QT-894 generated",
      ],
      outputResult: lang === "ar"
        ? "تم الرد فوراً عبر واتساب: 'وعليكم السلام، مرحباً بك! الوحدات متوفرة فوراً في مستودعنا بسعر 480 ج.م للوحدة، مع إمكانية الشحن خلال 24 ساعة. تم إرسال ملف العرض الرسمي #QT-894 إلى بريدكم المسجل.'"
        : "Dispatched via WhatsApp: 'Hello! 50 units available immediately at $48/unit. Dispatch ready within 24 hours. Formal quote #QT-894 has been routed to your registered contact.'",
      metrics: lang === "ar" ? "زمن الاستجابة: 86ms · تم تحويل المعاملة بنجاح" : "Latency: 86ms · Lead Qualified & Reconciled",
    },
    {
      title: lang === "ar" ? "أتمتة مزامنة المخزون وسلاسل التوريد" : "ERP & Supply Chain Automation Pipeline",
      subtitle: lang === "ar" ? "تحديث تلقائي للموردين" : "Automated Supplier Inventory Ingestion",
      inputPrompt: lang === "ar"
        ? "إشعار Webhook وارد من المورد: 'تحديث أسعار وكميات 140 صنفاً جديداً في النظام.'"
        : "Inbound Supplier Webhook: '140 inventory SKU updates across regional logistics nodes.'",
      reasoning: [
        lang === "ar" ? "1. فحص صحة البيانات والتحقق من الأرقام التسلسلية" : "1. Schema validation against product catalog",
        lang === "ar" ? "2. تنفيذ معاملة مجمعة في قاعدة بيانات PostgreSQL" : "2. Executing batch transaction on PostgreSQL",
        lang === "ar" ? "3. إرسال ملخص الفروقات لمدير المشتريات تلقائياً" : "3. Triggering webhook alert for price variations",
      ],
      outputResult: lang === "ar"
        ? "تمت المعالجة بنجاح: تحديث 140 صنفاً بنسبة دقة 100% دون تدخل يدوي، وتنبيه فرق المبيعات بالأسعار الجديدة."
        : "Completed: 140 items updated across databases with 100% reconciliation accuracy. Zero manual spreadsheet copying.",
      metrics: lang === "ar" ? "معالجة 100% من السجلات دون أخطاء يدوية" : "100% Data Accuracy · Zero Human Delay",
    },
    {
      title: lang === "ar" ? "استخراج بيانات الفواتير والمستندات" : "Unstructured Document & Invoice Extraction",
      subtitle: lang === "ar" ? "معالجة الفواتير الإلكترونية تلقائياً" : "OCR & Structured Schema Parsing",
      inputPrompt: lang === "ar"
        ? "مستند PDF غير منظم وارد عبر البريد: فاتورة توريد مواد خام تحتوي على بنود مبعثرة."
        : "Inbound raw PDF invoice with mixed line items, tax numbers, and payment terms.",
      reasoning: [
        lang === "ar" ? "1. استخراج النصوص والجداول عبر خوارزميات الرؤية الذكية" : "1. High-precision OCR & table layout parsing",
        lang === "ar" ? "2. مطابقة البنود الضريبية والمجاميع الرياضية" : "2. Validating line items against total gross amount",
        lang === "ar" ? "3. تصدير مخرجات JSON نظيفة للنظام المحاسبي" : "3. Emitting structured JSON payload into accounting API",
      ],
      outputResult: lang === "ar"
        ? "تم تحويل الفاتورة إلى سجل منظم وإضافتها مباشرة إلى الحسابات في أقل من ثانيتين."
        : "Converted raw document into type-safe schema and posted directly into enterprise accounts in under 2 seconds.",
      metrics: lang === "ar" ? "وفر 15 دقيقة لكل فاتورة مورد" : "15 Minutes Saved Per Document",
    },
  ];

  const currentFlow = SIMULATION_FLOWS[activeWorkflow];
  const whatsappUrl = "https://wa.me/201028801508";

  return (
    <section id="agentic-ai" className="py-14 sm:py-20 border-b border-white/[0.08] text-start bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-8 mb-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              {t.aiSection.title}
            </h2>
            <p className="text-slate-300 mt-4 text-base sm:text-lg leading-relaxed font-normal">
              {t.aiSection.desc}
            </p>
          </div>

          <div className="w-full sm:w-auto shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors shadow-sm shadow-emerald-500/20 whitespace-nowrap w-full sm:w-auto min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 text-slate-950" />
              <span>{lang === "ar" ? "ناقش دمج وكيل ذكاء اصطناعي" : "Discuss an AI Agent Project"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
            </a>
          </div>
        </div>

        {/* 4 Core AI Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 mb-10">
          {AGENT_CAPABILITIES.map((cap, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/[0.08] bg-slate-900/40 p-5 sm:p-7 md:p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-300"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-5">
                  {cap.icon}
                </div>

                <h3 className="text-xl font-display font-bold text-white tracking-tight mb-3">
                  {cap.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {cap.desc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/[0.06] mb-4">
                  {cap.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  {lang === "ar" ? "تطوير مخصص للشركات" : "Custom Enterprise Pipeline"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Interactive Agent Execution Simulator */}
        <div className="rounded-xl border border-white/[0.1] bg-slate-950 p-4 sm:p-7 md:p-9 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 sm:pb-6 border-b border-white/[0.08] mb-6 sm:mb-8 gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-tight">
                {lang === "ar" ? "كيف يعمل الوكيل الذكي في بيئة العمل الفعلية؟" : "How Our Agents Execute in Real Business Operations"}
              </h3>
            </div>

            {/* Workflow selector tabs */}
            <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-white/[0.08] shrink-0 overflow-x-auto max-w-full">
              {SIMULATION_FLOWS.map((flow, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveWorkflow(idx)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer ${
                    activeWorkflow === idx
                      ? "bg-emerald-500 text-slate-950 font-semibold shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {lang === "ar" ? `سيناريو ${idx + 1}` : `Scenario ${idx + 1}`}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Input Prompt & Reasoning chain */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-2 font-medium">
                  {lang === "ar" ? "الحدث الوارد (Inbound Trigger)" : "Inbound Operational Event"}
                </span>
                <div className="p-4 rounded-lg bg-slate-900/80 border border-white/[0.06] text-xs text-slate-200 leading-relaxed font-sans">
                  {currentFlow.inputPrompt}
                </div>
              </div>

              <div>
                <span className="text-xs text-emerald-400 uppercase tracking-wider block mb-2 font-medium">
                  {lang === "ar" ? "سلسلة التفكير والتحقق (Agent Reasoning Chain)" : "Autonomous Decision Chain"}
                </span>
                <div className="space-y-2">
                  {currentFlow.reasoning.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-900/40 border border-white/[0.04] text-xs text-slate-300 flex items-center gap-2 font-sans"
                    >
                      <Terminal className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Automated Output & Proof */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full bg-slate-900/60 p-6 rounded-lg border border-emerald-500/20">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-emerald-400 uppercase tracking-wider font-medium">
                    {lang === "ar" ? "الإجراء المنفذ ذاتياً (Automated Action)" : "Autonomous Dispatch Output"}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    {currentFlow.metrics}
                  </span>
                </div>

                <div className="p-4 rounded-lg bg-slate-950 border border-white/[0.06] text-xs text-emerald-200 leading-relaxed mb-6 font-sans">
                  {currentFlow.outputResult}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {lang === "ar"
                    ? "يقوم الوكيل بالربط المباشر مع واجهات WhatsApp الرسمية وقواعد بياناتك، مما يتيح لك خدمة مئات العملاء والطلبات لحظياً دون توظيف فريق دعم إضافي."
                    : "The agent interfaces directly with official WhatsApp endpoints and your database schemas, allowing you to qualify and convert client demand instantly."}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs text-slate-300 font-medium">
                  {lang === "ar" ? "هل ترغب في تطبيق هذا النموذج في أعمالك؟" : "Ready to automate this workflow in your business?"}
                </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1 transition-colors"
                >
                  <span>{lang === "ar" ? "تواصل معنا عبر واتساب" : "Chat on WhatsApp"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AgenticAI;
