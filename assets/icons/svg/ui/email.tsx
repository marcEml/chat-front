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

const EmailIcon = (props: IconProps) => {
  const { color, size, style, height, width } = props;
const sizeModel = iconSizeModel;

  return (
    <Svg
      style={style}
width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
      viewBox="0 0 21 20"
      fill="none"
    >
      <Path
        d="M4.45829 3.3335C3.19264 3.3335 2.16663 4.35951 2.16663 5.62516V5.65798L10.0317 9.61551C10.3263 9.76372 10.6736 9.76372 10.9682 9.61551L18.8333 5.65798V5.62516C18.8333 4.35951 17.8073 3.3335 16.5416 3.3335H4.45829Z"
        fill={color ?? "white"}
      />

      <Path
        d="M18.8333 7.0573L11.53 10.7321C10.882 11.0582 10.1179 11.0582 9.46989 10.7321L2.16663 7.0573V14.3752C2.16663 15.6408 3.19264 16.6668 4.45829 16.6668H16.5416C17.8073 16.6668 18.8333 15.6408 18.8333 14.3752V7.0573Z"
        fill={color ?? "white"}
      />

    </Svg>
  );
};

export default EmailIcon;
