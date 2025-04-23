import axios from "axios";

const apiRequest = axios.create({
  // baseURL: "http://localhost:8800/api",
  baseURL: "http://54.252.163.13/:8800/api",
  withCredentials: true,
});

export default apiRequest;
