<script setup lang="ts">
import {} from "vue";
</script>

<template>
  <el-menu
    :uniqueOpened="true"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd046"
  >
    <el-sub-menu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">选项 1</el-menu-item>
      <el-menu-item index="1-2">选项 2</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="2">
      <i class="el-icon-location"> </i>
      <template #title>导航 4</template>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped></style>
