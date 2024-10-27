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

const DollarIcon = (props: IconProps) => {
  const { color, size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      viewBox="0 0 18 18"
      style={style}
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color ?? "#D6D6D6"}
        d="M1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9ZM9 4.19792C9.31066 4.19792 9.5625 4.44976 9.5625 4.76042V5.40794C10.205 5.53265 10.7714 5.86873 11.1251 6.3579C11.3071 6.60965 11.2506 6.96129 10.9989 7.14332C10.7471 7.32535 10.3955 7.26884 10.2135 7.0171C10.0012 6.72354 9.56033 6.47917 9 6.47917H8.78588C8.02688 6.47917 7.63542 6.95151 7.63542 7.28704V7.34587C7.63542 7.60314 7.82263 7.92322 8.26938 8.10192L10.1484 8.85354C10.9122 9.15904 11.4896 9.82871 11.4896 10.6541C11.4896 11.719 10.5802 12.4515 9.5625 12.6125V13.2396C9.5625 13.5502 9.31066 13.8021 9 13.8021C8.68934 13.8021 8.4375 13.5502 8.4375 13.2396V12.5921C7.79501 12.4673 7.22862 12.1313 6.87491 11.6421C6.69287 11.3904 6.74939 11.0387 7.00113 10.8567C7.25287 10.6746 7.60451 10.7312 7.78655 10.9829C7.99881 11.2765 8.43967 11.5208 9 11.5208H9.14058C9.9402 11.5208 10.3646 11.0222 10.3646 10.6541C10.3646 10.3969 10.1774 10.0768 9.73062 9.89808L7.85156 9.14646C7.08783 8.84097 6.51042 8.17129 6.51042 7.34587V7.28704C6.51042 6.22997 7.43006 5.51376 8.4375 5.37772V4.76042C8.4375 4.44976 8.68934 4.19792 9 4.19792Z"
      />
    </Svg>
  );
};

export default DollarIcon;
