import { useState } from "react";
import { Briefcase, GraduationCap, Globe2, Users } from "lucide-react";

export default function Careers() {
  const jobs = [
    "React Developer",
    "QA Automation Engineer",
    "DevOps Engineer",
    "Business Analyst",
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

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Submission failed");
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
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100 py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-700 mb-6">
              Careers at Sicada Digital
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Build Your Career With Enterprise Technology Teams
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              Join Sicada Digital and work with technology teams supporting
              insurance, enterprise, cloud, QA, DevOps, data, and software
              engineering projects.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#openings"
                className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition"
              >
                View Open Roles
              </a>

              <a
                href="#apply"
                className="border border-slate-300 hover:border-orange-700 hover:text-orange-700 px-8 py-4 rounded-2xl font-semibold transition"
              >
                Submit Resume Link
              </a>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">
              Why Join Sicada Digital?
            </h3>

            <div className="space-y-6">
              {[
                [Globe2, "Global Opportunities", "Work with Australia and India-based enterprise teams."],
                [Users, "Professional Growth", "Build your skills through real-world technology projects."],
                [GraduationCap, "Student Friendly", "Opportunities for freshers, interns and early-career talent."],
              ].map(([Icon, title, text]) => (
                <div key={title} className="flex gap-5 rounded-3xl bg-white/10 border border-white/10 p-6">
                  <div className="h-14 w-14 rounded-2xl bg-orange-600 flex items-center justify-center">
                    <Icon size={28} />
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold">{title}</h4>
                    <p className="mt-2 text-slate-300">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="openings" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-orange-700 font-semibold uppercase tracking-wide text-sm">
              Current Openings
            </p>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
              Explore Career Opportunities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {jobs.slice(0, 4).map((job) => (
              <div
                key={job}
                className="bg-white rounded-[2rem] border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="flex items-start gap-5">
                  <div className="h-14 w-14 rounded-2xl bg-orange-100 flex items-center justify-center">
                    <Briefcase className="text-orange-700" size={28} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-orange-700">
                      Technology
                    </p>

                    <h3 className="text-2xl font-bold mt-1">{job}</h3>

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
                  className="mt-8 inline-block bg-orange-700 hover:bg-orange-800 text-white px-6 py-3 rounded-xl font-semibold transition"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-slate-200 rounded-[2rem] p-10 shadow-xl">
            <div className="text-center mb-10">
              <p className="text-orange-700 font-semibold uppercase tracking-wide text-sm">
                Apply Online
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                Submit Your Application
              </h2>

              <p className="mt-4 text-slate-600">
                Upload your resume to Google Drive or Dropbox, make it shareable,
                and paste the resume link below.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border border-slate-300 rounded-xl px-4 py-4"
                required
              />

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
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-slate-300 rounded-xl px-4 py-4"
                required
              />

              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-xl px-4 py-4"
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
                className="w-full border border-slate-300 rounded-xl px-4 py-4"
              />

              <input
                type="url"
                name="resumeLink"
                value={formData.resumeLink}
                onChange={handleChange}
                placeholder="Resume Link / Google Drive Link"
                className="w-full border border-slate-300 rounded-xl px-4 py-4"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message / Experience"
                rows="5"
                className="w-full border border-slate-300 rounded-xl px-4 py-4"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-700 text-white py-4 rounded-xl font-semibold hover:bg-orange-800 transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}