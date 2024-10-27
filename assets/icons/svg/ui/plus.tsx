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

const PlusIcon = (props: IconProps) => {
  const { color, size, style, height, width } = props;
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0.5C8.46024 0.5 8.83333 0.873096 8.83333 1.33333V7.16667H14.6667C15.1269 7.16667 15.5 7.53976 15.5 8C15.5 8.46024 15.1269 8.83333 14.6667 8.83333H8.83333V14.6667C8.83333 15.1269 8.46024 15.5 8 15.5C7.53976 15.5 7.16667 15.1269 7.16667 14.6667V8.83333H1.33333C0.873096 8.83333 0.5 8.46024 0.5 8C0.5 7.53976 0.873096 7.16667 1.33333 7.16667H7.16667V1.33333C7.16667 0.873096 7.53976 0.5 8 0.5Z"
        fill={color || "#0F0F0F"}
        fillOpacity="0.95"
      />
    </Svg>
  );
};

export default PlusIcon;
