<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <hello-world msg="You did it!" />

      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>

      <el-button type="primary" plain> Click Me </el-button>
    </div>
  </header>

  <router-view />
</template>

<style lang="scss" scoped></style>
