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

const CameraIcon = (props: IconProps) => {
  const { color = "#22973F", size, style, height, width } = props;

  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      viewBox="0 0 17 16"
      style={style}
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        fillOpacity="0.95"
        fill={color ?? "#0F0F0F"}
        d="M9.8335 6.33333C8.91302 6.33333 8.16683 7.07952 8.16683 8C8.16683 8.92047 8.91302 9.66667 9.8335 9.66667C10.754 9.66667 11.5002 8.92047 11.5002 8C11.5002 7.07952 10.754 6.33333 9.8335 6.33333Z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fillOpacity="0.95"
        fill={color ?? "#0F0F0F"}
        d="M4.78047 2C4.24496 2 3.73623 2.23413 3.38792 2.64089L3.3411 2.69557C2.4838 2.8494 1.8335 3.59862 1.8335 4.5V11.5C1.8335 12.5125 2.65431 13.3333 3.66683 13.3333H13.3335C14.346 13.3333 15.1668 12.5125 15.1668 11.5V4.5C15.1668 3.48748 14.346 2.66667 13.3335 2.66667H6.96864L6.94537 2.63954C6.59707 2.2336 6.08886 2 5.55397 2H4.78047ZM7.16683 8C7.16683 6.52724 8.36074 5.33333 9.8335 5.33333C11.3063 5.33333 12.5002 6.52724 12.5002 8C12.5002 9.47276 11.3063 10.6667 9.8335 10.6667C8.36074 10.6667 7.16683 9.47276 7.16683 8ZM5.16683 6.66667C5.53502 6.66667 5.8335 6.36819 5.8335 6C5.8335 5.63181 5.53502 5.33333 5.16683 5.33333C4.79864 5.33333 4.50016 5.63181 4.50016 6C4.50016 6.36819 4.79864 6.66667 5.16683 6.66667Z"
      />
    </Svg>
  );
};

export default CameraIcon;
