import { ArrowRight, BookOpen, BrainCircuit, Building2, ShieldCheck, Workflow } from "lucide-react";

export default function Insights() {
  const articles = [
    [BrainCircuit, "LLM Engineering", "RAG vs fine-tuning: choosing the right pattern for enterprise AI", "A practical look at when retrieval, model adaptation or a hybrid approach makes sense."],
    [Workflow, "AI Agents", "Where AI agents fit—and where traditional automation is still better", "How to decide whether a workflow really needs agentic behavior or a simpler deterministic system."],
    [Building2, "AI CRM", "What an AI-native CRM should actually do", "Beyond chatbots: lead intelligence, contextual assistance, predictive signals and workflow automation."],
    [Building2, "AI ERP", "How AI can augment ERP without destabilizing core operations", "Patterns for adding intelligence around forecasting, anomaly detection and decision support."],
    [ShieldCheck, "AI Cybersecurity", "Using AI in security operations without losing human control", "A framework for combining detection, summarization and response assistance with governance."],
    [BookOpen, "Enterprise AI", "From prototype to production: the systems AI projects often forget", "Evaluation, observability, security, data quality and product experience determine whether AI becomes useful software."],
  ];

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Insights</p>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.03] tracking-[-0.045em] font-semibold">Practical thinking on AI, ML, LLMs and enterprise software.</h1>
            <p className="mt-7 text-xl text-slate-600 leading-relaxed max-w-3xl">Sicada&apos;s perspective on building, integrating and governing intelligent systems in real organizations.</p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 border-t border-l border-slate-200">
            {articles.map(([Icon, category, title, description]) => (
              <article key={title} className="border-r border-b border-slate-200 p-8 lg:p-10 min-h-[340px] flex flex-col">
                <div className="flex items-center gap-3 text-blue-700"><Icon size={24} /><span className="text-xs uppercase tracking-wider font-semibold">{category}</span></div>
                <h2 className="mt-9 text-2xl font-semibold tracking-tight leading-snug">{title}</h2>
                <p className="mt-4 text-slate-600 leading-relaxed flex-1">{description}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-slate-400 font-medium">Article coming soon <ArrowRight size={16} /></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200 py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5"><p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Editorial direction</p><h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">Teach the market. Don&apos;t just promote services.</h2></div>
          <div className="lg:col-span-7 text-lg text-slate-600 leading-relaxed space-y-5"><p>Insights should become Sicada&apos;s technical credibility layer: clear explanations of AI architecture, machine learning, LLMs, enterprise adoption, data, security and software engineering.</p><p>When articles are ready, each card can become a dedicated SEO-friendly article page without changing the visual system.</p></div>
        </div>
      </section>

      <section className="bg-blue-600 text-white"><div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-20 grid lg:grid-cols-12 gap-8 items-center"><div className="lg:col-span-8"><h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">Have an AI question tied to a real business problem?</h2><p className="mt-4 text-lg text-blue-50">Talk to the Sicada team about the architecture, feasibility and path to production.</p></div><div className="lg:col-span-4 lg:text-right"><a href="/contact" className="inline-flex items-center gap-3 bg-white text-slate-950 px-7 py-4 font-semibold hover:bg-slate-100">Start a conversation <ArrowRight size={18} /></a></div></div></section>
    </main>
  );
}