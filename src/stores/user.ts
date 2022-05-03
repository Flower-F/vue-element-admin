import { getUserInfo, login } from "@/api/system";
import { defineStore } from "pinia";
import md5 from "md5";
import { ref } from "vue";
import { getItem, removeAllItem, setItem } from "@/utils/storage";
import { TOKEN } from "@/constants";
import router from "@/router";
import { setTimeStamp } from "@/utils/auth";

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
          setTimeStamp();
          router.push("/");
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  const logoutAction = () => {
    setUserInfo(null);
    setToken("");
    removeAllItem();
    router.push("/login");
  };

  const setToken = (newToken: string) => {
    token.value = newToken;
    setItem(TOKEN, newToken);
  };

  const getToken = () => token.value;

  const setUserInfo = (newUserInfo: IUserInfo | null) => {
    userInfo.value = newUserInfo;
  };

  const getUserInfoAction = async () => {
    const result = await getUserInfo();
    return result;
  };

  const hasUserInfo = () => userInfo.value !== null;

  return {
    token,
    loginAction,
    setToken,
    getToken,
    getUserInfoAction,
    setUserInfo,
    hasUserInfo,
    userInfo,
    logoutAction,
  };
});
