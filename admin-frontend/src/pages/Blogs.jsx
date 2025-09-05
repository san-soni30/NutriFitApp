import React from "react";

export default function Blogs() {
  const blogs = [
    { id: 1, title: "Healthy Eating Habits", author: "Emily R.", date: "2025-08-12" },
    { id: 2, title: "Best Foods for Weight Loss", author: "John D.", date: "2025-08-28" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Blogs</h2>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full table-auto">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Author</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{blog.id}</td>
                <td className="px-4 py-2">{blog.title}</td>
                <td className="px-4 py-2">{blog.author}</td>
                <td className="px-4 py-2">{blog.date}</td>
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
