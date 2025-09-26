import Link from "next/link";
import axios from "axios";

type Post = { id: number; title: string };

export default async function PostsPage() {
  const { data: posts } = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");

  const postIds = [1, 8, 10, 79];
  const filteredPosts = posts.filter(p => postIds.includes(p.id));

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="space-y-2">
        {filteredPosts.map(p => (
          <li key={p.id} className="p-2 border rounded hover:bg-gray-50 transition">
            <Link href={`/post/${p.id}`} className="text-blue-600 hover:underline">
              {p.title} (Post {p.id})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
