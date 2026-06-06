
import {
  Building2,
  Users,
  ShieldCheck,
  Globe2,
  Target,
  CheckCircle2,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      

      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-700 mb-6">
              About Sicada Digital
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Enterprise IT Staffing Built for Modern Businesses
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Sicada Digital helps insurance companies and enterprise
              organizations access skilled technology professionals across
              software engineering, cloud, QA, cybersecurity, data, and business
              analysis.
            </p>

            <a
              href="/services"
              className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-orange-700 px-8 py-4 text-white font-semibold hover:bg-orange-800 transition"
            >
              Explore Services <ArrowRight size={18} />
            </a>
          </div>

          <div className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl">
            {[
              [Building2, "Enterprise Focus", "Supporting modern business technology teams."],
              [ShieldCheck, "Insurance Expertise", "Talent solutions for regulated industries."],
              [Globe2, "Global Delivery", "Australia and India delivery capability."],
            ].map(([Icon, title, text]) => (
              <div key={title} className="mb-5 rounded-3xl bg-white/10 border border-white/10 p-6">
                <Icon className="text-orange-500 mb-4" size={36} />
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-orange-700 font-semibold uppercase tracking-wide text-sm">
              Who We Are
            </p>
            <h2 className="mt-4 text-4xl font-bold">
              A technology staffing partner focused on quality, speed and trust.
            </h2>
          </div>

          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              We work with organizations that need reliable technology talent to
              support critical business systems, digital transformation programs,
              and long-term engineering growth.
            </p>
            <p>
              Our approach combines recruitment understanding, technology domain
              awareness, and flexible engagement models to help companies build
              high-performing teams faster.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-orange-700 font-semibold uppercase tracking-wide text-sm">
              Our Values
            </p>
            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              What drives Sicada Digital
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              [Target, "Client Focus", "We align talent solutions with business outcomes."],
              [Users, "People First", "We value strong relationships with clients and professionals."],
              [CheckCircle2, "Delivery Quality", "We focus on dependable staffing and consulting support."],
            ].map(([Icon, title, text]) => (
              <div key={title} className="rounded-3xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-xl transition">
                <Icon className="text-orange-700 mb-5" size={40} />
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-4 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <BriefcaseBusiness className="mx-auto text-orange-500 mb-6" size={54} />

          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to build stronger technology teams?
          </h2>

          <p className="mt-6 text-slate-300 max-w-2xl mx-auto">
            Partner with Sicada Digital for flexible IT staffing and enterprise
            technology consulting support.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-flex rounded-2xl bg-orange-700 px-8 py-4 font-semibold hover:bg-orange-800 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}