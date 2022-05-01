<script setup lang="ts">
import {} from "vue";
import { Avatar } from "@element-plus/icons-vue";
</script>

<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">
        <h3>用户登录</h3>
      </div>
      <!-- 用户名 -->
      <el-form-item>
        <span class="svg-container">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
        <el-input placeholder="请输入您的用户名" name="username" type="text" />
      </el-form-item>

      <!-- 密码 -->
      <el-form-item>
        <span class="svg-container">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
        <el-input
          placeholder="请输入您的密码"
          name="password"
          type="password"
        />
        <span class="show-password">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
      </el-form-item>

      <el-button type="primary" class="login-button">登录</el-button>
    </el-form>
  </div>
</template>

<style lang="scss" scoped></style>
