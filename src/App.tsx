/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import NetworkCanvas from "./components/NetworkCanvas";

export default function App() {
  const [lang, setLang] = useState<"en" | "ar">("ar");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [inquiryServiceContext, setInquiryServiceContext] = useState("");

  useEffect(() => {
    // Dynamically adjust html dir and lang attribute
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const handleOpenConsultation = (serviceType = "") => {
    setInquiryServiceContext(serviceType);
    setIsFormOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsFormOpen(false);
    setInquiryServiceContext("");
  };

  const handleNavigateTo = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-[#00BFFF] selection:text-black scroll-smooth" id="agentik-root-app">
      
      {/* High-fidelity fixed background canvas nodes */}
      <NetworkCanvas />

      {/* Noise-overlay to prevent gradient banding and establish premium editorial grain */}
      <div className="noise-overlay" />

      {/* 1. Global Navigation */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenConsultation={() => handleOpenConsultation()}
        onNavigateTo={handleNavigateTo}
      />

      {/* 2. Main Hero Split */}
      <Hero
        lang={lang}
        onOpenConsultation={() => handleOpenConsultation()}
        onExploreSolutions={() => handleNavigateTo("about-us")}
      />

      {/* 3. About Us and Partners Team profiles */}
      <AboutUs lang={lang} />

      {/* 3.1 Core Expertise & Services */}
      <Services lang={lang} />

      {/* 3.2 Key Stats & Local Growth Tracker */}
      <Stats lang={lang} />

      {/* 4. Final Immersive CTA & Secured Lead Form */}
      <CTA
        lang={lang}
        isFormOpen={isFormOpen}
        onOpenForm={() => handleOpenConsultation()}
        onCloseForm={handleCloseConsultation}
        serviceTypeDefault={inquiryServiceContext}
      />

      {/* 5. Regulatory Corporate Footer map */}
      <Footer
        lang={lang}
        onNavigateTo={handleNavigateTo}
        onOpenConsultation={() => handleOpenConsultation()}
      />

    </div>
  );
}
