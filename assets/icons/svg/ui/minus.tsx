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

const MinusIcon = (props: IconProps) => {
  const { color, size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      style={style}
      viewBox="0 0 20 20"
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fillOpacity="0.95"
        fill={color ?? "#0F0F0F"}
        d="M2.5 9.99999C2.5 9.53975 2.8731 9.16666 3.33333 9.16666H16.6667C17.1269 9.16666 17.5 9.53975 17.5 9.99999C17.5 10.4602 17.1269 10.8333 16.6667 10.8333H3.33333C2.8731 10.8333 2.5 10.4602 2.5 9.99999Z"
      />
    </Svg>
  );
};

export default MinusIcon;
