import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const CANCELLED_STATUS_CODE = 499;
function errorHandler(error: AxiosError) {
  let { status } = error.response || {};

  status = error.code === "ERR_CANCELED" ? CANCELLED_STATUS_CODE : status;

  // is user is unauthorized or is using an expired token clear storage and refresh
  if ([401, 440].includes(status!) && !window.location.pathname.includes("auth")) {
    localStorage.clear();
    window.location.reload();
  }

  // eslint-disable-next-line no-throw-literal
  throw {
    status,
    ...(error?.response?.data || {
      message: error.message || "Sorry, an unexpected error occurred.",
    }),
  };
}

// attach token to every request
httpClient.interceptors.request.use((request: InternalAxiosRequestConfig<any>) => {
  const token = localStorage.getItem("accessToken");
  if (token) request.headers["Authorization"] = `Bearer ${token}`;

  return request;
});

httpClient.interceptors.response.use((res) => res, errorHandler);
