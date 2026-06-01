"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-16 py-4 flex items-center justify-between ${
        isScrolled ? "bg-black" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      {/* Left side — logo + nav links */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <Link href="/browse">
          <h1 className="text-red-600 text-2xl md:text-3xl font-bold tracking-wider cursor-pointer">
            Netflix
          </h1>
        </Link>

        {/* Nav links — hidden on mobile */}
        <ul className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <li>
            <Link href="/browse" className="hover:text-white transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/browse?type=series" className="hover:text-white transition">
              TV Shows
            </Link>
          </li>
          <li>
            <Link href="/browse?type=movie" className="hover:text-white transition">
              Movies
            </Link>
          </li>
          <li>
            <Link href="/browse?filter=new" className="hover:text-white transition">
              New & Popular
            </Link>
          </li>
          <li>
            <Link href="/watchlist" className="hover:text-white transition">
              My List
            </Link>
          </li>
        </ul>
      </div>

      {/* Right side — profile */}
      <div className="flex items-center gap-4 relative">
        {/* Profile avatar */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white text-sm font-bold">
            U
          </div>
          <svg
            className={`w-4 h-4 text-white transition-transform duration-200 ${
              showDropdown ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Dropdown menu */}
        {showDropdown && (
          <div className="absolute top-10 right-0 w-48 bg-black border border-gray-700 rounded shadow-lg py-2 z-50">
            <Link
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition"
            >
              Manage Profiles
            </Link>
            <Link
              href="/account"
              className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition"
            >
              Account
            </Link>
            <hr className="border-gray-700 my-2" />
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800 transition"
              onClick={() => console.log("logout")}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}