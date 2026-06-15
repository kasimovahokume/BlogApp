import PostCard from "@/components/PostCard";
import { getPosts } from "@/services/api";
import { Post } from "@/types/post";
import Link from "next/link";
export default async  function Home() {
   const posts = await getPosts();
  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog</h1>
        <Link
          href="/create"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Post Yarat
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-500">Heç bir post yoxdur.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {posts.map((post: Post) => (
            <PostCard key={post.id} post={post}/>
          ))}
        </div>
      )}
    </main>
  );
}
