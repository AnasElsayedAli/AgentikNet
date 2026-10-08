import { MessageCircle } from "lucide-react";

interface WhatsAppWidgetProps {
  lang: "en" | "ar";
}

export function WhatsAppWidget({ lang }: WhatsAppWidgetProps) {
  const whatsappUrl = "https://wa.me/201028801508";
  const phone = "01028801508";

  return (
    <div className="fixed bottom-6 end-6 z-40 print:hidden">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold shadow-xl shadow-emerald-500/25 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label={lang === "ar" ? "تواصل معنا عبر واتساب: 01028801508" : "Contact us on WhatsApp: 01028801508"}
      >
        <MessageCircle className="w-5 h-5 text-slate-950 shrink-0" />
        <span className="text-xs font-mono font-bold tracking-tight hidden sm:inline" dir="ltr">
          {phone}
        </span>
        <span className="text-xs font-medium pe-0.5 sm:hidden">
          {lang === "ar" ? "واتساب" : "WhatsApp"}
        </span>
      </a>
    </div>
  );
}

export default WhatsAppWidget;
