// 导入所有的 svg 图标并进行所有 SvgIcon 的全局注册

import SvgIcon from "@/components/SvgIcon.vue";
import type { App } from "vue";

const svgFiles = import.meta.globEager("./svg/*.svg");
console.log(svgFiles);

const svgs: string[] = [];
for (const path in svgFiles) {
  svgs.push(svgFiles[path].default);
}

console.log(svgs);

const installIcons = (app: App<Element>) => {
  app.component("svg-icon", SvgIcon);
};

export default installIcons;
