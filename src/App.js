import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashboardHome from "./pages/DashboardHome";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Login />} /> {/* default route */}
      </Routes>
    </Router>
  );
}
