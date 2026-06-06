export default function Careers() {
  const jobs = [
    {
      title: "React Developer",
      location: "Remote",
      type: "Full Time",
    },
    {
      title: "QA Automation Engineer",
      location: "India",
      type: "Full Time",
    },
    {
      title: "DevOps Engineer",
      location: "Australia",
      type: "Contract",
    },
    {
      title: "Business Analyst",
      location: "Remote",
      type: "Full Time",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-orange-700 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Build Your Career With Sicada Digital
          </h1>

          <p className="mt-6 text-xl text-orange-100 max-w-3xl mx-auto">
            Join a team delivering technology staffing and consulting
            solutions for global enterprises.
          </p>

        </div>
      </section>

      {/* Why Join */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Join Sicada Digital
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white border rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Global Projects
              </h3>

              <p className="text-slate-600">
                Work with clients across Australia and international markets.
              </p>
            </div>

            <div className="bg-white border rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Career Growth
              </h3>

              <p className="text-slate-600">
                Continuous learning and advancement opportunities.
              </p>
            </div>

            <div className="bg-white border rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Flexible Work
              </h3>

              <p className="text-slate-600">
                Remote, hybrid and on-site opportunities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Current Openings
          </h2>

          <div className="space-y-6">

            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm border"
              >
                <h3 className="text-2xl font-semibold">
                  {job.title}
                </h3>

                <p className="mt-3 text-slate-500">
                  {job.location} • {job.type}
                </p>

                <button className="mt-5 bg-orange-700 text-white px-6 py-3 rounded-xl">
                  Apply Now
                </button>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Resume Submission */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Submit Your Resume
          </h2>

          <p className="text-slate-600 mb-8">
            Don't see a suitable opening? Send us your resume.
          </p>

          <a
            href="https://forms.google.com"
            target="_blank"
            rel="noreferrer"
            className="bg-orange-700 text-white px-8 py-4 rounded-xl inline-block"
          >
            Submit Resume
          </a>

        </div>
      </section>

    </div>
  );
}