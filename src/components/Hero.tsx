import { ArrowUpRight, ArrowDown, MessageCircle } from "lucide-react";
import { translations } from "../translations";

interface HeroProps {
  lang: "en" | "ar";
  onOpenConsultation: () => void;
  onExploreSolutions: () => void;
}

export function Hero({ lang, onExploreSolutions }: HeroProps) {
  const t = translations[lang];
  const officialWhatsApp = "https://wa.me/201028801508";

  return (
    <section id="hero" className="relative pt-24 pb-14 md:pt-32 md:pb-20 border-b border-white/[0.08] text-start overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl flex flex-col items-start text-start">
          
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
      </div>
    </section>
  );
}

export default Hero;
