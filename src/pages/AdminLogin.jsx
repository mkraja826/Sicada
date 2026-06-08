import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function AdminLogin() {
  const [email, setEmail] = useState("hr@sicadadigital.com");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/admin";
    } catch (error) {
      alert("Invalid login details");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-6">
      <form
        onSubmit={handleLogin}
        className="bg-white rounded-3xl p-8 shadow-xl w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6">Admin Login</h1>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded-xl px-4 py-3 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-xl px-4 py-3 mb-6"
        />

        <button className="w-full bg-orange-700 text-white py-3 rounded-xl font-semibold">
          Login
        </button>
      </form>
    </div>
  );
}