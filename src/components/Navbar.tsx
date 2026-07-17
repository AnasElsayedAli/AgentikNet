import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
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
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, id: "about-us" },
    { name: t.nav.partners, id: "partners-section" },
    { name: t.nav.contact, id: "cta-section" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo and Brand Identity */}
        <button
          onClick={() => onNavigateTo("hero")}
          className="flex items-center gap-2.5 group cursor-pointer text-start"
          id="navbar-logo-btn"
        >
          <div className="relative shrink-0 flex items-center justify-center">
            <Logo size={42} className="transition-transform duration-500 group-hover:rotate-12 filter drop-shadow-[0_0_8px_rgba(0,191,255,0.3)]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-wider text-white flex items-center gap-1.5">
              AGENTIK <span className="text-[#00BFFF] font-light">NET</span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#8A2BE2] font-semibold -mt-1 group-hover:text-white transition-colors">
              AI INTELLECT SYSTEMS
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8" id="desktop-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigateTo(link.id)}
              className="text-slate-300 hover:text-[#00BFFF] text-sm font-medium transition-colors duration-200 cursor-pointer relative py-1.5 group font-sans"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#00BFFF] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Action Controls & Language Selector */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Elegant Language Button */}
          <button
            onClick={() => onLanguageChange(lang === "ar" ? "en" : "ar")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 hover:border-[#00BFFF]/30 bg-white/5 text-xs text-slate-300 hover:text-white font-mono transition-all duration-300 cursor-pointer"
            id="lang-switcher-desktop"
          >
            <Globe className="w-3.5 h-3.5 text-[#00BFFF]" />
            <span>{lang === "ar" ? "English" : "عربي"}</span>
          </button>

          <button
            onClick={onOpenConsultation}
            className="group px-5 py-2.5 text-xs text-white bg-white/5 font-semibold font-sans uppercase tracking-wider rounded-lg border border-white/10 hover:border-[#00BFFF]/30 hover:bg-[#00BFFF]/5 transition-all duration-300 flex items-center gap-2 relative overflow-hidden"
            id="navbar-cta-consult"
          >
            <div className="absolute -top-2/2 left-0 w-full h-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
            {t.nav.cta}
            <ArrowUpRight className="w-3.5 h-3.5 text-[#00BFFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Navigation Trigger & Language Selector */}
        <div className="lg:hidden flex items-center gap-3">
          {/* Mobile language switch */}
          <button
            onClick={() => onLanguageChange(lang === "ar" ? "en" : "ar")}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md border border-white/15 bg-white/5 text-[11px] text-slate-300 font-mono"
            id="lang-switcher-mobile"
          >
            <Globe className="w-3 h-3 text-[#00BFFF]" />
            <span>{lang === "ar" ? "EN" : "عربي"}</span>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-300 hover:text-white transition-colors"
            id="mobile-nav-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Drawer Sheet */}
      {isOpen && (
        <div
          id="mobile-navigation-menu"
          className="fixed inset-x-0 top-[73px] bg-[#050816]/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 z-40 lg:hidden flex flex-col gap-5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 text-start"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setIsOpen(false);
                  onNavigateTo(link.id);
                }}
                className="text-slate-300 hover:text-[#00BFFF] text-base font-medium py-2 transition-colors duration-200 text-start border-b border-white/5"
              >
                {link.name}
              </button>
            ))}
          </div>
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenConsultation();
            }}
            className="w-full mt-2 py-3 px-5 text-sm text-center text-black bg-[#00BFFF] font-bold rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(0,191,255,0.25)]"
            id="mobile-cta-consult"
          >
            {t.nav.cta}
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
export default Navbar;
