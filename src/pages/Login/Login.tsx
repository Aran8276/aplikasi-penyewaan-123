"use client";

import { redirect } from "next/navigation";
import LoginView from "./Login.view";
import { useState } from "react";
import { login } from "@/server-actions/login/Login.action";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      setError("Kolum email dan password wajib diisi!");
      setIsLoading(false);
      return;
    }

    const processLogin = await login(email, password);
    if (!processLogin.success) {
      setError(
        processLogin.message || "Kesalahan tidak diketahui, coba lagi nanti."
      );
      setIsLoading(false);
      return;
    }

    redirect("/");
  }
  return <LoginView isLoading={isLoading} error={error} onSubmit={onSubmit} />;
}
