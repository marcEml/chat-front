import React from "react";
import Svg, { Path } from "react-native-svg";import { iconSizeModel } from "../model/iconModel";
import { StyleProp, ViewStyle } from "react-native";

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  size: "sm" | "md" | "lg" | "xl";
};

const CirclePlaceholderOnIcon = (props: IconProps) => {
  const { color, size, style, height, width } = props;
const sizeModel = iconSizeModel;

  return (
    <Svg
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
      viewBox="0 0 18 18"
      fill="none"
    >
      <Path
        d="M9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5Z"
        fill={color ?? "#424242"}
      />
    </Svg>
  );
};

export default CirclePlaceholderOnIcon;
