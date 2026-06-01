import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-screen w-full">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/StrangerThinngs.avif')`,
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="absolute bottom-40 left-8 md:left-16 max-w-lg z-10">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Stranger Things
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-200 mb-6 line-clamp-3 drop-shadow">
          When a young boy vanishes, a small town uncovers a mystery involving
          secret experiments, terrifying supernatural forces, and one strange
          little girl.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <Link href="/watch/1">
            <button className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play
            </button>
          </Link>

          <button className="flex items-center gap-2 bg-gray-600/70 text-white font-semibold px-6 py-2 rounded hover:bg-gray-600 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
            </svg>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}