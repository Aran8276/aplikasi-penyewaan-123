"use server";

import { cookies } from "next/headers";
import client from "@/utils/axios-client";
import { SignInResponse } from "./SignIn.type"; 
import { AxiosError } from "axios";

export async function signIn(email: string, password: string) {
  try {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    const response = await client.post("/api/access/signin", { // Adjust the endpoint as necessary
      email: email,
      password: password,
    });

    const data: SignInResponse = response.data;
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
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    }
    return { success: false, message: "An unexpected error occurred." };
  }
}