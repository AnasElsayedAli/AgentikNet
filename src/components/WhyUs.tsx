import { useState, ReactNode } from "react";
import { Sliders, Zap, ShieldAlert, Layers, Flame, LifeBuoy, CheckCircle, BarChart, Server, Cpu } from "lucide-react";

interface WhyUsItem {
  id: string;
  title: string;
  tagline: string;
  icon: ReactNode;
  desc: string;
  metrics: { label: string; value: string; progress: number }[];
  technicalSpecs: string[];
}

export function WhyUs() {
  const [activeTab, setActiveTab] = useState<string>("solutions");

  const WHY_US_ITEMS: WhyUsItem[] = [
    {
      id: "solutions",
      title: "Tailored Solutions",
      tagline: "Custom-Fit to your Operational Model",
      icon: <Sliders className="w-5 h-5 text-[#00BFFF]" />,
      desc: "Our software isn't recycled. We build tailored platforms specifically molded around your team's distinct operational quirks, removing bloat and solving the exact performance bottlenecks holding your growth back.",
      metrics: [
        { label: "Operational Alignment", value: "COMPLETE", progress: 100 },
        { label: "Unused Clutter Code", value: "DELETED", progress: 0 },
      ],
      technicalSpecs: ["Multi-Tenant SaaS isolation", "Custom-coded Core APIs", "Localized data structures"],
    },
    {
      id: "architecture",
      title: "Scalable Architecture",
      tagline: "Decoupled structures for heavy requests",
      icon: <Layers className="w-5 h-5 text-[#8A2BE2]" />,
      desc: "Prepare for high-volume spikes. Our decoupled microservice pipelines scale automatically across Kubernetes or Cloud Run, guaranteeing seamless performance and sub-100ms request handovers.",
      metrics: [
        { label: "Throughput Limit", value: "HIGH CAPACITY", progress: 95 },
        { label: "Handovers Latency", value: "OPTIMIZED", progress: 90 },
      ],
      technicalSpecs: ["Docker & Kubernetes Orchestration", "Edge Redis caching", "Optimized database schemas"],
    },
    {
      id: "expertise",
      title: "AI Expertise",
      tagline: "Leading LLMs utilized natively",
      icon: <Cpu className="w-5 h-5 text-[#00BFFF]" />,
      desc: "Work directly with AI engineers who have integrated machine learning inside massive corporate software. We know when to call a model, when to rely on heuristics, and how to execute fine-tuned local models to protect budget.",
      metrics: [
        { label: "Model Utilization Efficiency", value: "HIGH EFFICIENCY", progress: 85 },
        { label: "RAG Retrieval Speed", value: "VECTOR MATCH", progress: 92 },
      ],
      technicalSpecs: ["Native Google Gemini 2.5/Flash APIs", "Highly advanced Vector indexes", "Token billing control filters"],
    },
    {
      id: "security",
      title: "Enterprise Security",
      tagline: "Fortified digital security barriers",
      icon: <ShieldAlert className="w-5 h-5 text-[#8A2BE2]" />,
      desc: "Protect confidential information. We design secure pipelines incorporating fine-grained user permission matrix grids, OAuth protocols, and state-of-the-art secure data encryption standard rules.",
      metrics: [
        { label: "Encryption Grade", value: "AES-256", progress: 100 },
        { label: "Compliance Index", value: "SOC2 READY", progress: 98 },
      ],
      technicalSpecs: ["SSL/TLS with SHA-256 encoding", "JSON Web Tokens with automated rotate", "Restricted VPC access parameters"],
    },
    {
      id: "development",
      title: "Fast Development",
      tagline: "Agile modular delivery cycles",
      icon: <Flame className="w-5 h-5 text-[#00BFFF]" />,
      desc: "Market windows shrink fast. Our modern code frameworks, automated CI/CD staging branches, and visual boilerplate layers permit our engineers to deploy fully test-validated suites in half the standard cycle duration.",
      metrics: [
        { label: "Delivery Duration Ratio", value: "ACCELERATED", progress: 95 },
        { label: "Deployment Reliability", value: "CONTINUOUS", progress: 99 },
      ],
      technicalSpecs: ["Automated Playwright test logic", "Instant Vercel / Cloud Run deploys", "Continuous linear feedback loops"],
    },
    {
      id: "support",
      title: "Long-Term Support",
      tagline: "Direct support from our core engineers",
      icon: <LifeBuoy className="w-5 h-5 text-[#8A2BE2]" />,
      desc: "We don't hand over files and disappear. Enjoy direct support arrangements with the exact engineering team that built your software, ensuring rapid updates, API version upgrades, and ongoing expansions.",
      metrics: [
        { label: "Incident Resolution Rate", value: "RAPID SUPPORT", progress: 90 },
        { label: "NPS Customer Rating", value: "EXPERT QUALITY", progress: 100 },
      ],
      technicalSpecs: ["Direct developer communication channels", "Automated system logging notifications", "Periodic code audit reviews"],
    },
  ];

  const selectedData = WHY_US_ITEMS.find((item) => item.id === activeTab) || WHY_US_ITEMS[0];

  return (
    <section id="why-us" className="py-28 px-6 lg:px-8 border-t border-white/5 relative bg-[#050816]/50">
      <div className="max-w-7xl mx-auto">
        <span className="text-xs font-mono tracking-widest text-[#8A2BE2] uppercase block mb-3 text-center">
          OUR DIFFERENTIATORS &bull; WHY AGENTIK NET
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight text-center mb-4">
          Built For Real Quality & Utility
        </h2>
        <p className="text-slate-400 max-w-2xl text-center mx-auto mb-16 text-sm">
          Our software products prioritize pristine design precision, realistic utility, and lightning-fast speed. Explore our standards in custom web designs and intelligent agentic integrations.
        </p>

        {/* Layout split: 6 indicators on left, Interactive visual live-reloading panel on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column Controls */}
          <div className="lg:col-span-5 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-3 pb-4 lg:pb-0 scrollbar-thin snap-x snap-mandatory">
            {WHY_US_ITEMS.map((item) => {
              const isActive = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  id={`why-us-tab-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-[260px] lg:w-full shrink-0 snap-start p-4 rounded-xl border flex items-center gap-4 cursor-pointer text-left transition-all duration-300 ${
                    isActive
                      ? "bg-white/5 border-[#00BFFF]/30 shadow-[0_5px_15px_rgba(0,191,255,0.06)]"
                      : "bg-transparent border-white/5 hover:border-white/10 hover:bg-white/2"
                  }`}
                >
                  <div className={`p-2.5 rounded-lg border ${
                    isActive ? "bg-[#00BFFF]/10 border-[#00BFFF]/30" : "bg-white/5 border-white/5"
                  }`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-white">{item.title}</h3>
                    <p className="text-xs text-[#00BFFF]/70 mt-0.5 font-mono">{item.tagline}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Premium, Clean Details Card */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-2xl glass-card border border-white/5 relative overflow-hidden" id="why-us-visual-monitor">
            {/* Top glass lighting effect */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#00BFFF]/5 rounded-full filter blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-8">
              <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-[#00BFFF]" />
                FEATURE HIGHLIGHT
              </span>
              <div className="text-[9px] text-[#00BFFF] font-mono border border-[#00BFFF]/20 bg-[#00BFFF]/5 px-2 py-0.5 rounded uppercase">
                {selectedData.title}
              </div>
            </div>

            {/* Core Description Text */}
            <div className="text-left flex-1 flex flex-col justify-center">
              <h4 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-3">
                {selectedData.title}
              </h4>
              <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed mb-8">
                {selectedData.desc}
              </p>
            </div>

            {/* Detailed specs footer showing bullet loops */}
            <div className="bg-slate-900/40 border border-white/5 rounded-xl p-5 text-left">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-3.5 font-bold">
                CORE CAPABILITIES INCLUDED
              </span>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedData.technicalSpecs.map((spec, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <CheckCircle className="w-4 h-4 text-[#00BFFF] shrink-0" />
                    <span>{spec}</span>
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
export default WhyUs;
