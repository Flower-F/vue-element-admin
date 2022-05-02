import { useUserStore } from "@/stores/user";
import axios from "axios";
import { ElMessage } from "element-plus";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 6000,
});

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    const { success, data, message } = response.data;
    // 判断当前请求是否成功
    if (success) {
      return data;
    } else {
      ElMessage.error(message);
      return Promise.reject(new Error(message));
    }
  },
  (error) => {
    // 请求失败
    ElMessage.error(error);
    return Promise.reject(new Error(error));
  }
);

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 注入 token
    if (useUserStore().getToken() !== "" && config.headers) {
      config.headers.Authorization = `Bearer ${useUserStore().getToken()}`;
    }
    return config;
  },
  (error) => {
    // 请求失败
    ElMessage.error(error);
    return Promise.reject(new Error(error));
  }
);

export default axiosInstance;
