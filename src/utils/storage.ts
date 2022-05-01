// 存储数据
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setItem = (key: string, value: any) => {
  if (typeof value === "object") {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(key, value);
};

// 获取数据
export const getItem = (key: string) => {
  const data = window.localStorage.getItem(key);
  try {
    if (data) {
      return JSON.parse(data);
    }
    return data;
  } catch {
    return data;
  }
};

// 删除指定数据
export const removeItem = (key: string) => {
  window.localStorage.removeItem(key);
};

// 清空数据
export const removeAllItem = () => {
  window.localStorage.clear();
};
