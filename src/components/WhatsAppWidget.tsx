import { MessageCircle } from "lucide-react";

interface WhatsAppWidgetProps {
  lang: "en" | "ar";
}

export function WhatsAppWidget({ lang }: WhatsAppWidgetProps) {
  const whatsappUrl = "https://wa.me/201028801508";

  return (
    <div className="fixed bottom-6 end-6 z-40 print:hidden">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-slate-950 shadow-xl shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:bg-emerald-400 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
        aria-label={lang === "ar" ? "تواصل معنا عبر واتساب" : "Contact us on WhatsApp"}
      >
        <MessageCircle className="w-5 h-5 text-slate-950 shrink-0" />
      </a>
    </div>
  );
}

export default WhatsAppWidget;
