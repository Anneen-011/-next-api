import Link from "next/link";
import axios from "axios";

type Post = {
  id: number;
  title: string;
};

export default async function PostsPage() {
  const { data: posts } = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const postIds = [1, 8, 10, 79];
  const filteredPosts = posts.filter((p) => postIds.includes(p.id));

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Posts</h1>
      <ul className="space-y-4">
        {filteredPosts.map((p) => (
          <li
            key={p.id}
            className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition cursor-pointer shadow-sm"
          >
            <Link
              href={`/post/${p.id}`}
              className="text-gray-800 font-semibold text-lg hover:text-blue-600"
            >
              {p.title} <span className="text-gray-400">(Post {p.id})</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
