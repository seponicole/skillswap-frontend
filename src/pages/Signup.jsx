import React from "react";
import AuthForm from "../components/AuthForm";

export default function Signup() {
  const handleSignup = (e) => {
    e.preventDefault();
    // TODO: Add signup logic
    alert("Account created!");
  };

  return (
    <AuthForm title="Create Account" submitText="Sign Up" handleSubmit={handleSignup}>
      <input
        type="text"
        placeholder="Full Name"
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        required
      />
      <p className="text-sm text-gray-500 text-center">
        Already have an account?{" "}
        <a href="/login" className="text-indigo-400 hover:text-indigo-500 font-medium">
          Login
        </a>
      </p>
    </AuthForm>
  );
}
