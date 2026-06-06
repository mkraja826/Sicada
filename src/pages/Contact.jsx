
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
     

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="text-orange-700 font-semibold uppercase tracking-wider">
            Contact Us
          </p>

          <h1 className="mt-4 text-5xl lg:text-6xl font-bold text-slate-900">
            Let's Discuss Your Requirements
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600">
            Whether you're looking for skilled technology professionals,
            project delivery support, or consulting services,
            our team is ready to help.
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>

            <h2 className="text-4xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div className="flex gap-5 p-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
                <Mail className="text-orange-700" size={34} />

                <div>
                  <h3 className="font-semibold text-lg">
                    Email
                  </h3>

                  <p className="text-slate-600">
                    contact@sicadadigital.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5 p-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
                <Phone className="text-orange-700" size={34} />

                <div>
                  <h3 className="font-semibold text-lg">
                    Phone
                  </h3>

                  <p className="text-slate-600">
                    +61 400 000 000
                  </p>
                </div>
              </div>

              <div className="flex gap-5 p-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
                <MapPin className="text-orange-700" size={34} />

                <div>
                  <h3 className="font-semibold text-lg">
                    Locations
                  </h3>

                  <p className="text-slate-600">
                    Australia • India
                  </p>
                </div>
              </div>

              <div className="flex gap-5 p-6 rounded-3xl border border-slate-200 bg-white shadow-sm">
                <Clock3 className="text-orange-700" size={34} />

                <div>
                  <h3 className="font-semibold text-lg">
                    Response Time
                  </h3>

                  <p className="text-slate-600">
                    Within 24 Hours
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-slate-200 rounded-[2rem] p-10 shadow-xl">

            <h2 className="text-3xl font-bold mb-8">
              Send Us a Message
            </h2>

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-slate-300 rounded-xl px-4 py-4"
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-slate-300 rounded-xl px-4 py-4"
                />

              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-slate-300 rounded-xl px-4 py-4"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full border border-slate-300 rounded-xl px-4 py-4"
              />

              <select className="w-full border border-slate-300 rounded-xl px-4 py-4">
                <option>Select Inquiry Type</option>
                <option>IT Staffing</option>
                <option>Consulting</option>
                <option>Project Delivery</option>
                <option>Partnership</option>
              </select>

              <textarea
                rows="6"
                placeholder="Tell us about your requirements..."
                className="w-full border border-slate-300 rounded-xl px-4 py-4"
              />

              <button
                type="submit"
                className="w-full bg-orange-700 hover:bg-orange-800 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
              >
                <Send size={18} />
                Submit Inquiry
              </button>

            </form>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Need Skilled Technology Professionals?
          </h2>

          <p className="mt-6 text-slate-400">
            Connect with Sicada Digital to discuss staffing,
            consulting, and enterprise technology solutions.
          </p>

          <a
            href="mailto:contact@sicadadigital.com"
            className="inline-block mt-8 bg-orange-700 hover:bg-orange-800 px-8 py-4 rounded-xl font-semibold"
          >
            contact@sicadadigital.com
          </a>

        </div>
      </section>
    </div>
  );
}