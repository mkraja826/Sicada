const MAX_MESSAGE_LENGTH = 1200;
const MAX_HISTORY_ITEMS = 8;

const SICADA_TERMS = [
  "sicada",
  "your company",
  "your services",
  "your solution",
  "your team",
  "what do you do",
  "what can you do",
  "services",
  "capabilities",
  "case study",
  "case studies",
  "industry",
  "industries",
  "contact",
  "consultation",
];

const BUSINESS_TERMS = [
  "our company",
  "our business",
  "our organization",
  "we need",
  "we want",
  "we are planning",
  "we're planning",
  "existing crm",
  "existing erp",
  "crm",
  "erp",
  "ai",
  "artificial intelligence",
  "machine learning",
  "ml",
  "llm",
  "rag",
  "agent",
  "automation",
  "automate",
  "prediction",
  "predictive",
  "computer vision",
  "cybersecurity",
  "security",
  "threat detection",
  "fraud",
  "cloud",
  "data engineering",
  "integration",
  "integrate",
  "software",
  "application",
  "app",
  "workflow",
  "process",
  "modernize",
  "modernise",
  "digital transformation",
];

const CODE_TERMS = [
  "write code",
  "generate code",
  "give me code",
  "source code",
  "python code",
  "javascript code",
  "typescript code",
  "java code",
  "react code",
  "sql query",
  "debug this code",
  "fix this code",
  "program this",
  "coding problem",
  "leetcode",
];

const GENERAL_OFF_TOPIC_TERMS = [
  "weather",
  "president",
  "prime minister",
  "cricket",
  "football",
  "movie",
  "song",
  "recipe",
  "joke",
  "astrology",
  "horoscope",
  "homework",
  "math problem",
  "translate this",
  "write an essay",
  "write a poem",
  "write a story",
];

const OUT_OF_SCOPE_REPLY =
  "I’m Sicada’s AI solutions assistant. I can help with Sicada’s capabilities or discuss how AI, ML, LLMs, CRM, ERP, automation, software engineering or cybersecurity could support your organization. I don’t provide code or answer unrelated general-purpose questions.";

function normalizeHistory(history) {
  if (!Array.isArray(history)) return [];

  return history
    .filter((item) => item && (item.role === "user" || item.role === "assistant") && typeof item.text === "string")
    .slice(-MAX_HISTORY_ITEMS)
    .map((item) => ({ role: item.role, text: item.text.slice(0, MAX_MESSAGE_LENGTH) }));
}

function includesAny(text, terms) {
  return terms.some((term) => text.includes(term));
}

function classifyDomain(message, history) {
  const text = message.toLowerCase();
  const recentContext = history
    .filter((item) => item.role === "user")
    .map((item) => item.text.toLowerCase())
    .join(" ");

  const combined = `${recentContext} ${text}`;

  if (includesAny(text, CODE_TERMS)) {
    return "OUT_OF_SCOPE";
  }

  if (includesAny(text, GENERAL_OFF_TOPIC_TERMS) && !includesAny(combined, BUSINESS_TERMS) && !includesAny(combined, SICADA_TERMS)) {
    return "OUT_OF_SCOPE";
  }

  if (includesAny(combined, SICADA_TERMS)) {
    return "SICADA";
  }

  if (includesAny(combined, BUSINESS_TERMS)) {
    return "BUSINESS_REQUIREMENT";
  }

  return "OUT_OF_SCOPE";
}

function detectLeadIntent(message, history) {
  const combined = [...history.map((item) => item.text), message].join(" ").toLowerCase();

  const projectSignals = [
    "we need",
    "we want",
    "we are planning",
    "we're planning",
    "our company",
    "our business",
    "existing crm",
    "existing erp",
    "integrate",
    "build",
    "develop",
    "implement",
    "automate",
    "migration",
    "modernize",
    "proof of concept",
    "poc",
  ];

  const commercialSignals = [
    "budget",
    "price",
    "pricing",
    "cost",
    "quote",
    "proposal",
    "timeline",
    "meeting",
    "demo",
    "contact",
    "talk to",
  ];

  const projectScore = projectSignals.filter((signal) => combined.includes(signal)).length;
  const commercialScore = commercialSignals.filter((signal) => combined.includes(signal)).length;

  if (projectScore >= 2 || (projectScore >= 1 && commercialScore >= 1)) return "high";
  if (projectScore >= 1 || commercialScore >= 1) return "medium";
  return "low";
}

function nextStepForIntent(intent) {
  if (intent === "high") {
    return {
      label: "Talk to Sicada",
      href: "/contact",
      message: "This sounds like a concrete project. The next useful step is to share your current system, desired outcome and any important constraints with the Sicada team.",
    };
  }

  if (intent === "medium") {
    return {
      label: "Explore AI solutions",
      href: "/services",
      message: "You may benefit from reviewing Sicada's AI capabilities before discussing a specific implementation.",
    };
  }

  return null;
}

function localAnswer(message, history) {
  const text = message.toLowerCase();
  const previousUserMessages = history.filter((item) => item.role === "user").map((item) => item.text.toLowerCase());
  const contextText = previousUserMessages.join(" ");

  if (text.includes("crm") || (contextText.includes("crm") && (text.includes("integrate") || text.includes("existing")))) {
    return "Sicada can design AI-enabled CRM capabilities such as lead scoring, sales copilots, automated follow-ups, customer intelligence, sentiment analysis and predictive engagement. If you already use a CRM, Sicada can assess whether to integrate AI into the current platform rather than replace it.";
  }

  if (text.includes("erp") || (contextText.includes("erp") && (text.includes("integrate") || text.includes("existing")))) {
    return "Sicada can build or modernize ERP platforms with AI for forecasting, procurement intelligence, finance workflows, inventory optimization, document automation and operational decision support. Existing ERP systems can also be augmented through APIs and AI services where replacement is unnecessary.";
  }

  if (text.includes("cyber") || text.includes("security") || text.includes("threat")) {
    return "Sicada engineers AI-assisted cybersecurity capabilities for anomaly detection, security analytics, incident triage, suspicious-behavior analysis and controlled response workflows. AI is used to augment security teams, with human review retained for important actions.";
  }

  if (text.includes("llm") || text.includes("rag") || text.includes("agent")) {
    return "Sicada works with LLM applications, RAG, enterprise knowledge systems and AI agents. A production system typically combines the model with trusted data, APIs, evaluation, guardrails, security controls and observability.";
  }

  if (text.includes("machine learning") || text.includes("ml") || text.includes("prediction")) {
    return "Sicada builds machine-learning systems for prediction, classification, recommendations, anomaly detection, computer vision and decision support, then integrates them into real applications and business workflows.";
  }

  if (text.includes("price") || text.includes("cost") || text.includes("quote") || text.includes("budget")) {
    return "AI project pricing depends on the use case, integrations, data quality, security requirements and production scope. A useful estimate starts with the current system, desired outcome, users, data sources and deployment constraints.";
  }

  if (text.includes("timeline") || text.includes("how long")) {
    return "Delivery time depends on whether the work is a focused AI integration, a proof of concept, or a full production platform. Sicada would first assess the workflow, data, integrations and security requirements before proposing a realistic plan.";
  }

  return "Sicada designs and engineers AI-powered applications, LLM systems, machine-learning solutions, intelligent CRM and ERP platforms, enterprise AI integrations and AI-assisted cybersecurity. Tell me what you are trying to build or improve, what system you use today, and the outcome you want.";
}

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const message = typeof body?.message === "string" ? body.message.trim() : "";
    const history = normalizeHistory(body?.history);

    if (!message) {
      return Response.json({ error: "Message is required." }, { status: 400 });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return Response.json({ error: "Message is too long." }, { status: 400 });
    }

    const domain = classifyDomain(message, history);

    if (domain === "OUT_OF_SCOPE") {
      return Response.json({
        reply: OUT_OF_SCOPE_REPLY,
        source: "sicada-domain-gate",
        model: null,
        domain,
        leadIntent: "low",
        nextStep: null,
        blocked: true,
      });
    }

    const leadIntent = detectLeadIntent(message, history);
    const reply = localAnswer(message, history);
    const nextStep = nextStepForIntent(leadIntent);

    return Response.json({
      reply,
      source: "sicada-curated",
      model: null,
      domain,
      leadIntent,
      nextStep,
      blocked: false,
    });
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
}
