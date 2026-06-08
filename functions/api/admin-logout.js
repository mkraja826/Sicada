export async function onRequestGet() {
  return new Response("Logged out", {
    headers: {
      "Set-Cookie":
        "sicada_admin=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0",
    },
  });
}