"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

const initialWatchlist = [
  { id: 1, title: "Stranger Things", type: "Series", genre: "Horror", imageUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400", progress: 45 },
  { id: 2, title: "The Crown", type: "Series", genre: "Drama", imageUrl: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400", progress: 0 },
  { id: 3, title: "Extraction", type: "Movie", genre: "Action", imageUrl: "https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?w=400", progress: 80 },
  { id: 4, title: "Dark", type: "Series", genre: "Sci-Fi", imageUrl: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400", progress: 0 },
  { id: 5, title: "Red Notice", type: "Movie", genre: "Comedy", imageUrl: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=400", progress: 100 },
  { id: 6, title: "Ozark", type: "Series", genre: "Thriller", imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400", progress: 20 },
];

export default function WatchlistPage() {
  const [watchlist, setWatchlist] = useState(initialWatchlist);
  const [filter, setFilter] = useState("All");

  const removeFromList = (id: number) => {
    setWatchlist(watchlist.filter((item) => item.id !== id));
  };

  const filtered = watchlist.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Movies") return item.type === "Movie";
    if (filter === "Series") return item.type === "Series";
    if (filter === "Continue Watching") return item.progress > 0 && item.progress < 100;
    return true;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="px-8 md:px-16 pt-28 pb-16">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-1">My List</h1>
            <p className="text-gray-400 text-sm">
              {watchlist.length} title{watchlist.length !== 1 ? "s" : ""} saved
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {["All", "Continue Watching", "Movies", "Series"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2 rounded-full text-sm transition ${
                filter === tab
                  ? "bg-white text-black font-semibold"
                  : "border border-gray-600 text-gray-400 hover:border-white hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-24">
            <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p className="text-gray-400 text-lg mb-2">Your list is empty</p>
            <p className="text-gray-600 text-sm mb-6">
              Add movies and shows by clicking the + button on any title
            </p>
            <Link href="/browse">
              <button className="bg-white text-black font-semibold px-8 py-3 rounded hover:bg-gray-200 transition text-sm">
                Browse Content
              </button>
            </Link>
          </div>
        )}

        {/* Watchlist grid */}
        {filtered.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filtered.map((item) => (
              <div key={item.id} className="group relative cursor-pointer">

                {/* Poster */}
                <div className="relative overflow-hidden rounded-md">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-36 object-cover group-hover:scale-105 transition duration-300"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition flex items-center justify-center gap-3">

                    {/* Play button */}
                    <Link href={`/watch/${item.id}`}>
                      <button className="opacity-0 group-hover:opacity-100 transition bg-white rounded-full p-2 hover:bg-gray-200">
                        <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </Link>

                    {/* Remove button */}
                    <button
                      onClick={() => removeFromList(item.id)}
                      className="opacity-0 group-hover:opacity-100 transition bg-gray-800/90 rounded-full p-2 hover:bg-red-600"
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                  </div>

                  {/* Progress bar */}
                  {item.progress > 0 && item.progress < 100 && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700">
                      <div
                        className="h-full bg-red-600"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  )}

                  {/* Completed badge */}
                  {item.progress === 100 && (
                    <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded">
                      Watched
                    </div>
                  )}

                  {/* Type badge */}
                  <span className="absolute top-2 right-2 bg-black/70 text-gray-300 text-xs px-2 py-0.5 rounded">
                    {item.type}
                  </span>
                </div>

                {/* Info */}
                <div className="mt-2">
                  <Link href={`/title/${item.id}`}>
                    <p className="text-white text-xs font-medium line-clamp-1 hover:underline">
                      {item.title}
                    </p>
                  </Link>
                  <p className="text-gray-500 text-xs">{item.genre}</p>
                  {item.progress > 0 && item.progress < 100 && (
                    <p className="text-gray-600 text-xs mt-0.5">{item.progress}% watched</p>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}