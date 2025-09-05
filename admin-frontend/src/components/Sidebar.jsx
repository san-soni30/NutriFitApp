import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  Users,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";

const links = [
  { name: "Dashboard", path: "/", icon: <LayoutDashboard /> },
  { name: "Appointments", path: "/appointments", icon: <Calendar /> },
  { name: "Blogs", path: "/blogs", icon: <FileText /> },
  { name: "Feedbacks", path: "/feedbacks", icon: <MessageSquare /> },
  { name: "Users", path: "/users", icon: <Users /> },
  { name: "Settings", path: "/settings", icon: <Settings /> },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Handle logout
  const handleLogout = () => {
    localStorage.removeItem("isAdmin"); // clear auth flag
    navigate("/login"); // redirect to login
  };

  return (
    <aside className="w-64 bg-green-700 text-white flex flex-col">
      <div className="text-2xl font-bold p-4 border-b border-green-600">
        <Link to="/">Admin Panel</Link>
      </div>
      <nav className="flex-1 p-4 space-y-3">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition 
              ${
                location.pathname === link.path
                  ? "bg-green-500"
                  : "hover:bg-green-600"
              }`}
          >
            {link.icon}
            {link.name}
          </Link>
        ))}

        {/* ✅ Logout button (not just a link) */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left hover:bg-green-600 transition mt-4"
        >
          <LogOut />
          Logout
        </button>
      </nav>
    </aside>
  );
}
