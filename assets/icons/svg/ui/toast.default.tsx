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

const ToastDefaultIcon = (props: IconProps) => {
  const { color = "#0D519B", size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      style={style}
      viewBox="0 0 16 16"
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99998 1.33325C4.31808 1.33325 1.33331 4.31802 1.33331 7.99992C1.33331 11.6818 4.31808 14.6666 7.99998 14.6666C11.6819 14.6666 14.6666 11.6818 14.6666 7.99992C14.6666 4.31802 11.6819 1.33325 7.99998 1.33325ZM6.66665 7.33325C6.66665 7.05711 6.8905 6.83325 7.16665 6.83325H7.99998C8.27612 6.83325 8.49998 7.05711 8.49998 7.33325L8.49998 10.8333C8.49998 11.1094 8.27612 11.3333 7.99998 11.3333C7.72384 11.3333 7.49998 11.1094 7.49998 10.8333L7.49998 7.83325H7.16665C6.8905 7.83325 6.66665 7.60939 6.66665 7.33325ZM7.99998 4.83325C7.72384 4.83325 7.49998 5.05711 7.49998 5.33325C7.49998 5.60939 7.72384 5.83325 7.99998 5.83325C8.27612 5.83325 8.49998 5.60939 8.49998 5.33325C8.49998 5.05711 8.27612 4.83325 7.99998 4.83325Z"
      />
    </Svg>
  );
};

export default ToastDefaultIcon;
