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

const UserIcon = (props: IconProps) => {
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
        d="M8 1.33325C6.34315 1.33325 5 2.6764 5 4.33325C5 5.99011 6.34315 7.33325 8 7.33325C9.65685 7.33325 11 5.99011 11 4.33325C11 2.6764 9.65685 1.33325 8 1.33325Z"
        fill={color || "#A3A3A3"}
      />
      <Path
        d="M8.00093 8.33325C5.51978 8.33325 3.62461 9.81709 2.85362 11.9017C2.64934 12.4541 2.78821 12.9968 3.11418 13.3853C3.43326 13.7655 3.92878 13.9999 4.46548 13.9999H11.5364C12.0731 13.9999 12.5686 13.7655 12.8877 13.3853C13.2136 12.9968 13.3525 12.4541 13.1482 11.9017C12.3772 9.81709 10.4821 8.33325 8.00093 8.33325Z"
        fill={color || "#A3A3A3"}
      />
    </Svg>
  );
};

export default UserIcon;
