import { useState, ChangeEvent, FormEvent } from "react";
import { Sparkles, Mail, Facebook, Instagram, ArrowUpRight, CheckCircle, Info, Phone } from "lucide-react";
import { translations } from "../translations";

interface CTAProps {
  lang: "en" | "ar";
  isFormOpen: boolean;
  onOpenForm: () => void;
  onCloseForm: () => void;
  serviceTypeDefault?: string;
}

export function CTA({ lang, isFormOpen, onOpenForm, onCloseForm, serviceTypeDefault = "" }: CTAProps) {
  const t = translations[lang];

  // Professional contact form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: serviceTypeDefault || "",
    message: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setValidationError(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim()) {
      setValidationError(lang === "ar" ? "يرجى كتابة الاسم الكريم." : "Please specify your name.");
      return;
    }
    if (!formData.phone.trim()) {
      setValidationError(lang === "ar" ? "يرجى كتابة رقم الهاتف للتواصل." : "Please specify your phone number.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setValidationError(lang === "ar" ? "يرجى كتابة بريد إلكتروني صحيح." : "Please specify a valid email address.");
      return;
    }

    setSubmitted(true);
    setValidationError(null);

    // Save locally for persistence
    try {
      const stored = localStorage.getItem("agentik_contacts");
      const list = stored ? JSON.parse(stored) : [];
      list.push({ ...formData, id: Date.now(), timestamp: new Date().toISOString() });
      localStorage.setItem("agentik_contacts", JSON.stringify(list));
    } catch (_) {}
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
    setSubmitted(false);
    onCloseForm();
  };

  return (
    <section id="cta-section" className="py-24 px-6 lg:px-8 border-t border-white/5 relative overflow-hidden bg-gradient-to-b from-transparent to-[#040613]/80">
      
      {/* Absolute back-glow spotlights */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[400px] bg-gradient-to-t from-[#00BFFF]/10 via-[#8A2BE2]/5 to-transparent rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto glass-card rounded-3xl border border-white/5 p-8 sm:p-16 text-center relative overflow-hidden" id="cta-glass-box">
        {/* Neon glowing line on head of card layout */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent" />

        <div className="max-w-2xl mx-auto">
          <div className="inline-flex h-11 w-11 rounded-full bg-white/5 border border-white/10 items-center justify-center text-white mb-8 shadow-inner animate-pulse">
            <Sparkles className="w-5 h-5 text-[#00BFFF]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-6">
            {t.cta.title}
          </h2>

          <p className="text-slate-300 font-sans text-base sm:text-lg mb-10 leading-relaxed font-light">
            {t.cta.subtitle}
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 max-w-md mx-auto">
            <button
              id="cta-schedule-btn"
              onClick={onOpenForm}
              className="px-8 py-4 bg-[#00BFFF] text-black font-bold text-sm tracking-wide rounded-lg hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(0,191,255,0.3)]"
            >
              {lang === "ar" ? "طلب استشارة فنية" : "Request Free Consultation"}
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="mailto:anas.say3d@gmail.com"
              id="cta-contact-email-btn"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white hover:border-white/20 hover:bg-white/10 font-bold text-sm tracking-wide rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              {lang === "ar" ? "راسلنا مباشرة" : "Email Us Directly"}
            </a>
          </div>
        </div>
      </div>

      {/* PREMIUM FULL-SCREEN BLUR GLASS MODAL FORM DIALOG */}
      {isFormOpen && (
        <div
          id="consultation-modal-container"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050816]/90 backdrop-blur-xl animate-in fade-in duration-300 pointer-events-auto"
        >
          {/* Main Dialog Panel */}
          <div
            id="consultation-dialog"
            className="w-full max-w-lg bg-[#050816] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-y-auto max-h-[90vh] scrollbar-thin text-start"
          >
            {/* Top Close trigger */}
            <button
              onClick={handleResetForm}
              className={`absolute top-6 ${lang === "ar" ? "left-6" : "right-6"} text-slate-400 hover:text-white transition-colors cursor-pointer text-xs font-mono tracking-wider`}
              id="close-modal-btn"
            >
              [ {t.cta.close.toUpperCase()} ]
            </button>

            <div className="text-start">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF]" />
                <span className="text-[10px] font-mono tracking-widest text-[#00BFFF] uppercase">
                  {t.cta.badge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                {t.cta.formTitle}
              </h3>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed font-sans font-light">
                {t.cta.formSubtitle}
              </p>
            </div>

            {/* Direct Contact Action Channels */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Founder 1 Hotline */}
              <div className="flex flex-col justify-between p-4 rounded-xl bg-white/5 border border-white/5 text-start space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00BFFF]/10 flex items-center justify-center text-[#00BFFF] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">ANAS (CO-FOUNDER)</span>
                    <a href="tel:+201115366192" className="text-xs font-bold text-white block mt-0.5 hover:text-[#00BFFF] transition-colors">+201115366192</a>
                  </div>
                </div>
                <a 
                  href="https://wa.me/201115366192?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20Agentik%20Net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1.5 px-3 rounded bg-[#10B981]/10 border border-[#10B981]/30 hover:bg-[#10B981] hover:text-white transition-all text-[10px] text-[#10B981] font-bold font-mono text-center flex items-center justify-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.574 1.97 14.101.945 11.536.944c-5.448 0-9.879 4.37-9.883 9.8.001 1.945.508 3.842 1.47 5.514L2.146 21.7l5.501-1.428z" />
                  </svg>
                  <span>{lang === "ar" ? "واتساب أنس" : "WhatsApp Anas"}</span>
                </a>
              </div>

              {/* Founder 2 Hotline */}
              <div className="flex flex-col justify-between p-4 rounded-xl bg-white/5 border border-white/5 text-start space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#8A2BE2]/10 flex items-center justify-center text-[#8A2BE2] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">MODATHER (CO-FOUNDER)</span>
                    <a href="tel:+201028801508" className="text-xs font-bold text-white block mt-0.5 hover:text-[#8A2BE2] transition-colors">+201028801508</a>
                  </div>
                </div>
                <a 
                  href="https://wa.me/201028801508?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20Agentik%20Net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1.5 px-3 rounded bg-emerald-600/10 border border-emerald-500/30 hover:bg-emerald-600 hover:text-white transition-all text-[10px] text-[#10B981] font-bold font-mono text-center flex items-center justify-center gap-1.5"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.574 1.97 14.101.945 11.536.944c-5.448 0-9.879 4.37-9.883 9.8.001 1.945.508 3.842 1.47 5.514L2.146 21.7l5.501-1.428z" />
                  </svg>
                  <span>{lang === "ar" ? "واتساب مدثر" : "WhatsApp Modather"}</span>
                </a>
              </div>
            </div>

            {/* Quick message form fallback if they prefer */}
            <div className="mt-6 pt-5 border-t border-white/5 text-start">
              <span className="text-xs font-mono text-slate-400 block mb-3 uppercase tracking-wider">
                {lang === "ar" ? "أو أرسل تفاصيل مشروعك وسنتواصل معك:" : "Or send your project specifications:"}
              </span>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {validationError && (
                    <div className="p-3 bg-red-950/30 border border-red-500/30 rounded-lg text-xs text-red-300 font-mono flex items-center gap-2">
                      <Info className="w-4 h-4 shrink-0" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  <div className="space-y-3">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t.cta.name}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00BFFF] transition-all text-start"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t.cta.phone}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00BFFF] transition-all text-start"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t.cta.email}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00BFFF] transition-all text-start"
                      />
                    </div>
                    
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-[#050816] border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00BFFF] transition-all text-start"
                    >
                      <option value="">{t.cta.servicePlaceholder}</option>
                      <option value="web">{t.cta.serviceOption1}</option>
                      <option value="ai">{t.cta.serviceOption2}</option>
                      <option value="backend">{t.cta.serviceOption3}</option>
                    </select>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder={t.cta.message}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#00BFFF] transition-all text-start"
                    />
                  </div>

                  <div className="text-start text-[10px] text-slate-500 font-mono">
                    {t.cta.officeHoursLabel}: <span className="text-slate-300">{t.cta.officeHoursValue}</span>
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-4 py-2 bg-white/5 text-white hover:bg-white/10 text-xs rounded-lg transition-all cursor-pointer font-sans"
                    >
                      {t.cta.cancel}
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-[#00BFFF] text-black font-bold text-xs rounded-lg hover:bg-white transition-all cursor-pointer font-sans"
                    >
                      {t.cta.submit}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-6 bg-slate-900/40 border border-white/10 rounded-2xl text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {lang === "ar" ? "تم تسجيل بياناتك بنجاح!" : "Details Saved Successfully!"}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
                      {lang === "ar" 
                        ? "يرجى الضغط على أحد الأزرار أدناه لإرسال تفاصيل مشروعك إلينا مباشرة عبر واتساب أو البريد الإلكتروني لبدء النقاش فوراً:" 
                        : "Please click one of the buttons below to send your project details directly to us via WhatsApp or Email to start discussing immediately:"}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2.5 max-w-sm mx-auto">
                    {/* Send on WhatsApp Buttons */}
                    <a
                      href={`https://wa.me/201115366192?text=${encodeURIComponent(
                        `السلام عليكم ورحمة الله وبركاته،\n` +
                        `لقد قمت بطلب استشارة عبر موقع Agentik Net ببياناتي التالية:\n\n` +
                        `• الاسم الكريم: ${formData.name}\n` +
                        `• الهاتف: ${formData.phone}\n` +
                        `• البريد الإلكتروني: ${formData.email}\n` +
                        `• الخدمة المطلوبة: ${
                          formData.service === "web" ? "تصميم موقع ويب" :
                          formData.service === "ai" ? "تكامل ذكاء اصطناعي وأتمتة" :
                          formData.service === "backend" ? "تطوير أنظمة خلفية وقواعد بيانات" : "استشارة عامة"
                        }\n` +
                        `• تفاصيل الفكرة/المشروع:\n${formData.message || "لا توجد تفاصيل إضافية"}\n\n` +
                        `أرجو التواصل معي لمناقشة التفاصيل في أقرب وقت.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_15px_rgba(16,185,129,0.2)]"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.574 1.97 14.101.945 11.536.944c-5.448 0-9.879 4.37-9.883 9.8.001 1.945.508 3.842 1.47 5.514L2.146 21.7l5.501-1.428z" />
                      </svg>
                      <span>{lang === "ar" ? "إرسال عبر واتساب (م. أنس)" : "Send via WhatsApp (Eng. Anas)"}</span>
                    </a>

                    <a
                      href={`https://wa.me/201028801508?text=${encodeURIComponent(
                        `السلام عليكم ورحمة الله وبركاته،\n` +
                        `لقد قمت بطلب استشارة عبر موقع Agentik Net ببياناتي التالية:\n\n` +
                        `• الاسم الكريم: ${formData.name}\n` +
                        `• الهاتف: ${formData.phone}\n` +
                        `• البريد الإلكتروني: ${formData.email}\n` +
                        `• الخدمة المطلوبة: ${
                          formData.service === "web" ? "تصميم موقع ويب" :
                          formData.service === "ai" ? "تكامل ذكاء اصطناعي وأتمتة" :
                          formData.service === "backend" ? "تطوير أنظمة خلفية وقواعد بيانات" : "استشارة عامة"
                        }\n` +
                        `• تفاصيل الفكرة/المشروع:\n${formData.message || "لا توجد تفاصيل إضافية"}\n\n` +
                        `أرجو التواصل معي لمناقشة التفاصيل في أقرب وقت.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_15px_rgba(79,70,229,0.2)]"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.574 1.97 14.101.945 11.536.944c-5.448 0-9.879 4.37-9.883 9.8.001 1.945.508 3.842 1.47 5.514L2.146 21.7l5.501-1.428z" />
                      </svg>
                      <span>{lang === "ar" ? "إرسال عبر واتساب (م. مدثر)" : "Send via WhatsApp (Eng. Modather)"}</span>
                    </a>

                    {/* Send on Email Button */}
                    <a
                      href={`mailto:anas.say3d@gmail.com,modatherossama1@gmail.com?subject=${encodeURIComponent(`طلب استشارة برمجية - ${formData.name}`)}&body=${encodeURIComponent(
                        `السلام عليكم ورحمة الله وبركاته،\n\n` +
                        `لقد تم تقديم طلب استشارة برمجية عبر موقع Agentik Net بالبيانات التالية:\n\n` +
                        `- الاسم: ${formData.name}\n` +
                        `- رقم الهاتف: ${formData.phone}\n` +
                        `- البريد الإلكتروني: ${formData.email}\n` +
                        `- الخدمة المطلوبة: ${formData.service || "عامة"}\n\n` +
                        `تفاصيل المشروع:\n` +
                        `${formData.message || "لا توجد تفاصيل إضافية"}\n\n` +
                        `تحياتي،\n${formData.name}`
                      )}`}
                      className="py-3 px-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Mail className="w-4 h-4 text-[#00BFFF]" />
                      <span>{lang === "ar" ? "إرسال عبر البريد الإلكتروني" : "Send via Email"}</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleResetForm}
                      className="text-xs text-slate-500 hover:text-white transition-all font-mono"
                    >
                      [ {lang === "ar" ? "إغلاق النافذة" : "CLOSE WINDOW"} ]
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
export default CTA;
