import axios from "axios";

const api = axios.create({
  baseURL: "https://api.hgbrasil.com/weather?",
  timeout: 3000,
});

export default api;
