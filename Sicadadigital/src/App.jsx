import logo from "./assets/logo.png";
export default function StaffingWebsite() {
  const services = [
    "Software Engineering",
    "Cloud & DevOps",
    "QA & Automation Testing",
    "Business Analysis",
    "Cybersecurity",
    "Data Engineering",
  ];

  const industries = [
    "Insurance",
    "Financial Services",
    "Healthcare",
    "Enterprise Technology",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
  <img
    src={logo}
    alt="Sicada Digital"
    className="h-12 w-auto"
  />

  <div>
    <h1 className="text-2xl font-bold tracking-tight text-slate-900">
      
    </h1>

    <p className="text-sm text-slate-500">
      
    </p>
  </div>
</div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-orange-700 transition">
              Services
            </a>
            <a href="#industries" className="hover:text-orange-700 transition">
              Industries
            </a>
            <a href="#about" className="hover:text-orange-700 transition">
              About
            </a>
            <a href="#contact" className="hover:text-orange-700 transition">
              Contact
            </a>
          </nav>

          <button className="bg-orange-700 hover:bg-orange-800 text-white px-5 py-2 rounded-xl text-sm font-semibold transition shadow-sm">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm text-orange-700 font-medium mb-6">
              Trusted IT Staffing Partner
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900">
              Connecting Insurance Companies with Skilled Technology Professionals
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              We provide experienced IT professionals, engineering teams,
              and technology consulting services tailored for enterprise
              insurance organizations.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-orange-700 hover:bg-orange-800 text-white px-7 py-4 rounded-2xl font-semibold transition shadow-lg">
                Hire Talent
              </button>

              <button className="border border-slate-300 hover:border-orange-700 hover:text-orange-700 px-7 py-4 rounded-2xl font-semibold transition">
                Explore Services
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <h3 className="text-3xl font-bold text-orange-700">150+</h3>
                <p className="text-sm text-slate-500 mt-1">
                  IT Professionals
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-orange-700">40+</h3>
                <p className="text-sm text-slate-500 mt-1">
                  Enterprise Clients
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-orange-700">10+</h3>
                <p className="text-sm text-slate-500 mt-1">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8">
              <div className="grid gap-6">
                <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-lg">
                        Enterprise Staffing
                      </h4>
                      <p className="text-slate-500 mt-1 text-sm">
                        Contract & Permanent Technology Talent
                      </p>
                    </div>

                    <div className="h-12 w-12 rounded-xl bg-orange-700" />
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-lg">
                        Insurance Technology
                      </h4>
                      <p className="text-slate-500 mt-1 text-sm">
                        Specialized Domain Expertise
                      </p>
                    </div>

                    <div className="h-12 w-12 rounded-xl bg-orange-700" />
                  </div>
                </div>

                <div className="rounded-2xl bg-orange-700 text-white p-6 shadow-lg">
                  <h4 className="font-semibold text-lg">
                    Accelerate Your Technology Teams
                  </h4>
                  <p className="mt-2 text-orange-100 text-sm leading-relaxed">
                    Fast access to highly skilled professionals for critical
                    enterprise projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-orange-700 font-semibold uppercase tracking-wide text-sm">
              Services
            </p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Technology Solutions & Staffing Services
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              We help insurance and enterprise organizations scale their IT
              capabilities with experienced professionals and agile delivery
              teams.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service}
                className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
              >
                <div className="h-14 w-14 rounded-2xl bg-orange-100 mb-6" />
                <h3 className="text-xl font-semibold text-slate-900">
                  {service}
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Professional staffing and consulting solutions tailored for
                  enterprise technology environments.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-12">
      Trusted By
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
      {[
        "Insurance Partners",
        "FinTech Teams",
        "Enterprise Clients",
        "Global Startups",
      ].map((item, index) => (
        <div
          key={index}
          className="h-40 flex items-center justify-center rounded-3xl border bg-white p-8 shadow-sm font-semibold text-slate-700 text-center"
        >
          {item}
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Industries */}
      <section id="industries" className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-orange-700 font-semibold uppercase tracking-wide text-sm">
              Industries
            </p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Industry Expertise That Drives Results
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed">
              We understand enterprise technology environments and provide
              professionals with domain-specific expertise for regulated
              industries.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {industries.map((industry) => (
                <div
                  key={industry}
                  className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm"
                >
                  <h3 className="font-semibold text-slate-900">
                    {industry}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-orange-700 rounded-[2rem] p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-bold leading-tight">
              Helping Enterprise Teams Build Faster & Smarter
            </h3>

            <p className="mt-6 text-slate-300 leading-relaxed">
              Our consultants and engineers support digital transformation,
              modernization, cloud migration, and enterprise software delivery.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="h-4 w-4 rounded-full bg-orange-400 mt-2" />
                <p className="text-slate-200">
                  Skilled professionals across multiple technology stacks
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-4 w-4 rounded-full bg-orange-400 mt-2" />
                <p className="text-slate-200">
                  Flexible contract and permanent hiring models
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-4 w-4 rounded-full bg-orange-400 mt-2" />
                <p className="text-slate-200">
                  Enterprise-grade delivery and recruitment standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
  id="about"
  className="py-32 bg-gradient-to-br from-[#fff7f2] via-white to-orange-50 overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left Content */}
      <div>

        <div className="inline-flex items-center rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-700 mb-8">
          About SICADA DIGITAL
        </div>

        <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
          Enterprise Technology Staffing Built For Modern Businesses
        </h2>

        <p className="mt-8 text-lg leading-relaxed text-slate-600">
          SICADA DIGITAL partners with insurance companies,
          enterprise organizations, and technology-driven businesses
          to deliver highly skilled IT professionals, scalable
          engineering teams, and strategic consulting solutions.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-slate-600">
          We specialize in connecting companies with top-tier
          software engineers, cloud specialists, QA professionals,
          cybersecurity experts, business analysts, and enterprise
          consultants capable of accelerating digital transformation.
        </p>

        {/* Stats */}
        <div className="mt-12 space-y-6">

  <div className="flex items-start gap-5 rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
    
    <div className="h-14 w-14 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">
      🚀
    </div>

    <div>
      <h3 className="text-xl font-semibold text-slate-900">
        Enterprise Technology Staffing
      </h3>

      <p className="mt-2 text-slate-600 leading-relaxed">
        Delivering highly skilled technology professionals
        for enterprise-scale digital transformation initiatives.
      </p>
    </div>

  </div>

  <div className="flex items-start gap-5 rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
    
    <div className="h-14 w-14 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">
      🛡️
    </div>

    <div>
      <h3 className="text-xl font-semibold text-slate-900">
        Insurance Industry Expertise
      </h3>

      <p className="mt-2 text-slate-600 leading-relaxed">
        Specialized consulting and staffing solutions
        tailored for insurance and regulated industries.
      </p>
    </div>

  </div>

  <div className="flex items-start gap-5 rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
    
    <div className="h-14 w-14 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">
      🌍
    </div>

    <div>
      <h3 className="text-xl font-semibold text-slate-900">
        Global Delivery Capability
      </h3>

      <p className="mt-2 text-slate-600 leading-relaxed">
        Supporting enterprise organizations across
        Australia and international markets with scalable teams.
      </p>
    </div>

  </div>

</div>

      </div>

      {/* Right Side */}
      <div className="relative">

        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-orange-200 blur-3xl opacity-40"></div>

        <div className="relative rounded-[2.5rem] bg-[#1f130c] p-10 text-white shadow-2xl">

          <div className="grid gap-8">

            <div className="rounded-3xl bg-white/10 backdrop-blur border border-white/10 p-7">
              <div className="flex items-start gap-5">

                <div className="h-14 w-14 rounded-2xl bg-orange-500 flex items-center justify-center text-2xl">
                  💼
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    Enterprise Staffing
                  </h3>

                  <p className="mt-3 text-slate-300 leading-relaxed">
                    Flexible contract and permanent staffing
                    solutions for enterprise technology teams.
                  </p>
                </div>

              </div>
            </div>

            <div className="rounded-3xl bg-white/10 backdrop-blur border border-white/10 p-7">
              <div className="flex items-start gap-5">

                <div className="h-14 w-14 rounded-2xl bg-orange-500 flex items-center justify-center text-2xl">
                  ☁️
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    Digital Transformation
                  </h3>

                  <p className="mt-3 text-slate-300 leading-relaxed">
                    Supporting cloud migration, modernization,
                    DevOps, QA automation, and enterprise delivery.
                  </p>
                </div>

              </div>
            </div>

            <div className="rounded-3xl bg-orange-600 p-8 shadow-xl">
              <h3 className="text-3xl font-bold">
                Trusted Technology Partner
              </h3>

              <p className="mt-4 text-orange-100 leading-relaxed">
                Delivering scalable staffing and consulting
                services for insurance and enterprise organizations
                across Australia and global markets.
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</section>

      {/* CTA */}
      

      {/* Footer */}
      <section  className="py-28 bg-slate-50 text-slate-900">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-6">
        Contact Us
      </h2>

      <p className="text-black max-w-2xl mx-auto text-lg">
        Partner with Sicada Digital for scalable IT staffing,
        insurance technology expertise, and enterprise
        engineering solutions across Australia and global markets.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12">

      {/* Left Side */}
      <div className="space-y-8 h-full flex flex-col justify-between">

        <div className="rounded-3xl border border-white bg-orange-700 p-8">
          <h3 className="text-2xl text-white font-semibold mb-4">
            Let’s Discuss Your Requirements
          </h3>

          <p className="text-white leading-relaxed">
            We help insurance companies and enterprise teams
            scale with highly skilled technology professionals,
            remote engineering teams, and project-based delivery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 flex-1">

          <div className="rounded-3xl border border-orange-700 p-6 bg-white text-slate-900 h-full">
            <div className="text-slate-900 text-3xl mb-4">
              📧
            </div>

            <h4 className="font-semibold text-slate-900 text-lg mb-2">
              Email
            </h4>

            <p className="text-slate-400">
              contact@sicadadigital.com
            </p>
          </div>

          <div className="rounded-3xl border border-orange-700 p-6 bg-white h-full">
            <div className="text-orange-400 text-3xl mb-4">
              📞
            </div>

            <h4 className="font-semibold text-slate-900 text-lg mb-2">
              Phone
            </h4>

            <p className="text-slate-400">
              +61 400 000 000
            </p>
          </div>

          <div className="rounded-3xl border border-orange-700 p-6 bg-white h-full">
            <div className="text-orange-400 text-3xl mb-4">
              🌍
            </div>

            <h4 className="font-semibold text-slate-900 text-lg mb-2">
              Locations
            </h4>

            <p className="text-slate-400">
              Australia • India
            </p>
          </div>

          <div className="rounded-3xl border border-orange-700 p-6 bg-white h-full">
            <div className="text-slate-900 text-3xl mb-4">
              ⏱
            </div>

            <h4 className="font-semibold text-slate-900 text-lg mb-2">
              Response Time
            </h4>

            <p className="text-slate-400">
              Within 24 Hours
            </p>
          </div>

        </div>
      </div>

      {/* Right Side Form */}
      <div id="contact" className="rounded-[2rem] bg-white border border-slate-200 p-10 shadow-xl">

  <h3 className="text-4xl font-bold text-slate-900 mb-3">
    Send a Message
  </h3>

  <p className="text-slate-500 mb-10">
    Tell us about your staffing or technology requirements.
  </p>

  <form className="space-y-6">

    <div className="grid md:grid-cols-2 gap-6">

      <div>
        <label className="block mb-3 text-sm font-medium text-slate-700">
          First Name
        </label>

        <input
          type="text"
          placeholder="John"
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none focus:border-orange-600 focus:ring-4 focus:ring-orange-100 transition"
        />
      </div>

      <div>
        <label className="block mb-3 text-sm font-medium text-slate-700">
          Last Name
        </label>

        <input
          type="text"
          placeholder="Smith"
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none focus:border-orange-600 focus:ring-4 focus:ring-orange-100 transition"
        />
      </div>

    </div>

    <div>
      <label className="block mb-3 text-sm font-medium text-slate-700">
        Email
      </label>

      <input
        type="email"
        placeholder="john@company.com"
        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none focus:border-orange-600 focus:ring-4 focus:ring-orange-100 transition"
      />
    </div>

    <div>
      <label className="block mb-3 text-sm font-medium text-slate-700">
        Company
      </label>

      <input
        type="text"
        placeholder="Company Name"
        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none focus:border-orange-600 focus:ring-4 focus:ring-orange-100 transition"
      />
    </div>

    <div>
      <label className="block mb-3 text-sm font-medium text-slate-700">
        Message
      </label>

      <textarea
        rows="5"
        placeholder="Tell us about your requirements..."
        className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 outline-none focus:border-orange-600 focus:ring-4 focus:ring-orange-100 transition"
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full rounded-2xl bg-orange-600 py-4 text-lg font-semibold text-white shadow-lg hover:bg-orange-700 hover:scale-[1.02] transition duration-300"
    >
      Submit Inquiry
    </button>

  </form>
</div>

    </div>
  </div>
</section>
<footer className="bg-orange-700 text-slate-200 py-10">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
    
    <div>
      <h3 className="text-white text-xl font-bold mb-2">
        SICADA DIGITAL
      </h3>

      <p className="max-w-sm">
        Enterprise IT staffing and insurance technology
        talent solutions.
      </p>
    </div>

    <div className="space-y-2">
      <p>Email: contact@sicadadigital.com</p>
      <p>Australia • India</p>
      <p>© 2026 Sicada Digital</p>
    </div>
  </div>
</footer>
    </div>
  );
}
