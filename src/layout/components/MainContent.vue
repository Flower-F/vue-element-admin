<script setup lang="ts">
import {} from "vue";
</script>

<template>
  <div class="main-content">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.main-content {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 61px 20px 20px 20px;
}
</style>
