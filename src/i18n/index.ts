import { createI18n } from "vue-i18n";

// 定义信息源
const messages = {
  en: {
    msg: {
      test: "hello world",
    },
  },
  zh: {
    msg: {
      test: "你好世界",
    },
  },
};

// 定义 locale
const locale = "zh";

// 创建 i18n 实例
const i18n = createI18n({
  legacy: false, // Composition Api
  globalInjection: true,
  locale,
  messages,
});

export default i18n;
