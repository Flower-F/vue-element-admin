import router from "@/router";
import { useUserStore } from "@/stores/user";

// 白名单，用户未登录也可以进入
const whiteList = ["/login"];

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  const store = useUserStore();

  if (store.getToken() !== "") {
    // 用户已登录，不允许进入 login
    if (to.path === "/login") {
      next("/");
    } else {
      // 判断用户信息是否存在
      if (!store.hasUserInfo()) {
        const result = await store.getUserInfoAction();
        store.setUserInfo(result);
      }
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
