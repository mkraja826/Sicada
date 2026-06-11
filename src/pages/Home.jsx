import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  ShieldCheck,
  Smartphone,
  Bot,
  Building2,
  Hospital,
  Landmark,
  Factory,
  BarChart3,
  Server,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      text: "Web platforms, enterprise portals, internal tools and scalable business applications.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      text: "Modern iOS and Android applications designed for performance, usability and growth.",
    },
    {
      icon: Cloud,
      title: "Cloud Engineering",
      text: "Cloud migration, DevOps, CI/CD, automation, monitoring and infrastructure modernization.",
    },
    {
      icon: Bot,
      title: "AI & Automation",
      text: "AI assistants, chatbots, workflow automation and intelligent business tools.",
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity",
      text: "Security-first software, risk assessment, compliance support and system protection.",
    },
    {
      icon: Database,
      title: "Data & Analytics",
      text: "Dashboards, reporting systems, data pipelines and business intelligence platforms.",
    },
  ];

  const industries = [
    { icon: Building2, title: "Insurance" },
    { icon: Hospital, title: "Healthcare" },
    { icon: Landmark, title: "Finance" },
    { icon: Factory, title: "Manufacturing" },
  ];

  const technologies = [
    "React",
    "Node.js",
    "Next.js",
    "TypeScript",
    ".NET",
    "Azure",
    "AWS",
    "PostgreSQL",
    "Docker",
    "Python",
    "AI / ML",
    "Cybersecurity",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
              Sicada Digital
            </p>

            <h1 className="mt-5 text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-slate-950">
              Building software that powers modern business.
            </h1>

            <p className="mt-7 text-xl text-slate-600 leading-relaxed max-w-2xl">
              Custom software development, cloud engineering, AI solutions,
              cybersecurity, mobile applications and enterprise platforms for
              growing businesses.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 font-semibold transition"
              >
                Talk to an expert <ArrowRight size={18} />
              </a>

              <a
                href="/services"
                className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-900 px-7 py-4 font-semibold transition"
              >
                Explore services
              </a>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="bg-slate-50 border border-slate-200 p-5 shadow-xl">
            <div className="bg-white border border-slate-200">
              <div className="h-12 border-b border-slate-200 flex items-center px-4 gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                <span className="h-3 w-3 rounded-full bg-green-400"></span>
              </div>

              <div className="grid md:grid-cols-3">
                <div className="bg-slate-950 text-white p-6 md:min-h-[420px]">
                  <h3 className="text-lg font-semibold">Digital Platform</h3>

                  <div className="mt-8 space-y-4">
                    {["Dashboard", "Analytics", "Automation", "Security"].map(
                      (item) => (
                        <div
                          key={item}
                          className="bg-white/10 border border-white/10 px-4 py-3"
                        >
                          {item}
                        </div>
                      )
                    )}
                  </div>
                </div>

                <div className="md:col-span-2 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-slate-200 p-5">
                      <BarChart3 className="text-blue-600 mb-5" size={30} />
                      <p className="text-sm text-slate-500">Projects</p>
                      <h4 className="text-3xl font-semibold mt-2">24</h4>
                    </div>

                    <div className="border border-slate-200 p-5">
                      <Server className="text-blue-600 mb-5" size={30} />
                      <p className="text-sm text-slate-500">Automation</p>
                      <h4 className="text-3xl font-semibold mt-2">86%</h4>
                    </div>
                  </div>

                  <div className="mt-5 border border-slate-200 p-5">
                    <p className="text-sm font-semibold text-slate-500">
                      System Performance
                    </p>

                    <div className="mt-6 space-y-4">
                      {[
                        ["Cloud Reliability", "92%"],
                        ["Security Readiness", "88%"],
                        ["Delivery Efficiency", "95%"],
                      ].map(([label, value]) => (
                        <div key={label}>
                          <div className="flex justify-between text-sm mb-2">
                            <span>{label}</span>
                            <span>{value}</span>
                          </div>

                          <div className="h-2 bg-slate-100">
                            <div
                              className="h-2 bg-blue-600"
                              style={{ width: value }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 bg-blue-600 text-white p-5">
                    <h4 className="text-xl font-semibold">
                      Enterprise-ready solutions
                    </h4>

                    <p className="mt-2 text-blue-50">
                      Built for security, scale and long-term growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
              Our Services
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight">
              Technology solutions for every stage of your digital journey.
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {services.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-white p-8 hover:bg-slate-50 transition"
              >
                <Icon className="text-blue-600" size={36} />

                <h3 className="mt-8 text-2xl font-semibold">{title}</h3>

                <p className="mt-4 text-slate-600 leading-relaxed">{text}</p>

                <a
                  href="/services"
                  className="mt-8 inline-flex items-center gap-2 text-blue-700 font-semibold"
                >
                  Learn more <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                Featured Solutions
              </p>

              <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight">
                We build platforms that solve real business problems.
              </h2>
            </div>

            <div className="space-y-6">
              {[
                "Insurance claims and policy management systems",
                "Healthcare clinic and patient management platforms",
                "AI-powered customer service and internal assistants",
                "Enterprise dashboards and business intelligence portals",
              ].map((item) => (
                <div key={item} className="flex gap-4">
                  <CheckCircle2 className="text-blue-600 mt-1" size={22} />
                  <p className="text-lg text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="border border-slate-200 p-8 bg-white hover:shadow-xl transition"
              >
                <Icon className="text-blue-600" size={38} />

                <h3 className="mt-8 text-2xl font-semibold">{title}</h3>

                <p className="mt-3 text-slate-600">
                  Secure and scalable digital platforms designed for{" "}
                  {title.toLowerCase()} businesses.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
              Why Sicada Digital
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight">
              A software partner focused on clarity, quality and long-term
              value.
            </h2>

            <p className="mt-6 text-slate-300 text-lg leading-relaxed">
              We combine modern engineering, cloud expertise, security-first
              development and clear communication to help businesses launch
              reliable digital products.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {[
              "Enterprise Focus",
              "Modern Tech Stack",
              "Security First",
              "Agile Delivery",
              "Transparent Process",
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

      {/* TECHNOLOGIES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
              Technologies
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight">
              Built with modern, reliable and scalable technologies.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-slate-200 border border-slate-200">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="bg-white p-6 text-center font-semibold hover:bg-slate-50 transition"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white border border-slate-200 p-10 lg:p-16 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
                Ready to build your next software platform?
              </h2>

              <p className="mt-5 text-lg text-slate-600">
                Talk to Sicada Digital about your software, cloud, AI or digital
                transformation requirements.
              </p>
            </div>

            <div className="lg:text-right">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold transition"
              >
                Start a conversation <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}