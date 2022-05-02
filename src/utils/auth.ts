import { TIMEOUT_VALUE, TIME_STAMP } from "@/constants";
import { getItem, setItem } from "./storage";

// 获取时间戳
export const getTimeStamp = () => {
  return getItem(TIME_STAMP);
};

// 设置时间戳
export const setTimeStamp = () => {
  setItem(TIME_STAMP, Date.now());
};

// 判断是否超时
export const isTimeout = () => {
  const currentTime = Date.now();
  const lastTime = getTimeStamp();

  return currentTime - lastTime > TIMEOUT_VALUE;
};
