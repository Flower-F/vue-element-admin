<script setup lang="ts">
import { DEFAULT_COLOR, MAIN_COLOR } from "@/constants";
import { useThemeStore } from "@/stores/theme";
import { generateNewStyles, writeNewStyles } from "@/utils/theme";
import { ref, defineEmits } from "vue";

defineProps<{ modelValue: boolean }>();

// 预定义色值
const predefineColors = [
  "#ff4500",
  "#ff8c00",
  "#ffd700",
  "#90ee90",
  "#00ced1",
  "#1e90ff",
  "#c71585",
  "rgba(255, 69, 0, 0.68)",
  "rgb(255, 120, 0)",
  "hsv(51, 100, 98)",
  "hsva(120, 40, 94, 0.5)",
  "hsl(181, 100%, 37%)",
  "hsla(209, 100%, 56%, 0.73)",
  "#c7158577",
];
// 默认色值
const mainColor = ref<string>(
  window.localStorage.getItem(MAIN_COLOR) || DEFAULT_COLOR
);

const emits = defineEmits(["update:modelValue"]);

// 通知父组件触发事件
const close = () => {
  emits("update:modelValue", false);
};

const store = useThemeStore();
const confirm = async () => {
  const newStyles = await generateNewStyles(mainColor.value);
  writeNewStyles(newStyles);
  store.setMainColor(mainColor.value);
  close();
};
</script>

<template>
  <el-dialog
    :title="$t('msg.universal.tip')"
    :model-value="modelValue"
    @close="close"
    width="22%"
  >
    <div class="content">
      <h4 class="title">{{ $t("msg.theme.themeColorChange") }}</h4>
      <el-color-picker v-model="mainColor" :predefineColors="predefineColors" />
    </div>
    <template #footer>
      <el-button @click="close">
        {{ $t("msg.universal.cancel") }}
      </el-button>
      <el-button type="primary" @click="confirm">
        {{ $t("msg.universal.confirm") }}
      </el-button>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.content {
  text-align: center;
  .title {
    margin-bottom: 12px;
  }
}
</style>
