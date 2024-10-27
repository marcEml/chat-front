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

const PostCardIcon = (props: IconProps) => {
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
        fill={color ?? "#737373"}
        d="M1.66675 5.62501C1.66675 4.35936 2.69276 3.33334 3.95841 3.33334H16.0417C17.3074 3.33334 18.3334 4.35936 18.3334 5.62501V14.375C18.3334 15.6407 17.3074 16.6667 16.0417 16.6667H3.95841C2.69276 16.6667 1.66675 15.6407 1.66675 14.375V5.62501ZM5.00008 8.12501C5.00008 7.77983 5.2799 7.50001 5.62508 7.50001H9.37508C9.72026 7.50001 10.0001 7.77983 10.0001 8.12501C10.0001 8.47019 9.72026 8.75001 9.37508 8.75001H5.62508C5.2799 8.75001 5.00008 8.47019 5.00008 8.12501ZM11.6667 8.12501C11.6667 7.77983 11.9466 7.50001 12.2917 7.50001H14.3751C14.7203 7.50001 15.0001 7.77983 15.0001 8.12501V11.0417C15.0001 11.3869 14.7203 11.6667 14.3751 11.6667H12.2917C11.9466 11.6667 11.6667 11.3869 11.6667 11.0417V8.12501ZM5.00008 10.625C5.00008 10.2798 5.2799 10 5.62508 10H7.72508C8.07026 10 8.35008 10.2798 8.35008 10.625C8.35008 10.9702 8.07026 11.25 7.72508 11.25H5.62508C5.2799 11.25 5.00008 10.9702 5.00008 10.625Z"
      />
    </Svg>
  );
};

export default PostCardIcon;
