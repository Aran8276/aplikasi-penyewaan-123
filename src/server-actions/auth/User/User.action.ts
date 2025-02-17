"use server";

import client from "@/utils/axios-client";
import { AxiosError } from "axios";
import { GetUserResponse } from "./User.type";

export const getUser = async (): Promise<
  GetUserResponse | boolean | undefined
> => {
  try {
    const data = (await client.get("/api/access/user")).data;
    if (!data) {
      return false;
    }

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      return error.response?.data;
    }
  }
};
