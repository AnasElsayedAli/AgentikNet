import { Mail, Phone, GraduationCap, Brain } from "lucide-react";
import { translations } from "../translations";

interface AboutUsProps {
  lang: "en" | "ar";
}

export function AboutUs({ lang }: AboutUsProps) {
  const t = translations[lang];

  const team = [
    {
      id: "anas",
      name: lang === "ar" ? "أنس" : "Anas",
      role: lang === "ar" ? "شريك مؤسس ومهندس أنظمة خلفية" : "Co-Founder & Backend Engineer",
      education: lang === "ar" ? "بكالوريوس علوم الحاسب ونظم المعلومات" : "B.Sc. in Computer & Information Sciences",
      specialization: lang === "ar" ? "معمارية الأنظمة الذكية والعملاء المستقلين" : "AI & Agentic Systems Architecture",
      phone: "+201115366192",
      email: "anas.say3d@gmail.com",
      avatarSvg: (
        <img 
          src="/WhatsApp Image 2026-07-17 at 10.31.02 PM.jpeg" 
          className="w-full h-full object-cover select-none pointer-events-none" 
          alt="Anas Portrait" 
          referrerPolicy="no-referrer"
        />
      )
    },
    {
      id: "modather",
      name: lang === "ar" ? "مدثر" : "Modather",
      role: lang === "ar" ? "شريك مؤسس ومهندس أنظمة خلفية" : "Co-Founder & Backend Engineer",
      education: lang === "ar" ? "بكالوريوس علوم الحاسب ونظم المعلومات" : "B.Sc. in Computer & Information Sciences",
      specialization: lang === "ar" ? "معمارية الأنظمة الذكية والعملاء المستقلين" : "AI & Agentic Systems Architecture",
      phone: "+201028801508",
      email: "modatherossama1@gmail.com",
      avatarSvg: (
        <img 
          src="/WhatsApp Image 2026-07-18 at 2.48.52 AM.jpeg"
          className="w-full h-full object-cover select-none pointer-events-none" 
          alt="Modather Portrait" 
          referrerPolicy="no-referrer"
        />
      )
    }
  ];

  const partners = [
    {
      name: "Atlantic International Corporation",
      logo: (
        <img 
          src="/Screenshot 2026-07-17 235343.png" 
          className="w-full h-full object-cover select-none pointer-events-none" 
          alt="Atlantic International Corporation Logo" 
          referrerPolicy="no-referrer"
        />
      ),
      taglineAr: "الشركة الدولية الأطلسية للمنتجات الصناعية والصيانة",
      taglineEn: "Industrial Maintenance & Service Solutions",
      description: lang === "ar" 
        ? "تعتبر الشركة الدولية الأطلسية (Atlantic International Corporation) واحدة من المؤسسات الرائدة المتخصصة في تقديم وتوريد منتجات الصيانة الصناعية الفائقة وتأمين الدعم الميداني والتقني للمصانع والمنشآت." 
        : "Atlantic International Corporation is a recognized leader in specialized industrial maintenance supplies and technical services across all operational facilities."
    },
    {
      name: "Tarek Helal Co.",
      logo: (
        <img 
          src="/WhatsApp Image 2026-07-17 at 10.31.27 PM.jpeg" 
          className="w-full h-full object-cover select-none pointer-events-none" 
          alt="Tarek Helal Co. Logo" 
          referrerPolicy="no-referrer"
        />
      ),
      taglineAr: "شركة طارق هلال لاستيراد وتصدير وتجهيز صالونات التجميل والحلاقة",
      taglineEn: "Cosmetic & Professional Salon Supplies",
      description: lang === "ar" 
        ? "مؤسسة رائدة في قطاع التجارة الدولية والاستيراد والتصدير لجميع مستلزمات وتجهيزات مراكز التجميل الاحترافية وصالونات الحلاقة بأحدث المعدات والأدوات العالمية." 
        : "Tarek Helal Co. is an established premium importer and exporter of professional salon hardware and high-performance beauty equipment."
    }
  ];

  return (
    <section id="about-us" className="relative py-24 sm:py-32 overflow-hidden border-t border-white/5 bg-[#050816]">
      {/* Absolute visual gradient backdrops */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#00BFFF]/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#8A2BE2]/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="max-w-3xl text-start mb-20">
          <span className="text-xs font-mono tracking-widest text-[#00BFFF] uppercase block mb-3">
            {t.about.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            {t.about.title}
          </h2>
          <p className="text-slate-400 mt-4 text-base leading-relaxed font-light">
            {t.about.desc}
          </p>
        </div>

        {/* ================= MEET THE TEAM SECTION ================= */}
        <div className="mb-28">
          <h3 className="text-lg font-mono tracking-widest text-slate-400 uppercase mb-10 pb-3 border-b border-white/5 flex items-center gap-2 text-start">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] animate-pulse" />
            {lang === "ar" ? "الفريق البرمجي" : "The Core Engineering Team"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {team.map((member) => (
              <div 
                key={member.id}
                className="group relative flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-2xl bg-white/3 border border-white/5 hover:border-[#00BFFF]/30 transition-all duration-300 overflow-hidden"
              >
                {/* Subtle light sweep */}
                <div className="absolute -top-1/2 left-0 w-full h-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
                
                {/* Profile Photo / Avatar - fully static */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 bg-slate-950/40 border border-white/10 flex items-center justify-center self-start sm:self-center select-none pointer-events-none">
                  {member.avatarSvg}
                </div>

                {/* Member Info details */}
                <div className="flex-1 flex flex-col justify-between space-y-4 text-start">
                  <div>
                    <h4 className="text-2xl font-display font-extrabold text-white tracking-tight flex items-center gap-2">
                      {member.name}
                      <span className="text-[10px] font-mono font-medium text-[#00BFFF] bg-[#00BFFF]/10 px-2 py-0.5 rounded-full">
                        {t.about.founderLabel}
                      </span>
                    </h4>
                    <p className="text-xs font-mono text-[#8A2BE2] font-semibold mt-1">
                      {member.role}
                    </p>
                    
                    {/* Education and Specialization */}
                    <div className="mt-4 space-y-2 text-xs text-slate-300 font-sans font-light">
                      <div className="flex items-center gap-2.5">
                        <GraduationCap className="w-4 h-4 text-slate-500 shrink-0" />
                        <span><strong>{t.about.eduLabel}:</strong> {member.education}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Brain className="w-4 h-4 text-slate-500 shrink-0" />
                        <span><strong>{t.about.specLabel}:</strong> {member.specialization}</span>
                      </div>
                    </div>
                  </div>

                  {/* Clean Contact Details Panel */}
                  <div className="pt-4 border-t border-white/5 grid grid-cols-1 gap-2 text-[11px] font-mono">
                    <a 
                      href={`mailto:${member.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-slate-400 hover:text-[#00BFFF] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#00BFFF]/60" />
                      <span>{member.email}</span>
                    </a>
                    <a 
                      href={`tel:${member.phone}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-slate-400 hover:text-[#00BFFF] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#00BFFF]/60" />
                      <span>{member.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Premium bio brief card */}
          <div className="mt-8 p-6 rounded-xl bg-[#00BFFF]/5 border border-[#00BFFF]/10 text-start max-w-4xl">
            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <span>{t.about.bioTitle}</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {t.about.bioText}
            </p>
          </div>
        </div>

        {/* ================= ACTIVE PARTNERS & PROJECTS SECTION ================= */}
        <div id="partners-section">
          <h3 className="text-lg font-mono tracking-widest text-slate-400 uppercase mb-10 pb-3 border-b border-white/5 flex items-center gap-2 text-start">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8A2BE2] animate-pulse" />
            {t.partners.badge}
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partners.map((partner, idx) => (
              <div 
                key={idx}
                className="group relative flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-2xl bg-white/3 border border-white/5 hover:border-[#8A2BE2]/30 transition-all duration-300 overflow-hidden text-start"
              >
                {/* Subtle light sweep */}
                <div className="absolute -top-1/2 left-0 w-full h-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
                
                {/* Logo Area - Static, small and fixed size */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 bg-slate-950/40 border border-white/10 flex items-center justify-center self-start sm:self-center select-none pointer-events-none">
                  {partner.logo}
                </div>

                {/* Text descriptions */}
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-wider text-[#00BFFF] uppercase font-bold block">
                      {t.partners.activeProject}
                    </span>
                    <h4 className="text-xl font-display font-extrabold text-white">
                      {partner.name}
                    </h4>
                    <p className="text-xs font-mono text-slate-400">
                      {partner.taglineEn} <br />
                      <span className="text-[#8A2BE2] font-semibold">{partner.taglineAr}</span>
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed font-sans font-light">
                      {partner.description}
                    </p>
                  </div>

                  {/* Badge showing production focus */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span>{t.partners.statusLabel}</span>
                    <span className="text-[#00BFFF] font-bold">{t.partners.statusValue}</span>
                  </div>
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
