import {
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import Colors from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { LinearGradient } from "expo-linear-gradient";
import iconsMapping from "@/assets/icons/svg/mapping/iconsMapping";
import { useResponsive } from "@/helpers/responsive/metrix";

type RadioProps = {
  state: "default" | "disabled" | "active";
  onPress?: (event: GestureResponderEvent) => void;
};

const RadioButton = (props: RadioProps) => {
  const { state, onPress } = props;

  const { theme } = useTheme();
  const CheckIcon = iconsMapping["radio"];

  const RadioStyles = createCheckStyles(theme.colors);

  const colorsPriority = {
    primary: [Colors.primitives.brand[400], Colors.primitives.brand[600]],
    secondary: [
      theme.colors.background.primary,
      theme.colors.background.primary,
    ],
    disabled: [
      theme.colors.background.secondary,
      theme.colors.background.secondary,
    ],
  };

  const radioStyles: ViewStyle[] = [
    RadioStyles.box,
    state === "default" && RadioStyles.default,
    state === "disabled" && RadioStyles.disabled,
    state === "active" && RadioStyles.active,
  ].filter(Boolean) as ViewStyle[];

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={radioStyles}
      disabled={state === "disabled"}
    >
      <LinearGradient
        style={RadioStyles.gradiant}
        colors={
          state === "disabled"
            ? colorsPriority.disabled
            : state === "active"
              ? colorsPriority.primary
              : colorsPriority.secondary
        }
      >
        {state !== "default" && (
          <CheckIcon
            size={"sm"}
            color={
              state === "active"
                ? Colors.primitives.neutral[0]
                : theme.colors.icon.tertiary
            }
          />
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const createCheckStyles = (theme: typeof Colors.light & typeof Colors.dark) => {
  return StyleSheet.create({
    box: {
      alignSelf: "center",
      borderColor: theme.border.emphasize,
      height: useResponsive.verticalScale(24),
      width: useResponsive.horizontalScale(24),
      borderWidth: useResponsive.horizontalScale(1),
      borderRadius: useResponsive.moderateScale(24),
    } as ViewStyle,

    gradiant: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignSelf: "center",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      borderRadius: useResponsive.moderateScale(24),
    },

    default: {
      backgroundColor: theme.background.primary,
    },

    disabled: {
      backgroundColor: theme.background.secondary,
    },

    active: {
      backgroundColor: theme.background.primary,
      borderColor: theme.brand.primary,
    },
  });
};

export default RadioButton;
