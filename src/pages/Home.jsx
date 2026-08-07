import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Factory,
  Hospital,
  Landmark,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export default function Home() {
  const capabilities = [
    {
      number: "01",
      title: "AI & LLM Engineering",
      text: "Production applications built with large language models, RAG, intelligent agents, enterprise knowledge and multimodal AI.",
      icon: BrainCircuit,
    },
    {
      number: "02",
      title: "AI CRM Solutions",
      text: "Customer platforms with lead intelligence, sales copilots, predictive insights, automated follow-ups and service automation.",
      icon: Building2,
    },
    {
      number: "03",
      title: "AI ERP Solutions",
      text: "Intelligent operations with forecasting, process automation, procurement insights, finance intelligence and decision support.",
      icon: Workflow,
    },
    {
      number: "04",
      title: "AI Cybersecurity",
      text: "AI-assisted threat detection, anomaly analysis, security intelligence, incident triage and modern security operations workflows.",
      icon: ShieldCheck,
    },
  ];

  const industries = [
    {
      icon: Hospital,
      title: "Healthcare",
      text: "Intelligent clinical workflows, document intelligence, operational analytics and secure healthcare applications.",
    },
    {
      icon: Landmark,
      title: "Financial Services",
      text: "Risk intelligence, fraud analysis, document automation and AI-enabled customer experiences.",
    },
    {
      icon: Factory,
      title: "Manufacturing",
      text: "Predictive operations, computer vision, supply-chain intelligence and connected enterprise systems.",
    },
    {
      icon: Building2,
      title: "Enterprise",
      text: "AI copilots, knowledge systems, CRM and ERP intelligence, workflow automation and custom platforms.",
    },
  ];

  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <p className="text-sm font-semibold text-blue-700 tracking-wide uppercase">AI-first software engineering</p>
              <h1 className="mt-6 text-[3.2rem] sm:text-6xl lg:text-[4.7rem] leading-[1.02] tracking-[-0.045em] font-semibold max-w-4xl">Build what&apos;s next with AI.</h1>
              <p className="mt-7 text-xl lg:text-[1.35rem] leading-relaxed text-slate-600 max-w-2xl">Sicada designs and engineers AI-powered applications, intelligent CRM and ERP platforms, machine-learning systems and AI-assisted cybersecurity solutions for modern enterprises.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="/services" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 font-semibold transition-colors">Explore AI solutions <ArrowRight size={18} /></a>
                <a href="/contact" className="inline-flex items-center gap-3 border border-slate-400 hover:border-slate-950 px-7 py-4 font-semibold transition-colors">Talk to our team <ArrowRight size={18} /></a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-slate-950 text-white p-7 lg:p-9 border border-slate-800">
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <div>
                    <p className="text-blue-400 text-xs uppercase tracking-[0.18em] font-semibold">Sicada intelligence architecture</p>
                    <h2 className="mt-2 text-2xl font-semibold">AI across the enterprise</h2>
                  </div>
                  <Network className="text-blue-400" size={30} />
                </div>

                <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10">
                  {["CRM", "ERP", "Applications", "Security"].map((item) => <div key={item} className="bg-slate-950 px-4 py-5 text-center text-sm font-medium text-slate-200">{item}</div>)}
                </div>

                <div className="flex justify-center py-4"><div className="h-8 w-px bg-blue-500" /></div>

                <div className="border border-blue-500/50 bg-blue-500/5 p-6">
                  <div className="flex items-center gap-3">
                    <BrainCircuit className="text-blue-400" size={28} />
                    <div>
                      <p className="text-xs text-blue-400 uppercase tracking-wider font-semibold">Intelligence layer</p>
                      <p className="mt-1 font-semibold">LLMs · RAG · Agents · Machine Learning · Vision</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center py-4"><div className="h-8 w-px bg-slate-600" /></div>

                <div className="grid sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
                  {["Enterprise Data", "Cloud & APIs", "Security & Governance"].map((item) => <div key={item} className="bg-slate-950 px-4 py-5 text-center text-sm text-slate-300">{item}</div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 border-b border-slate-200 pb-16">
            <div className="lg:col-span-4"><p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">What we engineer</p></div>
            <div className="lg:col-span-8">
              <h2 className="text-4xl lg:text-6xl tracking-[-0.035em] leading-[1.08] font-semibold max-w-5xl">AI is not an add-on. It is becoming part of the software architecture.</h2>
              <p className="mt-7 text-xl text-slate-600 leading-relaxed max-w-3xl">We help organizations move from AI ideas to dependable products by combining software engineering, machine learning, LLM architecture, enterprise data and secure cloud infrastructure.</p>
            </div>
          </div>

          <div className="divide-y divide-slate-200">
            {capabilities.map(({ number, title, text, icon: Icon }) => (
              <div key={title} className="grid lg:grid-cols-12 gap-6 lg:gap-10 py-10 lg:py-12 items-start group">
                <div className="lg:col-span-1 text-sm text-slate-400 font-semibold">{number}</div>
                <div className="lg:col-span-1"><Icon className="text-blue-600" size={30} /></div>
                <h3 className="lg:col-span-4 text-2xl lg:text-3xl font-semibold tracking-tight">{title}</h3>
                <p className="lg:col-span-5 text-lg leading-relaxed text-slate-600">{text}</p>
                <div className="lg:col-span-1 lg:text-right"><ArrowRight className="inline text-blue-600 transition-transform group-hover:translate-x-1" size={22} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enterprise-ai" className="bg-slate-50 border-y border-slate-200 py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Enterprise AI</p>
            <h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-tight">Bring intelligence into the systems your business already runs on.</h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">Modernize existing products or build new AI-native platforms without losing sight of reliability, security, usability and measurable business value.</p>
            <a href="/contact" className="mt-8 inline-flex items-center gap-2 text-blue-700 font-semibold">Discuss your AI roadmap <ArrowRight size={18} /></a>
          </div>

          <div className="lg:col-span-7 bg-white border border-slate-200">
            {[
              ["AI CRM", "Sales copilots, lead intelligence, customer analytics, service automation and predictive engagement."],
              ["AI ERP", "Forecasting, finance intelligence, procurement insights, inventory optimization and workflow automation."],
              ["AI Applications", "Custom copilots, agents, RAG systems, intelligent search and domain-specific software."],
              ["AI Integration", "Connect models and intelligence to existing SaaS, mobile apps, APIs, internal tools and enterprise platforms."],
            ].map(([title, text], index) => <div key={title} className={`grid sm:grid-cols-12 gap-5 p-7 lg:p-9 ${index ? "border-t border-slate-200" : ""}`}><div className="sm:col-span-4 font-semibold text-xl">{title}</div><p className="sm:col-span-8 text-slate-600 leading-relaxed">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section id="cybersecurity" className="bg-slate-950 text-white py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-wide">AI + Cybersecurity</p>
            <h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-tight">Intelligence for modern security operations.</h2>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">We engineer AI-assisted security capabilities that help teams identify unusual behavior, understand risk and accelerate investigation and response.</p>
          </div>
          <div className="lg:col-span-7 border border-white/10">
            {["Threat and anomaly detection", "Security analytics and log intelligence", "AI-assisted incident triage", "Fraud and suspicious behavior analysis", "Security copilots and response workflows"].map((item, index) => <div key={item} className={`flex items-center gap-5 p-6 lg:p-7 ${index ? "border-t border-white/10" : ""}`}><span className="text-blue-400 text-sm font-semibold">0{index + 1}</span><span className="text-lg font-medium">{item}</span></div>)}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7"><p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Industries</p><h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">AI engineered around real industry workflows.</h2></div>
            <div className="lg:col-span-5 lg:text-right"><a href="/industries" className="inline-flex items-center gap-2 text-blue-700 font-semibold">Explore industries <ArrowRight size={18} /></a></div>
          </div>
          <div className="mt-14 grid md:grid-cols-2 border-t border-l border-slate-200">
            {industries.map(({ icon: Icon, title, text }) => <div key={title} className="p-8 lg:p-10 border-r border-b border-slate-200 min-h-[260px]"><Icon className="text-blue-600" size={32} /><h3 className="mt-10 text-2xl font-semibold">{title}</h3><p className="mt-4 text-slate-600 leading-relaxed max-w-xl">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200 py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5"><p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Beyond the API</p><h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">AI engineering requires more than connecting a model.</h2></div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10">
            {["Model selection & architecture", "RAG & enterprise knowledge", "Agent orchestration", "Machine-learning pipelines", "Evaluation & guardrails", "Data engineering", "Security & governance", "Cloud deployment & observability"].map((item) => <div key={item} className="flex gap-3 py-5 border-b border-slate-300"><CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={20} /><span className="font-medium">{item}</span></div>)}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">How we work</p>
          <h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em] max-w-3xl">From AI opportunity to production system.</h2>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200">
            {[["01", "Discover", "Understand the workflow, users, data and business outcome."], ["02", "Design", "Define architecture, model strategy, security and experience."], ["03", "Engineer", "Build, integrate, evaluate and harden the production system."], ["04", "Operate", "Deploy, observe, improve and scale with real usage."]].map(([number, title, text]) => <div key={title} className="p-8 border-r border-b border-slate-200 min-h-[250px]"><span className="text-sm text-blue-700 font-semibold">{number}</span><h3 className="mt-10 text-2xl font-semibold">{title}</h3><p className="mt-4 text-slate-600 leading-relaxed">{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-20 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8"><p className="text-blue-100 font-semibold text-sm uppercase tracking-wide">Build with Sicada</p><h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">Have an AI product or transformation idea?</h2><p className="mt-4 text-lg text-blue-50 max-w-3xl">Talk to us about AI applications, intelligent CRM and ERP, machine learning, LLM systems or AI-assisted cybersecurity.</p></div>
          <div className="lg:col-span-4 lg:text-right"><a href="/contact" className="inline-flex items-center gap-3 bg-white text-slate-950 px-7 py-4 font-semibold hover:bg-slate-100 transition-colors">Start a conversation <ArrowRight size={18} /></a></div>
        </div>
      </section>
    </main>
  );
}