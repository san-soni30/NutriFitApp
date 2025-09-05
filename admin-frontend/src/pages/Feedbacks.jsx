import React from "react";

export default function Feedbacks() {
  const feedbacks = [
    { id: 1, user: "Sophia K.", message: "Great diet plans!", rating: 5 },
    { id: 2, user: "Michael T.", message: "Very helpful advice!", rating: 4 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Client Feedbacks</h2>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full table-auto">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">User</th>
              <th className="px-4 py-2">Message</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((fb) => (
              <tr key={fb.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{fb.id}</td>
                <td className="px-4 py-2">{fb.user}</td>
                <td className="px-4 py-2">{fb.message}</td>
                <td className="px-4 py-2">⭐ {fb.rating}</td>
                <td className="px-4 py-2">
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
