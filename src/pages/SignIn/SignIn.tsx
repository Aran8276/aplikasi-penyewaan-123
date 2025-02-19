"use client";

import { redirect } from "next/navigation";
import SignInView from "./SignIn.view";
import { useState } from "react";
import { signIn } from "@/server-actions/signin/SignIn.action";

export default function SignIn() {
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

    const processSignIn = await signIn(email, password);
    if (!processSignIn.success) {
      setError(
        processSignIn.message || "Kesalahan tidak diketahui, coba lagi nanti."
      );
      setIsLoading(false);
      return;
    }

    redirect("/");
  }

  return <SignInView isLoading={isLoading} error={error} onSubmit={onSubmit} />;
}