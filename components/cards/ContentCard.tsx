"use client";

import { useState } from "react";

type Props = {
  title: string;
  imageUrl: string;
  id: number;
};

export default function ContentCard({ title, imageUrl, id }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex-shrink-0 w-40 md:w-48 cursor-pointer transition-all duration-300 rounded-md overflow-hidden"
      style={{ transform: hovered ? "scale(1.1)" : "scale(1)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Poster image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-28 md:h-32 object-cover rounded-md"
      />

      {/* Hover overlay */}
      {hovered && (
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-2 rounded-md">
          <p className="text-white text-xs font-semibold line-clamp-1">{title}</p>
          <div className="flex items-center gap-2 mt-1">
            {/* Play button */}
            <button className="bg-white rounded-full p-1 hover:bg-gray-200 transition">
              <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            {/* Add to list */}
            <button className="border border-gray-400 rounded-full p-1 hover:border-white transition">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}