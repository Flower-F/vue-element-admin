<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { validatePassword } from "@/utils/loginRules";
import { ref } from "vue";
import SvgIcon from "../components/SvgIcon.vue";

const loginForm = ref({
  username: "super-admin",
  password: "123456",
});

const loginRules = ref({
  username: [
    {
      required: true,
      trigger: "blur",
      message: "用户名为必填项",
    },
  ],
  password: [
    {
      required: true,
      trigger: "blur",
      validator: validatePassword(),
    },
  ],
});

const loading = ref(false);
const store = useUserStore();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const loginFormRef = ref<any>(null);

const handleLogin = () => {
  // 表单校验
  console.log(loginFormRef.value);
  loginFormRef.value.validate((valid: boolean) => {
    if (!valid) {
      return;
    }
  });
  // 触发登录动作
  loading.value = true;
  // 进行登录后续处理
  store
    .loginAction(loginForm.value)
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>

<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <!-- 用户名 -->
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon="user"></svg-icon>
        </span>
        <el-input
          placeholder="请输入您的用户名"
          name="username"
          type="text"
          v-model="loginForm.username"
        />
      </el-form-item>

      <!-- 密码 -->
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon="password" />
        </span>
        <el-input
          placeholder="请输入您的密码"
          name="password"
          type="password"
          v-model="loginForm.password"
        />
        <span class="show-password">
          <svg-icon icon="eye"></svg-icon>
        </span>
      </el-form-item>

      <el-button type="primary" class="login-button" @click="handleLogin"
        >登录</el-button
      >
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #888;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    max-width: 500px;
    min-width: 400px;
    overflow: hidden;
    :deep(.el-form-item) {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    :deep(.el-input) {
      display: inline-block;
      height: 47px;
      width: 85%;
      .el-input__wrapper {
        background: transparent;
        border: none;
        outline: none;
        box-shadow: none;
        width: 100%;
        height: 100%;
        input {
          width: 100%;
          background: transparent;
          border: none;
          border-radius: 0px;
          padding: 12px 5px 12px 0px;
          color: $light_gray;
          caret-color: $cursor;
        }
      }
    }
  }

  .svg-container {
    padding: 6px 0px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-password {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .login-button {
    width: 100%;
    margin-top: 5px;
  }
}
</style>
