import { useState } from "react";
import { MessageSquare, Bot, Mail, Sparkles, HelpCircle, ArrowRight, ArrowUpRight } from "lucide-react";

interface WorkflowDemo {
  id: string;
  name: string;
  subtitle: string;
  goal: string;
  userQuery: string;
  aiOutput: string;
  howItHelps: string;
}

export function AIShowcase() {
  const [activeWorkflow, setActiveWorkflow] = useState<string>("support");

  const INTERACTIVE_FLOWS: WorkflowDemo[] = [
    {
      id: "support",
      name: "Conversational Support Helper",
      subtitle: "Automated Customer Support",
      goal: "Instantly answer frequent client inquiries with high-intent context.",
      userQuery: "What services do you offer and where are you based?",
      aiOutput: "Hello! We are Agentik Net, based in Egypt & UAE. We specialize in stunning, high-performance web design and custom Agentic AI integrations (like our Romee assistant) to streamline your workflows and automate daily tasks. Would you like to explore our portfolio or book a direct consultation with our team?",
      howItHelps: "Reduces basic client operational overhead by answering standard inquiries instantly and routing viable leads."
    },
    {
      id: "email-draft",
      name: "Contextual Email Copilot",
      subtitle: "Intelligent Communication Copilot",
      goal: "Draft professional, clear business emails in seconds.",
      userQuery: "Write a polite email to a client explaining a 2-day delay on project delivery.",
      aiOutput: "Subject: Project Timeline Update & Quality Review\n\nDear Client,\n\nWe would like to inform you that our target delivery is scheduled for two days later than originally planned. This brief extension allows our engineering team to complete a rigorous quality check on our custom Agentic integrations. We highly value your trust and appreciate your understanding.\n\nBest regards,\nAgentik Net Team",
      howItHelps: "Speeds up mundane administrative updates and minimizes template copying errors."
    },
    {
      id: "navigator",
      name: "Structured Agent Task Scheduler",
      subtitle: "Deterministic Command Parser",
      goal: "Translate abstract chat statements into automated operations.",
      userQuery: "Set a reminder for the final mock launch on Thursday at 5:00 PM.",
      aiOutput: "CRON Trigger Scheduled! [✅ Saved]\n- Event Title: Final Mock Launch\n- Target Time: Thursday, 17:00 UTC\n- Action: Trigger background push alert and calendar dispatch.",
      howItHelps: "Bridges user conversation directly with background alerts and schedulers, mirroring our Romee architecture."
    }
  ];

  const currentFlow = INTERACTIVE_FLOWS.find((f) => f.id === activeWorkflow) || INTERACTIVE_FLOWS[0];

  return (
    <section id="ai-showcase" className="py-28 px-6 lg:px-8 border-t border-white/5 relative bg-[#050816]/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16">
          <span className="text-xs font-mono tracking-widest text-[#00BFFF] uppercase block mb-3">
            GUIDING PHILOSOPHY &bull; REAL OPERATIONAL VALUE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            AI to Solve, Not to Impress
          </h2>
          <p className="text-slate-300 mt-4 max-w-2xl text-sm sm:text-base leading-relaxed font-light">
            We believe AI shouldn't just be about complex jargon or flashy, unused interfaces. True utility comes from **automating repetitive tasks, streamlining customer communication, and saving you measurable time**. Verify real-world conversational workflows in the interactive demo below:
          </p>
        </div>

        {/* Workspace Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Workflows Selectors & explanation (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left p-8 rounded-2xl glass-card border border-white/5 relative">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded bg-[#00BFFF]/10 border border-[#00BFFF]/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-[#00BFFF]" />
                </div>
                <span className="text-[11px] font-mono tracking-widest text-[#00BFFF] uppercase font-bold">
                  SELECT WORKFLOW SCENARIO
                </span>
              </div>

              <div className="space-y-3.5 mb-10">
                {INTERACTIVE_FLOWS.map((flow) => {
                  const isActive = flow.id === activeWorkflow;
                  return (
                    <button
                      key={flow.id}
                      onClick={() => setActiveWorkflow(flow.id)}
                      className={`w-full p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col ${
                        isActive
                          ? "bg-white/5 border-[#00BFFF]/30 shadow-[0_4px_15px_rgba(0,191,255,0.05)]"
                          : "bg-transparent border-transparent hover:bg-white/2"
                      }`}
                    >
                      <span className={`text-[10px] font-mono tracking-wider uppercase block ${
                        isActive ? "text-[#00BFFF] font-bold" : "text-slate-500"
                      }`}>
                        {flow.name}
                      </span>
                      <span className={`text-sm mt-1 font-sans ${
                        isActive ? "text-white font-medium" : "text-slate-300"
                      }`}>
                        {flow.subtitle}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Utility metrics explain */}
              <div className="bg-white/5 border border-white/5 p-4 rounded-xl font-mono text-xs">
                <span className="text-slate-500 block text-[9px] uppercase tracking-wider mb-2">HOW THIS HELPS CORES:</span>
                <p className="text-slate-300 font-sans text-xs leading-relaxed">
                  {currentFlow.howItHelps}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>SECURE &bull; HIGH PERFORMANCE</span>
              <span className="text-[#8A2BE2] font-bold">WORKFLOW AUTOMATION</span>
            </div>
          </div>

          {/* Playground Simulation Rendering (Right) */}
          <div className="lg:col-span-7 rounded-2xl glass-card border border-white/5 relative min-h-[380px] p-8 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00BFFF] to-transparent" />

            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6 font-mono text-[10px] text-slate-400">
              <span className="flex items-center gap-1.5 uppercase">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                INTERACTIVE ASSISTANT PREVIEW
              </span>
              <span>DEMO PREVIEW</span>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-6">
              
              {/* Query Container */}
              <div className="text-left">
                <span className="inline-block text-[10px] font-mono text-[#00BFFF] mb-1.5 uppercase font-bold">Expected User Input:</span>
                <div className="bg-white/5 border border-white/5 p-4 rounded-xl max-w-lg text-left">
                  <p className="text-white text-sm sm:text-base font-sans font-medium">
                    &quot;{currentFlow.userQuery}&quot;
                  </p>
                </div>
              </div>

              {/* Response Container */}
              <div className="text-left font-sans">
                <span className="inline-block text-[10px] font-mono text-[#8A2BE2] mb-1.5 uppercase font-bold">Agentic Output Response:</span>
                <div className="bg-gradient-to-r from-[#00BFFF]/5 to-[#8A2BE2]/5 border border-[#00BFFF]/10 p-5 rounded-xl max-w-xl text-left relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#00BFFF]/10 rounded-full filter blur-xl pointer-events-none" />
                  
                  {currentFlow.id === "email-draft" ? (
                    <pre className="text-[#00BFFF] text-xs font-mono whitespace-pre-wrap leading-relaxed text-left text-teal-300">
                      {currentFlow.aiOutput}
                    </pre>
                  ) : (
                    <p className="text-slate-200 text-sm sm:text-base leading-relaxed text-left font-light">
                      {currentFlow.aiOutput}
                    </p>
                  )}
                </div>
              </div>

            </div>

            {/* Down to earth footnote */}
            <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[10px] text-slate-500">
              <span>Goal: {currentFlow.goal}</span>
              <a
                href="mailto:agentiknet@gmail.com"
                className="text-[#00BFFF] hover:underline flex items-center gap-1 justify-end shrink-0"
              >
                Integrate custom workflows <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
export default AIShowcase;
