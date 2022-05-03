import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

import "normalize.css";
import "./styles/index.scss";
import "virtual:svg-icons-register";

import SvgIcon from "./components/SvgIcon.vue";
import i18n from "./i18n";

// 路由守卫
import "./permission";

const app = createApp(App);

app.component("svg-icon", SvgIcon);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(ElementPlus);

app.mount("#app");
