import React, { useMemo } from "react";
import {
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  GestureResponderEvent,
} from "react-native";
import Colors from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { LinearGradient } from "expo-linear-gradient";
import iconsMapping from "@/assets/icons/svg/mapping/iconsMapping";
import { useResponsive } from "@/helpers/responsive/metrix";

type IconButtonProps = {
  icon: string;
  iconColor?: string;
  disabled?: boolean;
  isLoading?: boolean;
  size: "sm" | "md" | "lg";
  priority: "primary" | "secondary" | "tertiary";
  onPress?: (event: GestureResponderEvent) => void;
};

const IconButton = (props: IconButtonProps) => {
  const { priority, iconColor, disabled, isLoading, size, icon, onPress } = props;

  const { theme } = useTheme();
  const IconComponent = iconsMapping[icon];
  const ButtonStyles = useMemo(() => createIconButtonStyles(), [theme.colors]);

  const color = iconColor
    ? iconColor
    : priority === "primary"
      ? Colors.primitives.neutral[0]
      : theme.colors.text.primary;

  const colorsPriority = useMemo(
    () => ({
      primary: [Colors.primitives.brand[500], Colors.primitives.brand[600]],
      secondary: [theme.colors.transparent.T50, theme.colors.transparent.T50],
      tertiary: ["transparent", "transparent"],
    }),
    [theme.colors]
  );

  const iconButtonStyles = useMemo(
    () =>
      [
        ButtonStyles.button,
        size === "sm" && ButtonStyles.buttonSizeSmall,
        size === "md" && ButtonStyles.buttonSizeMedium,
        size === "lg" && ButtonStyles.buttonSizeLarge,
      ].filter(Boolean) as ViewStyle[],
    [size, ButtonStyles]
  );

  return (
    <TouchableOpacity disabled={disabled} activeOpacity={0.8} onPress={onPress}>
      <LinearGradient
        style={iconButtonStyles}
        colors={
          disabled
            ? ["transparent", "transparent"]
            : priority === "primary"
              ? colorsPriority.primary
              : priority === "secondary"
                ? colorsPriority.secondary
                : colorsPriority.tertiary
        }
      >
        {!isLoading && IconComponent && <IconComponent color={color} size={size} />}
        {isLoading && (
          <ActivityIndicator size="small" color={disabled ? theme.colors.text.disabled : color} />
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const createIconButtonStyles = () =>
  StyleSheet.create({
    button: {
      borderRadius: 999,
      alignSelf: "center",
      gap: useResponsive.verticalScale(10),
    } as ViewStyle,

    buttonSizeSmall: {
      paddingVertical: useResponsive.horizontalScale(10),
      paddingHorizontal: useResponsive.horizontalScale(10),
    },

    buttonSizeMedium: {
      paddingVertical: useResponsive.verticalScale(12),
      paddingHorizontal: useResponsive.horizontalScale(12),
    },

    buttonSizeLarge: {
      paddingVertical: useResponsive.verticalScale(16),
      paddingHorizontal: useResponsive.verticalScale(16),
    },
  });

export default IconButton;
