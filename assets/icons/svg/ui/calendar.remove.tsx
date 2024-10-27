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

const CalendarRemoveIcon = (props: IconProps) => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.16667 1.33333C5.44281 1.33333 5.66667 1.55719 5.66667 1.83333V2.66666H10.3333V1.83333C10.3333 1.55719 10.5572 1.33333 10.8333 1.33333C11.1095 1.33333 11.3333 1.55719 11.3333 1.83333V2.66666H12.1667C13.1792 2.66666 14 3.48747 14 4.5V12.1667C14 13.1792 13.1792 14 12.1667 14H3.83333C2.82081 14 2 13.1792 2 12.1667V4.5C2 3.48747 2.82081 2.66666 3.83333 2.66666H4.66667V1.83333C4.66667 1.55719 4.89052 1.33333 5.16667 1.33333ZM6.68558 6.31311C6.49032 6.11785 6.17374 6.11785 5.97848 6.31311C5.78322 6.50837 5.78322 6.82495 5.97848 7.02022L7.2928 8.33454L5.97978 9.64755C5.78452 9.84282 5.78452 10.1594 5.97978 10.3547C6.17504 10.5499 6.49162 10.5499 6.68689 10.3547L7.9999 9.04164L9.31292 10.3547C9.50818 10.5499 9.82477 10.5499 10.02 10.3547C10.2153 10.1594 10.2153 9.84282 10.02 9.64755L8.70701 8.33454L10.0213 7.02022C10.2166 6.82495 10.2166 6.50837 10.0213 6.31311C9.82607 6.11785 9.50949 6.11785 9.31422 6.31311L7.9999 7.62743L6.68558 6.31311Z"
        fill={color ?? "#FF6C64"}
      />
    </Svg>
  );
};

export default CalendarRemoveIcon;
