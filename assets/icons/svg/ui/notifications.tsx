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

const NotificationIcon = (props: IconProps) => {
  const { color = "#737373", size, style, height, width } = props;
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
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.25 1.5C12.5931 1.5 11.25 2.84315 11.25 4.5C11.25 6.15685 12.5931 7.5 14.25 7.5C15.9069 7.5 17.25 6.15685 17.25 4.5C17.25 2.84315 15.9069 1.5 14.25 1.5ZM12.375 4.5C12.375 3.46447 13.2145 2.625 14.25 2.625C15.2855 2.625 16.125 3.46447 16.125 4.5C16.125 5.53553 15.2855 6.375 14.25 6.375C13.2145 6.375 12.375 5.53553 12.375 4.5Z"
      />
      <Path
        fill={color}
        d="M10.0781 4.5C10.0781 3.67138 10.3197 2.89919 10.7363 2.25H3.5625C2.42341 2.25 1.5 3.17341 1.5 4.3125V12.1875C1.5 13.3266 2.42341 14.25 3.5625 14.25H6.48886C6.53291 14.25 6.57556 14.2655 6.60931 14.2938L8.1581 15.5921C8.64367 15.9991 9.35069 16.0011 9.8386 15.5969L11.4123 14.2931C11.446 14.2652 11.4883 14.25 11.5319 14.25H14.4375C15.5766 14.25 16.5 13.3266 16.5 12.1875V8.01373C15.8508 8.4303 15.0786 8.67188 14.25 8.67188C11.9459 8.67188 10.0781 6.80406 10.0781 4.5Z"
      />
    </Svg>
  );
};

export default NotificationIcon;
