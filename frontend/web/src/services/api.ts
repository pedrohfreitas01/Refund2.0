import axios from "axios";

export const api = axios.create({
  baseURL: "https://refund2-0api.onrender.com",
});
