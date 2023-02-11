import axios from "../axios/axios";
import { submitApplicationUrl } from "../urls/urls";

export const submitApplication = async (application) => {
  try {
    const { data } = await axios.post(submitApplicationUrl, application);
    return data;
  } catch (error) {
    return error;
  }
};
