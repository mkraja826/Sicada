import { useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          company: formData.company,
          inquiryType: formData.serviceNeeded,
          message: `Phone: ${formData.phone}\nBudget: ${formData.budget}\n\nProject Details:\n${formData.message}`,
        }),
      });
      const text = await res.text();
      if (!res.ok) throw new Error(text || "Failed to submit enquiry");
      alert("Your enquiry has been submitted successfully!");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", company: "", serviceNeeded: "", budget: "", message: "" });
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
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Contact Sicada</p>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-[4.7rem] leading-[1.03] tracking-[-0.045em] font-semibold max-w-5xl">
              Start with the business problem. We&apos;ll help define the AI path.
            </h1>
            <p className="mt-7 text-xl lg:text-[1.3rem] leading-relaxed text-slate-600 max-w-3xl">
              Talk to Sicada about AI-native applications, AI CRM and ERP, machine learning, LLM systems, enterprise automation, cybersecurity or modernization of existing software.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact-form" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 font-semibold">Start a conversation <ArrowRight size={18} /></a>
              <a href="mailto:Hr@sicadadigital.com" className="inline-flex items-center gap-3 border border-slate-400 hover:border-slate-950 px-7 py-4 font-semibold">Email our team</a>
            </div>
          </div>
          <div className="lg:col-span-4 lg:border-l lg:border-slate-200 lg:pl-10">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Common conversations</p>
            <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
              {["Build an AI product", "Add AI to existing software", "Create AI CRM or ERP", "Use company data with LLMs", "Apply AI to cybersecurity"].map((item) => (
                <div key={item} className="py-4 flex gap-3"><CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={18} /><span className="font-medium">{item}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-b border-slate-200 py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-300">
          {[
            [Mail, "Email", "Hr@sicadadigital.com"],
            [Phone, "Phone", "+916301469938"],
            [MapPin, "Locations", "Australia • India"],
            [Clock3, "Response", "Within 24 hours"],
          ].map(([Icon, title, text]) => (
            <div key={title} className="bg-white border-r border-b border-slate-300 p-7 lg:p-8">
              <Icon className="text-blue-600" size={28} />
              <p className="mt-7 text-sm font-semibold text-slate-500 uppercase tracking-wide">{title}</p>
              <p className="mt-2 text-lg font-medium">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact-form" className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Project enquiry</p>
            <h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-tight">Tell us what you&apos;re trying to change.</h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">You don&apos;t need a finished technical specification. Share the current workflow, the opportunity or the problem you want to solve.</p>
            <div className="mt-10 space-y-5">
              {[
                [BrainCircuit, "AI strategy & product", "Define where AI creates value and what should be built."],
                [Building2, "Enterprise integration", "Connect intelligence to CRM, ERP, data and existing applications."],
                [ShieldCheck, "Security & governance", "Design for controlled, dependable enterprise use."],
              ].map(([Icon, title, text]) => (
                <div key={title} className="flex gap-4"><Icon className="text-blue-600 shrink-0 mt-1" size={24} /><div><h3 className="font-semibold">{title}</h3><p className="mt-1 text-slate-600 leading-relaxed">{text}</p></div></div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 bg-slate-50 border border-slate-300 p-7 sm:p-10 lg:p-12">
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6">
              <label className="block"><span className="block text-sm font-semibold mb-2">First name</span><input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-white border border-slate-300 px-4 py-4" required /></label>
              <label className="block"><span className="block text-sm font-semibold mb-2">Last name</span><input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-white border border-slate-300 px-4 py-4" required /></label>
              <label className="block"><span className="block text-sm font-semibold mb-2">Work email</span><input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-white border border-slate-300 px-4 py-4" required /></label>
              <label className="block"><span className="block text-sm font-semibold mb-2">Phone</span><input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-white border border-slate-300 px-4 py-4" /></label>
              <label className="block sm:col-span-2"><span className="block text-sm font-semibold mb-2">Company</span><input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-white border border-slate-300 px-4 py-4" /></label>
              <label className="block"><span className="block text-sm font-semibold mb-2">What are you exploring?</span><select name="serviceNeeded" value={formData.serviceNeeded} onChange={handleChange} className="w-full bg-white border border-slate-300 px-4 py-4" required><option value="">Select an area</option><option value="AI / LLM Application">AI / LLM Application</option><option value="AI CRM">AI CRM</option><option value="AI ERP">AI ERP</option><option value="Machine Learning">Machine Learning</option><option value="RAG / Enterprise Knowledge">RAG / Enterprise Knowledge</option><option value="AI Agents / Automation">AI Agents / Automation</option><option value="AI Cybersecurity">AI Cybersecurity</option><option value="Existing Software + AI">Existing Software + AI</option><option value="Cloud / Data Engineering">Cloud / Data Engineering</option><option value="Consultation">Not sure yet / Consultation</option></select></label>
              <label className="block"><span className="block text-sm font-semibold mb-2">Estimated budget</span><select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-white border border-slate-300 px-4 py-4"><option value="">Select if known</option><option value="Under $5,000">Under $5,000</option><option value="$5,000 - $15,000">$5,000 - $15,000</option><option value="$15,000 - $50,000">$15,000 - $50,000</option><option value="$50,000+">$50,000+</option><option value="Not sure yet">Not sure yet</option></select></label>
              <label className="block sm:col-span-2"><span className="block text-sm font-semibold mb-2">Business problem / project context</span><textarea name="message" value={formData.message} onChange={handleChange} rows="7" placeholder="Describe the current process, challenge, users, systems involved or the outcome you want to achieve." className="w-full bg-white border border-slate-300 px-4 py-4" required /></label>
              <div className="sm:col-span-2 flex flex-col sm:flex-row gap-5 sm:items-center">
                <button type="submit" disabled={loading} className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold disabled:opacity-60"><Send size={18} />{loading ? "Submitting..." : "Submit enquiry"}</button>
                <p className="text-sm text-slate-500">Your enquiry is sent through Sicada&apos;s existing project enquiry workflow.</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white py-24 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-wide">What happens next</p>
            <h2 className="mt-5 text-4xl lg:text-5xl font-semibold tracking-[-0.03em]">A useful first conversation, not a sales script.</h2>
          </div>
          <div className="lg:col-span-7 border border-white/10">
            {[
              ["01", "Understand", "Clarify the business problem, users, workflow and constraints."],
              ["02", "Assess", "Identify where AI, ML or software engineering could create practical value."],
              ["03", "Shape", "Outline a sensible architecture, scope and path to validation or production."],
            ].map(([num, title, text], index) => (
              <div key={title} className={`grid sm:grid-cols-12 gap-5 p-7 lg:p-8 ${index ? "border-t border-white/10" : ""}`}><span className="sm:col-span-1 text-blue-400 font-semibold">{num}</span><h3 className="sm:col-span-3 text-xl font-semibold">{title}</h3><p className="sm:col-span-8 text-slate-300 leading-relaxed">{text}</p></div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}