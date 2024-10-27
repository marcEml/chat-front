import { Text, TouchableOpacity, GestureResponderEvent, View } from "react-native";
import { typography } from "@/constants/typography";
import { useTheme } from "@/context/ThemeContext";
import React from "react";

type LinkProps = {
  label: String;
  textColor?: string;
  size: "sm" | "md";
  underline?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
};

const Link = (props: LinkProps) => {
  const { label, size, underline = false, textColor, onPress } = props;
  const { theme } = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={[
          underline
            ? size === "sm"
              ? typography.labelSmLink
              : typography.labelMdLink
            : size === "sm"
            ? typography.labelSmRegular
            : typography.labelMdRegular,
          { color: textColor ?? theme.colors.text.primary },
        ]}
      >
        {label} 
      </Text>
    </TouchableOpacity>
  );
};

export default Link;
