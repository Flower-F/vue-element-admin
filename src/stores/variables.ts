import { defineStore } from "pinia";
import cssVariables from "@/styles/variables.module.scss";
import { generateColors } from "@/utils/theme";
import { MAIN_COLOR } from "@/constants";
import { ref } from "vue";

export const useVariablesStore = defineStore("variablesStore", () => {
  const variables = ref<{ [key: string]: unknown }>({
    ...cssVariables,
    ...generateColors(window.localStorage.getItem(MAIN_COLOR)),
  });

  const setVariables = (newVariables: { [x: string]: unknown }) => {
    variables.value = newVariables;
  };

  const getVariables = () => variables.value;

  return {
    getVariables,
    setVariables,
  };
});
