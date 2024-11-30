import axios from 'axios';



import { baseApiUrl } from '../utils/constants';


// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: baseApiUrl,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('custom-auth-token');

    // If token exists, set it in the Authorization header
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;