// src/services/api.js
import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosHeaders, AxiosHeaderValue } from 'axios';
import { getToken } from "./index";
import { message } from 'antd'
declare module "axios" {
  interface AxiosResponse<T = any> {
    token?: string;
    statusCode: Number;
  }

}

interface CustomAxiosHeaders extends AxiosHeaders {
  Authorization?: AxiosHeaderValue;
}
interface CustomAxiosRequestConfig<T = any> extends InternalAxiosRequestConfig {
  headers: CustomAxiosHeaders
}

const api: AxiosInstance = axios.create({
  baseURL: '/', // Proxy prefix in Vite config
  headers: {
    'Content-Type': 'application/json',
    'lang': 'en'
  },
});

// Add a request interceptor to include the token in headers
api.interceptors.request.use(
  (config: CustomAxiosRequestConfig) => {
    const token = getToken();
    if (token) {
      (config.headers as CustomAxiosHeaders).Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle errors globally
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.clear();
      window.location.href = '/home';
    }
    return Promise.reject(error);
  }
);

export default api;
