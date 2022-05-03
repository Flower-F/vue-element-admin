import { LANG } from "@/constants";
import { getItem, setItem } from "@/utils/storage";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useLanguageStore = defineStore("languageStore", () => {
  const language = ref<string>(getItem(LANG) || "zh");

  const setLanguage = (newLanguage: "zh" | "en") => {
    language.value = newLanguage;
    setItem(LANG, newLanguage);
  };

  const getLanguage = () => language.value;

  return {
    setLanguage,
    getLanguage,
  };
});
