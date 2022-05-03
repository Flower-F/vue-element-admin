import { defineStore } from "pinia";
import { ref } from "vue";
import { MAIN_COLOR, DEFAULT_COLOR } from "@/constants";
import { getItem, setItem } from "@/utils/storage";

export const useThemeStore = defineStore("themeStore", () => {
  const mainColor = ref<string>(getItem(MAIN_COLOR) || DEFAULT_COLOR);

  const setMainColor = (newColor: string) => {
    mainColor.value = newColor;
    setItem(MAIN_COLOR, mainColor.value);
  };

  const getMainColor = () => {
    return mainColor.value;
  };

  return {
    setMainColor,
    getMainColor,
  };
});
