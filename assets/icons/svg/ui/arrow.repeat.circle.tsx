import React from "react";
import Svg, { Path } from "react-native-svg";import { iconSizeModel } from "../model/iconModel";
import { StyleProp, ViewStyle } from "react-native";

type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  size: "sm" | "md" | "lg" | "xl";
};

const ArrowRepeatCircleIcon = (props: IconProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        fillOpacity="0.95"
        fill={color || "#fff"}
        d="M8.50042 0.824721C8.7353 0.571777 9.13075 0.55713 9.3837 0.792007L12.3004 3.50034C12.4277 3.6186 12.5001 3.78454 12.5001 3.95834C12.5001 4.13213 12.4277 4.29807 12.3004 4.41633L9.3837 7.12467C9.13075 7.35954 8.7353 7.3449 8.50042 7.09195C8.26554 6.83901 8.28019 6.44355 8.53313 6.20867L10.2835 4.58334H8.33341C5.34187 4.58334 2.91675 7.00846 2.91675 10C2.91675 11.6327 3.63831 13.0961 4.78205 14.0901C5.04258 14.3166 5.07023 14.7113 4.8438 14.9718C4.61737 15.2324 4.2226 15.26 3.96207 15.0336C2.55679 13.8122 1.66675 12.0097 1.66675 10C1.66675 6.3181 4.65152 3.33334 8.33341 3.33334H10.2835L8.53313 1.708C8.28019 1.47312 8.26554 1.07766 8.50042 0.824721ZM15.1572 5.02877C15.3837 4.76828 15.7785 4.74071 16.039 4.96718C17.4437 6.18851 18.3334 7.99072 18.3334 10C18.3334 13.6819 15.3486 16.6667 11.6667 16.6667H9.71667L11.467 18.292C11.72 18.5269 11.7346 18.9223 11.4997 19.1753C11.2649 19.4282 10.8694 19.4429 10.6165 19.208L7.6998 16.4997C7.57245 16.3814 7.50008 16.2155 7.50008 16.0417C7.50008 15.8679 7.57245 15.7019 7.6998 15.5837L10.6165 12.8753C10.8694 12.6405 11.2649 12.6551 11.4997 12.9081C11.7346 13.161 11.72 13.5565 11.467 13.7913L9.71667 15.4167H11.6667C14.6583 15.4167 17.0834 12.9915 17.0834 10C17.0834 8.36768 16.3622 6.90454 15.2188 5.91051C14.9583 5.68403 14.9308 5.28927 15.1572 5.02877Z"
      />
    </Svg>
  );
};

export default ArrowRepeatCircleIcon;
