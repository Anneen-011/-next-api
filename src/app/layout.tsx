import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="p-4 bg-gray-200 flex gap-4">
          <Link href="/">🏠 Home</Link>
          <Link href="/about">ℹ️ About</Link>
          <Link href="/user">👤 Users</Link>
          <Link href="/post">📝 Posts</Link>
        </nav>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
