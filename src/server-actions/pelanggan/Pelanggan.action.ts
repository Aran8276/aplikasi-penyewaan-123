"use server";

import client from "@/utils/axios-client";
import { AxiosError } from "axios";
import {
  ActionResponse,
  GetPelangganResponse,
  StorePelangganRequest,
} from "./Pelanggan.type";

export const getPelanggan = async (): Promise<
  GetPelangganResponse | undefined
> => {
  try {
    const data = (await client.get("/api/pelanggan")).data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      return error.response?.data;
    }
  }
};

export const storePelanggan = async (
  formData: StorePelangganRequest
): Promise<ActionResponse | undefined> => {
  try {
    const data = (await client.post("/api/pelanggan", formData)).data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      return error.response?.data;
    }
  }
};

export const updatePelanggan = async (
  formData: StorePelangganRequest,
  id: number
): Promise<ActionResponse | undefined> => {
  try {
    const data = (await client.put(`/api/pelanggan/${id}`, formData)).data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      return error.response?.data;
    }
  }
};

export const deletePelanggan = async (
  id: number
): Promise<ActionResponse | undefined> => {
  try {
    const data = (await client.delete(`/api/pelanggan/${id}`)).data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      return error.response?.data;
    }
  }
};

export const showPelanggan = async (
  id: number
): Promise<ActionResponse | undefined> => {
  try {
    const data = (await client.get(`/api/pelanggan/${id}`)).data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      return error.response?.data;
    }
  }
};
