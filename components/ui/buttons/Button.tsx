import {
  Text,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  GestureResponderEvent,
} from "react-native";

import React, { useMemo } from "react";
import Colors from "@/constants/colors";
import { Swing } from "react-native-animated-spinkit";

import { useTheme } from "@/context/ThemeContext";
import { typography } from "@/constants/typography";
import { LinearGradient } from "expo-linear-gradient";

import iconsMapping from "@/assets/icons/svg/mapping/iconsMapping";
import { useResponsive } from "@/helpers/responsive/metrix";

type ButtonProps = {
  full?: boolean;
  textColor?: string;
  leftIcon?: string;
  size: "md" | "lg";
  rightIcon?: string;
  iconColor?: string;
  disabled?: boolean;
  isLoading?: boolean;
  label: React.ReactNode;
  priority: "primary" | "secondary" | "tertiary";
  onPress?: (event: GestureResponderEvent) => void;
};

const Button = (props: ButtonProps) => {
  const {
    size,
    label,
    onPress,
    disabled,
    leftIcon,
    priority,
    textColor,
    iconColor,
    rightIcon,
    isLoading,
    full = false,
  } = props;

  const { theme } = useTheme();
  const IconLeftComponent = iconsMapping[leftIcon!];
  const IconRightComponent = iconsMapping[rightIcon!];

  const ButtonStyles = useMemo(() => createButtonStyles(full ?? false), [theme.colors]);

  const colorsPriority = useMemo(
    () => ({
      primary: [Colors.primitives.brand[500], Colors.primitives.brand[600]],
      secondary: [theme.colors.transparent.T50, theme.colors.transparent.T50],
      tertiary: ["transparent", "transparent"],
    }),
    [theme.colors]
  );

  const color =
    iconColor ||
    (textColor
      ? textColor
      : priority === "primary"
        ? Colors.primitives.neutral[0]
        : theme.colors.text.primary);

  const buttonStyles = useMemo(
    () =>
      [
        ButtonStyles.button,
        size === "md" && ButtonStyles.buttonSizeMedium,
        size === "lg" && ButtonStyles.buttonSizeLarge,
      ].filter(Boolean) as ViewStyle[],
    [size, ButtonStyles]
  );

  const gradientColors = disabled
    ? [theme.colors.background.tertiary, theme.colors.background.tertiary]
    : priority === "primary"
      ? colorsPriority.primary
      : priority === "secondary"
        ? colorsPriority.secondary
        : colorsPriority.tertiary;

  return (
    <TouchableOpacity disabled={disabled} activeOpacity={0.8} onPress={onPress}>
      <LinearGradient style={buttonStyles} colors={gradientColors}>
        {leftIcon && <IconLeftComponent color={color} size={size} />}

        {!isLoading ? (
          <Text
            style={[
              typography.labelMdMedium,
              {
                color: disabled ? theme.colors.text.disabled : color,
                textAlign: "center",
              },
            ]}
          >
            {label}
          </Text>
        ) : (
          // <ActivityIndicator size="small" color={disabled ? theme.colors.text.disabled : color} />
          <Swing size={20} color={disabled ? theme.colors.text.disabled : color} />
        )}

        {rightIcon && <IconRightComponent color={color} size={size} />}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const createButtonStyles = (full: boolean) => {
  return StyleSheet.create({
    button: {
      display: "flex",
      alignSelf: "center",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: full ? "100%" : "auto",
      gap: useResponsive.horizontalScale(8),
    },

    buttonSizeMedium: {
      borderRadius: 14,
      paddingVertical: useResponsive.verticalScale(12),
      paddingHorizontal: useResponsive.horizontalScale(24),
    },

    buttonSizeLarge: {
      borderRadius: 16,
      paddingVertical: useResponsive.verticalScale(16),
      paddingHorizontal: useResponsive.horizontalScale(32),
    },
  });
};

export default Button;
