import { login } from "@/api/system";
import { defineStore } from "pinia";
import md5 from "md5";
import { ref } from "vue";

interface IUserInfo {
  username: string;
  password: string;
}

export const useUserStore = defineStore("userStore", () => {
  const userInfo = ref<IUserInfo>({
    username: "",
    password: "",
  });

  function loginAction(userInfo: IUserInfo) {
    const { username, password } = userInfo;
    return new Promise<void>((resolve, reject) => {
      login({
        username,
        password: md5(password),
      })
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  return {
    userInfo,
    loginAction,
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
