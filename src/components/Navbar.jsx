import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-indigo-500 font-bold text-xl">
        SkillSwap
      </Link>

      <div className="space-x-4 flex items-center">
        <Link to="/dashboard" className="text-gray-700 hover:text-indigo-500 transition-colors">
          Dashboard
        </Link>
        <Link to="/profile" className="text-gray-700 hover:text-indigo-500 transition-colors">
          Profile
        </Link>
        <button className="bg-indigo-400 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-all duration-200">
          Logout
        </button>
      </div>
    </nav>
  );
}
