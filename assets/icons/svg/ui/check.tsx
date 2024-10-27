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

const CheckIcon = (props: IconProps) => {
  const { color, size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      viewBox="0 0 30 27"
      style={style}
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        d="M6.5 15.5L11.3473 20.3473C11.4297 20.4297 11.5647 20.4245 11.6406 20.336L23.5 6.5"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        fill={color}
      />
    </Svg>
  );
};

export default CheckIcon;
