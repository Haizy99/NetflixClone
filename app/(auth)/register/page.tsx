"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!name || !email || !password || !confirm) {
            setError("Please fill in all fields.");
            return;
        }

        if (password !== confirm) {
            setError("Passwords do not match.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        // TODO: connect to ASP.NET Core API
        console.log("Registering", name, email, password);
    };

    return (
        <div className="min-h-screen  flex flex-col"
            style={{
                backgroundImage: `
                linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)),
                url('/images/NetflixBackgroundPicture.webp')`,
            }}
        >
            

{/* Login card */}
            <div className="relative z-10 bg-black/80 px-10 py-12 rounded-md w-full max-w-md"/>


            {/* Header */}
            <header className="flex items-center justify-between px-8 md:px-16 py-6">
                <Link href="/">
                    <h1 className="text-red-600 text-3xl font-bold tracking-wider cursor-pointer">
                        Netflix
                    </h1>
                </Link>
                <Link href="/login">
                    <button className="text-white text-sm hover:underline">
                        Sign In
                    </button>
                </Link>
            </header>

            {/* Divider */}
            <div className="border-b border-gray-800 w-full" />

            {/* Main content */}
            <div className="flex-1 flex items-center justify-center px-4 py-16">
                <div className="w-full max-w-sm">

                    {/* Heading */}
                    <h2 className="text-white text-3xl font-bold mb-2">
                        Create your account
                    </h2>
                    <p className="text-gray-400 text-sm mb-8">
                        Already have an account?{" "}
                        <Link href="/login" className="text-white hover:underline">
                            Sign in now.
                        </Link>
                    </p>

                    {/* Form */}
                    <form onSubmit={handleRegister} className="flex flex-col gap-3">

                        {/* Full name */}
                        <input
                            type="text"
                            placeholder="Full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-zinc-800 text-white placeholder-gray-500 rounded px-4 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500 border border-zinc-700"
                        />

                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-zinc-800 text-white placeholder-gray-500 rounded px-4 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500 border border-zinc-700"
                        />

                        {/* Password */}
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-zinc-800 text-white placeholder-gray-500 rounded px-4 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500 border border-zinc-700"
                        />

                        {/* Confirm password */}
                        <input
                            type="password"
                            placeholder="Confirm password"
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                            className="bg-zinc-800 text-white placeholder-gray-500 rounded px-4 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-gray-500 border border-zinc-700"
                        />

                        {/* Error */}
                        {error && (
                            <p className="text-red-400 text-xs">{error}</p>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            className="bg-red-600 text-white font-semibold py-4 rounded hover:bg-red-700 transition text-sm mt-1"
                        >
                            Create Account
                        </button>

                    </form>

                    {/* Terms */}
                    <p className="text-gray-600 text-xs mt-6 leading-relaxed">
                        By signing up, you agree to our{" "}
                        <Link href="#" className="text-gray-400 hover:underline">Terms of Use</Link>
                        {" "}and{" "}
                        <Link href="#" className="text-gray-400 hover:underline">Privacy Policy</Link>.
                    </p>

                </div>
            </div>

        </div>
    );
}