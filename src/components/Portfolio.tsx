import { ExternalLink } from "lucide-react";
import { translations } from "../translations";

interface PortfolioProps {
  lang: "en" | "ar";
}

export function Portfolio({ lang }: PortfolioProps) {
  const t = translations[lang];

  const projects = [
    {
      name: "Tocco House",
      tagline: lang === "ar" ? "أثاث فاخر من الفايبر جلاس" : "Custom Fiberglass creations.",
      logoFrameClass: "bg-[#754833] p-0",
      logoFitClass: "object-cover",
      url: "https://toccohouse.com/",
      displayUrl: "toccohouse.com",
      logoSrc: "/image.png",
      description: lang === "ar"
        ? "دار تصميم مصرية تصنع أثاثًا نحتيًا من الألياف الزجاجية وقطعًا مميزة للمساحات الداخلية المعاصرة."
        : "An Egyptian design house creating sculptural fiberglass furniture and distinctive objects for contemporary interiors.",
    },
    {
      name: "Atlantic International Corporation",
      tagline: lang === "ar" ? "الشركة الدولية الأطلسية للصيانة الصناعية" : "Industrial Maintenance & Engineering",
      logoFrameClass: "bg-white p-2",
      logoFitClass: "object-contain",
      url: "",
      displayUrl: "",
      logoSrc: "/Screenshot 2026-07-17 235343.png",
      description: lang === "ar"
        ? "بوابة مؤسسية متكاملة لرقمنة عمليات توريد منتجات الصيانة الصناعية وخدمات الدعم الفني، مع أتمتة تدفقات الطلبات وسلاسل التوريد."
        : "An enterprise B2B portal digitizing industrial maintenance supply operations, facility maintenance requests, and relational inventory databases.",
    },
    {
      name: "Tarek Helal Co.",
      tagline: lang === "ar" ? "شركة طارق هلال لتجهيزات الصالونات والمراكز" : "Professional Salon Equipment Supplies",
      logoFrameClass: "bg-white p-2",
      logoFitClass: "object-contain",
      url: "https://tarekhelal.com/",
      displayUrl: "tarekhelal.com",
      logoSrc: "/tarek-helal-logo.png",
      description: lang === "ar"
        ? "منظومة رقمية متخصصة لكتالوج التوريدات واستعراض المعدات الاحترافية لقطاع التجميل وتجارة الجملة الدولية، مصممة لاستقبال استفسارات كبار العملاء."
        : "Digital wholesale hardware catalog and international trade inquiry engine crafted for professional equipment distribution.",
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

        {/* Company cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 items-stretch">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-2xl border border-white/[0.08] bg-slate-900/50 hover:border-sky-500/30 hover:bg-slate-900/80 p-5 sm:p-6 transition-all duration-300 group shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-full border border-white/[0.12] flex items-center justify-center overflow-hidden group-hover:border-sky-500/40 transition-colors shadow-inner ${project.logoFrameClass}`}>
                  <img
                    src={project.logoSrc}
                    alt={project.name}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full ${project.logoFitClass} transition-transform duration-300 group-hover:scale-105`}
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white leading-snug">
                    {project.name}
                  </h3>
                  <p className="text-sm text-sky-400 mt-1 font-medium">
                    {project.tagline}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              {!project.url && (
                <p className="mt-3 text-xs font-medium text-slate-400">
                  {lang === "ar" ? "نظام داخلي" : "Internal system"}
                </p>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-sm text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>{project.displayUrl}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;
