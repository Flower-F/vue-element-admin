<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import MainContent from "./components/MainContent.vue";
import SideBar from "./components/SideBar.vue";
import variables from "@/styles/variables.module.scss";
import { useSidebarStore } from "@/stores/sidebar";

const store = useSidebarStore();
</script>

<template>
  <div
    class="app-container"
    :class="store.isOpened() ? 'openSidebar' : 'hideSidebar'"
  >
    <side-bar
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    />
    <div class="main-container">
      <div class="fixed-header">
        <nav-bar />
      </div>
      <main-content />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
@import "@/styles/variables.module.scss";

.app-container {
  @include clearfix;
  position: relative;
  width: 100%;
  height: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width $sideBarDuration;
}

.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>
