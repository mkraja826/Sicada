import {
  Users,
  BriefcaseBusiness,
  ShieldCheck,
  Cloud,
  Code2,
  Database,
  ArrowRight,
  CheckCircle2,
  Globe2,
  Clock,
  Building2,
  Clock3,
} from "lucide-react";

export default function Home() {
  const services = [
    { icon: Code2, title: "Software Engineering", text: "Skilled developers for enterprise applications." },
    { icon: Cloud, title: "Cloud & DevOps", text: "Cloud, CI/CD, automation and deployment support." },
    { icon: ShieldCheck, title: "Cybersecurity", text: "Security-focused professionals for regulated teams." },
    { icon: Database, title: "Data Engineering", text: "Data pipelines, dashboards and analytics support." },
  ];

  const steps = [
    "Understand Requirements",
    "Source Skilled Talent",
    "Interview & Selection",
    "Onboarding Support",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
     

      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100 py-28">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-orange-200 blur-3xl opacity-40" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-700 mb-6">
              <BriefcaseBusiness size={18} />
              Enterprise IT Staffing Partner
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              Technology Talent for Insurance & Enterprise Teams
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              Sicada Digital connects companies with skilled IT professionals
              across software engineering, cloud, DevOps, cybersecurity, QA,
              data, and business analysis.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-orange-700 px-8 py-4 text-white font-semibold shadow-lg hover:bg-orange-800 transition"
              >
                Hire Talent <ArrowRight size={18} />
              </a>

              <a
                href="/services"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-8 py-4 font-semibold hover:border-orange-700 hover:text-orange-700 transition"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                ["150+", "Professionals"],
                ["40+", "Clients"],
                ["24h", "Response"],
                ["2", "Countries"],
              ].map(([num, label]) => (
                <div key={label} className="rounded-3xl bg-white p-5 shadow-sm border border-orange-100">
                  <h3 className="text-3xl font-bold text-orange-700">{num}</h3>
                  <p className="mt-1 text-sm text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl">
              <div className="grid gap-5">
                {[
                  [Users, "Vetted IT Professionals", "Access skilled talent quickly."],
                  [Building2, "Insurance Domain Focus", "Built for enterprise IT teams."],
                  [Globe2, "Australia & India Delivery", "Flexible staffing support."],
                ].map(([Icon, title, text]) => (
                  <div key={title} className="rounded-3xl bg-white/10 border border-white/10 p-6">
                    <div className="flex gap-5">
                      <div className="h-14 w-14 rounded-2xl bg-orange-600 flex items-center justify-center">
                        <Icon size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <p className="mt-2 text-slate-300">{text}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="rounded-3xl bg-orange-700 p-7">
                  <h3 className="text-2xl font-bold">Scale Your Tech Team</h3>
                  <p className="mt-3 text-orange-100">
                    Hire contract, permanent, remote, hybrid or project-based professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
    

<section className="py-24 bg-slate-950 text-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">
      <p className="text-orange-500 font-semibold uppercase tracking-wider text-sm">
        WHY SICADA DIGITAL
      </p>

      <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
        Trusted Technology Staffing Partner
      </h2>

      <p className="mt-6 text-slate-400 text-lg">
        We help enterprise organizations scale faster with skilled
        technology professionals, domain expertise, and flexible
        delivery models.
      </p>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

      <div className="text-center">
        <h3 className="text-5xl font-bold text-orange-500">
          150+
        </h3>

        <p className="mt-3 text-slate-400">
          Technology Professionals
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-bold text-orange-500">
          40+
        </h3>

        <p className="mt-3 text-slate-400">
          Enterprise Projects
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-bold text-orange-500">
          24h
        </h3>

        <p className="mt-3 text-slate-400">
          Response Time
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-bold text-orange-500">
          2
        </h3>

        <p className="mt-3 text-slate-400">
          Countries Served
        </p>
      </div>

    </div>

    {/* Benefits */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <Users
          size={42}
          className="text-orange-500 mb-5"
        />

        <h3 className="text-xl font-semibold">
          Skilled Talent
        </h3>

        <p className="mt-3 text-slate-400">
          Access highly qualified professionals across multiple technology domains.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <Clock3
          size={42}
          className="text-orange-500 mb-5"
        />

        <h3 className="text-xl font-semibold">
          Fast Hiring
        </h3>

        <p className="mt-3 text-slate-400">
          Accelerate hiring with a streamlined recruitment process.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <ShieldCheck
          size={42}
          className="text-orange-500 mb-5"
        />

        <h3 className="text-xl font-semibold">
          Enterprise Focus
        </h3>

        <p className="mt-3 text-slate-400">
          Experience supporting large-scale enterprise environments.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
        <Globe2
          size={42}
          className="text-orange-500 mb-5"
        />

        <h3 className="text-xl font-semibold">
          Global Delivery
        </h3>

        <p className="mt-3 text-slate-400">
          Supporting teams across Australia, India and international markets.
        </p>
      </div>

    </div>

  </div>
</section>

      {/* Why Sicada */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange-700 font-semibold uppercase tracking-wide text-sm">
                Why Sicada Digital
              </p>
              <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
                A reliable staffing partner for modern enterprises.
              </h2>
              <p className="mt-6 text-slate-600 leading-relaxed text-lg">
                We help businesses reduce hiring time, access specialized
                technology talent, and build scalable teams for critical
                digital transformation initiatives.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                [Clock, "Fast Hiring", "Quick access to shortlisted professionals."],
                [ShieldCheck, "Vetted Talent", "Skilled professionals aligned to your needs."],
                [Globe2, "Global Delivery", "Australia and India staffing support."],
                [CheckCircle2, "Enterprise Fit", "Built for regulated business environments."],
              ].map(([Icon, title, text]) => (
                <div key={title} className="rounded-3xl bg-white p-7 border border-slate-200 shadow-sm">
                  <Icon className="text-orange-700 mb-5" size={34} />
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-orange-700 font-semibold uppercase tracking-wide text-sm">
                Featured Services
              </p>
              <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                Technology capabilities that support growth.
              </h2>
            </div>

            <a href="/services" className="inline-flex items-center gap-2 text-orange-700 font-semibold">
              View All Services <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
            {services.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition"
              >
                <div className="h-16 w-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 group-hover:bg-orange-700 transition">
                  <Icon className="text-orange-700 group-hover:text-white transition" size={30} />
                </div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-4 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gradient-to-br from-slate-950 to-[#1f130c] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-orange-400 font-semibold uppercase tracking-wide text-sm">
              Getting Started
            </p>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Simple process. Faster hiring.
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step} className="rounded-3xl bg-white/10 border border-white/10 p-7">
                <div className="text-4xl font-bold text-orange-400">
                  0{index + 1}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-24 bg-orange-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[2.5rem] bg-white border border-orange-100 p-10 lg:p-14 shadow-xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <p className="text-orange-700 font-semibold uppercase tracking-wide text-sm">
                Careers
              </p>
              <h2 className="mt-3 text-4xl font-bold">
                Looking for your next tech opportunity?
              </h2>
              <p className="mt-4 text-slate-600">
                Explore open roles and submit your resume to Sicada Digital.
              </p>
            </div>

            <a
              href="/careers"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-700 px-8 py-4 text-white font-semibold hover:bg-orange-800 transition"
            >
              View Careers <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Need skilled technology professionals?
          </h2>
          <p className="mt-6 text-slate-600 text-lg">
            Contact Sicada Digital to discuss staffing, consulting, or project-based support.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contact@sicadadigital.com"
              className="rounded-2xl bg-orange-700 px-8 py-4 text-white font-semibold hover:bg-orange-800 transition"
            >
              contact@sicadadigital.com
            </a>

            <a
              href="/services"
              className="rounded-2xl border border-slate-300 px-8 py-4 font-semibold hover:border-orange-700 hover:text-orange-700 transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}