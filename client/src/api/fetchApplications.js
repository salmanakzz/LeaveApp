import axios from "../axios/axios";
import { fetchApplicationsUrl } from "../urls/urls";

export const fetchApplications = async () => {
  try {
    const { data } = await axios.get(fetchApplicationsUrl);
    return data;
  } catch (error) {
    return error;
  }
};
