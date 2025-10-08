import React from "react";
import AuthForm from "../components/AuthForm";

export default function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: Add login logic
    alert("Logged in!");
  };

  return (
    <AuthForm title="Welcome Back" submitText="Login" handleSubmit={handleLogin}>
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
        Don't have an account?{" "}
        <a href="/signup" className="text-indigo-400 hover:text-indigo-500 font-medium">
          Sign Up
        </a>
      </p>
    </AuthForm>
  );
}
