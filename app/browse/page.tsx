import Hero from "@/components/cards/Hero";
import ContentRow from "@/components/cards/ContentRow";
import Navbar from "@/components/layout/Navbar";

const trending = [
  { id: 1, title: "Stranger Things", imageUrl: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400" },
  { id: 2, title: "The Crown", imageUrl: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400" },
  { id: 3, title: "Ozark", imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400" },
  { id: 4, title: "Dark", imageUrl: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400" },
  { id: 5, title: "Squid Game", imageUrl: "https://images.unsplash.com/photo-1585647347384-2593bc35786b?w=400" },
  { id: 6, title: "Money Heist", imageUrl: "https://images.unsplash.com/photo-1512070679279-8988d32161be?w=400" },
];

const action = [
  { id: 7, title: "Extraction", imageUrl: "https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?w=400" },
  { id: 8, title: "The Old Guard", imageUrl: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400" },
  { id: 9, title: "Red Notice", imageUrl: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=400" },
  { id: 10, title: "Army of Thieves", imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400" },
  { id: 11, title: "Project Power", imageUrl: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=400" },
  { id: 12, title: "Kate", imageUrl: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=400" },
];

const comedy = [
  { id: 13, title: "The Umbrella Academy", imageUrl: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400" },
  { id: 14, title: "Emily in Paris", imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400" },
  { id: 15, title: "Never Have I Ever", imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400" },
  { id: 16, title: "Ginny & Georgia", imageUrl: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400" },
  { id: 17, title: "On My Block", imageUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400" },
  { id: 18, title: "Cobra Kai", imageUrl: "https://images.unsplash.com/photo-1555431189-0fabf2667795?w=400" },
];

export default function BrowsePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <div className="-mt-16 relative z-10">
        <ContentRow title="Trending Now" contents={trending} />
        <ContentRow title="Action & Adventure" contents={action} />
        <ContentRow title="Comedy" contents={comedy} />
      </div>
    </main>
  );
}