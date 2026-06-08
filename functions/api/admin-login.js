export async function onRequestPost({ request, env }) {
  const data = await request.json();

  if (data.password === env.ADMIN_PASSWORD) {
    return new Response(JSON.stringify({ success: true }), {
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": "admin_auth=true; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=86400",
      },
    });
  }

  return Response.json({ error: "Invalid password" }, { status: 401 });
}