"use server";

import client from "@/utils/axios-client";
import { AxiosError } from "axios";

export const getUser = async () => {
  try {
    const data = (await client.get("/api/access/user")).data;
    return data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      return error.response?.data;
    }
  }
};
