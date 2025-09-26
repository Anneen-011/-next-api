import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <nav className="bg-white shadow p-4 flex justify-center gap-6">
          <Link href="/" className="text-gray-800 font-semibold hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-gray-800 font-semibold hover:text-blue-600">About</Link>
          <Link href="/user" className="text-gray-800 font-semibold hover:text-blue-600">Users</Link>
          <Link href="/post" className="text-gray-800 font-semibold hover:text-blue-600">Posts</Link>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
