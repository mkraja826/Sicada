import {
  ArrowRight,
  Building2,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingBag,
  ShieldCheck,
  GraduationCap,
  Truck,
  CheckCircle2,
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: Building2,
      title: "Insurance",
      text: "Claims platforms, policy management systems, customer portals and workflow automation.",
      points: ["Claims automation", "Policy portals", "Internal dashboards"],
    },
    {
      icon: HeartPulse,
      title: "Healthcare",
      text: "Clinic management, patient records, appointment systems and secure healthcare platforms.",
      points: ["Patient systems", "Appointment apps", "Digital records"],
    },
    {
      icon: Landmark,
      title: "Finance",
      text: "Secure fintech platforms, reporting dashboards, payment systems and compliance-driven tools.",
      points: ["Finance portals", "Analytics", "Secure systems"],
    },
    {
      icon: Factory,
      title: "Manufacturing",
      text: "Operations dashboards, inventory systems, ERP tools and process automation platforms.",
      points: ["Inventory tools", "ERP support", "Operations tracking"],
    },
    {
      icon: ShoppingBag,
      title: "Retail",
      text: "E-commerce platforms, customer apps, inventory management and digital sales systems.",
      points: ["E-commerce", "Customer apps", "Order systems"],
    },
    {
      icon: GraduationCap,
      title: "Education",
      text: "Learning platforms, student portals, admin systems and digital classroom tools.",
      points: ["Student portals", "LMS platforms", "Admin systems"],
    },
    {
      icon: Truck,
      title: "Logistics",
      text: "Fleet tracking, booking systems, dispatch platforms and operational workflow tools.",
      points: ["Fleet systems", "Booking apps", "Dispatch tools"],
    },
    {
      icon: ShieldCheck,
      title: "Government & Public Sector",
      text: "Secure digital platforms, citizen services, internal portals and compliance-ready systems.",
      points: ["Citizen portals", "Secure platforms", "Workflow systems"],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-blue-700 font-semibold uppercase tracking-wide">
            Industries
          </p>

          <h1 className="mt-5 text-5xl lg:text-7xl font-semibold tracking-tight leading-tight max-w-5xl">
            Digital solutions for modern industries.
          </h1>

          <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-3xl">
            We help businesses across insurance, healthcare, finance,
            manufacturing, retail, education and logistics build secure,
            scalable and practical technology platforms.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold transition"
            >
              Discuss your industry <ArrowRight size={18} />
            </a>

            <a
              href="/services"
              className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-900 px-8 py-4 font-semibold transition"
            >
              View services
            </a>
          </div>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
            {industries.map(({ icon: Icon, title, text, points }) => (
              <div key={title} className="bg-white p-8 hover:bg-slate-50 transition">
                <Icon className="text-blue-600" size={40} />

                <h3 className="mt-8 text-2xl font-semibold">{title}</h3>

                <p className="mt-4 text-slate-600 leading-relaxed">{text}</p>

                <div className="mt-8 space-y-3">
                  {points.map((point) => (
                    <div key={point} className="flex gap-3">
                      <CheckCircle2 className="text-blue-600 mt-1" size={18} />
                      <p className="text-slate-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY APPROACH */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-400 font-semibold uppercase tracking-wide">
              Our Approach
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight">
              Industry-focused technology, built around real operations.
            </h2>

            <p className="mt-6 text-xl text-slate-300 leading-relaxed">
              We don’t build generic software. We understand workflows,
              users, business goals and security needs before designing the
              right digital solution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {[
              "Workflow Understanding",
              "Secure Architecture",
              "Scalable Development",
              "User-Centered Design",
              "Cloud-Ready Systems",
              "Long-Term Support",
            ].map((item) => (
              <div key={item} className="bg-slate-950 p-7">
                <CheckCircle2 className="text-blue-400" size={28} />
                <h3 className="mt-5 text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-blue-700 font-semibold uppercase tracking-wide">
              Use Cases
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight">
              What we can build for your business.
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {[
              "Customer Portals",
              "Admin Dashboards",
              "Mobile Applications",
              "Booking Systems",
              "Inventory Platforms",
              "AI Assistants",
              "Data Dashboards",
              "Internal Workflow Tools",
              "Cloud-Based Business Systems",
            ].map((item) => (
              <div key={item} className="bg-white p-8">
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white border border-slate-200 p-12 lg:p-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
              Need software for your industry?
            </h2>

            <p className="mt-6 text-xl text-slate-600">
              Talk to Sicada Digital about your business workflow and we’ll help
              you plan the right digital solution.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold transition"
            >
              Start consultation <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}