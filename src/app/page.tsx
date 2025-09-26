import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-6">ยินดีต้อนรับ 🚀</h1>
      <p className="text-gray-700 mb-8">นี่คือหน้าแรกของเว็บ Next.js ของคุณ</p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Link href="/user" className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition">Users</Link>
        <Link href="/post" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Posts</Link>
        <Link href="/about" className="px-6 py-3 bg-gray-600 text-white rounded hover:bg-gray-700 transition">About</Link>
      </div>
    </div>
  );
}
