import React from "react";
import DashboardLayout from "../components/DashboardLayout";

export default function DashboardHome() {
  return (
    <DashboardLayout>
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to SkillSwap!</h1>
        <p className="text-gray-600">
          Here you can find people to learn from, share your skills, and make meaningful connections.
        </p>
      </div>
    </DashboardLayout>
  );
}
