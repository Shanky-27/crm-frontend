import axios from "axios";

const api = axios.create({
  baseURL: "https://crm-backend-z8b5.onrender.com/api",
});

export default api;