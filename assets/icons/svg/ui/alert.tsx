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

const AlertIcon = (props: IconProps) => {
  const { color = "#FFDB0D", size, style, height, width } = props;
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
        d="M7.22714 2.44347C8.02659 1.09892 9.97326 1.09892 10.7727 2.44346L16.3857 11.8835C17.2032 13.2583 16.2124 15.0001 14.6129 15.0001H3.38695C1.78745 15.0001 0.79669 13.2583 1.61416 11.8835L7.22714 2.44347ZM9 6.00006C9.31066 6.00006 9.5625 6.2519 9.5625 6.56256V9.56256C9.5625 9.87322 9.31066 10.1251 9 10.1251C8.68934 10.1251 8.4375 9.87322 8.4375 9.56256V6.56256C8.4375 6.2519 8.68934 6.00006 9 6.00006ZM9.75 11.6251C9.75 12.0393 9.41421 12.3751 9 12.3751C8.58579 12.3751 8.25 12.0393 8.25 11.6251C8.25 11.2108 8.58579 10.8751 9 10.8751C9.41421 10.8751 9.75 11.2108 9.75 11.6251Z"
      />
    </Svg>
  );
};

export default AlertIcon;
