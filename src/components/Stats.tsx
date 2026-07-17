import { Users, ShieldCheck, Activity } from "lucide-react";
import { translations } from "../translations";

interface StatsProps {
  lang: "en" | "ar";
}

export function Stats({ lang }: StatsProps) {
  const t = translations[lang];

  const statCards = [
    {
      icon: <Users className="w-6 h-6 text-[#00BFFF]" />,
      count: t.stats.merchantsCount,
      label: t.stats.merchantsLabel,
      sub: t.stats.merchantsSub,
      accentGlow: "shadow-[0_0_50px_-12px_rgba(0,191,255,0.15)]",
      borderAccent: "group-hover:border-[#00BFFF]/30"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#8A2BE2]" />,
      count: t.stats.deliveryCount,
      label: t.stats.deliveryLabel,
      sub: t.stats.deliverySub,
      accentGlow: "shadow-[0_0_50px_-12px_rgba(138,43,226,0.15)]",
      borderAccent: "group-hover:border-[#8A2BE2]/30"
    },
    {
      icon: <Activity className="w-6 h-6 text-[#FF1493]" />,
      count: t.stats.uptimeCount,
      label: t.stats.uptimeLabel,
      sub: t.stats.uptimeSub,
      accentGlow: "shadow-[0_0_50px_-12px_rgba(255,20,147,0.15)]",
      borderAccent: "group-hover:border-[#FF1493]/30"
    }
  ];

  return (
    <section id="stats" className="relative py-24 sm:py-32 overflow-hidden border-t border-white/5 bg-[#050816]">
      {/* Absolute visual gradient backdrops */}
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] bg-[#FF1493]/3 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-[#00BFFF]/3 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="max-w-3xl text-start mb-20">
          <span className="text-xs font-mono tracking-widest text-[#00BFFF] uppercase block mb-3">
            {t.stats.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            {t.stats.title}
          </h2>
          <p className="text-slate-400 mt-4 text-base leading-relaxed font-light">
            {t.stats.desc}
          </p>
        </div>

        {/* ================= STATS NUMBERS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statCards.map((stat, idx) => (
            <div 
              key={idx}
              className={`group relative p-8 rounded-2xl bg-white/3 border border-white/5 transition-all duration-300 overflow-hidden text-start flex flex-col justify-between ${stat.borderAccent} ${stat.accentGlow}`}
            >
              {/* Subtle light sweep */}
              <div className="absolute -top-1/2 left-0 w-full h-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 pointer-events-none" />

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-5xl sm:text-6xl font-display font-black text-white tracking-tight">
                    {stat.count}
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans font-light">
                    {stat.sub}
                  </p>
                </div>
              </div>

              {/* Glowing decorative indicator */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;
