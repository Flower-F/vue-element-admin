import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Layout from "@/layout/BasicLayout.vue";
import { User } from "@element-plus/icons-vue";

// 公开路由表，人人都可以访问
const publicRoutes = [
  {
    path: "/",
    redirect: "profile",
    name: "home",
    children: [
      {
        path: "/profile",
        name: "profile",
        component: () => import("../views/ProfileView.vue"),
        meta: {
          title: "profile",
          icon: User,
        },
      },
      {
        path: "/404",
        name: "404",
        component: () => import("../views/ErrorView.vue"),
      },
      {
        path: "/401",
        name: "401",
        component: () => import("../views/ForbiddenView.vue"),
      },
    ],
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
];

// 私有路由表
const privateRoutes = [
  {
    path: "/user",
    name: "user",
    redirect: "user/manager",
    component: Layout,
    meta: {
      title: "user",
      icon: "personnel",
    },
    children: [
      {
        path: "/user/manage",
        name: "userManage",
        component: () => import("../views/UserManageView.vue"),
        meta: {
          title: "userManage",
          icon: "personnel-manage",
        },
      },
      {
        path: "/user/role",
        name: "userRole",
        component: () => import("../views/RoleListView.vue"),
        meta: {
          title: "roleList",
          icon: "role",
        },
      },
      {
        path: "/user/userPermission",
        name: "permission",
        component: () => import("../views/PermissionListView.vue"),
        meta: {
          title: "permissionList",
          icon: "permission",
        },
      },
      {
        path: "/user/info/:id",
        name: "userInfo",
        component: () => import("../views/UserInfoView.vue"),
        meta: {
          title: "userInfo",
        },
      },
      {
        path: "/user/import",
        name: "import",
        component: () => import("../views/UserInfoView.vue"),
        meta: {
          title: "excelImport",
        },
      },
    ],
  },
  {
    path: "/article",
    component: Layout,
    redirect: "/article/ranking",
    meta: {
      title: "article",
      icon: "article",
    },
    children: [
      {
        path: "/article/ranking",
        name: "articleRanking",
        component: () => import("@/views/ArticleRankingView.vue"),
        meta: {
          title: "articleRanking",
          icon: "article-ranking",
        },
      },
      {
        path: "/article/:id",
        name: "articleDetail",
        component: () => import("@/views/ArticleDetailView.vue"),
        meta: {
          title: "articleDetail",
        },
      },
      {
        path: "/article/create",
        name: "articleCreate",
        component: () => import("@/views/ArticleCreateView.vue"),
        meta: {
          title: "articleCreate",
          icon: "article-create",
        },
      },
      {
        path: "/article/editor/:id",
        name: "articleEditor",
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
