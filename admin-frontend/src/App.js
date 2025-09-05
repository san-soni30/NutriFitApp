import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

// Admin imports
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Appointments from "./pages/Appointments";
import Blogs from "./pages/Blogs";
import Feedbacks from "./pages/Feedbacks";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import PrivateRoute from "./layout/PrivateRoute";

export default function App() {
  return (
    <Router>
      
      {/* Admin Side */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoute><AdminLayout><Dashboard /></AdminLayout> </PrivateRoute>} />
        <Route path="/appointments" element={<PrivateRoute><AdminLayout><Appointments /></AdminLayout> </PrivateRoute>} />
        <Route path="/blogs" element={<PrivateRoute><AdminLayout><Blogs /></AdminLayout> </PrivateRoute>} />
        <Route path="/feedbacks" element={<PrivateRoute><AdminLayout><Feedbacks /></AdminLayout> </PrivateRoute>} />
        <Route path="/users" element={<PrivateRoute><AdminLayout><Users /></AdminLayout> </PrivateRoute>} />
        <Route path="/settings" element={<PrivateRoute><AdminLayout><Settings /></AdminLayout> </PrivateRoute>} />
      </Routes>

      <Footer />
    </Router>
  );
}
