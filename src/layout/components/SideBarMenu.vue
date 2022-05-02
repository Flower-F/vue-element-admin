<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { filterRoutes, generateMenus } from "@/utils/route";
import SideBarItem from "./SideBarItem.vue";
import { useVariablesStore } from "@/stores/variables";

const router = useRouter();
const routes = computed(() => {
  const filterResult = filterRoutes(router.getRoutes());
  return generateMenus(filterResult);
});

const store = useVariablesStore();

// 默认激活的路由项
const route = useRoute();
const activeMenu = computed(() => route.path);
</script>

<template>
  <el-menu
    :default-active="activeMenu"
    :uniqueOpened="true"
    :background-color="store.getVariables().menuBg"
    :text-color="store.getVariables().menuText"
    :active-text-color="store.getVariables().menuActiveText"
    router
  >
    <side-bar-item v-for="item in routes" :key="item.path" :route="item" />
  </el-menu>
</template>

<style lang="scss" scoped></style>
