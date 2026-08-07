const MAX_MESSAGE_LENGTH = 1200;

function localAnswer(message) {
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

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const message = typeof body?.message === "string" ? body.message.trim() : "";

    if (!message) {
      return Response.json({ error: "Message is required." }, { status: 400 });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return Response.json({ error: "Message is too long." }, { status: 400 });
    }

    // Provider-agnostic boundary. Later, route to a configured LLM provider
    // here and keep the browser unaware of provider credentials.
    const reply = localAnswer(message);

    return Response.json({
      reply,
      source: "sicada-curated",
      model: null,
    });
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
}
