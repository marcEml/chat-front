import {
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import React, { useMemo, useState } from "react";
import Colors from "@/constants/colors";
import { useTheme } from "@/context/ThemeContext";
import { LinearGradient } from "expo-linear-gradient";
import iconsMapping from "@/assets/icons/svg/mapping/iconsMapping";
import { useResponsive } from "@/helpers/responsive/metrix";

type CheckboxProps = {
  state: "default" | "disabled";
  indeterminate: boolean;
  onPress?: (event: GestureResponderEvent) => void;
};

const Checkbox = (props: CheckboxProps) => {
  const { state, indeterminate, onPress } = props;
  const { theme } = useTheme();
  const [checked, setChecked] = useState(false);

  const RemoveIcon = iconsMapping["minus"];
  const CheckIcon = iconsMapping["check"];
  const CheckboxStyles = useMemo(() => createCheckStyles(theme.colors), [theme.colors]);

  const colorsPriority = {
    primary: [Colors.primitives.brand[400], Colors.primitives.brand[600]],
    secondary: [theme.colors.background.primary, theme.colors.background.primary],
    disabled: [theme.colors.background.secondary, theme.colors.background.secondary],
  };

  const handlePress = (event: GestureResponderEvent) => {
    setChecked((prev) => !prev);
    onPress && onPress(event);
  };

  const checkboxStyles: ViewStyle[] = [
    CheckboxStyles.box,
    state === "default" && CheckboxStyles.default,
    state === "disabled" && CheckboxStyles.disabled,
  ].filter(Boolean) as ViewStyle[];

  const gradientColors = useMemo(() => {
    if (state === "disabled") return colorsPriority.disabled;
    return checked ? colorsPriority.primary : colorsPriority.secondary;
  }, [state, checked, colorsPriority]);

  const iconColor = state === "disabled"
    ? theme.colors.icon.tertiary
    : Colors.primitives.neutral[0];

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.6}
      style={checkboxStyles}
      disabled={state === "disabled"}
    >
      <LinearGradient style={CheckboxStyles.gradient} colors={gradientColors}>
        {checked && (indeterminate ? (
          <RemoveIcon size={"sm"} color={iconColor} />
        ) : (
          <CheckIcon size={"sm"} color={iconColor} />
        ))}
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

    gradient: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: useResponsive.moderateScale(24),
    },

    default: {
      backgroundColor: theme.background.primary,
    },

    disabled: {
      backgroundColor: theme.background.secondary,
    },
  });
};

export default Checkbox;
