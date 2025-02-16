"use server";

import { cookies } from "next/headers";
import client from "@/utils/axios-client";
import { LoginResponse } from "./Login.type";

export async function login(email: string, password: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const response = await client.post("/api/access/login", {
    email: email,
    password: password,
  });

  const data: LoginResponse = response.data;
  if (!data.success) {
    return data;
  }

  const cookieStore = await cookies();
  cookieStore.set("session", data.access_token, {
    httpOnly: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
  return data;
}
