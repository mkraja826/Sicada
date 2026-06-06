import Navbar from "../components/Navbar";

export default function Services() {
  const services = [
    {
      title: "Software Engineering",
      desc: "Scalable web, mobile, and enterprise application development using modern engineering practices.",
      points: ["React & Node.js", "Enterprise Apps", "API Development"],
      icon: "💻",
    },
    {
      title: "Cloud & DevOps",
      desc: "Cloud infrastructure, CI/CD pipelines, automation, monitoring, and deployment support.",
      points: ["AWS / Azure", "CI/CD", "Infrastructure Automation"],
      icon: "☁️",
    },
    {
      title: "QA & Automation",
      desc: "Manual and automated testing services to improve software quality and delivery speed.",
      points: ["Test Automation", "Regression Testing", "Performance Testing"],
      icon: "🧪",
    },
    {
      title: "Cybersecurity",
      desc: "Security-focused professionals for enterprise applications, systems, and compliance-driven environments.",
      points: ["Security Testing", "Risk Assessment", "Compliance Support"],
      icon: "🛡️",
    },
    {
      title: "Data Engineering",
      desc: "Data professionals for pipelines, reporting, analytics, and enterprise intelligence systems.",
      points: ["ETL Pipelines", "Dashboards", "Data Warehousing"],
      icon: "📊",
    },
    {
      title: "Business Analysis",
      desc: "Experienced analysts who bridge business needs and technology delivery teams.",
      points: ["Requirement Gathering", "Process Mapping", "Stakeholder Support"],
      icon: "📌",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      

      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100 py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-700 mb-6">
              Our Services
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Enterprise IT Staffing & Technology Solutions
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              Sicada Digital helps insurance and enterprise organizations build
              high-performing technology teams with skilled professionals across
              software engineering, cloud, data, QA, cybersecurity, and business analysis.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="rounded-2xl bg-orange-700 px-8 py-4 text-white font-semibold hover:bg-orange-800 transition shadow-lg"
              >
                Hire Talent
              </a>

              <a
                href="/careers"
                className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold hover:border-orange-700 hover:text-orange-700 transition"
              >
                Join Our Team
              </a>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">
              Built for Enterprise Delivery
            </h3>

            <div className="space-y-5">
              {[
                "Flexible contract and permanent hiring models",
                "Insurance technology domain understanding",
                "Fast access to vetted IT professionals",
                "Remote, hybrid, and on-site delivery support",
              ].map((item) => (
                <div key={item} className="flex gap-4">
                  <span className="mt-1 h-5 w-5 rounded-full bg-orange-500"></span>
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-orange-700 font-semibold uppercase tracking-wide text-sm">
              What We Deliver
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Services Designed for Modern Technology Teams
            </h2>

            <p className="mt-5 text-slate-600 leading-relaxed">
              From short-term specialists to long-term engineering teams, we provide
              staffing and consulting solutions aligned with business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <div className="h-16 w-16 rounded-2xl bg-orange-100 flex items-center justify-center text-3xl mb-6 group-hover:bg-orange-700 transition">
                  <span className="group-hover:scale-110 transition">
                    {service.icon}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {service.desc}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-slate-700">
                      <span className="h-2 w-2 rounded-full bg-orange-600"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-orange-700 font-semibold uppercase tracking-wide text-sm">
              Our Process
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              How We Help You Scale Faster
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed">
              We simplify hiring and delivery by understanding your requirements,
              identifying the right professionals, and supporting smooth onboarding.
            </p>
          </div>

          <div className="space-y-6">
            {[
              ["01", "Requirement Discovery", "We understand your technology stack, project goals, and hiring needs."],
              ["02", "Talent Shortlisting", "We identify suitable professionals based on skills, experience, and domain fit."],
              ["03", "Interview & Selection", "Your team interviews shortlisted candidates and selects the best match."],
              ["04", "Onboarding & Support", "We support onboarding, coordination, and ongoing delivery success."],
            ].map(([num, title, desc]) => (
              <div
                key={num}
                className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm flex gap-6"
              >
                <div className="text-3xl font-bold text-orange-600">
                  {num}
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-slate-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Looking for Skilled Technology Professionals?
          </h2>

          <p className="mt-6 text-slate-300 max-w-2xl mx-auto">
            Partner with Sicada Digital to build reliable engineering teams for
            insurance, finance, and enterprise technology environments.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-block rounded-2xl bg-orange-700 px-8 py-4 font-semibold text-white hover:bg-orange-800 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}