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

const CalendarSearch = (props: IconProps) => {
  const { color = "#737373", size, style, height, width } = props;
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
        d="M3.83333 2C2.82081 2 2 2.82081 2 3.83333V12.1667C2 13.1792 2.82081 14 3.83333 14H12.1667C13.1792 14 14 13.1792 14 12.1667V3.83333C14 2.82081 13.1792 2 12.1667 2H3.83333ZM5.33333 7.33333C4.96514 7.33333 4.66667 7.63181 4.66667 8C4.66667 8.36819 4.96514 8.66667 5.33333 8.66667C5.70152 8.66667 6 8.36819 6 8C6 7.63181 5.70152 7.33333 5.33333 7.33333ZM5.33333 10C4.96514 10 4.66667 10.2985 4.66667 10.6667C4.66667 11.0349 4.96514 11.3333 5.33333 11.3333C5.70152 11.3333 6 11.0349 6 10.6667C6 10.2985 5.70152 10 5.33333 10ZM7.33333 10.6667C7.33333 10.2985 7.63181 10 8 10C8.36819 10 8.66667 10.2985 8.66667 10.6667C8.66667 11.0349 8.36819 11.3333 8 11.3333C7.63181 11.3333 7.33333 11.0349 7.33333 10.6667ZM8 7.33333C7.63181 7.33333 7.33333 7.63181 7.33333 8C7.33333 8.36819 7.63181 8.66667 8 8.66667C8.36819 8.66667 8.66667 8.36819 8.66667 8C8.66667 7.63181 8.36819 7.33333 8 7.33333ZM10 8C10 7.63181 10.2985 7.33333 10.6667 7.33333C11.0349 7.33333 11.3333 7.63181 11.3333 8C11.3333 8.36819 11.0349 8.66667 10.6667 8.66667C10.2985 8.66667 10 8.36819 10 8ZM3.83333 3C3.3731 3 3 3.3731 3 3.83333V4.66667H13V3.83333C13 3.3731 12.6269 3 12.1667 3H3.83333Z"
      />
    </Svg>
  );
};

export default CalendarSearch;
