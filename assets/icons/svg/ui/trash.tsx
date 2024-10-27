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

const TrashIcon = (props: IconProps) => {
  const { color = "#fff", size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      viewBox="0 0 17 16"
      style={style}
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        fillOpacity="0.95"
        d="M5.55599 3.33331C6.0205 2.16198 7.16329 1.33331 8.50066 1.33331C9.83804 1.33331 10.9808 2.16198 11.4453 3.33331H14.6667C14.9429 3.33331 15.1667 3.55717 15.1667 3.83331C15.1667 4.10946 14.9429 4.33331 14.6667 4.33331H13.8022L13.2462 12.9513C13.1839 13.916 12.3833 14.6666 11.4166 14.6666H5.58346C4.61676 14.6666 3.81617 13.916 3.75393 12.9513L3.19793 4.33331H2.33337C2.05723 4.33331 1.83337 4.10946 1.83337 3.83331C1.83337 3.55717 2.05723 3.33331 2.33337 3.33331H5.55599ZM6.67445 3.33331C7.05961 2.73181 7.73396 2.33331 8.50066 2.33331C9.26737 2.33331 9.94172 2.73181 10.3269 3.33331H6.67445ZM7.50004 7.16665C7.50004 6.8905 7.27618 6.66665 7.00004 6.66665C6.7239 6.66665 6.50004 6.8905 6.50004 7.16665V10.8333C6.50004 11.1095 6.7239 11.3333 7.00004 11.3333C7.27618 11.3333 7.50004 11.1095 7.50004 10.8333V7.16665ZM10 6.66665C10.2762 6.66665 10.5 6.8905 10.5 7.16665V10.8333C10.5 11.1095 10.2762 11.3333 10 11.3333C9.7239 11.3333 9.50004 11.1095 9.50004 10.8333V7.16665C9.50004 6.8905 9.7239 6.66665 10 6.66665Z"
      />
    </Svg>
  );
};

export default TrashIcon;
