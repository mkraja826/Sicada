import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    serviceNeeded: "",
    budget: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          company: formData.company,
          inquiryType: formData.serviceNeeded,
          message: `
Phone: ${formData.phone}
Budget: ${formData.budget}

Project Details:
${formData.message}
          `,
        }),
      });

      const text = await res.text();

      if (!res.ok) {
        throw new Error(text || "Failed to submit enquiry");
      }

      alert("Your enquiry has been submitted successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        serviceNeeded: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-700 font-semibold uppercase tracking-wide">
              Contact
            </p>

            <h1 className="mt-5 text-5xl lg:text-7xl font-semibold tracking-tight leading-tight">
              Let’s build something great together.
            </h1>

            <p className="mt-8 text-xl text-slate-600 leading-relaxed">
              Tell us about your software, cloud, AI, cybersecurity or digital
              transformation requirements. Our team will get back to you within
              24 hours.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold transition"
              >
                Start a project <ArrowRight size={18} />
              </a>

              <a
                href="mailto:Hr@sicadadigital.com"
                className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-900 px-8 py-4 font-semibold transition"
              >
                Email us
              </a>
            </div>
          </div>

          <div className="bg-slate-950 text-white p-10 lg:p-12">
            <MessageSquare className="text-blue-400" size={48} />

            <h3 className="mt-8 text-3xl font-semibold">
              Speak with a technology expert.
            </h3>

            <p className="mt-5 text-slate-300 leading-relaxed">
              Whether you need a new software platform, mobile app, AI
              automation, cloud migration or technical consultation, we can help
              you define the right path.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Project consultation",
                "Technology strategy",
                "Software development",
                "Cloud and AI solutions",
              ].map((item) => (
                <div key={item} className="border border-white/10 p-4">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
            {[
              {
                icon: Mail,
                title: "Email",
                text: "Hr@sicadadigital.com",
              },
              {
                icon: Phone,
                title: "Phone",
                text: "+916301469938",
              },
              {
                icon: MapPin,
                title: "Locations",
                text: "Australia • India",
              },
              {
                icon: Clock3,
                title: "Response Time",
                text: "Within 24 Hours",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white p-8">
                <Icon className="text-blue-600" size={36} />

                <h3 className="mt-6 text-xl font-semibold">{title}</h3>

                <p className="mt-3 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="contact-form" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white border border-slate-200 p-10 lg:p-12 shadow-sm">
            <div className="mb-10">
              <p className="text-blue-700 font-semibold uppercase tracking-wide">
                Project Enquiry
              </p>

              <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight">
                Tell us about your project.
              </h2>

              <p className="mt-5 text-lg text-slate-600">
                Share a few details and we’ll help you understand the best
                technology approach.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full border border-slate-300 px-4 py-4"
                  required
                />

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full border border-slate-300 px-4 py-4"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full border border-slate-300 px-4 py-4"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full border border-slate-300 px-4 py-4"
                />
              </div>

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full border border-slate-300 px-4 py-4"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <select
                  name="serviceNeeded"
                  value={formData.serviceNeeded}
                  onChange={handleChange}
                  className="w-full border border-slate-300 px-4 py-4"
                  required
                >
                  <option value="">Service Needed</option>
                  <option value="Custom Software Development">
                    Custom Software Development
                  </option>
                  <option value="Mobile App Development">
                    Mobile App Development
                  </option>
                  <option value="Cloud Engineering">Cloud Engineering</option>
                  <option value="AI & Automation">AI & Automation</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Data & Analytics">Data & Analytics</option>
                  <option value="Consultation">Consultation</option>
                </select>

                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full border border-slate-300 px-4 py-4"
                >
                  <option value="">Estimated Budget</option>
                  <option value="Under $5,000">Under $5,000</option>
                  <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                  <option value="$15,000 - $50,000">$15,000 - $50,000</option>
                  <option value="$50,000+">$50,000+</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="7"
                placeholder="Tell us about your project requirements..."
                className="w-full border border-slate-300 px-4 py-4"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 font-semibold flex items-center justify-center gap-2 transition disabled:opacity-60"
              >
                <Send size={18} />
                {loading ? "Submitting..." : "Submit Project Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold">
            Need help choosing the right technology?
          </h2>

          <p className="mt-6 text-xl text-slate-300">
            Contact Sicada Digital to discuss your idea, product or digital
            transformation plan.
          </p>

          <a
            href="mailto:Hr@sicadadigital.com"
            className="inline-flex mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 font-semibold transition"
          >
            Hr@sicadadigital.com
          </a>
        </div>
      </section>
    </div>
  );
}