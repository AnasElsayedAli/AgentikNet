import { Mail, Phone, ArrowUpRight, Facebook, Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { translations } from "../translations";

interface FooterProps {
  lang: "en" | "ar";
  onNavigateTo: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export function Footer({ lang, onNavigateTo, onOpenConsultation }: FooterProps) {
  const t = translations[lang];
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { 
      name: lang === "ar" ? "تصميم المواقع الاحترافية" : "Responsive Web Apps", 
      id: "hero" 
    },
    { 
      name: lang === "ar" ? "تكامل الذكاء الاصطناعي" : "AI model Integrations", 
      id: "hero" 
    },
    { 
      name: lang === "ar" ? "عملاء الذكاء الاصطناعي (Agents)" : "Autonomous AI Agents", 
      id: "hero" 
    },
    { 
      name: lang === "ar" ? "أتمتة العمليات البرمجية" : "Process Automation", 
      id: "hero" 
    },
  ];

  const companyLinks = [
    { name: lang === "ar" ? "الرئيسية" : "Home", id: "hero" },
    { name: lang === "ar" ? "من نحن" : "About Us", id: "about-us" },
    { name: lang === "ar" ? "المشاريع الحالية" : "Active Partners", id: "partners-section" },
    { name: lang === "ar" ? "تواصل معنا" : "Contact", id: "cta-section" },
  ];

  const contactInfo = [
    { 
      label: lang === "ar" ? "أنس (مؤسس)" : "ANAS (CO-FOUNDER)", 
      val: "+201115366192",
      email: "anas.say3d@gmail.com"
    },
    { 
      label: lang === "ar" ? "مدثر (مؤسس)" : "MODATHER (CO-FOUNDER)", 
      val: "+201028801508",
      email: "modatherossama1@gmail.com"
    },
    { 
      label: lang === "ar" ? "الموقع" : "LOCATION", 
      val: lang === "ar" ? "مصر والإمارات العربية المتحدة" : "Egypt & UAE" 
    },
  ];

  return (
    <footer id="footer" className="bg-[#050816] border-t border-white/5 pt-20 pb-10 px-6 lg:px-8 text-start relative z-10 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4 text-start">
            <button
              onClick={() => onNavigateTo("hero")}
              className="flex items-center gap-2.5 group cursor-pointer text-start focus:outline-none"
              id="footer-logo-btn"
            >
              <div className="relative shrink-0 flex items-center justify-center">
                <Logo size={38} className="transition-transform duration-500 group-hover:rotate-12 filter drop-shadow-[0_0_6px_rgba(0,191,255,0.3)]" />
              </div>
              <div className="flex flex-col text-start">
                <span className="font-display font-bold text-base tracking-wider text-white">
                  AGENTIK <span className="text-[#00BFFF] font-light">NET</span>
                </span>
                <span className="text-[8px] font-mono tracking-widest text-[#8A2BE2] font-semibold -mt-1">
                  AI INTELLIGENT SYSTEMS
                </span>
              </div>
            </button>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mt-3">
              {t.footer.desc}
            </p>

            {/* Social Icons group */}
            <div className="flex gap-2.5 mt-4">
              <a
                href="https://www.facebook.com/agentiknet"
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-[#00BFFF]/30 hover:bg-[#00BFFF]/5 flex items-center justify-center transition-all cursor-pointer"
                id="footer-social-fb"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/agentiknet/"
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-[#00BFFF]/30 hover:bg-[#00BFFF]/5 flex items-center justify-center transition-all cursor-pointer"
                id="footer-social-ig"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services tree */}
          <div className="lg:col-span-2 text-start">
            <h4 className="text-[10px] tracking-widest font-mono text-white uppercase font-bold mb-5">
              {lang === "ar" ? "حلولنا الذكية" : "SOLUTIONS TREE"}
            </h4>
            <ul className="space-y-3 font-mono text-xs">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigateTo(link.id)}
                    className="text-slate-400 hover:text-[#00BFFF] transition-colors cursor-pointer block py-0.5 text-start"
                    id={`footer-solutions-link-${idx}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Corporate Info */}
          <div className="lg:col-span-2 text-start">
            <h4 className="text-[10px] tracking-widest font-mono text-white uppercase font-bold mb-5">
              {t.footer.links}
            </h4>
            <ul className="space-y-3 font-mono text-xs">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigateTo(link.id)}
                    className="text-slate-400 hover:text-[#00BFFF] transition-colors cursor-pointer block py-0.5 text-start"
                    id={`footer-company-link-${idx}`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Core metrics */}
          <div className="lg:col-span-4 text-start">
            <h4 className="text-[10px] tracking-widest font-mono text-white uppercase font-bold mb-5">
              {t.footer.contact}
            </h4>
            <div className="space-y-4 text-xs font-mono">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="text-start">
                  <span className="text-[9px] text-slate-500 block leading-none mb-1 uppercase">
                    {info.label}
                  </span>
                  {info.email ? (
                    <div className="flex flex-col gap-0.5">
                      <a href={`tel:${info.val}`} className="text-slate-300 hover:text-[#00BFFF] transition-colors font-semibold">{info.val}</a>
                      <a href={`mailto:${info.email}`} className="text-slate-400 hover:text-[#00BFFF] transition-colors text-[10px]">{info.email}</a>
                    </div>
                  ) : (
                    <span className="text-slate-300 font-semibold">{info.val}</span>
                  )}
                </div>
              ))}
              <button
                onClick={onOpenConsultation}
                className="mt-2 py-2 px-4 rounded bg-[#00BFFF]/10 border border-[#00BFFF]/20 text-[10px] font-bold text-[#00BFFF] hover:bg-[#00BFFF] hover:text-black hover:border-transparent transition-all flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
                id="footer-inbound-consultation"
              >
                {lang === "ar" ? "احجز استشارة برمجية مجانية" : "Book Free Diagnostic Consultation"} <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Dynamic Legal & Copyright Line footer */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500 text-start">
          <div>
            <span>&copy; {currentYear} Agentik Net. {t.footer.allRightsReserved}</span>
          </div>
          <div className="flex gap-6">
          </div>
        </div>

      </div>
    </footer>
  );
}
export default Footer;
