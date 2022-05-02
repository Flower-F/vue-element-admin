import { defineStore } from "pinia";
import cssVariables from "@/styles/variables.module.scss";

export const useVariablesStore = defineStore("variablesStore", () => {
  const variables = cssVariables;

  const getVariables = () => {
    return variables;
  };

  return {
    getVariables,
  };
});
