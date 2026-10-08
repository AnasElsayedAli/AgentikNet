import { ExternalLink, CheckCircle2 } from "lucide-react";
import { translations } from "../translations";

interface PortfolioProps {
  lang: "en" | "ar";
}

export function Portfolio({ lang }: PortfolioProps) {
  const t = translations[lang];

  const projects = [
    {
      name: "Tocco House",
      tagline: lang === "ar" ? "منصة تجارة إلكترونية فاخرة متكاملة" : "Modern Luxury E-Commerce Platform",
      category: lang === "ar" ? "منصة تجارة إلكترونية • Live" : "Full E-Commerce · Live Project",
      url: "https://tocco-house.vercel.app/",
      displayUrl: "tocco-house.vercel.app",
      logoSrc: "/image.png",
      description: lang === "ar"
        ? "منصة تسوق رقمية متطورة تم بناؤها وتصميمها بواجهة عصرية وتجربة تصفح فائقة السرعة مع سلة مشتريات ديناميكية وتوافق تام مع مختلف الشاشات."
        : "A modern luxury e-commerce platform designed with cutting-edge visual aesthetics, responsive fluid shopping flows, and instant page transitions.",
      deliverables: lang === "ar"
        ? ["تصميم تجربة مستخدم عصرية (UI/UX)", "استضافة سريعة على Vercel", "سلة تسوق وكتالوج تفاعلي"]
        : ["Bespoke UI/UX Design System", "High-Performance Vercel Edge", "Dynamic Shopping Flow"],
      status: lang === "ar" ? "منشور ومتاح أونلاين" : "Live & In Production",
    },
    {
      name: "Atlantic International Corporation",
      tagline: lang === "ar" ? "الشركة الدولية الأطلسية للصيانة الصناعية" : "Industrial Maintenance & Engineering",
      category: lang === "ar" ? "بوابة أعمال B2B" : "Industrial B2B Portal",
      url: "",
      displayUrl: "",
      logoSrc: "/Screenshot 2026-07-17 235343.png",
      description: lang === "ar"
        ? "بوابة مؤسسية متكاملة لرقمنة عمليات توريد منتجات الصيانة الصناعية وخدمات الدعم الفني، مع أتمتة تدفقات الطلبات وسلاسل التوريد."
        : "An enterprise B2B portal digitizing industrial maintenance supply operations, facility maintenance requests, and relational inventory databases.",
      deliverables: lang === "ar"
        ? ["بوابة عملاء B2B متطورة", "مزامنة سلاسل التوريد والمخزون", "قواعد بيانات علائقية مؤمنة"]
        : ["Automated B2B Client Portal", "Inventory Synchronization", "Secure Relational Database"],
      status: lang === "ar" ? "المرحلة الأولى مكتملة" : "Phase 1 Deployed & Delivered",
    },
    {
      name: "Tarek Helal Co.",
      tagline: lang === "ar" ? "شركة طارق هلال لتجهيزات الصالونات والمراكز" : "Professional Salon Equipment Supplies",
      category: lang === "ar" ? "منصة تجارة دولية واستيراد • Live" : "International Trade & Wholesale · Live",
      url: "https://tarekhelalfront.vercel.app/",
      displayUrl: "tarekhelalfront.vercel.app",
      logoSrc: "/tarek-helal-logo.png",
      description: lang === "ar"
        ? "منظومة رقمية متخصصة لكتالوج التوريدات واستعراض المعدات الاحترافية لقطاع التجميل وتجارة الجملة الدولية، مصممة لاستقبال استفسارات كبار العملاء."
        : "Digital wholesale hardware catalog and international trade inquiry engine crafted for professional equipment distribution.",
      deliverables: lang === "ar"
        ? ["منصة تجارة رقمية متكاملة", "محرك كتالوج التوريدات بالجملة", "معمارية سريعة الاستجابة على الجوال"]
        : ["Enterprise Trade Platform", "Wholesale Catalog Engine", "Low-Latency Mobile Architecture"],
      status: lang === "ar" ? "منشور ومتاح أونلاين" : "Live & In Production",
    },
  ];

  return (
    <section id="portfolio" className="py-14 sm:py-20 border-b border-white/[0.08] text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            {t.partners.title}
          </h2>
          <p className="text-slate-300 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            {t.partners.desc}
          </p>
        </div>

        {/* Unified 3-Column Grid with Identical, Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 items-stretch">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border border-white/[0.08] bg-slate-900/50 hover:border-sky-500/30 hover:bg-slate-900/80 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 group shadow-lg ${
                idx === 2 ? "md:col-span-2 lg:col-span-1 md:max-w-xl md:mx-auto lg:max-w-none w-full" : ""
              }`}
            >
              <div>
                {/* Top Media Asset Container (Uniform Aspect & Shape) */}
                <div className="w-full h-36 rounded-xl bg-slate-950/90 border border-white/[0.08] p-4 flex items-center justify-center overflow-hidden mb-5 group-hover:border-sky-500/20 transition-colors shadow-inner">
                  <img
                    src={project.logoSrc}
                    alt={project.name}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Category & Status Indicator */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider truncate">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{project.status}</span>
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-display font-bold text-white tracking-tight mb-1.5">
                  {project.name}
                </h3>

                {/* Tagline */}
                {project.tagline && (
                  <p className="text-xs text-slate-400 mb-3 line-clamp-1 font-medium">
                    {project.tagline}
                  </p>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal line-clamp-3">
                  {project.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-1.5 mb-6 pt-4 border-t border-white/[0.06]">
                  {project.deliverables.map((d, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span className="truncate">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Area */}
              <div className="pt-4 border-t border-white/[0.08] mt-auto">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-sky-400 hover:bg-sky-300 active:scale-[0.99] text-slate-950 font-semibold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-sky-400/20 hover:shadow-sky-400/30 cursor-pointer min-h-[44px]"
                  >
                    <span>{lang === "ar" ? "زيارة الموقع المباشر" : "Visit Live Platform"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-slate-400 min-h-[44px] flex-wrap gap-2">
                    <span className="text-xs font-mono text-slate-400">
                      {lang === "ar" ? "نظام أعمال داخلي" : "Internal Enterprise Platform"}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{lang === "ar" ? "مكتمل ومسلّم" : "Deployed"}</span>
                    </span>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;
