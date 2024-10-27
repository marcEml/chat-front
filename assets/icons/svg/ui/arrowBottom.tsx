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

const ArrowBottomIcon = (props: IconProps) => {
  const { color = "#737373", size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      style={style}
      viewBox="0 0 18 18"
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.13258 9.57191C9.05936 9.64514 8.94064 9.64514 8.86742 9.57191L6.39775 7.10224C6.17808 6.88257 5.82192 6.88257 5.60225 7.10224C5.38258 7.32191 5.38258 7.67807 5.60225 7.89774L8.07192 10.3674C8.58449 10.88 9.41551 10.88 9.92808 10.3674L12.3977 7.89774C12.6174 7.67807 12.6174 7.32191 12.3977 7.10224C12.1781 6.88257 11.8219 6.88257 11.6023 7.10224L9.13258 9.57191Z"
      />
    </Svg>
  );
};

export default ArrowBottomIcon;
