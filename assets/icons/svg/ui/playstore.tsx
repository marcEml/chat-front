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

const PlayStoreIcon = (props: IconProps) => {
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
        d="M4.09133 1.6777C4.40157 1.63753 4.71616 1.70617 4.98124 1.87187L14.0194 6.9964L11.732 9.30556L4.09133 1.6777ZM3.39609 2.37115C3.3525 2.52212 3.33142 2.67866 3.33352 2.83575V17.1623C3.33142 17.3193 3.3525 17.4759 3.39609 17.6269L11.0438 9.99901L3.39609 2.37115ZM11.739 10.6924L4.09133 18.3203C4.40171 18.3641 4.71755 18.2952 4.98124 18.1261L14.0194 13.0016L11.739 10.6924ZM17.6625 9.06979L14.9232 7.51648L12.4203 9.99901L14.9163 12.4885L17.6555 10.9352C18.5593 10.422 18.5593 9.57601 17.6555 9.06286L17.6625 9.06979Z"
        fill={color ?? "white"}
      />
    </Svg>
  );
};

export default PlayStoreIcon;
