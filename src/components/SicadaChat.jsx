import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, ArrowUp, Bot, CheckCircle2, MessageSquareText, ShieldCheck, Sparkles, X } from "lucide-react";

const QUICK_PROMPTS = [
  "Improve our CRM with AI",
  "Build an AI-enabled ERP",
  "Secure enterprise LLM adoption",
  "Explore AI cybersecurity",
];

function getLocalAnswer(message) {
  const text = message.toLowerCase();
  if (text.includes("crm")) return "Sicada can design AI-enabled CRM capabilities such as lead scoring, sales copilots, automated follow-ups, customer intelligence, sentiment analysis and predictive engagement. We can also integrate these capabilities into an existing CRM rather than replacing the whole platform.";
  if (text.includes("erp")) return "Sicada can build or modernize ERP platforms with AI for forecasting, procurement intelligence, finance workflows, inventory optimization, document automation and operational decision support.";
  if (text.includes("cyber") || text.includes("security") || text.includes("threat")) return "Sicada engineers AI-assisted cybersecurity capabilities for anomaly detection, security analytics, incident triage, suspicious-behavior analysis and controlled response workflows. AI is used to augment security teams, not remove human oversight.";
  if (text.includes("llm") || text.includes("rag") || text.includes("agent")) return "Sicada works with LLM applications, RAG, enterprise knowledge systems and AI agents. A production system typically combines the model with trusted data, APIs, evaluation, guardrails, security controls and observability.";
  if (text.includes("machine learning") || text.includes("ml") || text.includes("prediction")) return "Sicada builds machine-learning systems for prediction, classification, recommendations, anomaly detection, computer vision and decision support, then integrates them into real applications and business workflows.";
  if (text.includes("price") || text.includes("cost") || text.includes("quote")) return "AI project pricing depends on the use case, integrations, data, security requirements and production scope. The best next step is to share the problem you want to solve so the Sicada team can assess the architecture and effort.";
  return "Sicada designs and engineers AI-powered applications, LLM systems, machine-learning solutions, intelligent CRM and ERP platforms, enterprise AI integrations and AI-assisted cybersecurity. Tell me what you are trying to build or improve, and I can point you toward the most relevant Sicada capability.";
}

function providerLabel(status) {
  if (status === "live") return "Live AI";
  if (status === "blocked") return "Sicada guardrail";
  if (!status) return null;
  return "Curated fallback";
}

export default function SicadaChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [nextStep, setNextStep] = useState(null);
  const [providerStatus, setProviderStatus] = useState(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadStatus, setLeadStatus] = useState("idle");
  const [lead, setLead] = useState({ name: "", email: "", company: "", project: "" });
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Welcome to Sicada AI. Describe your business challenge or the AI capability you want to introduce, and I’ll help identify the right Sicada approach." },
  ]);
  const scrollRef = useRef(null);

  const suggestions = useMemo(() => QUICK_PROMPTS, []);

  useEffect(() => {
    if (open) requestAnimationFrame(() => scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" }));
  }, [open, messages, loading, showLeadForm]);

  async function submitMessage(value) {
    const message = value.trim();
    if (!message || loading) return;
    const userMessage = { role: "user", text: message };
    const history = messages.slice(-8);
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setLoading(true);
    setProviderStatus(null);
    setNextStep(null);

    try {
      const response = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message, history }) });
      if (!response.ok) throw new Error("Chat unavailable");
      const data = await response.json();
      const reply = typeof data?.reply === "string" ? data.reply : getLocalAnswer(message);
      setMessages((current) => [...current, { role: "assistant", text: reply }]);
      setNextStep(data?.nextStep || null);
      setProviderStatus(data?.providerStatus || (data?.source === "groq" ? "live" : "fallback"));
      if (data?.leadIntent === "high") setShowLeadForm(true);
    } catch {
      setMessages((current) => [...current, { role: "assistant", text: getLocalAnswer(message) }]);
      setProviderStatus("frontend-fallback");
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event) { event.preventDefault(); submitMessage(input); }

  async function submitLead(event) {
    event.preventDefault();
    if (!lead.name.trim() || !lead.email.trim() || !lead.project.trim()) return;
    setLeadStatus("submitting");
    const conversationSummary = messages.slice(-8).map((message) => `${message.role === "user" ? "Visitor" : "Sicada AI"}: ${message.text}`).join("\n");
    try {
      const response = await fetch("/api/enquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: lead.name.trim(), email: lead.email.trim(), company: lead.company.trim(), service: "Sicada AI consultation", message: `${lead.project.trim()}\n\nChat context:\n${conversationSummary}` }) });
      if (!response.ok) throw new Error("Lead storage unavailable");
      setLeadStatus("success");
      setShowLeadForm(false);
      setMessages((current) => [...current, { role: "assistant", text: "Thank you. Your project details have been shared with the Sicada team." }]);
    } catch { setLeadStatus("fallback"); }
  }

  const statusLabel = providerLabel(providerStatus);

  return (
    <>
      {open && (
        <section className="fixed z-[70] inset-x-3 bottom-20 sm:inset-auto sm:right-6 sm:bottom-24 sm:w-[430px] h-[min(680px,calc(100dvh-7rem))] bg-white border border-slate-200 shadow-[0_24px_70px_rgba(15,23,42,0.22)] rounded-2xl overflow-hidden flex flex-col" aria-label="Sicada AI assistant">
          <header className="relative px-5 py-4 bg-slate-950 text-white border-b border-white/10">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/80 to-transparent" />
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative w-10 h-10 rounded-xl border border-blue-400/25 bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Sparkles size={19} className="text-blue-400" />
                  <span className="absolute -right-0.5 -bottom-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-slate-950" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2"><p className="font-semibold text-[15px] tracking-[-0.01em]">Sicada AI</p><span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-blue-300 border border-blue-400/20 bg-blue-400/10 px-1.5 py-0.5 rounded">Business</span></div>
                  <p className="text-xs text-slate-400 mt-0.5 truncate">Enterprise AI solutions assistant</p>
                </div>
              </div>
              <button type="button" onClick={() => setOpen(false)} className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors" aria-label="Close Sicada AI"><X size={18} /></button>
            </div>
          </header>

          <div className="px-5 py-2.5 bg-white border-b border-slate-200 flex items-center justify-between gap-3 text-[11px] text-slate-500">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck size={13} className="text-blue-600" /> Sicada & business requirements only</span>
            <span className="hidden sm:inline">No code generation</span>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 sm:px-5 py-5 space-y-5 bg-slate-50/70 overscroll-contain">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={message.role === "user" ? "flex justify-end" : "flex items-start gap-2.5 justify-start"}>
                {message.role === "assistant" && <div className="mt-0.5 w-7 h-7 rounded-lg bg-slate-950 text-blue-400 flex items-center justify-center shrink-0"><Bot size={14} /></div>}
                <div className={message.role === "user" ? "max-w-[84%] rounded-2xl rounded-br-md bg-blue-600 text-white px-4 py-3 text-[13px] sm:text-sm leading-6 shadow-sm" : "max-w-[86%] rounded-2xl rounded-tl-md bg-white border border-slate-200 text-slate-700 px-4 py-3 text-[13px] sm:text-sm leading-6 shadow-sm"}>{message.text}</div>
              </div>
            ))}

            {loading && (
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 w-7 h-7 rounded-lg bg-slate-950 text-blue-400 flex items-center justify-center shrink-0"><Bot size={14} /></div>
                <div className="rounded-2xl rounded-tl-md bg-white border border-slate-200 px-4 py-3 shadow-sm flex items-center gap-1.5" aria-label="Sicada AI is responding">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse" /><span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse [animation-delay:150ms]" /><span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-pulse [animation-delay:300ms]" />
                </div>
              </div>
            )}

            {statusLabel && !loading && messages.length > 1 && (
              <div className="pl-9 flex items-center gap-1.5 text-[10px] font-medium text-slate-400">
                {providerStatus === "live" && <CheckCircle2 size={11} className="text-emerald-600" />}{statusLabel}
              </div>
            )}

            {messages.length === 1 && (
              <div className="pl-0 sm:pl-9 pt-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400 mb-2.5">Explore a capability</p>
                <div className="grid grid-cols-1 gap-2">
                  {suggestions.map((prompt) => <button key={prompt} type="button" onClick={() => submitMessage(prompt)} className="group w-full rounded-xl text-left bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 px-3.5 py-3 text-[13px] font-medium text-slate-700 transition-colors flex items-center justify-between gap-3"><span>{prompt}</span><ArrowRight size={14} className="text-slate-300 group-hover:text-blue-600 transition-colors shrink-0" /></button>)}
                </div>
              </div>
            )}

            {nextStep && !loading && !showLeadForm && (
              <div className="ml-0 sm:ml-9 rounded-xl border border-blue-200 bg-blue-50/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-blue-700 mb-1.5">Recommended next step</p>
                <p className="text-[13px] text-slate-700 leading-5">{nextStep.message}</p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                  {nextStep.href === "/contact" && <button type="button" onClick={() => setShowLeadForm(true)} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue-700 hover:text-blue-800">Share project details <ArrowRight size={14} /></button>}
                  <a href={nextStep.href} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-slate-700 hover:text-slate-950">{nextStep.label} <ArrowRight size={14} /></a>
                </div>
              </div>
            )}

            {showLeadForm && (
              <form onSubmit={submitLead} className="ml-0 sm:ml-9 rounded-xl bg-white border border-slate-200 shadow-sm p-4 space-y-3">
                <div><p className="text-sm font-semibold text-slate-900">Discuss your project</p><p className="text-xs text-slate-500 mt-1 leading-5">Share the essentials and Sicada can continue the conversation with your team.</p></div>
                <input value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} required placeholder="Name" className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-600" />
                <input value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} required type="email" placeholder="Work email" className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-600" />
                <input value={lead.company} onChange={(e) => setLead({ ...lead, company: e.target.value })} placeholder="Company (optional)" className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-blue-600" />
                <textarea value={lead.project} onChange={(e) => setLead({ ...lead, project: e.target.value })} required rows="3" placeholder="What would you like to build or improve?" className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm resize-none outline-none focus:border-blue-600" />
                <div className="flex gap-3 items-center"><button type="submit" disabled={leadStatus === "submitting"} className="rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white px-4 py-2.5 text-sm font-semibold transition-colors">{leadStatus === "submitting" ? "Sending…" : "Send to Sicada"}</button><button type="button" onClick={() => setShowLeadForm(false)} className="text-sm font-semibold text-slate-500 hover:text-slate-800">Cancel</button></div>
              </form>
            )}

            {leadStatus === "fallback" && <div className="ml-0 sm:ml-9 rounded-xl border border-amber-200 bg-amber-50 p-4"><p className="text-sm text-slate-700">Direct enquiry is temporarily unavailable. Your details were not stored.</p><a href="/contact" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">Continue on Contact page <ArrowRight size={15} /></a></div>}
          </div>

          <form onSubmit={handleSubmit} className="px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] border-t border-slate-200 bg-white">
            <div className="rounded-xl flex items-end gap-2 border border-slate-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 bg-white px-3 py-2 transition-shadow">
              <textarea value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); submitMessage(input); } }} rows="1" placeholder="Describe your business or AI requirement…" className="flex-1 resize-none py-2 text-sm leading-5 outline-none min-h-[36px] max-h-24 placeholder:text-slate-400" aria-label="Message Sicada AI" disabled={loading} />
              <button type="submit" disabled={loading || !input.trim()} className="rounded-lg bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 disabled:text-slate-400 text-white w-9 h-9 flex items-center justify-center shrink-0 transition-colors" aria-label="Send message"><ArrowUp size={17} /></button>
            </div>
            <div className="mt-2 px-1 flex items-center justify-between gap-3 text-[10px] text-slate-400"><span>Enter to send · Shift + Enter for a new line</span><span className="hidden sm:inline">Session only</span></div>
          </form>
        </section>
      )}

      <button type="button" onClick={() => setOpen((value) => !value)} className="fixed z-[70] bottom-5 right-4 sm:right-6 group rounded-full bg-slate-950 hover:bg-slate-900 text-white h-13 min-h-[52px] px-4 shadow-[0_12px_35px_rgba(15,23,42,0.28)] flex items-center gap-3 border border-slate-800 transition-all hover:-translate-y-0.5" aria-label={open ? "Close Sicada AI" : "Open Sicada AI"} aria-expanded={open}>
        <span className="relative w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center"><MessageSquareText size={17} className="text-blue-400" /><span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-emerald-400 border-2 border-slate-950" /></span>
        <span className="text-sm font-semibold pr-1">Ask Sicada AI</span>
      </button>
    </>
  );
}
