<script setup lang="ts">
import {} from "vue";
import { useUserStore } from "../../stores/user";
import { Tools } from "@element-plus/icons-vue";
import HamburgerButton from "../../components/HamburgerButton.vue";

const store = useUserStore();

const logout = () => {
  store.logoutAction();
};
</script>

<template>
  <div class="navbar">
    <!-- 汉堡 -->
    <hamburger-button class="hamburger-button" />
    <div class="right-menu">
      <!-- 头像 -->
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar shape="square" :size="40" :src="store.userInfo?.avatar">
          </el-avatar>
          <el-icon><tools /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <router-link to="/profile">
              <el-dropdown-item>主页</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click="logout">
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-button {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.5s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;

    :deep(.avatar-container) {
      cursor: pointer;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .el-avatar {
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
