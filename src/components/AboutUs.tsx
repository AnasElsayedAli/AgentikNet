import { GraduationCap, CheckCircle2, ArrowUpRight, ShieldCheck, Terminal, Award } from "lucide-react";
import { translations } from "../translations";

interface AboutUsProps {
  lang: "en" | "ar";
}

export function AboutUs({ lang }: AboutUsProps) {
  const t = translations[lang];

  const team = [
    {
      name: lang === "ar" ? "م. أنس السيد" : "Eng. Anas Elsayed",
      role: lang === "ar" ? "شريك مؤسس • مهندس أنظمة خلفية وذكاء اصطناعي" : "Co-Founder · Systems & AI Architect",
      education: lang === "ar" ? "بكالوريوس علوم الحاسب" : "B.Sc. in Computer Science",
      specialization: lang === "ar" ? "معمارية الأنظمة الذكية والعملاء الوكلاء (Agentic Systems)" : "Autonomous Agent Architectures & Backend Infrastructure",
      imageSrc: "/WhatsApp Image 2026-07-17 at 10.31.02 PM.jpeg",
      imagePosition: "object-[center_30%]",
    },
    {
      name: lang === "ar" ? "م. مدثر أسامة" : "Eng. Modather Osama",
      role: lang === "ar" ? "شريك مؤسس • مهندس أنظمة خلفية وذكاء اصطناعي" : "Co-Founder · Systems & AI Architect",
      education: lang === "ar" ? "بكالوريوس علوم الحاسب" : "B.Sc. in Computer Science",
      specialization: lang === "ar" ? "هندسة قواعد البيانات الموزعة وتكامل النماذج اللغوية" : "Distributed Database Engineering & LLM Orchestration",
      imageSrc: "/WhatsApp Image 2026-07-18 at 2.48.52 AM.jpeg",
      imagePosition: "object-top",
    },
  ];

  const ENGINEERING_PILLARS = [
    {
      title: lang === "ar" ? "تواصل مباشر مع المهندسين المؤسسين" : "Direct Lead Architect Engagement",
      desc: lang === "ar"
        ? "تتحدث مباشرة مع مهندسي البرمجيات الذين يبنون نظامك فعلياً، دون وسطاء إداريين أو موظفي مبيعات غير تقنيين."
        : "Work directly with the software architects who design and write your system, eliminating non-technical telephone games.",
    },
    {
      title: lang === "ar" ? "كود برمجي نقي ومخصص 100%" : "Bespoke Clean Code, Zero Template Bloat",
      desc: lang === "ar"
        ? "نبني أنظمتك من الصفر باستخدام معايير هندسية صارمة وخالية من القوالب البطيئة أو المنصات الجاهزة المقيدة."
        : "We build tailored software architectures with strict type safety, zero drag-and-drop bloat, and long-term maintainability.",
    },
    {
      title: lang === "ar" ? "خبرة هندسية حقيقية في الذكاء الاصطناعي" : "Deep AI & Agentic Engineering Rigor",
      desc: lang === "ar"
        ? "نعرف متى نعتمد على نماذج اللغة، ومتى نستخدم القواعد الرياضية، وكيف نؤرّض البيانات لحماية الميزانية والأداء."
        : "We understand when to call an LLM, when to use deterministic algorithms, and how to build verifiable RAG pipelines.",
    },
    {
      title: lang === "ar" ? "بنية سحابية مستقرة وعالية التوافر" : "99.9% High Availability Cloud Deployment",
      desc: lang === "ar"
        ? "تصميم خوادم وقواعد بيانات تتحمل التوسع المفاجئ في الزيارات والمعاملات دون توقف أو بطء في الأداء."
        : "High-throughput cloud deployments engineered with resilient database failover and sub-50ms edge caching.",
    },
  ];

  return (
    <section id="about-us" className="py-14 sm:py-20 border-b border-white/[0.08] text-start bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            {t.about.title}
          </h2>
          <p className="text-slate-300 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            {t.about.desc}
          </p>
        </div>

        {/* Founding Team Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/[0.08] bg-slate-900/50 p-4 sm:p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-300"
            >
              <div>
                {/* Profile Header */}
                <div className="flex items-center gap-3.5 sm:gap-4 pb-4 border-b border-white/[0.08] mb-4">
                  {/* Real Portrait Container */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-white/[0.12] bg-slate-950 shadow-md">
                    <img
                      src={member.imageSrc}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover ${member.imagePosition}`}
                      loading="lazy"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] sm:text-xs font-mono text-sky-400 block mb-0.5">
                      {t.about.founderLabel}
                    </span>
                    <h3 className="text-base sm:text-lg font-display font-bold text-white tracking-tight truncate">
                      {member.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5 font-normal leading-snug">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Academic Credentials */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2.5 text-xs text-slate-300">
                    <GraduationCap className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 block text-[10px] font-mono">{t.about.eduLabel}</span>
                      <span className="font-medium text-xs text-slate-200">{member.education}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Why Work With Us: 4 Engineering Standards */}
        <div className="rounded-xl border border-white/[0.08] bg-slate-900/40 p-5 sm:p-8 md:p-10">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight mb-6 sm:mb-8">
            {lang === "ar" ? "معايير هندسية صارمة تضمن نجاح مشروعك" : "Rigorous Engineering Standards That Guarantee Success"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {ENGINEERING_PILLARS.map((pillar, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-display font-bold text-white mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;
