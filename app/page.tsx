import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">

      {/* Header */}
      <header className="flex items-center justify-between px-8 md:px-16 py-6">
        <h1 className="text-red-600 text-3xl font-bold tracking-wider">
          Netflix
        </h1>
        <Link href="/login">
          <button className="bg-red-600 text-white text-sm font-semibold px-5 py-2 rounded hover:bg-red-700 transition">
            Sign In
          </button>
        </Link>
      </header>

      {/* Hero section */}
      <div className="relative flex-1 flex items-center justify-center text-center px-4">

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/NetflixBackgroundPicture.webp')`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-white text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Unlimited movies, TV shows and more
          </h2>
          <p className="text-white text-lg md:text-xl mb-2">
            Starts at R99. Cancel at any time.
          </p>
          <p className="text-white text-base md:text-lg mb-8">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          {/* Email CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <input
              type="email"
              placeholder="Email address"
              className="bg-black/60 border border-gray-500 text-white placeholder-gray-400 px-4 py-4 rounded text-sm w-full sm:w-80 focus:outline-none focus:border-white"
            />
            <Link href="/register">
              <button className="bg-red-600 text-white font-semibold px-8 py-4 rounded hover:bg-red-700 transition text-sm whitespace-nowrap">
                Get Started &rsaquo;
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 w-full" />

      {/* Footer */}
      <footer className="px-8 md:px-16 py-8 text-gray-500 text-sm">
        <p className="mb-4">Questions? Call 0800-000-000</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          <Link href="#" className="hover:underline">FAQ</Link>
          <Link href="#" className="hover:underline">Help Centre</Link>
          <Link href="#" className="hover:underline">Terms of Use</Link>
          <Link href="#" className="hover:underline">Privacy</Link>
          <Link href="#" className="hover:underline">Cookie Preferences</Link>
          <Link href="#" className="hover:underline">Corporate Information</Link>
        </div>
      </footer>

    </div>
  );
}