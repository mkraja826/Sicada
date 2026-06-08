export async function onRequestGet() {
  return Response.json({
    message: "Applications API is working"
  });
}

export async function onRequestPost({ request, env }) {
  try {
    const data = await request.json();

    await env.DB.prepare(
      `INSERT INTO applications
      (name,email,phone,position,linkedin,resumeLink,message,createdAt)
      VALUES (?,?,?,?,?,?,?,?)`
    )
      .bind(
        data.name || "",
        data.email || "",
        data.phone || "",
        data.position || "",
        data.linkedin || "",
        data.resumeLink || "",
        data.message || "",
        new Date().toISOString()
      )
      .run();

    return Response.json({ success: true });
  } catch (err) {
    return Response.json(
      { error: err.message },
      { status: 500 }
    );
  }
}