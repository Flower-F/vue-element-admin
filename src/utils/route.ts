import type { RouteRecordRaw } from "vue-router";
import path from "path-browserify";

// 获取所有含有 children 路由的 children 部分
export const getChildrenRoutes = (routes: RouteRecordRaw[]) => {
  const result: RouteRecordRaw[] = [];
  routes.forEach((route) => {
    if (route.children && route.children.length > 0) {
      result.push(...route.children);
    }
  });
  return result;
};

// 处理所有多余的路由
// 比如 article 的 children 下有 article/ranking
// 而本身第一级路由也有 article/ranking，重复了
export const filterRoutes = (routes: RouteRecordRaw[]) => {
  const set = new Set(getChildrenRoutes(routes).map((item) => item.path));
  // 进行查重操作
  return routes.filter((route) => !set.has(route.path));
};

const isNull = (data: unknown) => {
  if (!data) {
    return true;
  }
  if (JSON.stringify(data) === "{}" || JSON.stringify(data) === "[]") {
    return true;
  }
  return false;
};

// 根据 routes 数据，返回最终的格式化数据
export const generateMenus = (routes: RouteRecordRaw[] = [], basePath = "") => {
  const result: RouteRecordRaw[] = [];
  // result 中的元素必须满足 meta && meta.title && meta.icon
  routes.forEach((item) => {
    // 不存在 children 和 meta 的，直接 return
    if (isNull(item.children) && isNull(item.meta)) {
      return;
    }

    // 存在 children，但是不存在 meta
    if (!isNull(item.children) && isNull(item.meta)) {
      result.push(...generateMenus(item.children));
      return;
    }

    // 不存在 children，但是存在 meta
    const routePath = path.resolve(basePath, item.path);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const route: any = {
      ...item,
      path: routePath,
      children: [],
    };

    // 必须同时存在 icon 和 title
    if (route.meta && route.meta.icon && route.meta.title) {
      result.push(route);
    }

    // 存在 children 且存在 meta
    if (!isNull(item.children) && !isNull(item.meta)) {
      route.children.push(...generateMenus(item.children, route.path));
    }
  });

  return result;
};
