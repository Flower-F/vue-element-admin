import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import Layout from "@/layout/BasicLayout.vue";
import { User } from "@element-plus/icons-vue";

// 公开路由表
const publicRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "profile",
    name: "Home",
    children: [
      {
        path: "/profile",
        name: "Profile",
        component: () => import("../views/ProfileView.vue"),
        meta: {
          title: "profile",
          icon: User,
        },
      },
      {
        path: "/404",
        name: "Error",
        component: () => import("../views/ErrorView.vue"),
      },
      {
        path: "/401",
        name: "Forbidden",
        component: () => import("../views/ForbiddenView.vue"),
      },
    ],
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginView.vue"),
  },
];

// 私有路由表
const privateRoutes: RouteRecordRaw[] = [
  {
    path: "/user",
    name: "User",
    redirect: "user/manager",
    component: Layout,
    meta: {
      title: "user",
      icon: "personnel",
    },
    children: [
      {
        path: "/user/manage",
        name: "UserManage",
        component: () => import("../views/UserManageView.vue"),
        meta: {
          title: "userManage",
          icon: "personnel-manage",
        },
      },
      {
        path: "/user/role",
        name: "UserRole",
        component: () => import("../views/RoleListView.vue"),
        meta: {
          title: "roleList",
          icon: "role",
        },
      },
      {
        path: "/user/userPermission",
        name: "Permission",
        component: () => import("../views/PermissionListView.vue"),
        meta: {
          title: "permissionList",
          icon: "permission",
        },
      },
      {
        path: "/user/info/:id",
        name: "UserInfo",
        component: () => import("../views/UserInfoView.vue"),
        meta: {
          title: "userInfo",
        },
      },
      {
        path: "/user/import",
        name: "Import",
        component: () => import("../views/UserInfoView.vue"),
        meta: {
          title: "excelImport",
        },
      },
    ],
  },
  {
    path: "/article",
    name: "Article",
    component: Layout,
    redirect: "/article/ranking",
    meta: {
      title: "article",
      icon: "article",
    },
    children: [
      {
        path: "/article/ranking",
        name: "ArticleRanking",
        component: () => import("@/views/ArticleRankingView.vue"),
        meta: {
          title: "articleRanking",
          icon: "article-ranking",
        },
      },
      {
        path: "/article/:id",
        name: "ArticleDetail",
        component: () => import("@/views/ArticleDetailView.vue"),
        meta: {
          title: "articleDetail",
        },
      },
      {
        path: "/article/create",
        name: "ArticleCreate",
        component: () => import("@/views/ArticleCreateView.vue"),
        meta: {
          title: "articleCreate",
          icon: "article-create",
        },
      },
      {
        path: "/article/editor/:id",
        name: "ArticleEditor",
        component: () => import("@/views/ArticleEditorView.vue"),
        meta: {
          title: "articleEditor",
        },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [...publicRoutes, ...privateRoutes],
});

export default router;
