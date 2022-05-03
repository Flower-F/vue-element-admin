<script setup lang="ts">
import { useSidebarStore } from "@/stores/sidebar";
import SideBarMenu from "./SideBarMenu.vue";

const store = useSidebarStore();
</script>

<template>
  <div>
    <div class="logo-container">
      <el-avatar
        :size="44"
        shape="square"
        src="https://camo.githubusercontent.com/61e102d7c605ff91efedb9d7e47c1c4a07cef59d3e1da202fd74f4772122ca4e/68747470733a2f2f766974656a732e6465762f6c6f676f2e737667"
      />
      <h1 class="logo-title" v-if="store.isOpened()">Vue Admin</h1>
    </div>
    <el-scrollbar>
      <side-bar-menu />
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
  .el-avatar {
    --el-avatar-bg-color: none;
  }
}
</style>
