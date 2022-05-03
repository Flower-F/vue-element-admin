import { useLanguageStore } from "@/stores/language";
import ElementPlus from "element-plus";
import zh from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/lib/locale/lang/en";
import type { App } from "vue";

export default (app: App<Element>) => {
  const store = useLanguageStore();
  app.use(ElementPlus, {
    locale: store.getLanguage() === "en" ? en : zh,
  });
};
