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

const ToastSuccessIcon = (props: IconProps) => {
  const { color = "#194E28", size, style, height, width } = props;
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
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1.33325C4.3181 1.33325 1.33333 4.31802 1.33333 7.99992C1.33333 11.6818 4.3181 14.6666 8 14.6666C11.6819 14.6666 14.6667 11.6818 14.6667 7.99992C14.6667 4.31802 11.6819 1.33325 8 1.33325ZM10.387 6.64987C10.5618 6.43615 10.5303 6.12114 10.3166 5.94627C10.1029 5.77141 9.78788 5.80291 9.61302 6.01663L6.96288 9.25569L6.02022 8.31303C5.82495 8.11777 5.50837 8.11777 5.31311 8.31303C5.11785 8.50829 5.11785 8.82488 5.31311 9.02014L6.64644 10.3535C6.74633 10.4534 6.88381 10.5063 7.0249 10.4993C7.16599 10.4923 7.29752 10.4259 7.38697 10.3165L10.387 6.64987Z"
      />
    </Svg>
  );
};

export default ToastSuccessIcon;
