import React from "react";

export default function Users() {
  const users = [
    { id: 1, name: "Emily R.", email: "emily@example.com", role: "Client" },
    { id: 2, name: "John D.", email: "john@example.com", role: "Client" },
    { id: 3, name: "Admin User", email: "admin@nutrifit.com", role: "Admin" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">User Management</h2>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full table-auto">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2">Edit</button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
