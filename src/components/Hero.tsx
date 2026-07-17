import { ArrowDown, Sparkles } from "lucide-react";
import { translations } from "../translations";

interface HeroProps {
  lang: "en" | "ar";
  onOpenConsultation: () => void;
  onExploreSolutions: () => void;
}

export function Hero({ lang, onOpenConsultation, onExploreSolutions }: HeroProps) {
  const t = translations[lang];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 px-6 lg:px-8 flex flex-col justify-center items-center overflow-hidden stripe-bg-grid"
    >
      {/* Aurora visual blurs in background to establish deep tech mood */}
      <div className="absolute top-[10%] left-[10%] w-[35vw] h-[35vw] rounded-full aurora-blur-1 filter blur-[80px] -z-10 animate-pulse duration-[10000ms] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[45vw] h-[45vw] rounded-full aurora-blur-2 filter blur-[100px] -z-10 animate-pulse duration-[12000ms] pointer-events-none" />

      {/* Main heroic section content */}
      <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-start text-start">
        {/* Futuristic Micro Pill Label */}
        <div
          id="hero-badge"
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#00BFFF] mb-6 tracking-wide shadow-[0_0_15px_rgba(0,191,255,0.05)]"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00BFFF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00BFFF]"></span>
          </span>
          <Sparkles className="w-3.5 h-3.5" />
          {t.hero.badge}
        </div>

        <h1
          id="hero-title"
          className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.15] mb-6"
        >
          {t.hero.titleFirst} <br />
          <span className="text-gradient-electric">{t.hero.titleGradient}</span>
        </h1>

        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-slate-300 font-sans max-w-2xl mb-10 leading-relaxed font-light"
        >
          {t.hero.subtitle}
        </p>

        {/* Luxury CTA Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <button
            id="hero-cta-consult"
            onClick={onOpenConsultation}
            className="px-8 py-4 bg-[#00BFFF] text-black font-bold text-sm tracking-wide rounded-lg hover:bg-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_8px_30px_rgba(0,191,255,0.35)]"
          >
            {t.hero.ctaBtn}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={lang === "ar" ? "rotate-180" : ""}
            >
              <path
                d="M3.33331 8H12.6666"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 3.33333L12.6667 8L8 12.6667"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            id="hero-cta-solutions"
            onClick={onExploreSolutions}
            className="px-8 py-4 bg-white/5 text-white border border-white/10 hover:border-white/20 hover:bg-white/10 font-bold text-sm tracking-wide rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            {t.hero.exploreBtn}
          </button>
        </div>

        {/* Core capability spotlights */}
        <div className="mt-14 w-full max-w-xl grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-white/5 font-mono">
          <div className="flex flex-col gap-1.5 text-start">
            <div className="flex items-center gap-1.5 text-white font-bold tracking-wider text-sm">
              <span className="text-[#00BFFF] text-xl font-display font-black">{t.hero.stat1Number}</span>
              <span className="text-[11px] text-slate-300">{t.hero.stat1Label}</span>
            </div>
          </div>
          <div className="flex flex-col gap-1.5 text-start">
            <div className="flex items-center gap-1.5 text-white font-bold tracking-wider text-sm">
              <span className="text-[#8A2BE2] text-xl font-display font-black">{t.hero.stat2Number}</span>
              <span className="text-[11px] text-slate-300">{t.hero.stat2Label}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating dynamic scroll indicator pointing to showcase */}
      <button
        id="scroll-down-btn"
        onClick={onExploreSolutions}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer text-slate-400 hover:text-[#00BFFF] transition-colors focus:outline-none"
      >
        <span className="text-[10px] tracking-widest uppercase font-mono">SCROLL TO DISCOVER</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}

export default Hero;
