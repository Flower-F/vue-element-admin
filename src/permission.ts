import router from "@/router";
import { useUserStore } from "@/stores/user";

// 白名单，用户未登录也可以进入
const whiteList = ["/login"];

// 路由前置守卫
router.beforeEach((to, from, next) => {
  if (useUserStore().getToken() !== "") {
    // 用户已登录，不允许进入 login
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  } else {
    // 用户未登录，只允许进入 login
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next("/login");
    }
  }
});
