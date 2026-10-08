import { Facebook, Instagram, ArrowUpRight, MessageCircle } from "lucide-react";
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

  const officialPhone = "01028801508";
  const officialWhatsApp = "https://wa.me/201028801508";

  const servicesLinks = [
    { name: lang === "ar" ? "تطبيقات الويب والمتاجر الإلكترونية" : "Web Apps & E-Commerce", id: "software-engineering" },
    { name: lang === "ar" ? "وكلاء الذكاء الاصطناعي الذاتيون" : "Autonomous AI Agents", id: "agentic-ai" },
    { name: lang === "ar" ? "الأنظمة الخلفية وقواعد البيانات" : "Backend & PostgreSQL Architecture", id: "software-engineering" },
    { name: lang === "ar" ? "أتمتة العمليات التشغيلية (Workflows)" : "Agentic Business Automation", id: "agentic-ai" },
  ];

  const companyLinks = [
    { name: lang === "ar" ? "الرئيسية" : "Home", id: "hero" },
    { name: lang === "ar" ? "تطوير البرمجيات والويب" : "Software & Web", id: "software-engineering" },
    { name: lang === "ar" ? "أنظمة الذكاء الاصطناعي" : "Agentic AI", id: "agentic-ai" },
    { name: lang === "ar" ? "أعمالنا ومشاريعنا" : "Selected Work", id: "portfolio" },
    { name: lang === "ar" ? "فريق العمل والمؤسسون" : "About & Leadership", id: "about-us" },
    { name: lang === "ar" ? "تواصل معنا" : "Contact", id: "contact" },
  ];

  return (
    <footer id="footer" className="bg-[#05070B] border-t border-white/[0.08] pt-12 pb-8 px-4 sm:px-6 lg:px-8 text-start font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Main 4-Column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-8 border-b border-white/[0.08]">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 flex flex-col items-start gap-3">
            <button
              onClick={() => onNavigateTo("hero")}
              className="flex items-center gap-3 cursor-pointer text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg group"
              id="footer-logo-btn"
              aria-label="Agentik Net"
            >
              <div className="shrink-0 transition-transform duration-200 group-hover:scale-105">
                <Logo size={32} />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight" dir="ltr">
                Agentik<span className="text-sky-400">Net</span>
              </span>
            </button>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm mt-2 font-normal">
              {t.footer.desc}
            </p>

            {/* Social channels */}
            <div className="flex items-center gap-2 mt-4">
              <a
                href="https://www.facebook.com/agentiknet"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/[0.08] bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com/agentiknet/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-white/[0.08] bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="lg:col-span-3 text-start">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              {lang === "ar" ? "الخدمات الهندسية" : "Solutions"}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigateTo(link.id)}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-start py-0.5"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div className="lg:col-span-2 text-start">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.links}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigateTo(link.id)}
                    className="text-slate-400 hover:text-white transition-colors cursor-pointer text-start py-0.5"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Official Hotline */}
          <div className="lg:col-span-3 text-start">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              {t.footer.contact}
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-400 block mb-1">
                  {lang === "ar" ? "الرقم الرسمي وواتساب" : "Official WhatsApp Hotline"}
                </span>
                <a
                  href={officialWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-emerald-400 font-bold font-mono text-base inline-flex items-center gap-2 transition-colors"
                  dir="ltr"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>{officialPhone}</span>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={officialWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-medium transition-colors"
                >
                  <span>{lang === "ar" ? "محادثة فورية على واتساب" : "Chat on WhatsApp"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p className="text-center sm:text-start">
            &copy; {currentYear} {t.footer.allRightsReserved}
          </p>
          <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px]">
            <span>Egypt · UAE</span>
            <span aria-hidden="true">·</span>
            <span dir="ltr">WhatsApp: {officialPhone}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
