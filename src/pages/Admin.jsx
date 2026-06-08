import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { FileText, Mail, Users } from "lucide-react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";

export default function Admin() {
  const [applications, setApplications] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [checking, setChecking] = useState(true);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) {
      window.location.href = "/admin-login";
    } else {
      setChecking(false);
    }
  });

  return () => unsubscribe();
}, []);

if (checking) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-slate-600">Checking admin access...</p>
    </div>
  );
}

  useEffect(() => {
    async function fetchData() {
      const appsQuery = query(
        collection(db, "applications"),
        orderBy("createdAt", "desc")
      );

      const enquiriesQuery = query(
        collection(db, "enquiries"),
        orderBy("createdAt", "desc")
      );

      const appsSnapshot = await getDocs(appsQuery);
      const enquiriesSnapshot = await getDocs(enquiriesQuery);

      setApplications(
        appsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );

      setEnquiries(
        enquiriesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
     

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">

  <div className="flex items-center justify-between mb-8">
    <div>
      <div className="flex items-center justify-between gap-6">
  <div>
    <h1 className="text-4xl font-bold text-slate-900">
      Admin Dashboard
    </h1>

    <p className="mt-3 text-slate-600">
      View resumes, job applications and client enquiries.
    </p>
  </div>

  <button
    onClick={() => signOut(auth)}
    className="bg-orange-700 hover:bg-orange-800 text-white px-5 py-3 rounded-xl font-semibold"
  >
    Logout
  </button>
</div>
    </div>

    <button
      onClick={() => signOut(auth)}
      className="bg-orange-700 hover:bg-orange-800 text-white px-5 py-3 rounded-xl font-semibold"
    >
      Logout
    </button>
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
                {applications.filter((item) => item.resumeURL).length}
              </h3>
              <p className="text-slate-500">Resumes</p>
            </div>
          </div>

          <div className="mt-14 bg-white rounded-3xl p-8 shadow-sm border">
            <h2 className="text-2xl font-bold mb-6">Job Applications</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b text-slate-600">
                    <th className="py-3">Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Position</th>
                    <th>Resume</th>
                  </tr>
                </thead>

                <tbody>
                  {applications.map((app) => (
                    <tr key={app.id} className="border-b">
                      <td className="py-4">{app.name}</td>
                      <td>{app.email}</td>
                      <td>{app.phone}</td>
                      <td>{app.position}</td>
                      <td>
                        {app.resumeURL ? (
                          <a
                            href={app.resumeURL}
                            target="_blank"
                            rel="noreferrer"
                            className="text-orange-700 font-semibold"
                          >
                            Download
                          </a>
                        ) : (
                          "No file"
                        )}
                      </td>
                    </tr>
                  ))}

                  {applications.length === 0 && (
                    <tr>
                      <td colSpan="5" className="py-6 text-slate-500">
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