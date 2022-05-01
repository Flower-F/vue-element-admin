import request from "@/utils/request";

// 登录
export const login = (data: unknown) => {
  return request({
    url: "/sys/login",
    method: "POST",
    data,
  });
};
