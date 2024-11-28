import axios from 'axios';

import { baseApiUrl } from '../utils/constants';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: baseApiUrl,
  timeout: 10000,
});

export default axiosInstance;
