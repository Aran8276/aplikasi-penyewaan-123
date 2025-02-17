"use server";

import client from "@/utils/axios-client";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logOut = async () => {
  const cookieStore = await cookies();
  try {
    await client.post("/api/logout");
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
  } finally {
    cookieStore.delete("token");
    redirect("/login");
  }
};
