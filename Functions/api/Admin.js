export async function onRequestGet({ env }) {
  const applications = await env.DB.prepare(
    "SELECT * FROM applications ORDER BY createdAt DESC"
  ).all();

  const enquiries = await env.DB.prepare(
    "SELECT * FROM enquiries ORDER BY createdAt DESC"
  ).all();

  return Response.json({
    applications: applications.results,
    enquiries: enquiries.results,
  });
}