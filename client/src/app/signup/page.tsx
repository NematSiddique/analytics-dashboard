"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await axios.post("http://localhost:4000/api/signup", { username, password });
      setSuccess("Account created! You can now log in.");
      setTimeout(() => router.push("/login"), 1500);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || "Signup failed");
      } else {
        setError("Signup failed");
      }
    }
  };

  return (
    <form onSubmit={handleSignup} className="max-w-sm mx-auto mt-20 flex flex-col gap-4">
      <h2 className="text-xl font-bold">Sign Up</h2>
      <input
        className="border p-2"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />
      <input
        className="border p-2"
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      {error && <div className="text-red-500">{error}</div>}
      {success && <div className="text-green-600">{success}</div>}
      <button className="bg-blue-600 text-white p-2 rounded" type="submit">Sign Up</button>
      <a href="/login" className="text-blue-600 underline">Back to login</a>
    </form>
  );
}