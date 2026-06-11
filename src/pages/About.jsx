import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
  Code2,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      text: "We use modern technologies to solve practical business problems.",
    },
    {
      icon: ShieldCheck,
      title: "Security",
      text: "We design systems with security, reliability and scalability in mind.",
    },
    {
      icon: Users,
      title: "Partnership",
      text: "We work closely with clients as a long-term technology partner.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-700 font-semibold uppercase tracking-wide">
              About Sicada Digital
            </p>

            <h1 className="mt-5 text-5xl lg:text-7xl font-semibold tracking-tight leading-tight">
              Driving innovation through software engineering.
            </h1>

            <p className="mt-8 text-xl text-slate-600 leading-relaxed">
              Sicada Digital is a software development and digital
              transformation company helping businesses build secure, scalable
              and modern technology solutions.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold transition"
            >
              Work with us <ArrowRight size={18} />
            </a>
          </div>

          <div className="bg-slate-950 text-white p-10 lg:p-12">
            <Code2 className="text-blue-400" size={48} />

            <h3 className="mt-8 text-3xl font-semibold">
              Building reliable digital platforms for modern businesses.
            </h3>

            <div className="mt-10 space-y-5">
              {[
                "Custom software development",
                "Cloud engineering and DevOps",
                "AI-powered business automation",
                "Cybersecurity and data solutions",
              ].map((item) => (
                <div key={item} className="flex gap-4">
                  <CheckCircle2 className="text-blue-400 mt-1" size={22} />
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-blue-700 font-semibold uppercase tracking-wide">
              Who We Are
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight">
              A technology partner focused on solving business problems.
            </h2>
          </div>

          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              We help organizations turn ideas into reliable software products,
              automate manual workflows, modernize existing systems and improve
              digital operations.
            </p>

            <p>
              Our work covers web applications, mobile apps, cloud platforms,
              AI solutions, cybersecurity and data-driven business tools.
            </p>

            <p>
              We focus on clean execution, transparent communication and
              practical technology that creates measurable business value.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION VISION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
          <div className="bg-white p-10 lg:p-14">
            <Target className="text-blue-600" size={42} />

            <h3 className="mt-8 text-3xl font-semibold">Our Mission</h3>

            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              To help organizations innovate faster through software
              engineering, cloud technologies, artificial intelligence and
              digital transformation.
            </p>
          </div>

          <div className="bg-white p-10 lg:p-14">
            <Globe2 className="text-blue-600" size={42} />

            <h3 className="mt-8 text-3xl font-semibold">Our Vision</h3>

            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              To become a trusted global software engineering and digital
              transformation partner for businesses embracing technology.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-semibold uppercase tracking-wide">
              Our Values
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight">
              Principles that guide how we build.
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-slate-950 p-10">
                <Icon className="text-blue-400" size={42} />

                <h3 className="mt-8 text-2xl font-semibold">{title}</h3>

                <p className="mt-4 text-slate-300 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CLIENTS CHOOSE US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-blue-700 font-semibold uppercase tracking-wide">
              Why Clients Choose Us
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight">
              We build with business outcomes in mind.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Modern engineering practices",
              "Security-first development",
              "Scalable cloud architecture",
              "Clear communication",
              "Agile project delivery",
              "Long-term product support",
            ].map((item) => (
              <div key={item} className="border border-slate-200 p-6">
                <CheckCircle2 className="text-blue-600" size={26} />
                <h3 className="mt-5 font-semibold text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white border border-slate-200 p-12 lg:p-16 text-center">
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
              Let’s build technology that moves your business forward.
            </h2>

            <p className="mt-6 text-xl text-slate-600">
              Partner with Sicada Digital for software, cloud, AI and digital
              transformation solutions.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold transition"
            >
              Start a conversation <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}