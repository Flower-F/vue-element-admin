<script setup lang="ts">
import { RouterView } from "vue-router";
import { getOriginalStyle } from "@/utils/theme";
getOriginalStyle();
</script>

<template>
  <router-view />
</template>

<style lang="scss" scoped></style>
