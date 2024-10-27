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

const CalendarPending = (props: IconProps) => {
  const { color = "#737373", size, style, height, width } = props;
  const sizeModel = iconSizeModel;

  return (
    <Svg
      fill="none"
      viewBox="0 0 16 14"
      style={style}
      width={width ?? sizeModel[size].width}
      height={height ?? sizeModel[size].height}
    >
      <Path
        fill={color}
        d="M1.67852 1.24942C0.573912 1.44418 -0.163603 2.49748 0.0312065 3.60203L0.212872 4.63231L6.35042 3.55009C7.48952 2.38945 9.07598 1.66949 10.8307 1.66949C10.8667 1.66949 10.9027 1.66979 10.9386 1.67039C10.7401 0.570354 9.68929 -0.163093 8.58741 0.0311924L1.67852 1.24942Z"
      />
      <Path
        fill={color}
        d="M5.37068 4.84765C4.85064 5.76191 4.55363 6.81956 4.55363 7.94654C4.55363 9.09266 4.86083 10.1671 5.39734 11.0919L3.47375 11.431C2.36922 11.6258 1.31593 10.8883 1.12119 9.78372L0.405167 5.72321L5.37068 4.84765Z"
      />
      <Path
        fill={color}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.66134 7.94655C5.66134 5.0916 7.97572 2.77721 10.8307 2.77721C13.6856 2.77721 16 5.0916 16 7.94655C16 10.8015 13.6856 13.1159 10.8307 13.1159C7.97572 13.1159 5.66134 10.8015 5.66134 7.94655ZM10.8307 5.73112C11.1365 5.73112 11.3845 5.9791 11.3845 6.28498V7.7171L12.6992 9.03189C12.9155 9.24819 12.9155 9.59881 12.6992 9.81511C12.4829 10.0314 12.1323 10.0314 11.916 9.81511L10.4391 8.33816C10.3352 8.23433 10.2768 8.09343 10.2768 7.94655V6.28498C10.2768 5.9791 10.5248 5.73112 10.8307 5.73112Z"
      />
    </Svg>
  );
};

export default CalendarPending;
