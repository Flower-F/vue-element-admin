<script setup lang="ts">
import {} from "vue";
import { useUserStore } from "../../stores/user";
import { Tools } from "@element-plus/icons-vue";
import HamburgerButton from "../../components/HamburgerButton.vue";
import BreadCrumb from "../../components/BreadCrumb.vue";
import LanguageSelect from "@/components/LanguageSelect.vue";
import ThemeSelector from "./ThemeSelector.vue";

const store = useUserStore();

const logout = () => {
  store.logoutAction();
};
</script>

<template>
  <div class="navbar">
    <!-- 汉堡 -->
    <hamburger-button class="hamburger-button" />
    <bread-crumb class="breadcrumb-container" />
    <div class="right-menu">
      <!-- 换肤 -->
      <theme-selector class="right-menu-item hover-effect" />
      <!-- 国际化 -->
      <language-select class="right-menu-item hover-effect" />
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
              <el-dropdown-item>{{ $t("msg.navBar.home") }}</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided @click="logout">
              {{ $t("msg.navBar.logout") }}
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

  .breadcrumb-container {
    float: left;
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

    :deep(.right-menu-item) {
      display: inline-block;
      padding: 0 18px 0 0;
      font-size: 30px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
      }
    }
  }
}
</style>
