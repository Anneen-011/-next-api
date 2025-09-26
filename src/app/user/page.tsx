"use client";
import { useEffect, useState } from "react";
import axios from "axios";

type User = { id: number; name: string; email: string };

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>กำลังโหลด...</p>;
  if (error) return <p>เกิดข้อผิดพลาด: {error}</p>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <ul className="space-y-2">
        {users.map(u => (
          <li key={u.id} className="p-2 border rounded hover:bg-gray-50 transition">
            {u.name} — {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
