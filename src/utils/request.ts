import axios from "axios";
import { ElMessage } from "element-plus";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 6000,
});

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

export default axiosInstance;
