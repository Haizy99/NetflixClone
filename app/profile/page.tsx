"use client";

import { useState } from "react";
import Link from "next/link";

const profiles = [
  { id: 1, name: "Zama", color: "bg-red-600" },
  { id: 2, name: "Kids", color: "bg-blue-500" },
  { id: 3, name: "Guest", color: "bg-green-500" },
];

export default function ProfilePage() {
  const [managing, setManaging] = useState(false);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">

      {/* Logo */}
      <h1 className="text-red-600 text-3xl font-bold tracking-wider mb-12">
        STREAMVAULT
      </h1>

      {/* Heading */}
      <h2 className="text-white text-3xl md:text-5xl font-semibold mb-10">
        {managing ? "Manage Profiles" : "Who's watching?"}
      </h2>

      {/* Profile grid */}
      <div className="flex flex-wrap items-center justify-center gap-6 mb-10">

        {/* Existing profiles */}
        {profiles.map((profile) => (
          <div key={profile.id} className="flex flex-col items-center gap-3 cursor-pointer group">
            <div className="relative">
              {/* Avatar */}
              <div
                className={`w-28 h-28 md:w-32 md:h-32 rounded-md ${profile.color} flex items-center justify-center text-white text-4xl font-bold group-hover:ring-4 group-hover:ring-white transition`}
              >
                {profile.name.charAt(0)}
              </div>

              {/* Edit icon — only shows in manage mode */}
              {managing && (
                <div className="absolute inset-0 bg-black/60 rounded-md flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
              )}
            </div>
            <p className={`text-sm ${managing ? "text-white" : "text-gray-400 group-hover:text-white"} transition`}>
              {profile.name}
            </p>

            {/* Delete button in manage mode */}
            {managing && (
              <button className="text-xs text-red-400 hover:text-red-300 transition">
                Delete
              </button>
            )}
          </div>
        ))}

        {/* Add profile button */}
        {!managing && (
          <div className="flex flex-col items-center gap-3 cursor-pointer group">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-md bg-gray-800 border-2 border-gray-600 flex items-center justify-center group-hover:border-white transition">
              <svg className="w-12 h-12 text-gray-400 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p className="text-sm text-gray-400 group-hover:text-white transition">
              Add Profile
            </p>
          </div>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex flex-col items-center gap-4">
        {managing ? (
          <button
            onClick={() => setManaging(false)}
            className="border border-white text-white px-10 py-2 text-sm hover:bg-white hover:text-black transition"
          >
            Done
          </button>
        ) : (
          <>
            <button
              onClick={() => setManaging(true)}
              className="border border-gray-500 text-gray-400 px-10 py-2 text-sm hover:border-white hover:text-white transition"
            >
              Manage Profiles
            </button>
            <Link href="/account">
              <button className="text-gray-500 text-sm hover:text-white transition">
                Account Settings
              </button>
            </Link>
          </>
        )}
      </div>

    </div>
  );
}