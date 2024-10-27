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

const CallIcon = (props: IconProps) => {
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
        d="M3.81523 2C2.83201 2 1.95158 2.80368 2.06448 3.86416C2.23197 5.43748 2.7269 6.97172 3.52437 8.34625C4.51684 10.0569 5.94373 11.4838 7.65435 12.4762C9.03821 13.2791 10.5532 13.7513 12.1149 13.9242C13.1804 14.0422 14.0006 13.162 14.0006 12.1667V10.9977C14.0006 10.1844 13.4648 9.4683 12.6846 9.23881L11.5632 8.90899C10.9203 8.71992 10.2257 8.90461 9.76169 9.38798C9.51079 9.64934 9.15296 9.68967 8.90544 9.5296C7.93185 8.89999 7.1006 8.06875 6.47099 7.09515C6.31093 6.84764 6.35126 6.48981 6.61262 6.2389C7.09598 5.77487 7.28067 5.08026 7.09161 4.43743L6.76178 3.31603C6.5323 2.53579 5.81623 2 5.00295 2H3.81523Z"
        fill={color ?? "#0F0F0F"}
        fill-opacity="0.95"
      />
    </Svg>
  );
};

export default CallIcon;
