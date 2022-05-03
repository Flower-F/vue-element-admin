import { createApp } from "vue";
import { createPinia } from "pinia";

// 路由守卫
import "./permission";

import App from "./App.vue";
import router from "./router";

import "normalize.css";
import "./styles/index.scss";
import "element-plus/theme-chalk/index.css";
import "virtual:svg-icons-register";

import SvgIcon from "./components/SvgIcon.vue";
import i18n from "./i18n";

import registerElementPlus from "@/plugins/element";

const app = createApp(App);
app.use(createPinia());
app.component("svg-icon", SvgIcon);
app.use(i18n);
app.use(router);
registerElementPlus(app);

app.mount("#app");
