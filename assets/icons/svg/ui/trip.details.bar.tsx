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

const TripDetailsBarIcon = (props: IconProps) => {
  const { color = "#737373", size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      style={style}
      viewBox="0 0 18 76"
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        fill={color}
        d="M9 3.5C4.85786 3.5 1.5 6.85786 1.5 11C1.5 15.1421 4.85786 18.5 9 18.5C13.1421 18.5 16.5 15.1421 16.5 11C16.5 6.85786 13.1421 3.5 9 3.5Z"
      />
      <Path
        d={`M9 23L9 ${height ? height! - 18 : 53}`}
        stroke="#424242"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="2 2"
      />
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 63.5C3 60.1019 5.68983 57.5 9 57.5C12.3102 57.5 15 60.1019 15 63.5C15 65.3709 14.144 67.1119 13.1196 68.5305C12.0922 69.9534 10.8687 71.0889 10.0733 71.757C9.44673 72.2832 8.55327 72.2832 7.92669 71.757C7.13134 71.0889 5.90782 69.9534 4.88035 68.5305C3.85602 67.1119 3 65.3709 3 63.5ZM6.93585 63.5C6.93585 62.3609 7.85926 61.4375 8.99835 61.4375C10.1374 61.4375 11.0609 62.3609 11.0609 63.5C11.0609 64.6391 10.1374 65.5625 8.99835 65.5625C7.85926 65.5625 6.93585 64.6391 6.93585 63.5Z"
      />
    </Svg>
  );
};

export default TripDetailsBarIcon;
