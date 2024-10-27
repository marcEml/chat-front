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

const SecurityLockIcon = (props: IconProps) => {
  const { color = "#737373", size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      style={style}
      viewBox="0 0 20 20"
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.34778 1.68714C8.77114 1.54602 9.22886 1.54602 9.65222 1.68714L14.3397 3.24964C15.1819 3.53037 15.75 4.31854 15.75 5.2063V8.93442C15.75 10.9874 14.8624 12.5027 13.6059 13.6949C12.3706 14.867 10.7553 15.7483 9.26707 16.5512C9.10038 16.6411 8.89962 16.6411 8.73293 16.5512C7.24467 15.7483 5.62935 14.867 4.39407 13.6949C3.13763 12.5027 2.25 10.9874 2.25 8.93442V5.2063C2.25 4.31854 2.81807 3.53037 3.66028 3.24964L8.34778 1.68714ZM10.6875 7.6875C10.6875 8.42225 10.2179 9.04732 9.5625 9.27898V11.0625C9.5625 11.3732 9.31066 11.625 9 11.625C8.68934 11.625 8.4375 11.3732 8.4375 11.0625V9.27898C7.78208 9.04732 7.3125 8.42225 7.3125 7.6875C7.3125 6.75552 8.06802 6 9 6C9.93198 6 10.6875 6.75552 10.6875 7.6875Z"
      />
    </Svg>
  );
};

export default SecurityLockIcon;
