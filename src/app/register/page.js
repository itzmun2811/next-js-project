"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      alert("✅ User registered successfully!");
      router.push("/"); // redirect to login page
    } else {
      setError(result.error || "Something went wrong");
    }
    setLoading(false);
  };

  return (
    <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">
        <h1 className="text-3xl font-bold mb-4">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="input input-bordered"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered"
            required
          />

          {error && <p className="text-red-500">{error}</p>}

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
