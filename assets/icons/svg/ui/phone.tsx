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

const PhoneIcon = (props: IconProps) => {
  const { color, size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      style={style}
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        d="M4.79167 2.5C3.52601 2.5 2.5 3.52601 2.5 4.79167V4.84375C2.5 11.8336 8.1664 17.5 15.1562 17.5H15.2083C16.474 17.5 17.5 16.474 17.5 15.2083V13.6082C17.5 12.7402 17.0096 11.9466 16.2332 11.5585L14.5685 10.7261C13.8194 10.3515 12.9146 10.4984 12.3224 11.0906C12.1155 11.2975 11.8376 11.3352 11.6365 11.2334C10.3245 10.5694 9.43064 9.67553 8.76655 8.36352C8.66476 8.16241 8.70249 7.88452 8.90938 7.67763C9.50163 7.08538 9.64845 6.18061 9.27388 5.43147L8.44155 3.7668C8.05336 2.99042 7.25984 2.5 6.39182 2.5H4.79167Z"
        fill={color ?? "white"}
      />
    </Svg>
  );
};

export default PhoneIcon;
