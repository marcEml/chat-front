import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { iconSizeModel } from "../model/iconModel";
import { StyleProp, ViewStyle } from "react-native";

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  size: "sm" | "md" | "lg" | "xl";
};

const EditIcon = (props: IconProps) => {
  const { color = "#22973F", size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      viewBox="0 0 24 24"
      style={style}
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        d="M15.5555 2.88358C16.6294 1.80964 18.3706 1.80964 19.4445 2.88358L21.1161 4.55515C22.1901 5.6291 22.1901 7.3703 21.1161 8.44424L18.8105 10.7498L13.25 5.18934L12.1893 6.25L17.7498 11.8105L8.36612 21.1942C7.85039 21.71 7.15092 21.9997 6.42157 21.9997H2.75C2.33579 21.9997 2 21.6639 2 21.2497V17.5781C2 16.8488 2.28973 16.1493 2.80546 15.6336L15.5555 2.88358Z"
        fill={color ?? "white"}
      />
    </Svg>
  );
};

export default EditIcon;
