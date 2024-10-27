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

const CircleCheckIcon = (props: IconProps) => {
  const { color = "#22973F", size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      viewBox="0 0 16 16"
      style={style}
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00016 1.33331C4.31826 1.33331 1.3335 4.31808 1.3335 7.99998C1.3335 11.6819 4.31826 14.6666 8.00016 14.6666C11.6821 14.6666 14.6668 11.6819 14.6668 7.99998C14.6668 4.31808 11.6821 1.33331 8.00016 1.33331ZM10.3871 6.64993C10.562 6.43621 10.5305 6.1212 10.3168 5.94633C10.1031 5.77147 9.78805 5.80297 9.61318 6.01669L6.96304 9.25575L6.02038 8.31309C5.82512 8.11783 5.50854 8.11783 5.31328 8.31309C5.11801 8.50836 5.11801 8.82494 5.31328 9.0202L6.64661 10.3535C6.7465 10.4534 6.88398 10.5064 7.02507 10.4994C7.16616 10.4923 7.29769 10.4259 7.38714 10.3166L10.3871 6.64993Z"
      />
    </Svg>
  );
};

export default CircleCheckIcon;
