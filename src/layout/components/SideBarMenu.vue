<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { filterRoutes, generateMenus } from "@/utils/route";
import SideBarItem from "./SideBarItem.vue";

const router = useRouter();
const routes = computed(() => {
  const filterResult = filterRoutes(router.getRoutes());
  return generateMenus(filterResult);
});
</script>

<template>
  <el-menu
    :uniqueOpened="true"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd046"
  >
    <side-bar-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></side-bar-item>
  </el-menu>
</template>

<style lang="scss" scoped></style>
