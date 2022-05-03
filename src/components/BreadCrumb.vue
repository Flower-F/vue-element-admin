<script setup lang="ts">
import { useVariablesStore } from "@/stores/variables";
import { ref, watch } from "vue";
import { useRoute, useRouter, type RouteLocationMatched } from "vue-router";
import { generateTitle } from "@/utils/i18n";

const breadCrumbData = ref<RouteLocationMatched[]>([]);
const getBreadCrumbData = () => {
  // route.matched 是当前路由的标准化路由
  breadCrumbData.value = route.matched.filter(
    (item) => item.meta && item.meta.title
  );
};

const route = useRoute();
watch(
  route,
  () => {
    getBreadCrumbData();
  },
  {
    immediate: true,
  }
);

const hoverColor = useVariablesStore().getVariables().menuBg;

const router = useRouter();
const handleRedirect = (item: RouteLocationMatched) => {
  router.push(item.path);
};
</script>

<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadCrumbData"
        :key="item.path"
      >
        <!-- 不可点击面包屑 -->
        <span class="no-redirect" v-if="index === breadCrumbData.length - 1">
          {{ generateTitle(item.meta.title as string) }}
        </span>
        <!-- 可点击面包屑 -->
        <span class="redirect" v-else @click="handleRedirect(item)">
          {{ generateTitle(item.meta.title as string) }}
        </span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  margin-left: 12px;
  font-size: 14px;
  line-height: 48px;

  .redirect {
    cursor: pointer;
    &:hover {
      color: v-bind(hoverColor);
    }
  }

  :deep(.no-redirect) {
    color: #97a8be;
  }
}
</style>
