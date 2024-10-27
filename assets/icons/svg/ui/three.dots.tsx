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

const ThreeDotsIcon = (props: IconProps) => {
  const { color, size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      viewBox="0 0 16 16"
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
      style={[style, { transform: [{ rotate: "90deg" }] }]}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        fill={color ?? "white"}
        d="M6.66663 2.66666C6.66663 1.93028 7.26358 1.33333 7.99996 1.33333C8.73634 1.33333 9.33329 1.93028 9.33329 2.66666C9.33329 3.40304 8.73634 3.99999 7.99996 3.99999C7.26358 3.99999 6.66663 3.40304 6.66663 2.66666ZM6.66663 8C6.66663 7.26362 7.26358 6.66666 7.99996 6.66666C8.73634 6.66666 9.33329 7.26362 9.33329 8C9.33329 8.73637 8.73634 9.33333 7.99996 9.33333C7.26358 9.33333 6.66663 8.73637 6.66663 8ZM6.66663 13.3333C6.66663 12.5969 7.26358 12 7.99996 12C8.73634 12 9.33329 12.5969 9.33329 13.3333C9.33329 14.0697 8.73634 14.6667 7.99996 14.6667C7.26358 14.6667 6.66663 14.0697 6.66663 13.3333Z"
      />
    </Svg>
  );
};

export default ThreeDotsIcon;
