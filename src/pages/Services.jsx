import {
  Code2,
  Smartphone,
  Cloud,
  ShieldCheck,
  Database,
  Bot,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      desc: "Scalable business applications, portals, SaaS products and enterprise systems.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: Cloud,
      title: "Cloud Engineering",
      desc: "Cloud migration, infrastructure modernization, DevOps and automation.",
    },
    {
      icon: Bot,
      title: "AI & Automation",
      desc: "AI assistants, intelligent workflows, chatbots and business automation.",
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity",
      desc: "Security-first architecture, audits, compliance and risk management.",
    },
    {
      icon: Database,
      title: "Data & Analytics",
      desc: "Data platforms, dashboards, reporting systems and business intelligence.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-blue-700 font-semibold uppercase tracking-wide">
            Services
          </p>

          <h1 className="mt-5 text-5xl lg:text-7xl font-semibold tracking-tight">
            Technology solutions built for growth.
          </h1>

          <p className="mt-8 text-xl text-slate-600 max-w-3xl">
            We help organizations modernize systems, improve efficiency and
            accelerate digital transformation through software engineering,
            cloud technologies and AI.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">

            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white p-10 hover:bg-slate-50 transition"
              >
                <Icon size={42} className="text-blue-600" />

                <h3 className="mt-8 text-2xl font-semibold">
                  {title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {desc}
                </p>

                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-blue-700 font-semibold"
                >
                  Discuss your project
                  <ArrowRight size={18} />
                </a>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY OUR SERVICES */}
      <section className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl">
            <p className="text-blue-400 font-semibold uppercase">
              Why Sicada Digital
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold">
              Enterprise-grade delivery from strategy to deployment.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

            {[
              "Modern Architecture",
              "Cloud Native Solutions",
              "Security First Design",
              "Long-Term Support",
            ].map((item) => (
              <div
                key={item}
                className="border border-white/10 p-8"
              >
                <h3 className="text-xl font-semibold">
                  {item}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl">
            <p className="text-blue-700 font-semibold uppercase">
              Process
            </p>

            <h2 className="mt-4 text-4xl font-semibold">
              From idea to production.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-10 mt-16">

            {[
              ["01", "Discovery"],
              ["02", "Design"],
              ["03", "Development"],
              ["04", "Launch"],
            ].map(([num, title]) => (
              <div key={num}>
                <div className="text-5xl font-bold text-blue-600">
                  {num}
                </div>

                <h3 className="mt-5 text-2xl font-semibold">
                  {title}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-white border border-slate-200 p-12 lg:p-16">

            <h2 className="text-4xl lg:text-5xl font-semibold">
              Ready to discuss your project?
            </h2>

            <p className="mt-6 text-xl text-slate-600">
              Let's explore how technology can help your business grow.
            </p>

            <a
              href="/contact"
              className="inline-flex mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold transition"
            >
              Schedule Consultation
            </a>

          </div>
        </div>
      </section>
    </div>
  );
}