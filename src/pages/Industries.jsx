import {
  ArrowRight,
  Building2,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingBag,
  GraduationCap,
  Truck,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: HeartPulse,
      title: "Healthcare",
      summary: "AI and software for clinical, administrative and patient-facing workflows.",
      useCases: ["Clinical document intelligence", "AI-assisted operational workflows", "Patient engagement platforms", "Healthcare analytics"],
    },
    {
      icon: Landmark,
      title: "Financial Services",
      summary: "Intelligent systems for customer operations, risk and data-heavy workflows.",
      useCases: ["Fraud and anomaly intelligence", "Document processing", "Risk analytics", "AI customer service"],
    },
    {
      icon: Factory,
      title: "Manufacturing",
      summary: "AI-enabled operations for production, quality, maintenance and supply chains.",
      useCases: ["Predictive maintenance", "Computer vision inspection", "Demand forecasting", "Operational intelligence"],
    },
    {
      icon: ShoppingBag,
      title: "Retail & Commerce",
      summary: "Customer and operations intelligence across digital and physical commerce.",
      useCases: ["Recommendation systems", "Demand forecasting", "AI customer assistants", "Inventory intelligence"],
    },
    {
      icon: Building2,
      title: "Enterprise",
      summary: "AI woven into CRM, ERP, knowledge, support and internal business systems.",
      useCases: ["AI CRM", "AI ERP", "Enterprise copilots", "RAG and knowledge systems"],
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      summary: "Connected intelligence for planning, movement, visibility and decision support.",
      useCases: ["Route and dispatch optimization", "Demand prediction", "Fleet intelligence", "Operational copilots"],
    },
    {
      icon: GraduationCap,
      title: "Education",
      summary: "AI-enhanced learning and administration platforms built around real academic workflows.",
      useCases: ["Learning assistants", "Content intelligence", "Student support automation", "Academic analytics"],
    },
    {
      icon: ShieldCheck,
      title: "Public Sector",
      summary: "Secure digital services and AI-assisted workflows designed with governance in mind.",
      useCases: ["Citizen service automation", "Document intelligence", "Secure internal copilots", "Operational analytics"],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Industries</p>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-[4.7rem] leading-[1.03] tracking-[-0.045em] font-semibold">
              AI engineered around real industry workflows.
            </h1>
            <p className="mt-7 text-xl lg:text-[1.3rem] leading-relaxed text-slate-600 max-w-3xl">
              Sicada applies AI, machine learning and modern software engineering to the operational realities of healthcare, finance, manufacturing, retail, logistics and enterprise teams.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="/contact" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 font-semibold transition-colors">Discuss your industry <ArrowRight size={18} /></a>
              <a href="/services" className="inline-flex items-center gap-3 border border-slate-400 hover:border-slate-950 px-7 py-4 font-semibold">Explore AI solutions</a>
            </div>
          </div>

          <div className="lg:col-span-4 lg:border-l lg:border-slate-200 lg:pl-10 self-end">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Our approach</p>
            <p className="mt-5 text-lg text-slate-700 leading-relaxed">Start with the workflow, data, constraints and business outcome. Then design the AI and software architecture around them.</p>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Industry solutions</p>
              <h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">Use cases that connect AI to measurable operations.</h2>
            </div>
            <p className="lg:col-span-5 text-lg text-slate-600 leading-relaxed">We avoid generic AI claims. Each solution is shaped around the information, decisions and workflows that matter inside the industry.</p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 border-t border-l border-slate-200">
            {industries.map(({ icon: Icon, title, summary, useCases }) => (
              <article key={title} className="border-r border-b border-slate-200 p-8 lg:p-10 min-h-[390px]">
                <Icon className="text-blue-600" size={32} />
                <h3 className="mt-9 text-3xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-4 text-slate-600 leading-relaxed max-w-xl">{summary}</p>
                <div className="mt-8 divide-y divide-slate-200 border-t border-slate-200">
                  {useCases.map((item) => (
                    <div key={item} className="py-3.5 flex gap-3">
                      <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-wide">Industry transformation</p>
            <h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-tight">Modernize the system without losing the business context.</h2>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">AI becomes valuable when it improves a real process, decision or customer experience. Sicada combines domain understanding with technical architecture to get there.</p>
          </div>
          <div className="lg:col-span-7 border border-white/10">
            {[
              ["Understand", "Map users, workflows, decisions, data sources and current system constraints."],
              ["Prioritize", "Identify where AI can create a practical advantage instead of adding unnecessary complexity."],
              ["Integrate", "Connect intelligence to the CRM, ERP, apps, data and tools already used by the business."],
              ["Govern", "Design for security, access control, auditability, human review and operational reliability."],
            ].map(([title, text], index) => (
              <div key={title} className={`grid sm:grid-cols-12 gap-5 p-7 lg:p-8 ${index ? "border-t border-white/10" : ""}`}>
                <div className="sm:col-span-4 text-xl font-semibold">{title}</div>
                <p className="sm:col-span-8 text-slate-300 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-b border-slate-200 py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Cross-industry capabilities</p>
            <h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">Common AI patterns. Adapted to different businesses.</h2>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-10">
            {["Enterprise copilots", "RAG and knowledge systems", "AI CRM and ERP", "Predictive analytics", "Document intelligence", "Computer vision", "Workflow automation", "AI-assisted cybersecurity"].map((item) => (
              <div key={item} className="flex gap-3 py-5 border-b border-slate-300">
                <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={20} />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-20 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">Have an industry workflow that could benefit from AI?</h2>
            <p className="mt-4 text-lg text-blue-50 max-w-3xl">Tell us how the business works today. We can help identify where AI, ML or intelligent software could create useful change.</p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a href="/contact" className="inline-flex items-center gap-3 bg-white text-slate-950 px-7 py-4 font-semibold hover:bg-slate-100 transition-colors">Start a conversation <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>
    </main>
  );
}