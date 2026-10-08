import { ArrowUpRight, Clock, MessageCircle, ShieldCheck } from "lucide-react";
import { translations } from "../translations";

interface CTAProps {
  lang: "en" | "ar";
}

export function CTA({ lang }: CTAProps) {
  const t = translations[lang];
  const officialPhone = "01028801508";

  return (
    <section id="contact" className="py-14 sm:py-20 border-b border-white/[0.08] text-start bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-4">
            {t.cta.title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 font-sans leading-relaxed mb-6 max-w-xl font-normal">
            {t.cta.subtitle}
          </p>

          <div className="rounded-xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 to-slate-900/60 p-5 sm:p-7 mb-8">
            <div className="flex items-center gap-3 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{lang === "ar" ? "قناة التواصل الرسمية المباشرة" : "Official WhatsApp Hotline"}</span>
            </div>

            <div className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-white tracking-tight mb-3" dir="ltr">
              {officialPhone}
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-5">
              {lang === "ar"
                ? "تواصل فوري ومباشر مع المهندسين المؤسسين لمناقشة أبعاد مشروعك الفنية والمادية."
                : "Connect directly with our lead architects to discuss requirements, feasibility, and deployment timelines."}
            </p>

            <a
              href="https://wa.me/201028801508"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors shadow-md shadow-emerald-500/20 w-full sm:w-auto min-h-[44px] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-slate-950" />
              <span>{lang === "ar" ? "محادثة فورية على واتساب" : "Chat with Us on WhatsApp"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
            </a>
          </div>

          <div className="space-y-3 text-xs text-slate-400 pt-6 border-t border-white/[0.08]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-sky-400 shrink-0" />
              <span>
                {t.cta.officeHoursLabel}: <span className="text-slate-300 font-medium">{t.cta.officeHoursValue}</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                {lang === "ar"
                  ? "نلتزم بسرية تامة لبيانات وأفكار مشروعك وتقديم استشارة تقنية شفافة."
                  : "Strict NDA compliance and transparent technical feasibility feedback."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;