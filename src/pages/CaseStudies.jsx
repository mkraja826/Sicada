import { ArrowRight, BrainCircuit, Building2, ShieldCheck, Workflow } from "lucide-react";

export default function CaseStudies() {
  const studies = [
    {
      icon: BrainCircuit,
      label: "Enterprise knowledge",
      title: "Designing a secure RAG assistant for internal knowledge",
      challenge: "Employees need faster access to policies, procedures and operational documents without exposing sensitive information to uncontrolled systems.",
      approach: "A governed retrieval architecture with permission-aware access, enterprise search, LLM orchestration, evaluation and human review.",
      outcome: "A production pattern for trusted internal AI assistance that can be adapted to different enterprise environments.",
    },
    {
      icon: Building2,
      label: "AI CRM",
      title: "Adding intelligence to customer and sales workflows",
      challenge: "Customer data exists across multiple systems, while sales teams spend time interpreting activity, prioritizing leads and preparing follow-ups.",
      approach: "Unify relevant CRM signals, add scoring and summarization, introduce a sales copilot and automate selected workflows with clear controls.",
      outcome: "A blueprint for an AI-enabled CRM experience centered on better prioritization, context and workflow efficiency.",
    },
    {
      icon: Workflow,
      label: "AI ERP",
      title: "Bringing predictive intelligence into enterprise operations",
      challenge: "Operational decisions depend on disconnected reports and manual analysis across inventory, procurement and finance processes.",
      approach: "Create an AI-ready data layer, forecasting services, operational alerts and decision-support experiences integrated with existing systems.",
      outcome: "An architecture for augmenting ERP workflows with prediction, anomaly detection and intelligent recommendations.",
    },
    {
      icon: ShieldCheck,
      label: "AI cybersecurity",
      title: "Augmenting security operations with intelligent analysis",
      challenge: "Security teams must review large volumes of logs and alerts while maintaining human control over investigation and response.",
      approach: "Combine anomaly detection, log summarization, contextual triage and controlled response workflows with auditable human checkpoints.",
      outcome: "A practical model for using AI to assist—not replace—security operations teams.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Case studies</p>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.03] tracking-[-0.045em] font-semibold">How AI can become part of real enterprise systems.</h1>
            <p className="mt-7 text-xl text-slate-600 leading-relaxed max-w-3xl">These solution studies illustrate Sicada&apos;s engineering approach across AI applications, CRM, ERP and cybersecurity. They are architecture examples—not claims about unnamed clients or invented results.</p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 space-y-20">
          {studies.map(({ icon: Icon, label, title, challenge, approach, outcome }, index) => (
            <article key={title} className="grid lg:grid-cols-12 gap-10 border-t border-slate-300 pt-10">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3 text-blue-700"><Icon size={24} /><span className="text-sm font-semibold uppercase tracking-wide">{label}</span></div>
                <div className="mt-8 text-sm text-slate-400 font-semibold">0{index + 1}</div>
                <h2 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-[-0.03em] leading-tight">{title}</h2>
              </div>
              <div className="lg:col-span-8 grid md:grid-cols-3 border-t border-l border-slate-200">
                {[["Challenge", challenge], ["Approach", approach], ["Outcome", outcome]].map(([heading, body]) => (
                  <div key={heading} className="border-r border-b border-slate-200 p-7 lg:p-8">
                    <h3 className="font-semibold text-lg">{heading}</h3>
                    <p className="mt-4 text-slate-600 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 text-white py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8"><h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">Have a real project we can turn into the next case study?</h2><p className="mt-5 text-lg text-slate-300 max-w-3xl">Once real client outcomes are approved for publication, these architecture studies can be replaced or supplemented with verified project stories.</p></div>
          <div className="lg:col-span-4 lg:text-right"><a href="/contact" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-7 py-4 font-semibold">Discuss your project <ArrowRight size={18} /></a></div>
        </div>
      </section>
    </main>
  );
}