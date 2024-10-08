import { MyAxios } from "./api";

export interface ILogin {
  email: string;
  password: string;
}

export const login = async () => {
  const result = await MyAxios.get("/auth/login");
  return result.data;
};

