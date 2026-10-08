import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Globe, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { translations } from "../translations";

interface NavbarProps {
  lang: "en" | "ar";
  onLanguageChange: (lang: "en" | "ar") => void;
  onOpenConsultation: () => void;
  onNavigateTo: (sectionId: string) => void;
}

export function Navbar({ lang, onLanguageChange, onOpenConsultation, onNavigateTo }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: t.nav.webDev || (lang === "ar" ? "تطوير البرمجيات" : "Software & Web"), id: "software-engineering" },
    { name: t.nav.aiAgents || (lang === "ar" ? "الأنظمة الذكية" : "Agentic AI"), id: "agentic-ai" },
    { name: t.nav.partners, id: "portfolio" },
    { name: t.nav.about, id: "about-us" },
    { name: t.nav.contact, id: "contact" },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigateTo(id);
  };

  const whatsappUrl = "https://wa.me/201028801508";

  return (
    <header
      id="main-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07090E]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3.5"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Mark */}
          <button
            onClick={() => onNavigateTo("hero")}
            className="flex items-center gap-3 cursor-pointer text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg group"
            id="navbar-logo-btn"
            aria-label="Agentik Net"
          >
            <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Logo size={36} />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl text-white tracking-tight" dir="ltr">
                Agentik<span className="text-sky-400">Net</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase -mt-0.5 hidden sm:block">
                Software & AI Studio
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wide font-medium text-slate-300" id="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="hover:text-white transition-colors cursor-pointer py-1.5 relative group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 inset-x-0 h-0.5 bg-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-200" />
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switch */}
            <button
              onClick={() => onLanguageChange(lang === "ar" ? "en" : "ar")}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white border border-white/[0.08] hover:border-white/20 rounded-lg transition-all cursor-pointer bg-white/[0.02]"
              id="lang-switcher-desktop"
              aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
            >
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span>{lang === "ar" ? "English" : "العربية"}</span>
            </button>

            {/* Direct WhatsApp Action */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-200 hover:text-white border border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-500/10 hover:bg-emerald-500/20 rounded-lg transition-all cursor-pointer"
              title="WhatsApp: 01028801508"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono text-[11px]" dir="ltr">01028801508</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 active:bg-sky-500 rounded-lg transition-all cursor-pointer shadow-sm shadow-sky-500/20 whitespace-nowrap"
              id="navbar-cta-consult"
            >
              <span>{t.nav.cta}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
            </button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => onLanguageChange(lang === "ar" ? "en" : "ar")}
              className="min-h-[42px] px-3 py-2 text-xs font-semibold text-slate-200 border border-white/[0.12] rounded-lg hover:text-white bg-slate-900/60 active:bg-slate-800 transition-colors flex items-center justify-center cursor-pointer"
              id="lang-switcher-mobile"
              aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
            >
              <Globe className="w-3.5 h-3.5 me-1.5 text-sky-400" />
              <span>{lang === "ar" ? "EN" : "عربي"}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 text-slate-300 hover:text-white cursor-pointer min-w-[42px] min-h-[42px] flex items-center justify-center rounded-lg border border-white/[0.12] bg-slate-900/80 active:bg-slate-800 transition-colors"
              id="mobile-nav-toggle"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#07090E]/98 border-b border-white/[0.08] backdrop-blur-2xl px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3 pb-6 border-b border-white/[0.08]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-start py-2.5 px-3 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/[0.04] transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="pt-6 space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[44px] px-4 py-2.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>{lang === "ar" ? "واتساب المباشر: 01028801508" : "Official WhatsApp: 01028801508"}</span>
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenConsultation();
              }}
              className="w-full min-h-[44px] px-4 py-2.5 rounded-lg bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-sky-500/20"
            >
              <span>{t.nav.cta}</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
