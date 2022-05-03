import { defineStore } from "pinia";
import { ref } from "vue";

export const useSidebarStore = defineStore("sidebarStore", () => {
  const sidebarOpen = ref(true);

  const toggleSidebarOpened = () => {
    sidebarOpen.value = !sidebarOpen.value;
  };

  const isOpened = () => sidebarOpen.value;

  return {
    toggleSidebarOpened,
    isOpened,
  };
});
