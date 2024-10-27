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

const NoteTextIcon = (props: IconProps) => {
  const { color = "#737373", size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      style={style}
      viewBox="0 0 20 20"
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 4.3125C2.25 3.17341 3.17341 2.25 4.3125 2.25H13.6875C14.8266 2.25 15.75 3.17341 15.75 4.3125V10.875H12.9375C11.7984 10.875 10.875 11.7984 10.875 12.9375V15.75H4.3125C3.17341 15.75 2.25 14.8266 2.25 13.6875V4.3125ZM6 6.5625C6 6.25184 6.25184 6 6.5625 6H11.4375C11.7482 6 12 6.25184 12 6.5625C12 6.87316 11.7482 7.125 11.4375 7.125H6.5625C6.25184 7.125 6 6.87316 6 6.5625ZM6.5625 9C6.25184 9 6 9.25184 6 9.5625C6 9.87316 6.25184 10.125 6.5625 10.125H8.4375C8.74816 10.125 9 9.87316 9 9.5625C9 9.25184 8.74816 9 8.4375 9H6.5625Z"
      />
      <Path
        fill={color}
        d="M12 15.6542C12.3129 15.5553 12.6007 15.3823 12.8371 15.1459L15.1459 12.8371C15.3823 12.6007 15.5553 12.3129 15.6542 12H12.9375C12.4197 12 12 12.4197 12 12.9375V15.6542Z"
      />
    </Svg>
  );
};

export default NoteTextIcon;
