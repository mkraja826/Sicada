export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();

    await env.DB.prepare(
      `INSERT INTO enquiries 
      (name, email, company, inquiryType, message, createdAt)
      VALUES (?, ?, ?, ?, ?, ?)`
    )
      .bind(
        data.name || "",
        data.email || "",
        data.company || "",
        data.inquiryType || "",
        data.message || "",
        new Date().toISOString()
      )
      .run();

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}