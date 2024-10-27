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

const CheckMarkIcon = (props: IconProps) => {
  const { color = "white", size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      viewBox="0 0 16 16"
      style={style}
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4949 1.99634C14.8651 2.26974 14.9436 2.79151 14.6702 3.16174L6.67023 13.9951C6.53606 14.1768 6.33388 14.2962 6.11 14.3261C5.88612 14.3559 5.65971 14.2936 5.48262 14.1534L1.48262 10.9867C1.12177 10.7011 1.06083 10.177 1.3465 9.81611C1.63217 9.45527 2.15628 9.39432 2.51712 9.68L5.84145 12.3118L13.3295 2.17166C13.6029 1.80143 14.1247 1.72294 14.4949 1.99634Z"
      />
    </Svg>
  );
};

export default CheckMarkIcon;
