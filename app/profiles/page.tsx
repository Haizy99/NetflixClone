"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const profiles = [
  { id: 1, name: "Zama", color: "bg-red-600", initial: "Z" },
  { id: 2, name: "Kids", color: "bg-blue-500", initial: "K" },
  { id: 3, name: "Guest", color: "bg-green-500", initial: "G" },
];

export default function ProfilesPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    setSelected(id);
    setTimeout(() => {
      router.push("/browse");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">

      {/* Logo */}
      <h1 className="text-red-600 text-3xl font-bold tracking-wider mb-16">
        STREAMVAULT
      </h1>

      {/* Heading */}
      <h2 className="text-white text-4xl md:text-5xl font-semibold mb-12">
        Who's watching?
      </h2>

      {/* Profiles grid */}
      <div className="flex flex-wrap items-center justify-center gap-8 mb-12">

        {profiles.map((profile) => (
          <div
            key={profile.id}
            onClick={() => handleSelect(profile.id)}
            className="flex flex-col items-center gap-4 cursor-pointer group"
          >
            {/* Avatar */}
            <div
              className={`w-32 h-32 md:w-36 md:h-36 rounded-md ${profile.color} flex items-center justify-center text-white text-5xl font-bold transition-all duration-200 ${
                selected === profile.id
                  ? "ring-4 ring-white scale-110"
                  : "group-hover:ring-4 group-hover:ring-white group-hover:scale-105"
              }`}
            >
              {selected === profile.id ? (
                <svg className="w-12 h-12 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              ) : (
                profile.initial
              )}
            </div>

            {/* Name */}
            <p className={`text-sm transition ${
              selected === profile.id
                ? "text-white font-semibold"
                : "text-gray-400 group-hover:text-white"
            }`}>
              {profile.name}
            </p>
          </div>
        ))}

        {/* Add profile */}
        <div className="flex flex-col items-center gap-4 cursor-pointer group">
          <div className="w-32 h-32 md:w-36 md:h-36 rounded-md bg-gray-800 border-2 border-gray-600 flex items-center justify-center group-hover:border-white transition">
            <svg className="w-14 h-14 text-gray-500 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <p className="text-sm text-gray-500 group-hover:text-white transition">
            Add Profile
          </p>
        </div>

      </div>

      {/* Manage profiles button */}
      <button
        onClick={() => router.push("/profile")}
        className="border border-gray-500 text-gray-400 px-10 py-2 text-sm hover:border-white hover:text-white transition"
      >
        Manage Profiles
      </button>

    </div>
  );
}