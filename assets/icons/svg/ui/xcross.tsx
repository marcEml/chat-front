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

const XCrossIcon = (props: IconProps) => {
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
        d="M2.69526 2.69526C2.95561 2.43491 3.37772 2.43491 3.63807 2.69526L8 7.05719L12.3619 2.69526C12.6223 2.43491 13.0444 2.43491 13.3047 2.69526C13.5651 2.95561 13.5651 3.37772 13.3047 3.63807L8.94281 8L13.3047 12.3619C13.5651 12.6223 13.5651 13.0444 13.3047 13.3047C13.0444 13.5651 12.6223 13.5651 12.3619 13.3047L8 8.94281L3.63807 13.3047C3.37772 13.5651 2.95561 13.5651 2.69526 13.3047C2.43491 13.0444 2.43491 12.6223 2.69526 12.3619L7.05719 8L2.69526 3.63807C2.43491 3.37772 2.43491 2.95561 2.69526 2.69526Z"
        fillOpacity="0.95"
        fill={color || "#fff"}
      />
    </Svg>
  );
};

export default XCrossIcon;
