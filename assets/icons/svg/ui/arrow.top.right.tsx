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

const ArrowTopRight = (props: IconProps) => {
  const { color = "#A3A3A3", size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      viewBox="0 0 20 20"
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
      style={[style, { transform: [{ scaleY: -1 }] }]}
    >
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.66663 5.20835C6.66663 4.63306 7.133 4.16669 7.70829 4.16669H14.7916C15.3669 4.16669 15.8333 4.63306 15.8333 5.20835V12.2917C15.8333 12.867 15.3669 13.3334 14.7916 13.3334C14.2163 13.3334 13.75 12.867 13.75 12.2917V7.72316L5.94486 15.5283C5.53807 15.9351 4.87852 15.9351 4.47172 15.5283C4.06493 15.1215 4.06493 14.4619 4.47172 14.0551L12.2768 6.25002H7.70829C7.133 6.25002 6.66663 5.78365 6.66663 5.20835Z"
      />
    </Svg>
  );
};

export default ArrowTopRight;
