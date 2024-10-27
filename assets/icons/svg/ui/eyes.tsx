import React from "react";
import Svg, { Path, G } from "react-native-svg";import { iconSizeModel } from "../model/iconModel";
import { StyleProp, ViewStyle } from "react-native";

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  size: "sm" | "md" | "lg" | "xl";
};

const EyeIcon = (props: IconProps) => {
  const { color = "#22973F", size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      style={style}
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
      viewBox="0 0 18 18"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.00015 3C11.9095 3.00002 14.7436 4.7393 16.6362 8.06061C16.968 8.643 16.968 9.35702 16.6362 9.93942C14.7436 13.2607 11.9095 15 9.00015 14.9999C6.09082 14.9999 3.25674 13.2606 1.36414 9.93933C1.03227 9.35694 1.03227 8.64292 1.36414 8.06052C3.25674 4.73922 6.09082 2.99998 9.00015 3ZM6.28139 9C6.28139 7.49848 7.49862 6.28125 9.00014 6.28125C10.5017 6.28125 11.7189 7.49848 11.7189 9C11.7189 10.5015 10.5017 11.7188 9.00014 11.7188C7.49862 11.7188 6.28139 10.5015 6.28139 9Z"
        fill={color ?? "#A3A3A3"}
      />
    </Svg>
  );
};

export default EyeIcon;
