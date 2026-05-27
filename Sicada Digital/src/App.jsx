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
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white" />

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

                    <div className="h-12 w-12 rounded-xl bg-slate-900" />
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

          <div className="bg-slate-900 rounded-[2rem] p-10 text-white shadow-2xl">
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
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-orange-700 font-semibold uppercase tracking-wide text-sm">
            About Us
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 leading-tight">
            A Trusted Technology Staffing & Consulting Partner
          </h2>

          <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            SICADA DIGITAL helps enterprise organizations scale their
            technology operations with highly skilled professionals,
            engineering teams, and strategic IT consulting services.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-[2rem] bg-orange-700 text-white p-12 lg:p-16 shadow-2xl">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold leading-tight">
                Build High-Performing Technology Teams Today
              </h2>

              <p className="mt-6 text-orange-100 text-lg leading-relaxed">
                Partner with us to access experienced IT professionals and
                enterprise technology expertise tailored to your business needs.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="bg-white text-orange-700 hover:bg-slate-100 px-7 py-4 rounded-2xl font-semibold transition">
                  Contact Us
                </button>

                <button className="border border-orange-300 hover:bg-orange-600 px-7 py-4 rounded-2xl font-semibold transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-slate-200 bg-white py-10"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              SICADA DIGITAL
            </h3>
            <p className="mt-3 text-slate-500 max-w-md leading-relaxed">
              Delivering enterprise technology talent and IT consulting
              solutions for modern businesses.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">Contact</h4>
            <p className="mt-3 text-slate-500">info@sicadadigital.com</p>
            <p className="text-slate-500">+61 000 000 000</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
