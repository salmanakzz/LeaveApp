import axios from "../axios/axios";
import { signupUrl } from "../urls/urls";

export const registerUser = async (registerData) => {
  try {
    const { data } = await axios.post(signupUrl, registerData);
    return data;
  } catch (error) {
    return error;
  }
};
