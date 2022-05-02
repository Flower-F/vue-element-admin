<script setup lang="ts">
import {} from "vue";
import type { RouteRecordRaw } from "vue-router";
import MenuItem from "./MenuItem.vue";

defineProps<{ route: RouteRecordRaw }>();
</script>

<template>
  <!-- 存在 children -->
  <el-sub-menu v-if="route.children.length > 0" :index="route.path">
    <template #title>
      <menu-item
        :title="(route.meta.title as string)"
        :icon="(route.meta.icon as string)"
      />
    </template>
    <side-bar-item
      v-for="item in route.children"
      :key="item.path"
      :route="item"
    />
  </el-sub-menu>
  <!-- 不存在 children -->
  <el-menu-item v-else :index="route.path">
    <menu-item
      :title="(route.meta.title as string)"
      :icon="(route.meta.icon as string)"
    />
  </el-menu-item>
</template>

<style lang="scss" scoped></style>
