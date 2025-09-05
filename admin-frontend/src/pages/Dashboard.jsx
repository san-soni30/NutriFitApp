import React from "react";
import StatsCard from "../components/StatsCard";

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="Appointments" value="120" />
        <StatsCard title="Blogs" value="45" />
        <StatsCard title="Users" value="300" />
      </div>
    </div>
  );
}
