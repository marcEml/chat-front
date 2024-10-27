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

const CalendarIcon = (props: IconProps) => {
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
        d="M12 2.25H6V3.375C6 3.58211 5.83211 3.75 5.625 3.75C5.41789 3.75 5.25 3.58211 5.25 3.375V2.25H4.125C3.08947 2.25 2.25 3.08947 2.25 4.125V5.25H15.75V4.125C15.75 3.08947 14.9105 2.25 13.875 2.25H12.75V3.375C12.75 3.58211 12.5821 3.75 12.375 3.75C12.1679 3.75 12 3.58211 12 3.375V2.25Z"
        fill={color ?? "#424242"}
      />
      <Path
        d="M15.75 6H2.25V13.875C2.25 14.9105 3.08947 15.75 4.125 15.75H13.875C14.9105 15.75 15.75 14.9105 15.75 13.875V6Z"
        fill={color ?? "#424242"}
      />
    </Svg>
  );
};

export default CalendarIcon;
