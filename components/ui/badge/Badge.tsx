import { View, Text, ViewStyle, StyleSheet } from "react-native";
import iconsMapping from "@/assets/icons/svg/mapping/iconsMapping";
import { typography } from "@/constants/typography";
import React, { useMemo } from "react";
import { useTheme } from "@/context/ThemeContext";
import Colors from "@/constants/colors";
import { useResponsive } from "@/helpers/responsive/metrix";

type BadgeProps = {
  text: string;
  label: string;
  iconName: string;
  size: "sm" | "md" | "lg";
  priority: "primary" | "secondary" | "tertiary";
  status: "neutral" | "info" | "success" | "warning" | "critical" | "brand";
};

const Badge = ({
  label,
  text,
  iconName,
  size,
  status,
  priority,
}: BadgeProps) => {
  const { theme } = useTheme();
  const IconComponent = iconsMapping[iconName];

  const color = useMemo(() => getColor(status, theme.colors), [status, theme]);
  const badgeStyles = useMemo(
    () => createBadgeStyles(theme.colors, priority),
    [theme.colors, priority]
  );

  const textStyle = [
    size === "sm"
      ? typography.labelSmMedium
      : size === "md"
        ? typography.labelMdMedium
        : typography.labelLgMedium,
    { color },
  ];

  return (
    <View style={badgeStyles.badge}>
      <View style={badgeStyles.leftSide}>
        {IconComponent && <IconComponent color={color} size={size} />}
        <Text style={textStyle}>{label}</Text>
      </View>
      <View style={badgeStyles.divider}></View>
      <View style={badgeStyles.leftSide}>
        <Text
          style={[
            size === "sm"
              ? typography.labelSmMedium
              : size === "md"
                ? typography.labelMdMedium
                : typography.labelLgMedium,
            { color: theme.colors.text.tertiary },
          ]}
        >
          {text}
        </Text>
      </View>
    </View>
  );
};

const getColor = (
  status: string,
  theme: typeof Colors.light & typeof Colors.dark
): string => {
  switch (status) {
    case "neutral":
      return theme.icon.tertiary;
    case "info":
      return theme.icon.info;
    case "success":
      return theme.icon.success;
    case "warning":
      return theme.icon.warning;
    case "critical":
      return theme.icon.critical;
    case "brand":
      return theme.icon.brand;
    default:
      return theme.icon.tertiary;
  }
};

const createBadgeStyles = (
  theme: typeof Colors.light & typeof Colors.dark,
  priority: string
) => {
  return StyleSheet.create({
    badge: {
      display: "flex",
      alignSelf: "center",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: useResponsive.horizontalScale(8),
      borderRadius: useResponsive.moderateScale(10),
      paddingVertical: useResponsive.verticalScale(6),
      paddingHorizontal: useResponsive.horizontalScale(10),
      backgroundColor: priority === "primary" ? theme.background.secondary : "transparent",
    } as ViewStyle,

    leftSide: {
      display: "flex",
      alignSelf: "center",
      flexDirection: "row",
      alignItems: "center",
      gap: useResponsive.horizontalScale(4),
    } as ViewStyle,

    divider: {
      height: "60%",
      backgroundColor: theme.border.emphasize,
      width: useResponsive.horizontalScale(1.5),
      borderRadius: useResponsive.moderateScale(10),
    } as ViewStyle,
  });
};

export default Badge;