import formula from "@/constants/formula";
import rgbHex from "rgb-hex";
import cssColorFunction from "css-color-function";
import axios from "axios";

const generateColors = (primaryColor: string) => {
  if (!primaryColor) {
    return;
  }

  const colors: { [k: string]: unknown } = {
    primary: primaryColor,
  };

  Object.keys(formula).forEach((key) => {
    const value = formula[key as keyof typeof formula].replace(
      /primary/g,
      primaryColor
    );
    colors[key] = "#" + rgbHex(cssColorFunction.convert(value));
  });

  return colors;
};

const getStyleTemplate = (data: string) => {
  const colorMap = {
    "#3a8ee6": "shade-1",
    "#409eff": "primary",
    "#53a8ff": "light-1",
    "#66b1ff": "light-2",
    "#79bbff": "light-3",
    "#8cc5ff": "light-4",
    "#a0cfff": "light-5",
    "#b3d8ff": "light-6",
    "#c6e2ff": "light-7",
    "#d9ecff": "light-8",
    "#ecf5ff": "light-9",
    "#337ecc": "dark-2",
  };

  Object.keys(colorMap).forEach((key) => {
    const value = colorMap[key as keyof typeof colorMap];
    data = data.replace(new RegExp(key, "ig"), value);
  });

  return data;
};

export const getOriginalStyle = async () => {
  // https://unpkg.com/element-plus@2.1.11/dist/index.css
  const version = "2.1.11";
  const url = `https://unpkg.com/element-plus@${version}/dist/index.css`;
  const { data } = await axios(url);

  return getStyleTemplate(data);
};

// 生成新的样式表
export const generateNewStyles = async (primaryColor: string) => {
  // 根据主色获取色值表
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const colors = generateColors(primaryColor)!;
  // 获取当前 Element Plus 的默认样式表，并且将需要替换的色值打上标记
  let cssText = await getOriginalStyle();
  // 遍历色值表，在默认样式表进行全局替换
  Object.keys(colors).forEach((key) => {
    cssText = cssText.replace(
      new RegExp("(:|\\s+)" + key, "g"),
      "$1" + colors[key]
    );
  });

  return cssText;
};

// 将生成的样式表写入 head 中
export const writeNewStyles = (newStyle: string) => {
  const style = document.createElement("style");
  style.innerText = newStyle;
  document.head.appendChild(style);
};
