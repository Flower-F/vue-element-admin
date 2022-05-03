<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { defineProps, computed } from "vue";
import { ElMessage } from "element-plus";
import { useLanguageStore } from "@/stores/language";

withDefaults(defineProps<{ effect?: "dark" | "light" }>(), {
  effect: "dark",
});

const store = useLanguageStore();
const language = computed(() => store.getLanguage());

const i18n = useI18n();
const handleSetLanguage = (language: "zh" | "en") => {
  i18n.locale.value = language;
  store.setLanguage(language);
  ElMessage.success("更新成功");
};
</script>

<template>
  <el-dropdown
    trigger="click"
    class="international"
    @command="handleSetLanguage"
  >
    <div>
      <el-tooltip content="国际化" :effect="effect">
        <div class="language-icon">
          <svg-icon icon="language" />
        </div>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :disabled="language === 'zh'" command="zh">
          中文
        </el-dropdown-item>
        <el-dropdown-item :disabled="language === 'en'" command="en">
          English
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style scoped lang="scss">
.svg-icon {
  width: 30px;
  height: 30px;
}
</style>
