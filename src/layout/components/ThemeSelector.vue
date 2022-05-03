<script setup lang="ts">
import { ref } from "vue";
import ColorSelector from "./ColorSelector.vue";

const handleSetTheme = () => {
  modalVisible.value = true;
};

const modalVisible = ref(false);
</script>

<template>
  <el-dropdown
    v-bind="$attrs"
    trigger="click"
    class="theme"
    @command="handleSetTheme"
  >
    <div>
      <el-tooltip :content="$t('msg.navBar.themeChange')">
        <div>
          <svg-icon icon="change-theme" />
        </div>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">
          {{ $t("msg.theme.themeColorChange") }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- 弹出层 -->
  <div>
    <color-selector v-model="modalVisible" />
  </div>
</template>

<style lang="scss" scoped></style>
