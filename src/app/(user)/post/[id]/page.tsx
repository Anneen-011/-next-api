import axios from "axios";
import Link from "next/link";

type Comment = { id: number; name: string; email: string; body: string };

export default async function PostDetailPage({ params }: { params: { id: string } }) {
  const postId = params.id;
  const { data: comments } = await axios.get<Comment[]>(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Comments of Post {postId}</h1>
        <Link href="/post" className="text-blue-600 hover:underline">← Back to Posts</Link>
      </div>
      <ul className="space-y-4">
        {comments.map(c => (
          <li key={c.id} className="p-4 border rounded hover:bg-gray-50 transition">
            <p className="font-semibold">{c.name} <span className="text-gray-400 text-sm">({c.email})</span></p>
            <p className="text-gray-700 mt-1">{c.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
