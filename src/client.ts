import Axios from "axios";

const VITE_API_URL = import.meta.env.VITE_API_URL;

export const client = Axios.create({
  baseURL: VITE_API_URL,
});
