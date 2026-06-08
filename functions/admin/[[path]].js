export async function onRequest({ request, env, next }) {
  const cookie = request.headers.get("Cookie") || "";

  if (cookie.includes("admin_auth=true")) {
    return next();
  }

  return Response.redirect(new URL("/adminlogin", request.url), 302);
}