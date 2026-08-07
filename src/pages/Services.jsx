import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Eye,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export default function Services() {
  const aiCapabilities = [
    [BrainCircuit, "LLM Applications", "Enterprise copilots, intelligent assistants, domain-specific applications and multimodal experiences."],
    [Database, "RAG & Knowledge", "Secure retrieval systems that connect language models to trusted enterprise information."],
    [Bot, "AI Agents", "Goal-driven agents that coordinate tools, data and multi-step workflows with appropriate controls."],
    [Network, "Machine Learning", "Prediction, classification, recommendations, anomaly detection and decision-support models."],
    [Eye, "Computer Vision", "Image, video and document intelligence integrated into real operational workflows."],
    [Workflow, "AI Automation", "Intelligent process automation combining models, business rules, APIs and human review."],
  ];

  const enterpriseSolutions = [
    {
      title: "AI CRM",
      statement: "Turn customer systems into intelligent growth platforms.",
      items: ["Lead scoring and opportunity intelligence", "Sales and service copilots", "Automated follow-up workflows", "Customer sentiment and churn signals", "Conversational customer experiences"],
    },
    {
      title: "AI ERP",
      statement: "Bring prediction and intelligence into core operations.",
      items: ["Demand and inventory forecasting", "Finance and procurement intelligence", "Operational anomaly detection", "Document and approval automation", "Enterprise decision support"],
    },
  ];

  const engineering = [
    [Code2, "Software Engineering", "AI-native products, enterprise applications, SaaS platforms, APIs and mobile experiences."],
    [Database, "Data Engineering", "AI-ready data foundations, pipelines, retrieval systems, analytics and governed enterprise knowledge."],
    [Cloud, "Cloud Engineering", "Secure cloud architecture, AI infrastructure, DevOps, deployment automation and observability."],
    [ShieldCheck, "Security Engineering", "Security-first architecture and AI-assisted capabilities for detection, investigation and response."],
  ];

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">AI solutions & engineering</p>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-[4.7rem] leading-[1.03] tracking-[-0.045em] font-semibold">
              Engineer intelligence into your business.
            </h1>
            <p className="mt-7 text-xl lg:text-[1.3rem] leading-relaxed text-slate-600 max-w-3xl">
              From LLM applications and machine-learning systems to intelligent CRM, ERP and cybersecurity, Sicada builds AI capabilities that become part of real software and real operations.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/contact" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 font-semibold transition-colors">Discuss an AI initiative <ArrowRight size={18} /></a>
              <a href="#capabilities" className="inline-flex items-center gap-3 border border-slate-400 hover:border-slate-950 px-7 py-4 font-semibold">Explore capabilities</a>
            </div>
          </div>
          <div className="lg:col-span-4 lg:border-l lg:border-slate-200 lg:pl-10 self-end">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Built around outcomes</p>
            <div className="mt-6 space-y-5 text-lg">
              {["Create new AI products", "Modernize existing software", "Automate complex workflows", "Use enterprise data with LLMs", "Improve security operations"].map((item) => (
                <div key={item} className="flex gap-3"><CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={19} /><span>{item}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">AI engineering</p>
              <h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-tight">From models to production systems.</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">We combine model capabilities with software architecture, enterprise data, security, evaluation and human-centered product design.</p>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200">
            {aiCapabilities.map(([Icon, title, text]) => (
              <article key={title} className="border-r border-b border-slate-200 p-8 lg:p-10 min-h-[285px]">
                <Icon className="text-blue-600" size={32} />
                <h3 className="mt-10 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="enterprise-ai" className="bg-slate-50 border-y border-slate-200 py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">AI CRM & ERP</p>
          <div className="mt-5 grid lg:grid-cols-12 gap-10 items-end">
            <h2 className="lg:col-span-7 text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">Enterprise systems designed to make better decisions.</h2>
            <p className="lg:col-span-5 text-lg text-slate-600 leading-relaxed">Sicada can build new intelligent platforms or integrate AI capabilities into the systems an organization already depends on.</p>
          </div>

          <div className="mt-14 grid lg:grid-cols-2 border-t border-l border-slate-300">
            {enterpriseSolutions.map((solution) => (
              <article key={solution.title} className="bg-white border-r border-b border-slate-300 p-8 lg:p-12">
                <div className="flex items-center justify-between gap-6">
                  <h3 className="text-3xl font-semibold">{solution.title}</h3>
                  <Building2 className="text-blue-600" size={30} />
                </div>
                <p className="mt-5 text-xl text-slate-600">{solution.statement}</p>
                <div className="mt-9 divide-y divide-slate-200 border-t border-slate-200">
                  {solution.items.map((item) => <div key={item} className="py-4 flex gap-3"><CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={19} /><span>{item}</span></div>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cybersecurity" className="bg-slate-950 text-white py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-wide">AI cybersecurity</p>
            <h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-tight">Security systems that can help teams see more and respond faster.</h2>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">AI can augment security teams by identifying patterns across high-volume signals, prioritizing investigation and assisting controlled response workflows.</p>
            <a href="/contact" className="mt-8 inline-flex items-center gap-2 text-blue-400 font-semibold">Discuss security engineering <ArrowRight size={18} /></a>
          </div>
          <div className="lg:col-span-7 border border-white/10">
            {[
              ["Detection", "Threat, behavior and anomaly detection across relevant operational signals."],
              ["Analysis", "AI-assisted log intelligence, correlation, summarization and investigation support."],
              ["Prioritization", "Context-aware triage designed to help teams focus on meaningful risk."],
              ["Response", "Controlled workflows that combine automation, security rules and human review."],
            ].map(([title, text], index) => (
              <div key={title} className={`grid sm:grid-cols-12 gap-5 p-7 lg:p-8 ${index ? "border-t border-white/10" : ""}`}>
                <div className="sm:col-span-4 text-xl font-semibold text-white">{title}</div>
                <p className="sm:col-span-8 text-slate-300 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Engineering foundation</p>
              <h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">AI backed by serious software engineering.</h2>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 border-t border-l border-slate-200">
              {engineering.map(([Icon, title, text]) => (
                <div key={title} className="border-r border-b border-slate-200 p-8 min-h-[260px]">
                  <Icon className="text-blue-600" size={30} />
                  <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
                  <p className="mt-4 text-slate-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200 py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Delivery model</p>
          <h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em] max-w-4xl">A disciplined path from business problem to production AI.</h2>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-300">
            {[
              ["01", "Discover", "Business outcome, workflow, data, constraints and success criteria."],
              ["02", "Architect", "Experience, model strategy, system design, security and evaluation."],
              ["03", "Build", "Software, integrations, AI workflows, testing and production hardening."],
              ["04", "Improve", "Observability, feedback, model evaluation, optimization and scaling."],
            ].map(([num, title, text]) => (
              <div key={title} className="bg-white border-r border-b border-slate-300 p-8 min-h-[260px]">
                <span className="text-sm text-blue-700 font-semibold">{num}</span>
                <h3 className="mt-10 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-20 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">Where could AI create an advantage in your business?</h2>
            <p className="mt-4 text-lg text-blue-50 max-w-3xl">We can help define the opportunity, architecture and path to a dependable production system.</p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a href="/contact" className="inline-flex items-center gap-3 bg-white text-slate-950 px-7 py-4 font-semibold hover:bg-slate-100 transition-colors">Talk to our team <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>
    </main>
  );
}