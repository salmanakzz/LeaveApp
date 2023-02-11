import axios from "../axios/axios";
import { loginUrl } from "../urls/urls";

export const userLogin = async (LoginData) => {
  try {
    const { data } = await axios.post(loginUrl, LoginData);
    return data;
  } catch (error) {
    return error;
  }
};
