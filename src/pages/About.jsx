import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Globe2,
  Lightbulb,
  Network,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

export default function About() {
  const principles = [
    [Lightbulb, "Practical innovation", "We apply AI, ML and modern software engineering where they create a clear operational or product advantage."],
    [ShieldCheck, "Responsible engineering", "Security, governance, reliability and human oversight are considered from architecture through operation."],
    [Users, "Long-term partnership", "We work with clients as an engineering partner, from early discovery through production and continuous improvement."],
  ];

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">About Sicada Digital</p>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-[4.6rem] leading-[1.03] tracking-[-0.045em] font-semibold">
              Engineering intelligent systems for modern enterprises.
            </h1>
            <p className="mt-7 text-xl lg:text-[1.3rem] text-slate-600 leading-relaxed max-w-3xl">
              Sicada Digital is an AI-first software engineering company focused on building applications, CRM and ERP platforms, machine-learning systems and cybersecurity solutions that bring intelligence into real business workflows.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/services" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 font-semibold transition-colors">Explore our capabilities <ArrowRight size={18} /></a>
              <a href="/contact" className="inline-flex items-center gap-3 border border-slate-400 hover:border-slate-950 px-7 py-4 font-semibold">Talk to our team</a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950 text-white p-8 lg:p-10 border border-slate-800">
            <BrainCircuit className="text-blue-400" size={38} />
            <h2 className="mt-8 text-3xl font-semibold tracking-tight">AI expertise connected to software delivery.</h2>
            <div className="mt-9 divide-y divide-white/10 border-y border-white/10">
              {["AI & LLM engineering", "AI CRM & ERP solutions", "Machine learning & automation", "AI-assisted cybersecurity", "Cloud, data & software engineering"].map((item) => (
                <div key={item} className="py-4 flex items-center gap-3">
                  <CheckCircle2 className="text-blue-400 shrink-0" size={19} />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Who we are</p>
            <h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-tight">A technology company built around intelligent software.</h2>
          </div>
          <div className="lg:col-span-8 space-y-7 text-lg lg:text-xl text-slate-600 leading-relaxed max-w-4xl">
            <p>We help organizations identify where AI can create value, design the right architecture, and turn that strategy into dependable software used by real teams and customers.</p>
            <p>Our work spans large language models, machine learning, AI agents, RAG, intelligent CRM and ERP, AI cybersecurity, cloud platforms, data systems and custom software engineering.</p>
            <p>We believe strong AI products are built by combining model capability with product design, domain understanding, data quality, security, evaluation and disciplined engineering.</p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Our direction</p>
              <h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">Build intelligence into the technology businesses already depend on.</h2>
            </div>
            <p className="lg:col-span-5 text-lg text-slate-600 leading-relaxed">Our focus is not AI for its own sake. It is the practical use of AI, ML and LLMs to improve software, operations, customer experiences and security.</p>
          </div>

          <div className="mt-14 grid lg:grid-cols-2 border-t border-l border-slate-200">
            <div className="border-r border-b border-slate-200 p-8 lg:p-12 min-h-[320px]">
              <Target className="text-blue-600" size={36} />
              <h3 className="mt-10 text-3xl font-semibold">Our Mission</h3>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">To help organizations adopt and build AI responsibly by turning machine intelligence into secure, useful and production-ready software systems.</p>
            </div>
            <div className="border-r border-b border-slate-200 p-8 lg:p-12 min-h-[320px]">
              <Globe2 className="text-blue-600" size={36} />
              <h3 className="mt-10 text-3xl font-semibold">Our Vision</h3>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">To become a trusted global engineering partner for enterprises building the next generation of AI-powered technology.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <p className="text-sm font-semibold text-blue-400 uppercase tracking-wide">How we think</p>
              <h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">AI should strengthen the system, not complicate it.</h2>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 border-t border-l border-white/10">
              {[
                ["Business first", "Start with the workflow, user and outcome before choosing the technology."],
                ["Architecture matters", "Models, data, software, security and operations must work as one system."],
                ["Evaluate continuously", "AI quality must be measured against real tasks, not only demonstrations."],
                ["Keep humans in control", "Critical decisions and high-impact workflows need the right review and safeguards."],
              ].map(([title, text]) => (
                <div key={title} className="border-r border-b border-white/10 p-8 min-h-[240px]">
                  <Network className="text-blue-400" size={28} />
                  <h3 className="mt-8 text-2xl font-semibold">{title}</h3>
                  <p className="mt-4 text-slate-300 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Our principles</p>
          <div className="mt-5 grid lg:grid-cols-12 gap-10 items-end">
            <h2 className="lg:col-span-7 text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">The standards behind how we design and build.</h2>
            <p className="lg:col-span-5 text-lg text-slate-600 leading-relaxed">We want our work to remain understandable, secure and maintainable long after the first release.</p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 border-t border-l border-slate-200">
            {principles.map(([Icon, title, text]) => (
              <div key={title} className="border-r border-b border-slate-200 p-8 lg:p-10 min-h-[300px]">
                <Icon className="text-blue-600" size={32} />
                <h3 className="mt-10 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200 py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Why Sicada</p>
            <h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">Built for companies that need more than an AI demo.</h2>
          </div>
          <div className="lg:col-span-7 divide-y divide-slate-300 border-y border-slate-300">
            {["AI and software engineering in one delivery team", "Enterprise CRM, ERP and workflow understanding", "Security-conscious architecture from the beginning", "Data, cloud and model integration experience", "Clear communication from discovery to operation", "Production mindset with long-term maintainability"].map((item) => (
              <div key={item} className="py-5 flex items-center gap-4">
                <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                <span className="text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-20 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <p className="text-sm font-semibold text-blue-100 uppercase tracking-wide">Work with Sicada</p>
            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">Building an AI-powered product or modernizing an existing system?</h2>
            <p className="mt-4 text-lg text-blue-50 max-w-3xl">We can help shape the opportunity, architecture and engineering path from first concept to production.</p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a href="/contact" className="inline-flex items-center gap-3 bg-white text-slate-950 px-7 py-4 font-semibold hover:bg-slate-100 transition-colors">Start a conversation <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>
    </main>
  );
}