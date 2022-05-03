<script setup lang="ts">
import { isExternal as external } from "@/utils/isExternal";
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    icon: string;
    className?: string;
  }>(),
  {
    className: "",
  }
);

// 判断当前图标是否为外部图标
const isExternal = computed(() => external(props.icon));
// 外部图标样式
const styleExternalIcon = computed(() => {
  return {
    mask: `url(${props.icon}) no-repeat center / cover`,
    "-webkit-mask": `url(${props.icon}) no-repeat center / cover`,
  };
});
// 内部图标样式
const iconName = computed(() => `#icon-${props.icon}`);
</script>

<template>
  <!-- 展示外部图标 -->
  <div
    v-if="isExternal"
    class="svg-icon svg-external-icon"
    :style="styleExternalIcon"
    :class="className"
  ></div>
  <!-- 展示内部图标 -->
  <svg v-else class="svg-icon" :class="className" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<style scoped lang="scss">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.2em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  display: inline-block;
}
</style>
