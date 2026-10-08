import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { ArrowUpRight, CheckCircle2, MessageCircle, AlertCircle, Clock, ShieldCheck, Mail } from "lucide-react";
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

  const officialPhone = "01028801508";
  const officialWhatsAppUrl = "https://wa.me/201028801508";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: serviceTypeDefault || "",
    message: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    if (serviceTypeDefault) {
      setFormData((prev) => ({ ...prev, service: serviceTypeDefault }));
    }
  }, [serviceTypeDefault]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setValidationError(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setValidationError(lang === "ar" ? "يرجى كتابة الاسم الكريم للمتابعة." : "Please specify your full name.");
      return;
    }
    if (!formData.phone.trim()) {
      setValidationError(lang === "ar" ? "يرجى كتابة رقم الهاتف للتواصل." : "Please provide a contact phone number.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setValidationError(lang === "ar" ? "يرجى كتابة بريد إلكتروني صحيح." : "Please enter a valid email address.");
      return;
    }

    setSubmitted(true);
    setValidationError(null);

    // Save locally
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
    setValidationError(null);
    onCloseForm();
  };

  const whatsappInquiryMessage = encodeURIComponent(
    lang === "ar"
      ? `السلام عليكم، أود طلب استشارة ومناقشة مشروع برمجي عبر موقع Agentik Net:\n\n` +
        `• الاسم: ${formData.name || "عميل محتمل"}\n` +
        `• الهاتف: ${formData.phone || "غير محدد"}\n` +
        `• البريد: ${formData.email || "غير محدد"}\n` +
        `• الخدمة: ${formData.service || "تطوير برمجيات / ذكاء اصطناعي"}\n` +
        `• التفاصيل:\n${formData.message || "أرغب في مناقشة تفاصيل المشروع مع المهندسين المؤسسين."}`
      : `Hello, I would like to request a technical consultation with Agentik Net:\n\n` +
        `• Name: ${formData.name || "Prospective Client"}\n` +
        `• Phone: ${formData.phone || "Not specified"}\n` +
        `• Email: ${formData.email || "Not specified"}\n` +
        `• Service: ${formData.service || "Software / AI Solution"}\n` +
        `• Details:\n${formData.message || "I would like to discuss our project requirements directly with the founding engineers."}`
  );

  return (
    <section id="contact" className="py-14 sm:py-20 border-b border-white/[0.08] text-start bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Founder Contacts & Primary WhatsApp Hotline */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-4">
                {t.cta.title}
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-slate-300 font-sans leading-relaxed mb-6 max-w-xl font-normal">
                {t.cta.subtitle}
              </p>

              {/* Primary Direct WhatsApp Banner */}
              <div className="rounded-xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/20 to-slate-900/60 p-5 sm:p-7 mb-8">
                <div className="flex items-center gap-3 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{lang === "ar" ? "قناة التواصل الرسمية المباشرة" : "Official WhatsApp Hotline"}</span>
                </div>

                <div className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-white tracking-tight mb-3" dir="ltr">
                  {officialPhone}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  {lang === "ar"
                    ? "تواصل فوري ومباشر مع المهندسين المؤسسين لمناقشة أبعاد مشروعك الفنية والمادية."
                    : "Connect directly with our lead architects to discuss requirements, feasibility, and deployment timelines."}
                </p>

                <a
                  href={officialWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition-colors shadow-md shadow-emerald-500/20 w-full sm:w-auto min-h-[44px] cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-slate-950" />
                  <span>{lang === "ar" ? "محادثة فورية على واتساب" : "Chat with Us on WhatsApp"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
                </a>
              </div>

              {/* Working Hours & Guarantee */}
              <div className="space-y-3 text-xs text-slate-400 pt-6 border-t border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>
                    {t.cta.officeHoursLabel}: <span className="text-slate-300 font-medium">{t.cta.officeHoursValue}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    {lang === "ar"
                      ? "نلتزم بسرية تامة لبيانات وأفكار مشروعك وتقديم استشارة تقنية شفافة."
                      : "Strict NDA compliance and transparent technical feasibility feedback."}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Consultation Request Form */}
          <div className="lg:col-span-6 w-full">
            <div className="p-5 sm:p-8 md:p-10 rounded-xl bg-slate-900/60 border border-white/[0.08] shadow-2xl">
              <div className="mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-white/[0.08]">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                  {t.cta.formTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-normal">
                  {t.cta.formSubtitle}
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {validationError && (
                    <div className="p-3 bg-red-950/40 border border-red-500/40 rounded-lg text-xs text-red-300 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{validationError}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.cta.name} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={lang === "ar" ? "الاسم الكريم أو اسم المؤسسة..." : "Your name or organization..."}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.cta.phone} *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={officialPhone}
                        className="w-full bg-slate-950 border border-slate-800 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none font-mono transition-colors"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.cta.email} *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="email@company.com"
                        className="w-full bg-slate-950 border border-slate-800 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none font-mono transition-colors"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.cta.service}
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 rounded-lg px-4 py-2.5 text-sm text-white outline-none transition-colors"
                    >
                      <option value="">{t.cta.servicePlaceholder}</option>
                      <option value="web">{t.cta.serviceOption1}</option>
                      <option value="ai">{t.cta.serviceOption2}</option>
                      <option value="backend">{t.cta.serviceOption3}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.cta.message}
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={lang === "ar" ? "أخبرنا عن أهداف مشروعك أو متطلباتك التقنية..." : "Describe your system goals, timeline, or requirements..."}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-sky-400/20"
                    >
                      <span>{t.cta.submit}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-950" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-8 text-center space-y-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div>
                    <h4 className="text-xl font-display font-bold text-white mb-2">
                      {lang === "ar" ? "تم استلام طلبك بنجاح!" : "Request Received Successfully!"}
                    </h4>
                    <p className="text-sm text-slate-300 font-sans leading-relaxed">
                      {lang === "ar"
                        ? "يمكنك الآن إرسال بيانات مشروعك مباشرة للمهندسين المؤسسين عبر واتساب لبدء النقاش الفني فوراً:"
                        : "You can now dispatch your details directly to our lead architects via WhatsApp to begin immediate technical review:"}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    <a
                      href={`https://wa.me/201028801508?text=${whatsappInquiryMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{lang === "ar" ? "متابعة فورية عبر واتساب (01028801508)" : "Dispatch to WhatsApp (01028801508)"}</span>
                    </a>
                  </div>

                  <button
                    onClick={handleResetForm}
                    className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer pt-2"
                  >
                    {t.cta.close}
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CTA;
