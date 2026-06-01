import Link from "next/link";

export default function ContentDetailPage() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Back button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/browse">
          <button className="flex items-center gap-2 bg-black/60 text-white px-4 py-2 rounded-full hover:bg-black transition text-sm">
            ← Back
          </button>
        </Link>
      </div>

      {/* Hero backdrop */}
      <div className="relative h-[60vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/NetflixBackgroundPicture.webp')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="px-8 md:px-16 -mt-32 relative z-10">

        {/* Title row */}
        <div className="flex flex-col md:flex-row gap-8">

          {/* Poster */}
          <img
            src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=300"
            alt="Stranger Things"
            className="w-40 h-56 object-cover rounded-md shadow-lg flex-shrink-0 hidden md:block"
          />

          {/* Info */}
          <div className="flex-1">

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-3">
              Unchosen
            </h1>

            {/* Meta row */}
            <div className="flex items-center gap-3 text-sm mb-4 flex-wrap">
              <span className="text-green-400 font-semibold text-base">98% Match</span>
              <span className="text-gray-300">2024</span>
              <span className="border border-gray-500 px-2 py-0.5 text-xs">PG-13</span>
              <span className="text-gray-300">4 Seasons</span>
              <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">HD</span>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <Link href="/watch/1">
                <button className="flex items-center gap-2 bg-white text-black font-bold px-8 py-3 rounded hover:bg-gray-200 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Play
                </button>
              </Link>

              <button className="flex items-center gap-2 bg-gray-600/70 text-white font-semibold px-6 py-3 rounded hover:bg-gray-600 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                My List
              </button>

              <button className="flex items-center gap-2 bg-gray-600/70 text-white font-semibold px-6 py-3 rounded hover:bg-gray-600 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                Rate
              </button>
            </div>

            {/* Synopsis */}
            <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
              When a young boy vanishes, a small town uncovers a mystery involving
              secret experiments, terrifying supernatural forces, and one strange
              little girl. As the town faces these horrors, friendships are tested
              and a new hero emerges.
            </p>

          </div>
        </div>

        {/* Details row */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">

          <div>
            <p className="text-gray-500 text-sm mb-1">Cast</p>
            <p className="text-gray-300 text-sm">
              Millie Bobby Brown, Finn Wolfhard, Winona Ryder, David Harbour, Gaten Matarazzo
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm mb-1">Genres</p>
            <div className="flex flex-wrap gap-2">
              {["Drama", "Horror", "Sci-Fi", "Mystery", "Thriller"].map((genre) => (
                <span
                  key={genre}
                  className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-gray-500 text-sm mb-1">Created by</p>
            <p className="text-gray-300 text-sm">The Duffer Brothers</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm mb-1">This show is</p>
            <p className="text-gray-300 text-sm">Suspenseful, Scary, Exciting</p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-10" />

        {/* Episodes section */}
        <div className="mb-10">
          <h2 className="text-white text-xl font-semibold mb-4">Episodes</h2>

          {/* Season selector */}
          <select className="bg-gray-800 text-white border border-gray-600 rounded px-4 py-2 text-sm mb-6 focus:outline-none">
            <option>Season 1</option>
            <option>Season 2</option>
            <option>Season 3</option>
            <option>Season 4</option>
          </select>

          {/* Episode list */}
          <div className="flex flex-col gap-4">
            {[
              { ep: 1, title: "The Vanishing of Will Byers", duration: "47m", desc: "On his way home from a friend's house, Will Byers makes a terrifying discovery." },
              { ep: 2, title: "The Weirdo on Maple Street", duration: "55m", desc: "Lucas, Mike and Dustin try to talk to the girl they found in the woods." },
              { ep: 3, title: "Holly, Jolly", duration: "51m", desc: "An increasingly concerned Joyce makes a startling discovery." },
              { ep: 4, title: "The Body", duration: "50m", desc: "Refusing to believe Will is dead, Joyce tries to connect with her son." },
            ].map((episode) => (
              <div
                key={episode.ep}
                className="flex items-start gap-4 p-4 rounded-md hover:bg-gray-800/60 transition cursor-pointer group"
              >
                {/* Episode number */}
                <span className="text-gray-500 text-lg font-semibold w-6 flex-shrink-0 mt-1">
                  {episode.ep}
                </span>

                {/* Thumbnail */}
                <div className="relative flex-shrink-0 w-32 h-20 rounded overflow-hidden bg-gray-800">
                  <img
                    src={`https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=200`}
                    alt={episode.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Episode info */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-white text-sm font-semibold">{episode.title}</h3>
                    <span className="text-gray-500 text-xs ml-4">{episode.duration}</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">{episode.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-10" />

        {/* More like this */}
        <div className="mb-16">
          <h2 className="text-white text-xl font-semibold mb-6">More Like This</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { id: 2, title: "Dark", img: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=300" },
              { id: 3, title: "Ozark", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300" },
              { id: 4, title: "The OA", img: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=300" },
              { id: 5, title: "Black Mirror", img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300" },
            ].map((item) => (
              <div key={item.id} className="cursor-pointer group">
                <div className="relative overflow-hidden rounded-md">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-36 object-cover group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                    <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <p className="text-white text-sm mt-2 font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}