import { LANG } from "@/constants";
import { getItem } from "@/utils/storage";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useLanguageStore = defineStore("languageStore", () => {
  const language = ref<string>(getItem(LANG) || "zh");

  const setLanguage = (languageValue: string) => {
    language.value = languageValue;
  };

  const getLanguage = () => language.value;

  return {
    setLanguage,
    getLanguage,
  };
});
