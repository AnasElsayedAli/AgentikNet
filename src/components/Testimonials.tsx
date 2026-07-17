import { useState } from "react";
import { Testimonial } from "../types";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const TESTIMONIALS_DATA: Testimonial[] = [
    {
      id: "1",
      name: "Marcus Vance",
      role: "VP of Digital Innovation",
      company: "Vanguard Global Logistics",
      quote: "Agentik Net has completely re-engineered our dispatch and fleet scheduling pipelines. Their custom autonomous dispatch dispatcher runs entirely on autopilot, removing 95% of administrative operational lag. The visual storytelling they brought into our management tools has set a brand new benchmark for software quality internally.",
      avatarUrl: "MV",
      ratingValue: 5
    },
    {
      id: "2",
      name: "Sarah Jenkins",
      role: "Chief Technology Officer",
      company: "Aurelius Finance Corp",
      quote: "We required SOC2-ready architecture to aggregate financial indexing endpoints for multi-million dollar hedge funds. The system Team Agentik deployed handles 50,000 queries per second without a single frame latency. Absolute world-class technical engineering. Highly recommended for any security-regulated firm.",
      avatarUrl: "SJ",
      ratingValue: 5
    },
    {
      id: "3",
      name: "Kenzo Tanaka",
      role: "VP of Product Development",
      company: "Zenith Core Interactive",
      quote: "Most software shops write code that functions but feels robotic. Agentik Net delivers software that feels like an elite Swiss watch — elegant, lightning-fast, secure, and built specifically around the human workflow. They are true frontend architects and creative systems directors.",
      avatarUrl: "KT",
      ratingValue: 5
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_DATA[activeIndex];

  return (
    <section id="testimonials" className="py-28 px-6 lg:px-8 border-t border-white/5 relative bg-[#050816]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl text-center mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#8A2BE2] uppercase block mb-3">
            VERIFIED ENDORSEMENTS &bull; CLIENT VOICE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Loved By Tech Leadership
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Leading engineering directors and VP operators trust Agentik Net to ship robust and aesthetically elite software platforms.
          </p>
        </div>

        {/* Testimonial Active Slider Box */}
        <div className="relative max-w-4xl mx-auto" id="testimonials-active-box">
          {/* Neon backlighting blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#00BFFF]/5 rounded-full filter blur-[80px] pointer-events-none" />

          <div className="glass-card rounded-3xl border border-white/5 p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between md:min-h-[360px]">
            {/* Quote SVG watermarks */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-white/5 pointer-events-none" />

            <div>
              {/* Star grading */}
              <div className="flex gap-1 mb-8">
                {[...Array(current.ratingValue)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote String text */}
              <p className="text-lg sm:text-2xl text-slate-200 font-sans font-light italic leading-relaxed text-left" id="testimonial-text-quote">
                &ldquo;{current.quote}&rdquo;
              </p>
            </div>

            {/* Client Credentials & Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-white/5 pt-8 mt-10">
              <div className="flex items-center gap-4 text-left">
                {/* Visual Circle Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#00BFFF] to-[#8A2BE2] p-[1.5px] shrink-0">
                  <div className="w-full h-full bg-[#050816] rounded-full flex items-center justify-center font-mono font-bold text-sm text-[#00BFFF]">
                    {current.avatarUrl}
                  </div>
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white" id="testimonial-user-name">
                    {current.name}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5" id="testimonial-user-role">
                    {current.role} &bull; <span className="text-[#00BFFF] font-medium">{current.company}</span>
                  </p>
                </div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex gap-2.5">
                <button
                  id="testimonial-control-prev"
                  onClick={handlePrev}
                  className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 hover:border-[#00BFFF]/30 hover:bg-[#00BFFF]/5 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  id="testimonial-control-next"
                  onClick={handleNext}
                  className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 hover:border-[#00BFFF]/30 hover:bg-[#00BFFF]/5 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
export default Testimonials;
