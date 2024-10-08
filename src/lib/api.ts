/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import axios from "axios";
const accessToken = localStorage.getItem("token");

const baseURL = process.env.BASE_URL || window.location.origin + "/api";

export const MyAxios = axios.create({
  baseURL: baseURL,
  withCredentials: false,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

MyAxios.interceptors.response.use(
  (res) => res,
  (err: any) => {
    if (err?.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("profile");
      window.location.replace("/auth/signin");
    }
    normalizeError(err.response?.data.message);
  }
);

// Normalize errors
const normalizeError = (error: any) => {
  return Promise.reject(error);
};

export const updateToken = () => {
  const token = localStorage.getItem("token");
  MyAxios.interceptors.request.use(function (config: any) {
    config.headers.Authorization = token ? `Bearer ${token}` : `Bearer`;
    return config;
  });
};

export enum EHttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export interface IParams {
  [key: string]: any;
}

export interface IGenericOptions {
  url: string;
  params?: IParams;
}

export interface IErrorResponse {
  // *This can depending on your backend server error response
  status: string;
  message: string;
}

