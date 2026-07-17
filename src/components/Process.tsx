import { useState, ReactNode } from "react";
import { MessageSquare, Code2, Rocket, ChevronRight } from "lucide-react";

interface ProcessStep {
  num: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  icon: ReactNode;
}

export function Process() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const PROCESS_STEPS: ProcessStep[] = [
    {
      num: "01",
      title: "Discover & Design",
      duration: "Weeks 1-2",
      description: "We deep-dive into your operational model, map essential user workflows, and design clean, high-fidelity responsive user interfaces.",
      deliverables: ["High-Fidelity UI/UX Prototypes", "Detailed Workflow Roadmap", "Systems Architecture Blueprint"],
      icon: <MessageSquare className="w-5 h-5 text-[#00BFFF]" />,
    },
    {
      num: "02",
      title: "Engineer & Build",
      duration: "Weeks 3-6",
      description: "We build your website or application using clean, modular TypeScript, and safely integrate custom Large Language Models and automated backends.",
      deliverables: ["Pristine, Documented Source Code", "Secure Client Proxy Gateway", "Dynamic Conversational Assistants"],
      icon: <Code2 className="w-5 h-5 text-[#8A2BE2]" />,
    },
    {
      num: "03",
      title: "Test & Deploy",
      duration: "Week 7",
      description: "Rigorous quality check and automated testing ensure ultra-fast load times, flawless responsiveness, and a smooth production launch.",
      deliverables: ["Comprehensive Testing Reports", "Edge-Optimized Live Deployment", "Ongoing Scalability Support"],
      icon: <Rocket className="w-5 h-5 text-[#00BFFF]" />,
    },
  ];

  return (
    <section id="process" className="py-28 px-6 lg:px-8 border-t border-white/5 relative bg-[#050816]/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="max-w-2xl text-left mb-16">
          <span className="text-xs font-mono tracking-widest text-[#00BFFF] uppercase block mb-3">
            HOW WE WORK &bull; CLEAR TIMELINE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Designed For High-Speed Execution
          </h2>
          <p className="text-slate-400 mt-4 text-sm leading-relaxed">
            We bypass bureaucratic delays and redundant phases. Our streamlined development pipeline ensures rapid turnaround times while maintaining pristine structural quality.
          </p>
        </div>

        {/* Modular horizontal scrollbar on desktops, cards on mobile */}
        <div id="process-steps-timeline" className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-4 lg:pb-0 mb-10 scrollbar-thin snap-x snap-mandatory">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={step.num}
                id={`process-tab-${step.num}`}
                onClick={() => setActiveStep(idx)}
                className={`w-[260px] lg:w-auto shrink-0 snap-start p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[160px] ${
                  isActive
                    ? "bg-[#00BFFF]/5 border-[#00BFFF]/30 shadow-[0_4px_25px_rgba(0,191,255,0.06)]"
                    : "bg-white/5 border-white/5 hover:border-white/10 hover:bg-white/1"
                }`}
              >
                {/* Active marker point glow */}
                {isActive && (
                  <span className="absolute top-3.5 right-3.5 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00BFFF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00BFFF]"></span>
                  </span>
                )}

                <div className="flex items-center justify-between">
                  <span className={`font-mono text-sm font-bold ${isActive ? "text-[#00BFFF]" : "text-slate-500"}`}>
                    {step.num}
                  </span>
                  <div className={`p-2 rounded-lg border ${
                    isActive ? "bg-[#00BFFF]/10 border-[#00BFFF]/20" : "bg-white/3 border-white/5"
                  }`}>
                    {step.icon}
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-display font-bold text-base text-white">{step.title}</h3>
                  <span className="text-xs font-mono tracking-wide text-slate-400 mt-1 block">{step.duration}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Timeline detailed inspection board */}
        <div className="glass-card rounded-2xl border border-white/5 p-8 relative overflow-hidden" id="process-spec-viewer">
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#8A2BE2]/5 rounded-full filter blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            {/* Left spec descriptions */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3.5 mb-4">
                <span className="text-sm font-mono text-[#00BFFF] bg-[#00BFFF]/10 border border-[#00BFFF]/20 px-2.5 py-1 rounded">
                  STEP {PROCESS_STEPS[activeStep].num}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  EXPECTED DURATION: {PROCESS_STEPS[activeStep].duration}
                </span>
              </div>
              
              <h4 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                {PROCESS_STEPS[activeStep].title}
              </h4>
              
              <p className="text-slate-300 font-sans text-sm leading-relaxed">
                {PROCESS_STEPS[activeStep].description}
              </p>
            </div>

            {/* Right deliverables list panel */}
            <div className="lg:col-span-5 bg-white/5 border border-white/5 rounded-xl p-6">
              <span className="text-[10px] tracking-widest font-mono text-[#8A2BE2] uppercase font-bold block mb-4">
                KEY DELIVERABLES
              </span>
              <ul className="space-y-3">
                {PROCESS_STEPS[activeStep].deliverables.map((del, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 font-mono">
                    <ChevronRight className="w-3.5 h-3.5 text-[#00BFFF] mt-0.5 shrink-0" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
export default Process;
