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

const SecurityIcon = (props: IconProps) => {
  const { color, size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      style={style}
      viewBox="0 0 18 18"
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color ?? "#22973F"}
        d="M8.34778 1.68714C8.77114 1.54602 9.22886 1.54602 9.65222 1.68714L14.3397 3.24964C15.1819 3.53037 15.75 4.31854 15.75 5.2063V8.93442C15.75 10.9874 14.8624 12.5027 13.6059 13.6949C12.3706 14.867 10.7553 15.7483 9.26707 16.5512C9.10038 16.6411 8.89962 16.6411 8.73293 16.5512C7.24467 15.7483 5.62935 14.867 4.39407 13.6949C3.13763 12.5027 2.25 10.9874 2.25 8.93442V5.2063C2.25 4.31854 2.81807 3.53037 3.66028 3.24964L8.34778 1.68714ZM11.4603 7.52275C11.6799 7.30308 11.6799 6.94692 11.4603 6.72725C11.2406 6.50758 10.8844 6.50758 10.6648 6.72725L8.25 9.14201L7.33525 8.22725C7.11558 8.00758 6.75942 8.00758 6.53975 8.22725C6.32008 8.44692 6.32008 8.80308 6.53975 9.02275L7.85226 10.3353C7.95774 10.4407 8.10082 10.5 8.25 10.5C8.39919 10.5 8.54226 10.4407 8.64775 10.3353L11.4603 7.52275Z"
      />
    </Svg>
  );
};

export default SecurityIcon;
