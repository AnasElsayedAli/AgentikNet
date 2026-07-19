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

  const seoByLang = {
    ar: {
      title: "Agentik Net | تطوير مواقع ودمج ذكاء اصطناعي وأتمتة أعمال",
      description:
        "Agentik Net تبني مواقع ويب احترافية وتكاملات ذكاء اصطناعي وأنظمة أتمتة مخصصة للشركات في مصر والإمارات.",
      ogLocale: "ar_AR",
    },
    en: {
      title: "Agentik Net | AI Solutions, Web Development, and Automation",
      description:
        "Agentik Net delivers custom web development, AI agent integration, backend engineering, and workflow automation for businesses in Egypt and UAE.",
      ogLocale: "en_US",
    },
  } as const;

  const upsertMeta = (attr: "name" | "property", key: string, value: string) => {
    let meta = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute(attr, key);
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", value);
  };

  const upsertLink = (rel: string, href: string, hreflang?: string) => {
    const selector = hreflang
      ? `link[rel="${rel}"][hreflang="${hreflang}"]`
      : `link[rel="${rel}"]:not([hreflang])`;

    let link = document.head.querySelector(selector);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      if (hreflang) {
        link.setAttribute("hreflang", hreflang);
      }
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  };

  useEffect(() => {
    // Dynamically adjust html dir and lang attribute
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;

    const currentSeo = seoByLang[lang];
    const pageUrl = window.location.origin + window.location.pathname;

    document.title = currentSeo.title;
    upsertMeta("name", "description", currentSeo.description);
    upsertMeta("property", "og:title", currentSeo.title);
    upsertMeta("property", "og:description", currentSeo.description);
    upsertMeta("property", "og:url", pageUrl);
    upsertMeta("property", "og:locale", currentSeo.ogLocale);
    upsertMeta("name", "twitter:title", currentSeo.title);
    upsertMeta("name", "twitter:description", currentSeo.description);

    upsertLink("canonical", pageUrl);
    upsertLink("alternate", pageUrl, "x-default");
    upsertLink("alternate", pageUrl, "en");
    upsertLink("alternate", pageUrl, "ar");
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
