import { createI18n } from "vue-i18n";
import zhLocale from "./lang/zh";
import enLocale from "./lang/en";
import { LANG } from "@/constants";

// 定义信息源
const messages = {
  en: {
    msg: {
      ...enLocale,
    },
  },
  zh: {
    msg: {
      ...zhLocale,
    },
  },
};

// 初始化 locale
const locale = window.localStorage.getItem(LANG);

// 创建 i18n 实例
const i18n = createI18n({
  legacy: false, // 使用 Composition Api
  globalInjection: true,
  locale: locale || "zh",
  messages,
});

export default i18n;
