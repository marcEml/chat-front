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

const CalandarResearch = (props: IconProps) => {
  const { color = "#737373", size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      style={[style, { paddingHorizontal: 12 }]}
      viewBox="0 0 18 18"
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.75 0C1.23122 0 0 1.23122 0 2.75V15.25C0 16.7688 1.23122 18 2.75 18H15.25C16.7688 18 18 16.7688 18 15.25V2.75C18 1.23122 16.7688 0 15.25 0H2.75ZM5 8C4.44772 8 4 8.44772 4 9C4 9.55228 4.44772 10 5 10C5.55228 10 6 9.55228 6 9C6 8.44772 5.55228 8 5 8ZM5 12C4.44772 12 4 12.4477 4 13C4 13.5523 4.44772 14 5 14C5.55228 14 6 13.5523 6 13C6 12.4477 5.55228 12 5 12ZM8 13C8 12.4477 8.44772 12 9 12C9.55228 12 10 12.4477 10 13C10 13.5523 9.55228 14 9 14C8.44772 14 8 13.5523 8 13ZM9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8ZM12 9C12 8.44772 12.4477 8 13 8C13.5523 8 14 8.44772 14 9C14 9.55228 13.5523 10 13 10C12.4477 10 12 9.55228 12 9ZM2.75 1.5C2.05964 1.5 1.5 2.05964 1.5 2.75V4H16.5V2.75C16.5 2.05964 15.9404 1.5 15.25 1.5H2.75Z"
      />
    </Svg>
  );
};

export default CalandarResearch;
