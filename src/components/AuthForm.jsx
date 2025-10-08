import React from "react";

export default function AuthForm({ title, submitText, handleSubmit, children }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-200 rounded-full opacity-40 animate-pulseSlow"></div>
      <div className="absolute -bottom-20 -right-16 w-80 h-80 bg-purple-200 rounded-full opacity-30 animate-pulseSlow"></div>

      {/* Form Card */}
      <div className="relative z-10 bg-white/95 p-8 rounded-2xl shadow-lg w-full sm:w-96 transition-shadow duration-300 hover:shadow-xl animate-fadeIn">
        {/* Logo / illustration placeholder */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl">
            S
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">{title}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {children}
          <button
            type="submit"
            className="w-full bg-indigo-400 hover:bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            {submitText}
          </button>
        </form>
      </div>
    </div>
  );
}
