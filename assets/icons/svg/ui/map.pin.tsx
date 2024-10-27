import React from "react";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "@/context/ThemeContext";
import { iconSizeModel } from "../model/iconModel";
import { StyleProp, ViewStyle } from "react-native";

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  size: "sm" | "md" | "lg" | "xl";
};

const MapPinIcon = (props: IconProps) => {
  const theme = useTheme();
  const sizeModel = iconSizeModel;
  const { color, size, style, height, width } = props;

  return (
    <Svg
      fill="none"
      viewBox="0 0 18 18"
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
      style={style}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color ?? "#424242"}
        d="M3 7.5C3 4.10187 5.68983 1.5 9 1.5C12.3102 1.5 15 4.10187 15 7.5C15 9.37093 14.144 11.1119 13.1196 12.5305C12.0922 13.9534 10.8687 15.0889 10.0733 15.757C9.44673 16.2832 8.55327 16.2832 7.92669 15.757C7.13134 15.0889 5.90782 13.9534 4.88035 12.5305C3.85602 11.1119 3 9.37093 3 7.5ZM6.93585 7.5C6.93585 6.36091 7.85926 5.4375 8.99835 5.4375C10.1374 5.4375 11.0609 6.36091 11.0609 7.5C11.0609 8.63909 10.1374 9.5625 8.99835 9.5625C7.85926 9.5625 6.93585 8.63909 6.93585 7.5Z"
      />
    </Svg>
  );
};

export default MapPinIcon;
