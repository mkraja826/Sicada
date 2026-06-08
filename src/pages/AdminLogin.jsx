import { useState } from "react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/admin-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        throw new Error("Invalid password");
      }

      window.location.href = "/admin";
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <form
        onSubmit={handleLogin}
        className="bg-white rounded-3xl p-8 w-full max-w-md shadow-xl"
      >
        <h1 className="text-3xl font-bold mb-6">Admin Login</h1>

        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-xl px-4 py-3 mb-6"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-700 text-white py-3 rounded-xl font-semibold"
        >
          {loading ? "Checking..." : "Login"}
        </button>
      </form>
    </div>
  );
}