<script setup lang="ts">
import {} from "vue";
import { User } from "@element-plus/icons-vue";
import SvgIcon from "../../components/SvgIcon.vue";
import { generateTitle } from "@/utils/i18n";
defineProps<{ title: string; icon: string }>();
</script>

<template>
  <!-- element icon -->
  <el-icon v-if="icon.includes('user')" class="sub-el-icon">
    <user />
  </el-icon>
  <!-- 非 element icon -->
  <svg-icon v-else :icon="icon" />

  <span>{{ generateTitle(title) }}</span>
</template>

<style lang="scss" scoped></style>
