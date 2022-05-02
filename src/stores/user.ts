import { getUserInfo, login } from "@/api/system";
import { defineStore } from "pinia";
import md5 from "md5";
import { ref } from "vue";
import { getItem, setItem } from "@/utils/storage";
import { TOKEN } from "@/constants";

interface IUserInfo {
  username: string;
  password: string;
  avatar: string;
}

export const useUserStore = defineStore("userStore", () => {
  const token = ref<string>(getItem(TOKEN) || "");
  const userInfo = ref<IUserInfo | null>(null);

  const loginAction = (userInfo: IUserInfo) => {
    const { username, password } = userInfo;
    return new Promise<void>((resolve, reject) => {
      login({
        username,
        password: md5(password),
      })
        .then((data) => {
          setToken(data.token);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const setToken = (tokenValue: string) => {
    token.value = tokenValue;
    setItem(TOKEN, tokenValue);
  };

  const getToken = () => {
    return token.value;
  };

  const setUserInfo = (userInfoValue: IUserInfo) => {
    userInfo.value = userInfoValue;
  };

  const getUserInfoAction = async () => {
    const result = await getUserInfo();
    return result;
  };

  const hasUserInfo = () => {
    return userInfo.value !== null;
  };

  return {
    token,
    loginAction,
    setToken,
    getToken,
    getUserInfoAction,
    setUserInfo,
    hasUserInfo,
    userInfo,
  };
});
