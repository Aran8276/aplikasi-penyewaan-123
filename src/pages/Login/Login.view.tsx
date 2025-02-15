import { Lock, User } from "lucide-react";
import Link from "next/link";
import React, { FC, memo } from "react";

const LoginView: FC = () => {
  return (
    <div className="flex bg-gradient-to-r from-fuchsia-500 to-cyan-500 items-center justify-center min-h-screen bg-">
      <div className="bg-white rounded-2xl shadow-lg flex max-w-4xl w-full">
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-l-2xl p-10">
          <h2 className="text-white text-3xl text-center font-semibold">
            Welcome Back!
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
          <div className="mb-8 flex flex-col items-center">
            <div className="bg-indigo-500 p-3 rounded-full">
              <User className="text-white text-4xl" />
            </div>
            <h1 className="text-3xl font-bold text-indigo-500 mt-4">Masuk</h1>
          </div>

          <form className="flex flex-col w-full">
            <div className="relative mb-8">
              <User className="absolute left-3 text-gray-400" />
              <div className="login-input-container">
                <input type="text" className="pl-12 py-1" id="input" required />

                <label htmlFor="input" className="pl-12 label">
                  Email
                </label>
                <div className="underline"></div>
              </div>
            </div>

            <div className="relative mb-6">
              <Lock className="absolute left-3 text-gray-400" />
              <div className="login-input-container">
                <input
                  type="password"
                  className="pl-12 py-1"
                  id="input"
                  required
                />

                <label htmlFor="input" className="pl-12 label">
                  Password
                </label>
                <div className="underline"></div>
              </div>
            </div>

            <div className="text-right mb-4">
              <a href="#" className="text-sm text-indigo-500 hover:underline">
                Lupa Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition"
            >
              MASUK
            </button>
          </form>

          <p className="mt-4 text-gray-600">
            Belum punya akun?{" "}
            <Link className="text-indigo-500 hover:underline" href="/register">
              Daftar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(LoginView);
