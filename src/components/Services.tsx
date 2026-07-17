import { Zap, Layers, HelpCircle } from "lucide-react";
import { translations } from "../translations";

interface ServicesProps {
  lang: "en" | "ar";
}

export function Services({ lang }: ServicesProps) {
  const t = translations[lang];

  const serviceItems = [
    {
      icon: <Zap className="w-8 h-8 text-[#00BFFF]" />,
      title: t.services.rapidTitle,
      desc: t.services.rapidDesc,
      glow: "group-hover:border-[#00BFFF]/30",
      accentBg: "bg-[#00BFFF]/10"
    },
    {
      icon: <Layers className="w-8 h-8 text-[#8A2BE2]" />,
      title: t.services.fullstackTitle,
      desc: t.services.fullstackDesc,
      glow: "group-hover:border-[#8A2BE2]/30",
      accentBg: "bg-[#8A2BE2]/10"
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-[#FF1493]" />,
      title: t.services.consultingTitle,
      desc: t.services.consultingDesc,
      glow: "group-hover:border-[#FF1493]/30",
      accentBg: "bg-[#FF1493]/10"
    }
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden border-t border-white/5 bg-[#030014]">
      {/* Absolute visual gradient backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8A2BE2]/5 rounded-full filter blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="max-w-3xl text-start mb-20">
          <span className="text-xs font-mono tracking-widest text-[#8A2BE2] uppercase block mb-3">
            {t.services.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            {t.services.title}
          </h2>
          <p className="text-slate-400 mt-4 text-base leading-relaxed font-light">
            {t.services.desc}
          </p>
        </div>

        {/* ================= SERVICES CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-2xl bg-white/3 border border-white/5 transition-all duration-300 overflow-hidden flex flex-col justify-between text-start ${service.glow}`}
            >
              {/* Subtle light sweep */}
              <div className="absolute -top-1/2 left-0 w-full h-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 pointer-events-none" />

              <div className="space-y-6">
                <div className={`w-14 h-14 rounded-xl ${service.accentBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  {service.icon}
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-display font-extrabold text-white tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans font-light">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Decorative side accent lines */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
