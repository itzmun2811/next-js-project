"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError(res.error || "Invalid credentials");
    } else {
      router.push("/products"); // redirect after login
    }
    setLoading(false);
  };

  return (
    <div className="hero bg-base-200 min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered"
            required
          />

          {error && <p className="text-red-500">{error}</p>}

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          type="button"
          className="btn btn-outline w-full"
          onClick={() => signIn("google", { callbackUrl: "/products" })}
        >
          Sign in with Google
        </button>

        <p className="mt-4 text-center"><a href="/register" className="link link-primary">Register</a> </p>
      </div>
    </div>
  );
}
