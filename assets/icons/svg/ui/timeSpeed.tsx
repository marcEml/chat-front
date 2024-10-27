import React from "react";
import Svg, { Path } from "react-native-svg";
import { iconSizeModel } from "../model/iconModel";
import { StyleProp, ViewStyle } from "react-native";

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  size: "sm" | "md" | "lg" | "xl";
};

const TimeSpeedIcon = (props: IconProps) => {
  const { color = "#1EACFF", size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      style={style}
      viewBox="0 0 18 18"
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.25 9C5.25 5.68629 7.93629 3 11.25 3C14.5637 3 17.25 5.68629 17.25 9C17.25 12.3137 14.5637 15 11.25 15C7.93629 15 5.25 12.3137 5.25 9ZM1.5 5.8125C1.5 5.50184 1.75184 5.25 2.0625 5.25H3.9375C4.24816 5.25 4.5 5.50184 4.5 5.8125C4.5 6.12316 4.24816 6.375 3.9375 6.375H2.0625C1.75184 6.375 1.5 6.12316 1.5 5.8125ZM11.25 6C11.5607 6 11.8125 6.25184 11.8125 6.5625V8.767L13.1477 10.1023C13.3674 10.3219 13.3674 10.6781 13.1477 10.8977C12.9281 11.1174 12.5719 11.1174 12.3523 10.8977L10.8523 9.39775C10.7468 9.29226 10.6875 9.14918 10.6875 9V6.5625C10.6875 6.25184 10.9393 6 11.25 6ZM0.75 9C0.75 8.68934 1.00184 8.4375 1.3125 8.4375H3.1875C3.49816 8.4375 3.75 8.68934 3.75 9C3.75 9.31066 3.49816 9.5625 3.1875 9.5625H1.3125C1.00184 9.5625 0.75 9.31066 0.75 9ZM1.5 12.1875C1.5 11.8768 1.75184 11.625 2.0625 11.625H3.9375C4.24816 11.625 4.5 11.8768 4.5 12.1875C4.5 12.4982 4.24816 12.75 3.9375 12.75H2.0625C1.75184 12.75 1.5 12.4982 1.5 12.1875Z"
      />
    </Svg>
  );
};

export default TimeSpeedIcon;
