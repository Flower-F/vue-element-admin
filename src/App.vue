<script setup lang="ts">
import { RouterView } from "vue-router";
import { generateNewStyles, writeNewStyles } from "@/utils/theme";
import { useThemeStore } from "./stores/theme";

const store = useThemeStore();
generateNewStyles(store.getMainColor()).then((newStyle) => {
  writeNewStyles(newStyle);
});
</script>

<template>
  <router-view />
</template>

<style lang="scss" scoped></style>
