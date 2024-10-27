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

const GalleryIcon = (props: IconProps) => {
  const { color = "#fff", size, style, height, width } = props;

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
        fillOpacity="0.95"
        d="M9.66667 4.66667C8.74619 4.66667 8 5.41286 8 6.33333C8 7.25381 8.74619 8 9.66667 8C10.5871 8 11.3333 7.25381 11.3333 6.33333C11.3333 5.41286 10.5871 4.66667 9.66667 4.66667Z"
      />
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        fillOpacity="0.95"
        d="M2 3.83333C2 2.82081 2.82081 2 3.83333 2H12.1667C13.1792 2 14 2.82081 14 3.83333V12.1667C14 13.1792 13.1792 14 12.1667 14H3.83333C2.82081 14 2 13.1792 2 12.1667V3.83333ZM3 9.62623L4.03697 8.58926C4.75293 7.8733 5.91373 7.87329 6.6297 8.58926L11.0404 13H12.1667C12.6269 13 13 12.6269 13 12.1667V3.83333C13 3.3731 12.6269 3 12.1667 3H3.83333C3.3731 3 3 3.3731 3 3.83333V9.62623Z"
      />
    </Svg>
  );
};

export default GalleryIcon;
