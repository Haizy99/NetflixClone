"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    // TODO: connect to your ASP.NET Core API later
    router.push("/profiles");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/NetflixBackgroundPicture.webp')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Login card */}
      <div className="relative z-10 bg-black/80 px-10 py-12 rounded-md w-full max-w-md">

        {/* Logo */}
        <h1 className="text-red-600 text-3xl font-bold mb-8">STREAMVAULT</h1>

        {/* Heading */}
        <h2 className="text-white text-2xl font-semibold mb-6">Sign In</h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          {/* Email */}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-700 text-white placeholder-gray-400 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-700 text-white placeholder-gray-400 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white"
          />

          {/* Error message */}
          {error && (
            <p className="text-red-400 text-sm">{error}</p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="bg-red-600 text-white font-semibold py-3 rounded hover:bg-red-700 transition mt-2"
          >
            Sign In
          </button>

        </form>

        {/* Footer links */}
        <div className="mt-6 text-gray-400 text-sm">
          <p>
            New to StreamVault?{" "}
            <Link href="/register" className="text-white hover:underline">
              Sign up now
            </Link>
          </p>
          <p className="mt-2 text-xs text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you are not a bot.
          </p>
        </div>

      </div>
    </div>
  );
}