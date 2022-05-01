import { login } from "@/api/system";
import { defineStore } from "pinia";
import md5 from "md5";
import { ref } from "vue";
import { getItem, setItem } from "@/utils/storage";
import { TOKEN } from "@/constants";

interface IUserInfo {
  username: string;
  password: string;
}

export const useUserStore = defineStore("userStore", () => {
  const token = ref<string>(getItem(TOKEN) || "");

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

  return {
    token,
    loginAction,
    setToken,
  };

  // state: () => ({
  //   // counter: 0,
  //   userInfo: {
  //     username: "",
  //     password: "",
  //   },
  // }),
  // actions: {
  //   login() {
  //     const { username, password } = this.userInfo;
  //     return new Promise<void>((resolve, reject) => {
  //       login({
  //         username,
  //         password: md5(password),
  //       })
  //         .then(() => {
  //           resolve();
  //         })
  //         .catch((error) => {
  //           reject(error);
  //         });
  //     });
  //   },
  // },
});
