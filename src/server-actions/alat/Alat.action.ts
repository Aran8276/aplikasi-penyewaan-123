"use server";

import client from "@/utils/axios-client";
import { AxiosError } from "axios";
import { ActionResponse, GetAlatResponse, StoreAlatRequest } from "./Alat.type";

export const getAlat = async (): Promise<GetAlatResponse | undefined> => {
  try {
    const data = (await client.get("/api/alat")).data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      return error.response?.data;
    }
  }
};

export const storeAlat = async (
  formData: StoreAlatRequest
): Promise<ActionResponse | undefined> => {
  try {
    const data = (await client.post("/api/alat", formData)).data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      console.log(error.response?.data);
      return error.response?.data;
    }
  }
};

export const updateAlat = async (
  formData: StoreAlatRequest,
  id: number
): Promise<ActionResponse | undefined> => {
  try {
    const data = (await client.put(`/api/alat/${id}`, formData)).data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      return error.response?.data;
    }
  }
};

export const deleteAlat = async (
  id: number
): Promise<ActionResponse | undefined> => {
  try {
    const data = (await client.delete(`/api/alat/${id}`)).data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      return error.response?.data;
    }
  }
};

export const showAlat = async (
  id: number
): Promise<ActionResponse | undefined> => {
  try {
    const data = (await client.get(`/api/alat/${id}`)).data;
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
      return error.response?.data;
    }
  }
};
