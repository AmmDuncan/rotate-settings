import axios, { InternalAxiosRequestConfig } from "axios";

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// attach token to every request
httpClient.interceptors.request.use((request: InternalAxiosRequestConfig<any>) => {
  const token = localStorage.getItem("accessToken");
  if (token) request.headers["Authorization"] = `Bearer ${token}`;

  return request;
});
