import Navbar from "../components/Navbar";
import { FileText, Mail, Users } from "lucide-react";

export default function Admin() {
  const applications = [
    {
      name: "John Smith",
      email: "john@email.com",
      phone: "+91 9876543210",
      position: "React Developer",
      resume: "#",
    },
  ];

  const enquiries = [
    {
      name: "ABC Insurance",
      email: "client@company.com",
      message: "Need 3 React developers.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-slate-900">
            Admin Dashboard
          </h1>

          <p className="mt-3 text-slate-600">
            View job applications, resumes and client enquiries.
          </p>

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
              <h3 className="text-3xl font-bold">Resumes</h3>
              <p className="text-slate-500">Uploaded Files</p>
            </div>
          </div>

          <div className="mt-14 bg-white rounded-3xl p-8 shadow-sm border">
            <h2 className="text-2xl font-bold mb-6">Job Applications</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-3">Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Position</th>
                    <th>Resume</th>
                  </tr>
                </thead>

                <tbody>
                  {applications.map((app, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-4">{app.name}</td>
                      <td>{app.email}</td>
                      <td>{app.phone}</td>
                      <td>{app.position}</td>
                      <td>
                        <a
                          href={app.resume}
                          className="text-orange-700 font-semibold"
                        >
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 bg-white rounded-3xl p-8 shadow-sm border">
            <h2 className="text-2xl font-bold mb-6">Client Enquiries</h2>

            <div className="space-y-5">
              {enquiries.map((item, index) => (
                <div key={index} className="border rounded-2xl p-5">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-slate-500">{item.email}</p>
                  <p className="mt-3 text-slate-700">{item.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}