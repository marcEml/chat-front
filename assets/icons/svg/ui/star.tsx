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

const StarIcon = (props: IconProps) => {
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
        d="M8.75192 1.13896C8.44988 0.509224 7.55122 0.509221 7.24918 1.13896L5.61501 4.54612C5.59105 4.59607 5.54296 4.63124 5.48662 4.63863L1.72551 5.13188C1.0322 5.2228 0.750724 6.07685 1.26143 6.55917L4.01209 9.15695C4.05278 9.19538 4.07081 9.25126 4.06073 9.30541L3.37008 13.0162C3.24164 13.7062 3.97243 14.2297 4.58553 13.8986L7.92081 12.0977C7.9705 12.0708 8.0306 12.0708 8.0803 12.0977L11.4156 13.8986C12.0287 14.2297 12.7595 13.7062 12.631 13.0162L11.9404 9.30541C11.9303 9.25126 11.9483 9.19538 11.989 9.15695L14.7397 6.55917C15.2504 6.07685 14.9689 5.2228 14.2756 5.13188L10.5145 4.63863C10.4581 4.63124 10.4101 4.59607 10.3861 4.54612L8.75192 1.13896Z"
        fill={color || "#FFF"}
      />
    </Svg>
  );
};

export default StarIcon;
