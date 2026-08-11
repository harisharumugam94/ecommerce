import axios from 'axios';

// Change this to your live Render URL once the backend is deployed
export const API_BASE = 'https://ecommerce-ioot.onrender.com/api';

// URL of the separate customer-facing User app
export const USER_APP_URL = 'http://localhost:5173';

const api = axios.create({ baseURL: API_BASE });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
