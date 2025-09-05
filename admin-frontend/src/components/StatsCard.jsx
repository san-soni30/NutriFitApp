import React from "react";

export default function StatsCard({ title, value }) {
  return (
    <div className="bg-white shadow rounded-lg p-6 text-center">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-2xl font-bold text-green-700">{value}</p>
    </div>
  );
}
