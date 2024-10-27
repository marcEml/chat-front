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

const BackIcon = (props: IconProps) => {
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
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.13807 3.52858C7.39842 3.78893 7.39842 4.21104 7.13807 4.47139L4.27615 7.3333H13.3333C13.7015 7.3333 14 7.63178 14 7.99997C14 8.36816 13.7015 8.66663 13.3333 8.66663H4.27614L7.13807 11.5286C7.39842 11.7889 7.39842 12.211 7.13807 12.4714C6.87772 12.7317 6.45561 12.7317 6.19526 12.4714L2.19526 8.47137C2.07024 8.34635 2 8.17678 2 7.99997C2 7.82316 2.07024 7.65359 2.19526 7.52856L6.19526 3.52857C6.45561 3.26823 6.87772 3.26823 7.13807 3.52858Z"
        fillOpacity="0.95"
        fill={color || "#fff"}
      />
    </Svg>
  );
};

export default BackIcon;
