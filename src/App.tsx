/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoreOverview from "./components/CoreOverview";
import WebDevelopment from "./components/WebDevelopment";
import AgenticAI from "./components/AgenticAI";
import Portfolio from "./components/Portfolio";
import AboutUs from "./components/AboutUs";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import NetworkCanvas from "./components/NetworkCanvas";
import WhatsAppWidget from "./components/WhatsAppWidget";

export default function App() {
  const [lang, setLang] = useState<"en" | "ar">("en");

  const seoByLang = {
    ar: {
      title: "Agentik Net | استوديو هندسة برمجيات وتكاملات الذكاء الاصطناعي والأنظمة الوكيلة",
      description:
        "Agentik Net تبني مواقع ومنصات ويب متطورة، وتدمج وكلاء ذكاء اصطناعي (Agentic AI) وأنظمة أتمتة مخصصة للشركات الطموحة في مصر والإمارات.",
      ogLocale: "ar_AR",
    },
    en: {
      title: "Agentik Net | Production Software Engineering & Autonomous AI Systems",
      description:
        "Agentik Net engineers high-performance web applications, enterprise portals, autonomous AI agents, and workflow automation for businesses in Egypt and UAE.",
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
      link.setAttribute(rel, rel);
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

  const handleOpenConsultation = () => {
    handleNavigateTo("contact");
  };

  const handleNavigateTo = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-sky-400 selection:text-slate-950 scroll-smooth bg-[#07090E] overflow-x-hidden w-full max-w-full" id="agentik-root-app">
      
      {/* Subtle fixed background canvas nodes */}
      <NetworkCanvas />

      {/* 1. Global Navigation */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenConsultation={() => handleOpenConsultation()}
        onNavigateTo={handleNavigateTo}
      />

      {/* 2. Hero Section */}
      <Hero
        lang={lang}
        onOpenConsultation={() => handleOpenConsultation()}
        onExploreSolutions={() => handleNavigateTo("what-we-do")}
      />

      {/* 3. What the Company Does (Dual Engineering Strength) */}
      <CoreOverview
        lang={lang}
        onNavigateTo={handleNavigateTo}
      />

      {/* 4. Software & Web Development Capabilities */}
      <WebDevelopment
        lang={lang}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* 5. AI & Agentic AI Capabilities */}
      <AgenticAI
        lang={lang}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* 6. Selected Work / Portfolio (Preserving all 3 real projects) */}
      <Portfolio
        lang={lang}
      />

      {/* 7. Leadership, Founders & Why Choose Us */}
      <AboutUs
        lang={lang}
      />

      {/* 8. Quantitative Reliability & Stats */}
      <Stats
        lang={lang}
      />

      {/* 9. Contact & Primary WhatsApp Hotline */}
      <CTA lang={lang} />

      {/* 10. Regulatory Corporate Agency Footer */}
      <Footer
        lang={lang}
        onNavigateTo={handleNavigateTo}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* 11. Subtle Floating WhatsApp Quick Action (01028801508) */}
      <WhatsAppWidget
        lang={lang}
      />

    </div>
  );
}
