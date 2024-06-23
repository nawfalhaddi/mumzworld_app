import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://storage.googleapis.com/mumzrn/',
  timeout: 10000,
});

export default axiosInstance;
