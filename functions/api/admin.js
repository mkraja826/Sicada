export async function onRequestGet({ env }) {
  const applications = await env.DB.prepare(
    "SELECT * FROM applications ORDER BY id DESC"
  ).all();

  const enquiries = await env.DB.prepare(
    "SELECT * FROM enquiries ORDER BY id DESC"
  ).all();

  return Response.json({
    applications: applications.results,
    enquiries: enquiries.results,
  });
}
