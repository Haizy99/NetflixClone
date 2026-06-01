"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

const allContent = [
  { id: 1, title: "Stranger Things", type: "Series", genre: "Horror", imageUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400" },
  { id: 2, title: "The Crown", type: "Series", genre: "Drama", imageUrl: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400" },
  { id: 3, title: "Ozark", type: "Series", genre: "Thriller", imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400" },
  { id: 4, title: "Dark", type: "Series", genre: "Sci-Fi", imageUrl: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400" },
  { id: 5, title: "Squid Game", type: "Series", genre: "Thriller", imageUrl: "https://images.unsplash.com/photo-1585647347384-2593bc35786b?w=400" },
  { id: 6, title: "Money Heist", type: "Series", genre: "Action", imageUrl: "https://images.unsplash.com/photo-1512070679279-8988d32161be?w=400" },
  { id: 7, title: "Extraction", type: "Movie", genre: "Action", imageUrl: "https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?w=400" },
  { id: 8, title: "The Old Guard", type: "Movie", genre: "Action", imageUrl: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400" },
  { id: 9, title: "Red Notice", type: "Movie", genre: "Comedy", imageUrl: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=400" },
  { id: 10, title: "Army of Thieves", type: "Movie", genre: "Comedy", imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400" },
  { id: 11, title: "Emily in Paris", type: "Series", genre: "Comedy", imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400" },
  { id: 12, title: "Bridgerton", type: "Series", genre: "Drama", imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400" },
];

const genres = ["All", "Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Thriller"];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const filtered = allContent.filter((item) => {
    const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase());
    const matchesGenre = selectedGenre === "All" || item.genre === selectedGenre;
    const matchesType = selectedType === "All" || item.type === selectedType;
    return matchesQuery && matchesGenre && matchesType;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="px-8 md:px-16 pt-28 pb-16">

        {/* Search input */}
        <div className="relative max-w-2xl mb-8">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search titles, genres, people..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg pl-12 pr-4 py-4 text-sm focus:outline-none focus:border-white"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-8">

          {/* Type filter */}
          <div className="flex gap-2">
            {["All", "Movie", "Series"].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-1.5 rounded-full text-sm transition ${
                  selectedType === type
                    ? "bg-white text-black font-semibold"
                    : "border border-gray-600 text-gray-400 hover:border-white hover:text-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-700" />

          {/* Genre filter */}
          <div className="flex flex-wrap gap-2">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-1.5 rounded-full text-sm transition ${
                  selectedGenre === genre
                    ? "bg-red-600 text-white font-semibold"
                    : "border border-gray-600 text-gray-400 hover:border-white hover:text-white"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        {query && (
          <p className="text-gray-400 text-sm mb-6">
            {filtered.length} result{filtered.length !== 1 ? "s" : ""} for{" "}
            <span className="text-white">"{query}"</span>
          </p>
        )}

        {/* Results grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filtered.map((item) => (
              <Link href={`/title/${item.id}`} key={item.id}>
                <div className="cursor-pointer group">
                  <div className="relative overflow-hidden rounded-md">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-36 object-cover group-hover:scale-105 transition duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                      <svg
                        className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition"
                        fill="currentColor" viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="absolute top-2 right-2 bg-black/70 text-gray-300 text-xs px-2 py-0.5 rounded">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-white text-xs mt-2 font-medium line-clamp-1">{item.title}</p>
                  <p className="text-gray-500 text-xs">{item.genre}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-gray-500 text-lg mb-2">No results found</p>
            <p className="text-gray-600 text-sm">Try a different search term or filter</p>
          </div>
        )}

      </div>
    </div>
  );
}