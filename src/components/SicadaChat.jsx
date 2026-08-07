import { useMemo, useState } from "react";
import { ArrowRight, ArrowUp, Bot, MessageSquareText, X } from "lucide-react";

const QUICK_PROMPTS = [
  "How can AI improve our CRM?",
  "Can Sicada build an AI ERP?",
  "How do you use LLMs securely?",
  "What AI cybersecurity solutions do you build?",
];

function getLocalAnswer(message) {
  const text = message.toLowerCase();

  if (text.includes("crm")) {
    return "Sicada can design AI-enabled CRM capabilities such as lead scoring, sales copilots, automated follow-ups, customer intelligence, sentiment analysis and predictive engagement. We can also integrate these capabilities into an existing CRM rather than replacing the whole platform.";
  }

  if (text.includes("erp")) {
    return "Sicada can build or modernize ERP platforms with AI for forecasting, procurement intelligence, finance workflows, inventory optimization, document automation and operational decision support.";
  }

  if (text.includes("cyber") || text.includes("security") || text.includes("threat")) {
    return "Sicada engineers AI-assisted cybersecurity capabilities for anomaly detection, security analytics, incident triage, suspicious-behavior analysis and controlled response workflows. AI is used to augment security teams, not remove human oversight.";
  }

  if (text.includes("llm") || text.includes("rag") || text.includes("agent")) {
    return "Sicada works with LLM applications, RAG, enterprise knowledge systems and AI agents. A production system typically combines the model with trusted data, APIs, evaluation, guardrails, security controls and observability.";
  }

  if (text.includes("machine learning") || text.includes("ml") || text.includes("prediction")) {
    return "Sicada builds machine-learning systems for prediction, classification, recommendations, anomaly detection, computer vision and decision support, then integrates them into real applications and business workflows.";
  }

  if (text.includes("price") || text.includes("cost") || text.includes("quote")) {
    return "AI project pricing depends on the use case, integrations, data, security requirements and production scope. The best next step is to share the problem you want to solve so the Sicada team can assess the architecture and effort.";
  }

  return "Sicada designs and engineers AI-powered applications, LLM systems, machine-learning solutions, intelligent CRM and ERP platforms, enterprise AI integrations and AI-assisted cybersecurity. Tell me what you are trying to build or improve, and I can point you toward the most relevant Sicada capability.";
}

export default function SicadaChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [nextStep, setNextStep] = useState(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadStatus, setLeadStatus] = useState("idle");
  const [lead, setLead] = useState({ name: "", email: "", company: "", project: "" });
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hello. I’m Sicada AI. Tell me what you’re trying to build, automate or improve with AI, ML or LLMs.",
    },
  ]);

  const suggestions = useMemo(() => QUICK_PROMPTS.slice(0, 3), []);

  async function submitMessage(value) {
    const message = value.trim();
    if (!message || loading) return;

    const userMessage = { role: "user", text: message };
    const history = messages.slice(-8);

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, history }),
      });

      if (!response.ok) throw new Error("Chat unavailable");

      const data = await response.json();
      const reply = typeof data?.reply === "string" ? data.reply : getLocalAnswer(message);

      setMessages((current) => [...current, { role: "assistant", text: reply }]);
      setNextStep(data?.nextStep || null);
      if (data?.leadIntent === "high") setShowLeadForm(true);
    } catch {
      setMessages((current) => [...current, { role: "assistant", text: getLocalAnswer(message) }]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    submitMessage(input);
  }

  async function submitLead(event) {
    event.preventDefault();
    if (!lead.name.trim() || !lead.email.trim() || !lead.project.trim()) return;

    setLeadStatus("submitting");

    const conversationSummary = messages
      .slice(-8)
      .map((message) => `${message.role === "user" ? "Visitor" : "Sicada AI"}: ${message.text}`)
      .join("\n");

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: lead.name.trim(),
          email: lead.email.trim(),
          company: lead.company.trim(),
          service: "Sicada AI consultation",
          message: `${lead.project.trim()}\n\nChat context:\n${conversationSummary}`,
        }),
      });

      if (!response.ok) throw new Error("Lead storage unavailable");

      setLeadStatus("success");
      setShowLeadForm(false);
      setMessages((current) => [
        ...current,
        { role: "assistant", text: "Thanks. Your project details have been shared with the Sicada team." },
      ]);
    } catch {
      setLeadStatus("fallback");
    }
  }

  return (
    <>
      {open && (
        <section
          className="fixed z-[70] bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[390px] max-h-[72vh] bg-white border border-slate-300 shadow-2xl flex flex-col"
          aria-label="Sicada AI assistant"
        >
          <div className="flex items-start justify-between gap-4 px-5 py-4 border-b border-slate-200 bg-slate-950 text-white">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-blue-400/40 bg-blue-500/10 flex items-center justify-center">
                <Bot size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="font-semibold">Ask Sicada AI</p>
                <p className="text-xs text-slate-400 mt-0.5">AI solutions assistant</p>
              </div>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="text-slate-300 hover:text-white p-1" aria-label="Close Sicada AI">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={message.role === "user" ? "flex justify-end" : "flex justify-start"}>
                <div className={message.role === "user" ? "max-w-[86%] bg-blue-600 text-white px-4 py-3 text-sm leading-relaxed" : "max-w-[92%] bg-white border border-slate-200 text-slate-700 px-4 py-3 text-sm leading-relaxed"}>
                  {message.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 text-slate-500 px-4 py-3 text-sm">Reviewing your question…</div>
              </div>
            )}

            {messages.length === 1 && (
              <div className="pt-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">Common questions</p>
                <div className="space-y-2">
                  {suggestions.map((prompt) => (
                    <button key={prompt} type="button" onClick={() => submitMessage(prompt)} className="w-full text-left bg-white border border-slate-200 hover:border-blue-500 px-4 py-3 text-sm text-slate-700 transition-colors">
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {nextStep && !loading && !showLeadForm && (
              <div className="border border-blue-200 bg-blue-50 p-4">
                <p className="text-sm text-slate-700 leading-relaxed">{nextStep.message}</p>
                <div className="mt-3 flex flex-wrap gap-4">
                  {nextStep.href === "/contact" && (
                    <button type="button" onClick={() => setShowLeadForm(true)} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                      Share project details <ArrowRight size={16} />
                    </button>
                  )}
                  <a href={nextStep.href} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                    {nextStep.label} <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            )}

            {showLeadForm && (
              <form onSubmit={submitLead} className="bg-white border border-slate-300 p-4 space-y-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Share your project with Sicada</p>
                  <p className="text-xs text-slate-500 mt-1">These details are submitted only when you press Send to Sicada.</p>
                </div>
                <input value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} required placeholder="Name" className="w-full border border-slate-300 px-3 py-2.5 text-sm" />
                <input value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} required type="email" placeholder="Work email" className="w-full border border-slate-300 px-3 py-2.5 text-sm" />
                <input value={lead.company} onChange={(e) => setLead({ ...lead, company: e.target.value })} placeholder="Company (optional)" className="w-full border border-slate-300 px-3 py-2.5 text-sm" />
                <textarea value={lead.project} onChange={(e) => setLead({ ...lead, project: e.target.value })} required rows="3" placeholder="Briefly describe what you want to build or improve" className="w-full border border-slate-300 px-3 py-2.5 text-sm resize-none" />
                <div className="flex gap-3 items-center">
                  <button type="submit" disabled={leadStatus === "submitting"} className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white px-4 py-2.5 text-sm font-semibold">
                    {leadStatus === "submitting" ? "Sending…" : "Send to Sicada"}
                  </button>
                  <button type="button" onClick={() => setShowLeadForm(false)} className="text-sm font-semibold text-slate-600">Cancel</button>
                </div>
              </form>
            )}

            {leadStatus === "fallback" && (
              <div className="border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm text-slate-700">The direct enquiry service is temporarily unavailable. Your details were not stored.</p>
                <a href="/contact" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">Continue on Contact page <ArrowRight size={16} /></a>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-slate-200 bg-white">
            <div className="flex items-end gap-2 border border-slate-300 focus-within:border-blue-600 bg-white p-2">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    submitMessage(input);
                  }
                }}
                rows="2"
                placeholder="Ask about AI, CRM, ERP, LLMs or cybersecurity..."
                className="flex-1 resize-none px-2 py-1 text-sm outline-none min-h-[44px] max-h-28"
                aria-label="Message Sicada AI"
                disabled={loading}
              />
              <button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white w-10 h-10 flex items-center justify-center shrink-0" aria-label="Send message">
                <ArrowUp size={18} />
              </button>
            </div>
            <p className="mt-2 text-[11px] text-slate-400">Chat messages are used only for this session unless you explicitly submit project details.</p>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="fixed z-[70] bottom-5 right-4 sm:right-6 bg-slate-950 hover:bg-slate-900 text-white px-4 h-12 shadow-lg flex items-center gap-3 border border-slate-800"
        aria-label={open ? "Close Sicada AI" : "Open Sicada AI"}
        aria-expanded={open}
      >
        <MessageSquareText size={19} className="text-blue-400" />
        <span className="text-sm font-semibold">Ask Sicada AI</span>
      </button>
    </>
  );
}
