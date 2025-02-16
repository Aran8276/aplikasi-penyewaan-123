import axios from "axios";
import { cookies } from "next/headers";

async function getSessionCookie() {
  const cookieStore = await cookies();
  return cookieStore.get("session");
}

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LARAVEL_BASE_URL,
  timeout: 20000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

client.interceptors.request.use(
  async (config) => {
    const sessionCookie = await getSessionCookie();

    if (sessionCookie && sessionCookie.value) {
      config.headers.Authorization = `Bearer ${sessionCookie.value}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
