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

const CalendarClockIcon = (props: IconProps) => {
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
        d="M5.16667 1.33333C5.44281 1.33333 5.66667 1.55719 5.66667 1.83333V2.66666H10.3333V1.83333C10.3333 1.55719 10.5572 1.33333 10.8333 1.33333C11.1095 1.33333 11.3333 1.55719 11.3333 1.83333V2.66666H12.1667C13.1792 2.66666 14 3.48747 14 4.5V7.10453C12.6744 6.27008 10.9781 6.06958 9.42043 6.7148C6.86951 7.77146 5.6586 10.6958 6.71456 13.246C6.82486 13.5123 6.95551 13.764 7.10396 14H3.83333C2.82081 14 2 13.1792 2 12.1667V4.5C2 3.48747 2.82081 2.66666 3.83333 2.66666H4.66667V1.83333C4.66667 1.55719 4.89052 1.33333 5.16667 1.33333Z"
        fill={color ?? "#1EACFF"}
      />
      <Path
        d="M11.3333 9.33333C11.6095 9.33333 11.8333 9.55719 11.8333 9.83333V11.126L12.8536 12.1465C13.0488 12.3418 13.0488 12.6583 12.8535 12.8536C12.6582 13.0488 12.3416 13.0488 12.1464 12.8535L10.9797 11.6866C10.886 11.5928 10.8333 11.4657 10.8333 11.3331V9.83333C10.8333 9.55719 11.0572 9.33333 11.3333 9.33333Z"
        fill={color ?? "#1EACFF"}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.3333 7.5C9.21624 7.5 7.5 9.21624 7.5 11.3333C7.5 13.4504 9.21624 15.1667 11.3333 15.1667C13.4504 15.1667 15.1667 13.4504 15.1667 11.3333C15.1667 9.21624 13.4504 7.5 11.3333 7.5ZM8.5 11.3333C8.5 9.76852 9.76853 8.5 11.3333 8.5C12.8981 8.5 14.1667 9.76852 14.1667 11.3333C14.1667 12.8981 12.8981 14.1667 11.3333 14.1667C9.76853 14.1667 8.5 12.8981 8.5 11.3333Z"
        fill={color ?? "#1EACFF"}
      />
    </Svg>
  );
};

export default CalendarClockIcon;
