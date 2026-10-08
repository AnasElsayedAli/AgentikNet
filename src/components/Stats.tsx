import { Users, ShieldCheck, Activity, Terminal } from "lucide-react";
import { translations } from "../translations";

interface StatsProps {
  lang: "en" | "ar";
}

export function Stats({ lang }: StatsProps) {
  const t = translations[lang];

  const stats = [
    {
      icon: <Users className="w-5 h-5 text-sky-400" />,
      count: t.stats.merchantsCount,
      label: t.stats.merchantsLabel,
      sub: t.stats.merchantsSub,
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      count: t.stats.deliveryCount,
      label: t.stats.deliveryLabel,
      sub: t.stats.deliverySub,
    },
    {
      icon: <Activity className="w-5 h-5 text-blue-400" />,
      count: t.stats.uptimeCount,
      label: t.stats.uptimeLabel,
      sub: t.stats.uptimeSub,
    },
  ];

  return (
    <section id="stats" className="py-14 sm:py-20 border-b border-white/[0.08] text-start bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            {t.stats.title}
          </h2>
          <p className="text-slate-300 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            {t.stats.desc}
          </p>
        </div>

        {/* 3-Column Proof Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/[0.08] bg-slate-900/40 p-5 sm:p-6 lg:p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-300"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-white/[0.08] flex items-center justify-center mb-4 sm:mb-5">
                  {stat.icon}
                </div>

                <div className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight tabular-nums mb-2 sm:mb-3">
                  {stat.count}
                </div>

                <h3 className="text-base sm:text-lg font-display font-bold text-slate-100 tracking-tight mb-2">
                  {stat.label}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {stat.sub}
                </p>
              </div>

              <div className="pt-4 mt-5 sm:pt-6 sm:mt-6 border-t border-white/[0.06] text-[11px] font-mono text-slate-500">
                VERIFIED ARCHITECTURE
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stats;
