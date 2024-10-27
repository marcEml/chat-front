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

const SeatsIcon = (props: IconProps) => {
  const { color, size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      viewBox="0 0 18 18"
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        d="M2.5946 5.25001C2.5946 3.57722 3.95066 2.22116 5.62345 2.22116C7.29624 2.22116 8.6523 3.57722 8.6523 5.25001C8.6523 6.92279 7.29624 8.27885 5.62345 8.27885C3.95066 8.27885 2.5946 6.92279 2.5946 5.25001Z"
        fill={color ?? "#1EACFF"}
      />
      <Path
        d="M9.375 5.25C9.375 3.59315 10.7181 2.25 12.375 2.25C14.0319 2.25 15.375 3.59315 15.375 5.25C15.375 6.90685 14.0319 8.25 12.375 8.25C10.7181 8.25 9.375 6.90685 9.375 5.25Z"
        fill={color ?? "#1EACFF"}
      />
      <Path
        d="M9.5658 10.2603C10.3606 11.0724 10.9835 12.1624 11.3316 13.5003C11.5696 14.415 11.2651 15.2091 10.7106 15.75H15.6377C16.7 15.75 17.6494 14.8176 17.3558 13.6892C16.6082 10.8161 14.5204 9.31412 12.3735 9.31412C11.3831 9.31412 10.4053 9.6338 9.5658 10.2603Z"
        fill={color ?? "#1EACFF"}
      />
      <Path
        d="M5.62369 9.31412C7.7705 9.31412 9.8583 10.8161 10.6059 13.6892C10.8995 14.8176 9.95018 15.75 8.88786 15.75H2.35952C1.2972 15.75 0.34783 14.8176 0.641453 13.6892C1.38908 10.8161 3.47687 9.31412 5.62369 9.31412Z"
        fill={color ?? "#1EACFF"}
      />
    </Svg>
  );
};

export default SeatsIcon;
