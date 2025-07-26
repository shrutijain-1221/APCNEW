// src/utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // base URL for all API requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
