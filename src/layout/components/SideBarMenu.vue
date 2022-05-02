<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { filterRoutes, generateMenus } from "@/utils/route";
import SideBarItem from "./SideBarItem.vue";
import { useVariablesStore } from "@/stores/variables";
import { useSidebarStore } from "@/stores/sidebar";

const router = useRouter();
const routes = computed(() => {
  const filterResult = filterRoutes(router.getRoutes());
  return generateMenus(filterResult);
});

const variables = useVariablesStore().getVariables();

// 默认激活的路由项
const route = useRoute();
const activeMenu = computed(() => route.path);

const sidebarStore = useSidebarStore();
</script>

<template>
  <el-menu
    :collapse="!sidebarStore.isOpened()"
    :default-active="activeMenu"
    :uniqueOpened="true"
    :background-color="variables.menuBg"
    :text-color="variables.menuText"
    :active-text-color="variables.menuActiveText"
    router
  >
    <side-bar-item v-for="item in routes" :key="item.path" :route="item" />
  </el-menu>
</template>

<style lang="scss" scoped></style>
