<script setup lang="ts">
import { computed } from "vue";
import SvgIcon from "@/components/SvgIcon.vue";
import { useSidebarStore } from "@/stores/sidebar";

const store = useSidebarStore();
const icon = computed(() =>
  store.isOpened() ? "hamburger-opened" : "hamburger-closed"
);
const toggleSidebarOpened = () => {
  store.toggleSidebarOpened();
};
</script>

<template>
  <div class="hamburger-container" @click="toggleSidebarOpened">
    <svg-icon className="hamburger" :icon="icon" />
  </div>
</template>

<style lang="scss" scoped>
.hamburger-container {
  padding: 0 16px;
  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}
</style>
