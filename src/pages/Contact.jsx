import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  inquiryType: "",
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
    await addDoc(collection(db, "enquiries"), {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      company: formData.company,
      inquiryType: formData.inquiryType,
      message: formData.message,
      createdAt: serverTimestamp(),
    });

    alert("Your enquiry has been submitted successfully!");

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      inquiryType: "",
      message: "",
    });
  } catch (error) {
    alert("Something went wrong. Please try again.");
  }

  setLoading(false);
}
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

           <form onSubmit={handleSubmit} className="space-y-6">
  <div className="grid md:grid-cols-2 gap-6">
    <input
      type="text"
      name="firstName"
      value={formData.firstName}
      onChange={handleChange}
      placeholder="First Name"
      className="w-full border border-slate-300 rounded-xl px-4 py-4"
      required
    />

    <input
      type="text"
      name="lastName"
      value={formData.lastName}
      onChange={handleChange}
      placeholder="Last Name"
      className="w-full border border-slate-300 rounded-xl px-4 py-4"
      required
    />
  </div>

  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Email Address"
    className="w-full border border-slate-300 rounded-xl px-4 py-4"
    required
  />

  <input
    type="text"
    name="company"
    value={formData.company}
    onChange={handleChange}
    placeholder="Company Name"
    className="w-full border border-slate-300 rounded-xl px-4 py-4"
  />

  <select
    name="inquiryType"
    value={formData.inquiryType}
    onChange={handleChange}
    className="w-full border border-slate-300 rounded-xl px-4 py-4"
    required
  >
    <option value="">Select Inquiry Type</option>
    <option value="IT Staffing">IT Staffing</option>
    <option value="Consulting">Consulting</option>
    <option value="Project Delivery">Project Delivery</option>
    <option value="Partnership">Partnership</option>
  </select>

  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    rows="6"
    placeholder="Tell us about your requirements..."
    className="w-full border border-slate-300 rounded-xl px-4 py-4"
    required
  />

  <button
    type="submit"
    disabled={loading}
    className="w-full bg-orange-700 hover:bg-orange-800 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition disabled:opacity-60"
  >
    <Send size={18} />
    {loading ? "Submitting..." : "Submit Inquiry"}
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