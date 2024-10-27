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

const UploadIcon = (props: IconProps) => {
  const { color, size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      style={style}
      viewBox="0 0 21 20"
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        fill={color ?? "#0F0F0F"}
        d="M5.3168 6.7702C6.17013 4.75125 8.16883 3.33331 10.5002 3.33331C13.4773 3.33331 15.9142 5.64616 16.1122 8.57308C18.1161 8.82299 19.6668 10.5325 19.6668 12.6041C19.6668 14.8478 17.848 16.6666 15.6043 16.6666H11.1252V11.3005L12.1416 12.3169C12.3856 12.561 12.7814 12.561 13.0254 12.3169C13.2695 12.0728 13.2695 11.6771 13.0254 11.433L10.9421 9.3497C10.698 9.10563 10.3023 9.10563 10.0582 9.3497L7.97489 11.433C7.73081 11.6771 7.73081 12.0728 7.97489 12.3169C8.21897 12.561 8.61469 12.561 8.85877 12.3169L9.87516 11.3005V16.6666H6.3335C3.57207 16.6666 1.3335 14.4281 1.3335 11.6666C1.3335 9.25338 3.04268 7.24019 5.3168 6.7702Z"
      />
    </Svg>
  );
};

export default UploadIcon;
