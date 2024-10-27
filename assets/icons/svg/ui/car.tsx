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

const CarIcon = (props: IconProps) => {
  const { color, size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      viewBox="0 0 18 18"
      style={style}
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.875 8.625V13.125C16.875 14.1605 16.0355 15 15 15C14.0741 15 13.3049 14.3288 13.1524 13.4464H4.84756C4.69512 14.3288 3.92594 15 3 15C1.96447 15 1.125 14.1605 1.125 13.125V8.625H0.5625C0.25184 8.625 0 8.37316 0 8.0625C0 7.75184 0.25184 7.5 0.5625 7.5H1.37574L3.58237 3.96938C3.95927 3.36634 4.62024 3 5.33137 3H12.6686C13.3798 3 14.0407 3.36634 14.4176 3.96938L16.6243 7.5H17.4375C17.7482 7.5 18 7.75184 18 8.0625C18 8.37316 17.7482 8.625 17.4375 8.625H16.875ZM3.75 9.77678C3.75 9.46613 4.00184 9.21428 4.3125 9.21428H5.8125C6.12316 9.21428 6.375 9.46613 6.375 9.77678C6.375 10.0874 6.12316 10.3393 5.8125 10.3393H4.3125C4.00184 10.3393 3.75 10.0874 3.75 9.77678ZM11.625 9.77678C11.625 9.46613 11.8768 9.21428 12.1875 9.21428H13.6875C13.9982 9.21428 14.25 9.46613 14.25 9.77678C14.25 10.0874 13.9982 10.3393 13.6875 10.3393H12.1875C11.8768 10.3393 11.625 10.0874 11.625 9.77678Z"
        fill={color ?? "#A3A3A3"}
      />
    </Svg>
  );
};

export default CarIcon;
