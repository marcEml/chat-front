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

const ChevronRightIcon = (props: IconProps) => {
  const { color, size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      viewBox="0 0 20 20"
      style={style}
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fillOpacity="0.95"
        fill={color ?? "white"}
        d="M5.52864 2.19526C5.78898 1.93491 6.21109 1.93491 6.47144 2.19526L10.862 6.58577C11.643 7.36682 11.643 8.63315 10.862 9.4142L6.47145 13.8047C6.2111 14.0651 5.78899 14.0651 5.52864 13.8047C5.26829 13.5444 5.26829 13.1223 5.52864 12.8619L9.91916 8.47139C10.1795 8.21104 10.1795 7.78893 9.91916 7.52858L5.52864 3.13807C5.26829 2.87772 5.26829 2.45561 5.52864 2.19526Z"
      />
    </Svg>
  );
};

export default ChevronRightIcon;
