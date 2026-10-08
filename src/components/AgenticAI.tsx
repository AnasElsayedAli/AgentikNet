import { useState } from "react";
import { Bot, Zap, Database, ArrowUpRight, Terminal, FileText, MessageCircle } from "lucide-react";
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
        ? "وكلاء يردون على العملاء ويعالجون الطلبات عبر واتساب والويب."
        : "Agents that handle customer requests across WhatsApp and web.",
      deliverables: lang === "ar"
        ? ["ردود تلقائية", "تأهيل العملاء", "تكامل مباشر مع واتساب"]
        : ["Automated responses", "Lead qualification", "WhatsApp integration"],
    },
    {
      icon: <Zap className="w-5 h-5 text-emerald-400" />,
      title: lang === "ar" ? "أتمتة الأعمال وسلاسل الإجراءات (Agentic Workflows)" : "Agentic Workflows & Automation",
      desc: lang === "ar"
        ? "أتمتة المهام وربط الأنظمة عند وقوع الأحداث، دون إدخال يدوي."
        : "Automate routine tasks and connect systems when events occur.",
      deliverables: lang === "ar"
        ? ["مهام متكررة أقل", "أخطاء إدخال أقل", "مزامنة بين الأنظمة"]
        : ["Fewer repetitive tasks", "Fewer manual errors", "Cross-system sync"],
    },
    {
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      title: lang === "ar" ? "تأريض البيانات واسترجاع المعرفة (RAG)" : "Retrieval-Augmented Generation (RAG)",
      desc: lang === "ar"
        ? "إجابات تستند إلى مستندات شركتك وكتالوجاتها مع إظهار المصادر."
        : "Answers grounded in your company documents and catalogs, with sources.",
      deliverables: lang === "ar"
        ? ["بحث في بياناتك", "مصادر واضحة"]
        : ["Search across your data", "Source references"],
    },
    {
      icon: <FileText className="w-5 h-5 text-emerald-400" />,
      title: lang === "ar" ? "مساعدون داخليون وأدوات استخراج البيانات" : "Internal Copilots & Extraction Tools",
      desc: lang === "ar"
        ? "أدوات تستخرج بيانات الفواتير وتلخص المستندات لفريقك."
        : "Tools that extract invoice data and summarize documents for your team.",
      deliverables: lang === "ar"
        ? ["استخراج بيانات", "تلخيص مستندات"]
        : ["Data extraction", "Document summaries"],
    },
  ];

  const SIMULATION_FLOWS = [
    {
      title: lang === "ar" ? "وكيل خدمة العملاء الذاتي عبر واتساب" : "Autonomous WhatsApp Lead Agent",
      subtitle: lang === "ar" ? "استفسار عن منتج" : "Product inquiry",
      inputPrompt: lang === "ar"
        ? "العميل: أحتاج 50 صمام ضغط. ما السعر وموعد التسليم؟"
        : "Client: Need 50 pressure valves. What is the price and delivery time?",
      reasoning: [
        lang === "ar" ? "تحديد المنتج والكمية" : "Identify product and quantity",
        lang === "ar" ? "التحقق من المخزون" : "Check inventory",
        lang === "ar" ? "إرسال السعر وموعد التسليم" : "Send price and delivery time",
      ],
      outputResult: lang === "ar"
        ? "تم إرسال السعر والتوفر للعميل عبر واتساب."
        : "Price and availability sent to the customer via WhatsApp.",
      metrics: lang === "ar" ? "رد خلال 86 مللي ثانية" : "86ms response",
    },
    {
      title: lang === "ar" ? "أتمتة مزامنة المخزون وسلاسل التوريد" : "ERP & Supply Chain Automation Pipeline",
      subtitle: lang === "ar" ? "تحديث المخزون" : "Inventory update",
      inputPrompt: lang === "ar"
        ? "المورد يرسل تحديثًا للأسعار والكميات."
        : "Supplier sends updated prices and quantities.",
      reasoning: [
        lang === "ar" ? "التحقق من البيانات" : "Validate data",
        lang === "ar" ? "تحديث قاعدة البيانات" : "Update database",
        lang === "ar" ? "إشعار الفريق بالتغييرات" : "Notify the team",
      ],
      outputResult: lang === "ar"
        ? "تم تحديث المخزون وإشعار الفريق."
        : "Inventory updated and team notified.",
      metrics: lang === "ar" ? "دون إدخال يدوي" : "No manual entry",
    },
    {
      title: lang === "ar" ? "استخراج بيانات الفواتير والمستندات" : "Unstructured Document & Invoice Extraction",
      subtitle: lang === "ar" ? "معالجة الفواتير" : "Invoice processing",
      inputPrompt: lang === "ar"
        ? "فاتورة PDF تحتوي على أصناف وضرائب وإجمالي."
        : "PDF invoice with line items, taxes, and total.",
      reasoning: [
        lang === "ar" ? "استخراج البنود والضرائب" : "Extract items and taxes",
        lang === "ar" ? "مراجعة الإجمالي" : "Verify total",
        lang === "ar" ? "إرسال البيانات للمحاسبة" : "Send data to accounting",
      ],
      outputResult: lang === "ar"
        ? "استخرج النظام بيانات الفاتورة وأرسلها للمحاسبة."
        : "Invoice data extracted and sent to accounting.",
      metrics: lang === "ar" ? "معالجة أسرع للفواتير" : "Faster invoice processing",
    },
  ];

  const currentFlow = SIMULATION_FLOWS[activeWorkflow];
  const whatsappUrl = "https://wa.me/201028801508";

  return (
    <section id="agentic-ai" className="py-14 sm:py-20 border-b border-white/[0.08] text-start bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 sm:gap-8 mb-8 sm:mb-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              {t.aiSection.title}
            </h2>
            <p className="text-slate-300 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 mb-10">
          {AGENT_CAPABILITIES.map((cap, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/[0.08] bg-slate-900/40 p-5 sm:p-6 flex flex-col hover:border-emerald-500/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  {cap.icon}
                  </div>
                  <h3 className="text-lg font-display font-bold text-white leading-snug">{cap.title}</h3>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-2">
                  {cap.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cap.deliverables.map((d, dIdx) => (
                    <span key={dIdx} className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1 text-xs text-slate-300">{d}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Interactive Agent Execution Simulator */}
        <div className="rounded-xl border border-white/[0.1] bg-slate-950 p-4 sm:p-7 md:p-9 shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 sm:pb-6 border-b border-white/[0.08] mb-6 sm:mb-8 gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-tight">
                {lang === "ar" ? "كيف يعمل الوكيل؟" : "How the agent works"}
              </h3>
            </div>

            {/* Workflow selector tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-lg border border-white/[0.08] shrink-0 overflow-x-auto max-w-full scrollbar-none">
              {SIMULATION_FLOWS.map((flow, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveWorkflow(idx)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap min-h-[38px] flex items-center justify-center ${
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Left: Input Prompt & Reasoning chain */}
            <div className="md:col-span-1 lg:col-span-6 space-y-5 flex flex-col justify-between">
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
            <div className="md:col-span-1 lg:col-span-6 flex flex-col justify-between h-full bg-slate-900/60 p-4 sm:p-6 rounded-lg border border-emerald-500/20">
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

              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs text-slate-300 font-medium">
                  {lang === "ar" ? "هل تريد أتمتة مهامك؟" : "Ready to automate a workflow?"}
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
