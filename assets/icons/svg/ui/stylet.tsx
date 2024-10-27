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

const StyletIcon = (props: IconProps) => {
  const { color = "white", size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      style={style}
      viewBox="0 0 16 14"
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        d="M3.22705 13.6143L4.56348 12.2778H15.2051C15.3877 12.2778 15.5426 12.3442 15.6699 12.4771C15.8027 12.6099 15.8691 12.7676 15.8691 12.9502C15.8691 13.1328 15.8027 13.2878 15.6699 13.415C15.5426 13.5479 15.3877 13.6143 15.2051 13.6143H3.22705ZM2.39697 12.8506L0.479492 13.5894C0.379883 13.6281 0.288574 13.6032 0.205566 13.5146C0.128092 13.4316 0.108724 13.3403 0.147461 13.2407L0.936035 11.3896L10.0005 2.3418L11.4531 3.80273L2.39697 12.8506ZM12.1836 3.08887L10.7144 1.62793L11.5527 0.797852C11.763 0.593099 11.9761 0.482422 12.1919 0.46582C12.4132 0.449219 12.618 0.534993 12.8062 0.723145L13.0884 1.00537C13.2821 1.19906 13.3734 1.40381 13.3623 1.61963C13.3512 1.83545 13.2378 2.05127 13.022 2.26709L12.1836 3.08887Z"
        fill={color}
      />
    </Svg>
  );
};

export default StyletIcon;
