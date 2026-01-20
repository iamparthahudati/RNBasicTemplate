import { API_BASE_URL, API_TIMEOUT } from '@env';
import axios from 'axios';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: Number(API_TIMEOUT) || 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Request interceptor
 */
api.interceptors.request.use(
  config => {
    // Future: attach auth token here
    return config;
  },
  error => Promise.reject(error),
);

/**
 * Response interceptor
 */
api.interceptors.response.use(
  response => response,
  error => {
    // Future: global error handling
    return Promise.reject(error);
  },
);

export default api;
