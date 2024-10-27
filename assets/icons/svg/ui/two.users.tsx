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

const TwoUsersIcon = (props: IconProps) => {
  const { color, size, style, height, width } = props;
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
        d="M2.33333 4.66667C2.33333 3.19391 3.52724 2 5 2C6.47276 2 7.66667 3.19391 7.66667 4.66667C7.66667 6.13943 6.47276 7.33333 5 7.33333C3.52724 7.33333 2.33333 6.13943 2.33333 4.66667Z"
        fill={color ?? "#007AFF"}
      />
      <Path
        d="M10.4614 11.7047C10.1435 10.4942 9.58009 9.48729 8.85547 8.71981C9.57287 8.24425 10.389 8 11.219 8C13.1899 8 15.0828 9.37732 15.7608 11.9587C16.0578 13.0897 15.1033 14 14.0741 14H9.95571C10.4511 13.4206 10.7029 12.6242 10.4614 11.7047Z"
        fill={color ?? "#007AFF"}
      />
      <Path
        d="M11 2C9.52724 2 8.33333 3.19391 8.33333 4.66667C8.33333 6.13943 9.52724 7.33333 11 7.33333C12.4728 7.33333 13.6667 6.13943 13.6667 4.66667C13.6667 3.19391 12.4728 2 11 2Z"
        fill={color ?? "#007AFF"}
      />
      <Path
        d="M4.95229 8C6.92322 8 8.8161 9.37732 9.49409 11.9587C9.79114 13.0897 8.83658 14 7.80738 14H2.09721C1.068 14 0.113442 13.0897 0.410498 11.9587C1.08848 9.37732 2.98137 8 4.95229 8Z"
        fill={color ?? "#007AFF"}
      />
    </Svg>
  );
};

export default TwoUsersIcon;
