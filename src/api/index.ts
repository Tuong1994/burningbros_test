import axios from "axios";

const BASE_URL = "https://dummyjson.com";

const AxiosClient = axios.create({
  baseURL: BASE_URL,
});

export default AxiosClient;
