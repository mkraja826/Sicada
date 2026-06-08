import { useEffect, useState } from "react";
import { FileText, Mail, Users } from "lucide-react";

export default function Admin() {
  const [applications, setApplications] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAdminData() {
      try {
        const res = await fetch("/api/admin");
        const data = await res.json();

        setApplications(data.applications || []);
        setEnquiries(data.enquiries || []);
      } catch (error) {
        console.error("Admin fetch error:", error);
        alert("Failed to load admin data");
      } finally {
        setLoading(false);
      }
    }

    fetchAdminData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading admin data...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-4xl font-bold text-slate-900">
                Admin Dashboard
              </h1>

              <p className="mt-3 text-slate-600">
                View job applications and client enquiries.
              </p>
            </div>

            <a
              href="/"
              className="bg-orange-700 hover:bg-orange-800 text-white px-5 py-3 rounded-xl font-semibold"
            >
              Back to Website
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white rounded-3xl p-6 shadow-sm border">
              <Users className="text-orange-700 mb-4" />
              <h3 className="text-3xl font-bold">{applications.length}</h3>
              <p className="text-slate-500">Applications</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border">
              <Mail className="text-orange-700 mb-4" />
              <h3 className="text-3xl font-bold">{enquiries.length}</h3>
              <p className="text-slate-500">Enquiries</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border">
              <FileText className="text-orange-700 mb-4" />
              <h3 className="text-3xl font-bold">
                {applications.filter((item) => item.resumeLink).length}
              </h3>
              <p className="text-slate-500">Resume Links</p>
            </div>
          </div>

          <div className="mt-14 bg-white rounded-3xl p-8 shadow-sm border">
            <h2 className="text-2xl font-bold mb-6">Job Applications</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b text-slate-600">
                    <th className="py-3 pr-4">Name</th>
                    <th className="pr-4">Email</th>
                    <th className="pr-4">Phone</th>
                    <th className="pr-4">Position</th>
                    <th className="pr-4">LinkedIn</th>
                    <th className="pr-4">Resume</th>
                  </tr>
                </thead>

                <tbody>
                  {applications.map((app) => (
                    <tr key={app.id} className="border-b">
                      <td className="py-4 pr-4">{app.name}</td>
                      <td className="pr-4">{app.email}</td>
                      <td className="pr-4">{app.phone}</td>
                      <td className="pr-4">{app.position}</td>
                      <td className="pr-4">
                        {app.linkedin ? (
                          <a
                            href={app.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="text-orange-700 font-semibold"
                          >
                            View
                          </a>
                        ) : (
                          "—"
                        )}
                      </td>
                      <td className="pr-4">
                        {app.resumeLink ? (
                          <a
                            href={app.resumeLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-orange-700 font-semibold"
                          >
                            View Resume
                          </a>
                        ) : (
                          "No link"
                        )}
                      </td>
                    </tr>
                  ))}

                  {applications.length === 0 && (
                    <tr>
                      <td colSpan="6" className="py-6 text-slate-500">
                        No applications yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 bg-white rounded-3xl p-8 shadow-sm border">
            <h2 className="text-2xl font-bold mb-6">Client Enquiries</h2>

            <div className="space-y-5">
              {enquiries.map((item) => (
                <div key={item.id} className="border rounded-2xl p-5">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-slate-500">{item.email}</p>
                  <p className="text-slate-500">{item.company}</p>
                  <p className="text-sm text-orange-700 font-semibold mt-2">
                    {item.inquiryType}
                  </p>
                  <p className="mt-3 text-slate-700">{item.message}</p>
                </div>
              ))}

              {enquiries.length === 0 && (
                <p className="text-slate-500">No enquiries yet.</p>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}