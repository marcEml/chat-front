import React from "react";
import Svg, { Circle } from "react-native-svg";
import { iconSizeModel } from "../model/iconModel";
import { StyleProp, ViewStyle } from "react-native";

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  size: "sm" | "md" | "lg" | "xl";
};

const RadioIcon = (props: IconProps) => {
  const { color, size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      style={style}
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Circle cx="8" cy="8" r="8" fill={color || "white"} />
    </Svg>
  );
};

export default RadioIcon;
