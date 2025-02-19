import { Lock, User } from "lucide-react";
import Link from "next/link";
import React, { FC, memo } from "react";
import { SignInProps } from "./SignIn.type";
import LoadableButton from "@/components/LoadableButton/LoadableButton";

const SignInView: FC<SignInProps> = ({ isLoading, onSubmit }) => {
  return (
    <div className="flex bg-gradient-to-r from-fuchsia-500 to-cyan-500 items-center justify-center min-h-screen">
      <div className="bg-white rounded-2xl shadow-lg flex max-w-4xl w-full">
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-r from-indigo-500 to-blue-400 rounded-l-2xl p-10">
          <h2 className="text-white text-3xl text-center font-semibold">
            Welcome!
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
          <div className="mb-8 flex flex-col items-center">
            <div className="bg-indigo-500 p-3 rounded-full">
              <User  className="text-white text-4xl" />
            </div>
            <h1 className="text-3xl font-bold text-indigo-500 mt-4">Daftar</h1>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col w-full">
            <div className="relative mb-8">
              <User  className="absolute left-3 text-gray-400" />
              <div className="login-input-container">
                <input
                  name="email"
                  type="text"
                  className="pl-12 py-1"
                  id="email-input"
                  required
                />
                <label htmlFor="email-input" className="pl-12 label">
                  Email
                </label>
                <div className="underline"></div>
              </div>
            </div>

            <div className="relative mb-8"> {/* Increased margin-bottom here */}
              <Lock className="absolute left-3 text-gray-400" />
              <div className="login-input-container">
                <input
                  name="password"
                  type="password"
                  className="pl-12 py-1"
                  id="password-input"
                  required
                />
                <label htmlFor="password-input" className="pl-12 label">
                  Password
                </label>
                <div className="underline"></div>
              </div>
            </div>

            <LoadableButton
              loading={isLoading}
              type="submit"
              className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition mb-6" // Increased margin-bottom here
            >
              DAFTAR
            </LoadableButton>
          </form>

          <p className="mt-6 text-gray-600">
            Sudah punya akun?{" "}
            <Link className="text-indigo-500 hover:underline" href="/login">
              Masuk
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(SignInView);