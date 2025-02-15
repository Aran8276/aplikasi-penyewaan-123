"use client";
import { useState } from "react";
import { FaUser, FaLock, FaFacebook, FaGoogle } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login dengan:", email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-white rounded-2xl shadow-lg flex max-w-4xl w-full">
        {/* Bagian Kiri */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-l-2xl p-10">
          <h2 className="text-white text-3xl font-semibold">LOGIN</h2>
        </div>

        {/* Bagian Kanan */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
          <div className="mb-8 flex flex-col items-center">
            <div className="bg-indigo-500 p-3 rounded-full">
              <FaUser className="text-white text-4xl" />
            </div>
            <h1 className="text-3xl font-bold text-indigo-500 mt-4">DAFTAR</h1>
          </div>

          <form className="w-full" onSubmit={handleLogin}>
            <div className="mb-4 relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 p-3 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 p-3 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="text-right mb-4">
              <a href="#" className="text-sm text-indigo-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-600 transition"
            >
              LOGIN
            </button>
          </form>

          <p className="mt-4 text-gray-600">Or Login with</p>
          <div className="flex space-x-4 mt-3">
            <button className="flex items-center space-x-2 border border-gray-300 p-2 rounded-lg hover:bg-gray-100">
              <FaGoogle className="text-red-500" /> <span>Google</span>
            </button>
            <button className="flex items-center space-x-2 border border-gray-300 p-2 rounded-lg hover:bg-gray-100">
              <FaFacebook className="text-blue-600" /> <span>Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}