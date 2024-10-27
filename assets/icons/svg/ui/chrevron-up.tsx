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

const ChevronUpIcon = (props: IconProps) => {
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
        d="M9.8527 9.36453C9.93406 9.28317 10.066 9.28317 10.1473 9.36453L12.8914 12.1086C13.1355 12.3527 13.5312 12.3527 13.7753 12.1086C14.0194 11.8645 14.0194 11.4688 13.7753 11.2247L11.0312 8.48065C10.4617 7.91113 9.53833 7.91113 8.96881 8.48065L6.22474 11.2247C5.98066 11.4688 5.98066 11.8645 6.22474 12.1086C6.46881 12.3527 6.86454 12.3527 7.10862 12.1086L9.8527 9.36453Z"
      />
    </Svg>
  );
};

export default ChevronUpIcon;
