import { useState } from "react";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Globe2,
  GraduationCap,
  HeartHandshake,
  Laptop,
  Lightbulb,
} from "lucide-react";

export default function Careers() {
  const jobs = [
    "Software Developer",
    "Frontend Engineer",
    "Backend Engineer",
    "Cloud Engineer",
    "Cybersecurity Analyst",
    "Data Engineer",
    "AI Engineer",
    "General Application",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    linkedin: "",
    resumeLink: "",
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
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const text = await res.text();

      if (!res.ok) {
        throw new Error(text || "Submission failed");
      }

      alert("Application submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        linkedin: "",
        resumeLink: "",
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
              Careers
            </p>

            <h1 className="mt-5 text-5xl lg:text-7xl font-semibold tracking-tight leading-tight">
              Join a team building modern digital solutions.
            </h1>

            <p className="mt-8 text-xl text-slate-600 leading-relaxed">
              Work on meaningful software products, cloud platforms, AI
              solutions and enterprise applications for real businesses.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#openings"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold transition"
              >
                View open roles <ArrowRight size={18} />
              </a>

              <a
                href="#apply"
                className="inline-flex items-center gap-2 border border-slate-300 hover:border-slate-900 px-8 py-4 font-semibold transition"
              >
                Submit resume
              </a>
            </div>
          </div>

          <div className="bg-slate-950 text-white p-10 lg:p-12">
            <Code2 className="text-blue-400" size={48} />

            <h3 className="mt-8 text-3xl font-semibold">
              Build, learn and grow with modern technology.
            </h3>

            <div className="mt-10 grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {[
                "Software Products",
                "Cloud Platforms",
                "AI Solutions",
                "Enterprise Apps",
              ].map((item) => (
                <div key={item} className="bg-slate-950 p-5">
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-blue-700 font-semibold uppercase tracking-wide">
              Our Culture
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight">
              A place for people who like building useful technology.
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
            {[
              {
                icon: Laptop,
                title: "Modern Tech Stack",
                text: "Work with modern web, cloud, data and AI technologies.",
              },
              {
                icon: Lightbulb,
                title: "Innovation Focus",
                text: "Contribute to practical solutions that solve real problems.",
              },
              {
                icon: GraduationCap,
                title: "Learning Mindset",
                text: "Grow your skills through projects, mentorship and self-learning.",
              },
              {
                icon: HeartHandshake,
                title: "Team Collaboration",
                text: "Work with supportive teams focused on quality delivery.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white p-8">
                <Icon className="text-blue-600" size={38} />

                <h3 className="mt-8 text-2xl font-semibold">{title}</h3>

                <p className="mt-4 text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section id="openings" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-blue-700 font-semibold uppercase tracking-wide">
              Open Roles
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-tight">
              Explore opportunities at Sicada Digital.
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {jobs.slice(0, 6).map((job) => (
              <div
                key={job}
                className="border border-slate-200 p-8 hover:shadow-xl transition"
              >
                <div className="flex items-start gap-5">
                  <Briefcase className="text-blue-600" size={36} />

                  <div>
                    <p className="text-sm font-semibold text-blue-700">
                      Technology
                    </p>

                    <h3 className="mt-1 text-2xl font-semibold">{job}</h3>

                    <p className="mt-3 text-slate-500">
                      Remote / Hybrid • Full Time
                    </p>
                  </div>
                </div>

                <a
                  href="#apply"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      position: job,
                    })
                  }
                  className="mt-8 inline-flex items-center gap-2 text-blue-700 font-semibold"
                >
                  Apply now <ArrowRight size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY */}
      <section id="apply" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-slate-200 p-10 lg:p-12">
            <div className="mb-10">
              <p className="text-blue-700 font-semibold uppercase tracking-wide">
                Apply Online
              </p>

              <h2 className="mt-4 text-4xl font-semibold">
                Submit your application.
              </h2>

              <p className="mt-4 text-slate-600">
                Upload your resume to Google Drive or Dropbox, make it
                shareable, and paste the resume link below.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border border-slate-300 px-4 py-4"
                required
              />

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
                required
              />

              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full border border-slate-300 px-4 py-4"
                required
              >
                <option value="">Select Position</option>
                {jobs.map((job) => (
                  <option key={job} value={job}>
                    {job}
                  </option>
                ))}
              </select>

              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="LinkedIn Profile URL"
                className="w-full border border-slate-300 px-4 py-4"
              />

              <input
                type="url"
                name="resumeLink"
                value={formData.resumeLink}
                onChange={handleChange}
                placeholder="Resume Link / Google Drive Link"
                className="w-full border border-slate-300 px-4 py-4"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message / Experience"
                rows="5"
                className="w-full border border-slate-300 px-4 py-4"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 font-semibold transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-950 text-white p-12 lg:p-16 text-center">
            <Globe2 className="mx-auto text-blue-400" size={48} />

            <h2 className="mt-8 text-4xl lg:text-5xl font-semibold">
              Build your future with Sicada Digital.
            </h2>

            <p className="mt-6 text-xl text-slate-300">
              Join a team focused on software, cloud, AI and digital innovation.
            </p>

            <a
              href="#apply"
              className="inline-flex items-center gap-2 mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold transition"
            >
              Apply now <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}