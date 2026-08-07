import { useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  Briefcase,
  CheckCircle2,
  Code2,
  Database,
  Network,
  ShieldCheck,
  Users,
} from "lucide-react";

export default function Careers() {
  const jobs = [
    "AI Engineer",
    "Machine Learning Engineer",
    "LLM Engineer",
    "Full-Stack Engineer",
    "Data Engineer",
    "Cloud Engineer",
    "Cybersecurity Engineer",
    "Software Engineer",
    "General Application",
  ];

  const featuredRoles = [
    [BrainCircuit, "AI Engineer", "Design and engineer AI-native applications, agents, retrieval systems and production AI workflows."],
    [Network, "Machine Learning Engineer", "Build, evaluate and operationalize predictive models and machine-learning systems."],
    [Code2, "Full-Stack Engineer", "Create high-quality software experiences around AI, enterprise workflows, APIs and data."],
    [Database, "Data Engineer", "Build the governed data foundations, pipelines and retrieval layers that dependable AI requires."],
    [ShieldCheck, "Cybersecurity Engineer", "Engineer secure systems and intelligent capabilities for modern security operations."],
    [Briefcase, "Cloud Engineer", "Design reliable cloud infrastructure, deployment pipelines, observability and AI workloads."],
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const text = await res.text();
      if (!res.ok) throw new Error(text || "Submission failed");
      alert("Application submitted successfully!");
      setFormData({ name: "", email: "", phone: "", position: "", linkedin: "", resumeLink: "", message: "" });
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-14 items-end">
          <div className="lg:col-span-8">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Careers at Sicada</p>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-[4.7rem] leading-[1.03] tracking-[-0.045em] font-semibold max-w-5xl">
              Build the intelligence layer of tomorrow&apos;s software.
            </h1>
            <p className="mt-7 text-xl lg:text-[1.3rem] leading-relaxed text-slate-600 max-w-3xl">
              Work across AI, machine learning, LLMs, enterprise software, data, cloud and cybersecurity to turn emerging technology into dependable products.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#openings" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 font-semibold">Explore roles <ArrowRight size={18} /></a>
              <a href="#apply" className="inline-flex items-center gap-3 border border-slate-400 hover:border-slate-950 px-7 py-4 font-semibold">Submit your profile</a>
            </div>
          </div>
          <div className="lg:col-span-4 lg:border-l lg:border-slate-200 lg:pl-10">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Work at the intersection of</p>
            <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
              {["Artificial intelligence", "Enterprise software", "Machine learning", "Cybersecurity", "Cloud & data"].map((item) => (
                <div key={item} className="py-4 font-medium">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Engineering culture</p>
            <h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-tight">Curiosity matters. Engineering discipline matters more.</h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xl text-slate-600 leading-relaxed">AI moves quickly. Our work requires people who enjoy learning while still caring deeply about fundamentals: users, data, architecture, security, testing and production reliability.</p>
            <div className="mt-10 grid sm:grid-cols-2 border-t border-l border-slate-300">
              {[
                ["Learn continuously", "Explore new models and techniques without chasing technology for its own sake."],
                ["Build for production", "Turn experiments into software people can depend on."],
                ["Think in systems", "Understand how models, data, interfaces, infrastructure and security connect."],
                ["Work together", "Strong products come from clear thinking, critique and collaboration."],
              ].map(([title, text]) => (
                <div key={title} className="bg-white border-r border-b border-slate-300 p-7 min-h-[210px]">
                  <CheckCircle2 className="text-blue-600" size={22} />
                  <h3 className="mt-7 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="openings" className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Opportunities</p>
              <h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">Engineering roles across the AI stack.</h2>
            </div>
            <p className="lg:col-span-5 text-lg text-slate-600 leading-relaxed">Roles shown here represent the disciplines Sicada works across. Availability may vary; you can also submit a general application.</p>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200">
            {featuredRoles.map(([Icon, title, text]) => (
              <article key={title} className="border-r border-b border-slate-200 p-8 lg:p-9 min-h-[300px] flex flex-col">
                <Icon className="text-blue-600" size={30} />
                <h3 className="mt-9 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 text-slate-600 leading-relaxed flex-1">{text}</p>
                <a href="#apply" onClick={() => setFormData({ ...formData, position: title })} className="mt-8 inline-flex items-center gap-2 text-blue-700 font-semibold">Apply for this discipline <ArrowRight size={18} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-wide">The work</p>
            <h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-tight">Work on AI as a system, not just a model.</h2>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">Teams can work across the full path from product problem and data to model behavior, software experience, deployment and continuous improvement.</p>
          </div>
          <div className="lg:col-span-7 border border-white/10">
            {["AI-native applications and copilots", "RAG and enterprise knowledge systems", "AI CRM and ERP capabilities", "Machine-learning pipelines and evaluation", "AI-assisted cybersecurity", "Cloud, APIs, data and production infrastructure"].map((item, index) => (
              <div key={item} className={`flex items-center gap-5 p-6 lg:p-7 ${index ? "border-t border-white/10" : ""}`}>
                <span className="text-blue-400 text-sm font-semibold">0{index + 1}</span><span className="text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Apply</p>
            <h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">Tell us what you&apos;re good at.</h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">Share your experience, the discipline you&apos;re interested in and a public resume link. The existing application workflow remains connected to Sicada&apos;s recruitment backend.</p>
          </div>

          <div className="lg:col-span-8 bg-white border border-slate-300 p-7 sm:p-10 lg:p-12">
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
              <label className="block"><span className="block text-sm font-semibold mb-2">Full name</span><input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full border border-slate-300 px-4 py-4 focus:border-blue-600" required /></label>
              <label className="block"><span className="block text-sm font-semibold mb-2">Email address</span><input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-slate-300 px-4 py-4 focus:border-blue-600" required /></label>
              <label className="block"><span className="block text-sm font-semibold mb-2">Phone number</span><input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-slate-300 px-4 py-4 focus:border-blue-600" required /></label>
              <label className="block"><span className="block text-sm font-semibold mb-2">Area of interest</span><select name="position" value={formData.position} onChange={handleChange} className="w-full border border-slate-300 px-4 py-4 bg-white focus:border-blue-600" required><option value="">Select a role</option>{jobs.map((job) => <option key={job} value={job}>{job}</option>)}</select></label>
              <label className="block"><span className="block text-sm font-semibold mb-2">LinkedIn profile</span><input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="https://" className="w-full border border-slate-300 px-4 py-4 focus:border-blue-600" /></label>
              <label className="block"><span className="block text-sm font-semibold mb-2">Resume link</span><input type="url" name="resumeLink" value={formData.resumeLink} onChange={handleChange} placeholder="Shareable Drive or Dropbox link" className="w-full border border-slate-300 px-4 py-4 focus:border-blue-600" required /></label>
              <label className="block sm:col-span-2"><span className="block text-sm font-semibold mb-2">Experience / message</span><textarea name="message" value={formData.message} onChange={handleChange} rows="6" placeholder="Tell us about the problems you like solving, relevant experience or projects." className="w-full border border-slate-300 px-4 py-4 focus:border-blue-600" /></label>
              <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-5">
                <button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold disabled:opacity-60">{loading ? "Submitting..." : "Submit application"}</button>
                <p className="text-sm text-slate-500">Please make your resume link accessible to reviewers.</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 lg:py-20 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 text-blue-100"><Users size={22} /><span className="text-sm uppercase tracking-wide font-semibold">Build with us</span></div>
            <h2 className="mt-4 text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">Interested in where AI engineering is going next?</h2>
          </div>
          <div className="lg:col-span-4 lg:text-right"><a href="#apply" className="inline-flex items-center gap-3 bg-white text-slate-950 px-7 py-4 font-semibold hover:bg-slate-100">Submit your profile <ArrowRight size={18} /></a></div>
        </div>
      </section>
    </main>
  );
}