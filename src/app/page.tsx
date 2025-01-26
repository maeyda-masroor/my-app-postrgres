// app/page.tsx
'use client';

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);

  const handleAddUser = async () => {
    const res = await fetch('/api/users/insert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });

    if (res.ok) {
      alert('User added!');
      fetchUsers(); // Refresh user list
    }
  };

  const fetchUsers = async () => {
    const res = await fetch('/api/users/select');
    if (res.ok) {
      const data = await res.json();
      setUsers(data);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Prisma with Neon and Next.js</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={handleAddUser}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add User
        </button>
      </div>

      <button onClick={fetchUsers} className="bg-green-500 text-white p-2 rounded">
        Fetch Users
      </button>

      <ul className="mt-4">
        {users.map((user: any) => (
          <li key={user.id} className="border-b p-2">
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
