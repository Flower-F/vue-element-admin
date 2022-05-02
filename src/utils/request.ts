import { useUserStore } from "@/stores/user";
import axios from "axios";
import { ElMessage } from "element-plus";
import { isTimeout } from "./auth";

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
    const store = useUserStore();
    // 注入 token
    if (store.getToken() !== "") {
      if (isTimeout()) {
        store.logoutAction();
        ElMessage.error("token 已失效");
        return Promise.reject(new Error("token 已失效"));
      }
      if (config.headers) {
        config.headers.Authorization = `Bearer ${store.getToken()}`;
      }
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
