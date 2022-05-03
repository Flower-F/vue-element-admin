import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "normalize.css";
import "./styles/index.scss";
import "virtual:svg-icons-register";

import SvgIcon from "./components/SvgIcon.vue";
import i18n from "./i18n";

// 路由守卫
import "./permission";

import registerElementPlus from "@/plugins/element";

const app = createApp(App);

app.component("svg-icon", SvgIcon);

app.use(createPinia());
app.use(router);
app.use(i18n);
// app.use(ElementPlus);
registerElementPlus(app);

app.mount("#app");
