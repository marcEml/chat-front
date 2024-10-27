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

const ToastCriticalIcon = (props: IconProps) => {
  const { color, size, style, height, width } = props;
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
        d="M1.66667 10.0001C1.66667 5.39771 5.39763 1.66675 10 1.66675C14.6024 1.66675 18.3333 5.39771 18.3333 10.0001C18.3333 14.6025 14.6024 18.3334 10 18.3334C5.39763 18.3334 1.66667 14.6025 1.66667 10.0001ZM7.94194 7.05814C7.69786 6.81406 7.30214 6.81406 7.05806 7.05814C6.81398 7.30222 6.81398 7.69795 7.05806 7.94202L9.11612 10.0001L7.05806 12.0581C6.81398 12.3022 6.81398 12.6979 7.05806 12.942C7.30214 13.1861 7.69786 13.1861 7.94194 12.942L10 10.884L12.0581 12.942C12.3021 13.1861 12.6979 13.1861 12.9419 12.942C13.186 12.6979 13.186 12.3022 12.9419 12.0581L10.8839 10.0001L12.9419 7.94202C13.186 7.69795 13.186 7.30222 12.9419 7.05814C12.6979 6.81406 12.3021 6.81406 12.0581 7.05814L10 9.1162L7.94194 7.05814Z"
      />
    </Svg>
  );
};

export default ToastCriticalIcon;
