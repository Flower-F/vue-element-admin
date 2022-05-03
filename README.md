# 仿 vue-element-admin

## 技术选型

- Vue3.2 + Vite + TypeScript
- Composition Api
- Element Plus
- Pinia
- ESLint + Prettier + Commitlint + Commitizen

## 模块

- 登录 ✔️
  - token 本地存储 ✔️
  - 用户信息使用 Pinia 管理 ✔️
- 退出登录 ✔️
  - 用户主动退出 ✔️
  - 用户被动退出 ✔️
- 路由动态解析 ✔️
  - 根据动态路由生成对应的侧边栏菜单 ✔️
- 整体布局组件 ✔️
- 动态面包屑组件 ✔️

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
