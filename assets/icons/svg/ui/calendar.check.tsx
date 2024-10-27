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

const CustomIcon = (props: IconProps) => {
  const { color = "#22973F", size, style, height, width } = props;
const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      viewBox="0 0 17 16"
      style={style}
width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.66667 1.33334C5.94281 1.33334 6.16667 1.5572 6.16667 1.83334V2.66668H10.8333V1.83334C10.8333 1.5572 11.0572 1.33334 11.3333 1.33334C11.6095 1.33334 11.8333 1.5572 11.8333 1.83334V2.66668H12.6667C13.6792 2.66668 14.5 3.48749 14.5 4.50001V12.1667C14.5 13.1792 13.6792 14 12.6667 14H4.33333C3.32081 14 2.5 13.1792 2.5 12.1667V4.50001C2.5 3.48749 3.32081 2.66668 4.33333 2.66668H5.16667V1.83334C5.16667 1.5572 5.39052 1.33334 5.66667 1.33334ZM10.6869 6.69646C10.8821 6.89173 10.8821 7.20831 10.6869 7.40357L8.12022 9.97024C8.02645 10.064 7.89928 10.1167 7.76667 10.1167C7.63406 10.1167 7.50688 10.064 7.41311 9.97024L6.31311 8.87024C6.11785 8.67497 6.11785 8.35839 6.31311 8.16313C6.50838 7.96787 6.82496 7.96787 7.02022 8.16313L7.76667 8.90958L9.97978 6.69646C10.175 6.5012 10.4916 6.5012 10.6869 6.69646Z"
        fill={color}
      />
    </Svg>
  );
};

export default CustomIcon;
